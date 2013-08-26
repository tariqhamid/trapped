define("gh_herby_trapped/Trapped-Demo", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "gh_herby_trapped/Trapped-Backend", "amber/Kernel-Objects", "amber/Canvas"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Demo');
smalltalk.packages["Trapped-Demo"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('App', smalltalk.ListKeyedIsolatedEntity, [], 'Trapped-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $SimpleKeyedPubSub(){return smalltalk.SimpleKeyedPubSub||(typeof SimpleKeyedPubSub=="undefined"?nil:SimpleKeyedPubSub)}
function $AppModel(){return smalltalk.AppModel||(typeof AppModel=="undefined"?nil:AppModel)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.App.superclass.fn.prototype._initialize.apply(_st(self), []);
self._dispatcher_(_st($SimpleKeyedPubSub())._new());
self._model_(_st(_st($AppModel())._new())._title_("Todo"));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._modify_do_([["todos"]],(function(){
return smalltalk.withContext(function($ctx3) {
return [smalltalk.HashedCollection._from_(["text".__minus_gt("learn trapped"),"done".__minus_gt(true)]),smalltalk.HashedCollection._from_(["text".__minus_gt("build a trapped app"),"done".__minus_gt(false)])];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._valueWithTimeout_((2000));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.App)})},
messageSends: ["initialize", "dispatcher:", "new", "model:", "title:", "valueWithTimeout:", "modify:do:", "->"]}),
smalltalk.App);



smalltalk.addClass('AppModel', smalltalk.Object, ['title', 'todos', 'todoText'], 'Trapped-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "addTodo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._todos())._add_(smalltalk.HashedCollection._from_(["text".__minus_gt(self._todoText()),"done".__minus_gt(false)]));
self._todoText_("");
return self}, function($ctx1) {$ctx1.fill(self,"addTodo",{},smalltalk.AppModel)})},
messageSends: ["add:", "->", "todoText", "todos", "todoText:"]}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "archive",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._todos_(self._todosNotDone());
return self}, function($ctx1) {$ctx1.fill(self,"archive",{},smalltalk.AppModel)})},
messageSends: ["todos:", "todosNotDone"]}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "remaining",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._todosNotDone())._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"remaining",{},smalltalk.AppModel)})},
messageSends: ["size", "todosNotDone"]}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@title"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"title",{},smalltalk.AppModel)})},
messageSends: []}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@title"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"title:",{aString:aString},smalltalk.AppModel)})},
messageSends: []}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todoText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@todoText"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todoText",{},smalltalk.AppModel)})},
messageSends: []}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todoText:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@todoText"]=aString;
return self}, function($ctx1) {$ctx1.fill(self,"todoText:",{aString:aString},smalltalk.AppModel)})},
messageSends: []}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@todos"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"todos",{},smalltalk.AppModel)})},
messageSends: []}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todos:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@todos"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"todos:",{anArray:anArray},smalltalk.AppModel)})},
messageSends: []}),
smalltalk.AppModel);

smalltalk.addMethod(
smalltalk.method({
selector: "todosNotDone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._todos())._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._at_("done");
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"todosNotDone",{},smalltalk.AppModel)})},
messageSends: ["reject:", "at:", "todos"]}),
smalltalk.AppModel);



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$9,$10,$11,$12,$8;
[]._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
_st(_st(html)._h2())._trap_([["title"]]);
return _st(_st(html)._div())._trap_toggle_ifNotPresent_([["todos"]],(function(){
return smalltalk.withContext(function($ctx3) {
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
_st(_st(html)._span())._trap_([["remaining"]]);
_st(html)._with_(" of ");
_st(_st(html)._span())._trap_([["todos"], ["size"]]);
_st(html)._with_(" remaining [ ");
$1=_st(html)._a();
_st($1)._href_("");
_st($1)._onClick_((function(){
return smalltalk.withContext(function($ctx5) {
_st(snap)._modify_((function(model){
return smalltalk.withContext(function($ctx6) {
return _st(model)._archive();
}, function($ctx6) {$ctx6.fillBlock({model:model},$ctx5)})}));
return false;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
$2=_st($1)._with_("archive");
$2;
_st(html)._with_(" ]");
_st(_st(html)._ul())._with_((function(){
return smalltalk.withContext(function($ctx5) {
return _st(html)._trapIter_tag_do_([["todos"]],"li",(function(each){
return smalltalk.withContext(function($ctx6) {
_st(_st(html)._root())._empty();
$3=_st(html)._input();
_st($3)._type_("checkbox");
$4=_st($3)._trap_(["done"]);
$4;
$5=_st(html)._span();
_st($5)._trap_read_(["done"],(function(model){
return smalltalk.withContext(function($ctx7) {
return _st(_st(html)._root())._class_("done-".__comma(model));
}, function($ctx7) {$ctx7.fillBlock({model:model},$ctx6)})}));
$6=_st($5)._trap_(["text"]);
return $6;
}, function($ctx6) {$ctx6.fillBlock({each:each},$ctx5)})}));
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
$7=_st(html)._form();
_st($7)._onSubmit_((function(){
return smalltalk.withContext(function($ctx5) {
_st(snap)._modify_((function(model){
return smalltalk.withContext(function($ctx6) {
return _st(model)._addTodo();
}, function($ctx6) {$ctx6.fillBlock({model:model},$ctx5)})}));
return false;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
$8=_st($7)._with_((function(){
return smalltalk.withContext(function($ctx5) {
$9=_st(html)._input();
_st($9)._type_("text");
_st($9)._trap_([["todoText"]]);
_st($9)._at_put_("size",(30));
$10=_st($9)._placeholder_("add new todo here");
$10;
$11=_st(html)._input();
_st($11)._class_("btn-primary");
_st($11)._type_("submit");
$12=_st($11)._value_("add");
return $12;
}, function($ctx5) {$ctx5.fillBlock({},$ctx4)})}));
return $8;
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(html)._with_("Loading ...");
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.AppView)})},
messageSends: ["trapDescend:", "trap:", "h2", "trap:toggle:ifNotPresent:", "do:", "span", "with:", "href:", "a", "onClick:", "modify:", "archive", "trapIter:tag:do:", "empty", "root", "type:", "input", "trap:read:", "class:", ",", "ul", "onSubmit:", "addTodo", "form", "at:put:", "placeholder:", "value:", "div"]}),
smalltalk.AppView);


});
