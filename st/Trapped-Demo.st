Smalltalk current createPackage: 'Trapped-Demo' properties: #{}!
TrappedFly subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!App methodsFor: 'initialization'!

initialize
	self payload: #{'items'->#('hello' 'world')}
! !

Widget subclass: #AppView
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!AppView methodsFor: 'rendering'!

renderOn: html
	html h2: 'To-Do List'.
	html p trapShow: #('items')
! !

TrappedFly subclass: #Name
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!Name methodsFor: 'initialization'!

initialize
	self payload: 'To-Do List'
! !

Widget subclass: #NameView
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!NameView methodsFor: 'rendering'!

renderOn: html
	html root trapShow: #()
! !

