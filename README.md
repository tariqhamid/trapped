What is trapped?
----

Trapped is a library for Amber that aims to create bidirectional data-binding UI for Amber.
When it is for Amber, how else should it be called than "trapped"?

It is inspired by AngularJS. But it does not aim to be hard port of AngularJS into Amber,
it just tries to bring some of the good things, but stay true to Amber/Smalltalk way of doing web UI.

What stage it is in?
----

Very early. Nevertheless, very basic things are already working.
You _can_ try it, though it still misses a lot.

What is working:
 - viewmodel -> view update propagation
 - showing simple data in view
 - iterations in view
 - viewmodel -> view change propagation for some tags

What is missing:
 - optimizations ;-)
 - view -> viewmodel change propagation everywhere

How can I try it?
----

Clone this repo, with submodules as well (amber is bundled as submodule).
Then start the server: `node vendor/amber/server/server.js`. It start on port 4000.
Visit `http://localhost:4000/demo.html` in your browser. Amber IDE opens.

The Todo example from AngularJS is ported into the demo page.

Trapped itself is in `Trapped-Frontend` and `Trapped-Backend` packages.
The demo page itself is in `demo.html` and its code is in `Trapped-Demo` package,
in classes `App` (which is wrapping `AppModel`) and `AppView`.
Other classes in `Trapped-Demo` are just prototype implemenations of Trapped
building blocks. They may be deleted in the future or move to frontend/backend packages
when they mature.

`App` is the view model wrapper (its instance is put
into global variable `AppVM` in `demo.html`)
and `AppView` is the view. `AppModel` is plain Smalltalk class
holding data and having some behaviour. Instance of this class
is wrapper by `App`. It shows any plain object can be used
for a view model and wrapped by trapped.

The view model wraps any object (via `model:`, as seen in `App >> initialize`).
The view is subclass of plain `Widget`, but inside it, uses of `trap:`
(and others of  `trap:xxx:` family) on `TagBrush`
and `path trapDescend: block` allows you to bind data from view model.
You can also iterate arrays in the model using `TagBrush >> trapIter:tag:do:`.

To see viewmodel->view update working, try this in Workspace:

```smalltalk
AppVM modify: #(#todos) do: [ :old | old, { 'text'->'try the guts'. 'done'->true } ]
```

The number and list of items should update. If you do

```smalltalk
AppVM modify: #(#title) do: [ 'My title' ]
```

The title of the page as well as header should be updated.

The `modify:do:` should be used for update since it changes as well as signals the change.
When using `TrappedMWIsolated` wrapper class,  `read:do:` and `modify:do:`
guard the data by doing deep copies behind the scene.

If you wish to, you can change the raw data you put into `model:` by hand,
but then be sure to call `AppVM dispatcher changed: #('title')` or similar
(you can do `AppVM dispatcher changed: #()` to signal everything in `AppVM` has changed,
but then everything depending upon it will redraw).