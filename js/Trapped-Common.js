smalltalk.addPackage('Trapped-Common', {});
smalltalk.addClass('TrappedDispatcher', smalltalk.Object, [], 'Trapped-Common');
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



smalltalk.addClass('TrappedModelWrapper', smalltalk.Object, ['dispatcher', 'payload'], 'Trapped-Common');
smalltalk.TrappedModelWrapper.comment="I am base class for model wrappers.\x0aI wrap a model which can be any object.\x0a\x0aMy subclasses need to provide implementation for:\x0a\x09read:do:\x0a    modify:do:\x0a\x09(optionally) name\x0a\x0aand must initialize:\x0a\x09payload\x0a\x09dispatcher\x0a"
smalltalk.addMethod(
"_dispatcher",
smalltalk.method({
selector: "dispatcher",
category: 'accessing',
fn: function (){
var self=this;
return self["@dispatcher"];
},
args: [],
source: "dispatcher\x0a\x09^dispatcher",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_dispatcher_",
smalltalk.method({
selector: "dispatcher:",
category: 'accessing',
fn: function (aDispatcher){
var self=this;
self["@dispatcher"]=aDispatcher;
return self},
args: ["aDispatcher"],
source: "dispatcher: aDispatcher\x0a\x09dispatcher := aDispatcher",
messageSends: [],
referencedClasses: []
}),
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'accessing',
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
smalltalk.TrappedModelWrapper);

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
smalltalk.TrappedModelWrapper);

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
smalltalk.TrappedModelWrapper);

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
smalltalk.TrappedModelWrapper);

smalltalk.addMethod(
"_watch_do_",
smalltalk.method({
selector: "watch:do:",
category: 'action',
fn: function (path,aBlock){
var self=this;
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_add_",[[true,path,(function(){
return smalltalk.send(self,"_read_do_",[path,aBlock]);
})]]);
smalltalk.send(smalltalk.send(self,"_dispatcher",[]),"_dirty_",[true]);
return self},
args: ["path", "aBlock"],
source: "watch: path do: aBlock\x0a\x09self dispatcher add: { true. path. [ self read: path do: aBlock ] }.\x0a    self dispatcher dirty: true",
messageSends: ["add:", "read:do:", "dispatcher", "dirty:"],
referencedClasses: []
}),
smalltalk.TrappedModelWrapper);


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
smalltalk.TrappedModelWrapper.klass);


smalltalk.addMethod(
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Common',
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
category: '*Trapped-Common',
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
"_reverseTrapAt_",
smalltalk.method({
selector: "reverseTrapAt:",
category: '*Trapped-Common',
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
category: '*Trapped-Common',
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
category: '*Trapped-Common',
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
category: '*Trapped-Common',
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
category: '*Trapped-Common',
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
category: '*Trapped-Common',
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

