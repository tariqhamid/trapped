smalltalk.addPackage('Trapped-Tests', {});
smalltalk.addClass('IsolatorTest', smalltalk.TestCase, ['rootModel'], 'Trapped-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.EavModel || EavModel))._new();
_st($1)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {return _st(x)._root();
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {return _st(x)._root_(y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}));
self["@rootModel"]=$2;
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelGetsAppropriateValueForModification",
smalltalk.method({
selector: "testNontrivialModelGetsAppropriateValueForModification",
fn: function (){
var self=this;
var isolator,model,result;
return smalltalk.withContext(function($ctx1) { var $1,$2;
result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_(smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt(["bar", [(1), [(2), (5)]], "baz"]),_st("moo").__minus_gt("zoo")]));
$1=_st((smalltalk.EavModel || EavModel))._new();
_st($1)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(x)._root())._at_("foo"))._at_((2));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(x)._root())._at_("foo"))._at_put_((2),y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}));
model=$2;
_st(isolator)._model_modify_(model,(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_([(1), [(2), (5)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelGetsAppropriateValueForModification",{isolator:isolator,model:model,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelModifiesAppropriateValue",
smalltalk.method({
selector: "testNontrivialModelModifiesAppropriateValue",
fn: function (){
var self=this;
var isolator,model,result;
return smalltalk.withContext(function($ctx1) { var $1,$2;
result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_(smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt(["bar", [(1), [(2), (3)]], "baz"]),_st("moo").__minus_gt("zoo")]));
$1=_st((smalltalk.EavModel || EavModel))._new();
_st($1)._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(x)._root())._at_("foo"))._at_((2));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
$2=_st($1)._putBlock_((function(x,y){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(x)._root())._at_("foo"))._at_put_((2),y);
}, function($ctx2) {$ctx2.fillBlock({x:x,y:y},$ctx1)})}));
model=$2;
_st(isolator)._model_modify_(model,(function(r){
return smalltalk.withContext(function($ctx2) {return smalltalk.symbolFor("new");
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(model,(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_(smalltalk.symbolFor("new"),result);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_(smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt(["bar", smalltalk.symbolFor("new"), "baz"]),_st("moo").__minus_gt("zoo")]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelModifiesAppropriateValue",{isolator:isolator,model:model,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelReturnsAppropriateValue",
smalltalk.method({
selector: "testNontrivialModelReturnsAppropriateValue",
fn: function (){
var self=this;
var isolator,model,result;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_(smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt(["bar", [(1), [(2), (3)]], "baz"]),_st("moo").__minus_gt("zoo")]));
model=_st(_st((smalltalk.EavModel || EavModel))._new())._getBlock_((function(x){
return smalltalk.withContext(function($ctx2) {return _st(_st(_st(x)._root())._at_("foo"))._at_((2));
}, function($ctx2) {$ctx2.fillBlock({x:x},$ctx1)})}));
_st(isolator)._model_read_(model,(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testNontrivialModelReturnsAppropriateValue",{isolator:isolator,model:model,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelExaminesThenModifiesRoot",
smalltalk.method({
selector: "testRootModelExaminesThenModifiesRoot",
fn: function (){
var self=this;
var isolator,result;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (3)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {return _st(r)._second();
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_([(2), (3)],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelExaminesThenModifiesRoot",{isolator:isolator,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelGetsRootForModification",
smalltalk.method({
selector: "testRootModelGetsRootForModification",
fn: function (){
var self=this;
var isolator,result;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(2), [(1), (0)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_([(2), [(1), (0)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelGetsRootForModification",{isolator:isolator,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
fn: function (){
var self=this;
var isolator,result,newValue;
return smalltalk.withContext(function($ctx1) { result=nil;
newValue=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (3)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {newValue=r;
newValue;
_st(r)._at_put_((1),(4));
return r;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_((2),"bar");
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_((2),"baz");
_st(self)._assert_equals_([(4), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",{isolator:isolator,result:result,newValue:newValue}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndDeeplyIsolatesRoot",
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesRoot",
fn: function (){
var self=this;
var isolator,result,newValue;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (3)]]);
newValue=smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt([(4), (5), (6)])]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {return newValue;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(_st(newValue)._at_("foo"))._at_put_((1),"bar");
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(_st(newValue)._at_("foo"))._at_put_((3),"baz");
_st(self)._assert_equals_(smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndDeeplyIsolatesRoot",{isolator:isolator,result:result,newValue:newValue}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndIsolatesRoot",
smalltalk.method({
selector: "testRootModelModifiesAndIsolatesRoot",
fn: function (){
var self=this;
var isolator,result,newValue;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (3)]]);
newValue=smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt([(4), (5), (6)])]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {return newValue;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_("foo","bar");
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(newValue)._at_put_("foo","baz");
_st(self)._assert_equals_(smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesAndIsolatesRoot",{isolator:isolator,result:result,newValue:newValue}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesRoot",
smalltalk.method({
selector: "testRootModelModifiesRoot",
fn: function (){
var self=this;
var isolator,result;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (3)]]);
_st(isolator)._model_modify_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {return smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt([(4), (5), (6)])]);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_(smalltalk.HashedCollection._fromPairs_([_st("foo").__minus_gt([(4), (5), (6)])]),result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelModifiesRoot",{isolator:isolator,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsDeeplyIsolatedRoot",
smalltalk.method({
selector: "testRootModelReturnsDeeplyIsolatedRoot",
fn: function (){
var self=this;
var isolator,result;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (3)]]);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {return _st(_st(r)._at_((2)))._at_put_((1),(0));
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsDeeplyIsolatedRoot",{isolator:isolator,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsIsolatedRoot",
smalltalk.method({
selector: "testRootModelReturnsIsolatedRoot",
fn: function (){
var self=this;
var isolator,result;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (4)]]);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {return _st(r)._at_put_((2),nil);
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_([(1), [(2), (4)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsIsolatedRoot",{isolator:isolator,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsRoot",
smalltalk.method({
selector: "testRootModelReturnsRoot",
fn: function (){
var self=this;
var isolator,result;
return smalltalk.withContext(function($ctx1) { result=nil;
isolator=_st((smalltalk.Isolator || Isolator))._on_([(1), [(2), (3)]]);
_st(isolator)._model_read_(self["@rootModel"],(function(r){
return smalltalk.withContext(function($ctx2) {result=r;
return result;
}, function($ctx2) {$ctx2.fillBlock({r:r},$ctx1)})}));
_st(self)._assert_equals_([(1), [(2), (3)]],result);
return self}, function($ctx1) {$ctx1.fill(self,"testRootModelReturnsRoot",{isolator:isolator,result:result}, smalltalk.IsolatorTest)})}
}),
smalltalk.IsolatorTest);



