define("gh_herby_trapped/Trapped-Frontend", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Canvas", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Frontend');
smalltalk.packages["Trapped-Frontend"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('TrappedDataCarrier', smalltalk.Object, ['target', 'model', 'chain'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "chain:",
category: 'accessing',
fn: function (aDataChain){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@chain"]=aDataChain;
return self}, function($ctx1) {$ctx1.fill(self,"chain:",{aDataChain:aDataChain},smalltalk.TrappedDataCarrier)})},
args: ["aDataChain"],
source: "chain: aDataChain\x0a\x09chain := aDataChain",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "modifyTarget",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._target())._modify_((function(){
return smalltalk.withContext(function($ctx2) {
return self._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"modifyTarget",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "modifyTarget\x0a\x09self target modify: [ self value ]",
messageSends: ["modify:", "target", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "target",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@target"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"target",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "target\x0a\x09^target",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "target:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@target"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"target:",{anObject:anObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject"],
source: "target: anObject\x0a\x09target := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetAttr:",
category: 'action',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(self._target())._asJQuery();
$3=self._value();
$ctx1.sendIdx["value"]=1;
if(($receiver = $3) == nil || $receiver == null){
$2=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})});
} else {
var o;
o=$receiver;
$2=_st(o)._value();
};
_st($1)._attr_put_(aString,$2);
return self}, function($ctx1) {$ctx1.fill(self,"toTargetAttr:",{aString:aString},smalltalk.TrappedDataCarrier)})},
args: ["aString"],
source: "toTargetAttr: aString\x0a\x09self target asJQuery attr: aString put: (self value ifNotNil: [ :o | o value ] ifNil: [[]])",
messageSends: ["attr:put:", "asJQuery", "target", "ifNotNil:ifNil:", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetContents",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._target())._contents_(self._value());
return self}, function($ctx1) {$ctx1.fill(self,"toTargetContents",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "toTargetContents\x0a\x09self target contents: self value",
messageSends: ["contents:", "target", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "toTargetValue",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$3,$2;
$1=_st(self._target())._asJQuery();
$3=self._value();
$ctx1.sendIdx["value"]=1;
if(($receiver = $3) == nil || $receiver == null){
$2=(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})});
} else {
var o;
o=$receiver;
$2=_st(o)._value();
};
_st($1)._val_($2);
return self}, function($ctx1) {$ctx1.fill(self,"toTargetValue",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "toTargetValue\x0a\x09self target asJQuery val: (self value ifNotNil: [ :o | o value ] ifNil: [[]])",
messageSends: ["val:", "asJQuery", "target", "ifNotNil:ifNil:", "value"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"value",{},smalltalk.TrappedDataCarrier)})},
args: [],
source: "value\x0a\x09^model",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);

smalltalk.addMethod(
smalltalk.method({
selector: "value:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"value:",{anObject:anObject},smalltalk.TrappedDataCarrier)})},
args: ["anObject"],
source: "value: anObject\x0a\x09model := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier);


smalltalk.addMethod(
smalltalk.method({
selector: "on:target:",
category: 'not yet classified',
fn: function (aDataChain,anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._chain_(aDataChain);
_st($2)._target_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:target:",{aDataChain:aDataChain,anObject:anObject},smalltalk.TrappedDataCarrier.klass)})},
args: ["aDataChain", "anObject"],
source: "on: aDataChain target: anObject\x0a\x09^self new\x0a\x09\x09chain: aDataChain;\x0a\x09\x09target: anObject;\x0a\x09\x09yourself",
messageSends: ["chain:", "new", "target:", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrier.klass);


smalltalk.addClass('TrappedDataCarrierToModel', smalltalk.TrappedDataCarrier, ['index'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
if(($receiver = $1) == nil || $receiver == null){
self["@index"]=_st(self["@chain"])._lastProcessorNo();
} else {
self["@index"]=_st(self["@index"]).__minus((1));
};
_st(_st(self["@chain"])._processorNo_(self["@index"]))._toModel_(self);
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.TrappedDataCarrierToModel)})},
args: [],
source: "proceed\x0a\x09index := index ifNil: [ chain lastProcessorNo ] ifNotNil: [ index - 1 ].\x0a\x09(chain processorNo: index) toModel: self",
messageSends: ["ifNil:ifNotNil:", "lastProcessorNo", "-", "toModel:", "processorNo:"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrierToModel);



smalltalk.addClass('TrappedDataCarrierToView', smalltalk.TrappedDataCarrier, ['index'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "proceed",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@index"];
if(($receiver = $1) == nil || $receiver == null){
self["@index"]=_st(self["@chain"])._firstProcessorNo();
} else {
self["@index"]=_st(self["@index"]).__plus((1));
};
_st(_st(self["@chain"])._processorNo_(self["@index"]))._toView_(self);
return self}, function($ctx1) {$ctx1.fill(self,"proceed",{},smalltalk.TrappedDataCarrierToView)})},
args: [],
source: "proceed\x0a\x09index := index ifNil: [ chain firstProcessorNo ] ifNotNil: [ index + 1 ].\x0a\x09(chain processorNo: index) toView: self",
messageSends: ["ifNil:ifNotNil:", "firstProcessorNo", "+", "toView:", "processorNo:"],
referencedClasses: []
}),
smalltalk.TrappedDataCarrierToView);



smalltalk.addClass('TrappedDataChain', smalltalk.Object, ['processors'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "firstProcessorNo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (1);
}, function($ctx1) {$ctx1.fill(self,"firstProcessorNo",{},smalltalk.TrappedDataChain)})},
args: [],
source: "firstProcessorNo\x0a\x09^1",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataChain);

smalltalk.addMethod(
smalltalk.method({
selector: "forSnapshot:andBrush:",
category: 'action',
fn: function (aSnapshot,aTagBrush){
var self=this;
var toViewCarrier,toModelCarrier;
function $TrappedDataCarrierToView(){return smalltalk.TrappedDataCarrierToView||(typeof TrappedDataCarrierToView=="undefined"?nil:TrappedDataCarrierToView)}
function $TrappedDataCarrierToModel(){return smalltalk.TrappedDataCarrierToModel||(typeof TrappedDataCarrierToModel=="undefined"?nil:TrappedDataCarrierToModel)}
return smalltalk.withContext(function($ctx1) { 
toViewCarrier=_st($TrappedDataCarrierToView())._on_target_(self,aTagBrush);
$ctx1.sendIdx["on:target:"]=1;
toModelCarrier=_st($TrappedDataCarrierToModel())._on_target_(self,aSnapshot);
_st(self["@processors"])._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._installToView_toModel_(toViewCarrier,toModelCarrier);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"forSnapshot:andBrush:",{aSnapshot:aSnapshot,aTagBrush:aTagBrush,toViewCarrier:toViewCarrier,toModelCarrier:toModelCarrier},smalltalk.TrappedDataChain)})},
args: ["aSnapshot", "aTagBrush"],
source: "forSnapshot: aSnapshot andBrush: aTagBrush\x0a\x09| toViewCarrier toModelCarrier |\x0a\x09toViewCarrier := TrappedDataCarrierToView on: self target: aTagBrush.\x0a\x09toModelCarrier := TrappedDataCarrierToModel on: self target: aSnapshot.\x0a\x09processors do: [ :each | each installToView: toViewCarrier toModel: toModelCarrier ]",
messageSends: ["on:target:", "do:", "installToView:toModel:"],
referencedClasses: ["TrappedDataCarrierToView", "TrappedDataCarrierToModel"]
}),
smalltalk.TrappedDataChain);

smalltalk.addMethod(
smalltalk.method({
selector: "lastProcessorNo",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@processors"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"lastProcessorNo",{},smalltalk.TrappedDataChain)})},
args: [],
source: "lastProcessorNo\x0a\x09^processors size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TrappedDataChain);

smalltalk.addMethod(
smalltalk.method({
selector: "processorNo:",
category: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@processors"])._at_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"processorNo:",{aNumber:aNumber},smalltalk.TrappedDataChain)})},
args: ["aNumber"],
source: "processorNo: aNumber\x0a\x09^processors at: aNumber",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.TrappedDataChain);

smalltalk.addMethod(
smalltalk.method({
selector: "processors:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@processors"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"processors:",{anArray:anArray},smalltalk.TrappedDataChain)})},
args: ["anArray"],
source: "processors: anArray\x0a\x09processors := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedDataChain);


smalltalk.addMethod(
smalltalk.method({
selector: "blackboardReaderWriter",
category: 'private',
fn: function (){
var self=this;
function $TrappedProcessorBlackboard(){return smalltalk.TrappedProcessorBlackboard||(typeof TrappedProcessorBlackboard=="undefined"?nil:TrappedProcessorBlackboard)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorBlackboard())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"blackboardReaderWriter",{},smalltalk.TrappedDataChain.klass)})},
args: [],
source: "blackboardReaderWriter\x0a\x09^TrappedProcessorBlackboard new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorBlackboard"]
}),
smalltalk.TrappedDataChain.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
category: 'instance creation',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._processors_(_st([self._blackboardReaderWriter()]).__comma(anArray));
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"new:",{anArray:anArray},smalltalk.TrappedDataChain.klass)})},
args: ["anArray"],
source: "new: anArray\x0a\x09^self new\x0a\x09\x09processors: { self blackboardReaderWriter }, anArray;\x0a\x09\x09yourself",
messageSends: ["processors:", "new", ",", "blackboardReaderWriter", "yourself"],
referencedClasses: []
}),
smalltalk.TrappedDataChain.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newFromProcessorSpecs:",
category: 'instance creation',
fn: function (anArray){
var self=this;
function $TrappedProcessor(){return smalltalk.TrappedProcessor||(typeof TrappedProcessor=="undefined"?nil:TrappedProcessor)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(_st(anArray)._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st($TrappedProcessor())._perform_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})})));
return $1;
}, function($ctx1) {$ctx1.fill(self,"newFromProcessorSpecs:",{anArray:anArray},smalltalk.TrappedDataChain.klass)})},
args: ["anArray"],
source: "newFromProcessorSpecs: anArray\x0a\x09^self new: (anArray collect: [ :each | TrappedProcessor perform: each ])",
messageSends: ["new:", "collect:", "perform:"],
referencedClasses: ["TrappedProcessor"]
}),
smalltalk.TrappedDataChain.klass);


smalltalk.addClass('TrappedDumbView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.TrappedDumbView.comment="I just read and show an actual path.";
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._root())._trap_([]);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TrappedDumbView)})},
args: ["html"],
source: "renderOn: html\x0a\x09html root trap: #()",
messageSends: ["trap:", "root"],
referencedClasses: []
}),
smalltalk.TrappedDumbView);



smalltalk.addClass('TrappedProcessor', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.TrappedProcessor.comment="I process data in TrappedDataChain.\x0aI am stateless flyweight (aka servant)\x0aand will get all necessary data as arguments in API calls.\x0a\x0aMy public API is:\x0a - installToView:toModel:\x0a   This gets two TrappedDataCarriers set up without actual data\x0a   and at the beginning of their chains. It should do one-time\x0a   installation task needed (install event handlers etc.).\x0a   To start a chain, do: dataCarrier copy value: data; proceed.\x0a - toView:\x0a   This performs transformation of TrappedDataCarrier on its way from model to view.\x0a   Should call aDataCarrier proceed to proceed to subsequent step.\x0a - toModel:\x0a   This performs transformation of TrappedDataToken on its way from view to model.\x0a   Should call aDataCarrier proceed to proceed to subsequent step.\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},smalltalk.TrappedProcessor)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09\x22by default, do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedProcessor);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessor)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22by default, proceed\x22\x0a\x09aDataCarrier proceed",
messageSends: ["proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessor);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._proceed();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessor)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09\x22by default, proceed\x22\x0a\x09aDataCarrier proceed",
messageSends: ["proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessor);


smalltalk.addMethod(
smalltalk.method({
selector: "contents",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorContents(){return smalltalk.TrappedProcessorContents||(typeof TrappedProcessorContents=="undefined"?nil:TrappedProcessorContents)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorContents())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"contents",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "contents\x0a\x09^TrappedProcessorContents new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorContents"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inputChecked",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorInputChecked(){return smalltalk.TrappedProcessorInputChecked||(typeof TrappedProcessorInputChecked=="undefined"?nil:TrappedProcessorInputChecked)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorInputChecked())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputChecked",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "inputChecked\x0a\x09^TrappedProcessorInputChecked new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorInputChecked"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inputValue",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorInputValue(){return smalltalk.TrappedProcessorInputValue||(typeof TrappedProcessorInputValue=="undefined"?nil:TrappedProcessorInputValue)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorInputValue())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"inputValue",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "inputValue\x0a\x09^TrappedProcessorInputValue new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorInputValue"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whenClicked",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorWhenClicked(){return smalltalk.TrappedProcessorWhenClicked||(typeof TrappedProcessorWhenClicked=="undefined"?nil:TrappedProcessorWhenClicked)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorWhenClicked())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"whenClicked",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "whenClicked\x0a\x09^TrappedProcessorWhenClicked new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorWhenClicked"]
}),
smalltalk.TrappedProcessor.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "whenSubmitted",
category: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorWhenSubmitted(){return smalltalk.TrappedProcessorWhenSubmitted||(typeof TrappedProcessorWhenSubmitted=="undefined"?nil:TrappedProcessorWhenSubmitted)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TrappedProcessorWhenSubmitted())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"whenSubmitted",{},smalltalk.TrappedProcessor.klass)})},
args: [],
source: "whenSubmitted\x0a\x09^TrappedProcessorWhenSubmitted new",
messageSends: ["new"],
referencedClasses: ["TrappedProcessorWhenSubmitted"]
}),
smalltalk.TrappedProcessor.klass);


smalltalk.addClass('TrappedProcessorBlackboard', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorBlackboard.comment="I am used internally to fetch data from blackboard\x0aor write it back.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var snap;
function $KeyedPubSubUnsubscribe(){return smalltalk.KeyedPubSubUnsubscribe||(typeof KeyedPubSubUnsubscribe=="undefined"?nil:KeyedPubSubUnsubscribe)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
snap=_st(anotherDataCarrier)._target();
$ctx1.sendIdx["target"]=1;
_st(snap)._watch_((function(data){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(_st(_st(_st(aDataCarrier)._target())._asJQuery())._closest_("html"))._toArray())._isEmpty();
if(smalltalk.assert($1)){
_st($KeyedPubSubUnsubscribe())._signal();
};
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx3) {
$2=_st(aDataCarrier)._copy();
_st($2)._value_(data);
$3=_st($2)._proceed();
return $3;
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})}));
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,snap:snap},smalltalk.TrappedProcessorBlackboard)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| snap |\x0a\x09snap := anotherDataCarrier target.\x0a\x09snap watch: [ :data |\x0a\x09\x09(aDataCarrier target asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].\x0a        snap do: [ aDataCarrier copy value: data; proceed ] ]",
messageSends: ["target", "watch:", "ifTrue:", "isEmpty", "toArray", "closest:", "asJQuery", "signal", "do:", "value:", "copy", "proceed"],
referencedClasses: ["KeyedPubSubUnsubscribe"]
}),
smalltalk.TrappedProcessorBlackboard);

smalltalk.addMethod(
smalltalk.method({
selector: "toModel:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._modifyTarget();
return self}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorBlackboard)})},
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier modifyTarget",
messageSends: ["modifyTarget"],
referencedClasses: []
}),
smalltalk.TrappedProcessorBlackboard);



smalltalk.addClass('TrappedProcessorContents', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorContents.comment="I put data into target via contents: in toView:";
smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetContents();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorContents)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetContents",
messageSends: ["toTargetContents"],
referencedClasses: []
}),
smalltalk.TrappedProcessorContents);



smalltalk.addClass('TrappedProcessorInputChecked', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorInputChecked.comment="I bind to checkbox checked attribute.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var brush;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
brush=_st(aDataCarrier)._target();
_st(brush)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(anotherDataCarrier)._copy();
_st($1)._value_(_st(_st(_st(brush)._asJQuery())._attr_("checked"))._notNil());
$2=_st($1)._proceed();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,brush:brush},smalltalk.TrappedProcessorInputChecked)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| brush |\x0a\x09brush := aDataCarrier target.\x0a\x09brush onChange: [ anotherDataCarrier copy value: (brush asJQuery attr: 'checked') notNil; proceed ]",
messageSends: ["target", "onChange:", "value:", "copy", "notNil", "attr:", "asJQuery", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputChecked);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetAttr_("checked");
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorInputChecked)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetAttr: 'checked'",
messageSends: ["toTargetAttr:"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputChecked);



smalltalk.addClass('TrappedProcessorInputValue', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorInputValue.comment="I bind to input value.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var brush;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
brush=_st(aDataCarrier)._target();
_st(brush)._onChange_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(anotherDataCarrier)._copy();
_st($1)._value_(_st(_st(brush)._asJQuery())._val());
$2=_st($1)._proceed();
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,brush:brush},smalltalk.TrappedProcessorInputValue)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| brush |\x0a\x09brush := aDataCarrier target.\x0a\x09brush onChange: [ anotherDataCarrier copy value: brush asJQuery val; proceed ]",
messageSends: ["target", "onChange:", "value:", "copy", "val", "asJQuery", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputValue);

smalltalk.addMethod(
smalltalk.method({
selector: "toView:",
category: 'data transformation',
fn: function (aDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aDataCarrier)._toTargetValue();
return self}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},smalltalk.TrappedProcessorInputValue)})},
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetValue",
messageSends: ["toTargetValue"],
referencedClasses: []
}),
smalltalk.TrappedProcessorInputValue);



smalltalk.addClass('TrappedProcessorWhenClicked', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorWhenClicked.comment="I bind to an element and send true to blackboard when clicked.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(aDataCarrier)._target())._onClick_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(anotherDataCarrier)._copy();
_st($1)._value_(true);
$2=_st($1)._proceed();
$2;
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},smalltalk.TrappedProcessorWhenClicked)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09aDataCarrier target onClick: [ anotherDataCarrier copy value: true; proceed. false ]",
messageSends: ["onClick:", "target", "value:", "copy", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorWhenClicked);



smalltalk.addClass('TrappedProcessorWhenSubmitted', smalltalk.TrappedProcessor, [], 'Trapped-Frontend');
smalltalk.TrappedProcessorWhenSubmitted.comment="I bind to a form and send true to blackboard when submitted.";
smalltalk.addMethod(
smalltalk.method({
selector: "installToView:toModel:",
category: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(aDataCarrier)._target())._onSubmit_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(anotherDataCarrier)._copy();
_st($1)._value_(true);
$2=_st($1)._proceed();
$2;
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier},smalltalk.TrappedProcessorWhenSubmitted)})},
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09aDataCarrier target onSubmit: [ anotherDataCarrier copy value: true; proceed. false ]",
messageSends: ["onSubmit:", "target", "value:", "copy", "proceed"],
referencedClasses: []
}),
smalltalk.TrappedProcessorWhenSubmitted);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton)})},
args: ["args"],
source: "start: args\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TrappedSingleton);


smalltalk.TrappedSingleton.klass.iVarNames = ['current'];
smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.TrappedSingleton.klass)})},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._start_(args);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton.klass)})},
args: ["args"],
source: "start: args\x0a\x09self current start: args",
messageSends: ["start:", "current"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "byName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"byName:",{aString:aString},smalltalk.Trapped)})},
args: ["aString"],
source: "byName: aString\x0a\x09^ registry at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "descend:snapshotDo:",
category: 'action',
fn: function (anArray,aBlock){
var self=this;
var tpsc;
function $TrappedPathStack(){return smalltalk.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
function $TrappedSnapshot(){return smalltalk.TrappedSnapshot||(typeof TrappedSnapshot=="undefined"?nil:TrappedSnapshot)}
return smalltalk.withContext(function($ctx1) { 
tpsc=_st($TrappedPathStack())._current();
_st(tpsc)._append_do_(anArray,(function(){
var path,model;
return smalltalk.withContext(function($ctx2) {
path=_st(_st(tpsc)._elements())._copy();
path;
model=self._byName_(_st(path)._first());
model;
return _st(aBlock)._value_(_st(_st($TrappedSnapshot())._new())._path_model_(path,model));
}, function($ctx2) {$ctx2.fillBlock({path:path,model:model},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"descend:snapshotDo:",{anArray:anArray,aBlock:aBlock,tpsc:tpsc},smalltalk.Trapped)})},
args: ["anArray", "aBlock"],
source: "descend: anArray snapshotDo: aBlock\x0a\x09| tpsc |\x0a    tpsc := TrappedPathStack current.\x0a    tpsc append: anArray do: [\x0a        | path model |\x0a        path := tpsc elements copy.\x0a   \x09    model := self byName: path first.\x0a        aBlock value: (TrappedSnapshot new path: path model: model)\x0a    ]",
messageSends: ["current", "append:do:", "copy", "elements", "byName:", "first", "value:", "path:model:", "new"],
referencedClasses: ["TrappedPathStack", "TrappedSnapshot"]
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Trapped.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._from_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Trapped)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
category: 'accessing',
fn: function (aListKeyedEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register_name_(aListKeyedEntity,_st(_st(aListKeyedEntity)._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aListKeyedEntity:aListKeyedEntity},smalltalk.Trapped)})},
args: ["aListKeyedEntity"],
source: "register: aListKeyedEntity\x0a\x09self register: aListKeyedEntity name: aListKeyedEntity class name",
messageSends: ["register:name:", "name", "class"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "register:name:",
category: 'accessing',
fn: function (aListKeyedEntity,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@registry"])._at_put_(aString,aListKeyedEntity);
return self}, function($ctx1) {$ctx1.fill(self,"register:name:",{aListKeyedEntity:aListKeyedEntity,aString:aString},smalltalk.Trapped)})},
args: ["aListKeyedEntity", "aString"],
source: "register: aListKeyedEntity name: aString\x0a\x09registry at: aString put: aListKeyedEntity",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(args)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._register_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1="[data-trap]"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._each_((function(index,elem){
var trap,jq,viewName,modelName,tokens,path;
return smalltalk.withContext(function($ctx2) {
jq=_st(elem)._asJQuery();
jq;
trap=_st(jq)._attr_("data-trap");
trap;
tokens=_st(trap)._tokenize_(":");
$ctx2.sendIdx["tokenize:"]=1;
tokens;
$2=_st(_st(tokens)._size()).__eq((1));
if(smalltalk.assert($2)){
tokens=_st(["TrappedDumbView"]).__comma(tokens);
$ctx2.sendIdx[","]=1;
tokens;
};
viewName=_st(tokens)._first();
$ctx2.sendIdx["first"]=1;
viewName;
tokens=_st(_st(_st(tokens)._second())._tokenize_(" "))._select_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._notEmpty();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)})}));
tokens;
modelName=_st(tokens)._first();
modelName;
path=_st($Trapped())._parse_(_st(tokens)._allButFirst());
path;
return _st(_st([modelName]).__comma(path))._trapDescend_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(_st($Smalltalk())._current())._at_(viewName))._new())._appendToJQuery_(jq);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
}, function($ctx2) {$ctx2.fillBlock({index:index,elem:elem,trap:trap,jq:jq,viewName:viewName,modelName:modelName,tokens:tokens,path:path},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.Trapped)})},
args: ["args"],
source: "start: args\x0a    args do: [ :each | self register: each ].\x0a\x09'[data-trap]' asJQuery each: [ :index :elem |\x0a    \x09| trap jq viewName modelName tokens path |\x0a        jq := elem asJQuery.\x0a        trap := jq attr: 'data-trap'.\x0a        tokens := trap tokenize: ':'.\x0a        tokens size = 1 ifTrue: [ tokens := { 'TrappedDumbView' }, tokens ].\x0a        viewName := tokens first.\x0a        tokens := (tokens second tokenize: ' ') select: [ :each | each notEmpty ].\x0a        modelName := tokens first.\x0a        path := Trapped parse: tokens allButFirst.\x0a        { modelName }, path trapDescend: [(Smalltalk current at: viewName) new appendToJQuery: jq].\x0a    ]",
messageSends: ["do:", "register:", "each:", "asJQuery", "attr:", "tokenize:", "ifTrue:", "=", "size", ",", "first", "select:", "second", "notEmpty", "parse:", "allButFirst", "trapDescend:", "appendToJQuery:", "new", "at:", "current"],
referencedClasses: ["Trapped", "Smalltalk"]
}),
smalltalk.Trapped);


smalltalk.addMethod(
smalltalk.method({
selector: "envelope:loop:before:tag:do:",
category: 'private',
fn: function (envelope,model,endjq,aSymbol,aBlock){
var self=this;
var envjq;
return smalltalk.withContext(function($ctx1) { 
envjq=_st(envelope)._asJQuery();
_st(model)._withIndexDo_((function(item,i){
return smalltalk.withContext(function($ctx2) {
_st(envelope)._with_((function(html){
return smalltalk.withContext(function($ctx3) {
return _st(_st(html)._perform_(aSymbol))._trap_read_([i],aBlock);
}, function($ctx3) {$ctx3.fillBlock({html:html},$ctx2,2)})}));
return _st(_st(_st(envjq)._children())._detach())._insertBefore_(endjq);
}, function($ctx2) {$ctx2.fillBlock({item:item,i:i},$ctx1,1)})}));
_st(envjq)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"envelope:loop:before:tag:do:",{envelope:envelope,model:model,endjq:endjq,aSymbol:aSymbol,aBlock:aBlock,envjq:envjq},smalltalk.Trapped.klass)})},
args: ["envelope", "model", "endjq", "aSymbol", "aBlock"],
source: "envelope: envelope loop: model before: endjq tag: aSymbol do: aBlock\x0a   \x09| envjq |\x0a    envjq := envelope asJQuery.\x0a    model withIndexDo: [ :item :i |\x0a        envelope with: [ :html | (html perform: aSymbol) trap: {i} read: aBlock ].\x0a        envjq children detach insertBefore: endjq.\x0a    ].\x0a    envjq remove",
messageSends: ["asJQuery", "withIndexDo:", "with:", "trap:read:", "perform:", "insertBefore:", "detach", "children", "remove"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loop:between:and:tag:do:",
category: 'private',
fn: function (model,start,end,aSymbol,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(start)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st($2)._nextUntil_(_st(end)._element());
_st($1)._remove();
_st(start)._with_((function(html){
return smalltalk.withContext(function($ctx2) {
if(($receiver = model) == nil || $receiver == null){
return model;
} else {
return self._envelope_loop_before_tag_do_(_st(html)._div(),model,_st(end)._asJQuery(),aSymbol,aBlock);
};
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loop:between:and:tag:do:",{model:model,start:start,end:end,aSymbol:aSymbol,aBlock:aBlock},smalltalk.Trapped.klass)})},
args: ["model", "start", "end", "aSymbol", "aBlock"],
source: "loop: model between: start and: end tag: aSymbol do: aBlock\x0a    (start asJQuery nextUntil: end element) remove.\x0a    start with: [ :html | model ifNotNil: [\x0a    \x09self envelope: html div loop: model before: end asJQuery tag: aSymbol do: aBlock\x0a\x09]]",
messageSends: ["remove", "nextUntil:", "asJQuery", "element", "with:", "ifNotNil:", "envelope:loop:before:tag:do:", "div"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(anArray)._collect_((function(each){
var asNum;
return smalltalk.withContext(function($ctx2) {
asNum=_st(each)._asNumber();
asNum;
$2=_st(asNum).__eq(asNum);
$ctx2.sendIdx["="]=1;
if(smalltalk.assert($2)){
return asNum;
} else {
$3=_st(_st(each)._first()).__eq("#");
if(smalltalk.assert($3)){
return [_st(each)._allButFirst()];
} else {
return each;
};
};
}, function($ctx2) {$ctx2.fillBlock({each:each,asNum:asNum},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{anArray:anArray},smalltalk.Trapped.klass)})},
args: ["anArray"],
source: "parse: anArray\x0a\x09^anArray collect: [ :each |\x0a    \x09| asNum |\x0a       \x09asNum := each asNumber.\x0a        asNum = asNum ifTrue: [ asNum ] ifFalse: [\x0a\x09\x09\x09each first = '#' ifTrue: [ { each allButFirst } ] ifFalse: [ each ]]]",
messageSends: ["collect:", "asNumber", "ifTrue:ifFalse:", "=", "first", "allButFirst"],
referencedClasses: []
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "append:do:",
category: 'descending',
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._with_do_(_st(self["@elements"]).__comma(anArray),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"append:do:",{anArray:anArray,aBlock:aBlock},smalltalk.TrappedPathStack)})},
args: ["anArray", "aBlock"],
source: "append: anArray do: aBlock\x0a    self with: elements, anArray do: aBlock",
messageSends: ["with:do:", ","],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.TrappedPathStack)})},
args: [],
source: "elements\x0a\x09^elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TrappedPathStack.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TrappedPathStack)})},
args: [],
source: "initialize\x0a    super initialize.\x0a\x09elements := #().",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'descending',
fn: function (anArray,aBlock){
var self=this;
var old;
return smalltalk.withContext(function($ctx1) { 
old=self["@elements"];
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@elements"]=anArray;
self["@elements"];
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self["@elements"]=old;
return self["@elements"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anArray:anArray,aBlock:aBlock,old:old},smalltalk.TrappedPathStack)})},
args: ["anArray", "aBlock"],
source: "with: anArray do: aBlock\x0a\x09| old |\x0a    old := elements.\x0a    [ elements := anArray.\x0a\x09aBlock value ] ensure: [ elements := old ]",
messageSends: ["ensure:", "value"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSnapshot', smalltalk.Object, ['path', 'model'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'action',
fn: function (aBlock){
var self=this;
function $TrappedPathStack(){return smalltalk.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TrappedPathStack())._current())._with_do_(self["@path"],(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self["@model"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09TrappedPathStack current with: path do: [ aBlock value: model ]",
messageSends: ["with:do:", "current", "value:"],
referencedClasses: ["TrappedPathStack"]
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.TrappedSnapshot)})},
args: [],
source: "model\x0a\x09^model",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "modify:",
category: 'action',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._modify_do_(_st(self._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"modify:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "modify: aBlock\x0a\x09self model modify: self path allButFirst do: aBlock",
messageSends: ["modify:do:", "model", "allButFirst", "path"],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@path"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TrappedSnapshot)})},
args: [],
source: "path\x0a\x09^path",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "path:model:",
category: 'accessing',
fn: function (anArray,aTrappedMW){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self}, function($ctx1) {$ctx1.fill(self,"path:model:",{anArray:anArray,aTrappedMW:aTrappedMW},smalltalk.TrappedSnapshot)})},
args: ["anArray", "aTrappedMW"],
source: "path: anArray model: aTrappedMW\x0a\x09path := anArray.\x0a    model := aTrappedMW",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "watch:",
category: 'action',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._watch_do_(_st(self._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"watch:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "watch: aBlock\x0a\x09self model watch: self path allButFirst do: aBlock",
messageSends: ["watch:do:", "model", "allButFirst", "path"],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);


smalltalk.addMethod(
smalltalk.method({
selector: "trapDescend:",
category: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Trapped())._current())._descend_snapshotDo_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"trapDescend:",{aBlock:aBlock},smalltalk.Array)})},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09Trapped current descend: self snapshotDo: aBlock",
messageSends: ["descend:snapshotDo:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "trapIter:tag:do:",
category: '*Trapped-Frontend',
fn: function (path,aSymbol,aBlock){
var self=this;
var start,end;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
self._with_((function(html){
return smalltalk.withContext(function($ctx2) {
start=_st(html)._script();
$ctx2.sendIdx["script"]=1;
start;
end=_st(html)._script();
return end;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
_st(start)._trap_read_(path,(function(model){
return smalltalk.withContext(function($ctx2) {
return _st($Trapped())._loop_between_and_tag_do_(model,start,end,aSymbol,aBlock);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:tag:do:",{path:path,aSymbol:aSymbol,aBlock:aBlock,start:start,end:end},smalltalk.HTMLCanvas)})},
args: ["path", "aSymbol", "aBlock"],
source: "trapIter: path tag: aSymbol do: aBlock\x0a\x09| start end |\x0a    self with: [ :html | start := html script. end := html script ].\x0a    start trap: path read: [ :model |\x0a    \x09Trapped loop: model between: start and: end tag: aSymbol do: aBlock.\x0a    ]",
messageSends: ["with:", "script", "trap:read:", "loop:between:and:tag:do:"],
referencedClasses: ["Trapped"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:",
category: '*Trapped-Frontend',
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._trap_processors_(path,["contents"]);
return self}, function($ctx1) {$ctx1.fill(self,"trap:",{path:path},smalltalk.TagBrush)})},
args: ["path"],
source: "trap: path\x0a\x09self trap: path processors: #(contents)",
messageSends: ["trap:processors:"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:processors:",
category: '*Trapped-Frontend',
fn: function (path,anArray){
var self=this;
function $TrappedDataChain(){return smalltalk.TrappedDataChain||(typeof TrappedDataChain=="undefined"?nil:TrappedDataChain)}
return smalltalk.withContext(function($ctx1) { 
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return _st(_st($TrappedDataChain())._newFromProcessorSpecs_(anArray))._forSnapshot_andBrush_(snap,self);
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:processors:",{path:path,anArray:anArray},smalltalk.TagBrush)})},
args: ["path", "anArray"],
source: "trap: path processors: anArray\x0a\x09path trapDescend: [ :snap |\x0a\x09\x09(TrappedDataChain newFromProcessorSpecs: anArray)\x0a\x09\x09\x09forSnapshot: snap andBrush: self ]",
messageSends: ["trapDescend:", "forSnapshot:andBrush:", "newFromProcessorSpecs:"],
referencedClasses: ["TrappedDataChain"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:read:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
function $KeyedPubSubUnsubscribe(){return smalltalk.KeyedPubSubUnsubscribe||(typeof KeyedPubSubUnsubscribe=="undefined"?nil:KeyedPubSubUnsubscribe)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return _st(snap)._watch_((function(data){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(_st(self._asJQuery())._closest_("html"))._toArray())._isEmpty();
if(smalltalk.assert($1)){
_st($KeyedPubSubUnsubscribe())._signal();
};
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
return self._with_((function(html){
return smalltalk.withContext(function($ctx5) {
return _st(aBlock)._value_value_(data,html);
}, function($ctx5) {$ctx5.fillBlock({html:html},$ctx4,5)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({data:data},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:read:",{path:path,aBlock:aBlock},smalltalk.TagBrush)})},
args: ["path", "aBlock"],
source: "trap: path read: aBlock\x0a\x09path trapDescend: [ :snap |\x0a        snap watch: [ :data |\x0a            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].\x0a        \x09snap do: [ self with: [ :html | aBlock value: data value: html ] ]\x0a    \x09]\x0a    ]",
messageSends: ["trapDescend:", "watch:", "ifTrue:", "isEmpty", "toArray", "closest:", "asJQuery", "signal", "do:", "with:", "value:value:"],
referencedClasses: ["KeyedPubSubUnsubscribe"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trapGuard:contents:",
category: '*Trapped-Frontend',
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
[]._trapDescend_((function(snap){
var shown;
return smalltalk.withContext(function($ctx2) {
shown=nil;
shown;
return self._trap_read_(anArray,(function(gdata){
var sanitized;
return smalltalk.withContext(function($ctx3) {
if(($receiver = gdata) == nil || $receiver == null){
sanitized=false;
} else {
sanitized=gdata;
};
sanitized;
$1=_st(shown).__eq(sanitized);
if(! smalltalk.assert($1)){
shown=sanitized;
shown;
$2=shown;
if(smalltalk.assert($2)){
_st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
return self._contents_(aBlock);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
$3=self._asJQuery();
$ctx3.sendIdx["asJQuery"]=1;
return _st($3)._show();
} else {
$4=self._asJQuery();
_st($4)._hide();
$5=_st($4)._empty();
return $5;
};
};
}, function($ctx3) {$ctx3.fillBlock({gdata:gdata,sanitized:sanitized},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap,shown:shown},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapGuard:contents:",{anArray:anArray,aBlock:aBlock},smalltalk.TagBrush)})},
args: ["anArray", "aBlock"],
source: "trapGuard: anArray contents: aBlock\x0a\x09#() trapDescend: [ :snap |\x0a\x09    | shown |\x0a    \x09shown := nil.\x0a\x09    self trap: anArray read: [ :gdata |\x0a\x09\x09\x09| sanitized |\x0a\x09\x09\x09sanitized := gdata ifNil: [ false ].\x0a    \x09    shown = sanitized ifFalse: [\x0a        \x09    shown := sanitized.\x0a            \x09shown\x0a\x09\x09\x09\x09\x09ifTrue: [ snap do: [ self contents: aBlock ]. self asJQuery show ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self asJQuery hide; empty ] ] ] ]",
messageSends: ["trapDescend:", "trap:read:", "ifNil:", "ifFalse:", "=", "ifTrue:ifFalse:", "do:", "contents:", "show", "asJQuery", "hide", "empty"],
referencedClasses: []
}),
smalltalk.TagBrush);

});
