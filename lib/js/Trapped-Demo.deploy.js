smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('App', smalltalk.ListKeyedIsolatedEntity, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.App)})}
}),
smalltalk.App);



smalltalk.addClass('AppModel', smalltalk.Object, ['title', 'todos', 'todoText'], 'Trapped-Demo');
smalltalk.addMethod(
"_addTodo",
smalltalk.method({
selector: "addTodo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._todos())._add_(smalltalk.HashedCollection._fromPairs_([_st("text").__minus_gt(_st(self)._todoText()),_st("done").__minus_gt(false)]));
_st(self)._todoText_("");
return self}, function($ctx1) {$ctx1.fill(self,"addTodo",{}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_archive",
smalltalk.method({
selector: "archive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._todos_(_st(self)._todosNotDone());
return self}, function($ctx1) {$ctx1.fill(self,"archive",{}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_remaining",
smalltalk.method({
selector: "remaining",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._todosNotDone())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"remaining",{}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todoText",
smalltalk.method({
selector: "todoText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@todoText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todoText",{}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todoText_",
smalltalk.method({
selector: "todoText:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@todoText"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"todoText:",{aString:aString}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todos",
smalltalk.method({
selector: "todos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@todos"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todos",{}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todos_",
smalltalk.method({
selector: "todos:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@todos"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"todos:",{anArray:anArray}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todosNotDone",
smalltalk.method({
selector: "todosNotDone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._todos())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._at_("done");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"todosNotDone",{}, smalltalk.AppModel)})}
}),
smalltalk.AppModel);



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.AppView)})}
}),
smalltalk.AppView);



