Smalltalk createPackage: 'Trapped-Backend'!
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

AxonInterestBase subclass: #InterestedInTrapPath
	instanceVariableNames: ''
	package: 'Trapped-Backend'!

!InterestedInTrapPath methodsFor: 'testing'!

accepts: anAspect
    ^anAspect size <= aspect size and: [anAspect = (aspect copyFrom: 1 to: anAspect size)]
! !

AxonInterestBase subclass: #InterestedInTrapPathSubtree
	instanceVariableNames: ''
	package: 'Trapped-Backend'!

!InterestedInTrapPathSubtree methodsFor: 'testing'!

accepts: anAspect
    ^anAspect size <= aspect size
		ifTrue: [anAspect = (aspect copyFrom: 1 to: anAspect size)]
		ifFalse: [aspect = (anAspect copyFrom: 1 to: aspect size)]
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

AxonizedObject subclass: #Trapper
	instanceVariableNames: 'payload'
	package: 'Trapped-Backend'!
!Trapper commentStamp!
A portmanteau of 'Trapped wrapper', I am base class for model objects wrapped by Trapped.

Wrapped object is indexed by #('string-at-index' #selector numeric-at-index) array paths. Operations using this indexing are:

 - `read:do` to get the indexed content
 - `modify:do:` to get and modify the indexed content, and
 - `watch:do:` to subscribe to changes of the indexed content.

The wrapped model can be any smalltalk object.

My subclasses need to provide implementation for:

 - read:do:
 - modify:do:

and must issue these calls when initializing:

 - axon: (with a subclass of `AxonBase`)
 - model: (with a wrapped object, after `axon:`)!

!Trapper methodsFor: 'accessing'!

model: anObject
	payload := anObject.
    self axon changedAll
! !

!Trapper methodsFor: 'action'!

interestOn: anAspect block: aBlock
	(anAspect notEmpty and: [ anAspect last isNil ])
		ifTrue: [ ^ InterestedInTrapPathSubtree new aspect: anAspect allButLast block: aBlock ]
		ifFalse: [ ^ InterestedInTrapPath new aspect: anAspect block: aBlock ]
!

modify: path do: aBlock
	self subclassResponsibility
!

read: path do: aBlock
	self subclassResponsibility
!

watch: path do: aBlock
	self axon addInterest: (self
		interestOn: path
		block: [ self read: path do: aBlock ])
! !

Trapper subclass: #DirectTrapper
	instanceVariableNames: ''
	package: 'Trapped-Backend'!
!DirectTrapper commentStamp!
I am Trapper that directly manipulate
the wrapped model object.!

!DirectTrapper methodsFor: 'action'!

modify: path do: aBlock
    | newValue eavModel |
    eavModel := path asEavModel.
    newValue := aBlock value: (eavModel on: payload).
    [ eavModel on: payload put: newValue ] ensure: [ self changed: path ]
!

read: path do: aBlock
    | eavModel |
    eavModel := path asEavModel.
    aBlock value: (eavModel on: payload)
! !

Trapper subclass: #IsolatingTrapper
	instanceVariableNames: ''
	package: 'Trapped-Backend'!
!IsolatingTrapper commentStamp!
I am Trapper that guards access
to the wrapped model object via Isolator.

IOW, read:do: gets always its own deep copy,
modify:do: is not reentrant
and upon writing the written part is deep-copied as well
(so modifier does not hold the source of truth
and can change it later).

This also means, a wrapped object and all its parts
must understand `#deepCopy`.!

!IsolatingTrapper methodsFor: 'accessing'!

model: anObject
	super model: (Isolator on: anObject)
! !

!IsolatingTrapper methodsFor: 'action'!

modify: path do: aBlock
    | eavModel |
    eavModel := ({{#root}},path) asEavModel.
    [ payload model: eavModel modify: aBlock ] ensure: [ self changed: path ]
!

read: path do: aBlock
    | eavModel |
    eavModel := ({{#root}},path) asEavModel.
    payload model: eavModel read: aBlock
! !

!SequenceableCollection methodsFor: '*Trapped-Backend'!

asEavModel
    | model |
    model := EavModel new.
    model getBlock: [ :anObject | anObject atLyst: self ifAbsent: [ nil ] ].
    self isEmpty ifFalse: [
        model putBlock: [ :anObject :value | | penultimate |
            penultimate := anObject atLyst: self allButLast ifAbsent: [ nil ].
            self last atYndexIn: penultimate ifAbsent: [] put: value ]].
    ^model
! !

