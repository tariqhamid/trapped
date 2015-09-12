define("trapped/Trapped-Backend", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "lyst/Lyst"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects", "axon/Axon", "amber_core/Kernel-Collections"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Trapped-Backend');
$core.packages["Trapped-Backend"].innerEval = function (expr) { return eval(expr); };
$core.packages["Trapped-Backend"].imports = ["lyst/Lyst"];
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



$core.addClass('InterestedInTrapPath', $globals.AxonInterestBase, [], 'Trapped-Backend');
$core.addMethod(
$core.method({
selector: "accepts:",
protocol: 'testing',
fn: function (anAspect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$1;
$3=$recv(anAspect)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=$recv(self["@aspect"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_eq($4);
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anAspect).__eq($recv(self["@aspect"])._copyFrom_to_((1),$recv(anAspect)._size()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accepts:",{anAspect:anAspect},$globals.InterestedInTrapPath)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "accepts: anAspect\x0a    ^anAspect size <= aspect size and: [anAspect = (aspect copyFrom: 1 to: anAspect size)]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "<=", "size", "=", "copyFrom:to:"]
}),
$globals.InterestedInTrapPath);



$core.addClass('InterestedInTrapPathSubtree', $globals.AxonInterestBase, [], 'Trapped-Backend');
$core.addMethod(
$core.method({
selector: "accepts:",
protocol: 'testing',
fn: function (anAspect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$4,$2,$6,$7,$5,$1;
$3=$recv(anAspect)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=1;
//>>excludeEnd("ctx");
$4=$recv(self["@aspect"])._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__lt_eq($4);
if($core.assert($2)){
$6=self["@aspect"];
$7=$recv(anAspect)._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["size"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._copyFrom_to_((1),$7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copyFrom:to:"]=1;
//>>excludeEnd("ctx");
$1=$recv(anAspect).__eq($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
} else {
$1=$recv(self["@aspect"]).__eq($recv(anAspect)._copyFrom_to_((1),$recv(self["@aspect"])._size()));
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"accepts:",{anAspect:anAspect},$globals.InterestedInTrapPathSubtree)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "accepts: anAspect\x0a    ^anAspect size <= aspect size\x0a\x09\x09ifTrue: [anAspect = (aspect copyFrom: 1 to: anAspect size)]\x0a\x09\x09ifFalse: [aspect = (anAspect copyFrom: 1 to: aspect size)]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "<=", "size", "=", "copyFrom:to:"]
}),
$globals.InterestedInTrapPathSubtree);



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


$core.addClass('Trapper', $globals.AxonizedObject, ['payload'], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.Trapper.comment="A portmanteau of 'Trapped wrapper', I am base class for model objects wrapped by Trapped.\x0a\x0aWrapped object is indexed by #('string-at-index' #selector numeric-at-index) array paths. Operations using this indexing are:\x0a\x0a - `read:do` to get the indexed content\x0a - `modify:do:` to get and modify the indexed content, and\x0a - `watch:do:` to subscribe to changes of the indexed content.\x0a\x0aThe wrapped model can be any smalltalk object.\x0a\x0aMy subclasses need to provide implementation for:\x0a\x0a - read:do:\x0a - modify:do:\x0a\x0aand must issue these calls when initializing:\x0a\x0a - axon: (with a subclass of `AxonBase`)\x0a - model: (with a wrapped object, after `axon:`)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "interestOn:block:",
protocol: 'action',
fn: function (anAspect,aBlock){
var self=this;
function $InterestedInTrapPathSubtree(){return $globals.InterestedInTrapPathSubtree||(typeof InterestedInTrapPathSubtree=="undefined"?nil:InterestedInTrapPathSubtree)}
function $InterestedInTrapPath(){return $globals.InterestedInTrapPath||(typeof InterestedInTrapPath=="undefined"?nil:InterestedInTrapPath)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=$recv($recv(anAspect)._notEmpty())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(anAspect)._last())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$3=$recv($InterestedInTrapPathSubtree())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._aspect_block_($recv(anAspect)._allButLast(),aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["aspect:block:"]=1;
//>>excludeEnd("ctx");
return $2;
} else {
$4=$recv($recv($InterestedInTrapPath())._new())._aspect_block_(anAspect,aBlock);
return $4;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interestOn:block:",{anAspect:anAspect,aBlock:aBlock},$globals.Trapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect", "aBlock"],
source: "interestOn: anAspect block: aBlock\x0a\x09(anAspect notEmpty and: [ anAspect last isNil ])\x0a\x09\x09ifTrue: [ ^ InterestedInTrapPathSubtree new aspect: anAspect allButLast block: aBlock ]\x0a\x09\x09ifFalse: [ ^ InterestedInTrapPath new aspect: anAspect block: aBlock ]",
referencedClasses: ["InterestedInTrapPathSubtree", "InterestedInTrapPath"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "and:", "notEmpty", "isNil", "last", "aspect:block:", "new", "allButLast"]
}),
$globals.Trapper);

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
$recv(self._axon())._changedAll();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},$globals.Trapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "model: anObject\x0a\x09payload := anObject.\x0a    self axon changedAll",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["changedAll", "axon"]
}),
$globals.Trapper);

$core.addMethod(
$core.method({
selector: "modify:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock},$globals.Trapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Trapper);

$core.addMethod(
$core.method({
selector: "read:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock},$globals.Trapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.Trapper);

$core.addMethod(
$core.method({
selector: "watch:do:",
protocol: 'action',
fn: function (path,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._axon())._addInterest_(self._interestOn_block_(path,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._read_do_(path,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
})));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watch:do:",{path:path,aBlock:aBlock},$globals.Trapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "watch: path do: aBlock\x0a\x09self axon addInterest: (self\x0a\x09\x09interestOn: path\x0a\x09\x09block: [ self read: path do: aBlock ])",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addInterest:", "axon", "interestOn:block:", "read:do:"]
}),
$globals.Trapper);



$core.addClass('DirectTrapper', $globals.Trapper, [], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.DirectTrapper.comment="I am Trapper that directly manipulate\x0athe wrapped model object.";
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
return self._changed_(path);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,newValue:newValue,eavModel:eavModel},$globals.DirectTrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a    | newValue eavModel |\x0a    eavModel := path asEavModel.\x0a    newValue := aBlock value: (eavModel on: payload).\x0a    [ eavModel on: payload put: newValue ] ensure: [ self changed: path ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", "value:", "on:", "ensure:", "on:put:", "changed:"]
}),
$globals.DirectTrapper);

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
}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel},$globals.DirectTrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a    | eavModel |\x0a    eavModel := path asEavModel.\x0a    aBlock value: (eavModel on: payload)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", "value:", "on:"]
}),
$globals.DirectTrapper);



$core.addClass('IsolatingTrapper', $globals.Trapper, [], 'Trapped-Backend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.IsolatingTrapper.comment="I am Trapper that guards access\x0ato the wrapped model object via Isolator.\x0a\x0aIOW, read:do: gets always its own deep copy,\x0amodify:do: is not reentrant\x0aand upon writing the written part is deep-copied as well\x0a(so modifier does not hold the source of truth\x0aand can change it later).\x0a\x0aThis also means, a wrapped object and all its parts\x0amust understand `#deepCopy`.";
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
$globals.IsolatingTrapper.superclass.fn.prototype._model_.apply($recv(self), [$recv($Isolator())._on_(anObject)]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},$globals.IsolatingTrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "model: anObject\x0a\x09super model: (Isolator on: anObject)",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["model:", "on:"]
}),
$globals.IsolatingTrapper);

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
return self._changed_(path);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modify:do:",{path:path,aBlock:aBlock,eavModel:eavModel},$globals.IsolatingTrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a    | eavModel |\x0a    eavModel := ({{#root}},path) asEavModel.\x0a    [ payload model: eavModel modify: aBlock ] ensure: [ self changed: path ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", ",", "ensure:", "model:modify:", "changed:"]
}),
$globals.IsolatingTrapper);

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
}, function($ctx1) {$ctx1.fill(self,"read:do:",{path:path,aBlock:aBlock,eavModel:eavModel},$globals.IsolatingTrapper)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a    | eavModel |\x0a    eavModel := ({{#root}},path) asEavModel.\x0a    payload model: eavModel read: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asEavModel", ",", "model:read:"]
}),
$globals.IsolatingTrapper);


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
var $1,$2;
model=$recv($EavModel())._new();
$recv(model)._getBlock_((function(anObject){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._atLyst_ifAbsent_(self,(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=self._isEmpty();
if(!$core.assert($1)){
$recv(model)._putBlock_((function(anObject,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anObject)._atLyst_ifAbsent_put_(self,(function(){
return nil;

}),value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({anObject:anObject,value:value},$ctx1,4)});
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
source: "asEavModel\x0a    | model |\x0a    model := EavModel new.\x0a    model getBlock: [ :anObject | anObject atLyst: self ifAbsent: [ nil ] ].\x0a    self isEmpty ifFalse: [\x0a        model putBlock: [ :anObject :value | anObject atLyst: self ifAbsent: [ nil ] put: value ]].\x0a    ^model",
referencedClasses: ["EavModel"],
//>>excludeEnd("ide");
messageSends: ["new", "getBlock:", "atLyst:ifAbsent:", "ifFalse:", "isEmpty", "putBlock:", "atLyst:ifAbsent:put:"]
}),
$globals.SequenceableCollection);

});
