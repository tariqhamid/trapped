smalltalk.addPackage('Trapped-Frontend');
smalltalk.addClass('TrappedBinder', smalltalk.Object, ['brush'], 'Trapped-Frontend');
smalltalk.addMethod(
"_brush_",
smalltalk.method({
selector: "brush:",
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@brush"]=aTagBrush;
return self}, function($ctx1) {$ctx1.fill(self,"brush:",{aTagBrush:aTagBrush},smalltalk.TrappedBinder)})},
messageSends: []}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@brush"])._trap_read_(path,_st(self)._showBlock());
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedBinder)})},
messageSends: ["trap:read:", "showBlock"]}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_prim_",
smalltalk.method({
selector: "prim:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { return anObject.valueOf();
return self}, function($ctx1) {$ctx1.fill(self,"prim:",{anObject:anObject},smalltalk.TrappedBinder)})},
messageSends: []}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$4,$6,$5,$3,$1;
$1=(function(model){
return smalltalk.withContext(function($ctx2) {$2=self["@brush"];
_st($2)._empty();
$4=$2;
$6=model;
if(($receiver = $6) == nil || $receiver == undefined){
$5=(function(){
return smalltalk.withContext(function($ctx3) {}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})});
} else {
$5=$6;
};
$3=_st($4)._with_($5);
return $3;
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{},smalltalk.TrappedBinder)})},
messageSends: ["empty", "with:", "ifNil:"]}),
smalltalk.TrappedBinder);



smalltalk.addClass('TrappedCheckedBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedBinder.fn.prototype._installFor_.apply(_st(self), [path]);
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {return _st(self["@brush"])._onChange_((function(){
return smalltalk.withContext(function($ctx3) {return _st(snap)._modify_((function(){
return smalltalk.withContext(function($ctx4) {return _st(_st(_st(self["@brush"])._asJQuery())._attr_("checked"))._notNil();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedCheckedBinder)})},
messageSends: ["installFor:", "trapDescend:", "onChange:", "modify:", "notNil", "attr:", "asJQuery"]}),
smalltalk.TrappedCheckedBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(function(model){
return smalltalk.withContext(function($ctx2) {return _st(_st(self["@brush"])._asJQuery())._attr_put_("checked",_st(model)._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._prim_(model);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return false;
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})));
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{},smalltalk.TrappedCheckedBinder)})},
messageSends: ["attr:put:", "ifNotNil:ifNil:", "prim:", "asJQuery"]}),
smalltalk.TrappedCheckedBinder);



smalltalk.addClass('TrappedValBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_installFor_",
smalltalk.method({
selector: "installFor:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedBinder.fn.prototype._installFor_.apply(_st(self), [path]);
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {return _st(self["@brush"])._onChange_((function(){
return smalltalk.withContext(function($ctx3) {return _st(snap)._modify_((function(){
return smalltalk.withContext(function($ctx4) {return _st(_st(self["@brush"])._asJQuery())._val();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedValBinder)})},
messageSends: ["installFor:", "trapDescend:", "onChange:", "modify:", "val", "asJQuery"]}),
smalltalk.TrappedValBinder);

smalltalk.addMethod(
"_showBlock",
smalltalk.method({
selector: "showBlock",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=(function(model){
return smalltalk.withContext(function($ctx2) {return _st(_st(self["@brush"])._asJQuery())._val_(_st(model)._ifNotNil_ifNil_((function(){
return smalltalk.withContext(function($ctx3) {return _st(self)._prim_(model);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx3) {return (function(){
return smalltalk.withContext(function($ctx4) {}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})});
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})})));
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{},smalltalk.TrappedValBinder)})},
messageSends: ["val:", "ifNotNil:ifNil:", "prim:", "asJQuery"]}),
smalltalk.TrappedValBinder);



smalltalk.addClass('TrappedDumbView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(html)._root())._trap_([]);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TrappedDumbView)})},
messageSends: ["trap:", "root"]}),
smalltalk.TrappedDumbView);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton)})},
messageSends: ["subclassResponsibility"]}),
smalltalk.TrappedSingleton);


smalltalk.TrappedSingleton.klass.iVarNames = ['current'];
smalltalk.addMethod(
"_current",
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@current"]=_st(self)._new();
$1=self["@current"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.TrappedSingleton.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.TrappedSingleton.klass);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._start_(args);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton.klass)})},
messageSends: ["start:", "current"]}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
"_binder_",
smalltalk.method({
selector: "binder:",
fn: function (aTagBrush){
var self=this;
var binder,tag;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$6,$7,$5;
tag=_st(_st(aTagBrush)._element())._nodeName();
$1=_st(tag).__eq("INPUT");
if(smalltalk.assert($1)){
type=_st(_st(aTagBrush)._asJQuery())._attr_("type");
type;
$2=_st(type).__eq("checkbox");
if(smalltalk.assert($2)){
binder=_st((smalltalk.TrappedCheckedBinder || TrappedCheckedBinder))._new();
binder;
};
$3=_st(type).__eq("text");
if(smalltalk.assert($3)){
binder=_st((smalltalk.TrappedValBinder || TrappedValBinder))._new();
binder;
};
};
$4=binder;
if(($receiver = $4) == nil || $receiver == undefined){
binder=_st((smalltalk.TrappedBinder || TrappedBinder))._new();
binder;
} else {
$4;
};
$6=binder;
_st($6)._brush_(aTagBrush);
$7=_st($6)._yourself();
$5=$7;
return $5;
}, function($ctx1) {$ctx1.fill(self,"binder:",{aTagBrush:aTagBrush,binder:binder,tag:tag},smalltalk.Trapped)})},
messageSends: ["nodeName", "element", "ifTrue:", "attr:", "asJQuery", "new", "=", "ifNil:", "brush:", "yourself"]}),
smalltalk.Trapped);

smalltalk.addMethod(
"_byName_",
smalltalk.method({
selector: "byName:",
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"byName:",{aString:aString},smalltalk.Trapped)})},
messageSends: ["at:"]}),
smalltalk.Trapped);

smalltalk.addMethod(
"_descend_snapshotDo_",
smalltalk.method({
selector: "descend:snapshotDo:",
fn: function (anArray,aBlock){
var self=this;
var tpsc;
return smalltalk.withContext(function($ctx1) { tpsc=_st((smalltalk.TrappedPathStack || TrappedPathStack))._current();
_st(tpsc)._append_do_(anArray,(function(){
var path,model;
return smalltalk.withContext(function($ctx2) {path=_st(_st(tpsc)._elements())._copy();
path;
model=_st(self)._byName_(_st(path)._first());
model;
return _st(aBlock)._value_(_st(_st((smalltalk.TrappedSnapshot || TrappedSnapshot))._new())._path_model_(path,model));
}, function($ctx2) {$ctx2.fillBlock({path:path,model:model},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"descend:snapshotDo:",{anArray:anArray,aBlock:aBlock,tpsc:tpsc},smalltalk.Trapped)})},
messageSends: ["current", "append:do:", "copy", "elements", "byName:", "first", "value:", "path:model:", "new"]}),
smalltalk.Trapped);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedSingleton.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._fromPairs_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Trapped)})},
messageSends: ["initialize"]}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_",
smalltalk.method({
selector: "register:",
fn: function (aListKeyedEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._register_name_(aListKeyedEntity,_st(_st(aListKeyedEntity)._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aListKeyedEntity:aListKeyedEntity},smalltalk.Trapped)})},
messageSends: ["register:name:", "name", "class"]}),
smalltalk.Trapped);

smalltalk.addMethod(
"_register_name_",
smalltalk.method({
selector: "register:name:",
fn: function (aListKeyedEntity,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@registry"])._at_put_(aString,aListKeyedEntity);
return self}, function($ctx1) {$ctx1.fill(self,"register:name:",{aListKeyedEntity:aListKeyedEntity,aString:aString},smalltalk.Trapped)})},
messageSends: ["at:put:"]}),
smalltalk.Trapped);

smalltalk.addMethod(
"_start_",
smalltalk.method({
selector: "start:",
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(args)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(self)._register_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
_st(_st("[data-trap]")._asJQuery())._each_((function(index,elem){
var trap,jq,viewName,modelName,tokens,path;
return smalltalk.withContext(function($ctx2) {jq=_st(elem)._asJQuery();
jq;
trap=_st(jq)._attr_("data-trap");
trap;
tokens=_st(trap)._tokenize_(":");
tokens;
$1=_st(_st(tokens)._size()).__eq((1));
if(smalltalk.assert($1)){
tokens=_st(["TrappedDumbView"]).__comma(tokens);
tokens;
};
viewName=_st(tokens)._first();
viewName;
tokens=_st(_st(_st(tokens)._second())._tokenize_(" "))._select_((function(each){
return smalltalk.withContext(function($ctx3) {return _st(each)._notEmpty();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx1)})}));
tokens;
modelName=_st(tokens)._first();
modelName;
path=_st((smalltalk.Trapped || Trapped))._parse_(_st(tokens)._allButFirst());
path;
return _st(_st([modelName]).__comma(path))._trapDescend_((function(){
return smalltalk.withContext(function($ctx3) {return _st(_st(_st(_st((smalltalk.Smalltalk || Smalltalk))._current())._at_(viewName))._new())._appendToJQuery_(jq);
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({index:index,elem:elem,trap:trap,jq:jq,viewName:viewName,modelName:modelName,tokens:tokens,path:path},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.Trapped)})},
messageSends: ["do:", "register:", "each:", "asJQuery", "attr:", "tokenize:", "ifTrue:", ",", "=", "size", "first", "select:", "notEmpty", "second", "parse:", "allButFirst", "trapDescend:", "appendToJQuery:", "new", "at:", "current"]}),
smalltalk.Trapped);


smalltalk.addMethod(
"_envelope_loop_before_tag_do_",
smalltalk.method({
selector: "envelope:loop:before:tag:do:",
fn: function (envelope,model,endjq,aSymbol,aBlock){
var self=this;
var envjq;
return smalltalk.withContext(function($ctx1) { envjq=_st(envelope)._asJQuery();
_st(model)._withIndexDo_((function(item,i){
return smalltalk.withContext(function($ctx2) {_st(envelope)._with_((function(html){
return smalltalk.withContext(function($ctx3) {return _st(_st(html)._perform_(aSymbol))._trap_read_([i],aBlock);
}, function($ctx3) {$ctx3.fillBlock({html:html},$ctx1)})}));
return _st(_st(_st(envjq)._children())._detach())._insertBefore_(endjq);
}, function($ctx2) {$ctx2.fillBlock({item:item,i:i},$ctx1)})}));
_st(envjq)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"envelope:loop:before:tag:do:",{envelope:envelope,model:model,endjq:endjq,aSymbol:aSymbol,aBlock:aBlock,envjq:envjq},smalltalk.Trapped.klass)})},
messageSends: ["asJQuery", "withIndexDo:", "with:", "trap:read:", "perform:", "insertBefore:", "detach", "children", "remove"]}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
"_loop_between_and_tag_do_",
smalltalk.method({
selector: "loop:between:and:tag:do:",
fn: function (model,start,end,aSymbol,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
_st(_st(_st(start)._asJQuery())._nextUntil_(_st(end)._element()))._remove();
_st(start)._with_((function(html){
return smalltalk.withContext(function($ctx2) {$1=model;
if(($receiver = $1) == nil || $receiver == undefined){
return $1;
} else {
return _st(self)._envelope_loop_before_tag_do_(_st(html)._div(),model,_st(end)._asJQuery(),aSymbol,aBlock);
};
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loop:between:and:tag:do:",{model:model,start:start,end:end,aSymbol:aSymbol,aBlock:aBlock},smalltalk.Trapped.klass)})},
messageSends: ["remove", "nextUntil:", "element", "asJQuery", "with:", "ifNotNil:", "envelope:loop:before:tag:do:", "div"]}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(anArray)._collect_((function(each){
var asNum;
return smalltalk.withContext(function($ctx2) {
asNum=_st(each)._asNumber();
asNum;
$2=_st(asNum).__eq(asNum);
if(smalltalk.assert($2)){
return asNum;
} else {
$3=_st(_st(each)._first()).__eq("#");
if(smalltalk.assert($3)){
return [_st(each)._allButFirst()];
} else {
return each;
};
};
}, function($ctx2) {$ctx2.fillBlock({each:each,asNum:asNum},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{anArray:anArray},smalltalk.Trapped.klass)})},
messageSends: ["collect:", "asNumber", "ifTrue:ifFalse:", "allButFirst", "=", "first"]}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
"_append_do_",
smalltalk.method({
selector: "append:do:",
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._with_do_(_st(self["@elements"]).__comma(anArray),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"append:do:",{anArray:anArray,aBlock:aBlock},smalltalk.TrappedPathStack)})},
messageSends: ["with:do:", ","]}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_elements",
smalltalk.method({
selector: "elements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.TrappedPathStack)})},
messageSends: []}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedSingleton.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TrappedPathStack)})},
messageSends: ["initialize"]}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
"_with_do_",
smalltalk.method({
selector: "with:do:",
fn: function (anArray,aBlock){
var self=this;
var old;
return smalltalk.withContext(function($ctx1) { old=self["@elements"];
_st((function(){
return smalltalk.withContext(function($ctx2) {self["@elements"]=anArray;
self["@elements"];
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {self["@elements"]=old;
return self["@elements"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anArray:anArray,aBlock:aBlock,old:old},smalltalk.TrappedPathStack)})},
messageSends: ["ensure:", "value"]}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSnapshot', smalltalk.Object, ['path', 'model'], 'Trapped-Frontend');
smalltalk.addMethod(
"_do_",
smalltalk.method({
selector: "do:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TrappedPathStack || TrappedPathStack))._current())._with_do_(self["@path"],(function(){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_(self["@model"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
messageSends: ["with:do:", "value:", "current"]}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_model",
smalltalk.method({
selector: "model",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.TrappedSnapshot)})},
messageSends: []}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_modify_",
smalltalk.method({
selector: "modify:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._modify_do_(_st(_st(self)._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"modify:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
messageSends: ["modify:do:", "allButFirst", "path", "model"]}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path",
smalltalk.method({
selector: "path",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@path"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TrappedSnapshot)})},
messageSends: []}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
"_path_model_",
smalltalk.method({
selector: "path:model:",
fn: function (anArray,aTrappedMW){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self}, function($ctx1) {$ctx1.fill(self,"path:model:",{anArray:anArray,aTrappedMW:aTrappedMW},smalltalk.TrappedSnapshot)})},
messageSends: []}),
smalltalk.TrappedSnapshot);



smalltalk.addMethod(
"_trapDescend_",
smalltalk.method({
selector: "trapDescend:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Trapped || Trapped))._current())._descend_snapshotDo_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"trapDescend:",{aBlock:aBlock}, smalltalk.Array)})},
messageSends: ["descend:snapshotDo:", "current"]}),
smalltalk.Array);

smalltalk.addMethod(
"_trapIter_tag_do_",
smalltalk.method({
selector: "trapIter:tag:do:",
fn: function (path,aSymbol,aBlock){
var self=this;
var start,end;
return smalltalk.withContext(function($ctx1) { _st(self)._with_((function(html){
return smalltalk.withContext(function($ctx2) {start=_st(html)._script();
start;
end=_st(html)._script();
return end;
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1)})}));
_st(start)._trap_read_(path,(function(model){
return smalltalk.withContext(function($ctx2) {return _st((smalltalk.Trapped || Trapped))._loop_between_and_tag_do_(model,start,end,aSymbol,aBlock);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:tag:do:",{path:path,aSymbol:aSymbol,aBlock:aBlock,start:start,end:end}, smalltalk.HTMLCanvas)})},
messageSends: ["with:", "script", "trap:read:", "loop:between:and:tag:do:"]}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
"_trap_",
smalltalk.method({
selector: "trap:",
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.Trapped || Trapped))._current())._binder_(self))._installFor_(path);
return self}, function($ctx1) {$ctx1.fill(self,"trap:",{path:path}, smalltalk.TagBrush)})},
messageSends: ["installFor:", "binder:", "current"]}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_read_",
smalltalk.method({
selector: "trap:read:",
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$3,$4,$6,$5,$2;
$1=path;
$2=(function(snap){
return smalltalk.withContext(function($ctx2) {$3=_st(snap)._model();
$4=_st(_st(snap)._path())._allButFirst();
$5=(function(data){
return smalltalk.withContext(function($ctx3) {$6=_st(_st(_st(_st(self)._asJQuery())._closest_("html"))._toArray())._isEmpty();
if(smalltalk.assert($6)){
_st((smalltalk.KeyedPubSubUnsubscribe || KeyedPubSubUnsubscribe))._signal();
};
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {return _st(self)._with_((function(html){
return smalltalk.withContext(function($ctx5) {return _st(aBlock)._value_value_(data,html);
}, function($ctx5) {$ctx5.fillBlock({html:html},$ctx1)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({data:data},$ctx1)})});
return _st($3)._watch_do_($4,$5);
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})});
_st($1)._trapDescend_($2);
return self}, function($ctx1) {$ctx1.fill(self,"trap:read:",{path:path,aBlock:aBlock}, smalltalk.TagBrush)})},
messageSends: ["trapDescend:", "watch:do:", "allButFirst", "path", "ifTrue:", "signal", "isEmpty", "toArray", "closest:", "asJQuery", "do:", "with:", "value:value:", "model"]}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_",
smalltalk.method({
selector: "trap:toggle:",
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self)._trap_toggle_ifNotPresent_(path,aBlock,(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._asJQuery())._hide();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:toggle:",{path:path,aBlock:aBlock}, smalltalk.TagBrush)})},
messageSends: ["trap:toggle:ifNotPresent:", "hide", "asJQuery"]}),
smalltalk.TagBrush);

smalltalk.addMethod(
"_trap_toggle_ifNotPresent_",
smalltalk.method({
selector: "trap:toggle:ifNotPresent:",
fn: function (path,aBlock,anotherBlock){
var self=this;
var shown;
return smalltalk.withContext(function($ctx1) { var $1,$2,$4,$6,$7,$9,$8,$5,$3;
shown=nil;
$1=self;
$2=path;
$3=(function(data,html){
return smalltalk.withContext(function($ctx2) {$4=_st(shown).__eq(_st(data)._notNil());
$5=(function(){
return smalltalk.withContext(function($ctx3) {shown=_st(data)._notNil();
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
return self}, function($ctx1) {$ctx1.fill(self,"trap:toggle:ifNotPresent:",{path:path,aBlock:aBlock,anotherBlock:anotherBlock,shown:shown}, smalltalk.TagBrush)})},
messageSends: ["trap:read:", "ifFalse:", "notNil", "empty", "asJQuery", "show", "value:value:", "ifTrue:ifFalse:", "="]}),
smalltalk.TagBrush);

