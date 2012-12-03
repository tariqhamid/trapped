smalltalk.addPackage('Trapped-Tests', {});
smalltalk.addClass('IsolatorTest', smalltalk.TestCase, ['rootModel'], 'Trapped-Tests');
smalltalk.addMethod(
"_setUp",
smalltalk.method({
selector: "setUp",
category: 'running',
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
return self},
args: [],
source: "setUp\x0a\x0arootModel := EavModel new\x0a\x09getBlock: [:x | x root];\x0a    putBlock: [:x :y | x root: y].\x0a",
messageSends: ["getBlock:", "root", "new", "putBlock:", "root:"],
referencedClasses: ["EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelReturnsAppropriateValue",
smalltalk.method({
selector: "testNontrivialModelReturnsAppropriateValue",
category: 'tests',
fn: function (){
var self=this;
var bb;
var model;
var result;
bb=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("foo","__minus_gt",[["bar", [(1), [(2), (3)]], "baz"]]),smalltalk.send("moo","__minus_gt",["zoo"])])]);
model=smalltalk.send(smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]),"_getBlock_",[(function(x){
return smalltalk.send(smalltalk.send(smalltalk.send(x,"_root",[]),"_at_",["foo"]),"_at_",[(2)]);
})]);
smalltalk.send(bb,"_model_read_",[model,(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (3)]],result]);
return self},
args: [],
source: "testNontrivialModelReturnsAppropriateValue\x0a| bb model result |\x0abb := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new getBlock: [ :x | (x root at: 'foo') at: 2 ].\x0abb model: model read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result\x0a",
messageSends: ["on:", "->", "getBlock:", "at:", "root", "new", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator", "EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsDeeplyIsolatedRoot",
smalltalk.method({
selector: "testRootModelReturnsDeeplyIsolatedRoot",
category: 'tests',
fn: function (){
var self=this;
var bb;
var result;
bb=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(bb,"_model_read_",[self["@rootModel"],(function(r){
return smalltalk.send(smalltalk.send(r,"_at_",[(2)]),"_at_put_",[(1),(0)]);
})]);
smalltalk.send(bb,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (3)]],result]);
return self},
args: [],
source: "testRootModelReturnsDeeplyIsolatedRoot\x0a| bb result |\x0abb := Isolator on: #(1 #(2 3)).\x0abb model: rootModel read: [:r|(r at: 2) at: 1 put: 0].\x0abb model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result\x0a",
messageSends: ["on:", "model:read:", "at:put:", "at:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsIsolatedRoot",
smalltalk.method({
selector: "testRootModelReturnsIsolatedRoot",
category: 'tests',
fn: function (){
var self=this;
var bb;
var result;
bb=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (4)]]]);
smalltalk.send(bb,"_model_read_",[self["@rootModel"],(function(r){
return smalltalk.send(r,"_at_put_",[(2),nil]);
})]);
smalltalk.send(bb,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (4)]],result]);
return self},
args: [],
source: "testRootModelReturnsIsolatedRoot\x0a| bb result |\x0abb := Isolator on: #(1 #(2 4)).\x0abb model: rootModel read: [:r|r at: 2 put: nil].\x0abb model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 4)) equals: result\x0a",
messageSends: ["on:", "model:read:", "at:put:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsRoot",
smalltalk.method({
selector: "testRootModelReturnsRoot",
category: 'tests',
fn: function (){
var self=this;
var bb;
var result;
bb=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(bb,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (3)]],result]);
return self},
args: [],
source: "testRootModelReturnsRoot\x0a| bb result |\x0abb := Isolator on: #(1 #(2 3)).\x0abb model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result\x0a",
messageSends: ["on:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);



