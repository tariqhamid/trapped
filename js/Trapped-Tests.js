define("gh_herby_trapped/Trapped-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Tests');
smalltalk.packages["Trapped-Tests"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('IsolatorTest', smalltalk.TestCase, ['rootModel'], 'Trapped-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($EavModel())._new();
_st($1)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._root();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}));
$2=_st($1)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(x)._root_(y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,2)})}));
self["@rootModel"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.IsolatorTest)})},
args: [],
source: "setUp\x0a\x0arootModel := EavModel new\x0a\x09getBlock: [:x | x root];\x0a    putBlock: [:x :y | x root: y].",
messageSends: ["getBlock:", "new", "root", "putBlock:", "root:"],
referencedClasses: ["EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNontrivialModelGetsAppropriateValueForModification",
category: 'tests',
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$3,$5,$4,$6;
result=nil;
$2="foo".__minus_gt(["bar", [(1), [(2), (5)]], "baz"]);
$ctx1.sendIdx["->"]=1;
$1=smalltalk.HashedCollection._from_([$2,"moo".__minus_gt("zoo")]);
isolator=_st($Isolator())._on_($1);
$3=_st($EavModel())._new();
_st($3)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
$5=_st(x)._root();
$ctx2.sendIdx["root"]=1;
$4=_st($5)._at_("foo");
$ctx2.sendIdx["at:"]=2;
return _st($4)._at_((2));
$ctx2.sendIdx["at:"]=1;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}));
$6=_st($3)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_put_((2),y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,2)})}));
model=$6;
_st(isolator)._model_modify_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,3)})}));
self._assert_equals_([(1), [(2), (5)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelGetsAppropriateValueForModification",{isolator:isolator,model:model,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testNontrivialModelGetsAppropriateValueForModification\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 5)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new\x0a\x09getBlock: [ :x | (x root at: 'foo') at: 2 ];\x0a\x09putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].\x0aisolator model: model modify: [:r|result := r].\x0aself assert: #(1 #(2 5)) equals: result",
messageSends: ["on:", "->", "getBlock:", "new", "at:", "root", "putBlock:", "at:put:", "model:modify:", "assert:equals:"],
referencedClasses: ["Isolator", "EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNontrivialModelModifiesAppropriateValue",
category: 'tests',
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1,$4,$6,$5,$7,$9,$8;
result=nil;
$2="foo".__minus_gt(["bar", [(1), [(2), (3)]], "baz"]);
$ctx1.sendIdx["->"]=1;
$3="moo".__minus_gt("zoo");
$ctx1.sendIdx["->"]=2;
$1=smalltalk.HashedCollection._from_([$2,$3]);
isolator=_st($Isolator())._on_($1);
$4=_st($EavModel())._new();
_st($4)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
$6=_st(x)._root();
$ctx2.sendIdx["root"]=1;
$5=_st($6)._at_("foo");
$ctx2.sendIdx["at:"]=2;
return _st($5)._at_((2));
$ctx2.sendIdx["at:"]=1;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}));
$7=_st($4)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_put_((2),y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1,2)})}));
model=$7;
_st(isolator)._model_modify_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
return "new";
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,3)})}));
_st(isolator)._model_read_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,4)})}));
$ctx1.sendIdx["model:read:"]=1;
self._assert_equals_("new",result);
$ctx1.sendIdx["assert:equals:"]=1;
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,5)})}));
$9="foo".__minus_gt(["bar", "new", "baz"]);
$ctx1.sendIdx["->"]=3;
$8=smalltalk.HashedCollection._from_([$9,"moo".__minus_gt("zoo")]);
self._assert_equals_($8,result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelModifiesAppropriateValue",{isolator:isolator,model:model,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testNontrivialModelModifiesAppropriateValue\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new\x0a\x09getBlock: [ :x | (x root at: 'foo') at: 2 ];\x0a\x09putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].\x0aisolator model: model modify: [:r|#new].\x0aisolator model: model read: [:r|result := r].\x0aself assert: #new equals: result.\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #{ 'foo' -> #('bar' #new 'baz'). 'moo' -> 'zoo' } equals: result",
messageSends: ["on:", "->", "getBlock:", "new", "at:", "root", "putBlock:", "at:put:", "model:modify:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator", "EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNontrivialModelReturnsAppropriateValue",
category: 'tests',
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
result=nil;
$2="foo".__minus_gt(["bar", [(1), [(2), (3)]], "baz"]);
$ctx1.sendIdx["->"]=1;
$1=smalltalk.HashedCollection._from_([$2,"moo".__minus_gt("zoo")]);
isolator=_st($Isolator())._on_($1);
model=_st(_st($EavModel())._new())._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_((2));
$ctx2.sendIdx["at:"]=1;
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1,1)})}));
_st(isolator)._model_read_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
self._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelReturnsAppropriateValue",{isolator:isolator,model:model,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testNontrivialModelReturnsAppropriateValue\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new getBlock: [ :x | (x root at: 'foo') at: 2 ].\x0aisolator model: model read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result",
messageSends: ["on:", "->", "getBlock:", "new", "at:", "root", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator", "EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelExaminesThenModifiesRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return _st(r)._second();
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
self._assert_equals_([(2), (3)],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelExaminesThenModifiesRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelExaminesThenModifiesRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|r second].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(2 3) equals: result",
messageSends: ["on:", "model:modify:", "second", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelGetsRootForModification",
category: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(2), [(1), (0)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
self._assert_equals_([(2), [(1), (0)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelGetsRootForModification",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelGetsRootForModification\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(2 #(1 0)).\x0aisolator model: rootModel modify: [:r|result := r].\x0aself assert: #(2 #(1 0)) equals: result",
messageSends: ["on:", "model:modify:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
newValue=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
newValue=r;
newValue;
_st(r)._at_put_((1),(4));
$ctx2.sendIdx["at:put:"]=1;
return r;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
_st(newValue)._at_put_((2),"bar");
$ctx1.sendIdx["at:put:"]=2;
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
_st(newValue)._at_put_((2),"baz");
self._assert_equals_([(4), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",{isolator:isolator,result:result,newValue:newValue},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot\x0a| isolator result newValue |\x0aresult := nil. newValue := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|newValue := r. r at: 1 put: 4. r].\x0anewValue at: 2 put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0anewValue at: 2 put: 'baz'.\x0aself assert: #(4 #(2 3)) equals: result",
messageSends: ["on:", "model:modify:", "at:put:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
$1="foo".__minus_gt([(4), (5), (6)]);
$ctx1.sendIdx["->"]=1;
newValue=smalltalk.HashedCollection._from_([$1]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return newValue;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
$2=_st(newValue)._at_("foo");
$ctx1.sendIdx["at:"]=1;
_st($2)._at_put_((1),"bar");
$ctx1.sendIdx["at:put:"]=1;
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
_st(_st(newValue)._at_("foo"))._at_put_((3),"baz");
self._assert_equals_(smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesRoot",{isolator:isolator,result:result,newValue:newValue},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelModifiesAndDeeplyIsolatesRoot\x0a| isolator result newValue |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0anewValue := #{'foo'->#(4 5 6)}.\x0aisolator model: rootModel modify: [:r|newValue].\x0a(newValue at: 'foo') at: 1 put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0a(newValue at: 'foo') at: 3 put: 'baz'.\x0aself assert: #{'foo'->#(4 5 6)} equals: result",
messageSends: ["on:", "->", "model:modify:", "at:put:", "at:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesAndIsolatesRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
$1="foo".__minus_gt([(4), (5), (6)]);
$ctx1.sendIdx["->"]=1;
newValue=smalltalk.HashedCollection._from_([$1]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return newValue;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
_st(newValue)._at_put_("foo","bar");
$ctx1.sendIdx["at:put:"]=1;
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
_st(newValue)._at_put_("foo","baz");
self._assert_equals_(smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndIsolatesRoot",{isolator:isolator,result:result,newValue:newValue},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelModifiesAndIsolatesRoot\x0a| isolator result newValue |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0anewValue := #{'foo'->#(4 5 6)}.\x0aisolator model: rootModel modify: [:r|newValue].\x0anewValue at: 'foo' put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0anewValue at: 'foo' put: 'baz'.\x0aself assert: #{'foo'->#(4 5 6)} equals: result",
messageSends: ["on:", "->", "model:modify:", "at:put:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
var $1;
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
$1="foo".__minus_gt([(4), (5), (6)]);
$ctx2.sendIdx["->"]=1;
return smalltalk.HashedCollection._from_([$1]);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
self._assert_equals_(smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelModifiesRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|#{'foo'->#(4 5 6)}].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #{'foo'->#(4 5 6)} equals: result",
messageSends: ["on:", "model:modify:", "->", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelReturnsDeeplyIsolatedRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return _st(_st(r)._at_((2)))._at_put_((1),(0));
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
$ctx1.sendIdx["model:read:"]=1;
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
self._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsDeeplyIsolatedRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelReturnsDeeplyIsolatedRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel read: [:r|(r at: 2) at: 1 put: 0].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result",
messageSends: ["on:", "model:read:", "at:put:", "at:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelReturnsIsolatedRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (4)]]);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return _st(r)._at_put_((2),nil);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
$ctx1.sendIdx["model:read:"]=1;
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,2)})}));
self._assert_equals_([(1), [(2), (4)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsIsolatedRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelReturnsIsolatedRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 4)).\x0aisolator model: rootModel read: [:r|r at: 2 put: nil].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 4)) equals: result",
messageSends: ["on:", "model:read:", "at:put:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelReturnsRoot",
category: 'tests',
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1,1)})}));
self._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
args: [],
source: "testRootModelReturnsRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result",
messageSends: ["on:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);


});
