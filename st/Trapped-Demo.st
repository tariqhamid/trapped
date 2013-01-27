Smalltalk current createPackage: 'Trapped-Demo' properties: #{}!
TrappedMWIsolated subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!App methodsFor: 'initialization'!

initialize
	| obj |
	super initialize.
    self dispatcher: TrappedDumbDispatcher new.
    obj := #{'title' -> 'To-Do List'}.
    self model: obj.
    [ obj at: 'items' put: #(#(true 'hello') #(false 'world')). self dispatcher changed: #() ] valueWithTimeout: 2000
! !

Widget subclass: #AppView
	instanceVariableNames: ''
	package: 'Trapped-Demo'!

!AppView methodsFor: 'rendering'!

renderOn: html
	html h2 trapShow: #('title').
    html div trap: #('items') toggle: [
        html p with: [ html span trapShow: #(#size). html with: ' item(s).' ].
		html form with: [ html ul trapIter: #() tag: #li do: [ :each |
            html root empty.
            html input
                type: 'checkbox';
                trapBind: #(1).
            html span trapShow: #(2).
        ]].
        html p with: '... and again, to see the bidirectional binding:'.
		html form with: [ html ul trapIter: #() tag: #li do: [ :each |
            html root empty.
            html input
                type: 'checkbox';
                trapBind: #(1).
            html span trapShow: #(2).
        ]].
    ] ifNotPresent: [ html with: 'Loading ...' ]
! !

TrappedDispatcher subclass: #TrappedDumbDispatcher
	instanceVariableNames: 'queue'
	package: 'Trapped-Demo'!

!TrappedDumbDispatcher methodsFor: 'accessing'!

add: aSubscription
	queue add: aSubscription.
! !

!TrappedDumbDispatcher methodsFor: 'bookkeeping'!

clean
	queue := queue select: [ :each | each isEnabled ]
! !

!TrappedDumbDispatcher methodsFor: 'enumeration'!

do: aBlock
	queue do: aBlock
! !

!TrappedDumbDispatcher methodsFor: 'initialization'!

initialize
	queue := OrderedCollection new
! !

