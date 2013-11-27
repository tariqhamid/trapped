Smalltalk current createPackage: 'Trapped-Frontend'!
Object subclass: #TrappedDataCarrier
	instanceVariableNames: 'target model chain'
	package: 'Trapped-Frontend'!

!TrappedDataCarrier methodsFor: 'accessing'!

chain: aDataChain
	chain := aDataChain
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

!TrappedDataCarrier methodsFor: 'action'!

modifyTarget
	self target modify: [ self value ]
!

modifyTargetByPerforming: aString
	self target modify: [ :m | m perform: aString ]
!

toTargetAttr: aString
	self target asJQuery attr: aString put: (self value ifNotNil: [ :o | o value ] ifNil: [[]])
!

toTargetContents
	self target contents: self value
!

toTargetValue
	self target asJQuery val: (self value ifNotNil: [ :o | o value ] ifNil: [[]])
! !

!TrappedDataCarrier class methodsFor: 'not yet classified'!

on: aDataChain target: anObject
	^self new
		chain: aDataChain;
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

Object subclass: #TrappedDataChain
	instanceVariableNames: 'processors'
	package: 'Trapped-Frontend'!

!TrappedDataChain methodsFor: 'accessing'!

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

!TrappedDataChain methodsFor: 'action'!

forSnapshot: aSnapshot andBrush: aTagBrush
	| toViewCarrier toModelCarrier |
	toViewCarrier := TrappedDataCarrierToView on: self target: aTagBrush.
	toModelCarrier := TrappedDataCarrierToModel on: self target: aSnapshot.
	processors do: [ :each | each installToView: toViewCarrier toModel: toModelCarrier ]
! !

!TrappedDataChain class methodsFor: 'instance creation'!

new: anArray
	^self new
		processors: { self blackboardReaderWriter }, anArray;
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

!TrappedDataChain class methodsFor: 'private'!

blackboardReaderWriter
	^TrappedProcessorBlackboard new
! !

Widget subclass: #TrappedDumbView
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedDumbView commentStamp!
I just read and show an actual path.!

!TrappedDumbView methodsFor: 'rendering'!

renderOn: html
	html root trap: #()
! !

Object subclass: #TrappedProcessor
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessor commentStamp!
I process data in TrappedDataChain.
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
   This performs transformation of TrappedDataToken on its way from view to model.
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

!TrappedProcessor class methodsFor: 'factory'!

contents
	^TrappedProcessorContents new
!

inputChecked
	^TrappedProcessorInputChecked new
!

inputValue
	^TrappedProcessorInputValue new
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

TrappedProcessor subclass: #TrappedProcessorBlackboard
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorBlackboard commentStamp!
I am used internally to fetch data from blackboard
or write it back.!

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
        snap do: [ aDataCarrier copy value: data; proceed ] ]
! !

TrappedProcessor subclass: #TrappedProcessorContents
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorContents commentStamp!
I put data into target via contents: in toView:!

!TrappedProcessorContents methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier toTargetContents
! !

TrappedProcessor subclass: #TrappedProcessorInputChecked
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorInputChecked commentStamp!
I bind to checkbox checked attribute.!

!TrappedProcessorInputChecked methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier toTargetAttr: 'checked'
! !

!TrappedProcessorInputChecked methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	| brush |
	brush := aDataCarrier target.
	brush onChange: [ anotherDataCarrier copy value: (brush asJQuery attr: 'checked') notNil; proceed ]
! !

TrappedProcessor subclass: #TrappedProcessorInputValue
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorInputValue commentStamp!
I bind to input value.!

!TrappedProcessorInputValue methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier toTargetValue
! !

!TrappedProcessorInputValue methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	| brush |
	brush := aDataCarrier target.
	brush onChange: [ anotherDataCarrier copy value: brush asJQuery val; proceed ]
! !

TrappedProcessor subclass: #TrappedProcessorSignal
	instanceVariableNames: 'selector'
	package: 'Trapped-Frontend'!
!TrappedProcessorSignal commentStamp!
Instead of writing data directly to model,
I instead modify it by sending a message specified when instantiating me.!

!TrappedProcessorSignal methodsFor: 'accessing'!

selector: aString
	selector := aString
! !

!TrappedProcessorSignal methodsFor: 'data transformation'!

toModel: aDataCarrier
	aDataCarrier modifyTargetByPerforming: selector
!

toView: aDataCarrier
	"stop"
! !

!TrappedProcessorSignal class methodsFor: 'instance creation'!

new: aString
	^self new
		selector: aString;
		yourself
! !

TrappedProcessor subclass: #TrappedProcessorWhenClicked
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorWhenClicked commentStamp!
I bind to an element and send true to blackboard when clicked.!

!TrappedProcessorWhenClicked methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	aDataCarrier target onClick: [ anotherDataCarrier copy value: true; proceed. false ]
! !

TrappedProcessor subclass: #TrappedProcessorWhenSubmitted
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedProcessorWhenSubmitted commentStamp!
I bind to a form and send true to blackboard when submitted.!

!TrappedProcessorWhenSubmitted methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	aDataCarrier target onSubmit: [ anotherDataCarrier copy value: true; proceed. false ]
! !

TrappedProcessor subclass: #TrappedStoppingProcessor
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedStoppingProcessor commentStamp!
I do not proceed in toView: nor in toModel:

I am therefore only interesting for my side-effects from install step.!

!TrappedStoppingProcessor methodsFor: 'data transformation'!

toModel: aDataCarrier
	"stop"
!

toView: aDataCarrier
	"stop"
! !

TrappedStoppingProcessor subclass: #TrappedProcessorWidget
	instanceVariableNames: 'viewName'
	package: 'Trapped-Frontend'!
!TrappedProcessorWidget commentStamp!
When installed, I insert a widget instance of the class specified when creating me.!

!TrappedProcessorWidget methodsFor: 'accessing'!

viewName: aString
	viewName := aString
! !

!TrappedProcessorWidget methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	anotherDataCarrier target do: [ aDataCarrier target with: (Smalltalk current at: viewName) new ]
! !

!TrappedProcessorWidget class methodsFor: 'instance creation'!

new: aString
	^self new
		viewName: aString;
		yourself
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
	(aJQuery find: '[data-trap]') each: [ :index :elem |
		| jq parsed |
		jq := elem asJQuery.
		parsed := Trapped parse: (jq attr: 'data-trap').
		parsed do: [ :rule |
			(HTMLCanvas onJQuery: jq) root trap: rule first processors: (rule at: 2 ifAbsent: [#()]) ].
		jq removeAttr: 'data-trap' ]
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
		       	asNum := (inner ifEmpty: [ 'NaN' ]) asNumber.
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
	| start end |
    self with: [ :html | start := html script. end := html script ].
    start trap: path read: [ :model |
    	Trapped loop: model between: start and: end tag: aSymbol do: aBlock.
    ]
! !

!TagBrush methodsFor: '*Trapped-Frontend'!

trap: path
	self trap: path processors: #()
!

trap: path processors: anArray
	path trapDescend: [ :snap |
		(TrappedDataChain newFromProcessorSpecs: anArray)
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
! !

