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
"_testNontrivialModelGetsAppropriateValueForModification",
smalltalk.method({
selector: "testNontrivialModelGetsAppropriateValueForModification",
category: 'tests',
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
return self},
args: [],
source: "testNontrivialModelGetsAppropriateValueForModification\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 5)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new\x0a\x09getBlock: [ :x | (x root at: 'foo') at: 2 ];\x0a\x09putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].\x0aisolator model: model modify: [:r|result := r].\x0aself assert: #(1 #(2 5)) equals: result\x0a",
messageSends: ["on:", "->", "getBlock:", "at:", "root", "new", "putBlock:", "at:put:", "model:modify:", "assert:equals:"],
referencedClasses: ["Isolator", "EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelModifiesAppropriateValue",
smalltalk.method({
selector: "testNontrivialModelModifiesAppropriateValue",
category: 'tests',
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
return self},
args: [],
source: "testNontrivialModelModifiesAppropriateValue\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new\x0a\x09getBlock: [ :x | (x root at: 'foo') at: 2 ];\x0a\x09putBlock: [ :x :y | (x root at: 'foo') at: 2 put: y].\x0aisolator model: model modify: [:r|#new].\x0aisolator model: model read: [:r|result := r].\x0aself assert: #new equals: result.\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #{ 'foo' -> #('bar' #new 'baz'). 'moo' -> 'zoo' } equals: result\x0a",
messageSends: ["on:", "->", "getBlock:", "at:", "root", "new", "putBlock:", "at:put:", "model:modify:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator", "EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testNontrivialModelReturnsAppropriateValue",
smalltalk.method({
selector: "testNontrivialModelReturnsAppropriateValue",
category: 'tests',
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
return self},
args: [],
source: "testNontrivialModelReturnsAppropriateValue\x0a| isolator model result |\x0aresult := nil.\x0aisolator := Isolator on: #{ 'foo' -> #('bar' #(1 #(2 3)) 'baz'). 'moo' -> 'zoo' }.\x0amodel := EavModel new getBlock: [ :x | (x root at: 'foo') at: 2 ].\x0aisolator model: model read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result\x0a",
messageSends: ["on:", "->", "getBlock:", "at:", "root", "new", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator", "EavModel"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelExaminesThenModifiesRoot",
smalltalk.method({
selector: "testRootModelExaminesThenModifiesRoot",
category: 'tests',
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
return self},
args: [],
source: "testRootModelExaminesThenModifiesRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|r second].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(2 3) equals: result\x0a",
messageSends: ["on:", "model:modify:", "second", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelGetsRootForModification",
smalltalk.method({
selector: "testRootModelGetsRootForModification",
category: 'tests',
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
return self},
args: [],
source: "testRootModelGetsRootForModification\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(2 #(1 0)).\x0aisolator model: rootModel modify: [:r|result := r].\x0aself assert: #(2 #(1 0)) equals: result\x0a",
messageSends: ["on:", "model:modify:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot",
category: 'tests',
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
return self},
args: [],
source: "testRootModelModifiesAndDeeplyIsolatesInPlaceModifiedRoot\x0a| isolator result newValue |\x0aresult := nil. newValue := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|newValue := r. r at: 1 put: 4. r].\x0anewValue at: 2 put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0anewValue at: 2 put: 'baz'.\x0aself assert: #(4 #(2 3)) equals: result\x0a",
messageSends: ["on:", "model:modify:", "at:put:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndDeeplyIsolatesRoot",
smalltalk.method({
selector: "testRootModelModifiesAndDeeplyIsolatesRoot",
category: 'tests',
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
return self},
args: [],
source: "testRootModelModifiesAndDeeplyIsolatesRoot\x0a| isolator result newValue |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0anewValue := #{'foo'->#(4 5 6)}.\x0aisolator model: rootModel modify: [:r|newValue].\x0a(newValue at: 'foo') at: 1 put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0a(newValue at: 'foo') at: 3 put: 'baz'.\x0aself assert: #{'foo'->#(4 5 6)} equals: result\x0a",
messageSends: ["on:", "->", "model:modify:", "at:put:", "at:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesAndIsolatesRoot",
smalltalk.method({
selector: "testRootModelModifiesAndIsolatesRoot",
category: 'tests',
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
return self},
args: [],
source: "testRootModelModifiesAndIsolatesRoot\x0a| isolator result newValue |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0anewValue := #{'foo'->#(4 5 6)}.\x0aisolator model: rootModel modify: [:r|newValue].\x0anewValue at: 'foo' put: 'bar'.\x0aisolator model: rootModel read: [:r|result := r].\x0anewValue at: 'foo' put: 'baz'.\x0aself assert: #{'foo'->#(4 5 6)} equals: result\x0a",
messageSends: ["on:", "->", "model:modify:", "at:put:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelModifiesRoot",
smalltalk.method({
selector: "testRootModelModifiesRoot",
category: 'tests',
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
return self},
args: [],
source: "testRootModelModifiesRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel modify: [:r|#{'foo'->#(4 5 6)}].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #{'foo'->#(4 5 6)} equals: result\x0a",
messageSends: ["on:", "model:modify:", "->", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);

smalltalk.addMethod(
"_testRootModelReturnsDeeplyIsolatedRoot",
smalltalk.method({
selector: "testRootModelReturnsDeeplyIsolatedRoot",
category: 'tests',
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
return self},
args: [],
source: "testRootModelReturnsDeeplyIsolatedRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel read: [:r|(r at: 2) at: 1 put: 0].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result\x0a",
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
return self},
args: [],
source: "testRootModelReturnsIsolatedRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 4)).\x0aisolator model: rootModel read: [:r|r at: 2 put: nil].\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 4)) equals: result\x0a",
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
var isolator;
var result;
result=nil;
isolator=smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[[(1), [(2), (3)]]]);
smalltalk.send(isolator,"_model_read_",[self["@rootModel"],(function(r){
result=r;
return result;
})]);
smalltalk.send(self,"_assert_equals_",[[(1), [(2), (3)]],result]);
return self},
args: [],
source: "testRootModelReturnsRoot\x0a| isolator result |\x0aresult := nil.\x0aisolator := Isolator on: #(1 #(2 3)).\x0aisolator model: rootModel read: [:r|result := r].\x0aself assert: #(1 #(2 3)) equals: result\x0a",
messageSends: ["on:", "model:read:", "assert:equals:"],
referencedClasses: ["Isolator"]
}),
smalltalk.IsolatorTest);



