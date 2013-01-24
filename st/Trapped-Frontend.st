Smalltalk current createPackage: 'Trapped-Frontend' properties: #{}!
TrappedDispatcher subclass: #TrappedDumbDispatcher
	instanceVariableNames: 'queue'
	package: 'Trapped-Frontend'!

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

Widget subclass: #TrappedDumbView
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedDumbView commentStamp!
I just read and show an actual path.!

!TrappedDumbView methodsFor: 'rendering'!

renderOn: html
	html root trapShow: #()
! !

TrappedModelWrapper subclass: #TrappedPlainModel
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedPlainModel methodsFor: 'action'!

read: path do: aBlock
	| data |
    data := path inject: self payload
    	into: [ :soFar :segment | soFar at: segment ].
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
    	| trap jq viewName modelName tokens path |
        jq := elem asJQuery.
        trap := jq attr: 'data-trap'.
        tokens := trap tokenize: ':'.
        tokens size = 1 ifTrue: [ tokens := { 'TrappedDumbView' }, tokens ].
        viewName := tokens first.
        tokens := (tokens second tokenize: ' ') select: [ :each | each notEmpty ].
        modelName := tokens first.
        path := Trapped parse: tokens allButFirst.
        { modelName }, path trapDescend: [(Smalltalk current at: viewName) new appendToJQuery: jq].
    ]
! !

!Trapped methodsFor: 'initialization'!

initialize
	super initialize.
	registry := #{}.
! !

!Trapped class methodsFor: 'accessing'!

parse: anArray
	^anArray collect: [ :each |
    	| asNum |
       	<asNum = parseInt(each)>.
        asNum = asNum ifTrue: [ asNum ] ifFalse: [
			each first = '#' ifTrue: [ each allButFirst asSymbol ] ifFalse: [ each ]]]
!

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

!Array methodsFor: '*Trapped-Frontend'!

trapDescend: aBlock
	TrappedPathStack current with: self do: aBlock
! !

!Array methodsFor: '*Trapped-Frontend'!

trapDescend: aBlock
	TrappedPathStack current with: self do: aBlock
! !

!TagBrush methodsFor: '*Trapped-Frontend'!

trap: path read: aBlock
	path trapDescend: [ | actual model |
    	actual := Trapped path.
        model := Trapped current byName: actual first.
        model watch: actual allButFirst do: [ :data |
        	aBlock value: self value: data
    	]
    ]
!

trapShow: path
	self trap: path read: [ :brush :model | brush empty; with: model ]
! !

