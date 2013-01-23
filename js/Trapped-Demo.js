smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('App', smalltalk.TrappedFly, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_payload_",[smalltalk.HashedCollection._fromPairs_([smalltalk.send("items","__minus_gt",[["hello", "world"]])])]);
return self},
args: [],
source: "initialize\x0a\x09self payload: #{'items'->#('hello' 'world')}",
messageSends: ["payload:", "->"],
referencedClasses: []
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
smalltalk.send(html,"_h2_",["To-Do List"]);
smalltalk.send(smalltalk.send(html,"_p",[]),"_trapShow_",[["items"]]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html h2: 'To-Do List'.\x0a\x09html p trapShow: #('items')",
messageSends: ["h2:", "trapShow:", "p"],
referencedClasses: []
}),
smalltalk.AppView);



smalltalk.addClass('Name', smalltalk.TrappedFly, [], 'Trapped-Demo');
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_payload_",["To-Do List"]);
return self},
args: [],
source: "initialize\x0a\x09self payload: 'To-Do List'",
messageSends: ["payload:"],
referencedClasses: []
}),
smalltalk.Name);



smalltalk.addClass('NameView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_root",[]),"_trapShow_",[[]]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html root trapShow: #()",
messageSends: ["trapShow:", "root"],
referencedClasses: []
}),
smalltalk.NameView);



