smalltalk.addPackage('Trapped-Frontend', {});
smalltalk.addClass('TrappedFly', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[]);
return $1;
}
}),
smalltalk.TrappedFly);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_register_name_",[self,smalltalk.send(self,"_name",[])]);
return self}
}),
smalltalk.TrappedFly);


smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_new",[]),"_start",[]);
return self}
}),
smalltalk.TrappedFly.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.Object, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
"_append_",
smalltalk.method({
selector: "append:",
fn: function (anArray){
var self=this;
self["@elements"]=smalltalk.send(self["@elements"],"__comma",[anArray]);
return self}
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return self["@elements"];
}
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
self["@elements"]=[];
return self}
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_with_do_",
smalltalk.method({
selector: "with:do:",
fn: function (anArray,aBlock){
var self=this;
var old;
old=self["@elements"];
smalltalk.send((function(){
smalltalk.send(self,"_append_",[anArray]);
return smalltalk.send(aBlock,"_value",[]);
}),"_ensure_",[(function(){
self["@elements"]=old;
return self["@elements"];
})]);
return self}
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
}
}),
smalltalk.TrappedSingleton);


smalltalk.TrappedSingleton.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
var $1;
if(($receiver = self["@current"]) == nil || $receiver == undefined){
self["@current"]=smalltalk.send(self,"_new",[]);
$1=self["@current"];
} else {
$1=self["@current"];
};
return $1;
}
}),
smalltalk.TrappedSingleton.klass);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_start",[]);
return self}
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
"_byName_",
smalltalk.method({
selector: "byName:",
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self["@registry"],"_at_",[aString]);
return $1;
}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedSingleton);
self["@registry"]=smalltalk.HashedCollection._fromPairs_([]);
return self}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_name_",
smalltalk.method({
selector: "register:name:",
fn: function (aFly,aString){
var self=this;
smalltalk.send(self["@registry"],"_at_put_",[aString,aFly]);
return self}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send("[data-trap]","_asJQuery",[]),"_each_",[(function(index,elem){
var trap;
var jq;
var viewName;
var modelName;
var tokens;
jq=smalltalk.send(elem,"_asJQuery",[]);
jq;
trap=smalltalk.send(jq,"_attr_",["data-trap"]);
trap;
tokens=smalltalk.send(trap,"_tokenize_",[":"]);
tokens;
viewName=smalltalk.send(tokens,"_first",[]);
viewName;
modelName=smalltalk.send(tokens,"_second",[]);
modelName;
return smalltalk.send((smalltalk.Trapped || Trapped),"_with_do_",[[modelName],(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_at_",[viewName]),"_new",[]),"_appendToJQuery_",[jq]);
})]);
})]);
return self}
}),
smalltalk.Trapped);


smalltalk.Trapped.klass.iVarNames = ['path'];
smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
self["@path"]=smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_new",[]);
return self}
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
fn: function (){
var self=this;
return self["@path"];
}
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
"_with_do_",
smalltalk.method({
selector: "with:do:",
fn: function (anArray,aBlock){
var self=this;
smalltalk.send(self["@path"],"_with_do_",[anArray,aBlock]);
return self}
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_root",[]),"_empty",[]);
smalltalk.send(html,"_with_",[smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[]),"__comma",[": "]),"__comma",[smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_path",[]),"_elements",[])])]);
return self}
}),
smalltalk.TrappedView);



