Smalltalk current createPackage: 'Trapped-Demo' properties: #{}!
Widget subclass: #AppView
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!AppView methodsFor: 'rendering'!

renderOn: html
	html h2 trapShow: #('title').
    html div trap: #('items') toggle: [
        html p with: [ html span trapShow: #(#size). html with: ' item(s).' ].
		html form with: [ html ul trapIter: #() tag: #li do: [ :each |
            html input
                type: 'checkbox';
                at: 'checked' put: true.
            html with: each
        ]]
    ] ifNotPresent: [ html with: 'Loading ...' ]
! !

TrappedDispatcher subclass: #TrappedDumbDispatcher
	instanceVariableNames: 'queue'
	package: 'Trapped-Demo'!

!TrappedDumbDispatcher methodsFor: 'accessing'!

add: aSubscription
	queue add: aSubscription.
    self dirty: aSubscription isFlagged
! !

!TrappedDumbDispatcher methodsFor: 'bookkeeping'!

clean
	queue := queue select: [ :each | each isEnabled ]
! !

!TrappedDumbDispatcher methodsFor: 'enumeration'!

do: aBlock
	queue do: aBlock
! !

!TrappedDumbDispatcher methodsFor: 'initialization'!

initialize
	queue := OrderedCollection new
! !

TrappedModelWrapper subclass: #TrappedPlainModel
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!TrappedPlainModel methodsFor: 'action'!

modify: path do: aBlock
    | newValue eavModel |
    eavModel := path asEavModel.
    newValue := aBlock value: (eavModel on: self payload).
    [ eavModel on: self payload put: newValue ] ensure: [ self dispatcher changed: path ]
!

read: path do: aBlock
    | eavModel |
    eavModel := path asEavModel.
    aBlock value: (eavModel on: self payload)
! !

!TrappedPlainModel methodsFor: 'initialization'!

initialize
	super initialize.
    self dispatcher: TrappedDumbDispatcher new
! !

TrappedPlainModel subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!App methodsFor: 'initialization'!

initialize
	super initialize.
	self payload: #{'title' -> 'To-Do List'}.
    [ self payload at: 'items' put: #('hello' 'world'). self payload: self payload ] valueWithTimeout: 2000
! !

