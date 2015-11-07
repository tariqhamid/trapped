define("trapped/Trapped-Frontend", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects", "amber_core/Kernel-Collections", "amber/web/Web"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Trapped-Frontend');
$core.packages["Trapped-Frontend"].innerEval = function (expr) { return eval(expr); };
$core.packages["Trapped-Frontend"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web"];
$core.packages["Trapped-Frontend"].transport = {"type":"amd","amdNamespace":"trapped"};

$core.addClass('TrappedDataCarrier', $globals.Object, ['target', 'model', 'chain'], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "chain:",
protocol: 'accessing',
fn: function (aProcessingChain){
var self=this;
self["@chain"]=aProcessingChain;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProcessingChain"],
source: "chain: aProcessingChain\x0a\x09chain := aProcessingChain",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "falseAsNilValue",
protocol: 'converting',
fn: function (){
var self=this;
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
value=self._value();
$1=$recv(value).__eq(false);
if($core.assert($1)){
return nil;
} else {
$2=value;
return $2;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"falseAsNilValue",{value:value},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "falseAsNilValue\x0a\x09| value |\x0a\x09value := self value.\x0a\x09value = false ifTrue: [ ^nil ] ifFalse: [ ^value ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "ifTrue:ifFalse:", "="]
}),
$globals.TrappedDataCarrier);

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
$globals.TrappedDataCarrier.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@model"]=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09model := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "target",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@target"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "target\x0a\x09^target",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "target:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@target"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "target: anObject\x0a\x09target := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@model"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "value: anObject\x0a\x09model := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedDataCarrier);

$core.addMethod(
$core.method({
selector: "value:whenDifferentFrom:",
protocol: 'accessing',
fn: function (anObject,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject).__eq(anotherObject);
if(!$core.assert($1)){
self._value_(anObject);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:whenDifferentFrom:",{anObject:anObject,anotherObject:anotherObject},$globals.TrappedDataCarrier)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "anotherObject"],
source: "value: anObject whenDifferentFrom: anotherObject\x0a\x09anObject = anotherObject ifFalse: [ self value: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "value:"]
}),
$globals.TrappedDataCarrier);


$core.addMethod(
$core.method({
selector: "on:target:",
protocol: 'not yet classified',
fn: function (aProcessingChain,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._chain_(aProcessingChain);
$recv($2)._target_(anObject);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:target:",{aProcessingChain:aProcessingChain,anObject:anObject},$globals.TrappedDataCarrier.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProcessingChain", "anObject"],
source: "on: aProcessingChain target: anObject\x0a\x09^self new\x0a\x09\x09chain: aProcessingChain;\x0a\x09\x09target: anObject;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["chain:", "new", "target:", "yourself"]
}),
$globals.TrappedDataCarrier.klass);


$core.addClass('TrappedDataCarrierToModel', $globals.TrappedDataCarrier, ['index'], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "proceed",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@index"];
if(($receiver = $1) == null || $receiver.isNil){
self["@index"]=$recv(self["@chain"])._lastProcessorNo();
} else {
self["@index"]=$recv(self["@index"]).__minus((1));
};
$recv($recv(self["@chain"])._processorNo_(self["@index"]))._toModel_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{},$globals.TrappedDataCarrierToModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09index := index ifNil: [ chain lastProcessorNo ] ifNotNil: [ index - 1 ].\x0a\x09(chain processorNo: index) toModel: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "lastProcessorNo", "-", "toModel:", "processorNo:"]
}),
$globals.TrappedDataCarrierToModel);



$core.addClass('TrappedDataCarrierToView', $globals.TrappedDataCarrier, ['index'], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "proceed",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@index"];
if(($receiver = $1) == null || $receiver.isNil){
self["@index"]=$recv(self["@chain"])._firstProcessorNo();
} else {
self["@index"]=$recv(self["@index"]).__plus((1));
};
$recv($recv(self["@chain"])._processorNo_(self["@index"]))._toView_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{},$globals.TrappedDataCarrierToView)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09index := index ifNil: [ chain firstProcessorNo ] ifNotNil: [ index + 1 ].\x0a\x09(chain processorNo: index) toView: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:ifNotNil:", "firstProcessorNo", "+", "toView:", "processorNo:"]
}),
$globals.TrappedDataCarrierToView);



$core.addClass('TrappedProcessingChain', $globals.Object, ['processors'], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "firstProcessorNo",
protocol: 'accessing',
fn: function (){
var self=this;
return (1);

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "firstProcessorNo\x0a\x09^1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessingChain);

$core.addMethod(
$core.method({
selector: "forSnapshot:andBrush:",
protocol: 'action',
fn: function (aSnapshot,aTagBrush){
var self=this;
var toViewCarrier,toModelCarrier;
function $TrappedDataCarrierToView(){return $globals.TrappedDataCarrierToView||(typeof TrappedDataCarrierToView=="undefined"?nil:TrappedDataCarrierToView)}
function $TrappedDataCarrierToModel(){return $globals.TrappedDataCarrierToModel||(typeof TrappedDataCarrierToModel=="undefined"?nil:TrappedDataCarrierToModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
toViewCarrier=$recv($TrappedDataCarrierToView())._on_target_(self,aTagBrush);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["on:target:"]=1;
//>>excludeEnd("ctx");
toModelCarrier=$recv($TrappedDataCarrierToModel())._on_target_(self,aSnapshot);
$recv(self["@processors"])._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._installToView_toModel_(toViewCarrier,toModelCarrier);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv($recv(toViewCarrier)._value()).__eq(true);
if($core.assert($1)){
$recv($recv(toViewCarrier)._copy())._proceed();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forSnapshot:andBrush:",{aSnapshot:aSnapshot,aTagBrush:aTagBrush,toViewCarrier:toViewCarrier,toModelCarrier:toModelCarrier},$globals.TrappedProcessingChain)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSnapshot", "aTagBrush"],
source: "forSnapshot: aSnapshot andBrush: aTagBrush\x0a\x09| toViewCarrier toModelCarrier |\x0a\x09toViewCarrier := TrappedDataCarrierToView on: self target: aTagBrush.\x0a\x09toModelCarrier := TrappedDataCarrierToModel on: self target: aSnapshot.\x0a\x09processors do: [ :each | each installToView: toViewCarrier toModel: toModelCarrier ].\x0a\x09toViewCarrier value = true ifTrue: [ toViewCarrier copy proceed ]",
referencedClasses: ["TrappedDataCarrierToView", "TrappedDataCarrierToModel"],
//>>excludeEnd("ide");
messageSends: ["on:target:", "do:", "installToView:toModel:", "ifTrue:", "=", "value", "proceed", "copy"]
}),
$globals.TrappedProcessingChain);

$core.addMethod(
$core.method({
selector: "lastProcessorNo",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processors"])._size();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lastProcessorNo",{},$globals.TrappedProcessingChain)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lastProcessorNo\x0a\x09^processors size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size"]
}),
$globals.TrappedProcessingChain);

$core.addMethod(
$core.method({
selector: "processorNo:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processors"])._at_(aNumber);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"processorNo:",{aNumber:aNumber},$globals.TrappedProcessingChain)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNumber"],
source: "processorNo: aNumber\x0a\x09^processors at: aNumber",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.TrappedProcessingChain);

$core.addMethod(
$core.method({
selector: "processors:",
protocol: 'accessing',
fn: function (anArray){
var self=this;
self["@processors"]=anArray;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "processors: anArray\x0a\x09processors := anArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessingChain);


$core.addMethod(
$core.method({
selector: "blackboardReaderWriter",
protocol: 'private',
fn: function (){
var self=this;
function $TrappedProcessorBlackboard(){return $globals.TrappedProcessorBlackboard||(typeof TrappedProcessorBlackboard=="undefined"?nil:TrappedProcessorBlackboard)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorBlackboard())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blackboardReaderWriter",{},$globals.TrappedProcessingChain.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blackboardReaderWriter\x0a\x09^TrappedProcessorBlackboard new",
referencedClasses: ["TrappedProcessorBlackboard"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessingChain.klass);

$core.addMethod(
$core.method({
selector: "dataTerminator",
protocol: 'private',
fn: function (){
var self=this;
function $TrappedProcessorTerminator(){return $globals.TrappedProcessorTerminator||(typeof TrappedProcessorTerminator=="undefined"?nil:TrappedProcessorTerminator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorTerminator())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dataTerminator",{},$globals.TrappedProcessingChain.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "dataTerminator\x0a\x09^TrappedProcessorTerminator new",
referencedClasses: ["TrappedProcessorTerminator"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessingChain.klass);

$core.addMethod(
$core.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(anArray)._anySatisfy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._isExpectingModelData();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$recv(anArray)._addFirst_(self._blackboardReaderWriter());
} else {
$recv(anArray)._add_(self._dataTerminator());
};
$3=self._new();
$recv($3)._processors_(anArray);
$4=$recv($3)._yourself();
$2=$4;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new:",{anArray:anArray},$globals.TrappedProcessingChain.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "new: anArray\x0a\x09(anArray anySatisfy: [ :each | each isExpectingModelData ])\x0a\x09\x09ifFalse: [ anArray add: self dataTerminator ]\x0a\x09\x09ifTrue: [ anArray addFirst: self blackboardReaderWriter ].\x0a\x09^self new\x0a\x09\x09processors: anArray;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "anySatisfy:", "isExpectingModelData", "add:", "dataTerminator", "addFirst:", "blackboardReaderWriter", "processors:", "new", "yourself"]
}),
$globals.TrappedProcessingChain.klass);

$core.addMethod(
$core.method({
selector: "newFromProcessorSpecs:",
protocol: 'instance creation',
fn: function (anArray){
var self=this;
function $TrappedProcessor(){return $globals.TrappedProcessor||(typeof TrappedProcessor=="undefined"?nil:TrappedProcessor)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new_($recv($recv(anArray)._ifEmpty_((function(){
return ["contents"];

})))._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(each)._asTrapProcSendTo_($TrappedProcessor());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
})));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFromProcessorSpecs:",{anArray:anArray},$globals.TrappedProcessingChain.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray"],
source: "newFromProcessorSpecs: anArray\x0a\x09^self new: ((anArray ifEmpty: [ #(contents) ]) collect: [ :each | each asTrapProcSendTo: TrappedProcessor ])",
referencedClasses: ["TrappedProcessor"],
//>>excludeEnd("ide");
messageSends: ["new:", "collect:", "ifEmpty:", "asTrapProcSendTo:"]
}),
$globals.TrappedProcessingChain.klass);


$core.addClass('TrappedProcessor', $globals.Object, [], 'Trapped-Frontend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessor.comment="I am a processing step in TrappedProcessingChain.\x0aI am stateless flyweight (aka servant)\x0aand will get all necessary data as arguments in API calls.\x0a\x0aMy public API is:\x0a - installToView:toModel:\x0a   This gets two TrappedDataCarriers set up without actual data\x0a   and at the beginning of their chains. It should do one-time\x0a   installation task needed (install event handlers etc.).\x0a   To start a chain, do: dataCarrier copy value: data; proceed.\x0a - toView:\x0a   This performs transformation of TrappedDataCarrier on its way from model to view.\x0a   Should call aDataCarrier proceed to proceed to subsequent step.\x0a - toModel:\x0a   This performs transformation of TrappedDataCarrier on its way from view to model.\x0a   Should call aDataCarrier proceed to proceed to subsequent step.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "installToView:toModel:",
protocol: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09\x22by default, do nothing\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessor);

$core.addMethod(
$core.method({
selector: "isExpectingModelData",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isExpectingModelData\x0a\x09^false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedProcessor);

$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09\x22by default, proceed\x22\x0a\x09aDataCarrier proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed"]
}),
$globals.TrappedProcessor);

$core.addMethod(
$core.method({
selector: "toView:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._proceed();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09\x22by default, proceed\x22\x0a\x09aDataCarrier proceed",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proceed"]
}),
$globals.TrappedProcessor);


$core.addMethod(
$core.method({
selector: "contents",
protocol: 'factory',
fn: function (){
var self=this;
function $TrappedProcessorContents(){return $globals.TrappedProcessorContents||(typeof TrappedProcessorContents=="undefined"?nil:TrappedProcessorContents)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TrappedProcessorContents())._new();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"contents",{},$globals.TrappedProcessor.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "contents\x0a\x09^TrappedProcessorContents new",
referencedClasses: ["TrappedProcessorContents"],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.TrappedProcessor.klass);


$core.addClass('TrappedDataExpectingProcessor', $globals.TrappedProcessor, [], 'Trapped-Frontend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedDataExpectingProcessor.comment="I answer true to isExpectingModelData and serve as a base class\x0afor processor that present / change model data.\x0a\x0aWhen at least one of my instances is present in the chain,\x0aautomatic databinding processor is added at the beginning\x0a(the data-binding scenario); otherwise, the chain\x0ais run immediately with true as data (run-once scenario).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isExpectingModelData",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isExpectingModelData\x0a\x09^true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedDataExpectingProcessor);



$core.addClass('TrappedProcessorContents', $globals.TrappedDataExpectingProcessor, [], 'Trapped-Frontend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorContents.comment="I put data into target via contents: in toView:";
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
$recv(aDataCarrier)._toTargetContents();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toView:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorContents)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toView: aDataCarrier\x0a\x09aDataCarrier toTargetContents",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["toTargetContents"]
}),
$globals.TrappedProcessorContents);



$core.addClass('TrappedProcessorBlackboard', $globals.TrappedProcessor, [], 'Trapped-Frontend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorBlackboard.comment="I am used internally to fetch data from blackboard\x0aor write it back.\x0a\x0aI am added to the beginning of the chain\x0awhen the chain contains at least one element\x0athat isExpectingModelData (see TrappedDataExpectingProcessor).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "installToView:toModel:",
protocol: 'installation',
fn: function (aDataCarrier,anotherDataCarrier){
var self=this;
var snap;
function $AxonOff(){return $globals.AxonOff||(typeof AxonOff=="undefined"?nil:AxonOff)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
snap=$recv(anotherDataCarrier)._target();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["target"]=1;
//>>excludeEnd("ctx");
$recv(snap)._watch_((function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv($recv($recv($recv($recv(aDataCarrier)._target())._asJQuery())._closest_("html"))._toArray())._isEmpty();
if($core.assert($1)){
$recv($AxonOff())._signal();
};
return $recv(snap)._do_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(aDataCarrier)._copy();
$recv($2)._value_(data);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$3=$recv($2)._proceed();
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aDataCarrier)._value_(false);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"installToView:toModel:",{aDataCarrier:aDataCarrier,anotherDataCarrier:anotherDataCarrier,snap:snap},$globals.TrappedProcessorBlackboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier", "anotherDataCarrier"],
source: "installToView: aDataCarrier toModel: anotherDataCarrier\x0a\x09| snap |\x0a\x09snap := anotherDataCarrier target.\x0a\x09snap watch: [ :data |\x0a\x09\x09(aDataCarrier target asJQuery closest: 'html') toArray isEmpty ifTrue: [ AxonOff signal ].\x0a        snap do: [ aDataCarrier copy value: data; proceed ] ].\x0a\x09aDataCarrier value: false",
referencedClasses: ["AxonOff"],
//>>excludeEnd("ide");
messageSends: ["target", "watch:", "ifTrue:", "isEmpty", "toArray", "closest:", "asJQuery", "signal", "do:", "value:", "copy", "proceed"]
}),
$globals.TrappedProcessorBlackboard);

$core.addMethod(
$core.method({
selector: "toModel:",
protocol: 'data transformation',
fn: function (aDataCarrier){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aDataCarrier)._modifyTarget();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"toModel:",{aDataCarrier:aDataCarrier},$globals.TrappedProcessorBlackboard)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDataCarrier"],
source: "toModel: aDataCarrier\x0a\x09aDataCarrier modifyTarget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modifyTarget"]
}),
$globals.TrappedProcessorBlackboard);



$core.addClass('TrappedProcessorTerminator', $globals.TrappedProcessor, [], 'Trapped-Frontend');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TrappedProcessorTerminator.comment="I do not proceed in toView:.\x0a\x0aI am added automatically to end of chain when it does not contain\x0aany element that isExpectingModelData (see TrappedDataExpectingProcessor).";
//>>excludeEnd("ide");
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
$globals.TrappedProcessorTerminator);



$core.addClass('TrappedSingleton', $globals.Object, [], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "start:",
protocol: 'action',
fn: function (args){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._subclassResponsibility();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},$globals.TrappedSingleton)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "start: args\x0a\x09^ self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.TrappedSingleton);


$globals.TrappedSingleton.klass.iVarNames = ['current'];
$core.addMethod(
$core.method({
selector: "current",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$receiver;
$2=self["@current"];
if(($receiver = $2) == null || $receiver.isNil){
self["@current"]=self._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"current",{},$globals.TrappedSingleton.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.TrappedSingleton.klass);

$core.addMethod(
$core.method({
selector: "start:",
protocol: 'action',
fn: function (args){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._current())._start_(args);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},$globals.TrappedSingleton.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "start: args\x0a\x09self current start: args",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["start:", "current"]
}),
$globals.TrappedSingleton.klass);


$core.addClass('Trapped', $globals.TrappedSingleton, ['registry'], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "byName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@registry"])._at_(aString);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"byName:",{aString:aString},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "byName: aString\x0a\x09^ registry at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.Trapped);

$core.addMethod(
$core.method({
selector: "cloneAndInject:",
protocol: 'private',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=$recv($recv(anObject)._asJQuery())._clone();
$recv($2)._each_((function(i,each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._injectToElement_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i,each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$3=$recv($2)._get_((0));
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cloneAndInject:",{anObject:anObject},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "cloneAndInject: anObject\x0a\x09^anObject asJQuery clone\x0a\x09\x09each: [ :i :each | self injectToElement: each ];\x0a\x09\x09get: 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["each:", "clone", "asJQuery", "injectToElement:", "get:"]
}),
$globals.Trapped);

$core.addMethod(
$core.method({
selector: "descend:snapshotDo:",
protocol: 'private',
fn: function (anArray,aBlock){
var self=this;
var tpsc;
function $TrappedPathStack(){return $globals.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
function $TrappedSnapshot(){return $globals.TrappedSnapshot||(typeof TrappedSnapshot=="undefined"?nil:TrappedSnapshot)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tpsc=$recv($TrappedPathStack())._current();
$recv(tpsc)._append_do_(anArray,(function(){
var path,model;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
path=$recv($recv(tpsc)._elements())._copy();
path;
model=self._byName_($recv(path)._first());
model;
return $recv(aBlock)._value_($recv($recv($TrappedSnapshot())._new())._path_model_(path,model));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({path:path,model:model},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"descend:snapshotDo:",{anArray:anArray,aBlock:aBlock,tpsc:tpsc},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray", "aBlock"],
source: "descend: anArray snapshotDo: aBlock\x0a\x09| tpsc |\x0a    tpsc := TrappedPathStack current.\x0a    tpsc append: anArray do: [\x0a        | path model |\x0a        path := tpsc elements copy.\x0a   \x09    model := self byName: path first.\x0a        aBlock value: (TrappedSnapshot new path: path model: model)\x0a    ]",
referencedClasses: ["TrappedPathStack", "TrappedSnapshot"],
//>>excludeEnd("ide");
messageSends: ["current", "append:do:", "copy", "elements", "byName:", "first", "value:", "path:model:", "new"]
}),
$globals.Trapped);

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
$globals.Trapped.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@registry"]=$globals.HashedCollection._newFromPairs_([]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.Trapped);

$core.addMethod(
$core.method({
selector: "injectToChildren:",
protocol: 'private',
fn: function (anElement){
var self=this;
var child;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
child=$recv(anElement)._firstChild();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(child)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._injectToElement_(child);
child=$recv(child)._nextSibling();
return child;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"injectToChildren:",{anElement:anElement,child:child},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "injectToChildren: anElement\x0a\x09| child |\x0a\x09child := anElement firstChild.\x0a\x09[ child isNil ] whileFalse: [ self injectToElement: child. child := child nextSibling ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["firstChild", "whileFalse:", "isNil", "injectToElement:", "nextSibling"]
}),
$globals.Trapped);

$core.addMethod(
$core.method({
selector: "injectToElement:",
protocol: 'private',
fn: function (anElement){
var self=this;
var jq;
function $Trapped(){return $globals.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
jq=$recv(anElement)._asJQuery();
$1=$recv(jq)._attr_("data-trap");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var attr;
attr=$receiver;
$recv(jq)._removeAttr_("data-trap");
$recv($recv($Trapped())._parse_(attr))._do_((function(rule){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv($HTMLCanvas())._onJQuery_(jq))._root())._trap_processors_($recv(rule)._first(),$recv(rule)._at_ifAbsent_((2),(function(){
return [];

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({rule:rule},$ctx1,2)});
//>>excludeEnd("ctx");
}));
};
self._injectToChildren_(anElement);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"injectToElement:",{anElement:anElement,jq:jq},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anElement"],
source: "injectToElement: anElement\x0a\x09| jq |\x0a\x09jq := anElement asJQuery.\x0a\x09(jq attr: 'data-trap') ifNotNil: [ :attr |\x0a\x09\x09jq removeAttr: 'data-trap'.\x0a\x09\x09(Trapped parse: attr) do: [ :rule |\x0a\x09\x09\x09(HTMLCanvas onJQuery: jq) root trap: rule first processors: (rule at: 2 ifAbsent: [#()]) ] ].\x0a\x09self injectToChildren: anElement",
referencedClasses: ["Trapped", "HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "ifNotNil:", "attr:", "removeAttr:", "do:", "parse:", "trap:processors:", "root", "onJQuery:", "first", "at:ifAbsent:", "injectToChildren:"]
}),
$globals.Trapped);

$core.addMethod(
$core.method({
selector: "register:",
protocol: 'accessing',
fn: function (aListKeyedEntity){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._register_name_(aListKeyedEntity,$recv($recv(aListKeyedEntity)._class())._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:",{aListKeyedEntity:aListKeyedEntity},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aListKeyedEntity"],
source: "register: aListKeyedEntity\x0a\x09self register: aListKeyedEntity name: aListKeyedEntity class name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["register:name:", "name", "class"]
}),
$globals.Trapped);

$core.addMethod(
$core.method({
selector: "register:name:",
protocol: 'accessing',
fn: function (aListKeyedEntity,aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@registry"])._at_put_(aString,aListKeyedEntity);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"register:name:",{aListKeyedEntity:aListKeyedEntity,aString:aString},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aListKeyedEntity", "aString"],
source: "register: aListKeyedEntity name: aString\x0a\x09registry at: aString put: aListKeyedEntity",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:"]
}),
$globals.Trapped);

$core.addMethod(
$core.method({
selector: "start:",
protocol: 'action',
fn: function (args){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(args)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._register_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._injectToElement_(document);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},$globals.Trapped)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["args"],
source: "start: args\x0a\x09args do: [ :each | self register: each ].\x0a\x09self injectToElement: document",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "register:", "injectToElement:"]
}),
$globals.Trapped);


$core.addMethod(
$core.method({
selector: "loop:before:do:",
protocol: 'private',
fn: function (aSequenceableCollection,aNode,aBlock){
var self=this;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
function $Array(){return $globals.Array||(typeof Array=="undefined"?nil:Array)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aSequenceableCollection)._withIndexDo_((function(item,i){
var env;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
env=$recv(document)._createElement_("ins");
env;
$recv([i])._trapDescend_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv($HTMLCanvas())._onJQuery_($recv(env)._asJQuery()))._root())._with_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
return $recv($recv($Array())._streamContents_((function(str){
var child;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
child=$recv(env)._firstChild();
child;
return $recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(child)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$recv(str)._nextPut_(child);
child=$recv(child)._nextSibling();
return child;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({str:str,child:child},$ctx2,3)});
//>>excludeEnd("ctx");
})))._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(aNode)._parentNode())._insertBefore_reference_(each,aNode);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({item:item,i:i,env:env},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loop:before:do:",{aSequenceableCollection:aSequenceableCollection,aNode:aNode,aBlock:aBlock},$globals.Trapped.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSequenceableCollection", "aNode", "aBlock"],
source: "loop: aSequenceableCollection before: aNode do: aBlock\x0a\x09aSequenceableCollection withIndexDo: [ :item :i |\x0a\x09\x09| env |\x0a\x09\x09\x22env := document createDocumentFragment.\x22\x0a\x09\x09env := document createElement: 'ins'.\x0a\x09\x09{i} trapDescend: [ (HTMLCanvas onJQuery: env asJQuery) root with: aBlock ].\x0a\x09\x09\x22aNode parentNode insertBefore: env reference: aNode\x22\x0a\x09\x09(Array streamContents: [ :str |\x0a\x09\x09\x09| child |\x0a\x09\x09\x09child := env firstChild.\x0a\x09\x09\x09[ child isNil ] whileFalse: [\x0a\x09\x09\x09\x09str nextPut: child.\x0a\x09\x09\x09\x09child := child nextSibling ]])\x0a\x09\x09do: [ :each | aNode parentNode insertBefore: each reference: aNode ]\x0a\x09]",
referencedClasses: ["HTMLCanvas", "Array"],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "createElement:", "trapDescend:", "with:", "root", "onJQuery:", "asJQuery", "do:", "streamContents:", "firstChild", "whileFalse:", "isNil", "nextPut:", "nextSibling", "insertBefore:reference:", "parentNode"]
}),
$globals.Trapped.klass);

$core.addMethod(
$core.method({
selector: "loop:between:and:do:",
protocol: 'private',
fn: function (aSequenceableCollection,aTagBrush,anotherTagBrush,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1,$receiver;
$2=$recv(aTagBrush)._asJQuery();
$3=$recv(anotherTagBrush)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._nextUntil_($3);
$recv($1)._remove();
if(($receiver = aSequenceableCollection) == null || $receiver.isNil){
aSequenceableCollection;
} else {
self._loop_before_do_(aSequenceableCollection,$recv(anotherTagBrush)._element(),aBlock);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loop:between:and:do:",{aSequenceableCollection:aSequenceableCollection,aTagBrush:aTagBrush,anotherTagBrush:anotherTagBrush,aBlock:aBlock},$globals.Trapped.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSequenceableCollection", "aTagBrush", "anotherTagBrush", "aBlock"],
source: "loop: aSequenceableCollection between: aTagBrush and: anotherTagBrush do: aBlock\x0a\x09(aTagBrush asJQuery nextUntil: anotherTagBrush element) remove.\x0a\x09aSequenceableCollection ifNotNil: [\x0a\x09\x09self loop: aSequenceableCollection before: anotherTagBrush element do: aBlock\x0a\x09]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove", "nextUntil:", "asJQuery", "element", "ifNotNil:", "loop:before:do:"]
}),
$globals.Trapped.klass);

$core.addMethod(
$core.method({
selector: "parse:",
protocol: 'parsing',
fn: function (aString){
var self=this;
function $Lyst(){return $globals.Lyst||(typeof Lyst=="undefined"?nil:Lyst)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aString)._tokenize_(".");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tokenize:"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._collect_((function(rule){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(rule)._tokenize_(":"))._collect_((function(message){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($Lyst())._parse_(message);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({message:message},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({rule:rule},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["collect:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{aString:aString},$globals.Trapped.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "parse: aString\x0a\x09^ (aString tokenize: '.') collect: [ :rule |\x0a\x09\x09(rule tokenize: ':') collect: [ :message |\x0a\x09\x09\x09Lyst parse: message ] ]",
referencedClasses: ["Lyst"],
//>>excludeEnd("ide");
messageSends: ["collect:", "tokenize:", "parse:"]
}),
$globals.Trapped.klass);


$core.addClass('TrappedPathStack', $globals.TrappedSingleton, ['elements'], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "append:do:",
protocol: 'descending',
fn: function (anArray,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._with_do_($recv(self["@elements"]).__comma(anArray),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"append:do:",{anArray:anArray,aBlock:aBlock},$globals.TrappedPathStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray", "aBlock"],
source: "append: anArray do: aBlock\x0a    self with: elements, anArray do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:do:", ","]
}),
$globals.TrappedPathStack);

$core.addMethod(
$core.method({
selector: "elements",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@elements"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "elements\x0a\x09^elements",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedPathStack);

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
$globals.TrappedPathStack.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@elements"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TrappedPathStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a    super initialize.\x0a\x09elements := #().",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TrappedPathStack);

$core.addMethod(
$core.method({
selector: "with:do:",
protocol: 'descending',
fn: function (anArray,aBlock){
var self=this;
var old;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
old=self["@elements"];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self["@elements"]=anArray;
self["@elements"];
return $recv(aBlock)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._ensure_((function(){
self["@elements"]=old;
return self["@elements"];

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"with:do:",{anArray:anArray,aBlock:aBlock,old:old},$globals.TrappedPathStack)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray", "aBlock"],
source: "with: anArray do: aBlock\x0a\x09| old |\x0a    old := elements.\x0a    [ elements := anArray.\x0a\x09aBlock value ] ensure: [ elements := old ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ensure:", "value"]
}),
$globals.TrappedPathStack);



$core.addClass('TrappedSnapshot', $globals.Object, ['path', 'model'], 'Trapped-Frontend');
$core.addMethod(
$core.method({
selector: "do:",
protocol: 'action',
fn: function (aBlock){
var self=this;
function $TrappedPathStack(){return $globals.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($TrappedPathStack())._current())._with_do_(self["@path"],(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_(self["@model"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},$globals.TrappedSnapshot)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "do: aBlock\x0a\x09TrappedPathStack current with: path do: [ aBlock value: model ]",
referencedClasses: ["TrappedPathStack"],
//>>excludeEnd("ide");
messageSends: ["with:do:", "current", "value:"]
}),
$globals.TrappedSnapshot);

$core.addMethod(
$core.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "model\x0a\x09^model",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedSnapshot);

$core.addMethod(
$core.method({
selector: "modify:",
protocol: 'action',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._model())._modify_do_($recv(self._path())._allButFirst(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modify:",{aBlock:aBlock},$globals.TrappedSnapshot)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "modify: aBlock\x0a\x09self model modify: self path allButFirst do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modify:do:", "model", "allButFirst", "path"]
}),
$globals.TrappedSnapshot);

$core.addMethod(
$core.method({
selector: "path",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@path"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "path\x0a\x09^path",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedSnapshot);

$core.addMethod(
$core.method({
selector: "path:model:",
protocol: 'accessing',
fn: function (anArray,aTrappedMW){
var self=this;
self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray", "aTrappedMW"],
source: "path: anArray model: aTrappedMW\x0a\x09path := anArray.\x0a    model := aTrappedMW",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TrappedSnapshot);

$core.addMethod(
$core.method({
selector: "read:",
protocol: 'action',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._model())._read_do_($recv(self._path())._allButFirst(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:",{aBlock:aBlock},$globals.TrappedSnapshot)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "read: aBlock\x0a\x09self model read: self path allButFirst do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["read:do:", "model", "allButFirst", "path"]
}),
$globals.TrappedSnapshot);

$core.addMethod(
$core.method({
selector: "watch:",
protocol: 'action',
fn: function (aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._model())._watch_do_($recv(self._path())._allButFirst(),aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watch:",{aBlock:aBlock},$globals.TrappedSnapshot)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "watch: aBlock\x0a\x09self model watch: self path allButFirst do: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["watch:do:", "model", "allButFirst", "path"]
}),
$globals.TrappedSnapshot);


$core.addMethod(
$core.method({
selector: "asTrapProcSendTo:",
protocol: '*Trapped-Frontend',
fn: function (anObject){
var self=this;
var selector,args;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
selector="";
args=[];
self._withIndexDo_((function(element,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(index)._odd();
if($core.assert($1)){
selector=$recv(selector).__comma(element);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return selector;
} else {
selector=$recv(selector).__comma(":");
selector;
return $recv(args)._add_(element);
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({element:element,index:index},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv(anObject)._perform_withArguments_(selector,args);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapProcSendTo:",{anObject:anObject,selector:selector,args:args},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asTrapProcSendTo: anObject\x0a\x09| selector args |\x0a\x09selector := ''.\x0a\x09args := #().\x0a\x09\x09self withIndexDo: [ :element :index | index odd\x0a\x09\x09\x09ifTrue: [ selector := selector, element ]\x0a\x09\x09\x09ifFalse: [ selector := selector, ':'. args add: element ] ].\x0a\x09^anObject perform: selector withArguments: args",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["withIndexDo:", "ifTrue:ifFalse:", "odd", ",", "add:", "perform:withArguments:"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "trapDescend:",
protocol: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
function $Trapped(){return $globals.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv($Trapped())._current())._descend_snapshotDo_(self,aBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trapDescend:",{aBlock:aBlock},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09Trapped current descend: self snapshotDo: aBlock",
referencedClasses: ["Trapped"],
//>>excludeEnd("ide");
messageSends: ["descend:snapshotDo:", "current"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "trapIter:do:",
protocol: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
self._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(html)._tag_("script");
$recv($1)._at_put_("type","application/x-beacon");
$2=$recv($1)._trapIter_after_(path,aBlock);
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trapIter:do:",{path:path,aBlock:aBlock},$globals.HTMLCanvas)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "trapIter: path do: aBlock\x0a    self with: [ :html | (html tag: 'script') at: 'type' put: 'application/x-beacon'; trapIter: path after: aBlock ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "at:put:", "tag:", "trapIter:after:"]
}),
$globals.HTMLCanvas);

$core.addMethod(
$core.method({
selector: "asTrapProcSendTo:",
protocol: '*Trapped-Frontend',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Trapped cannot use processor descriptor of ".__comma($recv(self._class())._name())).__comma(" type.");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
self._error_($1);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapProcSendTo:",{anObject:anObject},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asTrapProcSendTo: anObject\x0a\x09self error: 'Trapped cannot use processor descriptor of ', self class name, ' type.'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:", ",", "name", "class"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "asTrapProcSendTo:",
protocol: '*Trapped-Frontend',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(anObject)._perform_(self);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asTrapProcSendTo:",{anObject:anObject},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "asTrapProcSendTo: anObject\x0a\x09^anObject perform: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perform:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "trap:",
protocol: '*Trapped-Frontend',
fn: function (path){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._trap_processors_(path,[]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trap:",{path:path},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path"],
source: "trap: path\x0a\x09self trap: path processors: #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trap:processors:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "trap:processors:",
protocol: '*Trapped-Frontend',
fn: function (path,anArray){
var self=this;
function $TrappedProcessingChain(){return $globals.TrappedProcessingChain||(typeof TrappedProcessingChain=="undefined"?nil:TrappedProcessingChain)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(path)._trapDescend_((function(snap){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($TrappedProcessingChain())._newFromProcessorSpecs_(anArray))._forSnapshot_andBrush_(snap,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trap:processors:",{path:path,anArray:anArray},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "anArray"],
source: "trap: path processors: anArray\x0a\x09path trapDescend: [ :snap |\x0a\x09\x09(TrappedProcessingChain newFromProcessorSpecs: anArray)\x0a\x09\x09\x09forSnapshot: snap andBrush: self ]",
referencedClasses: ["TrappedProcessingChain"],
//>>excludeEnd("ide");
messageSends: ["trapDescend:", "forSnapshot:andBrush:", "newFromProcessorSpecs:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "trap:read:",
protocol: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
function $AxonOff(){return $globals.AxonOff||(typeof AxonOff=="undefined"?nil:AxonOff)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(path)._trapDescend_((function(snap){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(snap)._watch_((function(data){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv($recv($recv(self._asJQuery())._closest_("html"))._toArray())._isEmpty();
if($core.assert($1)){
$recv($AxonOff())._signal();
};
return $recv(snap)._do_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv(aBlock)._value_value_(data,html);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({html:html},$ctx4,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({data:data},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trap:read:",{path:path,aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "trap: path read: aBlock\x0a\x09path trapDescend: [ :snap |\x0a        snap watch: [ :data |\x0a            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ AxonOff signal ].\x0a        \x09snap do: [ self with: [ :html | aBlock value: data value: html ] ]\x0a    \x09]\x0a    ]",
referencedClasses: ["AxonOff"],
//>>excludeEnd("ide");
messageSends: ["trapDescend:", "watch:", "ifTrue:", "isEmpty", "toArray", "closest:", "asJQuery", "signal", "do:", "with:", "value:value:"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "trapGuard:contents:",
protocol: '*Trapped-Frontend',
fn: function (anArray,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$receiver;
[]._trapDescend_((function(snap){
var shown;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
shown=nil;
shown;
return self._trap_read_(anArray,(function(gdata){
var sanitized;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
if(($receiver = gdata) == null || $receiver.isNil){
sanitized=false;
} else {
sanitized=gdata;
};
sanitized;
$1=$recv(shown).__eq(sanitized);
if(!$core.assert($1)){
shown=sanitized;
shown;
$2=shown;
if($core.assert($2)){
$recv(snap)._do_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return self._contents_(aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
$3=self._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
return $recv($3)._show();
} else {
$4=self._asJQuery();
$recv($4)._hide();
$5=$recv($4)._empty();
return $5;
};
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({gdata:gdata,sanitized:sanitized},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({snap:snap,shown:shown},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trapGuard:contents:",{anArray:anArray,aBlock:aBlock},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArray", "aBlock"],
source: "trapGuard: anArray contents: aBlock\x0a\x09#() trapDescend: [ :snap |\x0a\x09    | shown |\x0a    \x09shown := nil.\x0a\x09    self trap: anArray read: [ :gdata |\x0a\x09\x09\x09| sanitized |\x0a\x09\x09\x09sanitized := gdata ifNil: [ false ].\x0a    \x09    shown = sanitized ifFalse: [\x0a        \x09    shown := sanitized.\x0a            \x09shown\x0a\x09\x09\x09\x09\x09ifTrue: [ snap do: [ self contents: aBlock ]. self asJQuery show ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self asJQuery hide; empty ] ] ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["trapDescend:", "trap:read:", "ifNil:", "ifFalse:", "=", "ifTrue:ifFalse:", "do:", "contents:", "show", "asJQuery", "hide", "empty"]
}),
$globals.TagBrush);

$core.addMethod(
$core.method({
selector: "trapIter:after:",
protocol: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
var end;
function $TagBrush(){return $globals.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
function $Trapped(){return $globals.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3;
end=$recv($TagBrush())._fromJQuery_canvas_("<script type=\x22application/x-beacon\x22 />"._asJQuery(),self["@canvas"]);
$2=self._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._parentNode();
$3=$recv(end)._element();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["element"]=2;
//>>excludeEnd("ctx");
$recv($1)._insertBefore_reference_($3,$recv(self._element())._nextSibling());
self._trap_read_(path,(function(model){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Trapped())._loop_between_and_do_(model,self,end,aBlock);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"trapIter:after:",{path:path,aBlock:aBlock,end:end},$globals.TagBrush)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["path", "aBlock"],
source: "trapIter: path after: aBlock\x0a\x09| end |\x0a\x09end := TagBrush fromJQuery: ('<script type=\x22application/x-beacon\x22 />' asJQuery) canvas: canvas.\x0a\x09self element parentNode insertBefore: end element reference: self element nextSibling.\x0a    self trap: path read: [ :model |\x0a    \x09Trapped loop: model between: self and: end do: aBlock.\x0a    ]",
referencedClasses: ["TagBrush", "Trapped"],
//>>excludeEnd("ide");
messageSends: ["fromJQuery:canvas:", "asJQuery", "insertBefore:reference:", "parentNode", "element", "nextSibling", "trap:read:", "loop:between:and:do:"]
}),
$globals.TagBrush);

});
