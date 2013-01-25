smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trapShow_",[["title"]]);
smalltalk.send(smalltalk.send(html,"_div",[]),"_trap_toggle_ifNotPresent_",[["items"],(function(){
smalltalk.send(smalltalk.send(html,"_p",[]),"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_span",[]),"_trapShow_",[[smalltalk.symbolFor("size")]]);
return smalltalk.send(html,"_with_",[" item(s)."]);
})]);
return smalltalk.send(smalltalk.send(html,"_p",[]),"_trapShow_",[[]]);
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
fn: function (aTriplet){
var self=this;
smalltalk.send(self["@queue"],"_add_",[aTriplet]);
smalltalk.send(self,"_dirty_",[smalltalk.send(aTriplet,"_first",[])]);
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
return smalltalk.send(smalltalk.send(each,"_third",[]),"_notNil",[]);
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



smalltalk.addClass('TrappedPlainModel', smalltalk.TrappedModelWrapper, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedModelWrapper);
smalltalk.send(self,"_dispatcher_",[smalltalk.send((smalltalk.TrappedDumbDispatcher || TrappedDumbDispatcher),"_new",[])]);
return self}
}),
smalltalk.TrappedPlainModel);

smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var newValue;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[smalltalk.send(self,"_payload",[])])]);
smalltalk.send((function(){
return smalltalk.send(eavModel,"_on_put_",[smalltalk.send(self,"_payload",[]),newValue]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self}
}),
smalltalk.TrappedPlainModel);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[smalltalk.send(self,"_payload",[])])]);
return self}
}),
smalltalk.TrappedPlainModel);



smalltalk.addClass('App', smalltalk.TrappedPlainModel, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedPlainModel);
smalltalk.send(self,"_payload_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("title","__minus_gt",["To-Do List"])])]);
smalltalk.send((function(){
smalltalk.send(smalltalk.send(self,"_payload",[]),"_at_put_",["items",["hello", "world"]]);
return smalltalk.send(self,"_payload_",[smalltalk.send(self,"_payload",[])]);
}),"_valueWithTimeout_",[(2000)]);
return self}
}),
smalltalk.App);



