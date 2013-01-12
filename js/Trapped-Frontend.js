smalltalk.addPackage('Trapped-Frontend', {});
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
self["@registry"]=smalltalk.HashedCollection._fromPairs_([]);
return self},
args: [],
source: "initialize\x0a\x09registry := #{}.",
messageSends: [],
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
var $1,$2;
smalltalk.send(smalltalk.send("[data-trap]","_asJQuery",[]),"_each_",[(function(index,elem){
var trap;
var viewName;
var modelName;
var tokens;
var model;
var view;
trap=smalltalk.send(smalltalk.send(jQuery,"_value_",[elem]),"_attr_",["data-trap"]);
trap;
tokens=smalltalk.send(trap,"_tokenize_",[":"]);
tokens;
viewName=smalltalk.send(tokens,"_first",[]);
viewName;
modelName=smalltalk.send(tokens,"_second",[]);
modelName;
model=smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_byName_",[modelName]);
model;
$1=smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_at_",[viewName]),"_new",[]);
smalltalk.send($1,"_startOn_",[elem]);
smalltalk.send($1,"_observe_",[model]);
$2=smalltalk.send($1,"_yourself",[]);
view=$2;
return view;
})]);
return self},
args: [],
source: "start\x0a\x09'[data-trap]' asJQuery each: [ :index :elem |\x0a    \x09| trap viewName modelName tokens model view |\x0a        trap := (jQuery value: elem) attr: 'data-trap'.\x0a        tokens := trap tokenize: ':'.\x0a        viewName := tokens first.\x0a        modelName := tokens second.\x0a       \x09model := Trapped current byName: modelName.\x0a        view := (Smalltalk current at: viewName) new\x0a        \x09startOn: elem;\x0a            observe: model;\x0a            yourself.\x0a    ]",
messageSends: ["each:", "attr:", "value:", "tokenize:", "first", "second", "byName:", "current", "startOn:", "new", "at:", "observe:", "yourself", "asJQuery"],
referencedClasses: ["Trapped", "Smalltalk"]
}),
smalltalk.Trapped);



smalltalk.addClass('TrappedFly', smalltalk.TrappedSingleton, [], 'Trapped-Frontend');
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



smalltalk.addClass('TrappedView', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_observe_",
smalltalk.method({
selector: "observe:",
category: 'not yet classified',
fn: function (aFly){
var self=this;
return self},
args: ["aFly"],
source: "observe: aFly",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedView);

smalltalk.addMethod(
"_startOn_",
smalltalk.method({
selector: "startOn:",
category: 'not yet classified',
fn: function (aHTMLElement){
var self=this;
smalltalk.send(smalltalk.send(jQuery,"_value_",[aHTMLElement]),"_html_",[smalltalk.send(smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[]),"__comma",[": contents"])]);
return self},
args: ["aHTMLElement"],
source: "startOn: aHTMLElement\x0a\x09(jQuery value: aHTMLElement) html: self class name, ': contents'",
messageSends: ["html:", ",", "name", "class", "value:"],
referencedClasses: []
}),
smalltalk.TrappedView);



