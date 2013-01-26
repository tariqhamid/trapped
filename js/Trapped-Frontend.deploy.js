smalltalk.addPackage('Trapped-Frontend', {});
smalltalk.addClass('TrappedDispatcher', smalltalk.KeyedPubSubBase, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_subscriptionKey_block_",
smalltalk.method({
selector: "subscriptionKey:block:",
fn: function (key,aBlock){
var self=this;
var $2,$3,$1;
$2=smalltalk.send((smalltalk.TrappedSubscription || TrappedSubscription),"_new",[]);
smalltalk.send($2,"_key_block_",[key,aBlock]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.TrappedDispatcher);



smalltalk.addClass('TrappedDumbView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
smalltalk.send(smalltalk.send(html,"_root",[]),"_trapShow_",[[]]);
return self}
}),
smalltalk.TrappedDumbView);



smalltalk.addClass('TrappedModelWrapper', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Frontend');
smalltalk.addMethod(
"_dispatcher",
smalltalk.method({
selector: "dispatcher",
fn: function (){
var self=this;
return self["@dispatcher"];
}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_dispatcher_",
smalltalk.method({
selector: "dispatcher:",
fn: function (aDispatcher){
var self=this;
self["@dispatcher"]=aDispatcher;
return self}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
self["@payload"]=anObject;
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[[]]);
return self}
}),
smalltalk.TrappedModelWrapper);

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
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_register_name_",[self,smalltalk.send(self,"_name",[])]);
return self}
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_watch_do_",
smalltalk.method({
selector: "watch:do:",
fn: function (path,aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_on_hook_",[path,(function(){
return smalltalk.send(self,"_read_do_",[path,aBlock]);
})]);
return self}
}),
smalltalk.TrappedModelWrapper);


smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function (){
var self=this;
var $2,$3,$1;
$2=smalltalk.send(self,"_new",[]);
smalltalk.send($2,"_start",[]);
$3=smalltalk.send($2,"_yourself",[]);
$1=$3;
return $1;
}
}),
smalltalk.TrappedModelWrapper.klass);


smalltalk.addClass('TrappedMWDirect', smalltalk.TrappedModelWrapper, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var newValue;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[self["@payload"]])]);
smalltalk.send((function(){
return smalltalk.send(eavModel,"_on_put_",[self["@payload"],newValue]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self}
}),
smalltalk.TrappedMWDirect);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(path,"_asEavModel",[]);
smalltalk.send(aBlock,"_value_",[smalltalk.send(eavModel,"_on_",[self["@payload"]])]);
return self}
}),
smalltalk.TrappedMWDirect);



smalltalk.addClass('TrappedMWIsolated', smalltalk.TrappedModelWrapper, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_model_",
smalltalk.method({
selector: "model:",
fn: function (anObject){
var self=this;
smalltalk.send(self,"_model_",[smalltalk.send((smalltalk.Isolator || Isolator),"_on_",[anObject])],smalltalk.TrappedModelWrapper);
return self}
}),
smalltalk.TrappedMWIsolated);

smalltalk.addMethod(
"_modify_do_",
smalltalk.method({
selector: "modify:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(smalltalk.send([smalltalk.symbolFor("root")],"__comma",[path]),"_asEavModel",[]);
smalltalk.send((function(){
return smalltalk.send(self["@payload"],"_model_modify_",[eavModel,aBlock]);
}),"_ensure_",[(function(){
return smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_changed_",[path]);
})]);
return self}
}),
smalltalk.TrappedMWIsolated);

smalltalk.addMethod(
"_read_do_",
smalltalk.method({
selector: "read:do:",
fn: function (path,aBlock){
var self=this;
var eavModel;
eavModel=smalltalk.send(smalltalk.send([smalltalk.symbolFor("root")],"__comma",[path]),"_asEavModel",[]);
smalltalk.send(self["@payload"],"_model_read_",[eavModel,aBlock]);
return self}
}),
smalltalk.TrappedMWIsolated);



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
var $1;
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

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
fn: function (){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_elements",[]);
return $1;
}
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
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
smalltalk.send(self,"_append_",[anArray]);
return smalltalk.send(aBlock,"_value",[]);
}),"_ensure_",[(function(){
self["@elements"]=old;
return self["@elements"];
})]);
return self}
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSubscription', smalltalk.KeyedSubscriptionBase, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_accepts_",
smalltalk.method({
selector: "accepts:",
fn: function (aKey){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(smalltalk.send(aKey,"_size",[]),"__lt_eq",[smalltalk.send(self["@key"],"_size",[])]),"_and_",[(function(){
return smalltalk.send(aKey,"__eq",[smalltalk.send(self["@key"],"_copyFrom_to_",[(1),smalltalk.send(aKey,"_size",[])])]);
})]);
return $1;
}
}),
smalltalk.TrappedSubscription);



smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_with_do_",[self,aBlock]);
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
fn: function (aBlock){
var self=this;
smalltalk.send(smalltalk.send((smalltalk.TrappedPathStack || TrappedPathStack),"_current",[]),"_with_do_",[self,aBlock]);
return self}
}),
smalltalk.Array);

smalltalk.addMethod(
"_trap_read_",
smalltalk.method({
selector: "trap:read:",
fn: function (path,aBlock){
var self=this;
var $1;
smalltalk.send(path,"_trapDescend_",[(function(){
var actual;
var model;
actual=smalltalk.send((smalltalk.Trapped || Trapped),"_path",[]);
actual;
model=smalltalk.send(smalltalk.send((smalltalk.Trapped || Trapped),"_current",[]),"_byName_",[smalltalk.send(actual,"_first",[])]);
model;
return smalltalk.send(model,"_watch_do_",[smalltalk.send(actual,"_allButFirst",[]),(function(data){
$1=smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self,"_asJQuery",[]),"_closest_",["html"]),"_toArray",[]),"_isEmpty",[]);
if(smalltalk.assert($1)){
smalltalk.send((smalltalk.KeyedPubSubUnsubscribe || KeyedPubSubUnsubscribe),"_signal",[]);
};
return smalltalk.send(actual,"_trapDescend_",[(function(){
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

smalltalk.addMethod(
"_trapShow_",
smalltalk.method({
selector: "trapShow:",
fn: function (path){
var self=this;
smalltalk.send(self,"_trapShow_default_",[path,(function(){
})]);
return self}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trapShow_default_",
smalltalk.method({
selector: "trapShow:default:",
fn: function (path,anObject){
var self=this;
var $2,$1;
smalltalk.send(self,"_trap_read_",[path,(function(model){
smalltalk.send(self,"_empty",[]);
if(($receiver = model) == nil || $receiver == undefined){
$2=anObject;
} else {
$2=model;
};
$1=smalltalk.send(self,"_with_",[$2]);
return $1;
})]);
return self}
}),
smalltalk.TagBrush);

