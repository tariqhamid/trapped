smalltalk.addPackage('Trapped-Backend', {});
smalltalk.addClass('EavModel', smalltalk.Object, ['getBlock', 'putBlock'], 'Trapped-Backend');
smalltalk.EavModel.comment="External actor value model."
smalltalk.addMethod(
"_getBlock_",
smalltalk.method({
selector: "getBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
self["@getBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "getBlock: aBlock\x0a\x0agetBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
smalltalk.send(self,"_initialize",[],smalltalk.Object);
self["@getBlock"]=(function(){
return smalltalk.send(self,"_error_",["No getter block."]);
});
self["@putBlock"]=(function(){
return smalltalk.send(self,"_error_",["No putter block."]);
});
return self},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09getBlock := [ self error: 'No getter block.' ].\x0a\x09putBlock := [ self error: 'No putter block.' ].",
messageSends: ["initialize", "error:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'accessing',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(self["@getBlock"],"_value_",[anObject]);
return $1;
},
args: ["anObject"],
source: "on: anObject\x0a\x22Returns value of model applied on object\x22\x0a\x0a^getBlock value: anObject",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_on_put_",
smalltalk.method({
selector: "on:put:",
category: 'accessing',
fn: function (anObject,anObject2){
var self=this;
var $1;
$1=smalltalk.send(self["@putBlock"],"_value_value_",[anObject,anObject2]);
return $1;
},
args: ["anObject", "anObject2"],
source: "on: anObject put: anObject2\x0a\x22Puts a value via model applied on object\x22\x0a\x0a^putBlock value: anObject value: anObject2",
messageSends: ["value:value:"],
referencedClasses: []
}),
smalltalk.EavModel);

smalltalk.addMethod(
"_putBlock_",
smalltalk.method({
selector: "putBlock:",
category: 'accessing',
fn: function (aBlock){
var self=this;
self["@putBlock"]=aBlock;
return self},
args: ["aBlock"],
source: "putBlock: aBlock\x0a\x0aputBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.EavModel);



smalltalk.addClass('Isolator', smalltalk.Object, ['root'], 'Trapped-Backend');
smalltalk.addMethod(
"_model_modify_",
smalltalk.method({
selector: "model:modify:",
category: 'action',
fn: function (anEavModel,aBlock){
var self=this;
var newValue;
newValue=smalltalk.send(aBlock,"_value_",[smalltalk.send(anEavModel,"_on_",[self])]);
smalltalk.send(anEavModel,"_on_put_",[self,smalltalk.send(newValue,"_deepCopy",[])]);
return self},
args: ["anEavModel", "aBlock"],
source: "model: anEavModel modify: aBlock\x0a\x0a| newValue |\x0anewValue := aBlock value: (anEavModel on: self).\x0aanEavModel on: self put: newValue deepCopy\x0a",
messageSends: ["value:", "on:", "on:put:", "deepCopy"],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_model_read_",
smalltalk.method({
selector: "model:read:",
category: 'action',
fn: function (anEavModel,aBlock){
var self=this;
smalltalk.send(aBlock,"_value_",[smalltalk.send(smalltalk.send(anEavModel,"_on_",[self]),"_deepCopy",[])]);
return self},
args: ["anEavModel", "aBlock"],
source: "model: anEavModel read: aBlock\x0a\x0aaBlock value: (anEavModel on: self) deepCopy",
messageSends: ["value:", "deepCopy", "on:"],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root",
smalltalk.method({
selector: "root",
category: 'accessing',
fn: function (){
var self=this;
return self["@root"];
},
args: [],
source: "root\x0a\x0a^root\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.Isolator);

smalltalk.addMethod(
"_root_",
smalltalk.method({
selector: "root:",
category: 'accessing',
fn: function (anObject){
var self=this;
self["@root"]=anObject;
return self},
args: ["anObject"],
source: "root: anObject\x0a\x0aroot := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.Isolator);


smalltalk.addMethod(
"_on_",
smalltalk.method({
selector: "on:",
category: 'instance creation',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(smalltalk.send(self,"_new",[]),"_root_",[anObject]);
return $1;
},
args: ["anObject"],
source: "on: anObject\x0a^self new root: anObject",
messageSends: ["root:", "new"],
referencedClasses: []
}),
smalltalk.Isolator.klass);


smalltalk.addClass('TrappedDispatcher', smalltalk.Object, [], 'Trapped-Backend');
smalltalk.TrappedDispatcher.comment="I am base class for change event dispatchers.\x0aI manage changed path - action block subscriptions.\x0aThese subscription must be three-element arrays\x0a\x09{ dirty. path. block }\x0a\x0aMy subclasses need to provide implementation for:\x0a\x09add:\x0a    do:\x0a    (optionally) run\x0a"
smalltalk.addMethod(
"_changed_",
smalltalk.method({
selector: "changed:",
category: 'action',
fn: function (path){
var self=this;
var $1;
var needsToRun;
needsToRun=false;
smalltalk.send(self,"_do_",[(function(each){
var aPath;
var lesser;
aPath=smalltalk.send(each,"_second",[]);
aPath;
lesser=smalltalk.send(smalltalk.send(aPath,"_size",[]),"_min_",[smalltalk.send(path,"_size",[])]);
lesser;
$1=smalltalk.send(smalltalk.send(path,"_copyFrom_to_",[(1),lesser]),"__eq",[smalltalk.send(aPath,"_copyFrom_to_",[(1),lesser])]);
if(smalltalk.assert($1)){
smalltalk.send(each,"_at_put_",[(1),true]);
needsToRun=true;
return needsToRun;
};
})]);
smalltalk.send(self,"_dirty_",[needsToRun]);
return self},
args: ["path"],
source: "changed: path\x0a\x09| needsToRun |\x0a    needsToRun := false.\x0a\x09self do: [ :each |\x0a\x09\x09| aPath lesser |\x0a\x09\x09aPath := each second.\x0a\x09\x09lesser := aPath size min: path size.\x0a\x09\x09(path copyFrom: 1 to: lesser) = (aPath copyFrom: 1 to: lesser) ifTrue: [\x0a\x09\x09\x09each at: 1 put: true.\x0a            needsToRun := true.\x0a\x09\x09]\x0a\x09].\x0a\x09self dirty: needsToRun",
messageSends: ["do:", "second", "min:", "size", "ifTrue:", "at:put:", "=", "copyFrom:to:", "dirty:"],
referencedClasses: []
}),
smalltalk.TrappedDispatcher);

smalltalk.addMethod(
"_dirty_",
smalltalk.method({
selector: "dirty:",
category: 'action',
fn: function (aBoolean){
var self=this;
if(smalltalk.assert(aBoolean)){
smalltalk.send((function(){
return smalltalk.send(self,"_run",[]);
}),"_fork",[]);
};
return self},
args: ["aBoolean"],
source: "dirty: aBoolean\x0a\x09aBoolean ifTrue: [[ self run ] fork]",
messageSends: ["ifTrue:", "fork", "run"],
referencedClasses: []
}),
smalltalk.TrappedDispatcher);

smalltalk.addMethod(
"_run",
smalltalk.method({
selector: "run",
category: 'action',
fn: function (){
var self=this;
var $1;
smalltalk.send(self,"_do_",[(function(each){
$1=smalltalk.send(each,"_first",[]);
if(smalltalk.assert($1)){
return smalltalk.send((function(){
return smalltalk.send(smalltalk.send(each,"_third",[]),"_value",[]);
}),"_ensure_",[(function(){
return smalltalk.send(each,"_at_put_",[(1),false]);
})]);
};
})]);
return self},
args: [],
source: "run\x0a\x09self do: [ :each |\x0a\x09\x09each first ifTrue: [[ each third value ] ensure: [ each at: 1 put: false ]]\x0a\x09]",
messageSends: ["do:", "ifTrue:", "ensure:", "at:put:", "value", "third", "first"],
referencedClasses: []
}),
smalltalk.TrappedDispatcher);



smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
fn: function (anObject){
var self=this;
return nil;
},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
smalltalk.send(self,"_error_",[smalltalk.send(smalltalk.send("Trapped cannot put at ","__comma",[smalltalk.send(smalltalk.send(self,"_class",[]),"_name",[])]),"__comma",[" type key."])]);
return self},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a\x09self error: 'Trapped cannot put at ', self class name, ' type key.'",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
"_asEavModel",
smalltalk.method({
selector: "asEavModel",
category: '*Trapped-Backend',
fn: function (){
var self=this;
var $1;
var model;
model=smalltalk.send((smalltalk.EavModel || EavModel),"_new",[]);
smalltalk.send(model,"_getBlock_",[(function(anObject){
return smalltalk.send(self,"_inject_into_",[anObject,(function(soFar,segment){
if(($receiver = soFar) == nil || $receiver == undefined){
return soFar;
} else {
return smalltalk.send(segment,"_reverseTrapAt_",[soFar]);
};
})]);
})]);
$1=smalltalk.send(self,"_isEmpty",[]);
if(! smalltalk.assert($1)){
smalltalk.send(model,"_putBlock_",[(function(anObject,value){
var penultimate;
penultimate=smalltalk.send(smalltalk.send(self,"_allButLast",[]),"_inject_into_",[anObject,(function(soFar,segment){
if(($receiver = soFar) == nil || $receiver == undefined){
return soFar;
} else {
return smalltalk.send(segment,"_reverseTrapAt_",[soFar]);
};
})]);
penultimate;
return smalltalk.send(smalltalk.send(self,"_last",[]),"_reverseTrapAt_put_",[penultimate,value]);
})]);
};
return model;
},
args: [],
source: "asEavModel\x0a    | model |\x0a    model := EavModel new.\x0a    model getBlock: [ :anObject |\x0a        self inject: anObject into: [ :soFar :segment |\x0a            soFar ifNotNil: [ segment reverseTrapAt: soFar ]]].\x0a    self isEmpty ifFalse: [\x0a        model putBlock: [ :anObject :value | | penultimate |\x0a            penultimate :=  self allButLast inject: anObject into: [ :soFar :segment |\x0a                soFar ifNotNil: [ segment reverseTrapAt: soFar ]].\x0a            self last reverseTrapAt: penultimate put: value ]].\x0a    ^model",
messageSends: ["new", "getBlock:", "inject:into:", "ifNotNil:", "reverseTrapAt:", "ifFalse:", "putBlock:", "allButLast", "reverseTrapAt:put:", "last", "isEmpty"],
referencedClasses: ["EavModel"]
}),
smalltalk.SequenceableCollection);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^anObject at: self ifAbsent: [nil]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a\x09^anObject at: self put: value",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.String);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
fn: function (anObject){
var self=this;
var $1;
var $early={};
try {
$1=smalltalk.send((function(){
return smalltalk.send(anObject,"_perform_",[self]);
}),"_on_do_",[(smalltalk.MessageNotUnderstood || MessageNotUnderstood),(function(){
throw $early=[nil];
})]);
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^[anObject perform: self] on: MessageNotUnderstood do: [^nil]",
messageSends: ["on:do:", "perform:"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_perform_withArguments_",[smalltalk.send(smalltalk.send(self,"__comma",[":"]),"_asSymbol",[]),[value]]);
return $1;
},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a    ^anObject perform: (self, ':') asSymbol withArguments: { value }",
messageSends: ["perform:withArguments:", "asSymbol", ","],
referencedClasses: []
}),
smalltalk.Symbol);

smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Backend',
fn: function (anObject){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_ifAbsent_",[self,(function(){
return nil;
})]);
return $1;
},
args: ["anObject"],
source: "reverseTrapAt: anObject\x0a\x09^anObject at: self ifAbsent: [nil]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
"_reverseTrapAt_put_",
smalltalk.method({
selector: "reverseTrapAt:put:",
category: '*Trapped-Backend',
fn: function (anObject,value){
var self=this;
var $1;
$1=smalltalk.send(anObject,"_at_put_",[self,value]);
return $1;
},
args: ["anObject", "value"],
source: "reverseTrapAt: anObject put: value\x0a\x09^anObject at: self put: value",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.Number);

