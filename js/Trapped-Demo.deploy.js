smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trapShow_",[["title"]]);
smalltalk.send(smalltalk.send(html,"_p",[]),"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_span",[]),"_trapShow_",[["items", smalltalk.symbolFor("size")]]);
return smalltalk.send(html,"_with_",[" item(s)."]);
})]);
smalltalk.send(smalltalk.send(html,"_p",[]),"_trapShow_",[["items"]]);
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
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var data;
data=smalltalk.send(path,"_asTrapPathOn_",[smalltalk.send(self,"_payload",[])]);
smalltalk.send(aBlock,"_value_",[data]);
return self}
}),
smalltalk.TrappedPlainModel);


smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_start",[]);
return self}
}),
smalltalk.TrappedPlainModel.klass);


smalltalk.addClass('App', smalltalk.TrappedPlainModel, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedPlainModel);
smalltalk.send(self,"_payload_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("items","__minus_gt",[["hello", "world"]]),smalltalk.send("title","__minus_gt",["To-Do List"])])]);
return self}
}),
smalltalk.App);



