Smalltalk current createPackage: 'Trapped-Common' properties: #{}!
Object subclass: #TrappedDispatcher
	instanceVariableNames: ''
	package: 'Trapped-Common'!
!TrappedDispatcher commentStamp!
I am base class for change event dispatchers.
I manage changed path - action block subscriptions.
These subscription must be three-element arrays
	{ dirty. path. block }

My subclasses need to provide implementation for:
	add:
    do:
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
	^needsToRun
!

run
	self do: [ :each |
		each first ifTrue: [[ each third value ] ensure: [ each at: 1 put: false ]]
	]
! !

Object subclass: #TrappedModelWrapper
	instanceVariableNames: 'dispatcher payload'
	package: 'Trapped-Common'!
!TrappedModelWrapper commentStamp!
I am base class for model wrappers.
I wrap a model which can be any object.

My subclasses need to provide implementation for:
	read:do:
	(optionally) name

and must initialize:
	payload
	dispatcher!

!TrappedModelWrapper methodsFor: 'accessing'!

dispatcher
	^dispatcher
!

dispatcher: aDispatcher
	dispatcher := aDispatcher
!

name
	^ self class name
!

payload
	^payload
!

payload: anObject
	payload := anObject
! !

!TrappedModelWrapper methodsFor: 'action'!

start
	Trapped current register: self name: self name
!

watch: path do: aBlock
	self dispatcher add: { true. path. [ self read: path do: aBlock ] }.
    [ self dispatcher run ] fork
! !

!TrappedModelWrapper class methodsFor: 'action'!

start
	self new start
! !

