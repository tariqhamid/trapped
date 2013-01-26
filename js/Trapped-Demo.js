smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('App', smalltalk.TrappedMWIsolated, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
var obj;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedMWIsolated);
smalltalk.send(self,"_dispatcher_",[smalltalk.send((smalltalk.TrappedDumbDispatcher || TrappedDumbDispatcher),"_new",[])]);
obj=smalltalk.HashedCollection._fromPairs_([smalltalk.send("title","__minus_gt",["To-Do List"])]);
smalltalk.send(self,"_model_",[obj]);
smalltalk.send((function(){
smalltalk.send(obj,"_at_put_",["items",["hello", "world"]]);
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[[]]);
}),"_valueWithTimeout_",[(2000)]);
return self},
args: [],
source: "initialize\x0a\x09| obj |\x0a\x09super initialize.\x0a    self dispatcher: TrappedDumbDispatcher new.\x0a    obj := #{'title' -> 'To-Do List'}.\x0a    self model: obj.\x0a    [ obj at: 'items' put: #('hello' 'world'). self dispatcher changed: #() ] valueWithTimeout: 2000\x0a",
messageSends: ["initialize", "dispatcher:", "new", "->", "model:", "valueWithTimeout:", "at:put:", "changed:", "dispatcher"],
referencedClasses: ["TrappedDumbDispatcher"]
}),
smalltalk.App);



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
var $1,$2;
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trapShow_",[["title"]]);
smalltalk.send(smalltalk.send(html,"_div",[]),"_trap_toggle_ifNotPresent_",[["items"],(function(){
smalltalk.send(smalltalk.send(html,"_p",[]),"_with_",[(function(){
smalltalk.send(smalltalk.send(html,"_span",[]),"_trapShow_",[[smalltalk.symbolFor("size")]]);
return smalltalk.send(html,"_with_",[" item(s)."]);
})]);
return smalltalk.send(smalltalk.send(html,"_form",[]),"_with_",[(function(){
return smalltalk.send(smalltalk.send(html,"_ul",[]),"_trapIter_tag_do_",[[],smalltalk.symbolFor("li"),(function(each){
$1=smalltalk.send(html,"_input",[]);
smalltalk.send($1,"_type_",["checkbox"]);
$2=smalltalk.send($1,"_at_put_",["checked",true]);
$2;
return smalltalk.send(html,"_with_",[each]);
})]);
})]);
}),(function(){
return smalltalk.send(html,"_with_",["Loading ..."]);
})]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html h2 trapShow: #('title').\x0a    html div trap: #('items') toggle: [\x0a        html p with: [ html span trapShow: #(#size). html with: ' item(s).' ].\x0a\x09\x09html form with: [ html ul trapIter: #() tag: #li do: [ :each |\x0a            html input\x0a                type: 'checkbox';\x0a                at: 'checked' put: true.\x0a            html with: each\x0a        ]]\x0a    ] ifNotPresent: [ html with: 'Loading ...' ]",
messageSends: ["trapShow:", "h2", "trap:toggle:ifNotPresent:", "with:", "span", "p", "trapIter:tag:do:", "type:", "input", "at:put:", "ul", "form", "div"],
referencedClasses: []
}),
smalltalk.AppView);



smalltalk.addClass('TrappedDumbDispatcher', smalltalk.TrappedDispatcher, ['queue'], 'Trapped-Demo');
smalltalk.addMethod(
"_add_",
smalltalk.method({
selector: "add:",
category: 'accessing',
fn: function (aSubscription){
var self=this;
smalltalk.send(self["@queue"],"_add_",[aSubscription]);
return self},
args: ["aSubscription"],
source: "add: aSubscription\x0a\x09queue add: aSubscription.\x0a",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.TrappedDumbDispatcher);

smalltalk.addMethod(
"_clean",
smalltalk.method({
selector: "clean",
category: 'bookkeeping',
fn: function (){
var self=this;
self["@queue"]=smalltalk.send(self["@queue"],"_select_",[(function(each){
return smalltalk.send(each,"_isEnabled",[]);
})]);
return self},
args: [],
source: "clean\x0a\x09queue := queue select: [ :each | each isEnabled ]",
messageSends: ["select:", "isEnabled"],
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



