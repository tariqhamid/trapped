Smalltalk current createPackage: 'Trapped-Demo' properties: #{}!
TrappedPlainModel subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!App methodsFor: 'initialization'!

initialize
	super initialize.
	self payload: #{'items'->#('hello' 'world'). 'title' -> 'To-Do List'}
! !

Widget subclass: #AppView
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!AppView methodsFor: 'rendering'!

renderOn: html
	html h2 trapShow: #('title').
	html p trapShow: #('items')
! !

