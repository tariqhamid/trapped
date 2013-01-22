Smalltalk current createPackage: 'Trapped-Frontend' properties: #{}!
Object subclass: #TrappedFly
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedFly methodsFor: 'action'!

name
	^ self class name
!

start
	Trapped current register: self name: self name
! !

!TrappedFly class methodsFor: 'action'!

start
	self new start
! !

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
    	| trap jq viewName modelName tokens |
        jq := elem asJQuery.
        trap := jq attr: 'data-trap'.
        tokens := trap tokenize: ':'.
        viewName := tokens first.
        modelName := tokens second.
        { modelName } trapDescend: [(Smalltalk current at: viewName) new appendToJQuery: jq].
    ]
! !

!Trapped methodsFor: 'initialization'!

initialize
	super initialize.
	registry := #{}.
! !

!Trapped class methodsFor: 'accessing'!

path
	^TrappedPathStack current elements
! !

TrappedSingleton subclass: #TrappedPathStack
	instanceVariableNames: 'elements'
	package: 'Trapped-Frontend'!

!TrappedPathStack methodsFor: 'accessing'!

elements
	^elements
! !

!TrappedPathStack methodsFor: 'descending'!

append: anArray
    elements := elements, anArray
!

with: anArray do: aBlock
	| old |
    old := elements.
    [ self append: anArray.
	aBlock value ] ensure: [ elements := old ]
! !

!TrappedPathStack methodsFor: 'initialization'!

initialize
	elements := #().
! !

Widget subclass: #TrappedView
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedView methodsFor: 'rendering'!

renderOn: html
	html root empty.
	html with: self class name, ': ', Trapped path
! !

!Array methodsFor: '*Trapped-Frontend'!

trapDescend: aBlock
	TrappedPathStack current with: self do: aBlock
! !

!Array methodsFor: '*Trapped-Frontend'!

trapDescend: aBlock
	TrappedPathStack current with: self do: aBlock
! !

