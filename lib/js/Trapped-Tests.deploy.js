smalltalk.addPackage('Trapped-Tests', {});
smalltalk.addClass('IsolatorTest', smalltalk.TestCase, ['rootModel'], 'Trapped-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
var $1,$2;
$1=smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]);
smalltalk.send($1,"_getBlock_",[(function(x){
return smalltalk.send(x,"_root",[]);
})]);
$2=smalltalk.send($1,"_putBlock_",[(function(x,y){
return smalltalk.send(x,"_root_",[y]);
})]);
self["@rootModel"]=$2;
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelGetsAppropriateValueForModification",
smalltalk.method({
selector: "testNontrivialModelGetsAppropriateValueForModification",
fn: function (){
var self=this;
var $1,$2;
var isolator;
var model;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[["bar", [(1), [(2), (5)]], "baz"]]),smalltalk.send("moo","__minus_gt",["zoo"])])]);
$1=smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]);
smalltalk.send($1,"_getBlock_",[(function(x){
return smalltalk.send(smalltalk.send(smalltalk.send(x,"_root",[]),"_at_",["foo"]),"_at_",[(2)]);
})]);
$2=smalltalk.send($1,"_putBlock_",[(function(x,y){
return smalltalk.send(smalltalk.send(smalltalk.send(x,"_root",[]),"_at_",["foo"]),"_at_put_",[(2),y]);
})]);
model=$2;
smalltalk.send(isolator,"_model_modify_",[model,(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (5)]],result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelModifiesAppropriateValue",
smalltalk.method({
selector: "testNontrivialModelModifiesAppropriateValue",
fn: function (){
var self=this;
var $1,$2;
var isolator;
var model;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[["bar", [(1), [(2), (3)]], "baz"]]),smalltalk.send("moo","__minus_gt",["zoo"])])]);
$1=smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]);
smalltalk.send($1,"_getBlock_",[(function(x){
return smalltalk.send(smalltalk.send(smalltalk.send(x,"_root",[]),"_at_",["foo"]),"_at_",[(2)]);
})]);
$2=smalltalk.send($1,"_putBlock_",[(function(x,y){
return smalltalk.send(smalltalk.send(smalltalk.send(x,"_root",[]),"_at_",["foo"]),"_at_put_",[(2),y]);
})]);
model=$2;
smalltalk.send(isolator,"_model_modify_",[model,(function(r){
return smalltalk.symbolFor("new");
})]);
smalltalk.send(isolator,"_model_read_",[model,(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[smalltalk.symbolFor("new"),result]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[["bar", smalltalk.symbolFor("new"), "baz"]]),smalltalk.send("moo","__minus_gt",["zoo"])]),result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelReturnsAppropriateValue",
smalltalk.method({
selector: "testNontrivialModelReturnsAppropriateValue",
fn: function (){
var self=this;
var isolator;
var model;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[["bar", [(1), [(2), (3)]], "baz"]]),smalltalk.send("moo","__minus_gt",["zoo"])])]);
model=smalltalk.send(smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]),"_getBlock_",[(function(x){
return smalltalk.send(smalltalk.send(smalltalk.send(x,"_root",[]),"_at_",["foo"]),"_at_",[(2)]);
})]);
smalltalk.send(isolator,"_model_read_",[model,(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (3)]],result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelExaminesThenModifiesRoot",
smalltalk.method({
selector: "testRootModelExaminesThenModifiesRoot",
fn: function (){
var self=this;
var isolator;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(isolator,"_model_modify_",[self["@rootModel"],(function(r){
return smalltalk.send(r,"_second",[]);
})]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(2), (3)],result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelGetsRootForModification",
smalltalk.method({
selector: "testRootModelGetsRootForModification",
fn: function (){
var self=this;
var isolator;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(2), [(1), (0)]]]);
smalltalk.send(isolator,"_model_modify_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(2), [(1), (0)]],result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
fn: function (){
var self=this;
var isolator;
var result;
var newValue;
result=nil;
newValue=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(isolator,"_model_modify_",[self["@rootModel"],(function(r){
newValue=r;
newValue;
smalltalk.send(r,"_at_put_",[(1),(4)]);
return r;
})]);
smalltalk.send(newValue,"_at_put_",[(2),"bar"]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(newValue,"_at_put_",[(2),"baz"]);
smalltalk.send(self,"_assert_equals_",[[(4), [(2), (3)]],result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndDeeplyIsolatesRoot",
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesRoot",
fn: function (){
var self=this;
var isolator;
var result;
var newValue;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
newValue=smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[[(4), (5), (6)]])]);
smalltalk.send(isolator,"_model_modify_",[self["@rootModel"],(function(r){
return newValue;
})]);
smalltalk.send(smalltalk.send(newValue,"_at_",["foo"]),"_at_put_",[(1),"bar"]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(smalltalk.send(newValue,"_at_",["foo"]),"_at_put_",[(3),"baz"]);
smalltalk.send(self,"_assert_equals_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[[(4), (5), (6)]])]),result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndIsolatesRoot",
smalltalk.method({
selector: "testRootModelModifiesAndIsolatesRoot",
fn: function (){
var self=this;
var isolator;
var result;
var newValue;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
newValue=smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[[(4), (5), (6)]])]);
smalltalk.send(isolator,"_model_modify_",[self["@rootModel"],(function(r){
return newValue;
})]);
smalltalk.send(newValue,"_at_put_",["foo","bar"]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(newValue,"_at_put_",["foo","baz"]);
smalltalk.send(self,"_assert_equals_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[[(4), (5), (6)]])]),result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesRoot",
smalltalk.method({
selector: "testRootModelModifiesRoot",
fn: function (){
var self=this;
var isolator;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(isolator,"_model_modify_",[self["@rootModel"],(function(r){
return smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[[(4), (5), (6)]])]);
})]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[[(4), (5), (6)]])]),result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsDeeplyIsolatedRoot",
smalltalk.method({
selector: "testRootModelReturnsDeeplyIsolatedRoot",
fn: function (){
var self=this;
var isolator;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
return smalltalk.send(smalltalk.send(r,"_at_",[(2)]),"_at_put_",[(1),(0)]);
})]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (3)]],result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsIsolatedRoot",
smalltalk.method({
selector: "testRootModelReturnsIsolatedRoot",
fn: function (){
var self=this;
var isolator;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (4)]]]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
return smalltalk.send(r,"_at_put_",[(2),nil]);
})]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (4)]],result]);
return self}
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsRoot",
smalltalk.method({
selector: "testRootModelReturnsRoot",
fn: function (){
var self=this;
var isolator;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (3)]],result]);
return self}
}),
smalltalk.IsolatorTest);



