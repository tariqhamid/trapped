Smalltalk current createPackage: 'Trapped-Frontend'!
Object subclass: #TrappedDataCarrier
	instanceVariableNames: 'target model chain'
	package: 'Trapped-Frontend'!

!TrappedDataCarrier methodsFor: 'accessing'!

chain: aProcessingChain
	chain := aProcessingChain
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
	toViewCarrier value = true ifTrue: [ toViewCarrier copy proceed ]
! !

!TrappedProcessingChain class methodsFor: 'instance creation'!

new: anArray
	(anArray detect: [ :each | each isExpectingModelData ] ifNone: [ nil ])
		ifNil: [ anArray add: self dataTerminator ]
		ifNotNil: [ anArray addFirst: self blackboardReaderWriter ].
	^self new
		processors: anArray;
		yourself
!

newFromProcessorSpecs: anArray
	^self new: ((anArray ifEmpty: [ #(contents) ]) collect: [ :each | each isString
		ifTrue: [ TrappedProcessor perform: each ]
		ifFalse: [
			| selector args |
			selector := ''.
			args := #().
			each withIndexDo: [ :element :index | index odd
				ifTrue: [ selector := selector, element ]
				ifFalse: [ selector := selector, ':'. args add: element ] ].
			TrappedProcessor perform: selector withArguments: args ] ])
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
!

dataToView: aBlock
	^TrappedProcessorDataAdhoc newToView: aBlock
!

guardContents: anArray
	^TrappedProcessorGuardContents new: anArray
!

guardProc: anArray
	^TrappedProcessorGuardProc new: anArray
!

inputChecked
	^TrappedProcessorInputChecked new
!

inputValue
	^TrappedProcessorInputValue new
!

path
	^TrappedProcessorDescend new
!

signal: aString
	^TrappedProcessorSignal new: aString
!

whenClicked
	^TrappedProcessorWhenClicked new
!

whenSubmitted
	^TrappedProcessorWhenSubmitted new
!

widget: aString
	^TrappedProcessorWidget new: aString
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

injectToJQuery: aJQuery
	aJQuery each: [ :index :elem |
		| jq |
		jq := elem asJQuery.
		(jq is: '[data-trap]')
			ifTrue: [
				| parsed |
				parsed := Trapped parse: (jq attr: 'data-trap').
				jq removeAttr: 'data-trap'.
				parsed do: [ :rule |
					(HTMLCanvas onJQuery: jq) root trap: rule first processors: (rule at: 2 ifAbsent: [#()]) ] ].
			self injectToJQuery: jq children ]
!

start: args
	args do: [ :each | self register: each ].
	self injectToJQuery: 'html' asJQuery
! !

!Trapped methodsFor: 'initialization'!

initialize
	super initialize.
	registry := #{}.
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

envelope: envelope loop: model before: endjq tag: aSymbol do: aBlock
   	| envjq |
    envjq := envelope asJQuery.
    model withIndexDo: [ :item :i |
        envelope with: [ :html | (html perform: aSymbol) trap: {i} read: aBlock ].
        envjq children detach insertBefore: endjq.
    ].
    envjq remove
!

loop: model between: start and: end tag: aSymbol do: aBlock
    (start asJQuery nextUntil: end element) remove.
    start with: [ :html | model ifNotNil: [
    	self envelope: html div loop: model before: end asJQuery tag: aSymbol do: aBlock
	]]
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

watch: aBlock
	self model watch: self path allButFirst do: aBlock
! !

!Array methodsFor: '*Trapped-Frontend'!

trapDescend: aBlock
	Trapped current descend: self snapshotDo: aBlock
! !

!HTMLCanvas methodsFor: '*Trapped-Frontend'!

trapIter: path tag: aSymbol do: aBlock
    self with: [ :html | html noscript trapIter: path tag: aSymbol after: aBlock ]
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

trapIter: path tag: aSymbol after: aBlock
	| end |
	end := TagBrush fromJQuery: ('<noscript />' asJQuery insertAfter: self asJQuery) canvas: canvas.
    self trap: path read: [ :model |
    	Trapped loop: model between: self and: end tag: aSymbol do: aBlock.
    ]
! !

