smalltalk.addPackage('Trapped-Backend', {});
smalltalk.addClass('EavModel', smalltalk.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
smalltalk.addMethod(
"_getBlock_",
smalltalk.method({
selector: "getBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@getBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"getBlock:",{aBlock:aBlock}, smalltalk.EavModel)})}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@getBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("No getter block.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
self["@putBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("No putter block.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.EavModel)})}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@getBlock"])._value_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject}, smalltalk.EavModel)})}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_put_",
smalltalk.method({
selector: "on:put:",
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@putBlock"])._value_value_(anObject,anObject2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:put:",{anObject:anObject,anObject2:anObject2}, smalltalk.EavModel)})}
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_putBlock_",
smalltalk.method({
selector: "putBlock:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@putBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"putBlock:",{aBlock:aBlock}, smalltalk.EavModel)})}
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
return smalltalk.withContext(function($ctx1) { newValue=_st(aBlock)._value_(_st(anEavModel)._on_(self));
_st(anEavModel)._on_put_(self,_st(newValue)._deepCopy());
return self}, function($ctx1) {$ctx1.fill(self,"model:modify:",{anEavModel:anEavModel,aBlock:aBlock,newValue:newValue}, smalltalk.Isolator)})}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_model_read_",
smalltalk.method({
selector: "model:read:",
fn: function (anEavModel,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aBlock)._value_(_st(_st(anEavModel)._on_(self))._deepCopy());
return self}, function($ctx1) {$ctx1.fill(self,"model:read:",{anEavModel:anEavModel,aBlock:aBlock}, smalltalk.Isolator)})}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@root"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{}, smalltalk.Isolator)})}
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@root"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{anObject:anObject}, smalltalk.Isolator)})}
}),
smalltalk.Isolator);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._root_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject}, smalltalk.Isolator.klass)})}
}),
smalltalk.Isolator.klass);


smalltalk.addClass('KeyedPubSubBase', smalltalk.Object, ['factory'], 'Trapped-Backend');
smalltalk.addMethod(
"_changed_",
smalltalk.method({
selector: "changed:",
fn: function (key){
var self=this;
var needsToRun;
return smalltalk.withContext(function($ctx1) { var $1,$3,$2;
needsToRun=false;
$1=self;
$2=(function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(each)._accepts_(key);
if(smalltalk.assert($3)){
_st(each)._flag();
needsToRun=true;
return needsToRun;
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})});
_st($1)._do_($2);
_st(self)._dirty_(needsToRun);
return self}, function($ctx1) {$ctx1.fill(self,"changed:",{key:key,needsToRun:needsToRun}, smalltalk.KeyedPubSubBase)})}
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_dirty_",
smalltalk.method({
selector: "dirty:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=aBoolean;
if(smalltalk.assert($1)){
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._run();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._fork();
};
return self}, function($ctx1) {$ctx1.fill(self,"dirty:",{aBoolean:aBoolean}, smalltalk.KeyedPubSubBase)})}
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_on_hook_",
smalltalk.method({
selector: "on:hook:",
fn: function (key,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._add_(_st(_st(self["@factory"])._value_value_(key,aBlock))._flag());
_st(self)._dirty_(true);
return self}, function($ctx1) {$ctx1.fill(self,"on:hook:",{key:key,aBlock:aBlock}, smalltalk.KeyedPubSubBase)})}
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
var needsClean;
return smalltalk.withContext(function($ctx1) { var $1,$3,$5,$4,$2,$6;
needsClean=false;
$1=self;
$2=(function(each){
return smalltalk.withContext(function($ctx2) {$3=_st(each)._isFlagged();
$4=(function(){
return smalltalk.withContext(function($ctx3) {_st(each)._run();
$5=_st(each)._isEnabled();
if(! smalltalk.assert($5)){
needsClean=true;
return needsClean;
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
return _st($3)._ifTrue_($4);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})});
_st($1)._do_($2);
$6=needsClean;
if(smalltalk.assert($6)){
_st(self)._clean();
};
return self}, function($ctx1) {$ctx1.fill(self,"run",{needsClean:needsClean}, smalltalk.KeyedPubSubBase)})}
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_subscriptionFactory_",
smalltalk.method({
selector: "subscriptionFactory:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@factory"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"subscriptionFactory:",{aBlock:aBlock}, smalltalk.KeyedPubSubBase)})}
}),
smalltalk.KeyedPubSubBase);



smalltalk.addClass('SimpleKeyedPubSub', smalltalk.KeyedPubSubBase, ['queue'], 'Trapped-Backend');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
fn: function (aSubscription){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@queue"])._add_(aSubscription);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aSubscription:aSubscription}, smalltalk.SimpleKeyedPubSub)})}
}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
"_clean",
smalltalk.method({
selector: "clean",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@queue"]=_st(self["@queue"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._isEnabled();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{}, smalltalk.SimpleKeyedPubSub)})}
}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@queue"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.SimpleKeyedPubSub)})}
}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.KeyedPubSubBase.fn.prototype._initialize.apply(_st(self), []);
self["@queue"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SimpleKeyedPubSub)})}
}),
smalltalk.SimpleKeyedPubSub);



smalltalk.addClass('KeyedPubSubUnsubscribe', smalltalk.Error, [], 'Trapped-Backend');


smalltalk.addClass('KeyedSubscriptionBase', smalltalk.Object, ['key', 'actionBlock', 'flagged'], 'Trapped-Backend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey}, smalltalk.KeyedSubscriptionBase)})}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_flag",
smalltalk.method({
selector: "flag",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flagged"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"flag",{}, smalltalk.KeyedSubscriptionBase)})}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@key"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.KeyedSubscriptionBase)})}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_isEnabled",
smalltalk.method({
selector: "isEnabled",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@actionBlock"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEnabled",{}, smalltalk.KeyedSubscriptionBase)})}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_isFlagged",
smalltalk.method({
selector: "isFlagged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@flagged"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFlagged",{}, smalltalk.KeyedSubscriptionBase)})}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_key_block_",
smalltalk.method({
selector: "key:block:",
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@key"]=anObject;
self["@actionBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"key:block:",{anObject:anObject,aBlock:aBlock}, smalltalk.KeyedSubscriptionBase)})}
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((function(){
return smalltalk.withContext(function($ctx2) {return _st((function(){
return smalltalk.withContext(function($ctx3) {return _st(self["@actionBlock"])._value();
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx3) {self["@flagged"]=false;
return self["@flagged"];
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.KeyedPubSubUnsubscribe || KeyedPubSubUnsubscribe),(function(){
return smalltalk.withContext(function($ctx2) {self["@actionBlock"]=nil;
return self["@actionBlock"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"run",{}, smalltalk.KeyedSubscriptionBase)})}
}),
smalltalk.KeyedSubscriptionBase);



smalltalk.addClass('ListKeyedSubscription', smalltalk.KeyedSubscriptionBase, [], 'Trapped-Backend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(aKey)._size()).__lt_eq(_st(self["@key"])._size()))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(aKey).__eq(_st(self["@key"])._copyFrom_to_((1),_st(aKey)._size()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey}, smalltalk.ListKeyedSubscription)})}
}),
smalltalk.ListKeyedSubscription);



smalltalk.addClass('ListKeyedEntity', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Backend');
smalltalk.addMethod(
"_dispatcher",
smalltalk.method({
selector: "dispatcher",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@dispatcher"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dispatcher",{}, smalltalk.ListKeyedEntity)})}
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_dispatcher_",
smalltalk.method({
selector: "dispatcher:",
fn: function (aDispatcher){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4;
$1=aDispatcher;
_st($1)._subscriptionFactory_((function(key,block){
return smalltalk.withContext(function($ctx2) {$2=_st((smalltalk.ListKeyedSubscription || ListKeyedSubscription))._new();
_st($2)._key_block_(key,block);
$3=_st($2)._yourself();
return $3;
}, function($ctx2) {$ctx2.fillBlock({key:key,block:block},$ctx1)})}));
$4=_st($1)._yourself();
self["@dispatcher"]=$4;
return self}, function($ctx1) {$ctx1.fill(self,"dispatcher:",{aDispatcher:aDispatcher}, smalltalk.ListKeyedEntity)})}
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@payload"]=anObject;
_st(_st(self)._dispatcher())._changed_([]);
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject}, smalltalk.ListKeyedEntity)})}
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_watch_do_",
smalltalk.method({
selector: "watch:do:",
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._dispatcher())._on_hook_(path,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._read_do_(path,aBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"watch:do:",{path:path,aBlock:aBlock}, smalltalk.ListKeyedEntity)})}
}),
smalltalk.ListKeyedEntity);



smalltalk.addClass('ListKeyedDirectEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var newValue,eavModel;
return smalltalk.withContext(function($ctx1) { eavModel=_st(path)._asEavModel();
newValue=_st(aBlock)._value_(_st(eavModel)._on_(self["@payload"]));
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(eavModel)._on_put_(self["@payload"],newValue);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._dispatcher())._changed_(path);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,newValue:newValue,eavModel:eavModel}, smalltalk.ListKeyedDirectEntity)})}
}),
smalltalk.ListKeyedDirectEntity);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { eavModel=_st(path)._asEavModel();
_st(aBlock)._value_(_st(eavModel)._on_(self["@payload"]));
return self}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel}, smalltalk.ListKeyedDirectEntity)})}
}),
smalltalk.ListKeyedDirectEntity);



smalltalk.addClass('ListKeyedIsolatedEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ListKeyedEntity.fn.prototype._model_.apply(_st(self), [_st((smalltalk.Isolator || Isolator))._on_(anObject)]);
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject}, smalltalk.ListKeyedIsolatedEntity)})}
}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { eavModel=_st(_st([smalltalk.symbolFor("root")]).__comma(path))._asEavModel();
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@payload"])._model_modify_(eavModel,aBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._dispatcher())._changed_(path);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,eavModel:eavModel}, smalltalk.ListKeyedIsolatedEntity)})}
}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { eavModel=_st(_st([smalltalk.symbolFor("root")]).__comma(path))._asEavModel();
_st(self["@payload"])._model_read_(eavModel,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel}, smalltalk.ListKeyedIsolatedEntity)})}
}),
smalltalk.ListKeyedIsolatedEntity);



smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return nil;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.Object)})}
}),
smalltalk.Object);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_(_st(_st("Trapped cannot put at ").__comma(_st(_st(self)._class())._name())).__comma(" type key."));
return self}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.Object)})}
}),
smalltalk.Object);

smalltalk.addMethod(
"_asEavModel",
smalltalk.method({
selector: "asEavModel",
fn: function (){
var self=this;
var model;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$6,$5,$2,$7,$9,$11,$12,$14,$13,$10,$8,$15;
model=_st((smalltalk.EavModel || EavModel))._new();
$1=model;
$2=(function(anObject){
return smalltalk.withContext(function($ctx2) {$3=self;
$4=anObject;
$5=(function(soFar,segment){
return smalltalk.withContext(function($ctx3) {$6=soFar;
if(($receiver = $6) == nil || $receiver == undefined){
return $6;
} else {
return _st(segment)._reverseTrapAt_(soFar);
};
}, function($ctx3) {$ctx3.fillBlock({soFar:soFar,segment:segment},$ctx1)})});
return _st($3)._inject_into_($4,$5);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject},$ctx1)})});
_st($1)._getBlock_($2);
$7=_st(self)._isEmpty();
$8=(function(){
return smalltalk.withContext(function($ctx2) {$9=model;
$10=(function(anObject,value){
var penultimate;
return smalltalk.withContext(function($ctx3) {$11=_st(self)._allButLast();
$12=anObject;
$13=(function(soFar,segment){
return smalltalk.withContext(function($ctx4) {$14=soFar;
if(($receiver = $14) == nil || $receiver == undefined){
return $14;
} else {
return _st(segment)._reverseTrapAt_(soFar);
};
}, function($ctx4) {$ctx4.fillBlock({soFar:soFar,segment:segment},$ctx1)})});
penultimate=_st($11)._inject_into_($12,$13);
penultimate;
return _st(_st(self)._last())._reverseTrapAt_put_(penultimate,value);
}, function($ctx3) {$ctx3.fillBlock({anObject:anObject,value:value,penultimate:penultimate},$ctx1)})});
return _st($9)._putBlock_($10);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
_st($7)._ifFalse_($8);
$15=model;
return $15;
}, function($ctx1) {$ctx1.fill(self,"asEavModel",{model:model}, smalltalk.SequenceableCollection)})}
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.String)})}
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_put_(self,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.String)})}
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
var $early={};
try {
$1=_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(anObject)._perform_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._on_do_((smalltalk.MessageNotUnderstood || MessageNotUnderstood),(function(){
return smalltalk.withContext(function($ctx2) {throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.Symbol)})}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._perform_withArguments_(_st(_st(self).__comma(":"))._asSymbol(),[value]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.Symbol)})}
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.Number)})}
}),
smalltalk.Number);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_put_(self,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.Number)})}
}),
smalltalk.Number);

