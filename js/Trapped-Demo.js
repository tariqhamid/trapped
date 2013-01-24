smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trapShow_",[["title"]]);
smalltalk.send(smalltalk.send(html,"_p",[]),"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_span",[]),"_trapShow_",[["items", smalltalk.symbolFor("size")]]);
return smalltalk.send(html,"_with_",[" item(s)."]);
})]);
smalltalk.send(smalltalk.send(html,"_p",[]),"_trapShow_",[["items"]]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html h2 trapShow: #('title').\x0a    html p with: [ html span trapShow: #('items' #size). html with: ' item(s).' ].\x0a\x09html p trapShow: #('items')",
messageSends: ["trapShow:", "h2", "with:", "span", "p"],
referencedClasses: []
}),
smalltalk.AppView);



smalltalk.addClass('TrappedDumbDispatcher', smalltalk.TrappedDispatcher, ['queue'], 'Trapped-Demo');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (aTriplet){
var self=this;
smalltalk.send(self["@queue"],"_add_",[aTriplet]);
smalltalk.send(self,"_dirty_",[smalltalk.send(aTriplet,"_first",[])]);
return self},
args: ["aTriplet"],
source: "add: aTriplet\x0a\x09queue add: aTriplet.\x0a    self dirty: aTriplet first\x0a\x09",
messageSends: ["add:", "dirty:", "first"],
referencedClasses: []
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'enumeration',
fn: function (aBlock){
var self=this;
smalltalk.send(self["@queue"],"_do_",[aBlock]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09queue do: aBlock",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
self["@queue"]=smalltalk.send((smalltalk.OrderedCollection || OrderedCollection),"_new",[]);
return self},
args: [],
source: "initialize\x0a\x09queue := OrderedCollection new",
messageSends: ["new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TrappedDumbDispatcher);



smalltalk.addClass('TrappedPlainModel', smalltalk.TrappedModelWrapper, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedModelWrapper);
smalltalk.send(self,"_dispatcher_",[smalltalk.send((smalltalk.TrappedDumbDispatcher || TrappedDumbDispatcher),"_new",[])]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a    self dispatcher: TrappedDumbDispatcher new",
messageSends: ["initialize", "dispatcher:", "new"],
referencedClasses: ["TrappedDumbDispatcher"]
}),
smalltalk.TrappedPlainModel);

smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
var data;
var newValue;
data=smalltalk.send(smalltalk.send(path,"_allButLast",[]),"_asTrapPathOn_",[smalltalk.send(self,"_payload",[])]);
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send([smalltalk.send(path,"_last",[])],"_asTrapPathOn_",[data])]);
smalltalk.send((function(){
return smalltalk.send(smalltalk.send(path,"_last",[]),"_reverseTrapAt_put_",[data,newValue]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self},
args: ["path", "aBlock"],
source: "modify: path do: aBlock\x0a\x09| data newValue |\x0a    data := path allButLast asTrapPathOn: self payload.\x0a\x09newValue := aBlock value: ({ path last } asTrapPathOn: data).\x0a    [ path last reverseTrapAt: data put: newValue ] ensure: [ self dispatcher changed: path ]",
messageSends: ["asTrapPathOn:", "payload", "allButLast", "value:", "last", "ensure:", "changed:", "dispatcher", "reverseTrapAt:put:"],
referencedClasses: []
}),
smalltalk.TrappedPlainModel);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
var data;
data=smalltalk.send(path,"_asTrapPathOn_",[smalltalk.send(self,"_payload",[])]);
smalltalk.send(aBlock,"_value_",[data]);
return self},
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a\x09| data |\x0a    data := path asTrapPathOn: self payload.\x0a\x09aBlock value: data.",
messageSends: ["asTrapPathOn:", "payload", "value:"],
referencedClasses: []
}),
smalltalk.TrappedPlainModel);


smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_start",[]);
return self},
args: [],
source: "start\x0a\x09self new start",
messageSends: ["start", "new"],
referencedClasses: []
}),
smalltalk.TrappedPlainModel.klass);


smalltalk.addClass('App', smalltalk.TrappedPlainModel, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedPlainModel);
smalltalk.send(self,"_payload_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("items","__minus_gt",[["hello", "world"]]),smalltalk.send("title","__minus_gt",["To-Do List"])])]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self payload: #{'items'->#('hello' 'world'). 'title' -> 'To-Do List'}",
messageSends: ["initialize", "payload:", "->"],
referencedClasses: []
}),
smalltalk.App);



