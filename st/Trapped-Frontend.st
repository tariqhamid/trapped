Smalltalk current createPackage: 'Trapped-Frontend' properties: #{}!
Object subclass: #TrappedSingleton
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedSingleton methodsFor: 'action'!

start
	^ self subclassResponsibility
! !

TrappedSingleton class instanceVariableNames: 'current'!

!TrappedSingleton class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
! !

!TrappedSingleton class methodsFor: 'action'!

start
	self current start
! !

TrappedSingleton subclass: #Trapped
	instanceVariableNames: 'registry'
	package: 'Trapped-Frontend'!

!Trapped methodsFor: 'accessing'!

byName: aString
	^ registry at: aString
!

register: aFly name: aString
	registry at: aString put: aFly
! !

!Trapped methodsFor: 'action'!

start
	'[data-trap]' asJQuery each: [ :index :elem |
    	| trap viewName modelName tokens model view |
        trap := (jQuery value: elem) attr: 'data-trap'.
        tokens := trap tokenize: ':'.
        viewName := tokens first.
        modelName := tokens second.
       	model := Trapped current byName: modelName.
        view := (Smalltalk current at: viewName) new
        	startOn: elem;
            observe: model;
            yourself.
    ]
! !

!Trapped methodsFor: 'initialization'!

initialize
	super initialize.
	registry := #{}.
! !

TrappedSingleton subclass: #TrappedFly
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedFly methodsFor: 'action'!

name
	^ self class name
!

start
	Trapped current register: self name: self name
! !

Widget subclass: #TrappedView
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedView methodsFor: 'initializing'!

observe: aFly
!

startOn: aHTMLElement
	| el |
    el := jQuery value: aHTMLElement.
    el empty.
    self appendToJQuery: el.
! !

!TrappedView methodsFor: 'rendering'!

renderOn: html
	html with: self class name, ': contents'
! !

