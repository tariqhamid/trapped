Smalltalk current createPackage: 'Trapped-Frontend' properties: #{}!
Object subclass: #TrappedBinder
	instanceVariableNames: 'brush'
	package: 'Trapped-Frontend'!

!TrappedBinder methodsFor: 'accessing'!

brush: aTagBrush
	brush := aTagBrush
! !

!TrappedBinder methodsFor: 'action'!

installFor: path
	brush trap: path read: self showBlock
!

showBlock
	self subclassResponsibility
! !

!TrappedBinder methodsFor: 'converting'!

prim: anObject
	<return anObject.valueOf()>
! !

TrappedBinder subclass: #TrappedAttrBinder
	instanceVariableNames: 'attr'
	package: 'Trapped-Frontend'!

!TrappedAttrBinder methodsFor: 'accessing'!

attr: aString
	attr := aString
! !

!TrappedAttrBinder methodsFor: 'action'!

installFor: path
	super installFor: path.
    path trapDescend: [ | actual |
        actual := Trapped path.
	    brush onChange: [ actual trapDescend: [ brush trap: #() modify: [
            (brush asJQuery attr: 'checked') notNil
        ]]]
    ]
!

showBlock
	^[ :model | brush asJQuery attr: attr put: (self prim: model)  ]
! !

KeyedPubSubBase subclass: #TrappedDispatcher
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedDispatcher commentStamp!
I am base class for change event dispatchers.
I manage changed path - action block subscriptions.
These subscription are instances of TrappedSubscription

My subclasses need to provide implementation for:
	add:
    do:
    clean
    (optionally) run!

!TrappedDispatcher methodsFor: 'action'!

subscriptionKey: key block: aBlock
	^TrappedSubscription new key: key block: aBlock; yourself
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

Object subclass: #TrappedModelWrapper
	instanceVariableNames: 'dispatcher payload'
	package: 'Trapped-Frontend'!
!TrappedModelWrapper commentStamp!
I am base class for model wrappers.
I wrap a model which can be any object.

My subclasses need to provide implementation for:
	read:do:
    modify:do:
	(optionally) name

and must issue these call when initializing:
	model:
	dispatcher: (with a subclass of TrappedDispatcher)!

!TrappedModelWrapper methodsFor: 'accessing'!

dispatcher
	^dispatcher
!

dispatcher: aDispatcher
	dispatcher := aDispatcher
!

model: anObject
	payload := anObject.
    self dispatcher changed: #()
!

name
	^ self class name
! !

!TrappedModelWrapper methodsFor: 'action'!

start
	Trapped current register: self name: self name
!

watch: path do: aBlock
	self dispatcher on: path hook: [ self read: path do: aBlock ]
! !

!TrappedModelWrapper class methodsFor: 'action'!

start
	^self new start; yourself
! !

TrappedModelWrapper subclass: #TrappedMWDirect
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedMWDirect commentStamp!
I am TrappedModelWrapper that directly manipulate
the object passed to model:!

!TrappedMWDirect methodsFor: 'action'!

modify: path do: aBlock
    | newValue eavModel |
    eavModel := path asEavModel.
    newValue := aBlock value: (eavModel on: payload).
    [ eavModel on: payload put: newValue ] ensure: [ self dispatcher changed: path ]
!

read: path do: aBlock
    | eavModel |
    eavModel := path asEavModel.
    aBlock value: (eavModel on: payload)
! !

TrappedModelWrapper subclass: #TrappedMWIsolated
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedMWIsolated commentStamp!
I am TrappedModelWrapper than wrap access
to an object passed to model: via Isolator.!

!TrappedMWIsolated methodsFor: 'accessing'!

model: anObject
	super model: (Isolator on: anObject)
! !

!TrappedMWIsolated methodsFor: 'action'!

modify: path do: aBlock
    | eavModel |
    eavModel := ({#root},path) asEavModel.
    [ payload model: eavModel modify: aBlock ] ensure: [ self dispatcher changed: path ]
!

read: path do: aBlock
    | eavModel |
    eavModel := ({#root},path) asEavModel.
    payload model: eavModel read: aBlock
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

!Trapped methodsFor: 'binders'!

binder: aTagBrush
    "Prototype; will select based on tag etc."
    ^TrappedAttrBinder new attr: 'checked'; brush: aTagBrush; yourself
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
    super initialize.
	elements := #().
! !

KeyedSubscriptionBase subclass: #TrappedSubscription
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedSubscription methodsFor: 'testing'!

accepts: aKey
    ^aKey size <= key size and: [aKey = (key copyFrom: 1 to: aKey size)]
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

trap: path modify: aBlock
	path trapDescend: [ | actual model |
    	actual := Trapped path.
        model := Trapped current byName: actual first.
        model modify: actual allButFirst do: aBlock
    ]
!

trap: path read: aBlock
	path trapDescend: [ | actual model |
    	actual := Trapped path.
        model := Trapped current byName: actual first.
        model watch: actual allButFirst do: [ :data |
            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].
        	actual trapDescend: [ self with: [ :html | aBlock value: data value: html ] ]
    	]
    ]
!

trap: path toggle: aBlock
    self trap: path toggle: aBlock ifNotPresent: [ self asJQuery hide ]
!

trap: path toggle: aBlock ifNotPresent: anotherBlock
    | shown |
    shown := nil.
    self trap: path read: [ :data : html |
        shown = data notNil ifFalse: [
            shown := data notNil.
            self asJQuery empty; show.
            (shown ifTrue: [aBlock] ifFalse: [anotherBlock]) value: data value: html.
        ]
    ]
!

trapBind: path
	(Trapped current binder: self) installFor: path
!

trapIter: path tag: aSymbol do: aBlock
    self trap: path read: [ :model :html |
        html root empty.
        model ifNotNil: [ model withIndexDo: [ :item :i |
            (html perform: aSymbol) trap: {i} read: aBlock
        ]]
    ]
!

trapShow: path
	self trapShow: path default: []
!

trapShow: path default: anObject
	self trap: path read: [ :model | self empty; with: (model ifNil: [anObject]) ]
! !

