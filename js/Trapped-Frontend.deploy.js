smalltalk.addPackage('Trapped-Frontend', {});
smalltalk.addClass('TrappedBinder', smalltalk.Object, ['brush'], 'Trapped-Frontend');
smalltalk.addMethod(
"_brush_",
smalltalk.method({
selector: "brush:",
fn: function (aTagBrush){
var self=this;
self["@brush"]=aTagBrush;
return self}
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
fn: function (path){
var self=this;
smalltalk.send(self["@brush"],"_trap_read_",[path,smalltalk.send(self,"_showBlock",[])]);
return self}
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_prim_",
smalltalk.method({
selector: "prim:",
fn: function (anObject){
var self=this;
return anObject.valueOf();
;
return self}
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
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
}
}),
smalltalk.TrappedBinder);



smalltalk.addClass('TrappedCheckedBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
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
return self}
}),
smalltalk.TrappedCheckedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
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
}
}),
smalltalk.TrappedCheckedBinder);



smalltalk.addClass('TrappedValBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
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
return self}
}),
smalltalk.TrappedValBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
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
}
}),
smalltalk.TrappedValBinder);



smalltalk.addClass('TrappedDumbView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_root",[]),"_trap_",[[]]);
return self}
}),
smalltalk.TrappedDumbView);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (args){
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
"_start_",
smalltalk.method({
selector: "start:",
fn: function (zzz){
var self=this;
smalltalk.send(smalltalk.send(self,"_current",[]),"_perform_withArguments_",[smalltalk.symbolFor("start:"),arguments]);
return self}
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
"_binder_",
smalltalk.method({
selector: "binder:",
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
}
}),
smalltalk.Trapped);

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
"_descend_snapshotDo_",
smalltalk.method({
selector: "descend:snapshotDo:",
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
return self}
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
"_register_",
smalltalk.method({
selector: "register:",
fn: function (aListKeyedEntity){
var self=this;
smalltalk.send(self,"_register_name_",[aListKeyedEntity,smalltalk.send(smalltalk.send(aListKeyedEntity,"_class",[]),"_name",[])]);
return self}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_name_",
smalltalk.method({
selector: "register:name:",
fn: function (aListKeyedEntity,aString){
var self=this;
smalltalk.send(self["@registry"],"_at_put_",[aString,aListKeyedEntity]);
return self}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
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
return self}
}),
smalltalk.Trapped);


smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
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
}
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
"_append_do_",
smalltalk.method({
selector: "append:do:",
fn: function (anArray,aBlock){
var self=this;
smalltalk.send(self,"_with_do_",[smalltalk.send(self["@elements"],"__comma",[anArray]),aBlock]);
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
smalltalk.send(self,"_initialize",[],smalltalk.TrappedSingleton);
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
self["@elements"]=anArray;
self["@elements"];
return smalltalk.send(aBlock,"_value",[]);
}),"_ensure_",[(function(){
self["@elements"]=old;
return self["@elements"];
})]);
return self}
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSnapshot', smalltalk.Object, ['path', 'model'], 'Trapped-Frontend');
smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_with_do_",[self["@path"],(function(){
return smalltalk.send(aBlock,"_value_",[self["@model"]]);
})]);
return self}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return self["@model"];
}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_modify_",
smalltalk.method({
selector: "modify:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_model",[]),"_modify_do_",[smalltalk.send(smalltalk.send(self,"_path",[]),"_allButFirst",[]),aBlock]);
return self}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
fn: function (){
var self=this;
return self["@path"];
}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path_model_",
smalltalk.method({
selector: "path:model:",
fn: function (anArray,aTrappedMW){
var self=this;
self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self}
}),
smalltalk.TrappedSnapshot);



smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_descend_snapshotDo_",[self,aBlock]);
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_descend_snapshotDo_",[self,aBlock]);
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_trap_",
smalltalk.method({
selector: "trap:",
fn: function (path){
var self=this;
smalltalk.send(smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_binder_",[self]),"_installFor_",[path]);
return self}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_read_",
smalltalk.method({
selector: "trap:read:",
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
return self}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_",
smalltalk.method({
selector: "trap:toggle:",
fn: function (path,aBlock){
var self=this;
smalltalk.send(self,"_trap_toggle_ifNotPresent_",[path,aBlock,(function(){
return smalltalk.send(smalltalk.send(self,"_asJQuery",[]),"_hide",[]);
})]);
return self}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_ifNotPresent_",
smalltalk.method({
selector: "trap:toggle:ifNotPresent:",
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
return self}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trapIter_tag_do_",
smalltalk.method({
selector: "trapIter:tag:do:",
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
return self}
}),
smalltalk.TagBrush);

