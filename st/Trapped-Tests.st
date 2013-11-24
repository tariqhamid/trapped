Smalltalk current createPackage: 'Trapped-Tests'!
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
| isolator model result |
result := nil.
isolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 5)) 'baz'). 'moo' -> 'zoo' }.
model := EavModel new
	getBlock: [ :x | (x root at: 'foo') at: 2 ];
	putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].
isolator model: model modify: [:r|result := r].
self assert: #(1 #(2 5)) equals: result
!

testNontrivialModelModifiesAppropriateValue
| isolator model result |
result := nil.
isolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
model := EavModel new
	getBlock: [ :x | (x root at: 'foo') at: 2 ];
	putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].
isolator model: model modify: [:r|#new].
isolator model: model read: [:r|result := r].
self assert: #new equals: result.
isolator model: rootModel read: [:r|result := r].
self assert: #{ 'foo' -> #('bar' #new 'baz'). 'moo' -> 'zoo' } equals: result
!

testNontrivialModelReturnsAppropriateValue
| isolator model result |
result := nil.
isolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
model := EavModel new getBlock: [ :x | (x root at: 'foo') at: 2 ].
isolator model: model read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
!

testRootModelExaminesThenModifiesRoot
| isolator result |
result := nil.
isolator := Isolator on: #(1 #(2 3)).
isolator model: rootModel modify: [:r|r second].
isolator model: rootModel read: [:r|result := r].
self assert: #(2 3) equals: result
!

testRootModelGetsRootForModification
| isolator result |
result := nil.
isolator := Isolator on: #(2 #(1 0)).
isolator model: rootModel modify: [:r|result := r].
self assert: #(2 #(1 0)) equals: result
!

testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot
| isolator result newValue |
result := nil. newValue := nil.
isolator := Isolator on: #(1 #(2 3)).
isolator model: rootModel modify: [:r|newValue := r. r at: 1 put: 4. r].
newValue at: 2 put: 'bar'.
isolator model: rootModel read: [:r|result := r].
newValue at: 2 put: 'baz'.
self assert: #(4 #(2 3)) equals: result
!

testRootModelModifiesAndDeeplyIsolatesRoot
| isolator result newValue |
result := nil.
isolator := Isolator on: #(1 #(2 3)).
newValue := #{'foo'->#(4 5 6)}.
isolator model: rootModel modify: [:r|newValue].
(newValue at: 'foo') at: 1 put: 'bar'.
isolator model: rootModel read: [:r|result := r].
(newValue at: 'foo') at: 3 put: 'baz'.
self assert: #{'foo'->#(4 5 6)} equals: result
!

testRootModelModifiesAndIsolatesRoot
| isolator result newValue |
result := nil.
isolator := Isolator on: #(1 #(2 3)).
newValue := #{'foo'->#(4 5 6)}.
isolator model: rootModel modify: [:r|newValue].
newValue at: 'foo' put: 'bar'.
isolator model: rootModel read: [:r|result := r].
newValue at: 'foo' put: 'baz'.
self assert: #{'foo'->#(4 5 6)} equals: result
!

testRootModelModifiesRoot
| isolator result |
result := nil.
isolator := Isolator on: #(1 #(2 3)).
isolator model: rootModel modify: [:r|#{'foo'->#(4 5 6)}].
isolator model: rootModel read: [:r|result := r].
self assert: #{'foo'->#(4 5 6)} equals: result
!

testRootModelReturnsDeeplyIsolatedRoot
| isolator result |
result := nil.
isolator := Isolator on: #(1 #(2 3)).
isolator model: rootModel read: [:r|(r at: 2) at: 1 put: 0].
isolator model: rootModel read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
!

testRootModelReturnsIsolatedRoot
| isolator result |
result := nil.
isolator := Isolator on: #(1 #(2 4)).
isolator model: rootModel read: [:r|r at: 2 put: nil].
isolator model: rootModel read: [:r|result := r].
self assert: #(1 #(2 4)) equals: result
!

testRootModelReturnsRoot
| isolator result |
result := nil.
isolator := Isolator on: #(1 #(2 3)).
isolator model: rootModel read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
! !

