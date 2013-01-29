smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('App', smalltalk.ListKeyedIsolatedEntity, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
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
return self}
}),
smalltalk.App);



smalltalk.addClass('AppModel', smalltalk.Object, ['title', 'todos', 'todoText'], 'Trapped-Demo');
smalltalk.addMethod(
"_addTodo",
smalltalk.method({
selector: "addTodo",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_todos",[]),"_add_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("text","__minus_gt",[smalltalk.send(self,"_todoText",[])]),smalltalk.send("done","__minus_gt",[false])])]);
smalltalk.send(self,"_todoText_",[""]);
return self}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_archive",
smalltalk.method({
selector: "archive",
fn: function (){
var self=this;
smalltalk.send(self,"_todos_",[smalltalk.send(self,"_todosNotDone",[])]);
return self}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_remaining",
smalltalk.method({
selector: "remaining",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_todosNotDone",[]),"_size",[]);
return $1;
}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_title",
smalltalk.method({
selector: "title",
fn: function (){
var self=this;
return self["@title"];
}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_title_",
smalltalk.method({
selector: "title:",
fn: function (aString){
var self=this;
self["@title"]=aString;
return self}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todoText",
smalltalk.method({
selector: "todoText",
fn: function (){
var self=this;
return self["@todoText"];
}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todoText_",
smalltalk.method({
selector: "todoText:",
fn: function (aString){
var self=this;
self["@todoText"]=aString;
return self}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todos",
smalltalk.method({
selector: "todos",
fn: function (){
var self=this;
return self["@todos"];
}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todos_",
smalltalk.method({
selector: "todos:",
fn: function (anArray){
var self=this;
self["@todos"]=anArray;
return self}
}),
smalltalk.AppModel);

smalltalk.addMethod(
"_todosNotDone",
smalltalk.method({
selector: "todosNotDone",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_todos",[]),"_reject_",[(function(each){
return smalltalk.send(each,"_at_",["done"]);
})]);
return $1;
}
}),
smalltalk.AppModel);



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
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
return self}
}),
smalltalk.AppView);



