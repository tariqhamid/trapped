Smalltalk createPackage: 'Alybaba'!
(Smalltalk packageAt: 'Alybaba') imports: {'axon/Axon'. 'lyst/Lyst'}!
!Object methodsFor: '*Alybaba'!

atLyst: aCollection consume: aBlock
	| value |
	value := self atLyst: aCollection ifAbsent: [ ^self ].
	^ aBlock value: value
!

atLyst: aCollection transform: aBlock
	| value |
	aCollection last. "raise if empty"
	value := self atLyst: aCollection ifAbsent: [ ^self ].
	value := aBlock value: value.
	value := self atLyst: aCollection ifAbsent: [ ^self ] put: value.
	self registeredAxon ifNotNil: [:axon | axon changed: aCollection]
! !

