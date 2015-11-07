define("alybaba/Alybaba", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "axon/Axon", "lyst/Lyst"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Alybaba');
$core.packages["Alybaba"].innerEval = function (expr) { return eval(expr); };
$core.packages["Alybaba"].imports = ["axon/Axon", "lyst/Lyst"];
$core.packages["Alybaba"].transport = {"type":"amd","amdNamespace":"alybaba"};
$core.addMethod(
$core.method({
selector: "atLyst:consume:",
protocol: '*Alybaba',
fn: function (aCollection,aBlock){
var self=this;
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
value=self._atLyst_ifAbsent_(aCollection,(function(){
throw $early=[self];

}));
$1=$recv(aBlock)._value_(value);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atLyst:consume:",{aCollection:aCollection,aBlock:aBlock,value:value},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aBlock"],
source: "atLyst: aCollection consume: aBlock\x0a\x09| value |\x0a\x09value := self atLyst: aCollection ifAbsent: [ ^self ].\x0a\x09^ aBlock value: value ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atLyst:ifAbsent:", "value:"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "atLyst:transform:",
protocol: '*Alybaba',
fn: function (aCollection,aBlock){
var self=this;
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
var $early={};
try {
$recv(aCollection)._last();
value=self._atLyst_ifAbsent_(aCollection,(function(){
throw $early=[self];

}));
value=$recv(aBlock)._value_(value);
value=self._atLyst_ifAbsent_put_(aCollection,(function(){
throw $early=[self];

}),value);
$1=self._registeredAxon();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var axon;
axon=$receiver;
$recv(axon)._changed_(aCollection);
};
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atLyst:transform:",{aCollection:aCollection,aBlock:aBlock,value:value},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aBlock"],
source: "atLyst: aCollection transform: aBlock\x0a\x09| value |\x0a\x09aCollection last. \x22raise if empty\x22\x0a\x09value := self atLyst: aCollection ifAbsent: [ ^self ].\x0a\x09value := aBlock value: value.\x0a\x09value := self atLyst: aCollection ifAbsent: [ ^self ] put: value.\x0a\x09self registeredAxon ifNotNil: [:axon | axon changed: aCollection]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["last", "atLyst:ifAbsent:", "value:", "atLyst:ifAbsent:put:", "ifNotNil:", "registeredAxon", "changed:"]
}),
$globals.Object);

});
