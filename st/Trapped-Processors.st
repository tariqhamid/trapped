Smalltalk current createPackage: 'Trapped-Processors'!
TrappedDataExpectingProcessor subclass: #TrappedProcessorAttribute
	instanceVariableNames: 'attrName'
	package: 'Trapped-Processors'!
!TrappedProcessorAttribute commentStamp!
I set the data into an attribute speciried when creating me.
No observing and sending back, atm.!

!TrappedProcessorAttribute methodsFor: 'accessing'!

attrName: aString
	attrName := aString
! !

!TrappedProcessorAttribute methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier toTargetAttr: attrName
! !

!TrappedProcessorAttribute class methodsFor: 'instance creation'!

new: aString
	^self new
		attrName: aString;
		yourself
! !

TrappedDataExpectingProcessor subclass: #TrappedProcessorDataAdhoc
	instanceVariableNames: 'toViewBlock'
	package: 'Trapped-Processors'!
!TrappedProcessorDataAdhoc commentStamp!
I put data into target via contents: in toView:!

!TrappedProcessorDataAdhoc methodsFor: 'accessing'!

toViewBlock: aBlock
	toViewBlock := aBlock
! !

!TrappedProcessorDataAdhoc methodsFor: 'data transformation'!

toView: aDataCarrier
	toViewBlock value: aDataCarrier
! !

!TrappedProcessorDataAdhoc class methodsFor: 'instance creation'!

newToView: aBlock
	^self new
		toViewBlock: aBlock;
		yourself
! !

TrappedProcessor subclass: #TrappedProcessorDescend
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorDescend commentStamp!
I intepret data-trap in descendants of my brush.!

!TrappedProcessorDescend methodsFor: 'data transformation'!

toView: aDataCarrier
	Trapped current injectToChildren: aDataCarrier target element
! !

TrappedProcessor subclass: #TrappedProcessorGuardBase
	instanceVariableNames: 'guardPath'
	package: 'Trapped-Processors'!
!TrappedProcessorGuardBase commentStamp!
I serve as base class for brush-guarding processors.

I cover instantiation and subclasses have to provide
implementation of toVIew: that react appropriately to guard releasing.!

!TrappedProcessorGuardBase methodsFor: 'accessing'!

guardPath: anArray
	guardPath := anArray
! !

!TrappedProcessorGuardBase methodsFor: 'data transformation'!

toModel: aDataCarrier
	"stop"
!

toView: aDataCarrier
	self subclassResponsibility
! !

!TrappedProcessorGuardBase class methodsFor: 'instance creation'!

new: anArray
	^ self new
		guardPath: anArray;
		yourself
! !

TrappedProcessorGuardBase subclass: #TrappedProcessorGuardProc
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorGuardProc commentStamp!
I am used to guard contents filling process of the brush I am installed on.

I observe guard expression in the model,
and when it changes to nil or false, I delete the brush contents;
on the other hand, when it changes to non-nil and non-false,
I run the rest on the chain, which should be one-time
that sets up the contents,!

!TrappedProcessorGuardProc methodsFor: 'data transformation'!

toView: aDataCarrier
	| frozen |
	frozen := aDataCarrier copy.
	frozen target trapGuard: guardPath contents: [ :html | frozen copy target: html root; proceed ]
! !

TrappedProcessorGuardBase subclass: #TrappedProcessorGuardXon
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorGuardXon commentStamp!
I am used to guard contents of the brush I am installed on.

I save the brush contents, then I observe guard expression in the model,
and when it changes to nil or false, I delete the brush contents;
on the other hand, when it changes to non-nil and non-false,
I restore it from remembered state and interpret all contained
data-trap attributes inside.!

!TrappedProcessorGuardXon methodsFor: 'data transformation'!

toView: aDataCarrier
	| frozen |
	frozen := aDataCarrier copy.
	frozen contents.
	frozen target trapGuard: guardPath contents: [ :html |
		html root asJQuery append: (Trapped current cloneInFragmentAndInject: frozen contents) ]
! !

TrappedDataExpectingProcessor subclass: #TrappedProcessorInputChecked
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorInputChecked commentStamp!
I bind to checkbox checked state.!

!TrappedProcessorInputChecked methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier toTargetProp: 'checked'
! !

!TrappedProcessorInputChecked methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	| brush |
	brush := aDataCarrier target.
	brush onChange: [ anotherDataCarrier copy value: (brush asJQuery prop: 'checked'); proceed ]
! !

TrappedDataExpectingProcessor subclass: #TrappedProcessorInputValue
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
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

TrappedProcessor subclass: #TrappedProcessorLoopBase
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorLoopBase commentStamp!
I serve as base class for looping processors.

I cover instantiation and subclasses have to provide
implementation of toVIew: that loops appropriately.!

!TrappedProcessorLoopBase methodsFor: 'data transformation'!

toModel: aDataCarrier
	"stop"
!

toView: aDataCarrier
	self subclassResponsibility
! !

TrappedProcessorLoopBase subclass: #TrappedProcessorLoopProcZ
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorLoopProcZ commentStamp!
I am used to loop over data and repeat the contents filling process
of the brush I am installed on.

I observe the data in the model,
and when it changes, I loop over it
and run the rest of the processing chain
for each element, putting the result _after_ my brush.

My brush itself should be as least visible as possible,
as it only serve as a position flag (use for example
noscript, ins or del).!

!TrappedProcessorLoopProcZ methodsFor: 'data transformation'!

toView: aDataCarrier
	| frozen |
	frozen := aDataCarrier copy.
	frozen target trapIter: #() after: [ :html | frozen copy target: html root; proceed ]
! !

TrappedProcessorLoopBase subclass: #TrappedProcessorLoopXonZ
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorLoopXonZ commentStamp!
I am used to loop over data and repeat the contents
of the brush I am installed on.

I save the brush contents, then I observe the data in the model,
and when it changes, I loop over it
and restore the contents from remembered state
and interpret all contained data-trap attributes inside
for each element, putting the result _after_ my brush.

My brush itself should be as least visible as possible,
as it only serve as a position flag (use for example
noscript, ins or del).!

!TrappedProcessorLoopXonZ methodsFor: 'data transformation'!

toView: aDataCarrier
	| frozen |
	frozen := aDataCarrier copy.
	frozen contents.
	frozen target trapIter: #() after: [ :html |
		html root asJQuery append: (Trapped current cloneInFragmentAndInject: frozen contents) ]
! !

TrappedProcessor subclass: #TrappedProcessorReplace
	instanceVariableNames: 'left right'
	package: 'Trapped-Processors'!
!TrappedProcessorReplace commentStamp!
I convert data to string representation and do a regex replace.
I get two parameters, in toView:, first is replaced with second,
and in toModel:, the second is replaced with first.

I remove leading '^' and ending '$' from the string used as replacement,
so it safe to replace ^to with ^To, for example.!

!TrappedProcessorReplace methodsFor: 'accessing'!

left: aString
	left := aString
!

right: aString
	right := aString
! !

!TrappedProcessorReplace methodsFor: 'data transformation'!

toModel: aDataCarrier
	| replacement old |
	replacement := (left replace: '^\^' with: '') replace: '\$$' with: ''.
	old := aDataCarrier value asString.
	aDataCarrier
		value: (old replace: right with: replacement) whenDifferentFrom: old;
		proceed
!

toView: aDataCarrier
	| replacement old |
	replacement := (right replace: '^\^' with: '') replace: '\$$' with: ''.
	old := aDataCarrier value asString.
	aDataCarrier
		value: (old replace: left with: replacement) whenDifferentFrom: old;
		proceed
! !

!TrappedProcessorReplace class methodsFor: 'instance creation'!

new: aString with: anotherString
	^ self new
		left: aString asString;
		right: anotherString asString;
		yourself
! !

TrappedProcessor subclass: #TrappedProcessorSignal
	instanceVariableNames: 'selector'
	package: 'Trapped-Processors'!
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

TrappedDataExpectingProcessor subclass: #TrappedProcessorToBlackboard
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorToBlackboard commentStamp!
I save the data to blackboard in toModel:, to position specified by path.!

!TrappedProcessorToBlackboard methodsFor: 'data transformation'!

toModel: aDataCarrier
	aDataCarrier target modify: [ aDataCarrier value ]
! !

TrappedProcessor subclass: #TrappedProcessorUriComponentDecode
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorUriComponentDecode commentStamp!
I uriComponentDecode in toView:
and encode in toModel:!

!TrappedProcessorUriComponentDecode methodsFor: 'data transformation'!

toModel: aDataCarrier
	aDataCarrier
		value: aDataCarrier value uriComponentEncoded;
		proceed
!

toView: aDataCarrier
	aDataCarrier
		value: aDataCarrier value uriComponentDecoded;
		proceed
! !

TrappedProcessor subclass: #TrappedProcessorUriComponentEncode
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorUriComponentEncode commentStamp!
I uriComponentEncode in toView:
and decode in toModel:!

!TrappedProcessorUriComponentEncode methodsFor: 'data transformation'!

toModel: aDataCarrier
	aDataCarrier
		value: aDataCarrier value uriComponentDecoded;
		proceed
!

toView: aDataCarrier
	aDataCarrier
		value: aDataCarrier value uriComponentEncoded;
		proceed
! !

TrappedProcessor subclass: #TrappedProcessorWhenClicked
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorWhenClicked commentStamp!
I bind to an element and send true to blackboard when clicked.!

!TrappedProcessorWhenClicked methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	aDataCarrier target onClick: [ anotherDataCarrier copy proceed. false ]
! !

TrappedProcessor subclass: #TrappedProcessorWhenSubmitted
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorWhenSubmitted commentStamp!
I bind to a form and send true to blackboard when submitted.!

!TrappedProcessorWhenSubmitted methodsFor: 'installation'!

installToView: aDataCarrier toModel: anotherDataCarrier
	aDataCarrier target onSubmit: [ anotherDataCarrier copy proceed. false ]
! !

TrappedProcessor subclass: #TrappedProcessorWidget
	instanceVariableNames: 'viewName'
	package: 'Trapped-Processors'!
!TrappedProcessorWidget commentStamp!
I insert a widget instance of the class specified when creating me.!

!TrappedProcessorWidget methodsFor: 'accessing'!

viewName: aString
	viewName := aString
! !

!TrappedProcessorWidget methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier target with: (Smalltalk current at: viewName) new
! !

!TrappedProcessorWidget class methodsFor: 'instance creation'!

new: aString
	^self new
		viewName: aString;
		yourself
! !

!TrappedDataCarrier methodsFor: '*Trapped-Processors'!

contents
	^self target asJQuery xontent
!

modifyTarget
	self target modify: [ self value ]
!

modifyTargetByPerforming: aString
	self target modify: [ :m | m perform: aString ]
!

primitive: anObject
	<return anObject === nil ? null : anObject.valueOf()>
!

toTargetAttr: aString
	self falseAsNilValue
		ifNil: [ self target removeAt: aString ]
		ifNotNil: [ :bvalue |
			| value |
			value := self primitive: bvalue.
			self target at: aString put: (value = true ifTrue: [ aString ] ifFalse: [ value ]) ]
!

toTargetContents
	self target contents: (self primitive: self value)
!

toTargetProp: aString
	self target element at: aString put: (self primitive: self value)
!

toTargetValue
	self target asJQuery val: (self primitive: self value)
! !

!TrappedProcessor class methodsFor: '*Trapped-Processors'!

attr: aString
	^TrappedProcessorAttribute new: aString
!

dataToView: aBlock
	^TrappedProcessorDataAdhoc newToView: aBlock
!

deuric
	^TrappedProcessorUriComponentDecode new
!

guardProc: anArray
	^TrappedProcessorGuardProc new: anArray
!

guardXon: anArray
	^TrappedProcessorGuardXon new: anArray
!

inputChecked
	^TrappedProcessorInputChecked new
!

inputValue
	^TrappedProcessorInputValue new
!

loopProcZ
	^TrappedProcessorLoopProcZ new
!

loopXonZ
	^TrappedProcessorLoopXonZ new
!

path
	^TrappedProcessorDescend new
!

replace: aString with: anotherString
	^TrappedProcessorReplace new: aString with: anotherString
!

signal: aString
	^TrappedProcessorSignal new: aString
!

toBlackboard
	^TrappedProcessorToBlackboard new
!

uric
	^TrappedProcessorUriComponentEncode new
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

