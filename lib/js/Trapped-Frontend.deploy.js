smalltalk.addPackage('Trapped-Frontend', {});
smalltalk.addClass('TrappedBinder', smalltalk.Object, ['brush'], 'Trapped-Frontend');
smalltalk.addMethod(
"_brush_",
smalltalk.method({
selector: "brush:",
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"brush:",{aTagBrush:aTagBrush}, smalltalk.TrappedBinder)})}
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path}, smalltalk.TrappedBinder)})}
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_prim_",
smalltalk.method({
selector: "prim:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"prim:",{anObject:anObject}, smalltalk.TrappedBinder)})}
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=(function(model){
return smalltalk.withContext(function($ctx2) {
_st($2)._empty();
$4=$2;
$6=model;
if(($receiver = $6) == nil || $receiver == undefined){
$5=(function(){
return smalltalk.withContext(function($ctx3) {
} else {
$5=$6;
};
$3=_st($4)._with_($5);
return $3;
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{}, smalltalk.TrappedBinder)})}
}),
smalltalk.TrappedBinder);



smalltalk.addClass('TrappedCheckedBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path}, smalltalk.TrappedCheckedBinder)})}
}),
smalltalk.TrappedCheckedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=(function(model){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})));
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{}, smalltalk.TrappedCheckedBinder)})}
}),
smalltalk.TrappedCheckedBinder);



smalltalk.addClass('TrappedValBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
return smalltalk.withContext(function($ctx4) {
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path}, smalltalk.TrappedValBinder)})}
}),
smalltalk.TrappedValBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=(function(model){
return smalltalk.withContext(function($ctx2) {
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return smalltalk.withContext(function($ctx4) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})));
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{}, smalltalk.TrappedValBinder)})}
}),
smalltalk.TrappedValBinder);



smalltalk.addClass('TrappedDumbView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html}, smalltalk.TrappedDumbView)})}
}),
smalltalk.TrappedDumbView);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args}, smalltalk.TrappedSingleton)})}
}),
smalltalk.TrappedSingleton);


smalltalk.TrappedSingleton.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(self)._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{}, smalltalk.TrappedSingleton.klass)})}
}),
smalltalk.TrappedSingleton.klass);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args}, smalltalk.TrappedSingleton.klass)})}
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
"_binder_",
smalltalk.method({
selector: "binder:",
fn: function (aTagBrush){
var self=this;
var binder,tag;
return smalltalk.withContext(function($ctx1) { 
tag=_st(_st(aTagBrush)._element())._nodeName();
$1=_st(tag).__eq("INPUT");
$2=(function(){
var type;
return smalltalk.withContext(function($ctx2) {
type;
$3=_st(type).__eq("checkbox");
if(smalltalk.assert($3)){
binder=_st((smalltalk.TrappedCheckedBinder || TrappedCheckedBinder))._new();
binder;
};
$4=_st(type).__eq("text");
if(smalltalk.assert($4)){
binder=_st((smalltalk.TrappedValBinder || TrappedValBinder))._new();
return binder;
};
}, function($ctx2) {$ctx2.fillBlock({type:type},$ctx1)})});
_st($1)._ifTrue_($2);
$5=binder;
if(($receiver = $5) == nil || $receiver == undefined){
binder=_st((smalltalk.TrappedBinder || TrappedBinder))._new();
binder;
} else {
$5;
};
$7=binder;
_st($7)._brush_(aTagBrush);
$8=_st($7)._yourself();
$6=$8;
return $6;
}, function($ctx1) {$ctx1.fill(self,"binder:",{aTagBrush:aTagBrush,binder:binder,tag:tag}, smalltalk.Trapped)})}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_byName_",
smalltalk.method({
selector: "byName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"byName:",{aString:aString}, smalltalk.Trapped)})}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_descend_snapshotDo_",
smalltalk.method({
selector: "descend:snapshotDo:",
fn: function (anArray,aBlock){
var self=this;
var tpsc;
return smalltalk.withContext(function($ctx1) { 
_st(tpsc)._append_do_(anArray,(function(){
var path,model;
return smalltalk.withContext(function($ctx2) {
path;
model=_st(self)._byName_(_st(path)._first());
model;
return _st(aBlock)._value_(_st(_st((smalltalk.TrappedSnapshot || TrappedSnapshot))._new())._path_model_(path,model));
}, function($ctx2) {$ctx2.fillBlock({path:path,model:model},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"descend:snapshotDo:",{anArray:anArray,aBlock:aBlock,tpsc:tpsc}, smalltalk.Trapped)})}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@registry"]=smalltalk.HashedCollection._fromPairs_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.Trapped)})}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
fn: function (aListKeyedEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aListKeyedEntity:aListKeyedEntity}, smalltalk.Trapped)})}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_name_",
smalltalk.method({
selector: "register:name:",
fn: function (aListKeyedEntity,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"register:name:",{aListKeyedEntity:aListKeyedEntity,aString:aString}, smalltalk.Trapped)})}
}),
smalltalk.Trapped);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(args)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$1=_st("[data-trap]")._asJQuery();
$2=(function(index,elem){
var trap,jq,viewName,modelName,tokens,path;
return smalltalk.withContext(function($ctx2) {
jq;
trap=_st(jq)._attr_("data-trap");
trap;
tokens=_st(trap)._tokenize_(":");
tokens;
$3=_st(_st(tokens)._size()).__eq((1));
if(smalltalk.assert($3)){
tokens=_st(["TrappedDumbView"]).__comma(tokens);
tokens;
};
viewName=_st(tokens)._first();
viewName;
tokens=_st(_st(_st(tokens)._second())._tokenize_(" "))._select_((function(each){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
tokens;
modelName=_st(tokens)._first();
modelName;
path=_st((smalltalk.Trapped || Trapped))._parse_(_st(tokens)._allButFirst());
path;
return _st(_st([modelName]).__comma(path))._trapDescend_((function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({index:index,elem:elem,trap:trap,jq:jq,viewName:viewName,modelName:modelName,tokens:tokens,path:path},$ctx1)})});
_st($1)._each_($2);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args}, smalltalk.Trapped)})}
}),
smalltalk.Trapped);


smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$2=anArray;
$3=(function(each){
var asNum;
return smalltalk.withContext(function($ctx2) {
$4=_st(asNum).__eq(asNum);
$5=(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
$6=(function(){
return smalltalk.withContext(function($ctx3) {
if(smalltalk.assert($7)){
return _st(_st(each)._allButFirst())._asSymbol();
} else {
return each;
};
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
return _st($4)._ifTrue_ifFalse_($5,$6);
}, function($ctx2) {$ctx2.fillBlock({each:each,asNum:asNum},$ctx1)})});
$1=_st($2)._collect_($3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{anArray:anArray}, smalltalk.Trapped.klass)})}
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
"_append_do_",
smalltalk.method({
selector: "append:do:",
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"append:do:",{anArray:anArray,aBlock:aBlock}, smalltalk.TrappedPathStack)})}
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{}, smalltalk.TrappedPathStack)})}
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{}, smalltalk.TrappedPathStack)})}
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_with_do_",
smalltalk.method({
selector: "with:do:",
fn: function (anArray,aBlock){
var self=this;
var old;
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@elements"];
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
return self["@elements"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anArray:anArray,aBlock:aBlock,old:old}, smalltalk.TrappedPathStack)})}
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSnapshot', smalltalk.Object, ['path', 'model'], 'Trapped-Frontend');
smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock}, smalltalk.TrappedSnapshot)})}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{}, smalltalk.TrappedSnapshot)})}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_modify_",
smalltalk.method({
selector: "modify:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"modify:",{aBlock:aBlock}, smalltalk.TrappedSnapshot)})}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self["@path"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{}, smalltalk.TrappedSnapshot)})}
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path_model_",
smalltalk.method({
selector: "path:model:",
fn: function (anArray,aTrappedMW){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=aTrappedMW;
return self}, function($ctx1) {$ctx1.fill(self,"path:model:",{anArray:anArray,aTrappedMW:aTrappedMW}, smalltalk.TrappedSnapshot)})}
}),
smalltalk.TrappedSnapshot);



smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"trapDescend:",{aBlock:aBlock}, smalltalk.Array)})}
}),
smalltalk.Array);

smalltalk.addMethod(
"_trap_",
smalltalk.method({
selector: "trap:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"trap:",{path:path}, smalltalk.TagBrush)})}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_read_",
smalltalk.method({
selector: "trap:read:",
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=path;
$2=(function(snap){
return smalltalk.withContext(function($ctx2) {
$4=_st(_st(snap)._path())._allButFirst();
$5=(function(data){
return smalltalk.withContext(function($ctx3) {
if(smalltalk.assert($6)){
_st((smalltalk.KeyedPubSubUnsubscribe || KeyedPubSubUnsubscribe))._signal();
};
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
return smalltalk.withContext(function($ctx5) {
}, function($ctx5) {$ctx5.fillBlock({html:html},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({data:data},$ctx1)})});
return _st($3)._watch_do_($4,$5);
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})});
_st($1)._trapDescend_($2);
return self}, function($ctx1) {$ctx1.fill(self,"trap:read:",{path:path,aBlock:aBlock}, smalltalk.TagBrush)})}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_",
smalltalk.method({
selector: "trap:toggle:",
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:toggle:",{path:path,aBlock:aBlock}, smalltalk.TagBrush)})}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_ifNotPresent_",
smalltalk.method({
selector: "trap:toggle:ifNotPresent:",
fn: function (path,aBlock,anotherBlock){
var self=this;
var shown;
return smalltalk.withContext(function($ctx1) { 
shown=nil;
$1=self;
$2=path;
$3=(function(data,html){
return smalltalk.withContext(function($ctx2) {
$5=(function(){
return smalltalk.withContext(function($ctx3) {
shown;
$6=_st(self)._asJQuery();
_st($6)._empty();
$7=_st($6)._show();
$7;
$9=shown;
if(smalltalk.assert($9)){
$8=aBlock;
} else {
$8=anotherBlock;
};
return _st($8)._value_value_(data,html);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
return _st($4)._ifFalse_($5);
}, function($ctx2) {$ctx2.fillBlock({data:data,html:html},$ctx1)})});
_st($1)._trap_read_($2,$3);
return self}, function($ctx1) {$ctx1.fill(self,"trap:toggle:ifNotPresent:",{path:path,aBlock:aBlock,anotherBlock:anotherBlock,shown:shown}, smalltalk.TagBrush)})}
}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trapIter_tag_do_",
smalltalk.method({
selector: "trapIter:tag:do:",
fn: function (path,aSymbol,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
$1=self;
$2=path;
$3=(function(model,html){
return smalltalk.withContext(function($ctx2) {
$4=model;
if(($receiver = $4) == nil || $receiver == undefined){
return $4;
} else {
return _st(model)._withIndexDo_((function(item,i){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({item:item,i:i},$ctx1)})}));
};
}, function($ctx2) {$ctx2.fillBlock({model:model,html:html},$ctx1)})});
_st($1)._trap_read_($2,$3);
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:tag:do:",{path:path,aSymbol:aSymbol,aBlock:aBlock}, smalltalk.TagBrush)})}
}),
smalltalk.TagBrush);
