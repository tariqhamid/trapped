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


smalltalk.addClass('KeyedPubSubBase', smalltalk.Object, [], 'Trapped-Backend');
smalltalk.addMethod(
"_changed_",
smalltalk.method({
selector: "changed:",
fn: function (key){
var self=this;
var $1;
var needsToRun;
needsToRun=false;
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(each,"_accepts_",[key]);
if(smalltalk.assert($1)){
smalltalk.send(each,"_flag",[]);
needsToRun=true;
return needsToRun;
};
})]);
smalltalk.send(self,"_dirty_",[needsToRun]);
return self}
}),
smalltalk.KeyedPubSubBase);

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
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_on_hook_",
smalltalk.method({
selector: "on:hook:",
fn: function (key,aBlock){
var self=this;
smalltalk.send(self,"_add_",[smalltalk.send(smalltalk.send(self,"_subscriptionKey_block_",[key,aBlock]),"_flag",[])]);
smalltalk.send(self,"_dirty_",[true]);
return self}
}),
smalltalk.KeyedPubSubBase);

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
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_subscriptionKey_block_",
smalltalk.method({
selector: "subscriptionKey:block:",
fn: function (key,aBlock){
var self=this;
smalltalk.send(self,"_subclassReponsibility",[]);
return self}
}),
smalltalk.KeyedPubSubBase);



smalltalk.addClass('ListKeyedPubSubBase', smalltalk.KeyedPubSubBase, [], 'Trapped-Backend');
smalltalk.addMethod(
"_subscriptionKey_block_",
smalltalk.method({
selector: "subscriptionKey:block:",
fn: function (key,aBlock){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ListKeyedSubscription || ListKeyedSubscription),"_new",[]);
smalltalk.send($2,"_key_block_",[key,aBlock]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.ListKeyedPubSubBase);



smalltalk.addClass('SimpleListKeyedPubSub', smalltalk.ListKeyedPubSubBase, ['queue'], 'Trapped-Backend');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (aSubscription){
var self=this;
smalltalk.send(self["@queue"],"_add_",[aSubscription]);
return self}
}),
smalltalk.SimpleListKeyedPubSub);

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
smalltalk.SimpleListKeyedPubSub);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
smalltalk.send(self["@queue"],"_do_",[aBlock]);
return self}
}),
smalltalk.SimpleListKeyedPubSub);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.ListKeyedPubSubBase);
self["@queue"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self}
}),
smalltalk.SimpleListKeyedPubSub);



smalltalk.addClass('KeyedPubSubUnsubscribe', smalltalk.Error, [], 'Trapped-Backend');


smalltalk.addClass('KeyedSubscriptionBase', smalltalk.Object, ['key', 'actionBlock', 'flagged'], 'Trapped-Backend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
fn: function (aKey){
var self=this;
smalltalk.send(self,"_subclassResponsibility",[]);
return self}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_flag",
smalltalk.method({
selector: "flag",
fn: function (){
var self=this;
self["@flagged"]=true;
return self}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@key"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self}
}),
smalltalk.KeyedSubscriptionBase);

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
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_isFlagged",
smalltalk.method({
selector: "isFlagged",
fn: function (){
var self=this;
return self["@flagged"];
}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_key_block_",
smalltalk.method({
selector: "key:block:",
fn: function (anObject,aBlock){
var self=this;
self["@key"]=anObject;
self["@actionBlock"]=aBlock;
return self}
}),
smalltalk.KeyedSubscriptionBase);

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
}),"_on_do_",[(smalltalk.KeyedPubSubUnsubscribe || KeyedPubSubUnsubscribe),(function(){
self["@actionBlock"]=nil;
return self["@actionBlock"];
})]);
return self}
}),
smalltalk.KeyedSubscriptionBase);



smalltalk.addClass('ListKeyedSubscription', smalltalk.KeyedSubscriptionBase, [], 'Trapped-Backend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(aKey,"_size",[]),"__lt_eq",[smalltalk.send(self["@key"],"_size",[])]),"_and_",[(function(){
return smalltalk.send(aKey,"__eq",[smalltalk.send(self["@key"],"_copyFrom_to_",[(1),smalltalk.send(aKey,"_size",[])])]);
})]);
return $1;
}
}),
smalltalk.ListKeyedSubscription);



smalltalk.addClass('ListKeyedEntity', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Backend');
smalltalk.addMethod(
"_dispatcher",
smalltalk.method({
selector: "dispatcher",
fn: function (){
var self=this;
return self["@dispatcher"];
}
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_dispatcher_",
smalltalk.method({
selector: "dispatcher:",
fn: function (aDispatcher){
var self=this;
self["@dispatcher"]=aDispatcher;
return self}
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
self["@payload"]=anObject;
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[[]]);
return self}
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_watch_do_",
smalltalk.method({
selector: "watch:do:",
fn: function (path,aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_on_hook_",[path,(function(){
return smalltalk.send(self,"_read_do_",[path,aBlock]);
})]);
return self}
}),
smalltalk.ListKeyedEntity);



smalltalk.addClass('ListKeyedDirectEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var newValue;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[self["@payload"]])]);
smalltalk.send((function(){
return smalltalk.send(eavModel,"_on_put_",[self["@payload"],newValue]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self}
}),
smalltalk.ListKeyedDirectEntity);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[self["@payload"]])]);
return self}
}),
smalltalk.ListKeyedDirectEntity);



smalltalk.addClass('ListKeyedIsolatedEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_model_",[smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[anObject])],smalltalk.ListKeyedEntity);
return self}
}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(smalltalk.send([smalltalk.symbolFor("root")],"__comma",[path]),"_asEavModel",[]);
smalltalk.send((function(){
return smalltalk.send(self["@payload"],"_model_modify_",[eavModel,aBlock]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self}
}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(smalltalk.send([smalltalk.symbolFor("root")],"__comma",[path]),"_asEavModel",[]);
smalltalk.send(self["@payload"],"_model_read_",[eavModel,aBlock]);
return self}
}),
smalltalk.ListKeyedIsolatedEntity);



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

