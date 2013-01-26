Smalltalk current createPackage: 'Trapped-Backend' properties: #{}!
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
	instanceVariableNames: ''
	package: 'Trapped-Backend'!

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
	self add: (self subscriptionKey: key block: aBlock) flag.
   	self dirty: true
!

run
	| needsClean |
    needsClean := false.
	self do: [ :each |
		each isFlagged ifTrue: [
            each run.
            each isEnabled ifFalse: [ needsClean := true ]
        ]
	].
    needsClean ifTrue: [ self clean ]
!

subscriptionKey: key block: aBlock
    "Should return subclass of KeyedSubscriptionBase"
    self subclassReponsibility
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
	[[ actionBlock value ] ensure: [ flagged := false ]]
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

!Object methodsFor: '*Trapped-Backend'!

reverseTrapAt: anObject
	^nil
!

reverseTrapAt: anObject put: value
	self error: 'Trapped cannot put at ', self class name, ' type key.'
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

!Symbol methodsFor: '*Trapped-Backend'!

reverseTrapAt: anObject
	^[anObject perform: self] on: MessageNotUnderstood do: [^nil]
!

reverseTrapAt: anObject put: value
    ^anObject perform: (self, ':') asSymbol withArguments: { value }
! !

!Number methodsFor: '*Trapped-Backend'!

reverseTrapAt: anObject
	^anObject at: self ifAbsent: [nil]
!

reverseTrapAt: anObject put: value
	^anObject at: self put: value
! !

