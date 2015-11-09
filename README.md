1 Introduction
====
[![Travis CI Status](https://secure.travis-ci.org/herby/trapped.png)](https://travis-ci.org/#!/herby/trapped) [![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/herby/trapped?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Inspired by the idea that was present in AngularJS,
Trapped is an Amber that creates bidirectional data-biuding
between elements in HTML page (the view side)
and a data object (the model side).

Similarly to AngularJS, you write expressions specifying what data
to bind to and how to transform it directly in HTML
in a `data-trap` attribute, and changes to those data are
automagically communicated there and back.

2 Quick jump in
====

**Easy way** (but you cannot save and reload with new code):

Visit the classic Counter example
at http://www.herby.sk/trapped/example-counter/counter.html
or simple Todo similat to one in AngularJS page
at http://www.herby.sk/trapped/example-todo/todo.html.

**Hard way** (but you can save and reload with new code):

Clone this repo. Run `bower install` to get amber, which is a dependency.
Then start the server: `node bower_components/amber/bin/amber serve`
from the project root directory. It starts on port 4000.
Visit `http://localhost:4000/example-counter/counter.html` (similarly for Todo example)
in your browser. Amber IDE opens.

3 Big picture
====

Trapped is closest to the MVVM variant of MVC. MVVM splits application
into _Model_ (the application logic and data loaded / saved from external sources),
_View_ (the presentation facilities, not containg any application logic)
and _ViewModel_ (the subset of data that is going to be presented at any point of time).

Trapped fills the place of the _View_ and the _ViewModel_
(_View_ being synchronized with _ViewModel_ bidirectionally),
leaving you to build your _Model_ any way you wish and abstracting
presentation details and user events away from you by letting
the _Model_ just observe and manipulate contents of the _ViewModel_.

More precisely:

1. You provide the class for _ViewModel_ data (`AppModel` in the examples).
You can build it any way you wish, it has to be able to hold all the data
_ViewModel_ may need to hold. It can also hold some methods for manipulation
of these data, which is good for the example, but in real project
this should be the responsibility of _Model_.
1. You create the class for _ViewModel_ itself (`App` in the examples).
This is more or less mechanical task - just create subclass of right
base class and fill in `initialize` method appropriately, so that
it wraps the real data (instance of the class from previous paragraph).
This wrapper class implement the _blackboard_ pattern -
in which many external observers (called specialists)
observe the data object (called blackboard),
make partial changes and react to them. Elements of _View_
are observers of the _ViewModel_ blackboard, as should
be the parts of the _Model_ (this way, _Model_ and _View_
are completely decoupled and both see only changes
to the blackboard, that is, the _ViewModel_).
1. You write HTML and annotate the elements
with the data-binding expressions (attribute `data-trap`)
in which you describe what data to bind to (_path_)
and how to process it in the way to the user or from the user
(_processors_).
1. When initializing the page, you must call `Trapped start: anArray`
where _anArray_ should contain instances of all blackboards (most often
you will only have one, `blackboard` in the examples)
that are intended to be used (`smalltalk.Trapped._start_([blackboard]);` JavaScript statement
in HTML page in the examples).
1. From that point on, you should only modify or watch data of the blackboard
using its API. For the example, try this is Counter example:
`blackboard modify: #((value)) do: [ :old | console log: old. 2 * old ]`
or this in the Todo example:
`blackboard modify: #((todos) 1 done) do: [ :state | state not ]`.

4 `data-trap` attribute
====

All data binding and processing info for an HTML element
is contained in an attribute `data-trap`.

Syntax
----

It consists of several _statements_ separated by dot (`.`).

Each statement consists of several _expressions_, separated by colon (`:`).

The first expression is called _path_. It describes the location of the data
the expression is processing, relative to _actual position_, similarly
to how relative paths work in file systems.

The second expression is the _processing chain_. It describes
the series of transformations the data goes through in its way
to the view or back. If not present, the default `contents` is used.

The role of other expressions is not defined in the moment.

All expressions represent the array of strings, numbers or sub-expressions
and have same syntax: they consists of series of space-separated
strings (without reserved characters),
whole numbers (float ones use decimal dot, which is used as delimiter),
or a sub-expression within parentheses (`()`).

The syntax is resembling Smalltalk literal array syntax very closely -
so similar or same expressions can be used in API in code as well
as in `data-trap` attribute.
For example paths `#((value))` and `#((todos) 1 done)` from API examples
in previous chapter could be written in `data-trap` as `'(value)'` and `'(todos) 1 done'`.

Syntactic sugar: as `(foo)` happens often in `data-trap` expressions,
it can be written equivalently as `~foo`, to improve readability.
So above paths would likely be written `~value` and `~todos 1 done` instead.

Semantics of path
----

! This section is common to `data-trap` paths and in-code trapped paths !

The Trapped data-path is an array of elements: either strings, numbers
or a sub-arrays. These are used to denote the (relative) location
of a piece of data in a Trapped blackboard, and is used to read or write
from / to this position.

Elements of a path are equivalent to elements of paths in classic file systems:
each elements is one step deeper in a tree hierarchy. Thus, to read a data denoted
by a path, Trapped starts from actual position, reads the contents denoted by first element,
use the result to read the contents denoted by second elements etc. until the end.
To write the data, the algorithm is similar to reading one, byt the last element is used
to write the data instead.

 - if _string_ path element is read from _foo_, `foo at: aString` is performed;
 - if _string_ path element is written to  _foo_, `foo at: aString put: value` is performed;
 - if _number_ path element is read from _foo_, `foo at: aNumber` is performed;
 - if _number_ path element is written to _foo_, `foo at: aNumber put: value` is performed;
 - if _subarray_ path element `#(bar)` is read from _foo_, `foo bar` is performed;
 - if _subarray_ path element `#(bar)` is written to _foo_, `foo bar: value` is performed.

 In addition, these operation are error-tolerant - if any data in the path is `nil`,
 selectors do not exist, indexes are out of bounds etc., the result of the whole expression
 is `nil`.

So, the `blackboard modify: #((todos) 1 done) do: [ :state | state not ]` example
from previous chapter essentially does

	| x |
	x := blackboard todos at: 1.
	x at: 'done' put: (x at: 'done') not

Plus, of course, all the bookkeeping of the blackboard.

Semantics of processing chain
----

The Trapped processing chain descriptor is an array of elements:
either strings, numbers or a sub-arrays.
These are used to describe the transformations and operations
that happen with a piece of data in the way from view-model
to a view or back.

The descriptor describes the way how a processing elements
in a chain are created (which ones, and with what parameters).
These then process the data (see `TrappedProcessor` class).
These elements are created by sending a message to the factory object.
In the moment, `TrappedProcessor` class itself serves as a factory.

 - if _string_ processing element description `foo` occurs,
 	`aFactory foo` is used to create processing element;
 - using  _number_ processing element description
 	is useless and produces an error (currently silent);
 - if one-element  _array_ processing element description `(foo)` occurs,
 	`aFactory foo` is used to create processing element;
 - if even-element  _array_ processing element description `(foo something bar anotherThing)` occurs,
 	`aFactory foo: something bar: anotherThing` is used to create processing element,
 	the odd elements representing the keywords of the message,
 	the even elements representing the arguments (which can be string, number or array);
 - using odd-element  _array_ processing element description other than one-element
 	is useless and produces an error (currently silent).

Note: thus, in processing chain descriptors, `contents`, `~contents` and `(contents)`
describe the same one-element processing chain where the lone processing element
is created inside Trapped by running `TrappedProcessor contents`.

Another example: `(signal increment) whenClicked` from counter example
describes two-element processing chain, with first element created
by `TrappedProcessor signal: 'increment'` and the second one
by `TrappedProcessor whenClicked`. All mentioned methods
(`contents`, `signal:` and `increment` are factory methods that
create instance of appropriate processor class,
subclass of `TrappedProcessor`).

5 Processing chain
====

The elements created as described above are used
in sequence to process data. This includes not only transforming,
but also reading/writing it from/to DOM element
(`contents` writes data to `TagBrush` via `contents:`),
reading/writing from/to blackboard and other bookkeeping.

Data-binding chain
----

The processing chain that is _data-binding_ (contains certain
elements that switch on databinding, `contents` being one of them),
observes a blackboard at the position given in _path_.

If a data changes in blackboard, the event is queued
and the data is eventually taken, filled in a `TrappedDataCarrier` instance
and processed by elements in a chain, in order, beginning with the first element,
by calling `toView: aDataCarrier`. This method may read (`value`) or
write (`value:`) the piece of data carried. It must explicitly ask to proceed
(`proceed`) to push the data carrier to processing by next element.
It may also choose not to send `proceed` and stop the processing chain
for this piece of data.

Processing elements can also subscribe to events in a DOM
and start moving data from DOM into a blackboard. In that case,
data from DOM are fed into another `TrappedDataCarrier` instance,
and it is processed by every element of the chain, _in backward order_,
by calling `toModel: aDataCarrier`. Again, this methods reads or writes
the piece of data and proceeds to preceding element or stops the chain.
If the data travels to the beginning of the chain, it is written
to the blackboard at the position denoted in _path_.

Meta-processing chain
----

If the processing chain is not data-binding (it does not contain
any element that responds `true` to `isExpectingModelData`),
it is _meta-processing_. In that case, it does not observe the blackboard;
but it can use _path_ for other purposes.

Since meta-processing chain is not observing blackboard,
the data event can not start it. It is instead started once,
immediately after creating it (that is, after parsing and processing
`data-trap` or when `trap:processors:` is called directly in code),
running the `toView:` chain and setting `true` as the "data"
in the data carrier.

Often, meta-processing chain contains control structures
(guards, loops), so it will actually subscribe the blackboard itself
for later processing - it just does it itself, not using automatic
blackboard subscription via _path_.

Example: `(signal increment) whenClicked` from Counter example
`++` button is meta-processing: it does not observe any data
in the blackboard. Instead, _whenClicked_ installs
click event handler on the element, which starts `toModel:` processing
when button is clicked, feeding it with `true` as the data.
_whenClicked_'s `toModel:` passes the data unchanged,
and _signal increment_'s `toModel:` does
`aBlackboard modify: aPath do: [ :value | value increment ]`,
that is, _signal_ processor modifies blackboard at _path_
by sending a message supplied in its parameter.
You can look at the code of both of these processors yourself:
find their respective factory methods (`signal:`, `whenClicked`)
in a factory (`TrappedProcessor class`), see what classes are
they instantiating and look into those classes.

6 Processors
====

All processing elements (also called processors)
are instances of  some subclass of `TrappedProcessor`.

Basic processor _contents_ which is used as a default
when no processing chain is specified, is contained within
`Trapped-Frontend` package; all the other processors supplied
by Trapped which will be described later, are contained
 in `Trapped-Processors` package. If you look at the factory
 (`TrappedProcessor class`), you see that their factory methods
 are in category `*Trapped-Processors`). The processor implementations
 are in one package with their factory methods, which are
 extending the factory.

This is by design - for your application,
you may need to create your own processor, which you do easily:
create your subclass of `TrappedProcessor`, and extend the factory
with its creating method. The keywords of this creating method
will need to be used inside `data-trap` or in call to `trap:processors:` API.
The name of the class is not used in the descriptors,
only the name of factory method is important.

You may end up with library of processors -
this is what `Trapped-Processors` package is,
the library of processors included in Trapped itself.

(Reference to all supplied processors: TBD)
