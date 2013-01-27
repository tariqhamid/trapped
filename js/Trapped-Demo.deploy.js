smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('App', smalltalk.TrappedMWIsolated, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
var obj;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedMWIsolated);
smalltalk.send(self,"_dispatcher_",[smalltalk.send((smalltalk.TrappedDumbDispatcher || TrappedDumbDispatcher),"_new",[])]);
obj=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title","__minus_gt",["To-Do List"])]);
smalltalk.send(self,"_model_",[obj]);
smalltalk.send((function(){
smalltalk.send(obj,"_at_put_",["items",[[true, "hello"], [false, "world"]]]);
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[[]]);
}),"_valueWithTimeout_",[(2000)]);
return self}
}),
smalltalk.App);



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
var $1,$2,$3,$4;
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trap_",[["title"]]);
smalltalk.send(smalltalk.send(html,"_div",[]),"_trap_toggle_ifNotPresent_",[["items"],(function(){
smalltalk.send(smalltalk.send(html,"_p",[]),"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_span",[]),"_trap_",[[smalltalk.symbolFor("size")]]);
return smalltalk.send(html,"_with_",[" item(s)."]);
})]);
smalltalk.send(smalltalk.send(html,"_form",[]),"_with_",[(function(){
return smalltalk.send(smalltalk.send(html,"_ul",[]),"_trapIter_tag_do_",[[],smalltalk.symbolFor("li"),(function(each){
smalltalk.send(smalltalk.send(html,"_root",[]),"_empty",[]);
$1=smalltalk.send(html,"_input",[]);
smalltalk.send($1,"_type_",["checkbox"]);
$2=smalltalk.send($1,"_trap_",[[(1)]]);
$2;
return smalltalk.send(smalltalk.send(html,"_span",[]),"_trap_",[[(2)]]);
})]);
})]);
smalltalk.send(smalltalk.send(html,"_p",[]),"_with_",["... and again, to see the bidirectional binding:"]);
return smalltalk.send(smalltalk.send(html,"_form",[]),"_with_",[(function(){
return smalltalk.send(smalltalk.send(html,"_ul",[]),"_trapIter_tag_do_",[[],smalltalk.symbolFor("li"),(function(each){
smalltalk.send(smalltalk.send(html,"_root",[]),"_empty",[]);
$3=smalltalk.send(html,"_input",[]);
smalltalk.send($3,"_type_",["checkbox"]);
$4=smalltalk.send($3,"_trap_",[[(1)]]);
$4;
return smalltalk.send(smalltalk.send(html,"_span",[]),"_trap_",[[(2)]]);
})]);
})]);
}),(function(){
return smalltalk.send(html,"_with_",["Loading ..."]);
})]);
return self}
}),
smalltalk.AppView);



smalltalk.addClass('TrappedDumbDispatcher', smalltalk.TrappedDispatcher, ['queue'], 'Trapped-Demo');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (aSubscription){
var self=this;
smalltalk.send(self["@queue"],"_add_",[aSubscription]);
return self}
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_clean",
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
self["@queue"]=smalltalk.send(self["@queue"],"_select_",[(function(each){
return smalltalk.send(each,"_isEnabled",[]);
})]);
return self}
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
smalltalk.send(self["@queue"],"_do_",[aBlock]);
return self}
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
self["@queue"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self}
}),
smalltalk.TrappedDumbDispatcher);



