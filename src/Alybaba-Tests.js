define("alybaba/Alybaba-Tests", ["amber/boot", "amber_core/SUnit", "axon/Axon"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Alybaba-Tests');
$core.packages["Alybaba-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Alybaba-Tests"].transport = {"type":"amd","amdNamespace":"alybaba"};

$core.addClass('PlainConsumeTransformTest', $globals.TestCase, [], 'Alybaba-Tests');
$core.addMethod(
$core.method({
selector: "testModelTransformSentToAxon",
protocol: 'tests',
fn: function (){
var self=this;
var model,result,axon;
function $TestSpyAxon(){return $globals.TestSpyAxon||(typeof TestSpyAxon=="undefined"?nil:TestSpyAxon)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=$globals.HashedCollection._newFromPairs_(["foo",["bar", [(1), [(2), (3)]], "baz"],"moo","zoo"]);
axon=$recv($TestSpyAxon())._new();
$recv(axon)._registerIn_(model);
$recv(model)._atLyst_transform_(["foo", (2)],(function(r){
return "new";

}));
self._assert_equals_($recv(axon)._changedAspectLog(),[["foo", (2)]]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testModelTransformSentToAxon",{model:model,result:result,axon:axon},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testModelTransformSentToAxon\x0a| model result axon |\x0aresult := nil.\x0amodel := #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0aaxon := TestSpyAxon new.\x0aaxon registerIn: model.\x0amodel atLyst: #(foo 2) transform: [:r | #new].\x0aself assert: axon changedAspectLog equals: #((foo 2))",
referencedClasses: ["TestSpyAxon"],
//>>excludeEnd("ide");
messageSends: ["new", "registerIn:", "atLyst:transform:", "assert:equals:", "changedAspectLog"]
}),
$globals.PlainConsumeTransformTest);

$core.addMethod(
$core.method({
selector: "testNontrivialModelGetsAppropriateValueForTransform",
protocol: 'tests',
fn: function (){
var self=this;
var model,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=$globals.HashedCollection._newFromPairs_(["foo",["bar", [(1), [(2), (5)]], "baz"],"moo","zoo"]);
$recv(model)._atLyst_transform_(["foo", (2)],(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (5)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelGetsAppropriateValueForTransform",{model:model,result:result},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNontrivialModelGetsAppropriateValueForTransform\x0a| model result |\x0aresult := nil.\x0amodel := #{ 'foo' -> #('bar' #(1 #(2 5)) 'baz'). 'moo' -> 'zoo' }.\x0amodel atLyst: #(foo 2) transform: [:r | result := r].\x0aself assert: #(1 #(2 5)) equals: result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atLyst:transform:", "assert:equals:"]
}),
$globals.PlainConsumeTransformTest);

$core.addMethod(
$core.method({
selector: "testNontrivialModelReturnsAppropriateValue",
protocol: 'tests',
fn: function (){
var self=this;
var model,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=$globals.HashedCollection._newFromPairs_(["foo",["bar", [(1), [(2), (3)]], "baz"],"moo","zoo"]);
$recv(model)._atLyst_consume_(["foo", (2)],(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (3)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelReturnsAppropriateValue",{model:model,result:result},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNontrivialModelReturnsAppropriateValue\x0a| model result |\x0aresult := nil.\x0amodel := #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel atLyst: #(foo 2) consume: [:r | result := r].\x0aself assert: #(1 #(2 3)) equals: result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atLyst:consume:", "assert:equals:"]
}),
$globals.PlainConsumeTransformTest);

$core.addMethod(
$core.method({
selector: "testNontrivialModelTransformsAppropriateValue",
protocol: 'tests',
fn: function (){
var self=this;
var model,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=$globals.HashedCollection._newFromPairs_(["foo",["bar", [(1), [(2), (3)]], "baz"],"moo","zoo"]);
$recv(model)._atLyst_transform_(["foo", (2)],(function(r){
return "new";

}));
$recv(model)._atLyst_consume_(["foo", (2)],(function(r){
result=r;
return result;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atLyst:consume:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_("new",result);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(model)._atLyst_consume_([],(function(r){
result=r;
return result;

}));
self._assert_equals_($globals.HashedCollection._newFromPairs_(["foo",["bar", "new", "baz"],"moo","zoo"]),result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelTransformsAppropriateValue",{model:model,result:result},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNontrivialModelTransformsAppropriateValue\x0a| model result |\x0aresult := nil.\x0amodel := #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel atLyst: #(foo 2) transform: [:r | #new].\x0amodel atLyst: #(foo 2) consume: [:r | result := r].\x0aself assert: #new equals: result.\x0amodel atLyst: #() consume: [:r | result := r].\x0aself assert: #{ 'foo' -> #('bar' #new 'baz'). 'moo' -> 'zoo' } equals: result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atLyst:transform:", "atLyst:consume:", "assert:equals:"]
}),
$globals.PlainConsumeTransformTest);

$core.addMethod(
$core.method({
selector: "testRootModelCannotTransform",
protocol: 'tests',
fn: function (){
var self=this;
var model,result;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=[(1), [(2), (3)]];
self._should_raise_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(model)._atLyst_transform_([],(function(r){
return $globals.HashedCollection._newFromPairs_(["foo",[(4), (5), (6)]]);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}),$Error());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelCannotTransform",{model:model,result:result},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelCannotTransform\x0a| model result |\x0aresult := nil.\x0amodel := #(1 #(2 3)).\x0aself should: [ model atLyst: #() transform: [:r | #{'foo'->#(4 5 6)}] ] raise: Error",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["should:raise:", "atLyst:transform:"]
}),
$globals.PlainConsumeTransformTest);

$core.addMethod(
$core.method({
selector: "testRootModelReturnsDirectRoot",
protocol: 'tests',
fn: function (){
var self=this;
var model,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=[(1), [(2), (4)]];
$recv(model)._atLyst_consume_([],(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(r)._at_put_((2),nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atLyst:consume:"]=1;
//>>excludeEnd("ctx");
$recv(model)._atLyst_consume_([],(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), nil],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsDirectRoot",{model:model,result:result},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelReturnsDirectRoot\x0a| model result |\x0aresult := nil.\x0amodel := #(1 #(2 4)).\x0amodel atLyst: #() consume: [:r | r at: 2 put: nil].\x0amodel atLyst: #() consume: [:r | result := r].\x0aself assert: #(1 nil) equals: result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atLyst:consume:", "at:put:", "assert:equals:"]
}),
$globals.PlainConsumeTransformTest);

$core.addMethod(
$core.method({
selector: "testRootModelReturnsRoot",
protocol: 'tests',
fn: function (){
var self=this;
var model,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=[(1), [(2), (3)]];
$recv(model)._atLyst_consume_([],(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (3)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsRoot",{model:model,result:result},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelReturnsRoot\x0a| model result |\x0aresult := nil.\x0amodel := #(1 #(2 3)).\x0amodel atLyst: #() consume: [:r | result := r].\x0aself assert: #(1 #(2 3)) equals: result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["atLyst:consume:", "assert:equals:"]
}),
$globals.PlainConsumeTransformTest);

$core.addMethod(
$core.method({
selector: "testRootTransformBlockIsNotRun",
protocol: 'tests',
fn: function (){
var self=this;
var model,result;
function $Error(){return $globals.Error||(typeof Error=="undefined"?nil:Error)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
model=[(2), [(1), (0)]];
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(model)._atLyst_transform_([],(function(r){
result=r;
return result;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._on_do_($Error(),(function(){

}));
self._assert_($recv(result)._isNil());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootTransformBlockIsNotRun",{model:model,result:result},$globals.PlainConsumeTransformTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootTransformBlockIsNotRun\x0a| model result |\x0aresult := nil.\x0amodel := #(2 #(1 0)).\x0a[model atLyst: #() transform: [:r | result := r]] on: Error do: [].\x0aself assert: result isNil",
referencedClasses: ["Error"],
//>>excludeEnd("ide");
messageSends: ["on:do:", "atLyst:transform:", "assert:", "isNil"]
}),
$globals.PlainConsumeTransformTest);



$core.addClass('TestSpyAxon', $globals.DumbAxon, ['changedAspectLog'], 'Alybaba-Tests');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TestSpyAxon.comment="I am an axon that logs changed aspects. I am useful in tests.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "changed:",
protocol: 'action',
fn: function (anAspect){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@changedAspectLog"])._add_(anAspect);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changed:",{anAspect:anAspect},$globals.TestSpyAxon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAspect"],
source: "changed: anAspect\x0a\x09changedAspectLog add: anAspect",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:"]
}),
$globals.TestSpyAxon);

$core.addMethod(
$core.method({
selector: "changedAspectLog",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@changedAspectLog"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "changedAspectLog\x0a\x09^ changedAspectLog",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestSpyAxon);

$core.addMethod(
$core.method({
selector: "changedAspectLog:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@changedAspectLog"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "changedAspectLog: anObject\x0a\x09changedAspectLog := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TestSpyAxon);

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
$globals.TestSpyAxon.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@changedAspectLog"]=[];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.TestSpyAxon)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09changedAspectLog := #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.TestSpyAxon);


});
