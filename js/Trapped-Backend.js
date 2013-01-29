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
self["@getBlock"]=aBlock;
return self},
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
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@getBlock"]=(function(){
return smalltalk.send(self,"_error_",["No getter block."]);
});
self["@putBlock"]=(function(){
return smalltalk.send(self,"_error_",["No putter block."]);
});
return self},
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
var $1;
$1=smalltalk.send(self["@getBlock"],"_value_",[anObject]);
return $1;
},
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
var $1;
$1=smalltalk.send(self["@putBlock"],"_value_value_",[anObject,anObject2]);
return $1;
},
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
self["@putBlock"]=aBlock;
return self},
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
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(anEavModel,"_on_",[self])]);
smalltalk.send(anEavModel,"_on_put_",[self,smalltalk.send(newValue,"_deepCopy",[])]);
return self},
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
smalltalk.send(aBlock,"_value_",[smalltalk.send(smalltalk.send(anEavModel,"_on_",[self]),"_deepCopy",[])]);
return self},
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
return self["@root"];
},
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
self["@root"]=anObject;
return self},
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
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_root_",[anObject]);
return $1;
},
args: ["anObject"],
source: "on: anObject\x0a^self new root: anObject",
messageSends: ["root:", "new"],
referencedClasses: []
}),
smalltalk.Isolator.klass);


smalltalk.addClass('KeyedPubSubBase', smalltalk.Object, [], 'Trapped-Backend');
smalltalk.KeyedPubSubBase.comment="I represent a pub-sub based on a key.\x0aI manage key-block subscriptions as well as running blocks that are dirty.\x0aThe subscription objects are reponsible of decision if the change is relevant for them.\x0aSubscription object must be subclasses of KeyedSubscriptionBase.\x0a\x0aMy subclasses must provide implementation for:\x0a\x09subscriptionKey:block: (factory method for creating appropriate subscription object)\x0a\x0aas well as bookkeeping of subscriptions:\x0a\x09add:\x0a    do:\x0a    clean\x0a    (optionally) run\x0a"
smalltalk.addMethod(
"_changed_",
smalltalk.method({
selector: "changed:",
category: 'action',
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
return self},
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
if(smalltalk.assert(aBoolean)){
smalltalk.send((function(){
return smalltalk.send(self,"_run",[]);
}),"_fork",[]);
};
return self},
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
smalltalk.send(self,"_add_",[smalltalk.send(smalltalk.send(self,"_subscriptionKey_block_",[key,aBlock]),"_flag",[])]);
smalltalk.send(self,"_dirty_",[true]);
return self},
args: ["key", "aBlock"],
source: "on: key hook: aBlock\x0a\x09self add: (self subscriptionKey: key block: aBlock) flag.\x0a   \x09self dirty: true",
messageSends: ["add:", "flag", "subscriptionKey:block:", "dirty:"],
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
return self},
args: [],
source: "run\x0a\x09| needsClean |\x0a    needsClean := false.\x0a\x09self do: [ :each |\x0a\x09\x09each isFlagged ifTrue: [\x0a            each run.\x0a            each isEnabled ifFalse: [ needsClean := true ]\x0a        ]\x0a\x09].\x0a    needsClean ifTrue: [ self clean ]",
messageSends: ["do:", "ifTrue:", "run", "ifFalse:", "isEnabled", "isFlagged", "clean"],
referencedClasses: []
}),
smalltalk.KeyedPubSubBase);

smalltalk.addMethod(
"_subscriptionKey_block_",
smalltalk.method({
selector: "subscriptionKey:block:",
category: 'action',
fn: function (key,aBlock){
var self=this;
smalltalk.send(self,"_subclassReponsibility",[]);
return self},
args: ["key", "aBlock"],
source: "subscriptionKey: key block: aBlock\x0a    \x22Should return subclass of KeyedSubscriptionBase\x22\x0a    self subclassReponsibility\x0a",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.KeyedPubSubBase);



smalltalk.addClass('ListKeyedPubSubBase', smalltalk.KeyedPubSubBase, [], 'Trapped-Backend');
smalltalk.ListKeyedPubSubBase.comment="I am base class list-keyed pub-sub.\x0a\x0aMy subclasses need to provide implementation for:\x0a\x09add:\x0a    do:\x0a    clean\x0a    (optionally) run\x0a"
smalltalk.addMethod(
"_subscriptionKey_block_",
smalltalk.method({
selector: "subscriptionKey:block:",
category: 'action',
fn: function (key,aBlock){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.ListKeyedSubscription || ListKeyedSubscription),"_new",[]);
smalltalk.send($2,"_key_block_",[key,aBlock]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
},
args: ["key", "aBlock"],
source: "subscriptionKey: key block: aBlock\x0a\x09^ListKeyedSubscription new key: key block: aBlock; yourself\x0a",
messageSends: ["key:block:", "new", "yourself"],
referencedClasses: ["ListKeyedSubscription"]
}),
smalltalk.ListKeyedPubSubBase);



smalltalk.addClass('SimpleListKeyedPubSub', smalltalk.ListKeyedPubSubBase, ['queue'], 'Trapped-Backend');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (aSubscription){
var self=this;
smalltalk.send(self["@queue"],"_add_",[aSubscription]);
return self},
args: ["aSubscription"],
source: "add: aSubscription\x0a\x09queue add: aSubscription.\x0a",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.SimpleListKeyedPubSub);

smalltalk.addMethod(
"_clean",
smalltalk.method({
selector: "clean",
category: 'bookkeeping',
fn: function (){
var self=this;
self["@queue"]=smalltalk.send(self["@queue"],"_select_",[(function(each){
return smalltalk.send(each,"_isEnabled",[]);
})]);
return self},
args: [],
source: "clean\x0a\x09queue := queue select: [ :each | each isEnabled ]",
messageSends: ["select:", "isEnabled"],
referencedClasses: []
}),
smalltalk.SimpleListKeyedPubSub);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumeration',
fn: function (aBlock){
var self=this;
smalltalk.send(self["@queue"],"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09queue do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.SimpleListKeyedPubSub);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.ListKeyedPubSubBase);
self["@queue"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self},
args: [],
source: "initialize\x0a    super initialize.\x0a\x09queue := OrderedCollection new",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.SimpleListKeyedPubSub);



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
smalltalk.send(self,"_subclassResponsibility",[]);
return self},
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
self["@flagged"]=true;
return self},
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
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@key"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self},
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
var $1;
$1=smalltalk.send(self["@actionBlock"],"_notNil",[]);
return $1;
},
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
return self["@flagged"];
},
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
self["@key"]=anObject;
self["@actionBlock"]=aBlock;
return self},
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
return self},
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
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(aKey,"_size",[]),"__lt_eq",[smalltalk.send(self["@key"],"_size",[])]),"_and_",[(function(){
return smalltalk.send(aKey,"__eq",[smalltalk.send(self["@key"],"_copyFrom_to_",[(1),smalltalk.send(aKey,"_size",[])])]);
})]);
return $1;
},
args: ["aKey"],
source: "accepts: aKey\x0a    ^aKey size <= key size and: [aKey = (key copyFrom: 1 to: aKey size)]",
messageSends: ["and:", "=", "copyFrom:to:", "size", "<="],
referencedClasses: []
}),
smalltalk.ListKeyedSubscription);



smalltalk.addClass('ListKeyedEntity', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Backend');
smalltalk.ListKeyedEntity.comment="I am base class for #('string-at-index' #selector numeric-at-index)-array-path-keyed entities,\x0athat moderate access to the wrapped model object via read;do and modify:do:\x0aand allow pub-sub via watch:do:.\x0aThis wrapped model can be any smalltalk object.\x0a\x0aMy subclasses need to provide implementation for:\x0a\x09read:do:\x0a    modify:do:\x0a\x0aand must issue these calls when initializing:\x0a\x09model: (with a wrapped object)\x0a\x09dispatcher: (with a subclass of ListKeyedPubSubBase)\x0a"
smalltalk.addMethod(
"_dispatcher",
smalltalk.method({
selector: "dispatcher",
category: 'accessing',
fn: function (){
var self=this;
return self["@dispatcher"];
},
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
self["@dispatcher"]=aDispatcher;
return self},
args: ["aDispatcher"],
source: "dispatcher: aDispatcher\x0a\x09dispatcher := aDispatcher",
messageSends: [],
referencedClasses: []
}),
smalltalk.ListKeyedEntity);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@payload"]=anObject;
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[[]]);
return self},
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
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_on_hook_",[path,(function(){
return smalltalk.send(self,"_read_do_",[path,aBlock]);
})]);
return self},
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
var newValue;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[self["@payload"]])]);
smalltalk.send((function(){
return smalltalk.send(eavModel,"_on_put_",[self["@payload"],newValue]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self},
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
eavModel=smalltalk.send(path,"_asEavModel",[]);
smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[self["@payload"]])]);
return self},
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
smalltalk.send(self,"_model_",[smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[anObject])],smalltalk.ListKeyedEntity);
return self},
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
eavModel=smalltalk.send(smalltalk.send([smalltalk.symbolFor("root")],"__comma",[path]),"_asEavModel",[]);
smalltalk.send((function(){
return smalltalk.send(self["@payload"],"_model_modify_",[eavModel,aBlock]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self},
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
eavModel=smalltalk.send(smalltalk.send([smalltalk.symbolFor("root")],"__comma",[path]),"_asEavModel",[]);
smalltalk.send(self["@payload"],"_model_read_",[eavModel,aBlock]);
return self},
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
return nil;
},
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
smalltalk.send(self,"_error_",[smalltalk.send(smalltalk.send("Trapped cannot put at ","__comma",[smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[])]),"__comma",[" type key."])]);
return self},
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
},
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
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
},
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
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
},
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
},
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
var $1;
$1=smalltalk.send(anObject,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"__comma",[":"]),"_asSymbol",[]),[value]]);
return $1;
},
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
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
},
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
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a\x09^anObject at: self put: value",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Number);

