define("axon/Axon", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Exceptions"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Axon');
$core.packages["Axon"].innerEval = function (expr) { return eval(expr); };
$core.packages["Axon"].transport = {"type":"amd","amdNamespace":"axon"};

$core.addClass('AxonBase', $globals.Object, ['factory'], 'Axon');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AxonBase.comment="I represent a pub-sub based on a key (called 'aspect').\x0aI manage aspect-block subscriptions (called 'interests') as well as run blocks of dirtied interests.\x0aThe interest objects are responsible of decision if the change of an aspect is relevant for them.\x0aInterest object must be subclasses of `AxonInterestBase`.\x0a\x0aMy subclasses must provide implementation for:\x0a\x0a - add:\x0a - do:\x0a - clean\x0a - (optionally) run\x0a\x0aand issue this call before actual use:\x0a\x0a\x09interestFactory: [ :description :block | ... factory that creates appropriate AxonInterest ... ]";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "changed:",
protocol: 'action',
fn: function (anAspect){
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
$1=$recv(each)._accepts_(anAspect);
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
}, function($ctx1) {$ctx1.fill(self,"changed:",{anAspect:anAspect,needsToRun:needsToRun},$globals.AxonBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "changed: anAspect\x0a\x09| needsToRun |\x0a    needsToRun := false.\x0a\x09self do: [ :each |\x0a\x09\x09(each accepts: anAspect) ifTrue: [\x0a\x09\x09\x09each flag.\x0a            needsToRun := true.\x0a\x09\x09]\x0a\x09].\x0a\x09self dirty: needsToRun",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "ifTrue:", "accepts:", "flag", "dirty:"]
}),
$globals.AxonBase);

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
}, function($ctx1) {$ctx1.fill(self,"dirty:",{aBoolean:aBoolean},$globals.AxonBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "dirty: aBoolean\x0a\x09aBoolean ifTrue: [[ self run ] fork]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "fork", "run"]
}),
$globals.AxonBase);

$core.addMethod(
$core.method({
selector: "interestFactory:",
protocol: 'action',
fn: function (aBlock){
var self=this;
self["@factory"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "interestFactory: aBlock\x0a    factory := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AxonBase);

$core.addMethod(
$core.method({
selector: "on:hook:",
protocol: 'action',
fn: function (description,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._add_($recv($recv(self["@factory"])._value_value_(description,aBlock))._flag());
self._dirty_(true);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:hook:",{description:description,aBlock:aBlock},$globals.AxonBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["description", "aBlock"],
source: "on: description hook: aBlock\x0a\x09self add: (factory value: description value: aBlock) flag.\x0a   \x09self dirty: true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "flag", "value:value:", "dirty:"]
}),
$globals.AxonBase);

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
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.AxonBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09[\x0a\x09\x09| needsClean |\x0a\x09    needsClean := false.\x0a\x09\x09self do: [ :each |\x0a\x09\x09\x09each isFlagged ifTrue: [ each run ].\x0a\x09        each isEnabled ifFalse: [ needsClean := true ]\x0a\x09\x09].\x0a    \x09needsClean ifTrue: [ self clean ]\x0a\x09] on: Error do: [ self dirty: true ]",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "do:", "ifTrue:", "isFlagged", "run", "ifFalse:", "isEnabled", "clean", "dirty:"]
}),
$globals.AxonBase);



$core.addClass('SimpleAxon', $globals.AxonBase, ['queue'], 'Axon');
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
}, function($ctx1) {$ctx1.fill(self,"add:",{aSubscription:aSubscription},$globals.SimpleAxon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSubscription"],
source: "add: aSubscription\x0a\x09queue add: aSubscription.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.SimpleAxon);

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
}, function($ctx1) {$ctx1.fill(self,"clean",{},$globals.SimpleAxon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "clean\x0a\x09queue := queue select: [ :each | each isEnabled ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["select:", "isEnabled"]
}),
$globals.SimpleAxon);

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
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.SimpleAxon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09queue do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:"]
}),
$globals.SimpleAxon);

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
$globals.SimpleAxon.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@queue"]=$recv($OrderedCollection())._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.SimpleAxon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    super initialize.\x0a\x09queue := OrderedCollection new",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.SimpleAxon);



$core.addClass('AxonInterestBase', $globals.Object, ['aspect', 'actionBlock', 'flagged'], 'Axon');
$core.addMethod(
$core.method({
selector: "accepts:",
protocol: 'testing',
fn: function (anAspect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accepts:",{anAspect:anAspect},$globals.AxonInterestBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "accepts: anAspect\x0a    \x22Should return true if change for anAspect is relevant for this AxonInterest\x22\x0a    self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.AxonInterestBase);

$core.addMethod(
$core.method({
selector: "aspect:block:",
protocol: 'accessing',
fn: function (anAspect,aBlock){
var self=this;
self["@aspect"]=anAspect;
self["@actionBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect", "aBlock"],
source: "aspect: anAspect block: aBlock\x0a\x09aspect := anAspect.\x0a    actionBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AxonInterestBase);

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
$globals.AxonInterestBase);

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
$globals.AxonInterestBase.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@aspect"]=nil;
self["@actionBlock"]=nil;
self["@flagged"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AxonInterestBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a    aspect := nil.\x0a    actionBlock := nil.\x0a    flagged := false.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.AxonInterestBase);

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
}, function($ctx1) {$ctx1.fill(self,"isEnabled",{},$globals.AxonInterestBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isEnabled\x0a\x09^actionBlock notNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notNil"]
}),
$globals.AxonInterestBase);

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
$globals.AxonInterestBase);

$core.addMethod(
$core.method({
selector: "run",
protocol: 'action',
fn: function (){
var self=this;
function $AxonOff(){return $globals.AxonOff||(typeof AxonOff=="undefined"?nil:AxonOff)}
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
}))._on_do_($AxonOff(),(function(){
self["@actionBlock"]=nil;
return self["@actionBlock"];

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"run",{},$globals.AxonInterestBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "run\x0a\x09[ flagged := false. actionBlock value ]\x0a    on: AxonOff do: [ actionBlock := nil ]",
referencedClasses: ["AxonOff"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "value"]
}),
$globals.AxonInterestBase);



$core.addClass('InterestedInEqual', $globals.AxonInterestBase, [], 'Axon');
$core.addMethod(
$core.method({
selector: "accepts:",
protocol: 'testing',
fn: function (anAspect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anAspect).__eq(self["@aspect"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accepts:",{anAspect:anAspect},$globals.InterestedInEqual)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "accepts: anAspect\x0a    ^ anAspect = aspect",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["="]
}),
$globals.InterestedInEqual);



$core.addClass('AxonOff', $globals.Error, [], 'Axon');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AxonOff.comment="SIgnal me from the subscription block to unsubscribe it.";
//>>excludeEnd("ide");

});
