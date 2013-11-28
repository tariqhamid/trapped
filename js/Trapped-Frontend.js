define("gh_herby_trapped/Trapped-Frontend", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects", "amber_core/Canvas", "amber_core/Kernel-Collections"], function(smalltalk,nil,_st){
smalltalk.addPackage('Trapped-Frontend');
smalltalk.packages["Trapped-Frontend"].transport = {"type":"amd","amdNamespace":"gh_herby_trapped"};

smalltalk.addClass('TrappedBinder', smalltalk.Object, ['brush'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "brush:",
category: 'accessing',
fn: function (aTagBrush){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@brush"]=aTagBrush;
return self}, function($ctx1) {$ctx1.fill(self,"brush:",{aTagBrush:aTagBrush},smalltalk.TrappedBinder)})},
args: ["aTagBrush"],
source: "brush: aTagBrush\x0a\x09brush := aTagBrush",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "installFor:",
category: 'action',
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@brush"])._trap_read_(path,self._showBlock());
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedBinder)})},
args: ["path"],
source: "installFor: path\x0a\x09brush trap: path read: self showBlock",
messageSends: ["trap:read:", "showBlock"],
referencedClasses: []
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "prim:",
category: 'converting',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return anObject.valueOf();
return self}, function($ctx1) {$ctx1.fill(self,"prim:",{anObject:anObject},smalltalk.TrappedBinder)})},
args: ["anObject"],
source: "prim: anObject\x0a\x09<return anObject.valueOf()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "showBlock",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$4,$5,$3,$1;
$1=(function(model){
return smalltalk.withContext(function($ctx2) {
$2=self["@brush"];
_st($2)._empty();
$4=$2;
if(($receiver = model) == nil || $receiver == null){
$5=(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)})});
} else {
$5=model;
};
$3=_st($4)._with_($5);
return $3;
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)})});
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
smalltalk.method({
selector: "installFor:",
category: 'action',
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TrappedCheckedBinder.superclass.fn.prototype._installFor_.apply(_st(self), [path]);
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return _st(self["@brush"])._onChange_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(snap)._modify_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(_st(self["@brush"])._asJQuery())._attr_("checked"))._notNil();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedCheckedBinder)})},
args: ["path"],
source: "installFor: path\x0a\x09super installFor: path.\x0a    path trapDescend: [ :snap |\x0a\x09    brush onChange: [ snap modify: [\x0a            (brush asJQuery attr: 'checked') notNil\x0a        ]]\x0a    ]",
messageSends: ["installFor:", "trapDescend:", "onChange:", "modify:", "notNil", "attr:", "asJQuery"],
referencedClasses: []
}),
smalltalk.TrappedCheckedBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "showBlock",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=(function(model){
return smalltalk.withContext(function($ctx2) {
$2=_st(self["@brush"])._asJQuery();
if(($receiver = model) == nil || $receiver == null){
$3=false;
} else {
$3=self._prim_(model);
};
return _st($2)._attr_put_("checked",$3);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{},smalltalk.TrappedCheckedBinder)})},
args: [],
source: "showBlock\x0a\x09^[ :model | brush asJQuery attr: 'checked' put: (model ifNotNil: [ self prim: model ] ifNil: [ false ]) ]",
messageSends: ["attr:put:", "asJQuery", "ifNotNil:ifNil:", "prim:"],
referencedClasses: []
}),
smalltalk.TrappedCheckedBinder);



smalltalk.addClass('TrappedValBinder', smalltalk.TrappedBinder, [], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "installFor:",
category: 'action',
fn: function (path){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TrappedValBinder.superclass.fn.prototype._installFor_.apply(_st(self), [path]);
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return _st(self["@brush"])._onChange_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(snap)._modify_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(self["@brush"])._asJQuery())._val();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)})}));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"installFor:",{path:path},smalltalk.TrappedValBinder)})},
args: ["path"],
source: "installFor: path\x0a\x09super installFor: path.\x0a    path trapDescend: [ :snap |\x0a\x09    brush onChange: [ snap modify: [\x0a            brush asJQuery val\x0a        ]]\x0a    ]",
messageSends: ["installFor:", "trapDescend:", "onChange:", "modify:", "val", "asJQuery"],
referencedClasses: []
}),
smalltalk.TrappedValBinder);

smalltalk.addMethod(
smalltalk.method({
selector: "showBlock",
category: 'action',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=(function(model){
return smalltalk.withContext(function($ctx2) {
$2=_st(self["@brush"])._asJQuery();
if(($receiver = model) == nil || $receiver == null){
$3=(function(){
return smalltalk.withContext(function($ctx3) {
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,4)})});
} else {
$3=self._prim_(model);
};
return _st($2)._val_($3);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"showBlock",{},smalltalk.TrappedValBinder)})},
args: [],
source: "showBlock\x0a\x09^[ :model | brush asJQuery val: (model ifNotNil: [self prim: model] ifNil: [[]]) ]",
messageSends: ["val:", "asJQuery", "ifNotNil:ifNil:", "prim:"],
referencedClasses: []
}),
smalltalk.TrappedValBinder);



smalltalk.addClass('TrappedDumbView', smalltalk.Widget, [], 'Trapped-Frontend');
smalltalk.TrappedDumbView.comment="I just read and show an actual path.";
smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(html)._root())._trap_([]);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},smalltalk.TrappedDumbView)})},
args: ["html"],
source: "renderOn: html\x0a\x09html root trap: #()",
messageSends: ["trap:", "root"],
referencedClasses: []
}),
smalltalk.TrappedDumbView);



smalltalk.addClass('TrappedSingleton', smalltalk.Object, [], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
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
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@current"];
if(($receiver = $2) == nil || $receiver == null){
self["@current"]=self._new();
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
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._current())._start_(args);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.TrappedSingleton.klass)})},
args: ["args"],
source: "start: args\x0a\x09self current start: args",
messageSends: ["start:", "current"],
referencedClasses: []
}),
smalltalk.TrappedSingleton.klass);


smalltalk.addClass('Trapped', smalltalk.TrappedSingleton, ['registry'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "binder:",
category: 'binders',
fn: function (aTagBrush){
var self=this;
var binder,tag;
function $TrappedCheckedBinder(){return smalltalk.TrappedCheckedBinder||(typeof TrappedCheckedBinder=="undefined"?nil:TrappedCheckedBinder)}
function $TrappedValBinder(){return smalltalk.TrappedValBinder||(typeof TrappedValBinder=="undefined"?nil:TrappedValBinder)}
function $TrappedBinder(){return smalltalk.TrappedBinder||(typeof TrappedBinder=="undefined"?nil:TrappedBinder)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$6,$7,$5;
tag=_st(_st(aTagBrush)._element())._nodeName();
$1=_st(tag).__eq("INPUT");
$ctx1.sendIdx["="]=1;
if(smalltalk.assert($1)){
var type;
type=_st(_st(aTagBrush)._asJQuery())._attr_("type");
type;
$2=_st(type).__eq("checkbox");
$ctx1.sendIdx["="]=2;
if(smalltalk.assert($2)){
binder=_st($TrappedCheckedBinder())._new();
$ctx1.sendIdx["new"]=1;
binder;
};
$3=_st(type).__eq("text");
if(smalltalk.assert($3)){
binder=_st($TrappedValBinder())._new();
$ctx1.sendIdx["new"]=2;
binder;
};
};
$4=binder;
if(($receiver = $4) == nil || $receiver == null){
binder=_st($TrappedBinder())._new();
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
messageSends: ["nodeName", "element", "ifTrue:", "=", "attr:", "asJQuery", "new", "ifNil:", "brush:", "yourself"],
referencedClasses: ["TrappedCheckedBinder", "TrappedValBinder", "TrappedBinder"]
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "byName:",
category: 'accessing',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
smalltalk.method({
selector: "descend:snapshotDo:",
category: 'action',
fn: function (anArray,aBlock){
var self=this;
var tpsc;
function $TrappedPathStack(){return smalltalk.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
function $TrappedSnapshot(){return smalltalk.TrappedSnapshot||(typeof TrappedSnapshot=="undefined"?nil:TrappedSnapshot)}
return smalltalk.withContext(function($ctx1) { 
tpsc=_st($TrappedPathStack())._current();
_st(tpsc)._append_do_(anArray,(function(){
var path,model;
return smalltalk.withContext(function($ctx2) {
path=_st(_st(tpsc)._elements())._copy();
path;
model=self._byName_(_st(path)._first());
model;
return _st(aBlock)._value_(_st(_st($TrappedSnapshot())._new())._path_model_(path,model));
}, function($ctx2) {$ctx2.fillBlock({path:path,model:model},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"descend:snapshotDo:",{anArray:anArray,aBlock:aBlock,tpsc:tpsc},smalltalk.Trapped)})},
args: ["anArray", "aBlock"],
source: "descend: anArray snapshotDo: aBlock\x0a\x09| tpsc |\x0a    tpsc := TrappedPathStack current.\x0a    tpsc append: anArray do: [\x0a        | path model |\x0a        path := tpsc elements copy.\x0a   \x09    model := self byName: path first.\x0a        aBlock value: (TrappedSnapshot new path: path model: model)\x0a    ]",
messageSends: ["current", "append:do:", "copy", "elements", "byName:", "first", "value:", "path:model:", "new"],
referencedClasses: ["TrappedPathStack", "TrappedSnapshot"]
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.Trapped.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@registry"]=smalltalk.HashedCollection._from_([]);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.Trapped)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09registry := #{}.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "register:",
category: 'accessing',
fn: function (aListKeyedEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._register_name_(aListKeyedEntity,_st(_st(aListKeyedEntity)._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"register:",{aListKeyedEntity:aListKeyedEntity},smalltalk.Trapped)})},
args: ["aListKeyedEntity"],
source: "register: aListKeyedEntity\x0a\x09self register: aListKeyedEntity name: aListKeyedEntity class name",
messageSends: ["register:name:", "name", "class"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "register:name:",
category: 'accessing',
fn: function (aListKeyedEntity,aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@registry"])._at_put_(aString,aListKeyedEntity);
return self}, function($ctx1) {$ctx1.fill(self,"register:name:",{aListKeyedEntity:aListKeyedEntity,aString:aString},smalltalk.Trapped)})},
args: ["aListKeyedEntity", "aString"],
source: "register: aListKeyedEntity name: aString\x0a\x09registry at: aString put: aListKeyedEntity",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Trapped);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'action',
fn: function (args){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
function $Smalltalk(){return smalltalk.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(args)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._register_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1="[data-trap]"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
_st($1)._each_((function(index,elem){
var trap,jq,viewName,modelName,tokens,path;
return smalltalk.withContext(function($ctx2) {
jq=_st(elem)._asJQuery();
jq;
trap=_st(jq)._attr_("data-trap");
trap;
tokens=_st(trap)._tokenize_(":");
$ctx2.sendIdx["tokenize:"]=1;
tokens;
$2=_st(_st(tokens)._size()).__eq((1));
if(smalltalk.assert($2)){
tokens=_st(["TrappedDumbView"]).__comma(tokens);
$ctx2.sendIdx[","]=1;
tokens;
};
viewName=_st(tokens)._first();
$ctx2.sendIdx["first"]=1;
viewName;
tokens=_st(_st(_st(tokens)._second())._tokenize_(" "))._select_((function(each){
return smalltalk.withContext(function($ctx3) {
return _st(each)._notEmpty();
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,4)})}));
tokens;
modelName=_st(tokens)._first();
modelName;
path=_st($Trapped())._parse_(_st(tokens)._allButFirst());
path;
return _st(_st([modelName]).__comma(path))._trapDescend_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(_st(_st(_st($Smalltalk())._current())._at_(viewName))._new())._appendToJQuery_(jq);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)})}));
}, function($ctx2) {$ctx2.fillBlock({index:index,elem:elem,trap:trap,jq:jq,viewName:viewName,modelName:modelName,tokens:tokens,path:path},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"start:",{args:args},smalltalk.Trapped)})},
args: ["args"],
source: "start: args\x0a    args do: [ :each | self register: each ].\x0a\x09'[data-trap]' asJQuery each: [ :index :elem |\x0a    \x09| trap jq viewName modelName tokens path |\x0a        jq := elem asJQuery.\x0a        trap := jq attr: 'data-trap'.\x0a        tokens := trap tokenize: ':'.\x0a        tokens size = 1 ifTrue: [ tokens := { 'TrappedDumbView' }, tokens ].\x0a        viewName := tokens first.\x0a        tokens := (tokens second tokenize: ' ') select: [ :each | each notEmpty ].\x0a        modelName := tokens first.\x0a        path := Trapped parse: tokens allButFirst.\x0a        { modelName }, path trapDescend: [(Smalltalk current at: viewName) new appendToJQuery: jq].\x0a    ]",
messageSends: ["do:", "register:", "each:", "asJQuery", "attr:", "tokenize:", "ifTrue:", "=", "size", ",", "first", "select:", "second", "notEmpty", "parse:", "allButFirst", "trapDescend:", "appendToJQuery:", "new", "at:", "current"],
referencedClasses: ["Trapped", "Smalltalk"]
}),
smalltalk.Trapped);


smalltalk.addMethod(
smalltalk.method({
selector: "envelope:loop:before:do:",
category: 'private',
fn: function (envelope,model,endjq,aBlock){
var self=this;
var envjq;
return smalltalk.withContext(function($ctx1) { 
envjq=_st(envelope)._asJQuery();
_st(model)._withIndexDo_((function(item,i){
return smalltalk.withContext(function($ctx2) {
_st([i])._trapDescend_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(envelope)._with_(aBlock);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)})}));
return _st(_st(_st(envjq)._children())._detach())._insertBefore_(endjq);
}, function($ctx2) {$ctx2.fillBlock({item:item,i:i},$ctx1,1)})}));
_st(envjq)._remove();
return self}, function($ctx1) {$ctx1.fill(self,"envelope:loop:before:do:",{envelope:envelope,model:model,endjq:endjq,aBlock:aBlock,envjq:envjq},smalltalk.Trapped.klass)})},
args: ["envelope", "model", "endjq", "aBlock"],
source: "envelope: envelope loop: model before: endjq do: aBlock\x0a   \x09| envjq |\x0a    envjq := envelope asJQuery.\x0a    model withIndexDo: [ :item :i |\x0a        {i} trapDescend: [ envelope with: aBlock ].\x0a        envjq children detach insertBefore: endjq.\x0a    ].\x0a    envjq remove",
messageSends: ["asJQuery", "withIndexDo:", "trapDescend:", "with:", "insertBefore:", "detach", "children", "remove"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "loop:between:and:do:",
category: 'private',
fn: function (model,start,end,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(start)._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st($2)._nextUntil_(_st(end)._element());
_st($1)._remove();
_st(start)._with_((function(html){
return smalltalk.withContext(function($ctx2) {
if(($receiver = model) == nil || $receiver == null){
return model;
} else {
return self._envelope_loop_before_do_(_st(html)._div(),model,_st(end)._asJQuery(),aBlock);
};
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loop:between:and:do:",{model:model,start:start,end:end,aBlock:aBlock},smalltalk.Trapped.klass)})},
args: ["model", "start", "end", "aBlock"],
source: "loop: model between: start and: end do: aBlock\x0a    (start asJQuery nextUntil: end element) remove.\x0a    start with: [ :html | model ifNotNil: [\x0a    \x09self envelope: html div loop: model before: end asJQuery do: aBlock\x0a\x09]]",
messageSends: ["remove", "nextUntil:", "asJQuery", "element", "with:", "ifNotNil:", "envelope:loop:before:do:", "div"],
referencedClasses: []
}),
smalltalk.Trapped.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "parse:",
category: 'accessing',
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
$ctx2.sendIdx["="]=1;
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
}, function($ctx2) {$ctx2.fillBlock({each:each,asNum:asNum},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parse:",{anArray:anArray},smalltalk.Trapped.klass)})},
args: ["anArray"],
source: "parse: anArray\x0a\x09^anArray collect: [ :each |\x0a    \x09| asNum |\x0a       \x09asNum := each asNumber.\x0a        asNum = asNum ifTrue: [ asNum ] ifFalse: [\x0a\x09\x09\x09each first = '#' ifTrue: [ { each allButFirst } ] ifFalse: [ each ]]]",
messageSends: ["collect:", "asNumber", "ifTrue:ifFalse:", "=", "first", "allButFirst"],
referencedClasses: []
}),
smalltalk.Trapped.klass);


smalltalk.addClass('TrappedPathStack', smalltalk.TrappedSingleton, ['elements'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "append:do:",
category: 'descending',
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._with_do_(_st(self["@elements"]).__comma(anArray),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"append:do:",{anArray:anArray,aBlock:aBlock},smalltalk.TrappedPathStack)})},
args: ["anArray", "aBlock"],
source: "append: anArray do: aBlock\x0a    self with: elements, anArray do: aBlock",
messageSends: ["with:do:", ","],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TrappedPathStack.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TrappedPathStack)})},
args: [],
source: "initialize\x0a    super initialize.\x0a\x09elements := #().",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);

smalltalk.addMethod(
smalltalk.method({
selector: "with:do:",
category: 'descending',
fn: function (anArray,aBlock){
var self=this;
var old;
return smalltalk.withContext(function($ctx1) { 
old=self["@elements"];
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@elements"]=anArray;
self["@elements"];
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._ensure_((function(){
return smalltalk.withContext(function($ctx2) {
self["@elements"]=old;
return self["@elements"];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"with:do:",{anArray:anArray,aBlock:aBlock,old:old},smalltalk.TrappedPathStack)})},
args: ["anArray", "aBlock"],
source: "with: anArray do: aBlock\x0a\x09| old |\x0a    old := elements.\x0a    [ elements := anArray.\x0a\x09aBlock value ] ensure: [ elements := old ]",
messageSends: ["ensure:", "value"],
referencedClasses: []
}),
smalltalk.TrappedPathStack);



smalltalk.addClass('TrappedSnapshot', smalltalk.Object, ['path', 'model'], 'Trapped-Frontend');
smalltalk.addMethod(
smalltalk.method({
selector: "do:",
category: 'action',
fn: function (aBlock){
var self=this;
function $TrappedPathStack(){return smalltalk.TrappedPathStack||(typeof TrappedPathStack=="undefined"?nil:TrappedPathStack)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TrappedPathStack())._current())._with_do_(self["@path"],(function(){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value_(self["@model"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"do:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "do: aBlock\x0a\x09TrappedPathStack current with: path do: [ aBlock value: model ]",
messageSends: ["with:do:", "current", "value:"],
referencedClasses: ["TrappedPathStack"]
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
smalltalk.method({
selector: "modify:",
category: 'action',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._model())._modify_do_(_st(self._path())._allButFirst(),aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"modify:",{aBlock:aBlock},smalltalk.TrappedSnapshot)})},
args: ["aBlock"],
source: "modify: aBlock\x0a\x09self model modify: self path allButFirst do: aBlock",
messageSends: ["modify:do:", "model", "allButFirst", "path"],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
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
smalltalk.method({
selector: "path:model:",
category: 'accessing',
fn: function (anArray,aTrappedMW){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=anArray;
self["@model"]=aTrappedMW;
return self}, function($ctx1) {$ctx1.fill(self,"path:model:",{anArray:anArray,aTrappedMW:aTrappedMW},smalltalk.TrappedSnapshot)})},
args: ["anArray", "aTrappedMW"],
source: "path: anArray model: aTrappedMW\x0a\x09path := anArray.\x0a    model := aTrappedMW",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedSnapshot);


smalltalk.addMethod(
smalltalk.method({
selector: "trapDescend:",
category: '*Trapped-Frontend',
fn: function (aBlock){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($Trapped())._current())._descend_snapshotDo_(self,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"trapDescend:",{aBlock:aBlock},smalltalk.Array)})},
args: ["aBlock"],
source: "trapDescend: aBlock\x0a\x09Trapped current descend: self snapshotDo: aBlock",
messageSends: ["descend:snapshotDo:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.Array);

smalltalk.addMethod(
smalltalk.method({
selector: "trapIter:do:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._with_((function(html){
return smalltalk.withContext(function($ctx2) {
return _st(_st(html)._noscript())._trapIter_after_(path,aBlock);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:do:",{path:path,aBlock:aBlock},smalltalk.HTMLCanvas)})},
args: ["path", "aBlock"],
source: "trapIter: path do: aBlock\x0a    self with: [ :html | html noscript trapIter: path after: aBlock ]",
messageSends: ["with:", "trapIter:after:", "noscript"],
referencedClasses: []
}),
smalltalk.HTMLCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:",
category: '*Trapped-Frontend',
fn: function (path){
var self=this;
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(_st($Trapped())._current())._binder_(self))._installFor_(path);
return self}, function($ctx1) {$ctx1.fill(self,"trap:",{path:path},smalltalk.TagBrush)})},
args: ["path"],
source: "trap: path\x0a\x09(Trapped current binder: self) installFor: path",
messageSends: ["installFor:", "binder:", "current"],
referencedClasses: ["Trapped"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trap:read:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
function $KeyedPubSubUnsubscribe(){return smalltalk.KeyedPubSubUnsubscribe||(typeof KeyedPubSubUnsubscribe=="undefined"?nil:KeyedPubSubUnsubscribe)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(path)._trapDescend_((function(snap){
return smalltalk.withContext(function($ctx2) {
return _st(_st(snap)._model())._watch_do_(_st(_st(snap)._path())._allButFirst(),(function(data){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(_st(self._asJQuery())._closest_("html"))._toArray())._isEmpty();
if(smalltalk.assert($1)){
_st($KeyedPubSubUnsubscribe())._signal();
};
return _st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
return self._with_((function(html){
return smalltalk.withContext(function($ctx5) {
return _st(aBlock)._value_value_(data,html);
}, function($ctx5) {$ctx5.fillBlock({html:html},$ctx4,5)})}));
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)})}));
}, function($ctx3) {$ctx3.fillBlock({data:data},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trap:read:",{path:path,aBlock:aBlock},smalltalk.TagBrush)})},
args: ["path", "aBlock"],
source: "trap: path read: aBlock\x0a\x09path trapDescend: [ :snap |\x0a        snap model watch: snap path allButFirst do: [ :data |\x0a            (self asJQuery closest: 'html') toArray isEmpty ifTrue: [ KeyedPubSubUnsubscribe signal ].\x0a        \x09snap do: [ self with: [ :html | aBlock value: data value: html ] ]\x0a    \x09]\x0a    ]",
messageSends: ["trapDescend:", "watch:do:", "model", "allButFirst", "path", "ifTrue:", "isEmpty", "toArray", "closest:", "asJQuery", "signal", "do:", "with:", "value:value:"],
referencedClasses: ["KeyedPubSubUnsubscribe"]
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trapGuard:contents:",
category: '*Trapped-Frontend',
fn: function (anArray,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
[]._trapDescend_((function(snap){
var shown;
return smalltalk.withContext(function($ctx2) {
shown=nil;
shown;
return self._trap_read_(anArray,(function(gdata){
var sanitized;
return smalltalk.withContext(function($ctx3) {
if(($receiver = gdata) == nil || $receiver == null){
sanitized=false;
} else {
sanitized=gdata;
};
sanitized;
$1=_st(shown).__eq(sanitized);
if(! smalltalk.assert($1)){
shown=sanitized;
shown;
$2=shown;
if(smalltalk.assert($2)){
_st(snap)._do_((function(){
return smalltalk.withContext(function($ctx4) {
return self._contents_(aBlock);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,6)})}));
$3=self._asJQuery();
$ctx3.sendIdx["asJQuery"]=1;
return _st($3)._show();
} else {
$4=self._asJQuery();
_st($4)._hide();
$5=_st($4)._empty();
return $5;
};
};
}, function($ctx3) {$ctx3.fillBlock({gdata:gdata,sanitized:sanitized},$ctx2,2)})}));
}, function($ctx2) {$ctx2.fillBlock({snap:snap,shown:shown},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapGuard:contents:",{anArray:anArray,aBlock:aBlock},smalltalk.TagBrush)})},
args: ["anArray", "aBlock"],
source: "trapGuard: anArray contents: aBlock\x0a\x09#() trapDescend: [ :snap |\x0a\x09    | shown |\x0a    \x09shown := nil.\x0a\x09    self trap: anArray read: [ :gdata |\x0a\x09\x09\x09| sanitized |\x0a\x09\x09\x09sanitized := gdata ifNil: [ false ].\x0a    \x09    shown = sanitized ifFalse: [\x0a        \x09    shown := sanitized.\x0a            \x09shown\x0a\x09\x09\x09\x09\x09ifTrue: [ snap do: [ self contents: aBlock ]. self asJQuery show ]\x0a\x09\x09\x09\x09\x09ifFalse: [ self asJQuery hide; empty ] ] ] ]",
messageSends: ["trapDescend:", "trap:read:", "ifNil:", "ifFalse:", "=", "ifTrue:ifFalse:", "do:", "contents:", "show", "asJQuery", "hide", "empty"],
referencedClasses: []
}),
smalltalk.TagBrush);

smalltalk.addMethod(
smalltalk.method({
selector: "trapIter:after:",
category: '*Trapped-Frontend',
fn: function (path,aBlock){
var self=this;
var end;
function $TagBrush(){return smalltalk.TagBrush||(typeof TagBrush=="undefined"?nil:TagBrush)}
function $Trapped(){return smalltalk.Trapped||(typeof Trapped=="undefined"?nil:Trapped)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2="<noscript />"._asJQuery();
$ctx1.sendIdx["asJQuery"]=1;
$1=_st($2)._insertAfter_(self._asJQuery());
end=_st($TagBrush())._fromJQuery_canvas_($1,self["@canvas"]);
self._trap_read_(path,(function(model){
return smalltalk.withContext(function($ctx2) {
return _st($Trapped())._loop_between_and_do_(model,self,end,aBlock);
}, function($ctx2) {$ctx2.fillBlock({model:model},$ctx1,1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"trapIter:after:",{path:path,aBlock:aBlock,end:end},smalltalk.TagBrush)})},
args: ["path", "aBlock"],
source: "trapIter: path after: aBlock\x0a\x09| end |\x0a\x09end := TagBrush fromJQuery: ('<noscript />' asJQuery insertAfter: self asJQuery) canvas: canvas.\x0a    self trap: path read: [ :model |\x0a    \x09Trapped loop: model between: self and: end do: aBlock.\x0a    ]",
messageSends: ["fromJQuery:canvas:", "insertAfter:", "asJQuery", "trap:read:", "loop:between:and:do:"],
referencedClasses: ["TagBrush", "Trapped"]
}),
smalltalk.TagBrush);

});
