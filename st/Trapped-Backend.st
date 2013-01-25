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

Object subclass: #TrappedDispatcher
	instanceVariableNames: ''
	package: 'Trapped-Backend'!
!TrappedDispatcher commentStamp!
I am base class for change event dispatchers.
I manage changed path - action block subscriptions.
These subscription must be three-element arrays
	{ dirty. path. block }

My subclasses need to provide implementation for:
	add:
    do:
    clean
    (optionally) run!

!TrappedDispatcher methodsFor: 'action'!

changed: path
	| needsToRun |
    needsToRun := false.
	self do: [ :each |
		| aPath lesser |
		aPath := each second.
		lesser := aPath size min: path size.
		(path copyFrom: 1 to: lesser) = (aPath copyFrom: 1 to: lesser) ifTrue: [
			each at: 1 put: true.
            needsToRun := true.
		]
	].
	self dirty: needsToRun
!

dirty: aBoolean
	aBoolean ifTrue: [[ self run ] fork]
!

run
	| needsClean |
    needsClean := false.
	self do: [ :each |
		each first ifTrue: [
            [[ each third value ] ensure: [ each at: 1 put: false ]]
            on: TrappedUnwatch do: [ each at: 3 put: nil. needsClean := true ]
        ]
	].
    needsClean ifTrue: [ self clean ]
! !

Error subclass: #TrappedUnwatch
	instanceVariableNames: ''
	package: 'Trapped-Backend'!
!TrappedUnwatch commentStamp!
SIgnal me from the watch: block to unwatch it.!

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

