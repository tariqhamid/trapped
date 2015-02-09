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

AxonizedObject subclass: #ListKeyedEntity
	instanceVariableNames: 'payload'
	package: 'Trapped-Backend'!
!ListKeyedEntity commentStamp!
I am base class for #('string-at-index' #selector numeric-at-index)-array-path-keyed entities,
that moderate access to the wrapped model object via read;do and modify:do:
and allow pub-sub via watch:do:.
The wrapped model can be any smalltalk object.

My subclasses need to provide implementation for:

 - read:do:
 - modify:do:

and must issue these calls when initializing:

 - axon: (with a subclass of `AxonBase`)
 - model: (with a wrapped object, after `axon:`)!

!ListKeyedEntity methodsFor: 'accessing'!

model: anObject
	self axon
		interestFactory: [ :description :block |
			(description notEmpty and: [ description last isNil ])
				ifTrue: [ InterestedInTrapPathSubtree new aspect: description allButLast block: block; yourself ]
				ifFalse: [ InterestedInTrapPath new aspect: description block: block; yourself ]].
	payload := anObject.
    self changed: #()
! !

!ListKeyedEntity methodsFor: 'action'!

watch: path do: aBlock
	self axon on: path hook: [ self read: path do: aBlock ]
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
    [ eavModel on: payload put: newValue ] ensure: [ self changed: path ]
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
    [ payload model: eavModel modify: aBlock ] ensure: [ self changed: path ]
!

read: path do: aBlock
    | eavModel |
    eavModel := ({{#root}},path) asEavModel.
    payload model: eavModel read: aBlock
! !

!Array methodsFor: '*Trapped-Backend'!

asTrapAtPut: value sendTo: anObject
    ^anObject perform: (self first, ':') asSymbol withArguments: { value }
!

asTrapAtSendTo: anObject
	^[anObject perform: self first] on: MessageNotUnderstood do: [^nil]
! !

!Number methodsFor: '*Trapped-Backend'!

asTrapAtPut: value sendTo: anObject
	^anObject at: self put: value
!

asTrapAtSendTo: anObject
	^anObject ifNotNil: [ anObject at: self ifAbsent: [nil] ]
! !

!Object methodsFor: '*Trapped-Backend'!

asTrapAtPut: value sendTo: anObject
	self error: 'Trapped cannot put at ', self class name, ' type key.'
!

asTrapAtSendTo: anObject
	^nil
! !

!SequenceableCollection methodsFor: '*Trapped-Backend'!

asEavModel
    | model |
    model := EavModel new.
    model getBlock: [ :anObject |
        self inject: anObject into: [ :soFar :segment |
            segment asTrapAtSendTo: soFar ]].
    self isEmpty ifFalse: [
        model putBlock: [ :anObject :value | | penultimate |
            penultimate :=  self allButLast inject: anObject into: [ :soFar :segment |
                soFar ifNotNil: [ segment asTrapAtSendTo: soFar ]].
            self last asTrapAtPut:value sendTo: penultimate ]].
    ^model
! !

!String methodsFor: '*Trapped-Backend'!

asTrapAtPut: value sendTo: anObject
	^anObject at: self put: value
!

asTrapAtSendTo: anObject
	^anObject ifNotNil: [ anObject at: self ifAbsent: [nil] ]
! !

