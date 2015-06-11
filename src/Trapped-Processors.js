define("trapped/Trapped-Processors", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "jquery.xontent"
//>>excludeEnd("imports");
, "trapped/Trapped-Frontend"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Trapped-Processors');
$core.packages["Trapped-Processors"].innerEval = function (expr) { return eval(expr); };
$core.packages["Trapped-Processors"].imports = ["amber/jquery/Wrappers-JQuery", "jquery.xontent"];
$core.packages["Trapped-Processors"].transport = {"type":"amd","amdNamespace":"trapped"};

$core.addClass('TrappedProcessorAttribute', $globals.TrappedDataExpectingProcessor, ['attrName'], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorAttribute.comment="I set the data into an attribute speciried when creating me.\x0aNo observing and sending back, atm.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "attrName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@attrName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "attrName: aString\x0a\x09attrName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorAttribute);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._toTargetAttr_(self["@attrName"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorAttribute)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetAttr: attrName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toTargetAttr:"]
}),
$globals.TrappedProcessorAttribute);


$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._attrName_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString},$globals.TrappedProcessorAttribute.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "new: aString\x0a\x09^self new\x0a\x09\x09attrName: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["attrName:", "new", "yourself"]
}),
$globals.TrappedProcessorAttribute.klass);


$core.addClass('TrappedProcessorDataAdhoc', $globals.TrappedDataExpectingProcessor, ['toViewBlock'], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorDataAdhoc.comment="I put data into target via contents: in toView:";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@toViewBlock"])._value_(aDataCarrier);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorDataAdhoc)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09toViewBlock value: aDataCarrier",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:"]
}),
$globals.TrappedProcessorDataAdhoc);

$core.addMethod(
$core.method({
selector: "toViewBlock:",
protocol: 'accessing',
fn: function (aBlock){
var self=this;
self["@toViewBlock"]=aBlock;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "toViewBlock: aBlock\x0a\x09toViewBlock := aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorDataAdhoc);


$core.addMethod(
$core.method({
selector: "newToView:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._toViewBlock_(aBlock);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newToView:",{aBlock:aBlock},$globals.TrappedProcessorDataAdhoc.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "newToView: aBlock\x0a\x09^self new\x0a\x09\x09toViewBlock: aBlock;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toViewBlock:", "new", "yourself"]
}),
$globals.TrappedProcessorDataAdhoc.klass);


$core.addClass('TrappedProcessorDescend', $globals.TrappedProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorDescend.comment="I intepret data-trap in descendants of my brush.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
function $Trapped(){return $globals.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($Trapped())._current())._injectToChildren_($recv($recv(aDataCarrier)._target())._element());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorDescend)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09Trapped current injectToChildren: aDataCarrier target element",
referencedClasses: ["Trapped"],
//>>excludeEnd("ide");
messageSends: ["injectToChildren:", "current", "element", "target"]
}),
$globals.TrappedProcessorDescend);



$core.addClass('TrappedProcessorGuardBase', $globals.TrappedProcessor, ['guardPath'], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorGuardBase.comment="I serve as base class for brush-guarding processors.\x0a\x0aI cover instantiation and subclasses have to provide\x0aimplementation of toVIew: that react appropriately to guard releasing.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "guardPath:",
protocol: 'accessing',
fn: function (anArray){
var self=this;
self["@guardPath"]=anArray;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "guardPath: anArray\x0a\x09guardPath := anArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorGuardBase);

$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22stop\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorGuardBase);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorGuardBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.TrappedProcessorGuardBase);


$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._guardPath_(anArray);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anArray:anArray},$globals.TrappedProcessorGuardBase.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "new: anArray\x0a\x09^ self new\x0a\x09\x09guardPath: anArray;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["guardPath:", "new", "yourself"]
}),
$globals.TrappedProcessorGuardBase.klass);


$core.addClass('TrappedProcessorGuard', $globals.TrappedProcessorGuardBase, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorGuard.comment="I am used to guard contents filling process of the brush I am installed on.\x0a\x0aI observe guard expression in the model,\x0aand when it changes to nil or false, I delete the brush contents;\x0aon the other hand, when it changes to non-nil and non-false,\x0aI run the rest on the chain, which should be one-time\x0athat sets up the contents,";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var frozen,xon;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
frozen=$recv(aDataCarrier)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=1;
//>>excludeEnd("ctx");
xon=$recv(frozen)._xontent();
$recv($recv(frozen)._target())._trapGuard_contents_(self["@guardPath"],(function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(frozen)._copy();
$recv($1)._target_($recv(html)._root());
$recv($1)._xontent_(xon);
$2=$recv($1)._proceed();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier,frozen:frozen,xon:xon},$globals.TrappedProcessorGuard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09| frozen xon |\x0a\x09frozen := aDataCarrier copy.\x0a\x09xon := frozen xontent.\x0a\x09frozen target trapGuard: guardPath contents: [ :html | frozen copy target: html root; xontent: xon; proceed ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "xontent", "trapGuard:contents:", "target", "target:", "root", "xontent:", "proceed"]
}),
$globals.TrappedProcessorGuard);



$core.addClass('TrappedProcessorInputChecked', $globals.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorInputChecked.comment="I bind to checkbox checked state.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "installToView:toModel:",
protocol: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var brush;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
brush=$recv(aDataCarrier)._target();
$recv(brush)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(anotherDataCarrier)._copy();
$recv($1)._value_($recv($recv(brush)._asJQuery())._prop_("checked"));
$2=$recv($1)._proceed();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,brush:brush},$globals.TrappedProcessorInputChecked)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| brush |\x0a\x09brush := aDataCarrier target.\x0a\x09brush onChange: [ anotherDataCarrier copy value: (brush asJQuery prop: 'checked'); proceed ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["target", "onChange:", "value:", "copy", "prop:", "asJQuery", "proceed"]
}),
$globals.TrappedProcessorInputChecked);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._toTargetProp_("checked");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorInputChecked)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetProp: 'checked'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toTargetProp:"]
}),
$globals.TrappedProcessorInputChecked);



$core.addClass('TrappedProcessorInputValue', $globals.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorInputValue.comment="I bind to input value.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "installToView:toModel:",
protocol: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var brush;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
brush=$recv(aDataCarrier)._target();
$recv(brush)._onChange_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(anotherDataCarrier)._copy();
$recv($1)._value_($recv($recv(brush)._asJQuery())._val());
$2=$recv($1)._proceed();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,brush:brush},$globals.TrappedProcessorInputValue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| brush |\x0a\x09brush := aDataCarrier target.\x0a\x09brush onChange: [ anotherDataCarrier copy value: brush asJQuery val; proceed ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["target", "onChange:", "value:", "copy", "val", "asJQuery", "proceed"]
}),
$globals.TrappedProcessorInputValue);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._toTargetValue();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorInputValue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toTargetValue"]
}),
$globals.TrappedProcessorInputValue);



$core.addClass('TrappedProcessorLoopBase', $globals.TrappedProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorLoopBase.comment="I serve as base class for looping processors.\x0a\x0aI cover instantiation and subclasses have to provide\x0aimplementation of toVIew: that loops appropriately.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22stop\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorLoopBase);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorLoopBase)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.TrappedProcessorLoopBase);



$core.addClass('TrappedProcessorLoopZ', $globals.TrappedProcessorLoopBase, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorLoopZ.comment="I am used to loop over data and repeat the contents filling process\x0aof the brush I am installed on.\x0a\x0aI observe the data in the model,\x0aand when it changes, I loop over it\x0aand run the rest of the processing chain\x0afor each element, putting the result _after_ my brush.\x0a\x0aMy brush itself should be as least visible as possible,\x0aas it only serve as a position flag (use for example\x0ascript type=application/x-beacon, noscript, ins or del).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var frozen,xon;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
frozen=$recv(aDataCarrier)._copy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["copy"]=1;
//>>excludeEnd("ctx");
xon=$recv(frozen)._xontent();
$recv($recv(frozen)._target())._trapIter_after_([],(function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(frozen)._copy();
$recv($1)._target_($recv(html)._root());
$recv($1)._xontent_(xon);
$2=$recv($1)._proceed();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier,frozen:frozen,xon:xon},$globals.TrappedProcessorLoopZ)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09| frozen xon |\x0a\x09frozen := aDataCarrier copy.\x0a\x09xon := frozen xontent.\x0a\x09frozen target trapIter: #() after: [ :html | frozen copy target: html root; xontent: xon; proceed ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy", "xontent", "trapIter:after:", "target", "target:", "root", "xontent:", "proceed"]
}),
$globals.TrappedProcessorLoopZ);



$core.addClass('TrappedProcessorOptionValue', $globals.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorOptionValue.comment="I set the option value.\x0a\x0aAdditionally, when changed (by toView:),\x0aI ping closest <select> with 'trappedselectreplay' event.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._toTargetValue();
$recv($recv($recv($recv(aDataCarrier)._target())._asJQuery())._closest_("select"))._trigger_("trappedselectreplay");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorOptionValue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetValue.\x0a\x09(aDataCarrier target asJQuery closest: 'select')\x0a\x09\x09trigger: 'trappedselectreplay'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toTargetValue", "trigger:", "closest:", "asJQuery", "target"]
}),
$globals.TrappedProcessorOptionValue);



$core.addClass('TrappedProcessorReplace', $globals.TrappedProcessor, ['left', 'right'], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorReplace.comment="I convert data to string representation and do a regex replace.\x0aI get two parameters, in toView:, first is replaced with second,\x0aand in toModel:, the second is replaced with first.\x0a\x0aI remove leading '^' and ending '$' from the string used as replacement,\x0aso it safe to replace ^to with ^To, for example.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "left:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@left"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "left: aString\x0a\x09left := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorReplace);

$core.addMethod(
$core.method({
selector: "right:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@right"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "right: aString\x0a\x09right := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorReplace);

$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var replacement,old;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@left"])._replace_with_("^\x5c^","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=2;
//>>excludeEnd("ctx");
replacement=$recv($1)._replace_with_("\x5c$$","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
old=$recv($recv(aDataCarrier)._value())._asString();
$recv(aDataCarrier)._value_whenDifferentFrom_($recv(old)._replace_with_(self["@right"],replacement),old);
$2=$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier,replacement:replacement,old:old},$globals.TrappedProcessorReplace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09| replacement old |\x0a\x09replacement := (left replace: '^\x5c^' with: '') replace: '\x5c$$' with: ''.\x0a\x09old := aDataCarrier value asString.\x0a\x09aDataCarrier\x0a\x09\x09value: (old replace: right with: replacement) whenDifferentFrom: old;\x0a\x09\x09proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "asString", "value", "value:whenDifferentFrom:", "proceed"]
}),
$globals.TrappedProcessorReplace);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
var replacement,old;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@right"])._replace_with_("^\x5c^","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=2;
//>>excludeEnd("ctx");
replacement=$recv($1)._replace_with_("\x5c$$","");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["replace:with:"]=1;
//>>excludeEnd("ctx");
old=$recv($recv(aDataCarrier)._value())._asString();
$recv(aDataCarrier)._value_whenDifferentFrom_($recv(old)._replace_with_(self["@left"],replacement),old);
$2=$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier,replacement:replacement,old:old},$globals.TrappedProcessorReplace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09| replacement old |\x0a\x09replacement := (right replace: '^\x5c^' with: '') replace: '\x5c$$' with: ''.\x0a\x09old := aDataCarrier value asString.\x0a\x09aDataCarrier\x0a\x09\x09value: (old replace: left with: replacement) whenDifferentFrom: old;\x0a\x09\x09proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["replace:with:", "asString", "value", "value:whenDifferentFrom:", "proceed"]
}),
$globals.TrappedProcessorReplace);


$core.addMethod(
$core.method({
selector: "new:with:",
protocol: 'instance creation',
fn: function (aString,anotherString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2=self._new();
$3=$2;
$4=$recv(aString)._asString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asString"]=1;
//>>excludeEnd("ctx");
$recv($3)._left_($4);
$recv($2)._right_($recv(anotherString)._asString());
$5=$recv($2)._yourself();
$1=$5;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:with:",{aString:aString,anotherString:anotherString},$globals.TrappedProcessorReplace.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "new: aString with: anotherString\x0a\x09^ self new\x0a\x09\x09left: aString asString;\x0a\x09\x09right: anotherString asString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["left:", "new", "asString", "right:", "yourself"]
}),
$globals.TrappedProcessorReplace.klass);


$core.addClass('TrappedProcessorSelectValue', $globals.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorSelectValue.comment="I bind to select value.\x0a\x0aWhen changed (by toView: or by user),\x0aI remember the selected set.\x0a\x0aWhen pinged by 'trappedselectreplay',\x0aI set the remembered value.\x0a\x0aThis allows to have select-option groups\x0awith later setting of option values\x0a(if those are set via related processor 'optionValue',\x0awhich pings me with 'trappedselectreplay').";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "installToView:toModel:",
protocol: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var jq,val;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
jq=$recv($recv(aDataCarrier)._target())._asJQuery();
val=$recv(jq)._val();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["val"]=1;
//>>excludeEnd("ctx");
$1=jq;
$recv($1)._data_("trapped.saved.val");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data:"]=1;
//>>excludeEnd("ctx");
$recv($1)._on_bind_("change",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(anotherDataCarrier)._copy();
$recv($2)._value_($recv(jq)._val());
$3=$recv($2)._proceed();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:bind:"]=1;
//>>excludeEnd("ctx");
$4=$recv($1)._on_bind_("trappedselectreplay",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(jq)._val_($recv(jq)._data_("trapped.saved.val"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,jq:jq,val:val},$globals.TrappedProcessorSelectValue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| jq val |\x0a\x09jq := aDataCarrier target asJQuery.\x0a\x09val := jq val.\x0a\x09jq\x0a\x09\x09data: 'trapped.saved.val';\x0a\x09\x09on: 'change' bind: [ anotherDataCarrier copy value: jq val; proceed ];\x0a\x09\x09on: 'trappedselectreplay' bind: [ jq val: (jq data: 'trapped.saved.val') ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "target", "val", "data:", "on:bind:", "value:", "copy", "proceed", "val:"]
}),
$globals.TrappedProcessorSelectValue);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._toTargetValue();
$recv($recv($recv(aDataCarrier)._target())._asJQuery())._data_put_("trapped.saved.val",$recv(aDataCarrier)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorSelectValue)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetValue.\x0a\x09aDataCarrier target asJQuery data: 'trapped.saved.val' put: aDataCarrier value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toTargetValue", "data:put:", "asJQuery", "target", "value"]
}),
$globals.TrappedProcessorSelectValue);



$core.addClass('TrappedProcessorSignal', $globals.TrappedProcessor, ['selector'], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorSignal.comment="Instead of writing data directly to model,\x0aI instead modify it by sending a message specified when instantiating me.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorSignal);

$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._modifyTargetByPerforming_(self["@selector"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorSignal)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier modifyTargetByPerforming: selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modifyTargetByPerforming:"]
}),
$globals.TrappedProcessorSignal);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09\x22stop\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorSignal);


$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._selector_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString},$globals.TrappedProcessorSignal.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "new: aString\x0a\x09^self new\x0a\x09\x09selector: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "yourself"]
}),
$globals.TrappedProcessorSignal.klass);


$core.addClass('TrappedProcessorToBlackboard', $globals.TrappedDataExpectingProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorToBlackboard.comment="I save the data to blackboard in toModel:, to position specified by path.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aDataCarrier)._target())._modify_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aDataCarrier)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorToBlackboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier target modify: [ aDataCarrier value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modify:", "target", "value"]
}),
$globals.TrappedProcessorToBlackboard);



$core.addClass('TrappedProcessorUriComponentDecode', $globals.TrappedProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorUriComponentDecode.comment="I uriComponentDecode in toView:\x0aand encode in toModel:";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aDataCarrier)._value_($recv($recv(aDataCarrier)._value())._uriComponentEncoded());
$1=$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorUriComponentDecode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentEncoded;\x0a\x09\x09proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "uriComponentEncoded", "value", "proceed"]
}),
$globals.TrappedProcessorUriComponentDecode);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aDataCarrier)._value_($recv($recv(aDataCarrier)._value())._uriComponentDecoded());
$1=$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorUriComponentDecode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentDecoded;\x0a\x09\x09proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "uriComponentDecoded", "value", "proceed"]
}),
$globals.TrappedProcessorUriComponentDecode);



$core.addClass('TrappedProcessorUriComponentEncode', $globals.TrappedProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorUriComponentEncode.comment="I uriComponentEncode in toView:\x0aand decode in toModel:";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aDataCarrier)._value_($recv($recv(aDataCarrier)._value())._uriComponentDecoded());
$1=$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorUriComponentEncode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentDecoded;\x0a\x09\x09proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "uriComponentDecoded", "value", "proceed"]
}),
$globals.TrappedProcessorUriComponentEncode);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aDataCarrier)._value_($recv($recv(aDataCarrier)._value())._uriComponentEncoded());
$1=$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorUriComponentEncode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier\x0a\x09\x09value: aDataCarrier value uriComponentEncoded;\x0a\x09\x09proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "uriComponentEncoded", "value", "proceed"]
}),
$globals.TrappedProcessorUriComponentEncode);



$core.addClass('TrappedProcessorWhenClicked', $globals.TrappedProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorWhenClicked.comment="I bind to an element and send true to blackboard when clicked.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "installToView:toModel:",
protocol: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aDataCarrier)._target())._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(anotherDataCarrier)._copy())._proceed();
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},$globals.TrappedProcessorWhenClicked)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09aDataCarrier target onClick: [ anotherDataCarrier copy proceed. false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onClick:", "target", "proceed", "copy"]
}),
$globals.TrappedProcessorWhenClicked);



$core.addClass('TrappedProcessorWhenSubmitted', $globals.TrappedProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorWhenSubmitted.comment="I bind to a form and send true to blackboard when submitted.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "installToView:toModel:",
protocol: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aDataCarrier)._target())._onSubmit_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv($recv(anotherDataCarrier)._copy())._proceed();
return false;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},$globals.TrappedProcessorWhenSubmitted)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09aDataCarrier target onSubmit: [ anotherDataCarrier copy proceed. false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["onSubmit:", "target", "proceed", "copy"]
}),
$globals.TrappedProcessorWhenSubmitted);



$core.addClass('TrappedProcessorWidget', $globals.TrappedProcessor, ['viewName'], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorWidget.comment="I insert a widget instance of the class specified when creating me.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aDataCarrier)._target())._with_($recv($recv($recv($Smalltalk())._current())._at_(self["@viewName"]))._new());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorWidget)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier target with: (Smalltalk current at: viewName) new",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["with:", "target", "new", "at:", "current"]
}),
$globals.TrappedProcessorWidget);

$core.addMethod(
$core.method({
selector: "viewName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@viewName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "viewName: aString\x0a\x09viewName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessorWidget);


$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._viewName_(aString);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{aString:aString},$globals.TrappedProcessorWidget.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "new: aString\x0a\x09^self new\x0a\x09\x09viewName: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["viewName:", "new", "yourself"]
}),
$globals.TrappedProcessorWidget.klass);


$core.addClass('TrappedProcessorXontent', $globals.TrappedProcessor, [], 'Trapped-Processors');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorXontent.comment="I am used to show xontent of the brush I am installed on\x0a(see jQuery plugin Xontent for details).\x0a\x0aI clone xontent of the brush, put it into HTML\x0aand interpret all contained data-trap attributes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
function $Trapped(){return $globals.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($recv(aDataCarrier)._target())._asJQuery())._append_($recv($recv($Trapped())._current())._cloneAndInject_($recv($recv(aDataCarrier)._xontent())._get_((0))));
$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorXontent)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier target asJQuery append: (Trapped current cloneAndInject: (aDataCarrier xontent get: 0)).\x0a\x09aDataCarrier proceed",
referencedClasses: ["Trapped"],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery", "target", "cloneAndInject:", "current", "get:", "xontent", "proceed"]
}),
$globals.TrappedProcessorXontent);


$core.addMethod(
$core.method({
selector: "modifyTarget",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._target())._modify_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modifyTarget",{},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "modifyTarget\x0a\x09self target modify: [ self value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modify:", "target", "value"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "modifyTargetByPerforming:",
protocol: '*Trapped-Processors',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._target())._modify_((function(m){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(m)._perform_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modifyTargetByPerforming:",{aString:aString},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "modifyTargetByPerforming: aString\x0a\x09self target modify: [ :m | m perform: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modify:", "target", "perform:"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "primitive:",
protocol: '*Trapped-Processors',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return anObject === nil ? null : anObject.valueOf();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"primitive:",{anObject:anObject},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "primitive: anObject\x0a\x09<return anObject === nil ? null : anObject.valueOf()>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "toTargetAttr:",
protocol: '*Trapped-Processors',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$receiver;
$1=self._falseAsNilValue();
if(($receiver = $1) == null || $receiver.isNil){
$2=self._target();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["target"]=1;
//>>excludeEnd("ctx");
$recv($2)._removeAt_(aString);
} else {
var value,bvalue;
bvalue=$receiver;
value=self._primitive_(bvalue);
value;
$3=self._target();
$5=$recv(value).__eq(true);
if($core.assert($5)){
$4=aString;
} else {
$4=value;
};
$recv($3)._at_put_(aString,$4);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toTargetAttr:",{aString:aString},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "toTargetAttr: aString\x0a\x09self falseAsNilValue\x0a\x09\x09ifNil: [ self target removeAt: aString ]\x0a\x09\x09ifNotNil: [ :bvalue |\x0a\x09\x09\x09| value |\x0a\x09\x09\x09value := self primitive: bvalue.\x0a\x09\x09\x09self target at: aString put: (value = true ifTrue: [ aString ] ifFalse: [ value ]) ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "falseAsNilValue", "removeAt:", "target", "primitive:", "at:put:", "ifTrue:ifFalse:", "="]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "toTargetContents",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._target())._contents_(self._primitive_(self._value()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toTargetContents",{},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toTargetContents\x0a\x09self target contents: (self primitive: self value)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["contents:", "target", "primitive:", "value"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "toTargetProp:",
protocol: '*Trapped-Processors',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._target())._element())._at_put_(aString,self._primitive_(self._value()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toTargetProp:",{aString:aString},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "toTargetProp: aString\x0a\x09self target element at: aString put: (self primitive: self value)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "element", "target", "primitive:", "value"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "toTargetValue",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._target())._asJQuery())._val_(self._primitive_(self._value()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toTargetValue",{},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toTargetValue\x0a\x09self target asJQuery val: (self primitive: self value)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["val:", "asJQuery", "target", "primitive:", "value"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "xontent",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._target())._asJQuery())._xontent();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xontent",{},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xontent\x0a\x09^self target asJQuery xontent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["xontent", "asJQuery", "target"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "xontent:",
protocol: '*Trapped-Processors',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self._target())._asJQuery())._xontent_data_("set",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xontent:",{anObject:anObject},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "xontent: anObject\x0a\x09self target asJQuery xontent: 'set' data: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["xontent:data:", "asJQuery", "target"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "attr:",
protocol: '*Trapped-Processors',
fn: function (aString){
var self=this;
function $TrappedProcessorAttribute(){return $globals.TrappedProcessorAttribute||(typeof TrappedProcessorAttribute=="undefined"?nil:TrappedProcessorAttribute)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorAttribute())._new_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"attr:",{aString:aString},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "attr: aString\x0a\x09^TrappedProcessorAttribute new: aString",
referencedClasses: ["TrappedProcessorAttribute"],
//>>excludeEnd("ide");
messageSends: ["new:"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "dataToView:",
protocol: '*Trapped-Processors',
fn: function (aBlock){
var self=this;
function $TrappedProcessorDataAdhoc(){return $globals.TrappedProcessorDataAdhoc||(typeof TrappedProcessorDataAdhoc=="undefined"?nil:TrappedProcessorDataAdhoc)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorDataAdhoc())._newToView_(aBlock);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataToView:",{aBlock:aBlock},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "dataToView: aBlock\x0a\x09^TrappedProcessorDataAdhoc newToView: aBlock",
referencedClasses: ["TrappedProcessorDataAdhoc"],
//>>excludeEnd("ide");
messageSends: ["newToView:"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "deuric",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorUriComponentDecode(){return $globals.TrappedProcessorUriComponentDecode||(typeof TrappedProcessorUriComponentDecode=="undefined"?nil:TrappedProcessorUriComponentDecode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorUriComponentDecode())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deuric",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deuric\x0a\x09^TrappedProcessorUriComponentDecode new",
referencedClasses: ["TrappedProcessorUriComponentDecode"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "guard:",
protocol: '*Trapped-Processors',
fn: function (anArray){
var self=this;
function $TrappedProcessorGuard(){return $globals.TrappedProcessorGuard||(typeof TrappedProcessorGuard=="undefined"?nil:TrappedProcessorGuard)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorGuard())._new_(anArray);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"guard:",{anArray:anArray},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "guard: anArray\x0a\x09^TrappedProcessorGuard new: anArray",
referencedClasses: ["TrappedProcessorGuard"],
//>>excludeEnd("ide");
messageSends: ["new:"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "inputChecked",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorInputChecked(){return $globals.TrappedProcessorInputChecked||(typeof TrappedProcessorInputChecked=="undefined"?nil:TrappedProcessorInputChecked)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorInputChecked())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputChecked",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputChecked\x0a\x09^TrappedProcessorInputChecked new",
referencedClasses: ["TrappedProcessorInputChecked"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "inputValue",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorInputValue(){return $globals.TrappedProcessorInputValue||(typeof TrappedProcessorInputValue=="undefined"?nil:TrappedProcessorInputValue)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorInputValue())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"inputValue",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "inputValue\x0a\x09^TrappedProcessorInputValue new",
referencedClasses: ["TrappedProcessorInputValue"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "loopZ",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorLoopZ(){return $globals.TrappedProcessorLoopZ||(typeof TrappedProcessorLoopZ=="undefined"?nil:TrappedProcessorLoopZ)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorLoopZ())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loopZ",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loopZ\x0a\x09^TrappedProcessorLoopZ new",
referencedClasses: ["TrappedProcessorLoopZ"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "optionValue",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorOptionValue(){return $globals.TrappedProcessorOptionValue||(typeof TrappedProcessorOptionValue=="undefined"?nil:TrappedProcessorOptionValue)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorOptionValue())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"optionValue",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "optionValue\x0a\x09^TrappedProcessorOptionValue new",
referencedClasses: ["TrappedProcessorOptionValue"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "path",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorDescend(){return $globals.TrappedProcessorDescend||(typeof TrappedProcessorDescend=="undefined"?nil:TrappedProcessorDescend)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorDescend())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"path",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x09^TrappedProcessorDescend new",
referencedClasses: ["TrappedProcessorDescend"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "replace:with:",
protocol: '*Trapped-Processors',
fn: function (aString,anotherString){
var self=this;
function $TrappedProcessorReplace(){return $globals.TrappedProcessorReplace||(typeof TrappedProcessorReplace=="undefined"?nil:TrappedProcessorReplace)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorReplace())._new_with_(aString,anotherString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"replace:with:",{aString:aString,anotherString:anotherString},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anotherString"],
source: "replace: aString with: anotherString\x0a\x09^TrappedProcessorReplace new: aString with: anotherString",
referencedClasses: ["TrappedProcessorReplace"],
//>>excludeEnd("ide");
messageSends: ["new:with:"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "selectValue",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorSelectValue(){return $globals.TrappedProcessorSelectValue||(typeof TrappedProcessorSelectValue=="undefined"?nil:TrappedProcessorSelectValue)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorSelectValue())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"selectValue",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selectValue\x0a\x09^TrappedProcessorSelectValue new",
referencedClasses: ["TrappedProcessorSelectValue"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "signal:",
protocol: '*Trapped-Processors',
fn: function (aString){
var self=this;
function $TrappedProcessorSignal(){return $globals.TrappedProcessorSignal||(typeof TrappedProcessorSignal=="undefined"?nil:TrappedProcessorSignal)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorSignal())._new_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"signal:",{aString:aString},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "signal: aString\x0a\x09^TrappedProcessorSignal new: aString",
referencedClasses: ["TrappedProcessorSignal"],
//>>excludeEnd("ide");
messageSends: ["new:"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "toBlackboard",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorToBlackboard(){return $globals.TrappedProcessorToBlackboard||(typeof TrappedProcessorToBlackboard=="undefined"?nil:TrappedProcessorToBlackboard)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorToBlackboard())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toBlackboard",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "toBlackboard\x0a\x09^TrappedProcessorToBlackboard new",
referencedClasses: ["TrappedProcessorToBlackboard"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "uric",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorUriComponentEncode(){return $globals.TrappedProcessorUriComponentEncode||(typeof TrappedProcessorUriComponentEncode=="undefined"?nil:TrappedProcessorUriComponentEncode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorUriComponentEncode())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uric",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uric\x0a\x09^TrappedProcessorUriComponentEncode new",
referencedClasses: ["TrappedProcessorUriComponentEncode"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "whenClicked",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorWhenClicked(){return $globals.TrappedProcessorWhenClicked||(typeof TrappedProcessorWhenClicked=="undefined"?nil:TrappedProcessorWhenClicked)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorWhenClicked())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whenClicked",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "whenClicked\x0a\x09^TrappedProcessorWhenClicked new",
referencedClasses: ["TrappedProcessorWhenClicked"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "whenSubmitted",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorWhenSubmitted(){return $globals.TrappedProcessorWhenSubmitted||(typeof TrappedProcessorWhenSubmitted=="undefined"?nil:TrappedProcessorWhenSubmitted)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorWhenSubmitted())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"whenSubmitted",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "whenSubmitted\x0a\x09^TrappedProcessorWhenSubmitted new",
referencedClasses: ["TrappedProcessorWhenSubmitted"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "widget:",
protocol: '*Trapped-Processors',
fn: function (aString){
var self=this;
function $TrappedProcessorWidget(){return $globals.TrappedProcessorWidget||(typeof TrappedProcessorWidget=="undefined"?nil:TrappedProcessorWidget)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorWidget())._new_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"widget:",{aString:aString},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "widget: aString\x0a\x09^TrappedProcessorWidget new: aString",
referencedClasses: ["TrappedProcessorWidget"],
//>>excludeEnd("ide");
messageSends: ["new:"]
}),
$globals.TrappedProcessor.klass);

$core.addMethod(
$core.method({
selector: "xontent",
protocol: '*Trapped-Processors',
fn: function (){
var self=this;
function $TrappedProcessorXontent(){return $globals.TrappedProcessorXontent||(typeof TrappedProcessorXontent=="undefined"?nil:TrappedProcessorXontent)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorXontent())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"xontent",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "xontent\x0a\x09^TrappedProcessorXontent new",
referencedClasses: ["TrappedProcessorXontent"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);

});
