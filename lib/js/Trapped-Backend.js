smalltalk.addPackage('Trapped-Backend', {});
smalltalk.addClass('EavModel', smalltalk.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
smalltalk.EavModel.comment="External actor value model."
smalltalk.addMethod(
"_getBlock_",
smalltalk.method({
selector: "getBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@getBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"getBlock:",{aBlock:aBlock}, smalltalk.EavModel)})},
args: ["aBlock"],
source: "getBlock: aBlock\x0a\x0agetBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@getBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("No getter block.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
self["@putBlock"]=(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._error_("No putter block.");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.EavModel)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09getBlock := [ self error: 'No getter block.' ].\x0a\x09putBlock := [ self error: 'No putter block.' ].",
messageSends: ["initialize", "error:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@getBlock"])._value_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject}, smalltalk.EavModel)})},
args: ["anObject"],
source: "on: anObject\x0a\x22Returns value of model applied on object\x22\x0a\x0a^getBlock value: anObject",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_put_",
smalltalk.method({
selector: "on:put:",
category: 'accessing',
fn: function (anObject,anObject2){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@putBlock"])._value_value_(anObject,anObject2);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:put:",{anObject:anObject,anObject2:anObject2}, smalltalk.EavModel)})},
args: ["anObject", "anObject2"],
source: "on: anObject put: anObject2\x0a\x22Puts a value via model applied on object\x22\x0a\x0a^putBlock value: anObject value: anObject2",
messageSends: ["value:value:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_putBlock_",
smalltalk.method({
selector: "putBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@putBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"putBlock:",{aBlock:aBlock}, smalltalk.EavModel)})},
args: ["aBlock"],
source: "putBlock: aBlock\x0a\x0aputBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.EavModel);



smalltalk.addClass('Isolator', smalltalk.Object, ['root'], 'Trapped-Backend');
smalltalk.addMethod(
"_model_modify_",
smalltalk.method({
selector: "model:modify:",
category: 'action',
fn: function (anEavModel,aBlock){
var self=this;
var newValue;
return smalltalk.withContext(function($ctx1) { newValue=_st(aBlock)._value_(_st(anEavModel)._on_(self));
_st(anEavModel)._on_put_(self,_st(newValue)._deepCopy());
return self}, function($ctx1) {$ctx1.fill(self,"model:modify:",{anEavModel:anEavModel,aBlock:aBlock,newValue:newValue}, smalltalk.Isolator)})},
args: ["anEavModel", "aBlock"],
source: "model: anEavModel modify: aBlock\x0a\x0a| newValue |\x0anewValue := aBlock value: (anEavModel on: self).\x0aanEavModel on: self put: newValue deepCopy\x0a",
messageSends: ["value:", "on:", "on:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_model_read_",
smalltalk.method({
selector: "model:read:",
category: 'action',
fn: function (anEavModel,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aBlock)._value_(_st(_st(anEavModel)._on_(self))._deepCopy());
return self}, function($ctx1) {$ctx1.fill(self,"model:read:",{anEavModel:anEavModel,aBlock:aBlock}, smalltalk.Isolator)})},
args: ["anEavModel", "aBlock"],
source: "model: anEavModel read: aBlock\x0a\x0aaBlock value: (anEavModel on: self) deepCopy",
messageSends: ["value:", "deepCopy", "on:"],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@root"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"root",{}, smalltalk.Isolator)})},
args: [],
source: "root\x0a\x0a^root\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@root"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{anObject:anObject}, smalltalk.Isolator)})},
args: ["anObject"],
source: "root: anObject\x0a\x0aroot := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.Isolator);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self)._new())._root_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject}, smalltalk.Isolator.klass)})},
args: ["anObject"],
source: "on: anObject\x0a^self new root: anObject",
messageSends: ["root:", "new"],
referencedClasses: []
}),
smalltalk.Isolator.klass);


smalltalk.addClass('KeyedPubSubBase', smalltalk.Object, ['factory'], 'Trapped-Backend');
smalltalk.KeyedPubSubBase.comment="I represent a pub-sub based on a key.\x0aI manage key-block subscriptions as well as running blocks that are dirty.\x0aThe subscription objects are reponsible of decision if the change is relevant for them.\x0aSubscription object must be subclasses of KeyedSubscriptionBase.\x0a\x0aMy subclasses must provide implementation for:\x0a\x09add:\x0a    do:\x0a    clean\x0a    (optionally) run\x0a\x0aand issue this call before actual use:\x0a\x09subscritionFactory: (setting [:key:block|...] factory that creates appropriate subscription)"
smalltalk.addMethod(
"_changed_",
smalltalk.method({
selector: "changed:",
category: 'action',
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
return self}, function($ctx1) {$ctx1.fill(self,"changed:",{key:key,needsToRun:needsToRun}, smalltalk.KeyedPubSubBase)})},
args: ["key"],
source: "changed: key\x0a\x09| needsToRun |\x0a    needsToRun := false.\x0a\x09self do: [ :each |\x0a\x09\x09(each accepts: key) ifTrue: [\x0a\x09\x09\x09each flag.\x0a            needsToRun := true.\x0a\x09\x09]\x0a\x09].\x0a\x09self dirty: needsToRun",
messageSends: ["do:", "ifTrue:", "flag", "accepts:", "dirty:"],
referencedClasses: []
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_dirty_",
smalltalk.method({
selector: "dirty:",
category: 'action',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=aBoolean;
if(smalltalk.assert($1)){
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._run();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._fork();
};
return self}, function($ctx1) {$ctx1.fill(self,"dirty:",{aBoolean:aBoolean}, smalltalk.KeyedPubSubBase)})},
args: ["aBoolean"],
source: "dirty: aBoolean\x0a\x09aBoolean ifTrue: [[ self run ] fork]",
messageSends: ["ifTrue:", "fork", "run"],
referencedClasses: []
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_on_hook_",
smalltalk.method({
selector: "on:hook:",
category: 'action',
fn: function (key,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._add_(_st(_st(self["@factory"])._value_value_(key,aBlock))._flag());
_st(self)._dirty_(true);
return self}, function($ctx1) {$ctx1.fill(self,"on:hook:",{key:key,aBlock:aBlock}, smalltalk.KeyedPubSubBase)})},
args: ["key", "aBlock"],
source: "on: key hook: aBlock\x0a\x09self add: (factory value: key value: aBlock) flag.\x0a   \x09self dirty: true",
messageSends: ["add:", "flag", "value:value:", "dirty:"],
referencedClasses: []
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
category: 'action',
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
return self}, function($ctx1) {$ctx1.fill(self,"run",{needsClean:needsClean}, smalltalk.KeyedPubSubBase)})},
args: [],
source: "run\x0a\x09| needsClean |\x0a    needsClean := false.\x0a\x09self do: [ :each |\x0a\x09\x09each isFlagged ifTrue: [\x0a            each run.\x0a            each isEnabled ifFalse: [ needsClean := true ]\x0a        ]\x0a\x09].\x0a    needsClean ifTrue: [ self clean ]",
messageSends: ["do:", "ifTrue:", "run", "ifFalse:", "isEnabled", "isFlagged", "clean"],
referencedClasses: []
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_subscriptionFactory_",
smalltalk.method({
selector: "subscriptionFactory:",
category: 'action',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@factory"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"subscriptionFactory:",{aBlock:aBlock}, smalltalk.KeyedPubSubBase)})},
args: ["aBlock"],
source: "subscriptionFactory: aBlock\x0a    factory := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.KeyedPubSubBase);



smalltalk.addClass('SimpleKeyedPubSub', smalltalk.KeyedPubSubBase, ['queue'], 'Trapped-Backend');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (aSubscription){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@queue"])._add_(aSubscription);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aSubscription:aSubscription}, smalltalk.SimpleKeyedPubSub)})},
args: ["aSubscription"],
source: "add: aSubscription\x0a\x09queue add: aSubscription.\x0a",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
"_clean",
smalltalk.method({
selector: "clean",
category: 'bookkeeping',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@queue"]=_st(self["@queue"])._select_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(each)._isEnabled();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clean",{}, smalltalk.SimpleKeyedPubSub)})},
args: [],
source: "clean\x0a\x09queue := queue select: [ :each | each isEnabled ]",
messageSends: ["select:", "isEnabled"],
referencedClasses: []
}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumeration',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@queue"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.SimpleKeyedPubSub)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09queue do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.SimpleKeyedPubSub);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.KeyedPubSubBase.fn.prototype._initialize.apply(_st(self), []);
self["@queue"]=_st((smalltalk.OrderedCollection || OrderedCollection))._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.SimpleKeyedPubSub)})},
args: [],
source: "initialize\x0a    super initialize.\x0a\x09queue := OrderedCollection new",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.SimpleKeyedPubSub);



smalltalk.addClass('KeyedPubSubUnsubscribe', smalltalk.Error, [], 'Trapped-Backend');
smalltalk.KeyedPubSubUnsubscribe.comment="SIgnal me from the subscription block to unsubscribe it."


smalltalk.addClass('KeyedSubscriptionBase', smalltalk.Object, ['key', 'actionBlock', 'flagged'], 'Trapped-Backend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
category: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey}, smalltalk.KeyedSubscriptionBase)})},
args: ["aKey"],
source: "accepts: aKey\x0a    \x22Should return true if change for aKey is relevant for this subscription\x22\x0a    self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_flag",
smalltalk.method({
selector: "flag",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@flagged"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"flag",{}, smalltalk.KeyedSubscriptionBase)})},
args: [],
source: "flag\x0a\x09flagged := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
self["@key"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.KeyedSubscriptionBase)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    key := nil.\x0a    actionBlock := nil.\x0a    flagged := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_isEnabled",
smalltalk.method({
selector: "isEnabled",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@actionBlock"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isEnabled",{}, smalltalk.KeyedSubscriptionBase)})},
args: [],
source: "isEnabled\x0a\x09^actionBlock notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_isFlagged",
smalltalk.method({
selector: "isFlagged",
category: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@flagged"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFlagged",{}, smalltalk.KeyedSubscriptionBase)})},
args: [],
source: "isFlagged\x0a\x09^flagged",
messageSends: [],
referencedClasses: []
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_key_block_",
smalltalk.method({
selector: "key:block:",
category: 'accessing',
fn: function (anObject,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@key"]=anObject;
self["@actionBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"key:block:",{anObject:anObject,aBlock:aBlock}, smalltalk.KeyedSubscriptionBase)})},
args: ["anObject", "aBlock"],
source: "key: anObject block: aBlock\x0a\x09key := anObject.\x0a    actionBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.KeyedSubscriptionBase);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
category: 'action',
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
return self}, function($ctx1) {$ctx1.fill(self,"run",{}, smalltalk.KeyedSubscriptionBase)})},
args: [],
source: "run\x0a\x09[[ actionBlock value ] ensure: [ flagged := false ]]\x0a    on: KeyedPubSubUnsubscribe do: [ actionBlock := nil ]",
messageSends: ["on:do:", "ensure:", "value"],
referencedClasses: ["KeyedPubSubUnsubscribe"]
}),
smalltalk.KeyedSubscriptionBase);



smalltalk.addClass('ListKeyedSubscription', smalltalk.KeyedSubscriptionBase, [], 'Trapped-Backend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
category: 'testing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(_st(aKey)._size()).__lt_eq(_st(self["@key"])._size()))._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(aKey).__eq(_st(self["@key"])._copyFrom_to_((1),_st(aKey)._size()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey}, smalltalk.ListKeyedSubscription)})},
args: ["aKey"],
source: "accepts: aKey\x0a    ^aKey size <= key size and: [aKey = (key copyFrom: 1 to: aKey size)]",
messageSends: ["and:", "=", "copyFrom:to:", "size", "<="],
referencedClasses: []
}),
smalltalk.ListKeyedSubscription);



smalltalk.addClass('ListKeyedEntity', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Backend');
smalltalk.ListKeyedEntity.comment="I am base class for #('string-at-index' #selector numeric-at-index)-array-path-keyed entities,\x0athat moderate access to the wrapped model object via read;do and modify:do:\x0aand allow pub-sub via watch:do:.\x0aThis wrapped model can be any smalltalk object.\x0a\x0aMy subclasses need to provide implementation for:\x0a\x09read:do:\x0a    modify:do:\x0a\x0aand must issue these calls when initializing:\x0a\x09model: (with a wrapped object)\x0a\x09dispatcher: (with a subclass of KeyedPubSubBase)\x0a"
smalltalk.addMethod(
"_dispatcher",
smalltalk.method({
selector: "dispatcher",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@dispatcher"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dispatcher",{}, smalltalk.ListKeyedEntity)})},
args: [],
source: "dispatcher\x0a\x09^dispatcher",
messageSends: [],
referencedClasses: []
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_dispatcher_",
smalltalk.method({
selector: "dispatcher:",
category: 'accessing',
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
return self}, function($ctx1) {$ctx1.fill(self,"dispatcher:",{aDispatcher:aDispatcher}, smalltalk.ListKeyedEntity)})},
args: ["aDispatcher"],
source: "dispatcher: aDispatcher\x0a\x09dispatcher := aDispatcher\x0a        subscriptionFactory: [ :key :block | ListKeyedSubscription new key: key block: block; yourself ];\x0a        yourself",
messageSends: ["subscriptionFactory:", "key:block:", "new", "yourself"],
referencedClasses: ["ListKeyedSubscription"]
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@payload"]=anObject;
_st(_st(self)._dispatcher())._changed_([]);
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject}, smalltalk.ListKeyedEntity)})},
args: ["anObject"],
source: "model: anObject\x0a\x09payload := anObject.\x0a    self dispatcher changed: #()",
messageSends: ["changed:", "dispatcher"],
referencedClasses: []
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_watch_do_",
smalltalk.method({
selector: "watch:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._dispatcher())._on_hook_(path,(function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._read_do_(path,aBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"watch:do:",{path:path,aBlock:aBlock}, smalltalk.ListKeyedEntity)})},
args: ["path", "aBlock"],
source: "watch: path do: aBlock\x0a\x09self dispatcher on: path hook: [ self read: path do: aBlock ]\x0a",
messageSends: ["on:hook:", "read:do:", "dispatcher"],
referencedClasses: []
}),
smalltalk.ListKeyedEntity);



smalltalk.addClass('ListKeyedDirectEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.ListKeyedDirectEntity.comment="I am ListKeyedEntity that directly manipulate\x0athe wrapped model object."
smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
category: 'action',
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
return self}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,newValue:newValue,eavModel:eavModel}, smalltalk.ListKeyedDirectEntity)})},
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a    | newValue eavModel |\x0a    eavModel := path asEavModel.\x0a    newValue := aBlock value: (eavModel on: payload).\x0a    [ eavModel on: payload put: newValue ] ensure: [ self dispatcher changed: path ]\x0a",
messageSends: ["asEavModel", "value:", "on:", "ensure:", "changed:", "dispatcher", "on:put:"],
referencedClasses: []
}),
smalltalk.ListKeyedDirectEntity);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { eavModel=_st(path)._asEavModel();
_st(aBlock)._value_(_st(eavModel)._on_(self["@payload"]));
return self}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel}, smalltalk.ListKeyedDirectEntity)})},
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a    | eavModel |\x0a    eavModel := path asEavModel.\x0a    aBlock value: (eavModel on: payload)\x0a",
messageSends: ["asEavModel", "value:", "on:"],
referencedClasses: []
}),
smalltalk.ListKeyedDirectEntity);



smalltalk.addClass('ListKeyedIsolatedEntity', smalltalk.ListKeyedEntity, [], 'Trapped-Backend');
smalltalk.ListKeyedIsolatedEntity.comment="I am ListKeyedEntity that guards access\x0ato the wrapped model object via Isolator."
smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.ListKeyedEntity.fn.prototype._model_.apply(_st(self), [_st((smalltalk.Isolator || Isolator))._on_(anObject)]);
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject}, smalltalk.ListKeyedIsolatedEntity)})},
args: ["anObject"],
source: "model: anObject\x0a\x09super model: (Isolator on: anObject)",
messageSends: ["model:", "on:"],
referencedClasses: ["Isolator"]
}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { eavModel=_st(_st([smalltalk.symbolFor("root")]).__comma(path))._asEavModel();
_st((function(){
return smalltalk.withContext(function($ctx2) {return _st(self["@payload"])._model_modify_(eavModel,aBlock);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._dispatcher())._changed_(path);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,eavModel:eavModel}, smalltalk.ListKeyedIsolatedEntity)})},
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a    | eavModel |\x0a    eavModel := ({#root},path) asEavModel.\x0a    [ payload model: eavModel modify: aBlock ] ensure: [ self dispatcher changed: path ]\x0a",
messageSends: ["asEavModel", ",", "ensure:", "changed:", "dispatcher", "model:modify:"],
referencedClasses: []
}),
smalltalk.ListKeyedIsolatedEntity);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
var eavModel;
return smalltalk.withContext(function($ctx1) { eavModel=_st(_st([smalltalk.symbolFor("root")]).__comma(path))._asEavModel();
_st(self["@payload"])._model_read_(eavModel,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel}, smalltalk.ListKeyedIsolatedEntity)})},
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a    | eavModel |\x0a    eavModel := ({#root},path) asEavModel.\x0a    payload model: eavModel read: aBlock\x0a",
messageSends: ["asEavModel", ",", "model:read:"],
referencedClasses: []
}),
smalltalk.ListKeyedIsolatedEntity);



smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return nil;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.Object)})},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._error_(_st(_st("Trapped cannot put at ").__comma(_st(_st(self)._class())._name())).__comma(" type key."));
return self}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.Object)})},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a\x09self error: 'Trapped cannot put at ', self class name, ' type key.'",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asEavModel",
smalltalk.method({
selector: "asEavModel",
category: '*Trapped-Backend',
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
}, function($ctx1) {$ctx1.fill(self,"asEavModel",{model:model}, smalltalk.SequenceableCollection)})},
args: [],
source: "asEavModel\x0a    | model |\x0a    model := EavModel new.\x0a    model getBlock: [ :anObject |\x0a        self inject: anObject into: [ :soFar :segment |\x0a            soFar ifNotNil: [ segment reverseTrapAt: soFar ]]].\x0a    self isEmpty ifFalse: [\x0a        model putBlock: [ :anObject :value | | penultimate |\x0a            penultimate :=  self allButLast inject: anObject into: [ :soFar :segment |\x0a                soFar ifNotNil: [ segment reverseTrapAt: soFar ]].\x0a            self last reverseTrapAt: penultimate put: value ]].\x0a    ^model",
messageSends: ["new", "getBlock:", "inject:into:", "ifNotNil:", "reverseTrapAt:", "ifFalse:", "putBlock:", "allButLast", "reverseTrapAt:put:", "last", "isEmpty"],
referencedClasses: ["EavModel"]
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.String)})},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^anObject at: self ifAbsent: [nil]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_put_(self,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.String)})},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a\x09^anObject at: self put: value",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
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
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.Symbol)})},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^[anObject perform: self] on: MessageNotUnderstood do: [^nil]",
messageSends: ["on:do:", "perform:"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._perform_withArguments_(_st(_st(self).__comma(":"))._asSymbol(),[value]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.Symbol)})},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a    ^anObject perform: (self, ':') asSymbol withArguments: { value }",
messageSends: ["perform:withArguments:", "asSymbol", ","],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_ifAbsent_(self,(function(){
return smalltalk.withContext(function($ctx2) {return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:",{anObject:anObject}, smalltalk.Number)})},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^anObject at: self ifAbsent: [nil]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(anObject)._at_put_(self,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"reverseTrapAt:put:",{anObject:anObject,value:value}, smalltalk.Number)})},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a\x09^anObject at: self put: value",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Number);

