Smalltalk current createPackage: 'Trapped-Backend'!
Object subclass: #EavModel
	instanceVariableNames: 'getBlock putBlock'
	package: 'Trapped-Backend'!
!EavModel commentStamp!
External actor value model.!

!EavModel methodsFor: 'accessing'!

getBlock: aBlock

getBlock := aBlock
!

on: anObject
"Returns value of model applied on object"

^getBlock value: anObject
!

on: anObject put: anObject2
"Puts a value via model applied on object"

^putBlock value: anObject value: anObject2
!

putBlock: aBlock

putBlock := aBlock
! !

!EavModel methodsFor: 'initialization'!

initialize
	super initialize.
	getBlock := [ self error: 'No getter block.' ].
	putBlock := [ self error: 'No putter block.' ].
! !

Object subclass: #Isolator
	instanceVariableNames: 'root'
	package: 'Trapped-Backend'!

!Isolator methodsFor: 'accessing'!

root

^root
!

root: anObject

root := anObject
! !

!Isolator methodsFor: 'action'!

model: anEavModel modify: aBlock

| newValue |
newValue := aBlock value: (anEavModel on: self).
anEavModel on: self put: newValue deepCopy
!

model: anEavModel read: aBlock

aBlock value: (anEavModel on: self) deepCopy
! !

!Isolator class methodsFor: 'instance creation'!

on: anObject
^self new root: anObject
! !

Object subclass: #KeyedPubSubBase
	instanceVariableNames: 'factory'
	package: 'Trapped-Backend'!
!KeyedPubSubBase commentStamp!
I represent a pub-sub based on a key.
I manage key-block subscriptions as well as running blocks that are dirty.
The subscription objects are reponsible of decision if the change is relevant for them.
Subscription object must be subclasses of KeyedSubscriptionBase.

My subclasses must provide implementation for:
	add:
    do:
    clean
    (optionally) run

and issue this call before actual use:
	subscritionFactory: (setting [:key:block|...] factory that creates appropriate subscription)!

!KeyedPubSubBase methodsFor: 'action'!

changed: key
	| needsToRun |
    needsToRun := false.
	self do: [ :each |
		(each accepts: key) ifTrue: [
			each flag.
            needsToRun := true.
		]
	].
	self dirty: needsToRun
!

dirty: aBoolean
	aBoolean ifTrue: [[ self run ] fork]
!

on: key hook: aBlock
	self add: (factory value: key value: aBlock) flag.
   	self dirty: true
!

run
	[
		| needsClean |
	    needsClean := false.
		self do: [ :each |
			each isFlagged ifTrue: [ each run ].
	        each isEnabled ifFalse: [ needsClean := true ]
		].
    	needsClean ifTrue: [ self clean ]
	] on: Error do: [ self dirty: true ]
!

subscriptionFactory: aBlock
    factory := aBlock
! !

KeyedPubSubBase subclass: #SimpleKeyedPubSub
	instanceVariableNames: 'queue'
	package: 'Trapped-Backend'!

!SimpleKeyedPubSub methodsFor: 'accessing'!

add: aSubscription
	queue add: aSubscription.
! !

!SimpleKeyedPubSub methodsFor: 'bookkeeping'!

clean
	queue := queue select: [ :each | each isEnabled ]
! !

!SimpleKeyedPubSub methodsFor: 'enumeration'!

do: aBlock
	queue do: aBlock
! !

!SimpleKeyedPubSub methodsFor: 'initialization'!

initialize
    super initialize.
	queue := OrderedCollection new
! !

Error subclass: #KeyedPubSubUnsubscribe
	instanceVariableNames: ''
	package: 'Trapped-Backend'!
!KeyedPubSubUnsubscribe commentStamp!
SIgnal me from the subscription block to unsubscribe it.!

Object subclass: #KeyedSubscriptionBase
	instanceVariableNames: 'key actionBlock flagged'
	package: 'Trapped-Backend'!

!KeyedSubscriptionBase methodsFor: 'accessing'!

flag
	flagged := true
!

key: anObject block: aBlock
	key := anObject.
    actionBlock := aBlock
! !

!KeyedSubscriptionBase methodsFor: 'action'!

run
	[ flagged := false. actionBlock value ]
    on: KeyedPubSubUnsubscribe do: [ actionBlock := nil ]
! !

!KeyedSubscriptionBase methodsFor: 'initialization'!

initialize
	super initialize.
    key := nil.
    actionBlock := nil.
    flagged := false.
! !

!KeyedSubscriptionBase methodsFor: 'testing'!

accepts: aKey
    "Should return true if change for aKey is relevant for this subscription"
    self subclassResponsibility
!

isEnabled
	^actionBlock notNil
!

isFlagged
	^flagged
! !

KeyedSubscriptionBase subclass: #ListKeyedSubscription
	instanceVariableNames: ''
	package: 'Trapped-Backend'!

!ListKeyedSubscription methodsFor: 'testing'!

accepts: aKey
    ^aKey size <= key size and: [aKey = (key copyFrom: 1 to: aKey size)]
! !

KeyedSubscriptionBase subclass: #TwoWayListKeyedSubscription
	instanceVariableNames: ''
	package: 'Trapped-Backend'!

!TwoWayListKeyedSubscription methodsFor: 'testing'!

accepts: aKey
    ^aKey size <= key size
		ifTrue: [aKey = (key copyFrom: 1 to: aKey size)]
		ifFalse: [key = (aKey copyFrom: 1 to: key size)]
! !

Object subclass: #ListKeyedEntity
	instanceVariableNames: 'dispatcher payload'
	package: 'Trapped-Backend'!
!ListKeyedEntity commentStamp!
I am base class for #('string-at-index' #selector numeric-at-index)-array-path-keyed entities,
that moderate access to the wrapped model object via read;do and modify:do:
and allow pub-sub via watch:do:.
This wrapped model can be any smalltalk object.

My subclasses need to provide implementation for:
	read:do:
    modify:do:

and must issue these calls when initializing:
	model: (with a wrapped object)
	dispatcher: (with a subclass of KeyedPubSubBase)!

!ListKeyedEntity methodsFor: 'accessing'!

dispatcher
	^dispatcher
!

dispatcher: aDispatcher
	dispatcher := aDispatcher
        subscriptionFactory: [ :key :block |
			(key notEmpty and: [ key last isNil ])
				ifTrue: [ TwoWayListKeyedSubscription new key: key allButLast block: block; yourself ]
				ifFalse: [ ListKeyedSubscription new key: key block: block; yourself ]];
        yourself
!

model: anObject
	payload := anObject.
    self dispatcher changed: #()
! !

!ListKeyedEntity methodsFor: 'action'!

watch: path do: aBlock
	self dispatcher on: path hook: [ self read: path do: aBlock ]
! !

ListKeyedEntity subclass: #ListKeyedDirectEntity
	instanceVariableNames: ''
	package: 'Trapped-Backend'!
!ListKeyedDirectEntity commentStamp!
I am ListKeyedEntity that directly manipulate
the wrapped model object.!

!ListKeyedDirectEntity methodsFor: 'action'!

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

ListKeyedEntity subclass: #ListKeyedIsolatedEntity
	instanceVariableNames: ''
	package: 'Trapped-Backend'!
!ListKeyedIsolatedEntity commentStamp!
I am ListKeyedEntity that guards access
to the wrapped model object via Isolator.!

!ListKeyedIsolatedEntity methodsFor: 'accessing'!

model: anObject
	super model: (Isolator on: anObject)
! !

!ListKeyedIsolatedEntity methodsFor: 'action'!

modify: path do: aBlock
    | eavModel |
    eavModel := ({{#root}},path) asEavModel.
    [ payload model: eavModel modify: aBlock ] ensure: [ self dispatcher changed: path ]
!

read: path do: aBlock
    | eavModel |
    eavModel := ({{#root}},path) asEavModel.
    payload model: eavModel read: aBlock
! !

!Object methodsFor: '*Trapped-Backend'!

reverseTrapAt: anObject
	^nil
!

reverseTrapAt: anObject put: value
	self error: 'Trapped cannot put at ', self class name, ' type key.'
! !

!Number methodsFor: '*Trapped-Backend'!

reverseTrapAt: anObject
	^anObject at: self ifAbsent: [nil]
!

reverseTrapAt: anObject put: value
	^anObject at: self put: value
! !

!SequenceableCollection methodsFor: '*Trapped-Backend'!

asEavModel
    | model |
    model := EavModel new.
    model getBlock: [ :anObject |
        self inject: anObject into: [ :soFar :segment |
            soFar ifNotNil: [ segment reverseTrapAt: soFar ]]].
    self isEmpty ifFalse: [
        model putBlock: [ :anObject :value | | penultimate |
            penultimate :=  self allButLast inject: anObject into: [ :soFar :segment |
                soFar ifNotNil: [ segment reverseTrapAt: soFar ]].
            self last reverseTrapAt: penultimate put: value ]].
    ^model
! !

!String methodsFor: '*Trapped-Backend'!

reverseTrapAt: anObject
	^anObject at: self ifAbsent: [nil]
!

reverseTrapAt: anObject put: value
	^anObject at: self put: value
! !

!Array methodsFor: '*Trapped-Backend'!

reverseTrapAt: anObject
	^[anObject perform: self first] on: MessageNotUnderstood do: [^nil]
!

reverseTrapAt: anObject put: value
    ^anObject perform: (self first, ':') asSymbol withArguments: { value }
! !

