smalltalk.addPackage('Trapped-Frontend');
smalltalk.addClass('TrappedBinder', smalltalk.Object, ['brush'], 'Trapped-Frontend');
smalltalk.addMethod(
"_brush_",
smalltalk.method({
selector: "brush:",
category: 'accessing',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@brush"]=aTagBrush;
return self}, function($ctx1) {$ctx1.fill(self,"brush:",{aTagBrush:aTagBrush},smalltalk.TrappedBinder)})},
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
return smalltalk.withContext(function($ctx1) { _st(self["@brush"])._trap_read_(path,_st(self)._showBlock());
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedBinder)})},
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
return smalltalk.withContext(function($ctx1) { return anObject.valueOf();
return self}, function($ctx1) {$ctx1.fill(self,"prim:",{anObject:anObject},smalltalk.TrappedBinder)})},
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
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedBinder.fn.prototype._installFor_.apply(_st(self), [path]);
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {return _st(self["@brush"])._onChange_((function(){
return smalltalk.withContext(function($ctx3) {return _st(snap)._modify_((function(){
return smalltalk.withContext(function($ctx4) {return _st(_st(_st(self["@brush"])._asJQuery())._attr_("checked"))._notNil();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedCheckedBinder)})},
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
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedBinder.fn.prototype._installFor_.apply(_st(self), [path]);
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {return _st(self["@brush"])._onChange_((function(){
return smalltalk.withContext(function($ctx3) {return _st(snap)._modify_((function(){
return smalltalk.withContext(function($ctx4) {return _st(_st(self["@brush"])._asJQuery())._val();
}, function($ctx4) {$ctx4.fillBlock({},$ctx1)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx1)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedValBinder)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(html)._root())._trap_([]);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TrappedDumbView)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self)._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton)})},
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
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(self)._current())._start_(args);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton.klass)})},
args: ["args"],
source: "start: args\x0a\x09self current start: args",
messageSends: ["start:", "current"],
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(self["@registry"])._at_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"byName:",{aString:aString},smalltalk.Trapped)})},
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
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedSingleton.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._fromPairs_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Trapped)})},
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
return smalltalk.withContext(function($ctx1) { _st(self)._register_name_(aListKeyedEntity,_st(_st(aListKeyedEntity)._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aListKeyedEntity:aListKeyedEntity},smalltalk.Trapped)})},
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
return smalltalk.withContext(function($ctx1) { _st(self["@registry"])._at_put_(aString,aListKeyedEntity);
return self}, function($ctx1) {$ctx1.fill(self,"register:name:",{aListKeyedEntity:aListKeyedEntity,aString:aString},smalltalk.Trapped)})},
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
args: ["args"],
source: "start: args\x0a    args do: [ :each | self register: each ].\x0a\x09'[data-trap]' asJQuery each: [ :index :elem |\x0a    \x09| trap jq viewName modelName tokens path |\x0a        jq := elem asJQuery.\x0a        trap := jq attr: 'data-trap'.\x0a        tokens := trap tokenize: ':'.\x0a        tokens size = 1 ifTrue: [ tokens := { 'TrappedDumbView' }, tokens ].\x0a        viewName := tokens first.\x0a        tokens := (tokens second tokenize: ' ') select: [ :each | each notEmpty ].\x0a        modelName := tokens first.\x0a        path := Trapped parse: tokens allButFirst.\x0a        { modelName }, path trapDescend: [(Smalltalk current at: viewName) new appendToJQuery: jq].\x0a    ]",
messageSends: ["do:", "register:", "each:", "asJQuery", "attr:", "tokenize:", "ifTrue:", ",", "=", "size", "first", "select:", "notEmpty", "second", "parse:", "allButFirst", "trapDescend:", "appendToJQuery:", "new", "at:", "current"],
referencedClasses: ["Trapped", "Smalltalk"]
}),
smalltalk.Trapped);


smalltalk.addMethod(
"_envelope_loop_before_tag_do_",
smalltalk.method({
selector: "envelope:loop:before:tag:do:",
category: 'private',
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
args: ["envelope", "model", "endjq", "aSymbol", "aBlock"],
source: "envelope: envelope loop: model before: endjq tag: aSymbol do: aBlock\x0a   \x09| envjq |\x0a    envjq := envelope asJQuery.\x0a    model withIndexDo: [ :item :i |\x0a        envelope with: [ :html | (html perform: aSymbol) trap: {i} read: aBlock ].\x0a        envjq children detach insertBefore: endjq.\x0a    ].\x0a    envjq remove\x0a",
messageSends: ["asJQuery", "withIndexDo:", "with:", "trap:read:", "perform:", "insertBefore:", "detach", "children", "remove"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
"_loop_between_and_tag_do_",
smalltalk.method({
selector: "loop:between:and:tag:do:",
category: 'private',
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
args: ["model", "start", "end", "aSymbol", "aBlock"],
source: "loop: model between: start and: end tag: aSymbol do: aBlock\x0a    (start asJQuery nextUntil: end element) remove.\x0a    start with: [ :html | model ifNotNil: [\x0a    \x09self envelope: html div loop: model before: end asJQuery tag: aSymbol do: aBlock\x0a\x09]]\x0a",
messageSends: ["remove", "nextUntil:", "element", "asJQuery", "with:", "ifNotNil:", "envelope:loop:before:tag:do:", "div"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
"_parse_",
smalltalk.method({
selector: "parse:",
category: 'accessing',
fn: function (anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$1=_st(anArray)._collect_((function(each){
var asNum;
return smalltalk.withContext(function($ctx2) {asNum=_st(each)._asNumber();
asNum;
$2=_st(asNum).__eq(asNum);
if(smalltalk.assert($2)){
return asNum;
} else {
$3=_st(_st(each)._first()).__eq("#");
if(smalltalk.assert($3)){
return _st(_st(each)._allButFirst())._asSymbol();
} else {
return each;
};
};
}, function($ctx2) {$ctx2.fillBlock({each:each,asNum:asNum},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{anArray:anArray},smalltalk.Trapped.klass)})},
args: ["anArray"],
source: "parse: anArray\x0a\x09^anArray collect: [ :each |\x0a    \x09| asNum |\x0a       \x09asNum := each asNumber.\x0a        asNum = asNum ifTrue: [ asNum ] ifFalse: [\x0a\x09\x09\x09each first = '#' ifTrue: [ each allButFirst asSymbol ] ifFalse: [ each ]]]",
messageSends: ["collect:", "asNumber", "ifTrue:ifFalse:", "asSymbol", "allButFirst", "=", "first"],
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
return smalltalk.withContext(function($ctx1) { _st(self)._with_do_(_st(self["@elements"]).__comma(anArray),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"append:do:",{anArray:anArray,aBlock:aBlock},smalltalk.TrappedPathStack)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@elements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.TrappedPathStack)})},
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
return smalltalk.withContext(function($ctx1) { smalltalk.TrappedSingleton.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TrappedPathStack)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.TrappedPathStack || TrappedPathStack))._current())._with_do_(self["@path"],(function(){
return smalltalk.withContext(function($ctx2) {return _st(aBlock)._value_(self["@model"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.TrappedSnapshot)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st(self)._model())._modify_do_(_st(_st(self)._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"modify:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
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
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@path"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TrappedSnapshot)})},
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
return smalltalk.withContext(function($ctx1) { self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self}, function($ctx1) {$ctx1.fill(self,"path:model:",{anArray:anArray,aTrappedMW:aTrappedMW},smalltalk.TrappedSnapshot)})},
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
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.Trapped || Trapped))._current())._descend_snapshotDo_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"trapDescend:",{aBlock:aBlock}, smalltalk.Array)})},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09Trapped current descend: self snapshotDo: aBlock",
messageSends: ["descend:snapshotDo:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.Array);

smalltalk.addMethod(
"_trapIter_tag_do_",
smalltalk.method({
selector: "trapIter:tag:do:",
category: '*Trapped-Frontend',
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
args: ["path", "aSymbol", "aBlock"],
source: "trapIter: path tag: aSymbol do: aBlock\x0a\x09| start end |\x0a    self with: [ :html | start := html script. end := html script ].\x0a    start trap: path read: [ :model |\x0a    \x09Trapped loop: model between: start and: end tag: aSymbol do: aBlock.\x0a    ]",
messageSends: ["with:", "script", "trap:read:", "loop:between:and:tag:do:"],
referencedClasses: ["Trapped"]
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
"_trap_",
smalltalk.method({
selector: "trap:",
category: '*Trapped-Frontend',
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(_st((smalltalk.Trapped || Trapped))._current())._binder_(self))._installFor_(path);
return self}, function($ctx1) {$ctx1.fill(self,"trap:",{path:path}, smalltalk.TagBrush)})},
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
return smalltalk.withContext(function($ctx1) { _st(self)._trap_toggle_ifNotPresent_(path,aBlock,(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._asJQuery())._hide();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:toggle:",{path:path,aBlock:aBlock}, smalltalk.TagBrush)})},
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
args: ["path", "aBlock", "anotherBlock"],
source: "trap: path toggle: aBlock ifNotPresent: anotherBlock\x0a    | shown |\x0a    shown := nil.\x0a    self trap: path read: [ :data : html |\x0a        shown = data notNil ifFalse: [\x0a            shown := data notNil.\x0a            self asJQuery empty; show.\x0a            (shown ifTrue: [aBlock] ifFalse: [anotherBlock]) value: data value: html.\x0a        ]\x0a    ]",
messageSends: ["trap:read:", "ifFalse:", "notNil", "empty", "asJQuery", "show", "value:value:", "ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.TagBrush);

