define("trapped/Trapped-Backend", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions", "amber_core/Kernel-Collections"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Trapped-Backend');
$core.packages["Trapped-Backend"].innerEval = function (expr) { return eval(expr); };
$core.packages["Trapped-Backend"].transport = {"type":"amd","amdNamespace":"trapped"};

$core.addClass('EavModel', $globals.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.EavModel.comment="External actor value model.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "getBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@getBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "getBlock: aBlock\x0a\x0agetBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.EavModel);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.EavModel.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@getBlock"]=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("No getter block.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["error:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
});
self["@putBlock"]=(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("No putter block.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
});
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.EavModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09getBlock := [ self error: 'No getter block.' ].\x0a\x09putBlock := [ self error: 'No putter block.' ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "error:"]
}),
$globals.EavModel);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@getBlock"])._value_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},$globals.EavModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "on: anObject\x0a\x22Returns value of model applied on object\x22\x0a\x0a^getBlock value: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.EavModel);

$core.addMethod(
$core.method({
selector: "on:put:",
protocol: 'accessing',
fn: function (anObject,anObject2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@putBlock"])._value_value_(anObject,anObject2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:put:",{anObject:anObject,anObject2:anObject2},$globals.EavModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anObject2"],
source: "on: anObject put: anObject2\x0a\x22Puts a value via model applied on object\x22\x0a\x0a^putBlock value: anObject value: anObject2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:value:"]
}),
$globals.EavModel);

$core.addMethod(
$core.method({
selector: "putBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@putBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "putBlock: aBlock\x0a\x0aputBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.EavModel);



$core.addClass('Isolator', $globals.Object, ['root'], 'Trapped-Backend');
$core.addMethod(
$core.method({
selector: "model:modify:",
protocol: 'action',
fn: function (anEavModel,aBlock){
var self=this;
var newValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
newValue=$recv(aBlock)._value_($recv(anEavModel)._on_(self));
$recv(anEavModel)._on_put_(self,$recv(newValue)._deepCopy());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:modify:",{anEavModel:anEavModel,aBlock:aBlock,newValue:newValue},$globals.Isolator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEavModel", "aBlock"],
source: "model: anEavModel modify: aBlock\x0a\x0a| newValue |\x0anewValue := aBlock value: (anEavModel on: self).\x0aanEavModel on: self put: newValue deepCopy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "on:", "on:put:", "deepCopy"]
}),
$globals.Isolator);

$core.addMethod(
$core.method({
selector: "model:read:",
protocol: 'action',
fn: function (anEavModel,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aBlock)._value_($recv($recv(anEavModel)._on_(self))._deepCopy());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:read:",{anEavModel:anEavModel,aBlock:aBlock},$globals.Isolator)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEavModel", "aBlock"],
source: "model: anEavModel read: aBlock\x0a\x0aaBlock value: (anEavModel on: self) deepCopy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "deepCopy", "on:"]
}),
$globals.Isolator);

$core.addMethod(
$core.method({
selector: "root",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@root"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "root\x0a\x0a^root",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Isolator);

$core.addMethod(
$core.method({
selector: "root:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@root"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "root: anObject\x0a\x0aroot := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Isolator);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._new())._root_(anObject);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},$globals.Isolator.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "on: anObject\x0a^self new root: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["root:", "new"]
}),
$globals.Isolator.klass);


$core.addClass('KeyedPubSubBase', $globals.Object, ['factory'], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.KeyedPubSubBase.comment="I represent a pub-sub based on a key.\x0aI manage key-block subscriptions as well as running blocks that are dirty.\x0aThe subscription objects are reponsible of decision if the change is relevant for them.\x0aSubscription object must be subclasses of KeyedSubscriptionBase.\x0a\x0aMy subclasses must provide implementation for:\x0a\x09add:\x0a    do:\x0a    clean\x0a    (optionally) run\x0a\x0aand issue this call before actual use:\x0a\x09subscritionFactory: (setting [:key:block|...] factory that creates appropriate subscription)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "changed:",
protocol: 'action',
fn: function (key){
var self=this;
var needsToRun;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
needsToRun=false;
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(each)._accepts_(key);
if($core.assert($1)){
$recv(each)._flag();
needsToRun=true;
return needsToRun;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._dirty_(needsToRun);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changed:",{key:key,needsToRun:needsToRun},$globals.KeyedPubSubBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["key"],
source: "changed: key\x0a\x09| needsToRun |\x0a    needsToRun := false.\x0a\x09self do: [ :each |\x0a\x09\x09(each accepts: key) ifTrue: [\x0a\x09\x09\x09each flag.\x0a            needsToRun := true.\x0a\x09\x09]\x0a\x09].\x0a\x09self dirty: needsToRun",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "accepts:", "flag", "dirty:"]
}),
$globals.KeyedPubSubBase);

$core.addMethod(
$core.method({
selector: "dirty:",
protocol: 'action',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
if($core.assert(aBoolean)){
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._run();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._fork();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dirty:",{aBoolean:aBoolean},$globals.KeyedPubSubBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "dirty: aBoolean\x0a\x09aBoolean ifTrue: [[ self run ] fork]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "fork", "run"]
}),
$globals.KeyedPubSubBase);

$core.addMethod(
$core.method({
selector: "on:hook:",
protocol: 'action',
fn: function (key,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_($recv($recv(self["@factory"])._value_value_(key,aBlock))._flag());
self._dirty_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:hook:",{key:key,aBlock:aBlock},$globals.KeyedPubSubBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["key", "aBlock"],
source: "on: key hook: aBlock\x0a\x09self add: (factory value: key value: aBlock) flag.\x0a   \x09self dirty: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "flag", "value:value:", "dirty:"]
}),
$globals.KeyedPubSubBase);

$core.addMethod(
$core.method({
selector: "run",
protocol: 'action',
fn: function (){
var self=this;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$recv((function(){
var needsClean;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
needsClean=false;
needsClean;
self._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(each)._isFlagged();
if($core.assert($1)){
$recv(each)._run();
};
$2=$recv(each)._isEnabled();
if(!$core.assert($2)){
needsClean=true;
return needsClean;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}));
$3=needsClean;
if($core.assert($3)){
return self._clean();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({needsClean:needsClean},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._dirty_(true);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.KeyedPubSubBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09[\x0a\x09\x09| needsClean |\x0a\x09    needsClean := false.\x0a\x09\x09self do: [ :each |\x0a\x09\x09\x09each isFlagged ifTrue: [ each run ].\x0a\x09        each isEnabled ifFalse: [ needsClean := true ]\x0a\x09\x09].\x0a    \x09needsClean ifTrue: [ self clean ]\x0a\x09] on: Error do: [ self dirty: true ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "do:", "ifTrue:", "isFlagged", "run", "ifFalse:", "isEnabled", "clean", "dirty:"]
}),
$globals.KeyedPubSubBase);

$core.addMethod(
$core.method({
selector: "subscriptionFactory:",
protocol: 'action',
fn: function (aBlock){
var self=this;
self["@factory"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "subscriptionFactory: aBlock\x0a    factory := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.KeyedPubSubBase);



$core.addClass('SimpleKeyedPubSub', $globals.KeyedPubSubBase, ['queue'], 'Trapped-Backend');
$core.addMethod(
$core.method({
selector: "add:",
protocol: 'accessing',
fn: function (aSubscription){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@queue"])._add_(aSubscription);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"add:",{aSubscription:aSubscription},$globals.SimpleKeyedPubSub)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSubscription"],
source: "add: aSubscription\x0a\x09queue add: aSubscription.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.SimpleKeyedPubSub);

$core.addMethod(
$core.method({
selector: "clean",
protocol: 'bookkeeping',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@queue"]=$recv(self["@queue"])._select_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isEnabled();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"clean",{},$globals.SimpleKeyedPubSub)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09queue := queue select: [ :each | each isEnabled ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "isEnabled"]
}),
$globals.SimpleKeyedPubSub);

$core.addMethod(
$core.method({
selector: "do:",
protocol: 'enumeration',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@queue"])._do_(aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.SimpleKeyedPubSub)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09queue do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.SimpleKeyedPubSub);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.SimpleKeyedPubSub.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@queue"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SimpleKeyedPubSub)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    super initialize.\x0a\x09queue := OrderedCollection new",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SimpleKeyedPubSub);



$core.addClass('KeyedPubSubUnsubscribe', $globals.Error, [], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.KeyedPubSubUnsubscribe.comment="SIgnal me from the subscription block to unsubscribe it.";
//>>excludeEnd("ide");


$core.addClass('KeyedSubscriptionBase', $globals.Object, ['key', 'actionBlock', 'flagged'], 'Trapped-Backend');
$core.addMethod(
$core.method({
selector: "accepts:",
protocol: 'testing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey},$globals.KeyedSubscriptionBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "accepts: aKey\x0a    \x22Should return true if change for aKey is relevant for this subscription\x22\x0a    self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.KeyedSubscriptionBase);

$core.addMethod(
$core.method({
selector: "flag",
protocol: 'accessing',
fn: function (){
var self=this;
self["@flagged"]=true;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flag\x0a\x09flagged := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.KeyedSubscriptionBase);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.KeyedSubscriptionBase.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@key"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.KeyedSubscriptionBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    key := nil.\x0a    actionBlock := nil.\x0a    flagged := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.KeyedSubscriptionBase);

$core.addMethod(
$core.method({
selector: "isEnabled",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@actionBlock"])._notNil();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isEnabled",{},$globals.KeyedSubscriptionBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEnabled\x0a\x09^actionBlock notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.KeyedSubscriptionBase);

$core.addMethod(
$core.method({
selector: "isFlagged",
protocol: 'testing',
fn: function (){
var self=this;
var $1;
$1=self["@flagged"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFlagged\x0a\x09^flagged",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.KeyedSubscriptionBase);

$core.addMethod(
$core.method({
selector: "key:block:",
protocol: 'accessing',
fn: function (anObject,aBlock){
var self=this;
self["@key"]=anObject;
self["@actionBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "key: anObject block: aBlock\x0a\x09key := anObject.\x0a    actionBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.KeyedSubscriptionBase);

$core.addMethod(
$core.method({
selector: "run",
protocol: 'action',
fn: function (){
var self=this;
function $KeyedPubSubUnsubscribe(){return $globals.KeyedPubSubUnsubscribe||(typeof KeyedPubSubUnsubscribe=="undefined"?nil:KeyedPubSubUnsubscribe)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@flagged"]=false;
self["@flagged"];
return $recv(self["@actionBlock"])._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($KeyedPubSubUnsubscribe(),(function(){
self["@actionBlock"]=nil;
return self["@actionBlock"];

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.KeyedSubscriptionBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09[ flagged := false. actionBlock value ]\x0a    on: KeyedPubSubUnsubscribe do: [ actionBlock := nil ]",
referencedClasses: ["KeyedPubSubUnsubscribe"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "value"]
}),
$globals.KeyedSubscriptionBase);



$core.addClass('ListKeyedSubscription', $globals.KeyedSubscriptionBase, [], 'Trapped-Backend');
$core.addMethod(
$core.method({
selector: "accepts:",
protocol: 'testing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
$3=$recv(aKey)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=$recv(self["@key"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_eq($4);
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aKey).__eq($recv(self["@key"])._copyFrom_to_((1),$recv(aKey)._size()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey},$globals.ListKeyedSubscription)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "accepts: aKey\x0a    ^aKey size <= key size and: [aKey = (key copyFrom: 1 to: aKey size)]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<=", "size", "=", "copyFrom:to:"]
}),
$globals.ListKeyedSubscription);



$core.addClass('TwoWayListKeyedSubscription', $globals.KeyedSubscriptionBase, [], 'Trapped-Backend');
$core.addMethod(
$core.method({
selector: "accepts:",
protocol: 'testing',
fn: function (aKey){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$6,$7,$5,$1;
$3=$recv(aKey)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=$recv(self["@key"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_eq($4);
if($core.assert($2)){
$6=self["@key"];
$7=$recv(aKey)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._copyFrom_to_((1),$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
$1=$recv(aKey).__eq($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
} else {
$1=$recv(self["@key"]).__eq($recv(aKey)._copyFrom_to_((1),$recv(self["@key"])._size()));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accepts:",{aKey:aKey},$globals.TwoWayListKeyedSubscription)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKey"],
source: "accepts: aKey\x0a    ^aKey size <= key size\x0a\x09\x09ifTrue: [aKey = (key copyFrom: 1 to: aKey size)]\x0a\x09\x09ifFalse: [key = (aKey copyFrom: 1 to: key size)]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "<=", "size", "=", "copyFrom:to:"]
}),
$globals.TwoWayListKeyedSubscription);



$core.addClass('ListKeyedEntity', $globals.Object, ['dispatcher', 'payload'], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ListKeyedEntity.comment="I am base class for #('string-at-index' #selector numeric-at-index)-array-path-keyed entities,\x0athat moderate access to the wrapped model object via read;do and modify:do:\x0aand allow pub-sub via watch:do:.\x0aThis wrapped model can be any smalltalk object.\x0a\x0aMy subclasses need to provide implementation for:\x0a\x09read:do:\x0a    modify:do:\x0a\x0aand must issue these calls when initializing:\x0a\x09model: (with a wrapped object)\x0a\x09dispatcher: (with a subclass of KeyedPubSubBase)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "dispatcher",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@dispatcher"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dispatcher\x0a\x09^dispatcher",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ListKeyedEntity);

$core.addMethod(
$core.method({
selector: "dispatcher:",
protocol: 'accessing',
fn: function (aDispatcher){
var self=this;
function $TwoWayListKeyedSubscription(){return $globals.TwoWayListKeyedSubscription||(typeof TwoWayListKeyedSubscription=="undefined"?nil:TwoWayListKeyedSubscription)}
function $ListKeyedSubscription(){return $globals.ListKeyedSubscription||(typeof ListKeyedSubscription=="undefined"?nil:ListKeyedSubscription)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv(aDispatcher)._subscriptionFactory_((function(key,block){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv(key)._notEmpty())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(key)._last())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$2=$recv($TwoWayListKeyedSubscription())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv($2)._key_block_($recv(key)._allButLast(),block);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["key:block:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
return $3;
} else {
$4=$recv($ListKeyedSubscription())._new();
$recv($4)._key_block_(key,block);
$5=$recv($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["yourself"]=2;
//>>excludeEnd("ctx");
return $5;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,block:block},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$6=$recv(aDispatcher)._yourself();
self["@dispatcher"]=$6;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dispatcher:",{aDispatcher:aDispatcher},$globals.ListKeyedEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDispatcher"],
source: "dispatcher: aDispatcher\x0a\x09dispatcher := aDispatcher\x0a        subscriptionFactory: [ :key :block |\x0a\x09\x09\x09(key notEmpty and: [ key last isNil ])\x0a\x09\x09\x09\x09ifTrue: [ TwoWayListKeyedSubscription new key: key allButLast block: block; yourself ]\x0a\x09\x09\x09\x09ifFalse: [ ListKeyedSubscription new key: key block: block; yourself ]];\x0a        yourself",
referencedClasses: ["TwoWayListKeyedSubscription", "ListKeyedSubscription"],
//>>excludeEnd("ide");
messageSends: ["subscriptionFactory:", "ifTrue:ifFalse:", "and:", "notEmpty", "isNil", "last", "key:block:", "new", "allButLast", "yourself"]
}),
$globals.ListKeyedEntity);

$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@payload"]=anObject;
$recv(self._dispatcher())._changed_([]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},$globals.ListKeyedEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "model: anObject\x0a\x09payload := anObject.\x0a    self dispatcher changed: #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["changed:", "dispatcher"]
}),
$globals.ListKeyedEntity);

$core.addMethod(
$core.method({
selector: "watch:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._dispatcher())._on_hook_(path,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._read_do_(path,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watch:do:",{path:path,aBlock:aBlock},$globals.ListKeyedEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "watch: path do: aBlock\x0a\x09self dispatcher on: path hook: [ self read: path do: aBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["on:hook:", "dispatcher", "read:do:"]
}),
$globals.ListKeyedEntity);



$core.addClass('ListKeyedDirectEntity', $globals.ListKeyedEntity, [], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ListKeyedDirectEntity.comment="I am ListKeyedEntity that directly manipulate\x0athe wrapped model object.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "modify:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
var newValue,eavModel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
eavModel=$recv(path)._asEavModel();
newValue=$recv(aBlock)._value_($recv(eavModel)._on_(self["@payload"]));
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(eavModel)._on_put_(self["@payload"],newValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._dispatcher())._changed_(path);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,newValue:newValue,eavModel:eavModel},$globals.ListKeyedDirectEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a    | newValue eavModel |\x0a    eavModel := path asEavModel.\x0a    newValue := aBlock value: (eavModel on: payload).\x0a    [ eavModel on: payload put: newValue ] ensure: [ self dispatcher changed: path ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", "value:", "on:", "ensure:", "on:put:", "changed:", "dispatcher"]
}),
$globals.ListKeyedDirectEntity);

$core.addMethod(
$core.method({
selector: "read:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
var eavModel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
eavModel=$recv(path)._asEavModel();
$recv(aBlock)._value_($recv(eavModel)._on_(self["@payload"]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel},$globals.ListKeyedDirectEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a    | eavModel |\x0a    eavModel := path asEavModel.\x0a    aBlock value: (eavModel on: payload)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", "value:", "on:"]
}),
$globals.ListKeyedDirectEntity);



$core.addClass('ListKeyedIsolatedEntity', $globals.ListKeyedEntity, [], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ListKeyedIsolatedEntity.comment="I am ListKeyedEntity that guards access\x0ato the wrapped model object via Isolator.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "model:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ListKeyedIsolatedEntity.superclass.fn.prototype._model_.apply($recv(self), [$recv($Isolator())._on_(anObject)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},$globals.ListKeyedIsolatedEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "model: anObject\x0a\x09super model: (Isolator on: anObject)",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["model:", "on:"]
}),
$globals.ListKeyedIsolatedEntity);

$core.addMethod(
$core.method({
selector: "modify:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
var eavModel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
eavModel=$recv($recv([["root"]]).__comma(path))._asEavModel();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@payload"])._model_modify_(eavModel,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._dispatcher())._changed_(path);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,eavModel:eavModel},$globals.ListKeyedIsolatedEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a    | eavModel |\x0a    eavModel := ({{#root}},path) asEavModel.\x0a    [ payload model: eavModel modify: aBlock ] ensure: [ self dispatcher changed: path ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", ",", "ensure:", "model:modify:", "changed:", "dispatcher"]
}),
$globals.ListKeyedIsolatedEntity);

$core.addMethod(
$core.method({
selector: "read:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
var eavModel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
eavModel=$recv($recv([["root"]]).__comma(path))._asEavModel();
$recv(self["@payload"])._model_read_(eavModel,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel},$globals.ListKeyedIsolatedEntity)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a    | eavModel |\x0a    eavModel := ({{#root}},path) asEavModel.\x0a    payload model: eavModel read: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", ",", "model:read:"]
}),
$globals.ListKeyedIsolatedEntity);


$core.addMethod(
$core.method({
selector: "asTrapAtPut:sendTo:",
protocol: '*Trapped-Backend',
fn: function (value,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._perform_withArguments_($recv($recv(self._first()).__comma(":"))._asSymbol(),[value]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapAtPut:sendTo:",{value:value,anObject:anObject},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["value", "anObject"],
source: "asTrapAtPut: value sendTo: anObject\x0a    ^anObject perform: (self first, ':') asSymbol withArguments: { value }",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:withArguments:", "asSymbol", ",", "first"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "asTrapAtSendTo:",
protocol: '*Trapped-Backend',
fn: function (anObject){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$1=$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._perform_(self._first());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($MessageNotUnderstood(),(function(){
throw $early=[nil];

}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapAtSendTo:",{anObject:anObject},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asTrapAtSendTo: anObject\x0a\x09^[anObject perform: self first] on: MessageNotUnderstood do: [^nil]",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "perform:", "first"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "asTrapAtPut:sendTo:",
protocol: '*Trapped-Backend',
fn: function (value,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._at_put_(self,value);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapAtPut:sendTo:",{value:value,anObject:anObject},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["value", "anObject"],
source: "asTrapAtPut: value sendTo: anObject\x0a\x09^anObject at: self put: value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asTrapAtSendTo:",
protocol: '*Trapped-Backend',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = anObject) == null || $receiver.isNil){
$1=anObject;
} else {
$1=$recv(anObject)._at_ifAbsent_(self,(function(){
return nil;

}));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapAtSendTo:",{anObject:anObject},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asTrapAtSendTo: anObject\x0a\x09^anObject ifNotNil: [ anObject at: self ifAbsent: [nil] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "at:ifAbsent:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "asTrapAtPut:sendTo:",
protocol: '*Trapped-Backend',
fn: function (value,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Trapped cannot put at ".__comma($recv(self._class())._name())).__comma(" type key.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapAtPut:sendTo:",{value:value,anObject:anObject},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["value", "anObject"],
source: "asTrapAtPut: value sendTo: anObject\x0a\x09self error: 'Trapped cannot put at ', self class name, ' type key.'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:", ",", "name", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asTrapAtSendTo:",
protocol: '*Trapped-Backend',
fn: function (anObject){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asTrapAtSendTo: anObject\x0a\x09^nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asEavModel",
protocol: '*Trapped-Backend',
fn: function (){
var self=this;
var model;
function $EavModel(){return $globals.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
model=$recv($EavModel())._new();
$recv(model)._getBlock_((function(anObject){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._inject_into_(anObject,(function(soFar,segment){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(segment)._asTrapAtSendTo_(soFar);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asTrapAtSendTo:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({soFar:soFar,segment:segment},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["inject:into:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._isEmpty();
if(!$core.assert($1)){
$recv(model)._putBlock_((function(anObject,value){
var penultimate;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
penultimate=$recv(self._allButLast())._inject_into_(anObject,(function(soFar,segment){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if(($receiver = soFar) == null || $receiver.isNil){
return soFar;
} else {
return $recv(segment)._asTrapAtSendTo_(soFar);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({soFar:soFar,segment:segment},$ctx2,5)});
//>>excludeEnd("ctx");
}));
penultimate;
return $recv(self._last())._asTrapAtPut_sendTo_(value,penultimate);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject,value:value,penultimate:penultimate},$ctx1,4)});
//>>excludeEnd("ctx");
}));
};
$2=model;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asEavModel",{model:model},$globals.SequenceableCollection)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asEavModel\x0a    | model |\x0a    model := EavModel new.\x0a    model getBlock: [ :anObject |\x0a        self inject: anObject into: [ :soFar :segment |\x0a            segment asTrapAtSendTo: soFar ]].\x0a    self isEmpty ifFalse: [\x0a        model putBlock: [ :anObject :value | | penultimate |\x0a            penultimate :=  self allButLast inject: anObject into: [ :soFar :segment |\x0a                soFar ifNotNil: [ segment asTrapAtSendTo: soFar ]].\x0a            self last asTrapAtPut:value sendTo: penultimate ]].\x0a    ^model",
referencedClasses: ["EavModel"],
//>>excludeEnd("ide");
messageSends: ["new", "getBlock:", "inject:into:", "asTrapAtSendTo:", "ifFalse:", "isEmpty", "putBlock:", "allButLast", "ifNotNil:", "asTrapAtPut:sendTo:", "last"]
}),
$globals.SequenceableCollection);

$core.addMethod(
$core.method({
selector: "asTrapAtPut:sendTo:",
protocol: '*Trapped-Backend',
fn: function (value,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._at_put_(self,value);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapAtPut:sendTo:",{value:value,anObject:anObject},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["value", "anObject"],
source: "asTrapAtPut: value sendTo: anObject\x0a\x09^anObject at: self put: value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "asTrapAtSendTo:",
protocol: '*Trapped-Backend',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = anObject) == null || $receiver.isNil){
$1=anObject;
} else {
$1=$recv(anObject)._at_ifAbsent_(self,(function(){
return nil;

}));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapAtSendTo:",{anObject:anObject},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asTrapAtSendTo: anObject\x0a\x09^anObject ifNotNil: [ anObject at: self ifAbsent: [nil] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "at:ifAbsent:"]
}),
$globals.String);

});
