smalltalk.addPackage('Trapped-Common', {});
smalltalk.addClass('TrappedDispatcher', smalltalk.Object, [], 'Trapped-Common');
smalltalk.addMethod(
"_changed_",
smalltalk.method({
selector: "changed:",
fn: function (path){
var self=this;
var $1;
var needsToRun;
needsToRun=false;
smalltalk.send(self,"_do_",[(function(each){
var aPath;
var lesser;
aPath=smalltalk.send(each,"_second",[]);
aPath;
lesser=smalltalk.send(smalltalk.send(aPath,"_size",[]),"_min_",[smalltalk.send(path,"_size",[])]);
lesser;
$1=smalltalk.send(smalltalk.send(path,"_copyFrom_to_",[(1),lesser]),"__eq",[smalltalk.send(aPath,"_copyFrom_to_",[(1),lesser])]);
if(smalltalk.assert($1)){
smalltalk.send(each,"_at_put_",[(1),true]);
needsToRun=true;
return needsToRun;
};
})]);
smalltalk.send(self,"_dirty_",[needsToRun]);
return self}
}),
smalltalk.TrappedDispatcher);

smalltalk.addMethod(
"_dirty_",
smalltalk.method({
selector: "dirty:",
fn: function (aBoolean){
var self=this;
if(smalltalk.assert(aBoolean)){
smalltalk.send((function(){
return smalltalk.send(self,"_run",[]);
}),"_fork",[]);
};
return self}
}),
smalltalk.TrappedDispatcher);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
var $1;
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(each,"_first",[]);
if(smalltalk.assert($1)){
return smalltalk.send((function(){
return smalltalk.send(smalltalk.send(each,"_third",[]),"_value",[]);
}),"_ensure_",[(function(){
return smalltalk.send(each,"_at_put_",[(1),false]);
})]);
};
})]);
return self}
}),
smalltalk.TrappedDispatcher);



smalltalk.addClass('TrappedModelWrapper', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Common');
smalltalk.addMethod(
"_dispatcher",
smalltalk.method({
selector: "dispatcher",
fn: function (){
var self=this;
return self["@dispatcher"];
}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_dispatcher_",
smalltalk.method({
selector: "dispatcher:",
fn: function (aDispatcher){
var self=this;
self["@dispatcher"]=aDispatcher;
return self}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[]);
return $1;
}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_payload",
smalltalk.method({
selector: "payload",
fn: function (){
var self=this;
return self["@payload"];
}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_payload_",
smalltalk.method({
selector: "payload:",
fn: function (anObject){
var self=this;
self["@payload"]=anObject;
return self}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_register_name_",[self,smalltalk.send(self,"_name",[])]);
return self}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_watch_do_",
smalltalk.method({
selector: "watch:do:",
fn: function (path,aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_add_",[[true,path,(function(){
return smalltalk.send(self,"_read_do_",[path,aBlock]);
})]]);
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_dirty_",[true]);
return self}
}),
smalltalk.TrappedModelWrapper);


smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_start",[]);
return self}
}),
smalltalk.TrappedModelWrapper.klass);


