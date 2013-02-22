smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('App', smalltalk.ListKeyedIsolatedEntity, [], 'Trapped-Demo');
smalltalk.App.comment="// Code from AngularJS Todo example, http://angularjs.org/#todo-js\x0afunction TodoCtrl($scope) {\x0a  $scope.todos = [\x0a    {text:'learn angular', done:true},\x0a    {text:'build an angular app', done:false}];\x0a \x0a  $scope.addTodo = function() {\x0a    $scope.todos.push({text:$scope.todoText, done:false});\x0a    $scope.todoText = '';\x0a  };\x0a \x0a  $scope.remaining = function() {\x0a    var count = 0;\x0a    angular.forEach($scope.todos, function(todo) {\x0a      count += todo.done ? 0 : 1;\x0a    });\x0a    return count;\x0a  };\x0a \x0a  $scope.archive = function() {\x0a    var oldTodos = $scope.todos;\x0a    $scope.todos = [];\x0a    angular.forEach(oldTodos, function(todo) {\x0a      if (!todo.done) $scope.todos.push(todo);\x0a    });\x0a  };\x0a}"
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ListKeyedIsolatedEntity.fn.prototype._initialize.apply(_st(self), []);
_st(self)._dispatcher_(_st((smalltalk.SimpleKeyedPubSub || SimpleKeyedPubSub))._new());
_st(self)._model_(_st(_st((smalltalk.AppModel || AppModel))._new())._title_("Todo"));
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._modify_do_([smalltalk.symbolFor("todos")],(function(){
return smalltalk.withContext(function($ctx3) {return [smalltalk.HashedCollection._fromPairs_([_st("text").__minus_gt("learn trapped"),_st("done").__minus_gt(true)]),smalltalk.HashedCollection._fromPairs_([_st("text").__minus_gt("build a trapped app"),_st("done").__minus_gt(false)])];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((2000));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.App)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self dispatcher: SimpleKeyedPubSub new.\x0a    self model: (AppModel new title: 'Todo').\x0a    [ self modify: #(#todos) do: [{\x0a        #{'text'->'learn trapped'. 'done'->true}.\x0a        #{'text'->'build a trapped app'. 'done'->false}\x0a    }]] valueWithTimeout: 2000\x0a",
messageSends: ["initialize", "dispatcher:", "new", "model:", "title:", "valueWithTimeout:", "modify:do:", "->"],
referencedClasses: ["SimpleKeyedPubSub", "AppModel"]
}),
smalltalk.App);



smalltalk.addClass('AppModel', smalltalk.Object, ['title', 'todos', 'todoText'], 'Trapped-Demo');
smalltalk.AppModel.comment="// Code from AngularJS Todo example, http://angularjs.org/#todo-js\x0afunction TodoCtrl($scope) {\x0a  $scope.todos = [\x0a    {text:'learn angular', done:true},\x0a    {text:'build an angular app', done:false}];\x0a \x0a  $scope.addTodo = function() {\x0a    $scope.todos.push({text:$scope.todoText, done:false});\x0a    $scope.todoText = '';\x0a  };\x0a \x0a  $scope.remaining = function() {\x0a    var count = 0;\x0a    angular.forEach($scope.todos, function(todo) {\x0a      count += todo.done ? 0 : 1;\x0a    });\x0a    return count;\x0a  };\x0a \x0a  $scope.archive = function() {\x0a    var oldTodos = $scope.todos;\x0a    $scope.todos = [];\x0a    angular.forEach(oldTodos, function(todo) {\x0a      if (!todo.done) $scope.todos.push(todo);\x0a    });\x0a  };\x0a}"
smalltalk.addMethod(
"_addTodo",
smalltalk.method({
selector: "addTodo",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._todos())._add_(smalltalk.HashedCollection._fromPairs_([_st("text").__minus_gt(_st(self)._todoText()),_st("done").__minus_gt(false)]));
_st(self)._todoText_("");
return self}, function($ctx1) {$ctx1.fill(self,"addTodo",{}, smalltalk.AppModel)})},
args: [],
source: "addTodo\x0a    self todos add: #{'text'->self todoText. 'done'->false}.\x0a    self todoText: ''",
messageSends: ["add:", "->", "todoText", "todos", "todoText:"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_archive",
smalltalk.method({
selector: "archive",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._todos_(_st(self)._todosNotDone());
return self}, function($ctx1) {$ctx1.fill(self,"archive",{}, smalltalk.AppModel)})},
args: [],
source: "archive\x0a    self todos: self todosNotDone",
messageSends: ["todos:", "todosNotDone"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_remaining",
smalltalk.method({
selector: "remaining",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._todosNotDone())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"remaining",{}, smalltalk.AppModel)})},
args: [],
source: "remaining\x0a    ^self todosNotDone size",
messageSends: ["size", "todosNotDone"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.AppModel)})},
args: [],
source: "title\x0a\x09^title",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString}, smalltalk.AppModel)})},
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todoText",
smalltalk.method({
selector: "todoText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@todoText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todoText",{}, smalltalk.AppModel)})},
args: [],
source: "todoText\x0a\x09^todoText",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todoText_",
smalltalk.method({
selector: "todoText:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@todoText"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"todoText:",{aString:aString}, smalltalk.AppModel)})},
args: ["aString"],
source: "todoText: aString\x0a\x09todoText := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todos",
smalltalk.method({
selector: "todos",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@todos"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todos",{}, smalltalk.AppModel)})},
args: [],
source: "todos\x0a\x09^todos",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todos_",
smalltalk.method({
selector: "todos:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@todos"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"todos:",{anArray:anArray}, smalltalk.AppModel)})},
args: ["anArray"],
source: "todos: anArray\x0a\x09todos := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todosNotDone",
smalltalk.method({
selector: "todosNotDone",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._todos())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._at_("done");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"todosNotDone",{}, smalltalk.AppModel)})},
args: [],
source: "todosNotDone\x0a    ^self todos reject: [ :each | each at: 'done' ]",
messageSends: ["reject:", "at:", "todos"],
referencedClasses: []
}),
smalltalk.AppModel);



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.AppView.comment="  <!-- Code from AngularJS Todo example, http://angularjs.org/#todo-html -->\x0a  <body>\x0a    <h2>Todo</h2>\x0a    <div ng-controller=\x22TodoCtrl\x22>\x0a      <span>{{remaining()}} of {{todos.length}} remaining</span>\x0a      [ <a href=\x22\x22 ng-click=\x22archive()\x22>archive</a> ]\x0a      <ul class=\x22unstyled\x22>\x0a        <li ng-repeat=\x22todo in todos\x22>\x0a          <input type=\x22checkbox\x22 ng-model=\x22todo.done\x22>\x0a          <span class=\x22done-{{todo.done}}\x22>{{todo.text}}</span>\x0a        </li>\x0a      </ul>\x0a      <form ng-submit=\x22addTodo()\x22>\x0a        <input type=\x22text\x22 ng-model=\x22todoText\x22  size=\x2230\x22\x0a               placeholder=\x22add new todo here\x22>\x0a        <input class=\x22btn-primary\x22 type=\x22submit\x22 value=\x22add\x22>\x0a      </form>\x0a    </div>\x0a  </body>\x0a"
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6,$7,$9,$10,$11,$12,$8;
_st([])._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {_st(_st(html)._h2())._trap_([smalltalk.symbolFor("title")]);
return _st(_st(html)._div())._trap_toggle_ifNotPresent_([smalltalk.symbolFor("todos")],(function(){
return smalltalk.withContext(function($ctx3) {return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {_st(_st(html)._span())._trap_([smalltalk.symbolFor("remaining")]);
_st(html)._with_(" of ");
_st(_st(html)._span())._trap_([smalltalk.symbolFor("todos"), smalltalk.symbolFor("size")]);
_st(html)._with_(" remaining [ ");
$1=_st(html)._a();
_st($1)._href_("");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {_st(snap)._modify_((function(model){
return smalltalk.withContext(function($ctx6) {return _st(model)._archive();
}, function($ctx6) {$ctx6.fillBlock({model:model},$ctx1)})}));
return false;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$2=_st($1)._with_("archive");
$2;
_st(html)._with_(" ]");
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx5) {return _st(html)._trapIter_tag_do_([smalltalk.symbolFor("todos")],smalltalk.symbolFor("li"),(function(each){
return smalltalk.withContext(function($ctx6) {_st(_st(html)._root())._empty();
$3=_st(html)._input();
_st($3)._type_("checkbox");
$4=_st($3)._trap_(["done"]);
$4;
$5=_st(html)._span();
_st($5)._trap_read_(["done"],(function(model){
return smalltalk.withContext(function($ctx7) {return _st(_st(html)._root())._class_(_st("done-").__comma(model));
}, function($ctx7) {$ctx7.fillBlock({model:model},$ctx1)})}));
$6=_st($5)._trap_(["text"]);
return $6;
}, function($ctx6) {$ctx6.fillBlock({each:each},$ctx1)})}));
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$7=_st(html)._form();
_st($7)._onSubmit_((function(){
return smalltalk.withContext(function($ctx5) {_st(snap)._modify_((function(model){
return smalltalk.withContext(function($ctx6) {return _st(model)._addTodo();
}, function($ctx6) {$ctx6.fillBlock({model:model},$ctx1)})}));
return false;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {$9=_st(html)._input();
_st($9)._type_("text");
_st($9)._trap_([smalltalk.symbolFor("todoText")]);
_st($9)._at_put_("size",(30));
$10=_st($9)._placeholder_("add new todo here");
$10;
$11=_st(html)._input();
_st($11)._class_("btn-primary");
_st($11)._type_("submit");
$12=_st($11)._value_("add");
return $12;
}, function($ctx5) {$ctx5.fillBlock({},$ctx1)})}));
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return _st(html)._with_("Loading ...");
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.AppView)})},
args: ["html"],
source: "renderOn: html\x0a    #() trapDescend: [ :snap |\x0a\x09html h2 trap: #(#title).\x0a    html div trap: #(#todos) toggle: [ snap do: [\x0a        html span trap:#(#remaining).\x0a        html with: ' of '.\x0a        html span trap: #(#todos #size).\x0a        html with: ' remaining [ '.\x0a        html a href:''; onClick: [\x0a            snap modify: [ :model | model archive ].\x0a            false\x0a        ]; with: 'archive'.\x0a        html with: ' ]'.\x0a        html ul with: [ html trapIter: #(#todos) tag: #li do: [ :each |\x0a            html root empty.\x0a            html input type: 'checkbox'; trap: #('done').\x0a            html span trap: #('done') read: [ :model | html root class: 'done-', model ]; trap: #('text').\x0a        ]].\x0a        html form onSubmit: [\x0a            snap modify: [ :model | model addTodo ].\x0a            false\x0a        ]; with: [\x0a            html input type: 'text'; trap: #(#todoText); at: 'size' put: 30; placeholder: 'add new todo here'.\x0a            html input class: 'btn-primary'; type: 'submit'; value: 'add'.\x0a        ].\x0a    ]] ifNotPresent: [ html with: 'Loading ...' ]]",
messageSends: ["trapDescend:", "trap:", "h2", "trap:toggle:ifNotPresent:", "do:", "span", "with:", "href:", "a", "onClick:", "modify:", "archive", "trapIter:tag:do:", "empty", "root", "type:", "input", "trap:read:", "class:", ",", "ul", "onSubmit:", "addTodo", "form", "at:put:", "placeholder:", "value:", "div"],
referencedClasses: []
}),
smalltalk.AppView);



