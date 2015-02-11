Smalltalk createPackage: 'Lyst'!
Object subclass: #Lyst
	instanceVariableNames: ''
	package: 'Lyst'!

!Lyst class methodsFor: 'parsing'!

parse: message
	| result stack anArray |
	anArray := message tokenize: ' '.
	result := #().
	stack := { result }.
	anArray do: [ :each |
		| asNum inner close |
		close := 0.
		inner := each.
		[ inner notEmpty and: [ inner first = '(' ]] whileTrue: [ inner := inner allButFirst. stack add: (stack last add: #()) ].
		[ inner notEmpty and: [ inner last = ')' ]] whileTrue: [ inner := inner allButLast. close := close + 1 ].
		(inner notEmpty and: [ inner first = '#' ]) ifTrue: [ inner := { inner allButFirst } ].
		asNum := inner isString ifTrue: [ (inner ifEmpty: [ 'NaN' ]) asNumber ] ifFalse: [ inner ].
		asNum = asNum ifTrue: [ stack last add: asNum ] ifFalse: [
			inner ifNotEmpty: [ stack last add: inner ] ].
		close timesRepeat: [ stack removeLast ] ].
	^ result
! !

!Array methodsFor: '*Lyst'!

atYndexIn: anObject ifAbsent: aBlock
	| receiver selector result |
	selector := self first.
	receiver := anObject yourself. "JSObjectProxy hack"
	
	[ result := receiver perform: selector ]
	on: MessageNotUnderstood do: [ :mnu |
		((mnu message selector = selector
			and: [ mnu receiver == receiver ])
			and: [ mnu message arguments isEmpty ])
			ifFalse: [ mnu resignal ].
		^ aBlock value ].
	^ result
!

atYndexIn: anObject ifAbsent: aBlock put: anotherObject
	| receiver selector arguments result |
	selector := self first asMutator.
	receiver := anObject yourself. "JSObjectProxy hack"
	arguments := { anotherObject }.
	
	[ result := receiver perform: selector withArguments: arguments ]
	on: MessageNotUnderstood do: [ :mnu |
		((mnu message selector = selector
			and: [ mnu receiver == receiver ])
			and: [ mnu message arguments = arguments ])
			ifFalse: [ mnu resignal ].
		^ aBlock value ].
	^ result
! !

!Number methodsFor: '*Lyst'!

atYndexIn: anObject ifAbsent: aBlock
	(anObject respondsTo: #at:ifAbsent:)
		ifTrue: [ ^ anObject at: self ifAbsent: aBlock ]
		ifFalse: aBlock
!

atYndexIn: anObject ifAbsent: aBlock put: anotherObject
	(anObject respondsTo: #at:put:)
		ifTrue: [ ^ anObject at: self put: anotherObject ]
		ifFalse: aBlock
! !

!Object methodsFor: '*Lyst'!

atLyst: aCollection ifAbsent: aBlock
	^ aCollection inject: self into: [ :soFar :segment |
		segment atYndexIn: soFar ifAbsent: [ ^ aBlock value ]]
!

atYndexIn: anObject ifAbsent: aBlock
	^ aBlock value
!

atYndexIn: anObject ifAbsent: aBlock put: anotherObject
	^ aBlock value
! !

!String methodsFor: '*Lyst'!

atYndexIn: anObject ifAbsent: aBlock
	(anObject respondsTo: #at:ifAbsent:)
		ifTrue: [ ^ anObject at: self ifAbsent: aBlock ]
		ifFalse: aBlock
!

atYndexIn: anObject ifAbsent: aBlock put: anotherObject
	(anObject respondsTo: #at:put:)
		ifTrue: [ ^ anObject at: self put: anotherObject ]
		ifFalse: aBlock
! !

