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
smalltalk.send(self,"_initialize",[],smalltalk.ListKeyedIsolatedEntity);
smalltalk.send(self,"_dispatcher_",[smalltalk.send((smalltalk.SimpleListKeyedPubSub || SimpleListKeyedPubSub),"_new",[])]);
smalltalk.send(self,"_model_",[smalltalk.send(smalltalk.send((smalltalk.AppModel || AppModel),"_new",[]),"_title_",["Todo"])]);
smalltalk.send((function(){
return smalltalk.send(self,"_modify_do_",[[smalltalk.symbolFor("todos")],(function(){
return [smalltalk.HashedCollection._fromPairs_([smalltalk.send("text","__minus_gt",["learn trapped"]),smalltalk.send("done","__minus_gt",[true])]),smalltalk.HashedCollection._fromPairs_([smalltalk.send("text","__minus_gt",["build a trapped app"]),smalltalk.send("done","__minus_gt",[false])])];
})]);
}),"_valueWithTimeout_",[(2000)]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self dispatcher: SimpleListKeyedPubSub new.\x0a    self model: (AppModel new title: 'Todo').\x0a    [ self modify: #(#todos) do: [{\x0a        #{'text'->'learn trapped'. 'done'->true}.\x0a        #{'text'->'build a trapped app'. 'done'->false}\x0a    }]] valueWithTimeout: 2000\x0a",
messageSends: ["initialize", "dispatcher:", "new", "model:", "title:", "valueWithTimeout:", "modify:do:", "->"],
referencedClasses: ["SimpleListKeyedPubSub", "AppModel"]
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
smalltalk.send(smalltalk.send(self,"_todos",[]),"_add_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("text","__minus_gt",[smalltalk.send(self,"_todoText",[])]),smalltalk.send("done","__minus_gt",[false])])]);
smalltalk.send(self,"_todoText_",[""]);
return self},
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
smalltalk.send(self,"_todos_",[smalltalk.send(self,"_todosNotDone",[])]);
return self},
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
var $1;
$1=smalltalk.send(smalltalk.send(self,"_todosNotDone",[]),"_size",[]);
return $1;
},
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
return self["@title"];
},
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
self["@title"]=aString;
return self},
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
return self["@todoText"];
},
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
self["@todoText"]=aString;
return self},
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
return self["@todos"];
},
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
self["@todos"]=anArray;
return self},
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
var $1;
$1=smalltalk.send(smalltalk.send(self,"_todos",[]),"_reject_",[(function(each){
return smalltalk.send(each,"_at_",["done"]);
})]);
return $1;
},
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
var $1,$2,$3,$4,$5,$6,$7,$9,$10,$11,$12,$8;
smalltalk.send([],"_trapDescend_",[(function(snap){
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trap_",[[smalltalk.symbolFor("title")]]);
return smalltalk.send(smalltalk.send(html,"_div",[]),"_trap_toggle_ifNotPresent_",[[smalltalk.symbolFor("todos")],(function(){
return smalltalk.send(snap,"_do_",[(function(){
smalltalk.send(smalltalk.send(html,"_span",[]),"_trap_",[[smalltalk.symbolFor("remaining")]]);
smalltalk.send(html,"_with_",[" of "]);
smalltalk.send(smalltalk.send(html,"_span",[]),"_trap_",[[smalltalk.symbolFor("todos"), smalltalk.symbolFor("size")]]);
smalltalk.send(html,"_with_",[" remaining [ "]);
$1=smalltalk.send(html,"_a",[]);
smalltalk.send($1,"_href_",[""]);
smalltalk.send($1,"_onClick_",[(function(){
return smalltalk.send((function(){
smalltalk.send(snap,"_modify_",[(function(model){
return smalltalk.send(model,"_archive",[]);
})]);
return false;
}),"_value",[]);
})]);
$2=smalltalk.send($1,"_with_",["archive"]);
$2;
smalltalk.send(html,"_with_",[" ]"]);
smalltalk.send(smalltalk.send(html,"_ul",[]),"_trapIter_tag_do_",[[smalltalk.symbolFor("todos")],smalltalk.symbolFor("li"),(function(each){
smalltalk.send(smalltalk.send(html,"_root",[]),"_empty",[]);
$3=smalltalk.send(html,"_input",[]);
smalltalk.send($3,"_type_",["checkbox"]);
$4=smalltalk.send($3,"_trap_",[["done"]]);
$4;
$5=smalltalk.send(html,"_span",[]);
smalltalk.send($5,"_trap_read_",[["done"],(function(model){
return smalltalk.send(smalltalk.send(html,"_root",[]),"_class_",[smalltalk.send("done-","__comma",[model])]);
})]);
$6=smalltalk.send($5,"_trap_",[["text"]]);
return $6;
})]);
$7=smalltalk.send(html,"_form",[]);
smalltalk.send($7,"_onSubmit_",[(function(){
return smalltalk.send((function(){
smalltalk.send(snap,"_modify_",[(function(model){
return smalltalk.send(model,"_addTodo",[]);
})]);
return false;
}),"_value",[]);
})]);
$8=smalltalk.send($7,"_with_",[(function(){
$9=smalltalk.send(html,"_input",[]);
smalltalk.send($9,"_type_",["text"]);
smalltalk.send($9,"_trap_",[[smalltalk.symbolFor("todoText")]]);
smalltalk.send($9,"_at_put_",["size",(30)]);
$10=smalltalk.send($9,"_placeholder_",["add new todo here"]);
$10;
$11=smalltalk.send(html,"_input",[]);
smalltalk.send($11,"_class_",["btn-primary"]);
smalltalk.send($11,"_type_",["submit"]);
$12=smalltalk.send($11,"_value_",["add"]);
return $12;
})]);
return $8;
})]);
}),(function(){
return smalltalk.send(html,"_with_",["Loading ..."]);
})]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a    #() trapDescend: [ :snap |\x0a\x09html h2 trap: #(#title).\x0a    html div trap: #(#todos) toggle: [ snap do: [\x0a        html span trap:#(#remaining).\x0a        html with: ' of '.\x0a        html span trap: #(#todos #size).\x0a        html with: ' remaining [ '.\x0a        html a href:''; onClick: [[\x0a            snap modify: [ :model | model archive ].\x0a            false\x0a        ] value \x22amber GH-314 workaround\x22]; with: 'archive'.\x0a        html with: ' ]'.\x0a        html ul trapIter: #(#todos) tag: #li do: [ :each |\x0a            html root empty.\x0a            html input type: 'checkbox'; trap: #('done').\x0a            html span trap: #('done') read: [ :model | html root class: 'done-', model ]; trap: #('text').\x0a        ].\x0a        html form onSubmit: [[\x0a            snap modify: [ :model | model addTodo ].\x0a            false\x0a        ] value \x22amber GH-314 workaround\x22]; with: [\x0a            html input type: 'text'; trap: #(#todoText); at: 'size' put: 30; placeholder: 'add new todo here'.\x0a            html input class: 'btn-primary'; type: 'submit'; value: 'add'.\x0a        ].\x0a    ]] ifNotPresent: [ html with: 'Loading ...' ]]",
messageSends: ["trapDescend:", "trap:", "h2", "trap:toggle:ifNotPresent:", "do:", "span", "with:", "href:", "a", "onClick:", "value", "modify:", "archive", "trapIter:tag:do:", "empty", "root", "type:", "input", "trap:read:", "class:", ",", "ul", "onSubmit:", "addTodo", "form", "at:put:", "placeholder:", "value:", "div"],
referencedClasses: []
}),
smalltalk.AppView);



