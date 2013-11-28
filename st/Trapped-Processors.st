Smalltalk current createPackage: 'Trapped-Processors'!
TrappedProcessor subclass: #TrappedDataExpectingProcessor
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
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
	package: 'Trapped-Processors'!
!TrappedProcessorContents commentStamp!
I put data into target via contents: in toView:!

!TrappedProcessorContents methodsFor: 'data transformation'!

toView: aDataCarrier
	aDataCarrier toTargetContents
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

TrappedDataExpectingProcessor subclass: #TrappedProcessorInputChecked
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
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

TrappedProcessor subclass: #TrappedProcessorBlackboard
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
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

TrappedProcessor subclass: #TrappedProcessorDescend
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorDescend commentStamp!
I intepret data-trap in descendants of my brush.!

!TrappedProcessorDescend methodsFor: 'data transformation'!

toView: aDataCarrier
	Trapped current injectToJQuery: aDataCarrier target asJQuery children
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

TrappedProcessorGuardBase subclass: #TrappedProcessorGuardContents
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorGuardContents commentStamp!
I am used to guard contents of the brush I am installed on.

I save the brush contents, then I observe guard expression in the model,
and when it changes to nil or false, I delete the brush contents;
on the other hand, when it changes to non-nil and non-false,
I restore it from remembered state and interpret all contained
data-trap attributes inside.!

!TrappedProcessorGuardContents methodsFor: 'data transformation'!

toView: aDataCarrier
	| frozen contents |
	frozen := aDataCarrier copy.
	contents := frozen target asJQuery contents detach.
	frozen target trapGuard: guardPath contents: [ :html |
		html root asJQuery append: contents.
		Trapped current injectToJQuery: html root asJQuery ]
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
	frozen target trapGuard: guardPath contents: [ frozen copy proceed ]
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

TrappedProcessorLoopBase subclass: #TrappedProcessorLoopContents
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorLoopContents commentStamp!
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

!TrappedProcessorLoopContents methodsFor: 'data transformation'!

toView: aDataCarrier
	| frozen contents |
	frozen := aDataCarrier copy.
	contents := frozen target asJQuery contents detach.
	frozen target trapIter: #() after: [ :html |
		html root asJQuery append: contents clone.
		Trapped current injectToJQuery: html root asJQuery ]
! !

TrappedProcessorLoopBase subclass: #TrappedProcessorLoopProc
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorLoopProc commentStamp!
I am used to loop over data and repeat the contents filling process
of the brush I am installed on.

I observe the data in the model,
and when it changes, I loop over it
and run the rest of the processing chain
for each element, putting the result _after_ my brush.

My brush itself should be as least visible as possible,
as it only serve as a position flag (use for example
noscript, ins or del).!

!TrappedProcessorLoopProc methodsFor: 'data transformation'!

toView: aDataCarrier
	| frozen |
	frozen := aDataCarrier copy.
	frozen target trapIter: #() after: [ :html | frozen copy target: html root; proceed ]
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

TrappedProcessor subclass: #TrappedProcessorTerminator
	instanceVariableNames: ''
	package: 'Trapped-Processors'!
!TrappedProcessorTerminator commentStamp!
I do not proceed in toView:.

I am added automatically to end of chain when it does not contain
any element that isExpectingModelData (see TrappedDataExpectingProcessor).!

!TrappedProcessorTerminator methodsFor: 'data transformation'!

toView: aDataCarrier
	"stop"
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

