define("trapped-todo/Trapped-Todo", ["amber/boot", "trapped/Trapped-Backend", "amber_core/Kernel-Objects", "trapped/Trapped-Frontend"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Trapped-Todo');
$core.packages["Trapped-Todo"].innerEval = function (expr) { return eval(expr); };
$core.packages["Trapped-Todo"].transport = {"type":"amd","amdNamespace":"trapped-todo"};

$core.addClass('App', $globals.ListKeyedIsolatedEntity, [], 'Trapped-Todo');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.App.comment="// Code from AngularJS Todo example, http://angularjs.org/#todo-js\x0afunction TodoCtrl($scope) {\x0a  $scope.todos = [\x0a    {text:'learn angular', done:true},\x0a    {text:'build an angular app', done:false}];\x0a \x0a  $scope.addTodo = function() {\x0a    $scope.todos.push({text:$scope.todoText, done:false});\x0a    $scope.todoText = '';\x0a  };\x0a \x0a  $scope.remaining = function() {\x0a    var count = 0;\x0a    angular.forEach($scope.todos, function(todo) {\x0a      count += todo.done ? 0 : 1;\x0a    });\x0a    return count;\x0a  };\x0a \x0a  $scope.archive = function() {\x0a    var oldTodos = $scope.todos;\x0a    $scope.todos = [];\x0a    angular.forEach(oldTodos, function(todo) {\x0a      if (!todo.done) $scope.todos.push(todo);\x0a    });\x0a  };\x0a}";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $SimpleAxon(){return $globals.SimpleAxon||(typeof SimpleAxon=="undefined"?nil:SimpleAxon)}
function $AppModel(){return $globals.AppModel||(typeof AppModel=="undefined"?nil:AppModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.App.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($SimpleAxon())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
self._axon_($1);
self._model_($recv($recv($AppModel())._new())._title_("Todo"));
self._watch_do_([["todos"], nil],(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._changed_([["remaining"]]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._modify_do_([["todos"]],(function(){
return [$globals.HashedCollection._newFromPairs_(["text","learn trapped","done",true]),$globals.HashedCollection._newFromPairs_(["text","build a trapped app","done",false])];

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((2000));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.App)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self axon: SimpleAxon new.\x0a    self model: (AppModel new title: 'Todo').\x0a\x09self watch: #((todos) nil) do: [ self changed: #((remaining)) ].\x0a    [ self modify: #((todos)) do: [{\x0a        #{'text'->'learn trapped'. 'done'->true}.\x0a        #{'text'->'build a trapped app'. 'done'->false}\x0a    }]] valueWithTimeout: 2000",
referencedClasses: ["SimpleAxon", "AppModel"],
//>>excludeEnd("ide");
messageSends: ["initialize", "axon:", "new", "model:", "title:", "watch:do:", "changed:", "valueWithTimeout:", "modify:do:"]
}),
$globals.App);



$core.addClass('AppModel', $globals.Object, ['title', 'todos', 'todoText'], 'Trapped-Todo');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AppModel.comment="// Code from AngularJS Todo example, http://angularjs.org/#todo-js\x0afunction TodoCtrl($scope) {\x0a  $scope.todos = [\x0a    {text:'learn angular', done:true},\x0a    {text:'build an angular app', done:false}];\x0a \x0a  $scope.addTodo = function() {\x0a    $scope.todos.push({text:$scope.todoText, done:false});\x0a    $scope.todoText = '';\x0a  };\x0a \x0a  $scope.remaining = function() {\x0a    var count = 0;\x0a    angular.forEach($scope.todos, function(todo) {\x0a      count += todo.done ? 0 : 1;\x0a    });\x0a    return count;\x0a  };\x0a \x0a  $scope.archive = function() {\x0a    var oldTodos = $scope.todos;\x0a    $scope.todos = [];\x0a    angular.forEach(oldTodos, function(todo) {\x0a      if (!todo.done) $scope.todos.push(todo);\x0a    });\x0a  };\x0a}";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addTodo",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._todos())._add_($globals.HashedCollection._newFromPairs_(["text",self._todoText(),"done",false]));
self._todoText_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTodo",{},$globals.AppModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addTodo\x0a    self todos add: #{'text'->self todoText. 'done'->false}.\x0a    self todoText: ''",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "todos", "todoText", "todoText:"]
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "archive",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._todos_(self._todosNotDone());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"archive",{},$globals.AppModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "archive\x0a    self todos: self todosNotDone",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["todos:", "todosNotDone"]
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "remaining",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._todosNotDone())._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"remaining",{},$globals.AppModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "remaining\x0a    ^self todosNotDone size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "todosNotDone"]
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "title",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@title"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "title\x0a\x09^title",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "title:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@title"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "title: aString\x0a\x09title := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "todoText",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@todoText"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "todoText\x0a\x09^todoText",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "todoText:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@todoText"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "todoText: aString\x0a\x09todoText := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "todos",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@todos"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "todos\x0a\x09^todos",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "todos:",
protocol: 'accessing',
fn: function (anArray){
var self=this;
self["@todos"]=anArray;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "todos: anArray\x0a\x09todos := anArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AppModel);

$core.addMethod(
$core.method({
selector: "todosNotDone",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._todos())._reject_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._at_("done");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"todosNotDone",{},$globals.AppModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "todosNotDone\x0a    ^self todos reject: [ :each | each at: 'done' ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["reject:", "todos", "at:"]
}),
$globals.AppModel);


$core.addMethod(
$core.method({
selector: "classDoneXxx",
protocol: '*Trapped-Todo',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._dataToView_((function(carrier){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(carrier)._target())._class_("done-".__comma($recv(carrier)._value()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({carrier:carrier},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classDoneXxx",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classDoneXxx\x0a\x09\x22This processor is not used any more,\x0a\x09it was replaced by generic\x0a\x09(replace ^ with ^done-) (attr class)\x0a\x09in HTML.\x0a\x0a\x09This example is left here to show how you can create quick\x0a\x09toView-only processor without class by just passing a block\x22\x0a\x0a\x09^self dataToView: [ :carrier | carrier target class: 'done-', carrier value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dataToView:", "class:", "target", ",", "value"]
}),
$globals.TrappedProcessor.klass);

});
