smalltalk.addPackage('Trapped-Frontend', {});
smalltalk.addClass('TrappedFly', smalltalk.Object, ['payload'], 'Trapped-Frontend');
smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'action',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[]);
return $1;
},
args: [],
source: "name\x0a\x09^ self class name",
messageSends: ["name", "class"],
referencedClasses: []
}),
smalltalk.TrappedFly);

smalltalk.addMethod(
"_payload",
smalltalk.method({
selector: "payload",
category: 'accessing',
fn: function (){
var self=this;
return self["@payload"];
},
args: [],
source: "payload\x0a\x09^payload",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedFly);

smalltalk.addMethod(
"_payload_",
smalltalk.method({
selector: "payload:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@payload"]=anObject;
return self},
args: ["anObject"],
source: "payload: anObject\x0a\x09payload := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedFly);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_register_name_",[self,smalltalk.send(self,"_name",[])]);
return self},
args: [],
source: "start\x0a\x09Trapped current register: self name: self name",
messageSends: ["register:name:", "name", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.TrappedFly);


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
smalltalk.TrappedFly.klass);


smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'action',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
},
args: [],
source: "start\x0a\x09^ self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TrappedSingleton);


smalltalk.TrappedSingleton.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
category: 'accessing',
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
},
args: [],
source: "current\x0a\x09^ current ifNil: [ current := self new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'action',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_start",[]);
return self},
args: [],
source: "start\x0a\x09self current start",
messageSends: ["start", "current"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
"_byName_",
smalltalk.method({
selector: "byName:",
category: 'accessing',
fn: function (aString){
var self=this;
var $1;
$1=smalltalk.send(self["@registry"],"_at_",[aString]);
return $1;
},
args: ["aString"],
source: "byName: aString\x0a\x09^ registry at: aString",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.TrappedSingleton);
self["@registry"]=smalltalk.HashedCollection._fromPairs_([]);
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
category: 'accessing',
fn: function (path,aBlock){
var self=this;
var model;
model=smalltalk.send(smalltalk.send(path,"_allButFirst",[]),"_inject_into_",[smalltalk.send(smalltalk.send(self,"_byName_",[smalltalk.send(path,"_first",[])]),"_payload",[]),(function(soFar,segment){
return smalltalk.send(soFar,"_at_",[segment]);
})]);
smalltalk.send(aBlock,"_value_",[model]);
return self},
args: ["path", "aBlock"],
source: "read: path do: aBlock\x0a\x09| model |\x0a    model := path allButFirst\x0a    \x09inject: (self byName: path first) payload\x0a        into: [ :soFar :segment | soFar at: segment ].\x0a\x09aBlock value: model.",
messageSends: ["inject:into:", "payload", "byName:", "first", "at:", "allButFirst", "value:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_name_",
smalltalk.method({
selector: "register:name:",
category: 'accessing',
fn: function (aFly,aString){
var self=this;
smalltalk.send(self["@registry"],"_at_put_",[aString,aFly]);
return self},
args: ["aFly", "aString"],
source: "register: aFly name: aString\x0a\x09registry at: aString put: aFly",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'action',
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
return smalltalk.send([modelName],"_trapDescend_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_at_",[viewName]),"_new",[]),"_appendToJQuery_",[jq]);
})]);
})]);
return self},
args: [],
source: "start\x0a\x09'[data-trap]' asJQuery each: [ :index :elem |\x0a    \x09| trap jq viewName modelName tokens |\x0a        jq := elem asJQuery.\x0a        trap := jq attr: 'data-trap'.\x0a        tokens := trap tokenize: ':'.\x0a        viewName := tokens first.\x0a        modelName := tokens second.\x0a        { modelName } trapDescend: [(Smalltalk current at: viewName) new appendToJQuery: jq].\x0a    ]",
messageSends: ["each:", "asJQuery", "attr:", "tokenize:", "first", "second", "trapDescend:", "appendToJQuery:", "new", "at:", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.Trapped);


smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_elements",[]);
return $1;
},
args: [],
source: "path\x0a\x09^TrappedPathStack current elements",
messageSends: ["elements", "current"],
referencedClasses: ["TrappedPathStack"]
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
"_append_",
smalltalk.method({
selector: "append:",
category: 'descending',
fn: function (anArray){
var self=this;
self["@elements"]=smalltalk.send(self["@elements"],"__comma",[anArray]);
return self},
args: ["anArray"],
source: "append: anArray\x0a    elements := elements, anArray",
messageSends: [","],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return self["@elements"];
},
args: [],
source: "elements\x0a\x09^elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
self["@elements"]=[];
return self},
args: [],
source: "initialize\x0a\x09elements := #().",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_with_do_",
smalltalk.method({
selector: "with:do:",
category: 'descending',
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
return self},
args: ["anArray", "aBlock"],
source: "with: anArray do: aBlock\x0a\x09| old |\x0a    old := elements.\x0a    [ self append: anArray.\x0a\x09aBlock value ] ensure: [ elements := old ]",
messageSends: ["ensure:", "append:", "value"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);



smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
category: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_with_do_",[self,aBlock]);
return self},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09TrappedPathStack current with: self do: aBlock",
messageSends: ["with:do:", "current"],
referencedClasses: ["TrappedPathStack"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
category: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_with_do_",[self,aBlock]);
return self},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09TrappedPathStack current with: self do: aBlock",
messageSends: ["with:do:", "current"],
referencedClasses: ["TrappedPathStack"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_trap_read_",
smalltalk.method({
selector: "trap:read:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
smalltalk.send(path,"_trapDescend_",[(function(){
var actual;
actual=smalltalk.send((smalltalk.Trapped || Trapped),"_path",[]);
actual;
return smalltalk.send((function(){
return smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_read_do_",[actual,(function(model){
return smalltalk.send(aBlock,"_value_value_",[self,model]);
})]);
}),"_fork",[]);
})]);
return self},
args: ["path", "aBlock"],
source: "trap: path read: aBlock\x0a\x09path trapDescend: [ | actual |\x0a    \x09actual := Trapped path.\x0a       \x09\x22TODO register for later\x22\x0a        [ Trapped current read: actual do: [ :model |\x0a        \x09aBlock value: self value: model\x0a    \x09]] fork\x0a    ]",
messageSends: ["trapDescend:", "path", "fork", "read:do:", "value:value:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trapShow_",
smalltalk.method({
selector: "trapShow:",
category: '*Trapped-Frontend',
fn: function (path){
var self=this;
var $1;
smalltalk.send(self,"_trap_read_",[path,(function(brush,model){
smalltalk.send(brush,"_empty",[]);
$1=smalltalk.send(brush,"_with_",[model]);
return $1;
})]);
return self},
args: ["path"],
source: "trapShow: path\x0a\x09self trap: path read: [ :brush :model | brush empty; with: model ]",
messageSends: ["trap:read:", "empty", "with:"],
referencedClasses: []
}),
smalltalk.TagBrush);

