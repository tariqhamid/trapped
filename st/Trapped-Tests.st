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

testNontrivialModelReturnsAppropriateValue
| bb model result |
bb := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.
model := EavModel new getBlock: [ :x | (x root at: 'foo') at: 2 ].
bb model: model read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
!

testRootModelReturnsDeeplyIsolatedRoot
| bb result |
bb := Isolator on: #(1 #(2 3)).
bb model: rootModel read: [:r|(r at: 2) at: 1 put: 0].
bb model: rootModel read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
!

testRootModelReturnsIsolatedRoot
| bb result |
bb := Isolator on: #(1 #(2 4)).
bb model: rootModel read: [:r|r at: 2 put: nil].
bb model: rootModel read: [:r|result := r].
self assert: #(1 #(2 4)) equals: result
!

testRootModelReturnsRoot
| bb result |
bb := Isolator on: #(1 #(2 3)).
bb model: rootModel read: [:r|result := r].
self assert: #(1 #(2 3)) equals: result
! !

