define("gh_herby_trapped/Trapped-Demo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "gh_herby_trapped/Trapped-Backend", "amber_core/Kernel-Objects", "amber_core/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Demo');
smalltalk.packages["Trapped-Demo"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('App', smalltalk.ListKeyedIsolatedEntity, [], 'Trapped-Demo');
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



smalltalk.addClass('AppModel', smalltalk.Object, ['title', 'todos', 'todoText'], 'Trapped-Demo');
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



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.AppView.comment="<!-- Code from AngularJS Todo example, http://angularjs.org/#todo-html -->\x0a  <body>\x0a    <h2>Todo</h2>\x0a    <div ng-controller=\x22TodoCtrl\x22>\x0a      <span>{{remaining()}} of {{todos.length}} remaining</span>\x0a      [ <a href=\x22\x22 ng-click=\x22archive()\x22>archive</a> ]\x0a      <ul class=\x22unstyled\x22>\x0a        <li ng-repeat=\x22todo in todos\x22>\x0a          <input type=\x22checkbox\x22 ng-model=\x22todo.done\x22>\x0a          <span class=\x22done-{{todo.done}}\x22>{{todo.text}}</span>\x0a        </li>\x0a      </ul>\x0a      <form ng-submit=\x22addTodo()\x22>\x0a        <input type=\x22text\x22 ng-model=\x22todoText\x22  size=\x2230\x22\x0a               placeholder=\x22add new todo here\x22>\x0a        <input class=\x22btn-primary\x22 type=\x22submit\x22 value=\x22add\x22>\x0a      </form>\x0a    </div>\x0a  </body>";
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._h2())._trap_([["title"]]);
_st(_st(html)._div())._trap_processors_([],[["guard", [["todos"], ["notNil"]]], ["widget", "TemporaryWidget"]]);
$ctx1.sendIdx["trap:processors:"]=1;
_st(_st(html)._p())._trap_processors_([],[["guard", [["todos"], ["isNil"]]], ["widget", "TemporaryWidget2"]]);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AppView)})},
args: ["html"],
source: "renderOn: html\x0a\x09html h2 trap: #((title)).\x0a    html div trap: #() processors: #((guard ((todos) (notNil))) (widget TemporaryWidget)).\x0a\x09html p trap: #() processors: #((guard ((todos) (isNil))) (widget TemporaryWidget2))",
messageSends: ["trap:", "h2", "trap:processors:", "div", "p"],
referencedClasses: []
}),
smalltalk.AppView);



smalltalk.addClass('TemporaryWidget', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.TemporaryWidget.comment="<!-- Code from AngularJS Todo example, http://angularjs.org/#todo-html -->\x0a  <body>\x0a    <h2>Todo</h2>\x0a    <div ng-controller=\x22TodoCtrl\x22>\x0a      <span>{{remaining()}} of {{todos.length}} remaining</span>\x0a      [ <a href=\x22\x22 ng-click=\x22archive()\x22>archive</a> ]\x0a      <ul class=\x22unstyled\x22>\x0a        <li ng-repeat=\x22todo in todos\x22>\x0a          <input type=\x22checkbox\x22 ng-model=\x22todo.done\x22>\x0a          <span class=\x22done-{{todo.done}}\x22>{{todo.text}}</span>\x0a        </li>\x0a      </ul>\x0a      <form ng-submit=\x22addTodo()\x22>\x0a        <input type=\x22text\x22 ng-model=\x22todoText\x22  size=\x2230\x22\x0a               placeholder=\x22add new todo here\x22>\x0a        <input class=\x22btn-primary\x22 type=\x22submit\x22 value=\x22add\x22>\x0a      </form>\x0a    </div>\x0a  </body>";
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$12,$13,$14,$15,$11;
$1=_st(html)._span();
$ctx1.sendIdx["span"]=1;
_st($1)._trap_([["remaining"]]);
$ctx1.sendIdx["trap:"]=1;
_st(html)._with_(" of ");
$ctx1.sendIdx["with:"]=1;
$2=_st(html)._span();
$ctx1.sendIdx["span"]=2;
_st($2)._trap_([["todos"], ["size"]]);
$ctx1.sendIdx["trap:"]=2;
_st(html)._with_(" remaining [ ");
$ctx1.sendIdx["with:"]=2;
$3=_st(html)._a();
_st($3)._href_("");
_st($3)._trap_processors_([],[["signal", "archive"], "whenClicked"]);
$ctx1.sendIdx["trap:processors:"]=1;
$4=_st($3)._with_("archive");
$ctx1.sendIdx["with:"]=3;
_st(html)._with_(" ]");
$ctx1.sendIdx["with:"]=4;
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(html)._trapIter_tag_do_([["todos"]],"li",(function(each){
return smalltalk.withContext(function($ctx3) {
$5=_st(html)._root();
$ctx3.sendIdx["root"]=1;
_st($5)._empty();
$6=_st(html)._input();
$ctx3.sendIdx["input"]=1;
_st($6)._type_("checkbox");
$ctx3.sendIdx["type:"]=1;
$7=_st($6)._trap_processors_(["done"],["inputChecked"]);
$ctx3.sendIdx["trap:processors:"]=2;
$7;
$8=_st(html)._span();
_st($8)._trap_read_(["done"],(function(model){
return smalltalk.withContext(function($ctx4) {
return _st(_st(html)._root())._class_("done-".__comma(model));
$ctx4.sendIdx["class:"]=1;
}, function($ctx4) {$ctx4.fillBlock({model:model},$ctx3,3)})}));
$9=_st($8)._trap_(["text"]);
return $9;
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["with:"]=5;
$10=_st(html)._form();
_st($10)._trap_processors_([],[["signal", "addTodo"], "whenSubmitted"]);
$ctx1.sendIdx["trap:processors:"]=3;
$11=_st($10)._with_((function(){
return smalltalk.withContext(function($ctx2) {
$12=_st(html)._input();
$ctx2.sendIdx["input"]=2;
_st($12)._type_("text");
$ctx2.sendIdx["type:"]=2;
_st($12)._trap_processors_([["todoText"]],["inputValue"]);
_st($12)._at_put_("size",(30));
$13=_st($12)._placeholder_("add new todo here");
$13;
$14=_st(html)._input();
_st($14)._class_("btn-primary");
_st($14)._type_("submit");
$15=_st($14)._value_("add");
return $15;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TemporaryWidget)})},
args: ["html"],
source: "renderOn: html\x0a        html span trap:#((remaining)).\x0a        html with: ' of '.\x0a        html span trap: #((todos) (size)).\x0a        html with: ' remaining [ '.\x0a        html a\x0a\x09\x09\x09href:'';\x0a\x09\x09\x09trap: #() processors: #((signal archive) whenClicked);\x0a\x09\x09\x09with: 'archive'.\x0a        html with: ' ]'.\x0a        html ul with: [ html trapIter: #((todos)) tag: #li do: [ :each |\x0a            html root empty.\x0a            html input type: 'checkbox'; trap: #('done') processors: #(inputChecked).\x0a            html span trap: #('done') read: [ :model | html root class: 'done-', model ]; trap: #('text').\x0a        ]].\x0a        html form trap: #() processors: #((signal addTodo) whenSubmitted); with: [\x0a            html input type: 'text'; trap: #((todoText)) processors: #(inputValue); at: 'size' put: 30; placeholder: 'add new todo here'.\x0a            html input class: 'btn-primary'; type: 'submit'; value: 'add'.\x0a        ]",
messageSends: ["trap:", "span", "with:", "href:", "a", "trap:processors:", "ul", "trapIter:tag:do:", "empty", "root", "type:", "input", "trap:read:", "class:", ",", "form", "at:put:", "placeholder:", "value:"],
referencedClasses: []
}),
smalltalk.TemporaryWidget);



smalltalk.addClass('TemporaryWidget2', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._root())._contents_("Loading ...");
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TemporaryWidget2)})},
args: ["html"],
source: "renderOn: html\x0a\x09html root contents: 'Loading ...'",
messageSends: ["contents:", "root"],
referencedClasses: []
}),
smalltalk.TemporaryWidget2);


});
