define("lyst/Lyst", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Kernel-Collections"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Lyst');
$core.packages["Lyst"].innerEval = function (expr) { return eval(expr); };
$core.packages["Lyst"].transport = {"type":"amd","amdNamespace":"lyst"};

$core.addClass('Lyst', $globals.Object, [], 'Lyst');

$core.addMethod(
$core.method({
selector: "parse:",
protocol: 'parsing',
fn: function (message){
var self=this;
var result,stack,anArray;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6,$7,$8,$9,$10,$11,$12;
anArray=$recv(message)._tokenize_(" ");
result=[];
stack=[result];
$recv(anArray)._do_((function(each){
var asNum,inner,close;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
close=(0);
close;
inner=each;
inner;
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(inner)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["notEmpty"]=1;
//>>excludeEnd("ctx");
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$2=$recv(inner)._first();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["first"]=1;
//>>excludeEnd("ctx");
return $recv($2).__eq("(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
inner=$recv(inner)._allButFirst();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["allButFirst"]=1;
//>>excludeEnd("ctx");
inner;
$3=stack;
$5=$recv(stack)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["last"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._add_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
return $recv($3)._add_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["whileTrue:"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(inner)._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["notEmpty"]=2;
//>>excludeEnd("ctx");
return $recv($6)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(inner)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["last"]=2;
//>>excludeEnd("ctx");
return $recv($7).__eq(")");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["="]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["and:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}))._whileTrue_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
inner=$recv(inner)._allButLast();
inner;
close=$recv(close).__plus((1));
return close;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)});
//>>excludeEnd("ctx");
}));
$8=$recv($recv(inner)._notEmpty())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(inner)._first()).__eq("#");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["="]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,8)});
//>>excludeEnd("ctx");
}));
if($core.assert($8)){
inner=[$recv(inner)._allButFirst()];
inner;
};
$9=$recv(inner)._isString();
if($core.assert($9)){
asNum=$recv($recv(inner)._ifEmpty_((function(){
return "NaN";

})))._asNumber();
} else {
asNum=inner;
};
asNum;
$10=$recv(asNum).__eq(asNum);
if($core.assert($10)){
$11=$recv(stack)._last();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["last"]=3;
//>>excludeEnd("ctx");
$recv($11)._add_(asNum);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
} else {
$recv(inner)._ifNotEmpty_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(stack)._last())._add_(inner);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,15)});
//>>excludeEnd("ctx");
}));
};
return $recv(close)._timesRepeat_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(stack)._removeLast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,16)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,asNum:asNum,inner:inner,close:close},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$12=result;
return $12;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"parse:",{message:message,result:result,stack:stack,anArray:anArray},$globals.Lyst.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["message"],
source: "parse: message\x0a\x09| result stack anArray |\x0a\x09anArray := message tokenize: ' '.\x0a\x09result := #().\x0a\x09stack := { result }.\x0a\x09anArray do: [ :each |\x0a\x09\x09| asNum inner close |\x0a\x09\x09close := 0.\x0a\x09\x09inner := each.\x0a\x09\x09[ inner notEmpty and: [ inner first = '(' ]] whileTrue: [ inner := inner allButFirst. stack add: (stack last add: #()) ].\x0a\x09\x09[ inner notEmpty and: [ inner last = ')' ]] whileTrue: [ inner := inner allButLast. close := close + 1 ].\x0a\x09\x09(inner notEmpty and: [ inner first = '#' ]) ifTrue: [ inner := { inner allButFirst } ].\x0a\x09\x09asNum := inner isString ifTrue: [ (inner ifEmpty: [ 'NaN' ]) asNumber ] ifFalse: [ inner ].\x0a\x09\x09asNum = asNum ifTrue: [ stack last add: asNum ] ifFalse: [\x0a\x09\x09\x09inner ifNotEmpty: [ stack last add: inner ] ].\x0a\x09\x09close timesRepeat: [ stack removeLast ] ].\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tokenize:", "do:", "whileTrue:", "and:", "notEmpty", "=", "first", "allButFirst", "add:", "last", "allButLast", "+", "ifTrue:", "ifTrue:ifFalse:", "isString", "asNumber", "ifEmpty:", "ifNotEmpty:", "timesRepeat:", "removeLast"]
}),
$globals.Lyst.klass);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:",
protocol: '*Lyst',
fn: function (anObject,aBlock){
var self=this;
var receiver,selector,result;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$6,$7;
var $early={};
try {
selector=self._first();
receiver=$recv(anObject)._yourself();
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv(receiver)._perform_(selector);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($MessageNotUnderstood(),(function(mnu){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(mnu)._message();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["message"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._selector();
$3=$recv($4).__eq(selector);
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(mnu)._receiver()).__eq_eq(receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv(mnu)._message())._arguments())._isEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$recv(mnu)._resignal();
};
$6=$recv(aBlock)._value();
throw $early=[$6];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({mnu:mnu},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$7=result;
return $7;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:",{anObject:anObject,aBlock:aBlock,receiver:receiver,selector:selector,result:result},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "atYndexIn: anObject ifAbsent: aBlock\x0a\x09| receiver selector result |\x0a\x09selector := self first.\x0a\x09receiver := anObject yourself. \x22JSObjectProxy hack\x22\x0a\x09\x0a\x09[ result := receiver perform: selector ]\x0a\x09on: MessageNotUnderstood do: [ :mnu |\x0a\x09\x09((mnu message selector = selector\x0a\x09\x09\x09and: [ mnu receiver == receiver ])\x0a\x09\x09\x09and: [ mnu message arguments isEmpty ])\x0a\x09\x09\x09ifFalse: [ mnu resignal ].\x0a\x09\x09^ aBlock value ].\x0a\x09^ result",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["first", "yourself", "on:do:", "perform:", "ifFalse:", "and:", "=", "selector", "message", "==", "receiver", "isEmpty", "arguments", "resignal", "value"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:put:",
protocol: '*Lyst',
fn: function (anObject,aBlock,anotherObject){
var self=this;
var receiver,selector,arguments_,result;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $5,$4,$3,$2,$1,$6,$7;
var $early={};
try {
selector=$recv(self._first())._asMutator();
receiver=$recv(anObject)._yourself();
arguments_=[anotherObject];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
result=$recv(receiver)._perform_withArguments_(selector,arguments_);
return result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($MessageNotUnderstood(),(function(mnu){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(mnu)._message();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["message"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._selector();
$3=$recv($4).__eq(selector);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(mnu)._receiver()).__eq_eq(receiver);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$1=$recv($2)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($recv(mnu)._message())._arguments()).__eq(arguments_);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["and:"]=1;
//>>excludeEnd("ctx");
if(!$core.assert($1)){
$recv(mnu)._resignal();
};
$6=$recv(aBlock)._value();
throw $early=[$6];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({mnu:mnu},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$7=result;
return $7;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:put:",{anObject:anObject,aBlock:aBlock,anotherObject:anotherObject,receiver:receiver,selector:selector,arguments_:arguments_,result:result},$globals.Array)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock", "anotherObject"],
source: "atYndexIn: anObject ifAbsent: aBlock put: anotherObject\x0a\x09| receiver selector arguments result |\x0a\x09selector := self first asMutator.\x0a\x09receiver := anObject yourself. \x22JSObjectProxy hack\x22\x0a\x09arguments := { anotherObject }.\x0a\x09\x0a\x09[ result := receiver perform: selector withArguments: arguments ]\x0a\x09on: MessageNotUnderstood do: [ :mnu |\x0a\x09\x09((mnu message selector = selector\x0a\x09\x09\x09and: [ mnu receiver == receiver ])\x0a\x09\x09\x09and: [ mnu message arguments = arguments ])\x0a\x09\x09\x09ifFalse: [ mnu resignal ].\x0a\x09\x09^ aBlock value ].\x0a\x09^ result",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["asMutator", "first", "yourself", "on:do:", "perform:withArguments:", "ifFalse:", "and:", "=", "selector", "message", "==", "receiver", "arguments", "resignal", "value"]
}),
$globals.Array);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:",
protocol: '*Lyst',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$1=$recv(anObject)._respondsTo_("at:ifAbsent:");
$recv($1)._ifTrue_ifFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(anObject)._at_ifAbsent_(self,aBlock);
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "atYndexIn: anObject ifAbsent: aBlock\x0a\x09(anObject respondsTo: #at:ifAbsent:)\x0a\x09\x09ifTrue: [ ^ anObject at: self ifAbsent: aBlock ]\x0a\x09\x09ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "at:ifAbsent:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:put:",
protocol: '*Lyst',
fn: function (anObject,aBlock,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$1=$recv(anObject)._respondsTo_("at:put:");
$recv($1)._ifTrue_ifFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(anObject)._at_put_(self,anotherObject);
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:put:",{anObject:anObject,aBlock:aBlock,anotherObject:anotherObject},$globals.Number)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock", "anotherObject"],
source: "atYndexIn: anObject ifAbsent: aBlock put: anotherObject\x0a\x09(anObject respondsTo: #at:put:)\x0a\x09\x09ifTrue: [ ^ anObject at: self put: anotherObject ]\x0a\x09\x09ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "at:put:"]
}),
$globals.Number);

$core.addMethod(
$core.method({
selector: "atLyst:ifAbsent:",
protocol: '*Lyst',
fn: function (aCollection,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
var $early={};
try {
$1=$recv(aCollection)._inject_into_(self,(function(soFar,segment){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(segment)._atYndexIn_ifAbsent_(soFar,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$2=$recv(aBlock)._value();
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({soFar:soFar,segment:segment},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atLyst:ifAbsent:",{aCollection:aCollection,aBlock:aBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection", "aBlock"],
source: "atLyst: aCollection ifAbsent: aBlock\x0a\x09^ aCollection inject: self into: [ :soFar :segment |\x0a\x09\x09segment atYndexIn: soFar ifAbsent: [ ^ aBlock value ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["inject:into:", "atYndexIn:ifAbsent:", "value"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:",
protocol: '*Lyst',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBlock)._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "atYndexIn: anObject ifAbsent: aBlock\x0a\x09^ aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:put:",
protocol: '*Lyst',
fn: function (anObject,aBlock,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aBlock)._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:put:",{anObject:anObject,aBlock:aBlock,anotherObject:anotherObject},$globals.Object)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock", "anotherObject"],
source: "atYndexIn: anObject ifAbsent: aBlock put: anotherObject\x0a\x09^ aBlock value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value"]
}),
$globals.Object);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:",
protocol: '*Lyst',
fn: function (anObject,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$1=$recv(anObject)._respondsTo_("at:ifAbsent:");
$recv($1)._ifTrue_ifFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(anObject)._at_ifAbsent_(self,aBlock);
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:",{anObject:anObject,aBlock:aBlock},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock"],
source: "atYndexIn: anObject ifAbsent: aBlock\x0a\x09(anObject respondsTo: #at:ifAbsent:)\x0a\x09\x09ifTrue: [ ^ anObject at: self ifAbsent: aBlock ]\x0a\x09\x09ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "at:ifAbsent:"]
}),
$globals.String);

$core.addMethod(
$core.method({
selector: "atYndexIn:ifAbsent:put:",
protocol: '*Lyst',
fn: function (anObject,aBlock,anotherObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
var $early={};
try {
$1=$recv(anObject)._respondsTo_("at:put:");
$recv($1)._ifTrue_ifFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(anObject)._at_put_(self,anotherObject);
throw $early=[$2];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),aBlock);
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atYndexIn:ifAbsent:put:",{anObject:anObject,aBlock:aBlock,anotherObject:anotherObject},$globals.String)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aBlock", "anotherObject"],
source: "atYndexIn: anObject ifAbsent: aBlock put: anotherObject\x0a\x09(anObject respondsTo: #at:put:)\x0a\x09\x09ifTrue: [ ^ anObject at: self put: anotherObject ]\x0a\x09\x09ifFalse: aBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "respondsTo:", "at:put:"]
}),
$globals.String);

});
