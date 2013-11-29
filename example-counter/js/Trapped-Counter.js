define("gh_herby_trapped_counter/Trapped-Counter", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "gh_herby_trapped/Trapped-Backend", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Counter');
smalltalk.packages["Trapped-Counter"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped_counter"};

smalltalk.addClass('App', smalltalk.ListKeyedIsolatedEntity, [], 'Trapped-Counter');
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
var $1;
smalltalk.App.superclass.fn.prototype._initialize.apply(_st(self), []);
$1=_st($SimpleKeyedPubSub())._new();
$ctx1.sendIdx["new"]=1;
self._dispatcher_($1);
self._model_(_st($AppModel())._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.App)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self dispatcher: SimpleKeyedPubSub new.\x0a    self model: AppModel new",
messageSends: ["initialize", "dispatcher:", "new", "model:"],
referencedClasses: ["SimpleKeyedPubSub", "AppModel"]
}),
smalltalk.App);



smalltalk.addClass('AppModel', smalltalk.Object, ['value'], 'Trapped-Counter');
smalltalk.AppModel.comment="// Code from AngularJS Todo example, http://angularjs.org/#todo-js\x0afunction TodoCtrl($scope) {\x0a  $scope.todos = [\x0a    {text:'learn angular', done:true},\x0a    {text:'build an angular app', done:false}];\x0a \x0a  $scope.addTodo = function() {\x0a    $scope.todos.push({text:$scope.todoText, done:false});\x0a    $scope.todoText = '';\x0a  };\x0a \x0a  $scope.remaining = function() {\x0a    var count = 0;\x0a    angular.forEach($scope.todos, function(todo) {\x0a      count += todo.done ? 0 : 1;\x0a    });\x0a    return count;\x0a  };\x0a \x0a  $scope.archive = function() {\x0a    var oldTodos = $scope.todos;\x0a    $scope.todos = [];\x0a    angular.forEach(oldTodos, function(todo) {\x0a      if (!todo.done) $scope.todos.push(todo);\x0a    });\x0a  };\x0a}";
smalltalk.addMethod(
smalltalk.method({
selector: "decrement",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=_st(self["@value"]).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"decrement",{},smalltalk.AppModel)})},
args: [],
source: "decrement\x0a\x09value := value - 1",
messageSends: ["-"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "increment",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=_st(self["@value"]).__plus((1));
return self}, function($ctx1) {$ctx1.fill(self,"increment",{},smalltalk.AppModel)})},
args: [],
source: "increment\x0a\x09value := value + 1",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.AppModel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@value"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.AppModel)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09value := 0",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@value"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.AppModel)})},
args: [],
source: "value\x0a\x09^value",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@value"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{aNumber:aNumber},smalltalk.AppModel)})},
args: ["aNumber"],
source: "value: aNumber\x0a\x09value := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.AppModel);


});
