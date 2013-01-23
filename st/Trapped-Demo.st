Smalltalk current createPackage: 'Trapped-Demo' properties: #{}!
TrappedFly subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

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

Widget subclass: #NameView
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!NameView methodsFor: 'rendering'!

renderOn: html
	html root trapShow: #()
! !

