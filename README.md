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
 - showing simple data in view.

What is missing:
 - optimizations ;-)
 - iterations in view
 - view -> viewmodel change propagation

How can I try it?
----

Clone this repo, with submodules as well (amber is bundled as submodule).
Then start the server: `node vendor/amber/server/server.js`. It start on port 4000.
Visit `http://localhost:4000/demo.html` in your browser. Amber IDE opens.

Trapped itself is in `Trapped-Frontend` and `Trapped-Backend` packages.
The demo page itself is in `demo.html` and its code is in `Trapped-Demo` package,
in classes `App` and `AppView`.
Other classes in `Trapped-Demo` are just prototype implemenations of Trapped
building blocks. They may be deleted in the future or move to frontend/backend packages
when they mature.
Anyway, the code of the page is in `App` (the view model) and `AppView` (the view).
The `App` instance is put into global `AppVM` variable in `demo.html` initialization.

Trapped is pretty light: the view model wraps any object (via `payload:`,
as seen in `App >> initialize`). The view is subclass of plain `Widget`, but inside it,
uses of `trapShow:` (which itself uses `trap:read:`) and `trapDescend:` allows you
to bind data from view model.

To see viewmodel->view update working, try

```smalltalk
AppVM modify: #('items') do: [ :old | old, { '!' } ]
```

The number and list of items should update. If you do

```smalltalk
AppVM modify: #('title') do: [ :old | 'My title' ]
```

The title of the page as well as header should be updated.

The `modify:do:` should be used for update since it changes as well as signals the change.
It is planned that `read:do:` and `modify:do:` will guard the data by doing deep copies
behind the scene against remembering and modifying out of sync.
If you wish to, you can change the raw data you put into `payload:` by hand,
but then be sure to call `AppVM changed: #('title')` or similar
(you can do `AppVM changed: #()` to signal everything in `AppVM` has changed,
but then everything depending upon it will redraw).