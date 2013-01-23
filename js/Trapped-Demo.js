smalltalk.addPackage('Trapped-Demo', {});
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



smalltalk.addClass('AppView', smalltalk.Widget, [], 'Trapped-Demo');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_h2",[]),"_trapShow_",[["title"]]);
smalltalk.send(smalltalk.send(html,"_p",[]),"_trapShow_",[["items"]]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html h2 trapShow: #('title').\x0a\x09html p trapShow: #('items')",
messageSends: ["trapShow:", "h2", "p"],
referencedClasses: []
}),
smalltalk.AppView);



