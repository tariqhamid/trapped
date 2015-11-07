Smalltalk createPackage: 'Alybaba-Tests'!
TestCase subclass: #PlainConsumeTransformTest
	instanceVariableNames: ''
	package: 'Alybaba-Tests'!

!PlainConsumeTransformTest methodsFor: 'tests'!

testModelTransformSentToAxon
| model result axon |
result := nil.
model := #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
axon := TestSpyAxon new.
axon registerIn: model.
model atLyst: #(foo 2) transform: [:r | #new].
self assert: axon changedAspectLog equals: #((foo 2))
!

testNontrivialModelGetsAppropriateValueForTransform
| model result |
result := nil.
model := #{ 'foo' -> #('bar' #(1 #(2 5)) 'baz'). 'moo' -> 'zoo' }.
model atLyst: #(foo 2) transform: [:r | result := r].
self assert: #(1 #(2 5)) equals: result
!

testNontrivialModelReturnsAppropriateValue
| model result |
result := nil.
model := #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
model atLyst: #(foo 2) consume: [:r | result := r].
self assert: #(1 #(2 3)) equals: result
!

testNontrivialModelTransformsAppropriateValue
| model result |
result := nil.
model := #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
model atLyst: #(foo 2) transform: [:r | #new].
model atLyst: #(foo 2) consume: [:r | result := r].
self assert: #new equals: result.
model atLyst: #() consume: [:r | result := r].
self assert: #{ 'foo' -> #('bar' #new 'baz'). 'moo' -> 'zoo' } equals: result
!

testRootModelCannotTransform
| model result |
result := nil.
model := #(1 #(2 3)).
self should: [ model atLyst: #() transform: [:r | #{'foo'->#(4 5 6)}] ] raise: Error
!

testRootModelReturnsDirectRoot
| model result |
result := nil.
model := #(1 #(2 4)).
model atLyst: #() consume: [:r | r at: 2 put: nil].
model atLyst: #() consume: [:r | result := r].
self assert: #(1 nil) equals: result
!

testRootModelReturnsRoot
| model result |
result := nil.
model := #(1 #(2 3)).
model atLyst: #() consume: [:r | result := r].
self assert: #(1 #(2 3)) equals: result
!

testRootTransformBlockIsNotRun
| model result |
result := nil.
model := #(2 #(1 0)).
[model atLyst: #() transform: [:r | result := r]] on: Error do: [].
self assert: result isNil
! !

DumbAxon subclass: #TestSpyAxon
	instanceVariableNames: 'changedAspectLog'
	package: 'Alybaba-Tests'!
!TestSpyAxon commentStamp!
I am an axon that logs changed aspects. I am useful in tests.!

!TestSpyAxon methodsFor: 'accessing'!

changedAspectLog
	^ changedAspectLog
!

changedAspectLog: anObject
	changedAspectLog := anObject
! !

!TestSpyAxon methodsFor: 'action'!

changed: anAspect
	changedAspectLog add: anAspect
! !

!TestSpyAxon methodsFor: 'initialization'!

initialize
	super initialize.

	changedAspectLog := #()
! !

