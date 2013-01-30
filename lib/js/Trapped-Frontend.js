smalltalk.addPackage('Trapped-Frontend', {});
smalltalk.addClass('TrappedBinder', smalltalk.Object, ['brush'], 'Trapped-Frontend');
smalltalk.addMethod(
"_brush_",
smalltalk.method({
selector: "brush:",
category: 'accessing',
fn: function (aTagBrush){
var self=this;
self["@brush"]=aTagBrush;
return self},
args: ["aTagBrush"],
source: "brush: aTagBrush\x0a\x09brush := aTagBrush",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
category: 'action',
fn: function (path){
var self=this;
smalltalk.send(self["@brush"],"_trap_read_",[path,smalltalk.send(self,"_showBlock",[])]);
return self},
args: ["path"],
source: "installFor: path\x0a\x09brush trap: path read: self showBlock",
messageSends: ["trap:read:", "showBlock"],
referencedClasses: []
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_prim_",
smalltalk.method({
selector: "prim:",
category: 'converting',
fn: function (anObject){
var self=this;
return anObject.valueOf();
;
return self},
args: ["anObject"],
source: "prim: anObject\x0a\x09<return anObject.valueOf()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
category: 'action',
fn: function (){
var self=this;
var $3,$2,$1;
$1=(function(model){
smalltalk.send(self["@brush"],"_empty",[]);
if(($receiver = model) == nil || $receiver == undefined){
$3=(function(){
});
} else {
$3=model;
};
$2=smalltalk.send(self["@brush"],"_with_",[$3]);
return $2;
});
return $1;
},
args: [],
source: "showBlock\x0a\x09^[ :model | brush empty; with: (model ifNil: [[]]) ]",
messageSends: ["empty", "with:", "ifNil:"],
referencedClasses: []
}),
smalltalk.TrappedBinder);



smalltalk.addClass('TrappedCheckedBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
category: 'action',
fn: function (path){
var self=this;
smalltalk.send(self,"_installFor_",[path],smalltalk.TrappedBinder);
smalltalk.send(path,"_trapDescend_",[(function(snap){
return smalltalk.send(self["@brush"],"_onChange_",[(function(){
return smalltalk.send(snap,"_modify_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(self["@brush"],"_asJQuery",[]),"_attr_",["checked"]),"_notNil",[]);
})]);
})]);
})]);
return self},
args: ["path"],
source: "installFor: path\x0a\x09super installFor: path.\x0a    path trapDescend: [ :snap |\x0a\x09    brush onChange: [ snap modify: [\x0a            (brush asJQuery attr: 'checked') notNil\x0a        ]]\x0a    ]",
messageSends: ["installFor:", "trapDescend:", "onChange:", "modify:", "notNil", "attr:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TrappedCheckedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
category: 'action',
fn: function (){
var self=this;
var $1;
$1=(function(model){
return smalltalk.send(smalltalk.send(self["@brush"],"_asJQuery",[]),"_attr_put_",["checked",smalltalk.send(model,"_ifNotNil_ifNil_",[(function(){
return smalltalk.send(self,"_prim_",[model]);
}),(function(){
return false;
})])]);
});
return $1;
},
args: [],
source: "showBlock\x0a\x09^[ :model | brush asJQuery attr: 'checked' put: (model ifNotNil: [ self prim: model ] ifNil: [ false ]) ]",
messageSends: ["attr:put:", "ifNotNil:ifNil:", "prim:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TrappedCheckedBinder);



smalltalk.addClass('TrappedValBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
category: 'action',
fn: function (path){
var self=this;
smalltalk.send(self,"_installFor_",[path],smalltalk.TrappedBinder);
smalltalk.send(path,"_trapDescend_",[(function(snap){
return smalltalk.send(self["@brush"],"_onChange_",[(function(){
return smalltalk.send(snap,"_modify_",[(function(){
return smalltalk.send(smalltalk.send(self["@brush"],"_asJQuery",[]),"_val",[]);
})]);
})]);
})]);
return self},
args: ["path"],
source: "installFor: path\x0a\x09super installFor: path.\x0a    path trapDescend: [ :snap |\x0a\x09    brush onChange: [ snap modify: [\x0a            brush asJQuery val\x0a        ]]\x0a    ]",
messageSends: ["installFor:", "trapDescend:", "onChange:", "modify:", "val", "asJQuery"],
referencedClasses: []
}),
smalltalk.TrappedValBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
category: 'action',
fn: function (){
var self=this;
var $1;
$1=(function(model){
return smalltalk.send(smalltalk.send(self["@brush"],"_asJQuery",[]),"_val_",[smalltalk.send(model,"_ifNotNil_ifNil_",[(function(){
return smalltalk.send(self,"_prim_",[model]);
}),(function(){
return (function(){
});
})])]);
});
return $1;
},
args: [],
source: "showBlock\x0a\x09^[ :model | brush asJQuery val: (model ifNotNil: [self prim: model] ifNil: [[]]) ]",
messageSends: ["val:", "ifNotNil:ifNil:", "prim:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TrappedValBinder);



smalltalk.addClass('TrappedDumbView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.TrappedDumbView.comment="I just read and show an actual path."
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_root",[]),"_trap_",[[]]);
return self},
args: ["html"],
source: "renderOn: html\x0a\x09html root trap: #()",
messageSends: ["trap:", "root"],
referencedClasses: []
}),
smalltalk.TrappedDumbView);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
var $1;
$1=smalltalk.send(self,"_subclassResponsibility",[]);
return $1;
},
args: ["args"],
source: "start: args\x0a\x09^ self subclassResponsibility",
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
"_start_",
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (zzz){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_perform_withArguments_",[smalltalk.symbolFor("start:"),arguments]);
return self},
args: ["zzz"],
source: "start: zzz\x0a\x09self current perform: #start: withArguments: arguments",
messageSends: ["perform:withArguments:", "current"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
"_binder_",
smalltalk.method({
selector: "binder:",
category: 'binders',
fn: function (aTagBrush){
var self=this;
var $1,$2,$3,$5,$4;
var binder;
var tag;
tag=smalltalk.send(smalltalk.send(aTagBrush,"_element",[]),"_nodeName",[]);
$1=smalltalk.send(tag,"__eq",["INPUT"]);
if(smalltalk.assert($1)){
var type;
type=smalltalk.send(smalltalk.send(aTagBrush,"_asJQuery",[]),"_attr_",["type"]);
type;
$2=smalltalk.send(type,"__eq",["checkbox"]);
if(smalltalk.assert($2)){
binder=smalltalk.send((smalltalk.TrappedCheckedBinder || TrappedCheckedBinder),"_new",[]);
binder;
};
$3=smalltalk.send(type,"__eq",["text"]);
if(smalltalk.assert($3)){
binder=smalltalk.send((smalltalk.TrappedValBinder || TrappedValBinder),"_new",[]);
binder;
};
};
if(($receiver = binder) == nil || $receiver == undefined){
binder=smalltalk.send((smalltalk.TrappedBinder || TrappedBinder),"_new",[]);
binder;
} else {
binder;
};
smalltalk.send(binder,"_brush_",[aTagBrush]);
$5=smalltalk.send(binder,"_yourself",[]);
$4=$5;
return $4;
},
args: ["aTagBrush"],
source: "binder: aTagBrush\x0a    \x22Prototype; will select based on tag etc.\x22\x0a    | binder tag |\x0a    tag := aTagBrush element nodeName.\x0a    tag = 'INPUT' ifTrue: [\x0a        | type |\x0a        type := aTagBrush asJQuery attr: 'type'.\x0a        type = 'checkbox' ifTrue: [ binder := TrappedCheckedBinder new ].\x0a        type = 'text' ifTrue: [ binder := TrappedValBinder new ]\x0a    ].\x0a    binder ifNil: [ binder := TrappedBinder new ].\x0a    ^ binder brush: aTagBrush; yourself",
messageSends: ["nodeName", "element", "ifTrue:", "attr:", "asJQuery", "new", "=", "ifNil:", "brush:", "yourself"],
referencedClasses: ["TrappedCheckedBinder", "TrappedValBinder", "TrappedBinder"]
}),
smalltalk.Trapped);

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
"_descend_snapshotDo_",
smalltalk.method({
selector: "descend:snapshotDo:",
category: 'action',
fn: function (anArray,aBlock){
var self=this;
var tpsc;
tpsc=smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]);
smalltalk.send(tpsc,"_append_do_",[anArray,(function(){
var path;
var model;
path=smalltalk.send(smalltalk.send(tpsc,"_elements",[]),"_copy",[]);
path;
model=smalltalk.send(self,"_byName_",[smalltalk.send(path,"_first",[])]);
model;
return smalltalk.send(aBlock,"_value_",[smalltalk.send(smalltalk.send((smalltalk.TrappedSnapshot || TrappedSnapshot),"_new",[]),"_path_model_",[path,model])]);
})]);
return self},
args: ["anArray", "aBlock"],
source: "descend: anArray snapshotDo: aBlock\x0a\x09| tpsc |\x0a    tpsc := TrappedPathStack current.\x0a    tpsc append: anArray do: [\x0a        | path model |\x0a        path := tpsc elements copy.\x0a   \x09    model := self byName: path first.\x0a        aBlock value: (TrappedSnapshot new path: path model: model)\x0a    ]",
messageSends: ["current", "append:do:", "copy", "elements", "byName:", "first", "value:", "path:model:", "new"],
referencedClasses: ["TrappedPathStack", "TrappedSnapshot"]
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
"_register_",
smalltalk.method({
selector: "register:",
category: 'accessing',
fn: function (aListKeyedEntity){
var self=this;
smalltalk.send(self,"_register_name_",[aListKeyedEntity,smalltalk.send(smalltalk.send(aListKeyedEntity,"_class",[]),"_name",[])]);
return self},
args: ["aListKeyedEntity"],
source: "register: aListKeyedEntity\x0a\x09self register: aListKeyedEntity name: aListKeyedEntity class name",
messageSends: ["register:name:", "name", "class"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_name_",
smalltalk.method({
selector: "register:name:",
category: 'accessing',
fn: function (aListKeyedEntity,aString){
var self=this;
smalltalk.send(self["@registry"],"_at_put_",[aString,aListKeyedEntity]);
return self},
args: ["aListKeyedEntity", "aString"],
source: "register: aListKeyedEntity name: aString\x0a\x09registry at: aString put: aListKeyedEntity",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (zzz){
var self=this;
var $1;
var args;
args = [].slice.call(arguments);
;
smalltalk.send(args,"_do_",[(function(each){
return smalltalk.send(self,"_register_",[each]);
})]);
smalltalk.send(smalltalk.send("[data-trap]","_asJQuery",[]),"_each_",[(function(index,elem){
var trap;
var jq;
var viewName;
var modelName;
var tokens;
var path;
jq=smalltalk.send(elem,"_asJQuery",[]);
jq;
trap=smalltalk.send(jq,"_attr_",["data-trap"]);
trap;
tokens=smalltalk.send(trap,"_tokenize_",[":"]);
tokens;
$1=smalltalk.send(smalltalk.send(tokens,"_size",[]),"__eq",[(1)]);
if(smalltalk.assert($1)){
tokens=smalltalk.send(["TrappedDumbView"],"__comma",[tokens]);
tokens;
};
viewName=smalltalk.send(tokens,"_first",[]);
viewName;
tokens=smalltalk.send(smalltalk.send(smalltalk.send(tokens,"_second",[]),"_tokenize_",[" "]),"_select_",[(function(each){
return smalltalk.send(each,"_notEmpty",[]);
})]);
tokens;
modelName=smalltalk.send(tokens,"_first",[]);
modelName;
path=smalltalk.send((smalltalk.Trapped || Trapped),"_parse_",[smalltalk.send(tokens,"_allButFirst",[])]);
path;
return smalltalk.send(smalltalk.send([modelName],"__comma",[path]),"_trapDescend_",[(function(){
return smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Smalltalk || Smalltalk),"_current",[]),"_at_",[viewName]),"_new",[]),"_appendToJQuery_",[jq]);
})]);
})]);
return self},
args: ["zzz"],
source: "start: zzz\x0a\x09| args |\x0a    <args = [].slice.call(arguments)>.\x0a    args do: [ :each | self register: each ].\x0a\x09'[data-trap]' asJQuery each: [ :index :elem |\x0a    \x09| trap jq viewName modelName tokens path |\x0a        jq := elem asJQuery.\x0a        trap := jq attr: 'data-trap'.\x0a        tokens := trap tokenize: ':'.\x0a        tokens size = 1 ifTrue: [ tokens := { 'TrappedDumbView' }, tokens ].\x0a        viewName := tokens first.\x0a        tokens := (tokens second tokenize: ' ') select: [ :each | each notEmpty ].\x0a        modelName := tokens first.\x0a        path := Trapped parse: tokens allButFirst.\x0a        { modelName }, path trapDescend: [(Smalltalk current at: viewName) new appendToJQuery: jq].\x0a    ]",
messageSends: ["do:", "register:", "each:", "asJQuery", "attr:", "tokenize:", "ifTrue:", ",", "=", "size", "first", "select:", "notEmpty", "second", "parse:", "allButFirst", "trapDescend:", "appendToJQuery:", "new", "at:", "current"],
referencedClasses: ["Trapped", "Smalltalk"]
}),
smalltalk.Trapped);


smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (anArray){
var self=this;
var $2,$3,$1;
$1=smalltalk.send(anArray,"_collect_",[(function(each){
var asNum;
asNum = parseInt(each);
;
$2=smalltalk.send(asNum,"__eq",[asNum]);
if(smalltalk.assert($2)){
return asNum;
} else {
$3=smalltalk.send(smalltalk.send(each,"_first",[]),"__eq",["#"]);
if(smalltalk.assert($3)){
return smalltalk.send(smalltalk.send(each,"_allButFirst",[]),"_asSymbol",[]);
} else {
return each;
};
};
})]);
return $1;
},
args: ["anArray"],
source: "parse: anArray\x0a\x09^anArray collect: [ :each |\x0a    \x09| asNum |\x0a       \x09<asNum = parseInt(each)>.\x0a        asNum = asNum ifTrue: [ asNum ] ifFalse: [\x0a\x09\x09\x09each first = '#' ifTrue: [ each allButFirst asSymbol ] ifFalse: [ each ]]]",
messageSends: ["collect:", "ifTrue:ifFalse:", "asSymbol", "allButFirst", "=", "first"],
referencedClasses: []
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
"_append_do_",
smalltalk.method({
selector: "append:do:",
category: 'descending',
fn: function (anArray,aBlock){
var self=this;
smalltalk.send(self,"_with_do_",[smalltalk.send(self["@elements"],"__comma",[anArray]),aBlock]);
return self},
args: ["anArray", "aBlock"],
source: "append: anArray do: aBlock\x0a    self with: elements, anArray do: aBlock",
messageSends: ["with:do:", ","],
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
smalltalk.send(self,"_initialize",[],smalltalk.TrappedSingleton);
self["@elements"]=[];
return self},
args: [],
source: "initialize\x0a    super initialize.\x0a\x09elements := #().",
messageSends: ["initialize"],
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
self["@elements"]=anArray;
self["@elements"];
return smalltalk.send(aBlock,"_value",[]);
}),"_ensure_",[(function(){
self["@elements"]=old;
return self["@elements"];
})]);
return self},
args: ["anArray", "aBlock"],
source: "with: anArray do: aBlock\x0a\x09| old |\x0a    old := elements.\x0a    [ elements := anArray.\x0a\x09aBlock value ] ensure: [ elements := old ]",
messageSends: ["ensure:", "value"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSnapshot', smalltalk.Object, ['path', 'model'], 'Trapped-Frontend');
smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
category: 'action',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_with_do_",[self["@path"],(function(){
return smalltalk.send(aBlock,"_value_",[self["@model"]]);
})]);
return self},
args: ["aBlock"],
source: "do: aBlock\x0a\x09TrappedPathStack current with: path do: [ aBlock value: model ]",
messageSends: ["with:do:", "value:", "current"],
referencedClasses: ["TrappedPathStack"]
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return self["@model"];
},
args: [],
source: "model\x0a\x09^model",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_modify_",
smalltalk.method({
selector: "modify:",
category: 'action',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_model",[]),"_modify_do_",[smalltalk.send(smalltalk.send(self,"_path",[]),"_allButFirst",[]),aBlock]);
return self},
args: ["aBlock"],
source: "modify: aBlock\x0a\x09self model modify: self path allButFirst do: aBlock",
messageSends: ["modify:do:", "allButFirst", "path", "model"],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function (){
var self=this;
return self["@path"];
},
args: [],
source: "path\x0a\x09^path",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path_model_",
smalltalk.method({
selector: "path:model:",
category: 'accessing',
fn: function (anArray,aTrappedMW){
var self=this;
self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self},
args: ["anArray", "aTrappedMW"],
source: "path: anArray model: aTrappedMW\x0a\x09path := anArray.\x0a    model := aTrappedMW",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);



smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
category: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_descend_snapshotDo_",[self,aBlock]);
return self},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09Trapped current descend: self snapshotDo: aBlock",
messageSends: ["descend:snapshotDo:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
category: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_descend_snapshotDo_",[self,aBlock]);
return self},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09Trapped current descend: self snapshotDo: aBlock",
messageSends: ["descend:snapshotDo:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_trap_",
smalltalk.method({
selector: "trap:",
category: '*Trapped-Frontend',
fn: function (path){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_binder_",[self]),"_installFor_",[path]);
return self},
args: ["path"],
source: "trap: path\x0a\x09(Trapped current binder: self) installFor: path",
messageSends: ["installFor:", "binder:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_read_",
smalltalk.method({
selector: "trap:read:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
var $1;
smalltalk.send(path,"_trapDescend_",[(function(snap){
return smalltalk.send(smalltalk.send(snap,"_model",[]),"_watch_do_",[smalltalk.send(smalltalk.send(snap,"_path",[]),"_allButFirst",[]),(function(data){
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_asJQuery",[]),"_closest_",["html"]),"_toArray",[]),"_isEmpty",[]);
if(smalltalk.assert($1)){
smalltalk.send((smalltalk.KeyedPubSubUnsubscribe || KeyedPubSubUnsubscribe),"_signal",[]);
};
return smalltalk.send(snap,"_do_",[(function(){
return smalltalk.send(self,"_with_",[(function(html){
return smalltalk.send(aBlock,"_value_value_",[data,html]);
})]);
})]);
})]);
})]);
return self},
args: ["path", "aBlock"],
source: "trap: path read: aBlock\x0a\x09path trapDescend: [ :snap |\x0a        snap model watch: snap path allButFirst do: [ :data |\x0a            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].\x0a        \x09snap do: [ self with: [ :html | aBlock value: data value: html ] ]\x0a    \x09]\x0a    ]",
messageSends: ["trapDescend:", "watch:do:", "allButFirst", "path", "ifTrue:", "signal", "isEmpty", "toArray", "closest:", "asJQuery", "do:", "with:", "value:value:", "model"],
referencedClasses: ["KeyedPubSubUnsubscribe"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_",
smalltalk.method({
selector: "trap:toggle:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
smalltalk.send(self,"_trap_toggle_ifNotPresent_",[path,aBlock,(function(){
return smalltalk.send(smalltalk.send(self,"_asJQuery",[]),"_hide",[]);
})]);
return self},
args: ["path", "aBlock"],
source: "trap: path toggle: aBlock\x0a    self trap: path toggle: aBlock ifNotPresent: [ self asJQuery hide ]",
messageSends: ["trap:toggle:ifNotPresent:", "hide", "asJQuery"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_ifNotPresent_",
smalltalk.method({
selector: "trap:toggle:ifNotPresent:",
category: '*Trapped-Frontend',
fn: function (path,aBlock,anotherBlock){
var self=this;
var $1,$2,$3,$4;
var shown;
shown=nil;
smalltalk.send(self,"_trap_read_",[path,(function(data,html){
$1=smalltalk.send(shown,"__eq",[smalltalk.send(data,"_notNil",[])]);
if(! smalltalk.assert($1)){
shown=smalltalk.send(data,"_notNil",[]);
shown;
$2=smalltalk.send(self,"_asJQuery",[]);
smalltalk.send($2,"_empty",[]);
$3=smalltalk.send($2,"_show",[]);
$3;
if(smalltalk.assert(shown)){
$4=aBlock;
} else {
$4=anotherBlock;
};
return smalltalk.send($4,"_value_value_",[data,html]);
};
})]);
return self},
args: ["path", "aBlock", "anotherBlock"],
source: "trap: path toggle: aBlock ifNotPresent: anotherBlock\x0a    | shown |\x0a    shown := nil.\x0a    self trap: path read: [ :data : html |\x0a        shown = data notNil ifFalse: [\x0a            shown := data notNil.\x0a            self asJQuery empty; show.\x0a            (shown ifTrue: [aBlock] ifFalse: [anotherBlock]) value: data value: html.\x0a        ]\x0a    ]",
messageSends: ["trap:read:", "ifFalse:", "notNil", "empty", "asJQuery", "show", "value:value:", "ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trapIter_tag_do_",
smalltalk.method({
selector: "trapIter:tag:do:",
category: '*Trapped-Frontend',
fn: function (path,aSymbol,aBlock){
var self=this;
smalltalk.send(self,"_trap_read_",[path,(function(model,html){
smalltalk.send(smalltalk.send(html,"_root",[]),"_empty",[]);
if(($receiver = model) == nil || $receiver == undefined){
return model;
} else {
return smalltalk.send(model,"_withIndexDo_",[(function(item,i){
return smalltalk.send(smalltalk.send(html,"_perform_",[aSymbol]),"_trap_read_",[[i],aBlock]);
})]);
};
})]);
return self},
args: ["path", "aSymbol", "aBlock"],
source: "trapIter: path tag: aSymbol do: aBlock\x0a    self trap: path read: [ :model :html |\x0a        html root empty.\x0a        model ifNotNil: [ model withIndexDo: [ :item :i |\x0a            (html perform: aSymbol) trap: {i} read: aBlock\x0a        ]]\x0a    ]",
messageSends: ["trap:read:", "empty", "root", "ifNotNil:", "withIndexDo:", "perform:"],
referencedClasses: []
}),
smalltalk.TagBrush);

