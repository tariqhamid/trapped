Smalltalk createPackage: 'Axon'!
Object subclass: #AxonBase
	instanceVariableNames: 'factory'
	package: 'Axon'!
!AxonBase commentStamp!
I represent a pub-sub based on a key (called 'aspect').
I manage aspect-block subscriptions (called 'interests') as well as run blocks of dirtied interests.
The interest objects are responsible of decision if the change of an aspect is relevant for them.
Interest object must be subclasses of `AxonInterestBase`.

My subclasses must provide implementation for:

 - add:
 - do:
 - clean!

!AxonBase methodsFor: 'action'!

addInterest: anInterest
	self
		add: (anInterest flag; yourself);
		dirty: true
!

changed: anAspect
	| needsToRun |
	needsToRun := false.
	self do: [ :each |
		(each accepts: anAspect) ifTrue: [
			each flag.
			needsToRun := true ]].
	self dirty: needsToRun
!

changedAll
	| needsToRun |
	needsToRun := false.
	self do: [ :each |
		each flag.
		needsToRun := true ].
	self dirty: needsToRun
!

dirty: aBoolean
	aBoolean ifTrue: [[ self run ] fork]
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
! !

AxonBase subclass: #SimpleAxon
	instanceVariableNames: 'queue'
	package: 'Axon'!

!SimpleAxon methodsFor: 'accessing'!

add: aSubscription
	queue add: aSubscription.
! !

!SimpleAxon methodsFor: 'bookkeeping'!

clean
	queue := queue select: [ :each | each isEnabled ]
! !

!SimpleAxon methodsFor: 'enumeration'!

do: aBlock
	queue do: aBlock
! !

!SimpleAxon methodsFor: 'initialization'!

initialize
    super initialize.
	queue := OrderedCollection new
! !

Object subclass: #AxonInterestBase
	instanceVariableNames: 'aspect actionBlock flagged'
	package: 'Axon'!

!AxonInterestBase methodsFor: 'accessing'!

aspect: anAspect block: aBlock
	aspect := anAspect.
    actionBlock := aBlock
!

flag
	flagged := true
! !

!AxonInterestBase methodsFor: 'action'!

run
	[ flagged := false. actionBlock value ]
    on: AxonOff do: [ actionBlock := nil ]
! !

!AxonInterestBase methodsFor: 'initialization'!

initialize
	super initialize.
    aspect := nil.
    actionBlock := nil.
    flagged := false.
! !

!AxonInterestBase methodsFor: 'testing'!

accepts: anAspect
    "Should return true if change for anAspect is relevant for this AxonInterest"
    self subclassResponsibility
!

isEnabled
	^actionBlock notNil
!

isFlagged
	^flagged
! !

AxonInterestBase subclass: #InterestedInEqual
	instanceVariableNames: ''
	package: 'Axon'!

!InterestedInEqual methodsFor: 'testing'!

accepts: anAspect
    ^ anAspect = aspect
! !

Error subclass: #AxonOff
	instanceVariableNames: ''
	package: 'Axon'!
!AxonOff commentStamp!
SIgnal me from the subscription block to unsubscribe it.!

Object subclass: #AxonizedObject
	instanceVariableNames: 'axon'
	package: 'Axon'!
!AxonizedObject commentStamp!
I am base class for object using Axon changed:
for event / change logistics,

Set AxonBase instance with `axon:` and then use
`self changed: anAspect` to trigger axon's `changed:`.!

!AxonizedObject methodsFor: 'accessing'!

axon
	^ axon
!

axon: anAxon
	axon := anAxon
! !

!AxonizedObject methodsFor: 'action'!

changed: anAspect
	self axon changed: anAspect
! !

