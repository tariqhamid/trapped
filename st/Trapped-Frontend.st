Smalltalk current createPackage: 'Trapped-Frontend'!
Object subclass: #TrappedDataCarrier
	instanceVariableNames: 'target model chain source'
	package: 'Trapped-Frontend'!

!TrappedDataCarrier methodsFor: 'accessing'!

chain: aProcessingChain
	chain := aProcessingChain
!

source
	^source
!

source: anObject
	source := anObject
!

target
	^target
!

target: anObject
	target := anObject
!

value
	^model
!

value: anObject
	model := anObject
!

value: anObject whenDifferentFrom: anotherObject
	anObject = anotherObject ifFalse: [ self value: anObject ]
! !

!TrappedDataCarrier methodsFor: 'converting'!

falseAsNilValue
	| value |
	value := self value.
	value = false ifTrue: [ ^nil ] ifFalse: [ ^value ]
! !

!TrappedDataCarrier methodsFor: 'initialization'!

initialize
	super initialize.
	model := true
! !

!TrappedDataCarrier class methodsFor: 'not yet classified'!

on: aProcessingChain target: anObject
	^self new
		chain: aProcessingChain;
		target: anObject;
		yourself
! !

TrappedDataCarrier subclass: #TrappedDataCarrierToModel
	instanceVariableNames: 'index'
	package: 'Trapped-Frontend'!

!TrappedDataCarrierToModel methodsFor: 'not yet classified'!

proceed
	index := index ifNil: [ chain lastProcessorNo ] ifNotNil: [ index - 1 ].
	(chain processorNo: index) toModel: self
! !

TrappedDataCarrier subclass: #TrappedDataCarrierToView
	instanceVariableNames: 'index'
	package: 'Trapped-Frontend'!

!TrappedDataCarrierToView methodsFor: 'not yet classified'!

proceed
	index := index ifNil: [ chain firstProcessorNo ] ifNotNil: [ index + 1 ].
	(chain processorNo: index) toView: self
! !

Object subclass: #TrappedProcessingChain
	instanceVariableNames: 'processors'
	package: 'Trapped-Frontend'!

!TrappedProcessingChain methodsFor: 'accessing'!

firstProcessorNo
	^1
!

lastProcessorNo
	^processors size
!

processorNo: aNumber
	^processors at: aNumber
!

processors: anArray
	processors := anArray
! !

!TrappedProcessingChain methodsFor: 'action'!

forSnapshot: aSnapshot andBrush: aTagBrush
	| toViewCarrier toModelCarrier |
	toViewCarrier := TrappedDataCarrierToView on: self target: aTagBrush.
	toModelCarrier := TrappedDataCarrierToModel on: self target: aSnapshot.
	processors do: [ :each | each installToView: toViewCarrier toModel: toModelCarrier ].
	toViewCarrier source: aSnapshot.
	toModelCarrier source: aTagBrush.
	toViewCarrier value = true ifTrue: [ toViewCarrier copy proceed ]
! !

!TrappedProcessingChain class methodsFor: 'instance creation'!

new: anArray
	(anArray anySatisfy: [ :each | each isExpectingModelData ])
		ifFalse: [ anArray add: self dataTerminator ]
		ifTrue: [ anArray addFirst: self blackboardReaderWriter ].
	^self new
		processors: anArray;
		yourself
!

newFromProcessorSpecs: anArray
	^self new: ((anArray ifEmpty: [ #(contents) ]) collect: [ :each | each asTrapProcSendTo: TrappedProcessor ])
! !

!TrappedProcessingChain class methodsFor: 'private'!

blackboardReaderWriter
	^TrappedProcessorBlackboard new
!

dataTerminator
	^TrappedProcessorTerminator new
! !

Object subclass: #TrappedProcessor
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessor commentStamp!
I am a processing step in TrappedProcessingChain.
I am stateless flyweight (aka servant)
and will get all necessary data as arguments in API calls.

My public API is:
 - installToView:toModel:
   This gets two TrappedDataCarriers set up without actual data
   and at the beginning of their chains. It should do one-time
   installation task needed (install event handlers etc.).
   To start a chain, do: dataCarrier copy value: data; proceed.
 - toView:
   This performs transformation of TrappedDataCarrier on its way from model to view.
   Should call aDataCarrier proceed to proceed to subsequent step.
 - toModel:
   This performs transformation of TrappedDataCarrier on its way from view to model.
   Should call aDataCarrier proceed to proceed to subsequent step.!

!TrappedProcessor methodsFor: 'data transformation'!

toModel: aDataCarrier
	"by default, proceed"
	aDataCarrier proceed
!

toView: aDataCarrier
	"by default, proceed"
	aDataCarrier proceed
! !

!TrappedProcessor methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	"by default, do nothing"
! !

!TrappedProcessor methodsFor: 'testing'!

isExpectingModelData
	^false
! !

!TrappedProcessor class methodsFor: 'factory'!

contents
	^TrappedProcessorContents new
! !

TrappedProcessor subclass: #TrappedDataExpectingProcessor
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedDataExpectingProcessor commentStamp!
I answer true to isExpectingModelData and serve as a base class
for processor that present / change model data.

When at least one of my instances is present in the chain,
automatic databinding processor is added at the beginning
(the data-binding scenario); otherwise, the chain
is run immediately with true as data (run-once scenario).!

!TrappedDataExpectingProcessor methodsFor: 'testing'!

isExpectingModelData
	^true
! !

TrappedDataExpectingProcessor subclass: #TrappedProcessorContents
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorContents commentStamp!
I put data into target via contents: in toView:!

!TrappedProcessorContents methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier toTargetContents
! !

TrappedProcessor subclass: #TrappedProcessorBlackboard
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorBlackboard commentStamp!
I am used internally to fetch data from blackboard
or write it back.

I am added to the beginning of the chain
when the chain contains at least one element
that isExpectingModelData (see TrappedDataExpectingProcessor).!

!TrappedProcessorBlackboard methodsFor: 'data transformation'!

toModel: aDataCarrier
	aDataCarrier modifyTarget
! !

!TrappedProcessorBlackboard methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	| snap |
	snap := anotherDataCarrier target.
	snap watch: [ :data |
		(aDataCarrier target asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].
        snap do: [ aDataCarrier copy value: data; proceed ] ].
	aDataCarrier value: false
! !

TrappedProcessor subclass: #TrappedProcessorTerminator
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorTerminator commentStamp!
I do not proceed in toView:.

I am added automatically to end of chain when it does not contain
any element that isExpectingModelData (see TrappedDataExpectingProcessor).!

!TrappedProcessorTerminator methodsFor: 'data transformation'!

toView: aDataCarrier
	"stop"
! !

Object subclass: #TrappedSingleton
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedSingleton methodsFor: 'action'!

start: args
	^ self subclassResponsibility
! !

TrappedSingleton class instanceVariableNames: 'current'!

!TrappedSingleton class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
! !

!TrappedSingleton class methodsFor: 'action'!

start: args
	self current start: args
! !

TrappedSingleton subclass: #Trapped
	instanceVariableNames: 'registry'
	package: 'Trapped-Frontend'!

!Trapped methodsFor: 'accessing'!

byName: aString
	^ registry at: aString
!

register: aListKeyedEntity
	self register: aListKeyedEntity name: aListKeyedEntity class name
!

register: aListKeyedEntity name: aString
	registry at: aString put: aListKeyedEntity
! !

!Trapped methodsFor: 'action'!

start: args
	args do: [ :each | self register: each ].
	self injectToElement: document
! !

!Trapped methodsFor: 'initialization'!

initialize
	super initialize.
	registry := #{}.
! !

!Trapped methodsFor: 'private'!

cloneAndInject: anObject
	^anObject asJQuery clone
		each: [ :i :each | self injectToElement: each ];
		get: 0
!

descend: anArray snapshotDo: aBlock
	| tpsc |
    tpsc := TrappedPathStack current.
    tpsc append: anArray do: [
        | path model |
        path := tpsc elements copy.
   	    model := self byName: path first.
        aBlock value: (TrappedSnapshot new path: path model: model)
    ]
!

injectToChildren: anElement
	| child |
	child := anElement firstChild.
	[ child isNil ] whileFalse: [ self injectToElement: child. child := child nextSibling ]
!

injectToElement: anElement
	| jq |
	jq := anElement asJQuery.
	(jq attr: 'data-trap') ifNotNil: [ :attr |
		jq removeAttr: 'data-trap'.
		(Trapped parse: attr) do: [ :rule |
			(HTMLCanvas onJQuery: jq) root trap: rule first processors: (rule at: 2 ifAbsent: [#()]) ] ].
	self injectToChildren: anElement
! !

!Trapped class methodsFor: 'accessing'!

parse: aString
	^ (aString tokenize: '.') collect: [ :rule |
		(rule tokenize: ':') collect: [ :message |
			| result stack anArray |
			anArray := message tokenize: ' '.
			result := #().
			stack := { result }.
			anArray do: [ :each |
    			| asNum inner close |
				close := 0.
				inner := each.
				[ inner notEmpty and: [ inner first = '(' ]] whileTrue: [ inner := inner allButFirst. stack add: (stack last add: #()) ].
				[ inner notEmpty and: [ inner last = ')' ]] whileTrue: [ inner := inner allButLast. close := close + 1 ].
				(inner notEmpty and: [ inner first = '#' ]) ifTrue: [ inner := { inner allButFirst } ].
		       	asNum := inner isString ifTrue: [ (inner ifEmpty: [ 'NaN' ]) asNumber ] ifFalse: [ inner ].
        		asNum = asNum ifTrue: [ stack last add: asNum ] ifFalse: [
					inner ifNotEmpty: [ stack last add: inner ] ].
				close timesRepeat: [ stack removeLast ] ].
			result ] ]
! !

!Trapped class methodsFor: 'private'!

loop: aSequenceableCollection before: aNode do: aBlock
	aSequenceableCollection withIndexDo: [ :item :i |
		| env |
		env := document createDocumentFragment.
		{i} trapDescend: [ (HTMLCanvas onJQuery: env asJQuery) root with: aBlock ].
		aNode parentNode insertBefore: env reference: aNode ]
!

loop: aSequenceableCollection between: aTagBrush and: anotherTagBrush do: aBlock
	(aTagBrush asJQuery nextUntil: anotherTagBrush element) remove.
	aSequenceableCollection ifNotNil: [
		self loop: aSequenceableCollection before: anotherTagBrush element do: aBlock
	]
! !

TrappedSingleton subclass: #TrappedPathStack
	instanceVariableNames: 'elements'
	package: 'Trapped-Frontend'!

!TrappedPathStack methodsFor: 'accessing'!

elements
	^elements
! !

!TrappedPathStack methodsFor: 'descending'!

append: anArray do: aBlock
    self with: elements, anArray do: aBlock
!

with: anArray do: aBlock
	| old |
    old := elements.
    [ elements := anArray.
	aBlock value ] ensure: [ elements := old ]
! !

!TrappedPathStack methodsFor: 'initialization'!

initialize
    super initialize.
	elements := #().
! !

Object subclass: #TrappedSnapshot
	instanceVariableNames: 'path model'
	package: 'Trapped-Frontend'!

!TrappedSnapshot methodsFor: 'accessing'!

model
	^model
!

path
	^path
!

path: anArray model: aTrappedMW
	path := anArray.
    model := aTrappedMW
! !

!TrappedSnapshot methodsFor: 'action'!

do: aBlock
	TrappedPathStack current with: path do: [ aBlock value: model ]
!

modify: aBlock
	self model modify: self path allButFirst do: aBlock
!

read: aBlock
	self model read: self path allButFirst do: aBlock
!

watch: aBlock
	self model watch: self path allButFirst do: aBlock
! !

!Object methodsFor: '*Trapped-Frontend'!

asTrapProcSendTo: anObject
	self error: 'Trapped cannot use processor descriptor of ', self class name, ' type.'
! !

!String methodsFor: '*Trapped-Frontend'!

asTrapProcSendTo: anObject
	^anObject perform: self
! !

!Array methodsFor: '*Trapped-Frontend'!

asTrapProcSendTo: anObject
	| selector args |
	selector := ''.
	args := #().
		self withIndexDo: [ :element :index | index odd
			ifTrue: [ selector := selector, element ]
			ifFalse: [ selector := selector, ':'. args add: element ] ].
	^anObject perform: selector withArguments: args
!

trapDescend: aBlock
	Trapped current descend: self snapshotDo: aBlock
! !

!HTMLCanvas methodsFor: '*Trapped-Frontend'!

trapIter: path do: aBlock
    self with: [ :html | (html tag: 'script') at: 'type' put: 'application/x-beacon'; trapIter: path after: aBlock ]
! !

!TagBrush methodsFor: '*Trapped-Frontend'!

trap: path
	self trap: path processors: #()
!

trap: path processors: anArray
	path trapDescend: [ :snap |
		(TrappedProcessingChain newFromProcessorSpecs: anArray)
			forSnapshot: snap andBrush: self ]
!

trap: path read: aBlock
	path trapDescend: [ :snap |
        snap watch: [ :data |
            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].
        	snap do: [ self with: [ :html | aBlock value: data value: html ] ]
    	]
    ]
!

trapGuard: anArray contents: aBlock
	#() trapDescend: [ :snap |
	    | shown |
    	shown := nil.
	    self trap: anArray read: [ :gdata |
			| sanitized |
			sanitized := gdata ifNil: [ false ].
    	    shown = sanitized ifFalse: [
        	    shown := sanitized.
            	shown
					ifTrue: [ snap do: [ self contents: aBlock ]. self asJQuery show ]
					ifFalse: [ self asJQuery hide; empty ] ] ] ]
!

trapIter: path after: aBlock
	| end |
	end := TagBrush fromJQuery: ('<script type="application/x-beacon" />' asJQuery) canvas: canvas.
	self element parentNode insertBefore: end element reference: self element nextSibling.
    self trap: path read: [ :model |
    	Trapped loop: model between: self and: end do: aBlock.
    ]
! !

