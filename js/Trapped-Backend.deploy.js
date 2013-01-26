smalltalk.addPackage('Trapped-Backend', {});
smalltalk.addClass('EavModel', smalltalk.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
smalltalk.addMethod(
"_getBlock_",
smalltalk.method({
selector: "getBlock:",
fn: function (aBlock){
var self=this;
self["@getBlock"]=aBlock;
return self}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@getBlock"]=(function(){
return smalltalk.send(self,"_error_",["No getter block."]);
});
self["@putBlock"]=(function(){
return smalltalk.send(self,"_error_",["No putter block."]);
});
return self}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self["@getBlock"],"_value_",[anObject]);
return $1;
}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_put_",
smalltalk.method({
selector: "on:put:",
fn: function (anObject,anObject2){
var self=this;
var $1;
$1=smalltalk.send(self["@putBlock"],"_value_value_",[anObject,anObject2]);
return $1;
}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_putBlock_",
smalltalk.method({
selector: "putBlock:",
fn: function (aBlock){
var self=this;
self["@putBlock"]=aBlock;
return self}
}),
smalltalk.EavModel);



smalltalk.addClass('Isolator', smalltalk.Object, ['root'], 'Trapped-Backend');
smalltalk.addMethod(
"_model_modify_",
smalltalk.method({
selector: "model:modify:",
fn: function (anEavModel,aBlock){
var self=this;
var newValue;
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(anEavModel,"_on_",[self])]);
smalltalk.send(anEavModel,"_on_put_",[self,smalltalk.send(newValue,"_deepCopy",[])]);
return self}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_model_read_",
smalltalk.method({
selector: "model:read:",
fn: function (anEavModel,aBlock){
var self=this;
smalltalk.send(aBlock,"_value_",[smalltalk.send(smalltalk.send(anEavModel,"_on_",[self]),"_deepCopy",[])]);
return self}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return self["@root"];
}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
fn: function (anObject){
var self=this;
self["@root"]=anObject;
return self}
}),
smalltalk.Isolator);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_root_",[anObject]);
return $1;
}
}),
smalltalk.Isolator.klass);


smalltalk.addClass('TrappedDispatcher', smalltalk.Object, [], 'Trapped-Backend');
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
$1=smalltalk.send(each,"_accepts_",[path]);
if(smalltalk.assert($1)){
smalltalk.send(each,"_flag",[]);
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
"_on_hook_",
smalltalk.method({
selector: "on:hook:",
fn: function (path,aBlock){
var self=this;
smalltalk.send(self,"_add_",[smalltalk.send(smalltalk.send((smalltalk.TrappedSubscription || TrappedSubscription),"_path_action_",[path,aBlock]),"_flag",[])]);
smalltalk.send(self,"_dirty_",[true]);
return self}
}),
smalltalk.TrappedDispatcher);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
var $1,$2;
var needsClean;
needsClean=false;
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(each,"_isFlagged",[]);
if(smalltalk.assert($1)){
smalltalk.send(each,"_run",[]);
$2=smalltalk.send(each,"_isEnabled",[]);
if(! smalltalk.assert($2)){
needsClean=true;
return needsClean;
};
};
})]);
if(smalltalk.assert(needsClean)){
smalltalk.send(self,"_clean",[]);
};
return self}
}),
smalltalk.TrappedDispatcher);



smalltalk.addClass('TrappedSubscription', smalltalk.Object, ['path', 'actionBlock', 'flagged'], 'Trapped-Backend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
fn: function (aPath){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(aPath,"_size",[]),"__lt_eq",[smalltalk.send(self["@path"],"_size",[])]),"_and_",[(function(){
return smalltalk.send(aPath,"__eq",[smalltalk.send(self["@path"],"_copyFrom_to_",[(1),smalltalk.send(aPath,"_size",[])])]);
})]);
return $1;
}
}),
smalltalk.TrappedSubscription);

smalltalk.addMethod(
"_flag",
smalltalk.method({
selector: "flag",
fn: function (){
var self=this;
self["@flagged"]=true;
return self}
}),
smalltalk.TrappedSubscription);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@path"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self}
}),
smalltalk.TrappedSubscription);

smalltalk.addMethod(
"_isEnabled",
smalltalk.method({
selector: "isEnabled",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self["@actionBlock"],"_notNil",[]);
return $1;
}
}),
smalltalk.TrappedSubscription);

smalltalk.addMethod(
"_isFlagged",
smalltalk.method({
selector: "isFlagged",
fn: function (){
var self=this;
return self["@flagged"];
}
}),
smalltalk.TrappedSubscription);

smalltalk.addMethod(
"_path_actionBlock_",
smalltalk.method({
selector: "path:actionBlock:",
fn: function (anArray,aBlock){
var self=this;
self["@path"]=anArray;
self["@actionBlock"]=aBlock;
return self}
}),
smalltalk.TrappedSubscription);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
smalltalk.send((function(){
return smalltalk.send((function(){
return smalltalk.send(self["@actionBlock"],"_value",[]);
}),"_ensure_",[(function(){
self["@flagged"]=false;
return self["@flagged"];
})]);
}),"_on_do_",[(smalltalk.TrappedUnwatch || TrappedUnwatch),(function(){
self["@actionBlock"]=nil;
return self["@actionBlock"];
})]);
return self}
}),
smalltalk.TrappedSubscription);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
smalltalk.send(self,"_shouldNotImplement",[]);
return self}
}),
smalltalk.TrappedSubscription.klass);

smalltalk.addMethod(
"_path_action_",
smalltalk.method({
selector: "path:action:",
fn: function (anArray,aBlock){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[],smalltalk.Object.klass),"_path_actionBlock_",[anArray,aBlock]);
return $1;
}
}),
smalltalk.TrappedSubscription.klass);


smalltalk.addClass('TrappedUnwatch', smalltalk.Error, [], 'Trapped-Backend');


smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return nil;
}
}),
smalltalk.Object);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
smalltalk.send(self,"_error_",[smalltalk.send(smalltalk.send("Trapped cannot put at ","__comma",[smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[])]),"__comma",[" type key."])]);
return self}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asEavModel",
smalltalk.method({
selector: "asEavModel",
fn: function (){
var self=this;
var $1;
var model;
model=smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]);
smalltalk.send(model,"_getBlock_",[(function(anObject){
return smalltalk.send(self,"_inject_into_",[anObject,(function(soFar,segment){
if(($receiver = soFar) == nil || $receiver == undefined){
return soFar;
} else {
return smalltalk.send(segment,"_reverseTrapAt_",[soFar]);
};
})]);
})]);
$1=smalltalk.send(self,"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(model,"_putBlock_",[(function(anObject,value){
var penultimate;
penultimate=smalltalk.send(smalltalk.send(self,"_allButLast",[]),"_inject_into_",[anObject,(function(soFar,segment){
if(($receiver = soFar) == nil || $receiver == undefined){
return soFar;
} else {
return smalltalk.send(segment,"_reverseTrapAt_",[soFar]);
};
})]);
penultimate;
return smalltalk.send(smalltalk.send(self,"_last",[]),"_reverseTrapAt_put_",[penultimate,value]);
})]);
};
return model;
}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
}
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
var $1;
var $early={};
try {
$1=smalltalk.send((function(){
return smalltalk.send(anObject,"_perform_",[self]);
}),"_on_do_",[(smalltalk.MessageNotUnderstood || MessageNotUnderstood),(function(){
throw $early=[nil];
})]);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"__comma",[":"]),"_asSymbol",[]),[value]]);
return $1;
}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
}
}),
smalltalk.Number);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
}
}),
smalltalk.Number);

