smalltalk.addPackage('Trapped-Demo', {});
smalltalk.addClass('App', smalltalk.TrappedFly, [], 'Trapped-Demo');


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



