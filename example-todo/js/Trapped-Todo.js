define("gh_herby_trapped_todo/Trapped-Todo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "gh_herby_trapped/Trapped-Backend", "amber_core/Kernel-Objects", "amber_core/Canvas", "gh_herby_trapped/Trapped-Frontend"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Todo');
smalltalk.packages["Trapped-Todo"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped_todo"};

smalltalk.addClass('App', smalltalk.ListKeyedIsolatedEntity, [], 'Trapped-Todo');
smalltalk.App.comment="// Code from AngularJS Todo example, http://angularjs.org/#todo-js\x0afunction TodoCtrl($scope) {\x0a  $scope.todos = [\x0a    {text:'learn angular', done:true},\x0a    {text:'build an angular app', done:false}];\x0a \x0a  $scope.addTodo = function() {\x0a    $scope.todos.push({text:$scope.todoText, done:false});\x0a    $scope.todoText = '';\x0a  };\x0a \x0a  $scope.remaining = function() {\x0a    var count = 0;\x0a    angular.forEach($scope.todos, function(todo) {\x0a      count += todo.done ? 0 : 1;\x0a    });\x0a    return count;\x0a  };\x0a \x0a  $scope.archive = function() {\x0a    var oldTodos = $scope.todos;\x0a    $scope.todos = [];\x0a    angular.forEach(oldTodos, function(todo) {\x0a      if (!todo.done) $scope.todos.push(todo);\x0a    });\x0a  };\x0a}";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $SimpleKeyedPubSub(){return smalltalk.SimpleKeyedPubSub||(typeof SimpleKeyedPubSub=="undefined"?nil:SimpleKeyedPubSub)}
function $AppModel(){return smalltalk.AppModel||(typeof AppModel=="undefined"?nil:AppModel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$4,$2,$6,$5;
smalltalk.App.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=_st($SimpleKeyedPubSub())._new();
$ctx1.sendIdx["new"]=1;
self._dispatcher_($1);
self._model_(_st(_st($AppModel())._new())._title_("Todo"));
self._watch_do_([["todos"], nil],(function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._dispatcher())._changed_([["remaining"]]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._modify_do_([["todos"]],(function(){
return smalltalk.withContext(function($ctx3) {
$3="text".__minus_gt("learn trapped");
$ctx3.sendIdx["->"]=1;
$4="done".__minus_gt(true);
$ctx3.sendIdx["->"]=2;
$2=smalltalk.HashedCollection._from_([$3,$4]);
$6="text".__minus_gt("build a trapped app");
$ctx3.sendIdx["->"]=3;
$5=smalltalk.HashedCollection._from_([$6,"done".__minus_gt(false)]);
return [$2,$5];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}))._valueWithTimeout_((2000));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.App)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self dispatcher: SimpleKeyedPubSub new.\x0a    self model: (AppModel new title: 'Todo').\x0a\x09self watch: #((todos) nil) do: [ self dispatcher changed: #((remaining)) ].\x0a    [ self modify: #((todos)) do: [{\x0a        #{'text'->'learn trapped'. 'done'->true}.\x0a        #{'text'->'build a trapped app'. 'done'->false}\x0a    }]] valueWithTimeout: 2000",
messageSends: ["initialize", "dispatcher:", "new", "model:", "title:", "watch:do:", "changed:", "dispatcher", "valueWithTimeout:", "modify:do:", "->"],
referencedClasses: ["SimpleKeyedPubSub", "AppModel"]
}),
smalltalk.App);



smalltalk.addClass('AppModel', smalltalk.Object, ['title', 'todos', 'todoText'], 'Trapped-Todo');
smalltalk.AppModel.comment="// Code from AngularJS Todo example, http://angularjs.org/#todo-js\x0afunction TodoCtrl($scope) {\x0a  $scope.todos = [\x0a    {text:'learn angular', done:true},\x0a    {text:'build an angular app', done:false}];\x0a \x0a  $scope.addTodo = function() {\x0a    $scope.todos.push({text:$scope.todoText, done:false});\x0a    $scope.todoText = '';\x0a  };\x0a \x0a  $scope.remaining = function() {\x0a    var count = 0;\x0a    angular.forEach($scope.todos, function(todo) {\x0a      count += todo.done ? 0 : 1;\x0a    });\x0a    return count;\x0a  };\x0a \x0a  $scope.archive = function() {\x0a    var oldTodos = $scope.todos;\x0a    $scope.todos = [];\x0a    angular.forEach(oldTodos, function(todo) {\x0a      if (!todo.done) $scope.todos.push(todo);\x0a    });\x0a  };\x0a}";
smalltalk.addMethod(
smalltalk.method({
selector: "addTodo",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=self._todos();
$3="text".__minus_gt(self._todoText());
$ctx1.sendIdx["->"]=1;
$2=smalltalk.HashedCollection._from_([$3,"done".__minus_gt(false)]);
_st($1)._add_($2);
self._todoText_("");
return self}, function($ctx1) {$ctx1.fill(self,"addTodo",{},smalltalk.AppModel)})},
args: [],
source: "addTodo\x0a    self todos add: #{'text'->self todoText. 'done'->false}.\x0a    self todoText: ''",
messageSends: ["add:", "todos", "->", "todoText", "todoText:"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "archive",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._todos_(self._todosNotDone());
return self}, function($ctx1) {$ctx1.fill(self,"archive",{},smalltalk.AppModel)})},
args: [],
source: "archive\x0a    self todos: self todosNotDone",
messageSends: ["todos:", "todosNotDone"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "remaining",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._todosNotDone())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"remaining",{},smalltalk.AppModel)})},
args: [],
source: "remaining\x0a    ^self todosNotDone size",
messageSends: ["size", "todosNotDone"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.AppModel)})},
args: [],
source: "title\x0a\x09^title",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.AppModel)})},
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todoText",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@todoText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todoText",{},smalltalk.AppModel)})},
args: [],
source: "todoText\x0a\x09^todoText",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todoText:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@todoText"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"todoText:",{aString:aString},smalltalk.AppModel)})},
args: ["aString"],
source: "todoText: aString\x0a\x09todoText := aString",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todos",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@todos"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todos",{},smalltalk.AppModel)})},
args: [],
source: "todos\x0a\x09^todos",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todos:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@todos"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"todos:",{anArray:anArray},smalltalk.AppModel)})},
args: ["anArray"],
source: "todos: anArray\x0a\x09todos := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todosNotDone",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._todos())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._at_("done");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"todosNotDone",{},smalltalk.AppModel)})},
args: [],
source: "todosNotDone\x0a    ^self todos reject: [ :each | each at: 'done' ]",
messageSends: ["reject:", "todos", "at:"],
referencedClasses: []
}),
smalltalk.AppModel);



smalltalk.addClass('TodoItemWidget', smalltalk.Widget, [], 'Trapped-Todo');
smalltalk.TodoItemWidget.comment="<!-- Code from AngularJS Todo example, http://angularjs.org/#todo-html -->\x0a  <body>\x0a    <h2>Todo</h2>\x0a    <div ng-controller=\x22TodoCtrl\x22>\x0a      <span>{{remaining()}} of {{todos.length}} remaining</span>\x0a      [ <a href=\x22\x22 ng-click=\x22archive()\x22>archive</a> ]\x0a      <ul class=\x22unstyled\x22>\x0a        <li ng-repeat=\x22todo in todos\x22>\x0a          <input type=\x22checkbox\x22 ng-model=\x22todo.done\x22>\x0a          <span class=\x22done-{{todo.done}}\x22>{{todo.text}}</span>\x0a        </li>\x0a      </ul>\x0a      <form ng-submit=\x22addTodo()\x22>\x0a        <input type=\x22text\x22 ng-model=\x22todoText\x22  size=\x2230\x22\x0a               placeholder=\x22add new todo here\x22>\x0a        <input class=\x22btn-primary\x22 type=\x22submit\x22 value=\x22add\x22>\x0a      </form>\x0a    </div>\x0a  </body>";
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(_st(html)._li())._with_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(html)._input();
_st($1)._type_("checkbox");
$2=_st($1)._trap_processors_(["done"],["inputChecked"]);
$ctx2.sendIdx["trap:processors:"]=1;
$2;
$3=_st(html)._span();
_st($3)._trap_processors_(["done"],["classDoneXxx"]);
$4=_st($3)._trap_(["text"]);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TodoItemWidget)})},
args: ["html"],
source: "renderOn: html\x0a\x09html li with: [\x0a\x09\x09html input type: 'checkbox'; trap: #('done') processors: #(inputChecked).\x0a\x09\x09html span\x0a\x09\x09\x09trap: #('done') processors: #(classDoneXxx);\x0a\x09\x09\x09trap: #('text') ]",
messageSends: ["with:", "li", "type:", "input", "trap:processors:", "span", "trap:"],
referencedClasses: []
}),
smalltalk.TodoItemWidget);


smalltalk.addMethod(
smalltalk.method({
selector: "classDoneXxx",
category: '*Trapped-Todo',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) {
var $1;
$1=self._dataToView_((function(carrier){
return smalltalk.withContext(function($ctx2) {
return _st(_st(carrier)._target())._class_("done-".__comma(_st(carrier)._value()));
}, function($ctx2) {$ctx2.fillBlock({carrier:carrier},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"classDoneXxx",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "classDoneXxx\x0a\x09^self dataToView: [ :carrier | carrier target class: 'done-', carrier value ]",
messageSends: ["dataToView:", "class:", "target", ",", "value"],
referencedClasses: []
}),
smalltalk.TrappedProcessor.klass);

});
