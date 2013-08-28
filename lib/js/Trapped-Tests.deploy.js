define("gh_herby_trapped/Trapped-Tests", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/SUnit"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Tests');
smalltalk.packages["Trapped-Tests"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('IsolatorTest', smalltalk.TestCase, ['rootModel'], 'Trapped-Tests');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($EavModel())._new();
_st($1)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(x)._root();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(x)._root_(y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}));
self["@rootModel"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.IsolatorTest)})},
messageSends: ["getBlock:", "root", "new", "putBlock:", "root:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNontrivialModelGetsAppropriateValueForModification",
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=nil;
isolator=_st($Isolator())._on_(smalltalk.HashedCollection._from_(["foo".__minus_gt(["bar", [(1), [(2), (5)]], "baz"]),"moo".__minus_gt("zoo")]));
$1=_st($EavModel())._new();
_st($1)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_((2));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_put_((2),y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}));
model=$2;
_st(isolator)._model_modify_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_([(1), [(2), (5)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelGetsAppropriateValueForModification",{isolator:isolator,model:model,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "->", "getBlock:", "at:", "root", "new", "putBlock:", "at:put:", "model:modify:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNontrivialModelModifiesAppropriateValue",
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
result=nil;
isolator=_st($Isolator())._on_(smalltalk.HashedCollection._from_(["foo".__minus_gt(["bar", [(1), [(2), (3)]], "baz"]),"moo".__minus_gt("zoo")]));
$1=_st($EavModel())._new();
_st($1)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_((2));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_put_((2),y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}));
model=$2;
_st(isolator)._model_modify_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
return "new";
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_("new",result);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_(smalltalk.HashedCollection._from_(["foo".__minus_gt(["bar", "new", "baz"]),"moo".__minus_gt("zoo")]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelModifiesAppropriateValue",{isolator:isolator,model:model,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "->", "getBlock:", "at:", "root", "new", "putBlock:", "at:put:", "model:modify:", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testNontrivialModelReturnsAppropriateValue",
fn: function (){
var self=this;
var isolator,model,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
function $EavModel(){return smalltalk.EavModel||(typeof EavModel=="undefined"?nil:EavModel)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_(smalltalk.HashedCollection._from_(["foo".__minus_gt(["bar", [(1), [(2), (3)]], "baz"]),"moo".__minus_gt("zoo")]));
model=_st(_st($EavModel())._new())._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(x)._root())._at_("foo"))._at_((2));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
_st(isolator)._model_read_(model,(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelReturnsAppropriateValue",{isolator:isolator,model:model,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "->", "getBlock:", "at:", "root", "new", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelExaminesThenModifiesRoot",
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
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_([(2), (3)],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelExaminesThenModifiesRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "model:modify:", "second", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelGetsRootForModification",
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
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_([(2), [(1), (0)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelGetsRootForModification",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "model:modify:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
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
return r;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_((2),"bar");
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_((2),"baz");
self._assert_equals_([(4), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",{isolator:isolator,result:result,newValue:newValue},smalltalk.IsolatorTest)})},
messageSends: ["on:", "model:modify:", "at:put:", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesRoot",
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
newValue=smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return newValue;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(_st(newValue)._at_("foo"))._at_put_((1),"bar");
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(_st(newValue)._at_("foo"))._at_put_((3),"baz");
self._assert_equals_(smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesRoot",{isolator:isolator,result:result,newValue:newValue},smalltalk.IsolatorTest)})},
messageSends: ["on:", "->", "model:modify:", "at:put:", "at:", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesAndIsolatesRoot",
fn: function (){
var self=this;
var isolator,result,newValue;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
newValue=smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return newValue;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_("foo","bar");
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_("foo","baz");
self._assert_equals_(smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndIsolatesRoot",{isolator:isolator,result:result,newValue:newValue},smalltalk.IsolatorTest)})},
messageSends: ["on:", "->", "model:modify:", "at:put:", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelModifiesRoot",
fn: function (){
var self=this;
var isolator,result;
function $Isolator(){return smalltalk.Isolator||(typeof Isolator=="undefined"?nil:Isolator)}
return smalltalk.withContext(function($ctx1) { 
result=nil;
isolator=_st($Isolator())._on_([(1), [(2), (3)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
return smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_(smalltalk.HashedCollection._from_(["foo".__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "model:modify:", "->", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelReturnsDeeplyIsolatedRoot",
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
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsDeeplyIsolatedRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "model:read:", "at:put:", "at:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelReturnsIsolatedRoot",
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
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {
result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_([(1), [(2), (4)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsIsolatedRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "model:read:", "at:put:", "assert:equals:"]}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRootModelReturnsRoot",
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
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
self._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsRoot",{isolator:isolator,result:result},smalltalk.IsolatorTest)})},
messageSends: ["on:", "model:read:", "assert:equals:"]}),
smalltalk.IsolatorTest);


});
