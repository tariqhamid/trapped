define("trapped/Trapped-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Trapped-Tests');
$core.packages["Trapped-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["Trapped-Tests"].transport = {"type":"amd","amdNamespace":"trapped"};

$core.addClass('IsolatorTest', $globals.TestCase, ['rootModel'], 'Trapped-Tests');
$core.addMethod(
$core.method({
selector: "setUp",
protocol: 'running',
fn: function (){
var self=this;
function $EavModel(){return $globals.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv($EavModel())._new();
$recv($1)._getBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._root();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=$recv($1)._putBlock_((function(x,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(x)._root_(y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,2)});
//>>excludeEnd("ctx");
}));
self["@rootModel"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setUp",{},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setUp\x0a\x0arootModel := EavModel new\x0a\x09getBlock: [:x | x root];\x0a    putBlock: [:x :y | x root: y].",
referencedClasses: ["EavModel"],
//>>excludeEnd("ide");
messageSends: ["getBlock:", "new", "root", "putBlock:", "root:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testNontrivialModelGetsAppropriateValueForModification",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return $globals.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
result=nil;
isolator=$recv($Isolator())._on_($globals.HashedCollection._newFromPairs_(["foo",["bar", [(1), [(2), (5)]], "baz"],"moo","zoo"]));
$1=$recv($EavModel())._new();
$recv($1)._getBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(x)._root();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["root"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._at_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return $recv($2)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv($1)._putBlock_((function(x,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(x)._root())._at_("foo"))._at_put_((2),y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,2)});
//>>excludeEnd("ctx");
}));
model=$4;
$recv(isolator)._model_modify_(model,(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (5)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelGetsAppropriateValueForModification",{isolator:isolator,model:model,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNontrivialModelGetsAppropriateValueForModification\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 5)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new\x0a\x09getBlock: [ :x | (x root at: 'foo') at: 2 ];\x0a\x09putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].\x0aisolator model: model modify: [:r|result := r].\x0aself assert: #(1 #(2 5)) equals: result",
referencedClasses: ["Isolator", "EavModel"],
//>>excludeEnd("ide");
messageSends: ["on:", "getBlock:", "new", "at:", "root", "putBlock:", "at:put:", "model:modify:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testNontrivialModelModifiesAppropriateValue",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return $globals.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
result=nil;
isolator=$recv($Isolator())._on_($globals.HashedCollection._newFromPairs_(["foo",["bar", [(1), [(2), (3)]], "baz"],"moo","zoo"]));
$1=$recv($EavModel())._new();
$recv($1)._getBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(x)._root();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["root"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._at_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return $recv($2)._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$4=$recv($1)._putBlock_((function(x,y){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(x)._root())._at_("foo"))._at_put_((2),y);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,2)});
//>>excludeEnd("ctx");
}));
model=$4;
$recv(isolator)._model_modify_(model,(function(r){
return "new";

}));
$recv(isolator)._model_read_(model,(function(r){
result=r;
return result;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model:read:"]=1;
//>>excludeEnd("ctx");
self._assert_equals_("new",result);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["assert:equals:"]=1;
//>>excludeEnd("ctx");
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
self._assert_equals_($globals.HashedCollection._newFromPairs_(["foo",["bar", "new", "baz"],"moo","zoo"]),result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelModifiesAppropriateValue",{isolator:isolator,model:model,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNontrivialModelModifiesAppropriateValue\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new\x0a\x09getBlock: [ :x | (x root at: 'foo') at: 2 ];\x0a\x09putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].\x0aisolator model: model modify: [:r|#new].\x0aisolator model: model read: [:r|result := r].\x0aself assert: #new equals: result.\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #{ 'foo' -> #('bar' #new 'baz'). 'moo' -> 'zoo' } equals: result",
referencedClasses: ["Isolator", "EavModel"],
//>>excludeEnd("ide");
messageSends: ["on:", "getBlock:", "new", "at:", "root", "putBlock:", "at:put:", "model:modify:", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testNontrivialModelReturnsAppropriateValue",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return $globals.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_($globals.HashedCollection._newFromPairs_(["foo",["bar", [(1), [(2), (3)]], "baz"],"moo","zoo"]));
model=$recv($recv($EavModel())._new())._getBlock_((function(x){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv($recv(x)._root())._at_("foo"))._at_((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(isolator)._model_read_(model,(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (3)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelReturnsAppropriateValue",{isolator:isolator,model:model,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testNontrivialModelReturnsAppropriateValue\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new getBlock: [ :x | (x root at: 'foo') at: 2 ].\x0aisolator model: model read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result",
referencedClasses: ["Isolator", "EavModel"],
//>>excludeEnd("ide");
messageSends: ["on:", "getBlock:", "new", "at:", "root", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelExaminesThenModifiesRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (3)]]);
$recv(isolator)._model_modify_(self["@rootModel"],(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(r)._second();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
self._assert_equals_([(2), (3)],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelExaminesThenModifiesRoot",{isolator:isolator,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelExaminesThenModifiesRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|r second].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(2 3) equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:modify:", "second", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelGetsRootForModification",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_([(2), [(1), (0)]]);
$recv(isolator)._model_modify_(self["@rootModel"],(function(r){
result=r;
return result;

}));
self._assert_equals_([(2), [(1), (0)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelGetsRootForModification",{isolator:isolator,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelGetsRootForModification\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(2 #(1 0)).\x0aisolator model: rootModel modify: [:r|result := r].\x0aself assert: #(2 #(1 0)) equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:modify:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
newValue=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (3)]]);
$recv(isolator)._model_modify_(self["@rootModel"],(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
newValue=r;
newValue;
$recv(r)._at_put_((1),(4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
return r;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(newValue)._at_put_((2),"bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
$recv(newValue)._at_put_((2),"baz");
self._assert_equals_([(4), [(2), (3)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",{isolator:isolator,result:result,newValue:newValue},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot\x0a| isolator result newValue |\x0aresult := nil. newValue := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|newValue := r. r at: 1 put: 4. r].\x0anewValue at: 2 put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0anewValue at: 2 put: 'baz'.\x0aself assert: #(4 #(2 3)) equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:modify:", "at:put:", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelModifiesAndDeeplyIsolatesRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
result=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (3)]]);
newValue=$globals.HashedCollection._newFromPairs_(["foo",[(4), (5), (6)]]);
$recv(isolator)._model_modify_(self["@rootModel"],(function(r){
return newValue;

}));
$1=$recv(newValue)._at_("foo");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_((1),"bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
$recv($recv(newValue)._at_("foo"))._at_put_((3),"baz");
self._assert_equals_($globals.HashedCollection._newFromPairs_(["foo",[(4), (5), (6)]]),result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesRoot",{isolator:isolator,result:result,newValue:newValue},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelModifiesAndDeeplyIsolatesRoot\x0a| isolator result newValue |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0anewValue := #{'foo'->#(4 5 6)}.\x0aisolator model: rootModel modify: [:r|newValue].\x0a(newValue at: 'foo') at: 1 put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0a(newValue at: 'foo') at: 3 put: 'baz'.\x0aself assert: #{'foo'->#(4 5 6)} equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:modify:", "at:put:", "at:", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelModifiesAndIsolatesRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (3)]]);
newValue=$globals.HashedCollection._newFromPairs_(["foo",[(4), (5), (6)]]);
$recv(isolator)._model_modify_(self["@rootModel"],(function(r){
return newValue;

}));
$recv(newValue)._at_put_("foo","bar");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
$recv(newValue)._at_put_("foo","baz");
self._assert_equals_($globals.HashedCollection._newFromPairs_(["foo",[(4), (5), (6)]]),result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndIsolatesRoot",{isolator:isolator,result:result,newValue:newValue},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelModifiesAndIsolatesRoot\x0a| isolator result newValue |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0anewValue := #{'foo'->#(4 5 6)}.\x0aisolator model: rootModel modify: [:r|newValue].\x0anewValue at: 'foo' put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0anewValue at: 'foo' put: 'baz'.\x0aself assert: #{'foo'->#(4 5 6)} equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:modify:", "at:put:", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelModifiesRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (3)]]);
$recv(isolator)._model_modify_(self["@rootModel"],(function(r){
return $globals.HashedCollection._newFromPairs_(["foo",[(4), (5), (6)]]);

}));
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
self._assert_equals_($globals.HashedCollection._newFromPairs_(["foo",[(4), (5), (6)]]),result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesRoot",{isolator:isolator,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelModifiesRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|#{'foo'->#(4 5 6)}].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #{'foo'->#(4 5 6)} equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:modify:", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelReturnsDeeplyIsolatedRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (3)]]);
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(r)._at_((2)))._at_put_((1),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model:read:"]=1;
//>>excludeEnd("ctx");
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (3)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsDeeplyIsolatedRoot",{isolator:isolator,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelReturnsDeeplyIsolatedRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel read: [:r|(r at: 2) at: 1 put: 0].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:read:", "at:put:", "at:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelReturnsIsolatedRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (4)]]);
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(r)._at_put_((2),nil);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["model:read:"]=1;
//>>excludeEnd("ctx");
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (4)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsIsolatedRoot",{isolator:isolator,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelReturnsIsolatedRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 4)).\x0aisolator model: rootModel read: [:r|r at: 2 put: nil].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 4)) equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:read:", "at:put:", "assert:equals:"]
}),
$globals.IsolatorTest);

$core.addMethod(
$core.method({
selector: "testRootModelReturnsRoot",
protocol: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return $globals.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
result=nil;
isolator=$recv($Isolator())._on_([(1), [(2), (3)]]);
$recv(isolator)._model_read_(self["@rootModel"],(function(r){
result=r;
return result;

}));
self._assert_equals_([(1), [(2), (3)]],result);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsRoot",{isolator:isolator,result:result},$globals.IsolatorTest)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testRootModelReturnsRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result",
referencedClasses: ["Isolator"],
//>>excludeEnd("ide");
messageSends: ["on:", "model:read:", "assert:equals:"]
}),
$globals.IsolatorTest);


});
