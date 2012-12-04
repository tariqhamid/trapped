Smalltalk current createPackage: 'Trapped-Tests' properties: #{}!
TestCase subclass: #IsolatorTest
	instanceVariableNames: 'rootModel'
	package: 'Trapped-Tests'!

!IsolatorTest methodsFor: 'running'!

setUp

rootModel := EavModel new
	getBlock: [:x | x root];
    putBlock: [:x :y | x root: y].
! !

!IsolatorTest methodsFor: 'tests'!

testNontrivialModelGetsAppropriateValueForModification
| bb model result |
result := nil.
bb := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 5)) 'baz'). 'moo' -> 'zoo' }.
model := EavModel new
	getBlock: [ :x | (x root at: 'foo') at: 2 ];
	putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].
bb model: model modify: [:r|result := r].
self assert: #(1 #(2 5)) equals: result
!

testNontrivialModelModifiesAppropriateValue
| bb model result |
result := nil.
bb := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
model := EavModel new
	getBlock: [ :x | (x root at: 'foo') at: 2 ];
	putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].
bb model: model modify: [:r|#new].
bb model: model read: [:r|result := r].
self assert: #new equals: result.
bb model: rootModel read: [:r|result := r].
self assert: #{ 'foo' -> #('bar' #new 'baz'). 'moo' -> 'zoo' } equals: result
!

testNontrivialModelReturnsAppropriateValue
| bb model result |
result := nil.
bb := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
model := EavModel new getBlock: [ :x | (x root at: 'foo') at: 2 ].
bb model: model read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
!

testRootModelExaminesThenModifiesRoot
| bb result |
result := nil.
bb := Isolator on: #(1 #(2 3)).
bb model: rootModel modify: [:r|r second].
bb model: rootModel read: [:r|result := r].
self assert: #(2 3) equals: result
!

testRootModelGetsRootForModification
| bb result |
result := nil.
bb := Isolator on: #(2 #(1 0)).
bb model: rootModel modify: [:r|result := r].
self assert: #(2 #(1 0)) equals: result
!

testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot
| bb result newValue |
result := nil. newValue := nil.
bb := Isolator on: #(1 #(2 3)).
bb model: rootModel modify: [:r|newValue := r. r at: 1 put: 4. r].
newValue at: 2 put: 'bar'.
bb model: rootModel read: [:r|result := r].
newValue at: 2 put: 'baz'.
self assert: #(4 #(2 3)) equals: result
!

testRootModelModifiesAndDeeplyIsolatesRoot
| bb result newValue |
result := nil.
bb := Isolator on: #(1 #(2 3)).
newValue := #{'foo'->#(4 5 6)}.
bb model: rootModel modify: [:r|newValue].
(newValue at: 'foo') at: 1 put: 'bar'.
bb model: rootModel read: [:r|result := r].
(newValue at: 'foo') at: 3 put: 'baz'.
self assert: #{'foo'->#(4 5 6)} equals: result
!

testRootModelModifiesAndIsolatesRoot
| bb result newValue |
result := nil.
bb := Isolator on: #(1 #(2 3)).
newValue := #{'foo'->#(4 5 6)}.
bb model: rootModel modify: [:r|newValue].
newValue at: 'foo' put: 'bar'.
bb model: rootModel read: [:r|result := r].
newValue at: 'foo' put: 'baz'.
self assert: #{'foo'->#(4 5 6)} equals: result
!

testRootModelModifiesRoot
| bb result |
result := nil.
bb := Isolator on: #(1 #(2 3)).
bb model: rootModel modify: [:r|#{'foo'->#(4 5 6)}].
bb model: rootModel read: [:r|result := r].
self assert: #{'foo'->#(4 5 6)} equals: result
!

testRootModelReturnsDeeplyIsolatedRoot
| bb result |
result := nil.
bb := Isolator on: #(1 #(2 3)).
bb model: rootModel read: [:r|(r at: 2) at: 1 put: 0].
bb model: rootModel read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
!

testRootModelReturnsIsolatedRoot
| bb result |
result := nil.
bb := Isolator on: #(1 #(2 4)).
bb model: rootModel read: [:r|r at: 2 put: nil].
bb model: rootModel read: [:r|result := r].
self assert: #(1 #(2 4)) equals: result
!

testRootModelReturnsRoot
| bb result |
result := nil.
bb := Isolator on: #(1 #(2 3)).
bb model: rootModel read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
! !

