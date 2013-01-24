Smalltalk current createPackage: 'Trapped-Demo' properties: #{}!
Widget subclass: #AppView
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!AppView methodsFor: 'rendering'!

renderOn: html
	html h2 trapShow: #('title').
    html p with: [ html span trapShow: #('items' #size). html with: ' item(s).' ].
	html p trapShow: #('items')
! !

TrappedDispatcher subclass: #TrappedDumbDispatcher
	instanceVariableNames: 'queue'
	package: 'Trapped-Demo'!

!TrappedDumbDispatcher methodsFor: 'accessing'!

add: aTriplet
	queue add: aTriplet.
    self dirty: aTriplet first
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
	| data newValue |
    data := path allButLast asTrapPathOn: self payload.
	newValue := aBlock value: ({ path last } asTrapPathOn: data).
    [ path last reverseTrapAt: data put: newValue ] ensure: [ self dispatcher changed: path ]
!

read: path do: aBlock
	| data |
    data := path asTrapPathOn: self payload.
	aBlock value: data.
! !

!TrappedPlainModel methodsFor: 'initialization'!

initialize
	super initialize.
    self dispatcher: TrappedDumbDispatcher new
! !

!TrappedPlainModel class methodsFor: 'action'!

start
	self new start
! !

TrappedPlainModel subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!App methodsFor: 'initialization'!

initialize
	super initialize.
	self payload: #{'items'->#('hello' 'world'). 'title' -> 'To-Do List'}
! !

