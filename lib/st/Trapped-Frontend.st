Smalltalk current createPackage: 'Trapped-Frontend'!
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
	^[ :model | brush empty; with: (model ifNil: [[]]) ]
! !

!TrappedBinder methodsFor: 'converting'!

prim: anObject
	<return anObject.valueOf()>
! !

TrappedBinder subclass: #TrappedCheckedBinder
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedCheckedBinder methodsFor: 'action'!

installFor: path
	super installFor: path.
    path trapDescend: [ :snap |
	    brush onChange: [ snap modify: [
            (brush asJQuery attr: 'checked') notNil
        ]]
    ]
!

showBlock
	^[ :model | brush asJQuery attr: 'checked' put: (model ifNotNil: [ self prim: model ] ifNil: [ false ]) ]
! !

TrappedBinder subclass: #TrappedValBinder
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedValBinder methodsFor: 'action'!

installFor: path
	super installFor: path.
    path trapDescend: [ :snap |
	    brush onChange: [ snap modify: [
            brush asJQuery val
        ]]
    ]
!

showBlock
	^[ :model | brush asJQuery val: (model ifNotNil: [self prim: model] ifNil: [[]]) ]
! !

Widget subclass: #TrappedDumbView
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!
!TrappedDumbView commentStamp!
I just read and show an actual path.!

!TrappedDumbView methodsFor: 'rendering'!

renderOn: html
	html root trap: #()
! !

Object subclass: #TrappedSingleton
	instanceVariableNames: ''
	package: 'Trapped-Frontend'!

!TrappedSingleton methodsFor: 'action'!

start: args
	^ self subclassResponsibility
! !

TrappedSingleton class instanceVariableNames: 'current'!

!TrappedSingleton class methodsFor: 'accessing'!

current
	^ current ifNil: [ current := self new ]
! !

!TrappedSingleton class methodsFor: 'action'!

start: args
	self current start: args
! !

TrappedSingleton subclass: #Trapped
	instanceVariableNames: 'registry'
	package: 'Trapped-Frontend'!

!Trapped methodsFor: 'accessing'!

byName: aString
	^ registry at: aString
!

register: aListKeyedEntity
	self register: aListKeyedEntity name: aListKeyedEntity class name
!

register: aListKeyedEntity name: aString
	registry at: aString put: aListKeyedEntity
! !

!Trapped methodsFor: 'action'!

descend: anArray snapshotDo: aBlock
	| tpsc |
    tpsc := TrappedPathStack current.
    tpsc append: anArray do: [
        | path model |
        path := tpsc elements copy.
   	    model := self byName: path first.
        aBlock value: (TrappedSnapshot new path: path model: model)
    ]
!

start: args
    args do: [ :each | self register: each ].
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
    | binder tag |
    tag := aTagBrush element nodeName.
    tag = 'INPUT' ifTrue: [
        | type |
        type := aTagBrush asJQuery attr: 'type'.
        type = 'checkbox' ifTrue: [ binder := TrappedCheckedBinder new ].
        type = 'text' ifTrue: [ binder := TrappedValBinder new ]
    ].
    binder ifNil: [ binder := TrappedBinder new ].
    ^ binder brush: aTagBrush; yourself
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
       	asNum := each asNumber.
        asNum = asNum ifTrue: [ asNum ] ifFalse: [
			each first = '#' ifTrue: [ { each allButFirst } ] ifFalse: [ each ]]]
! !

!Trapped class methodsFor: 'private'!

envelope: envelope loop: model before: endjq tag: aSymbol do: aBlock
   	| envjq |
    envjq := envelope asJQuery.
    model withIndexDo: [ :item :i |
        envelope with: [ :html | (html perform: aSymbol) trap: {i} read: aBlock ].
        envjq children detach insertBefore: endjq.
    ].
    envjq remove
!

loop: model between: start and: end tag: aSymbol do: aBlock
    (start asJQuery nextUntil: end element) remove.
    start with: [ :html | model ifNotNil: [
    	self envelope: html div loop: model before: end asJQuery tag: aSymbol do: aBlock
	]]
! !

TrappedSingleton subclass: #TrappedPathStack
	instanceVariableNames: 'elements'
	package: 'Trapped-Frontend'!

!TrappedPathStack methodsFor: 'accessing'!

elements
	^elements
! !

!TrappedPathStack methodsFor: 'descending'!

append: anArray do: aBlock
    self with: elements, anArray do: aBlock
!

with: anArray do: aBlock
	| old |
    old := elements.
    [ elements := anArray.
	aBlock value ] ensure: [ elements := old ]
! !

!TrappedPathStack methodsFor: 'initialization'!

initialize
    super initialize.
	elements := #().
! !

Object subclass: #TrappedSnapshot
	instanceVariableNames: 'path model'
	package: 'Trapped-Frontend'!

!TrappedSnapshot methodsFor: 'accessing'!

model
	^model
!

path
	^path
!

path: anArray model: aTrappedMW
	path := anArray.
    model := aTrappedMW
! !

!TrappedSnapshot methodsFor: 'action'!

do: aBlock
	TrappedPathStack current with: path do: [ aBlock value: model ]
!

modify: aBlock
	self model modify: self path allButFirst do: aBlock
! !

!Array methodsFor: '*Trapped-Frontend'!

trapDescend: aBlock
	Trapped current descend: self snapshotDo: aBlock
! !

!HTMLCanvas methodsFor: '*Trapped-Frontend'!

trapIter: path tag: aSymbol do: aBlock
	| start end |
    self with: [ :html | start := html script. end := html script ].
    start trap: path read: [ :model |
    	Trapped loop: model between: start and: end tag: aSymbol do: aBlock.
    ]
! !

!TagBrush methodsFor: '*Trapped-Frontend'!

trap: path
	(Trapped current binder: self) installFor: path
!

trap: path read: aBlock
	path trapDescend: [ :snap |
        snap model watch: snap path allButFirst do: [ :data |
            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].
        	snap do: [ self with: [ :html | aBlock value: data value: html ] ]
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
! !

