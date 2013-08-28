define("gh_herby_trapped/Trapped-Backend", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Backend');
smalltalk.packages["Trapped-Backend"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('EavModel', smalltalk.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "getBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@getBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"getBlock:",{aBlock:aBlock},smalltalk.EavModel)})},
messageSends: []}),
smalltalk.EavModel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.EavModel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@getBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("No getter block.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
self["@putBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("No putter block.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.EavModel)})},
messageSends: ["initialize", "error:"]}),
smalltalk.EavModel);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@getBlock"])._value_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.EavModel)})},
messageSends: ["value:"]}),
smalltalk.EavModel);

smalltalk.addMethod(
smalltalk.method({
selector: "on:put:",
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@putBlock"])._value_value_(anObject,anObject2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:put:",{anObject:anObject,anObject2:anObject2},smalltalk.EavModel)})},
messageSends: ["value:value:"]}),
smalltalk.EavModel);

smalltalk.addMethod(
smalltalk.method({
selector: "putBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@putBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"putBlock:",{aBlock:aBlock},smalltalk.EavModel)})},
messageSends: []}),
smalltalk.EavModel);



smalltalk.addClass('Isolator', smalltalk.Object, ['root'], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "model:modify:",
fn: function (anEavModel,aBlock){
var self=this;
var newValue;
return smalltalk.withContext(function($ctx1) { 
newValue=_st(aBlock)._value_(_st(anEavModel)._on_(self));
_st(anEavModel)._on_put_(self,_st(newValue)._deepCopy());
return self}, function($ctx1) {$ctx1.fill(self,"model:modify:",{anEavModel:anEavModel,aBlock:aBlock,newValue:newValue},smalltalk.Isolator)})},
messageSends: ["value:", "on:", "on:put:", "deepCopy"]}),
smalltalk.Isolator);

smalltalk.addMethod(
smalltalk.method({
selector: "model:read:",
fn: function (anEavModel,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aBlock)._value_(_st(_st(anEavModel)._on_(self))._deepCopy());
return self}, function($ctx1) {$ctx1.fill(self,"model:read:",{anEavModel:anEavModel,aBlock:aBlock},smalltalk.Isolator)})},
messageSends: ["value:", "deepCopy", "on:"]}),
smalltalk.Isolator);

smalltalk.addMethod(
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@root"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{},smalltalk.Isolator)})},
messageSends: []}),
smalltalk.Isolator);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@root"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{anObject:anObject},smalltalk.Isolator)})},
messageSends: []}),
smalltalk.Isolator);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._root_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.Isolator.klass)})},
messageSends: ["root:", "new"]}),
smalltalk.Isolator.klass);


smalltalk.addClass('KeyedPubSubBase', smalltalk.Object, ['factory'], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "changed:",
fn: function (key){
var self=this;
var needsToRun;
return smalltalk.withContext(function($ctx1) { 
var $1;
needsToRun=false;
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._accepts_(key);
if(smalltalk.assert($1)){
_st(each)._flag();
needsToRun=true;
return needsToRun;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._dirty_(needsToRun);
return self}, function($ctx1) {$ctx1.fill(self,"changed:",{key:key,needsToRun:needsToRun},smalltalk.KeyedPubSubBase)})},
messageSends: ["do:", "ifTrue:", "flag", "accepts:", "dirty:"]}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
smalltalk.method({
selector: "dirty:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=aBoolean;
if(smalltalk.assert($1)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
return self._run();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._fork();
};
return self}, function($ctx1) {$ctx1.fill(self,"dirty:",{aBoolean:aBoolean},smalltalk.KeyedPubSubBase)})},
messageSends: ["ifTrue:", "fork", "run"]}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
smalltalk.method({
selector: "on:hook:",
fn: function (key,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_(_st(_st(self["@factory"])._value_value_(key,aBlock))._flag());
self._dirty_(true);
return self}, function($ctx1) {$ctx1.fill(self,"on:hook:",{key:key,aBlock:aBlock},smalltalk.KeyedPubSubBase)})},
messageSends: ["add:", "flag", "value:value:", "dirty:"]}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
var needsClean;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
needsClean=false;
self._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$1=_st(each)._isFlagged();
if(smalltalk.assert($1)){
_st(each)._run();
$2=_st(each)._isEnabled();
if(! smalltalk.assert($2)){
needsClean=true;
return needsClean;
};
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$3=needsClean;
if(smalltalk.assert($3)){
self._clean();
};
return self}, function($ctx1) {$ctx1.fill(self,"run",{needsClean:needsClean},smalltalk.KeyedPubSubBase)})},
messageSends: ["do:", "ifTrue:", "run", "ifFalse:", "isEnabled", "isFlagged", "clean"]}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
smalltalk.method({
selector: "subscriptionFactory:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@factory"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"subscriptionFactory:",{aBlock:aBlock},smalltalk.KeyedPubSubBase)})},
messageSends: []}),
smalltalk.KeyedPubSubBase);



smalltalk.addClass('SimpleKeyedPubSub', smalltalk.KeyedPubSubBase, ['queue'], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (aSubscription){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@queue"])._add_(aSubscription);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aSubscription:aSubscription},smalltalk.SimpleKeyedPubSub)})},
messageSends: ["add:"]}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@queue"]=_st(self["@queue"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isEnabled();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{},smalltalk.SimpleKeyedPubSub)})},
messageSends: ["select:", "isEnabled"]}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@queue"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.SimpleKeyedPubSub)})},
messageSends: ["do:"]}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.SimpleKeyedPubSub.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@queue"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.SimpleKeyedPubSub)})},
messageSends: ["initialize", "new"]}),
smalltalk.SimpleKeyedPubSub);



smalltalk.addClass('KeyedPubSubUnsubscribe', smalltalk.Error, [], 'Trapped-Backend');


smalltalk.addClass('KeyedSubscriptionBase', smalltalk.Object, ['key', 'actionBlock', 'flagged'], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "accepts:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey},smalltalk.KeyedSubscriptionBase)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
smalltalk.method({
selector: "flag",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@flagged"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"flag",{},smalltalk.KeyedSubscriptionBase)})},
messageSends: []}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.KeyedSubscriptionBase.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@key"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.KeyedSubscriptionBase)})},
messageSends: ["initialize"]}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
smalltalk.method({
selector: "isEnabled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@actionBlock"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEnabled",{},smalltalk.KeyedSubscriptionBase)})},
messageSends: ["notNil"]}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
smalltalk.method({
selector: "isFlagged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@flagged"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFlagged",{},smalltalk.KeyedSubscriptionBase)})},
messageSends: []}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
smalltalk.method({
selector: "key:block:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@key"]=anObject;
self["@actionBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"key:block:",{anObject:anObject,aBlock:aBlock},smalltalk.KeyedSubscriptionBase)})},
messageSends: []}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
function $KeyedPubSubUnsubscribe(){return smalltalk.KeyedPubSubUnsubscribe||(typeof KeyedPubSubUnsubscribe=="undefined"?nil:KeyedPubSubUnsubscribe)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st((function(){
return smalltalk.withContext(function($ctx3) {
return _st(self["@actionBlock"])._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {
self["@flagged"]=false;
return self["@flagged"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($KeyedPubSubUnsubscribe(),(function(){
return smalltalk.withContext(function($ctx2) {
self["@actionBlock"]=nil;
return self["@actionBlock"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"run",{},smalltalk.KeyedSubscriptionBase)})},
messageSends: ["on:do:", "ensure:", "value"]}),
smalltalk.KeyedSubscriptionBase);



smalltalk.addClass('ListKeyedSubscription', smalltalk.KeyedSubscriptionBase, [], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "accepts:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aKey)._size()).__lt_eq(_st(self["@key"])._size()))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(aKey).__eq(_st(self["@key"])._copyFrom_to_((1),_st(aKey)._size()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey},smalltalk.ListKeyedSubscription)})},
messageSends: ["and:", "=", "copyFrom:to:", "size", "<="]}),
smalltalk.ListKeyedSubscription);



smalltalk.addClass('ListKeyedEntity', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "dispatcher",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@dispatcher"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dispatcher",{},smalltalk.ListKeyedEntity)})},
messageSends: []}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "dispatcher:",
fn: function (aDispatcher){
var self=this;
function $ListKeyedSubscription(){return smalltalk.ListKeyedSubscription||(typeof ListKeyedSubscription=="undefined"?nil:ListKeyedSubscription)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=aDispatcher;
_st($1)._subscriptionFactory_((function(key,block){
return smalltalk.withContext(function($ctx2) {
$2=_st($ListKeyedSubscription())._new();
_st($2)._key_block_(key,block);
$3=_st($2)._yourself();
return $3;
}, function($ctx2) {$ctx2.fillBlock({key:key,block:block},$ctx1)})}));
$4=_st($1)._yourself();
self["@dispatcher"]=$4;
return self}, function($ctx1) {$ctx1.fill(self,"dispatcher:",{aDispatcher:aDispatcher},smalltalk.ListKeyedEntity)})},
messageSends: ["subscriptionFactory:", "key:block:", "new", "yourself"]}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@payload"]=anObject;
_st(self._dispatcher())._changed_([]);
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ListKeyedEntity)})},
messageSends: ["changed:", "dispatcher"]}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "watch:do:",
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._dispatcher())._on_hook_(path,(function(){
return smalltalk.withContext(function($ctx2) {
return self._read_do_(path,aBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"watch:do:",{path:path,aBlock:aBlock},smalltalk.ListKeyedEntity)})},
messageSends: ["on:hook:", "read:do:", "dispatcher"]}),
smalltalk.ListKeyedEntity);



smalltalk.addClass('ListKeyedDirectEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var newValue,eavModel;
return smalltalk.withContext(function($ctx1) { 
eavModel=_st(path)._asEavModel();
newValue=_st(aBlock)._value_(_st(eavModel)._on_(self["@payload"]));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(eavModel)._on_put_(self["@payload"],newValue);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._dispatcher())._changed_(path);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,newValue:newValue,eavModel:eavModel},smalltalk.ListKeyedDirectEntity)})},
messageSends: ["asEavModel", "value:", "on:", "ensure:", "changed:", "dispatcher", "on:put:"]}),
smalltalk.ListKeyedDirectEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { 
eavModel=_st(path)._asEavModel();
_st(aBlock)._value_(_st(eavModel)._on_(self["@payload"]));
return self}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel},smalltalk.ListKeyedDirectEntity)})},
messageSends: ["asEavModel", "value:", "on:"]}),
smalltalk.ListKeyedDirectEntity);



smalltalk.addClass('ListKeyedIsolatedEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.ListKeyedIsolatedEntity.superclass.fn.prototype._model_.apply(_st(self), [_st($Isolator())._on_(anObject)]);
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.ListKeyedIsolatedEntity)})},
messageSends: ["model:", "on:"]}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { 
eavModel=_st(_st([["root"]]).__comma(path))._asEavModel();
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@payload"])._model_modify_(eavModel,aBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._dispatcher())._changed_(path);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,eavModel:eavModel},smalltalk.ListKeyedIsolatedEntity)})},
messageSends: ["asEavModel", ",", "ensure:", "changed:", "dispatcher", "model:modify:"]}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { 
eavModel=_st(_st([["root"]]).__comma(path))._asEavModel();
_st(self["@payload"])._model_read_(eavModel,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel},smalltalk.ListKeyedIsolatedEntity)})},
messageSends: ["asEavModel", ",", "model:read:"]}),
smalltalk.ListKeyedIsolatedEntity);


smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return nil;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject},smalltalk.Object)})},
messageSends: []}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_(_st("Trapped cannot put at ".__comma(_st(self._class())._name())).__comma(" type key."));
return self}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value},smalltalk.Object)})},
messageSends: ["error:", ",", "name", "class"]}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asEavModel",
fn: function (){
var self=this;
var model;
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
model=_st($EavModel())._new();
_st(model)._getBlock_((function(anObject){
return smalltalk.withContext(function($ctx2) {
return self._inject_into_(anObject,(function(soFar,segment){
return smalltalk.withContext(function($ctx3) {
$1=soFar;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
return _st(segment)._reverseTrapAt_(soFar);
};
}, function($ctx3) {$ctx3.fillBlock({soFar:soFar,segment:segment},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject},$ctx1)})}));
$2=self._isEmpty();
if(! smalltalk.assert($2)){
_st(model)._putBlock_((function(anObject,value){
var penultimate;
return smalltalk.withContext(function($ctx2) {
penultimate=_st(self._allButLast())._inject_into_(anObject,(function(soFar,segment){
return smalltalk.withContext(function($ctx3) {
$3=soFar;
if(($receiver = $3) == nil || $receiver == undefined){
return $3;
} else {
return _st(segment)._reverseTrapAt_(soFar);
};
}, function($ctx3) {$ctx3.fillBlock({soFar:soFar,segment:segment},$ctx2)})}));
penultimate;
return _st(self._last())._reverseTrapAt_put_(penultimate,value);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject,value:value,penultimate:penultimate},$ctx1)})}));
};
$4=model;
return $4;
}, function($ctx1) {$ctx1.fill(self,"asEavModel",{model:model},smalltalk.SequenceableCollection)})},
messageSends: ["new", "getBlock:", "inject:into:", "ifNotNil:", "reverseTrapAt:", "ifFalse:", "putBlock:", "allButLast", "reverseTrapAt:put:", "last", "isEmpty"]}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(anObject)._perform_(self._first());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_($MessageNotUnderstood(),(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject},smalltalk.Array)})},
messageSends: ["on:do:", "perform:", "first"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._perform_withArguments_(_st(_st(self._first()).__comma(":"))._asSymbol(),[value]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value},smalltalk.Array)})},
messageSends: ["perform:withArguments:", "asSymbol", ",", "first"]}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._at_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject},smalltalk.String)})},
messageSends: ["at:ifAbsent:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._at_put_(self,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value},smalltalk.String)})},
messageSends: ["at:put:"]}),
smalltalk.String);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._at_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject},smalltalk.Number)})},
messageSends: ["at:ifAbsent:"]}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anObject)._at_put_(self,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value},smalltalk.Number)})},
messageSends: ["at:put:"]}),
smalltalk.Number);

});
