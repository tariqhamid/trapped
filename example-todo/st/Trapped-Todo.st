Smalltalk current createPackage: 'Trapped-Todo'!
ListKeyedIsolatedEntity subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Todo'!
!App commentStamp!
// Code from AngularJS Todo example, http://angularjs.org/#todo-js
function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!!todo.done) $scope.todos.push(todo);
    });
  };
}!

!App methodsFor: 'initialization'!

initialize
	super initialize.
    self dispatcher: SimpleKeyedPubSub new.
    self model: (AppModel new title: 'Todo').
	self watch: #((todos) nil) do: [ self dispatcher changed: #((remaining)) ].
    [ self modify: #((todos)) do: [{
        #{'text'->'learn trapped'. 'done'->true}.
        #{'text'->'build a trapped app'. 'done'->false}
    }]] valueWithTimeout: 2000
! !

Object subclass: #AppModel
	instanceVariableNames: 'title todos todoText'
	package: 'Trapped-Todo'!
!AppModel commentStamp!
// Code from AngularJS Todo example, http://angularjs.org/#todo-js
function TodoCtrl($scope) {
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!!todo.done) $scope.todos.push(todo);
    });
  };
}!

!AppModel methodsFor: 'accessing'!

remaining
    ^self todosNotDone size
!

title
	^title
!

title: aString
	title := aString
!

todoText
	^todoText
!

todoText: aString
	todoText := aString
!

todos
	^todos
!

todos: anArray
	todos := anArray
!

todosNotDone
    ^self todos reject: [ :each | each at: 'done' ]
! !

!AppModel methodsFor: 'action'!

addTodo
    self todos add: #{'text'->self todoText. 'done'->false}.
    self todoText: ''
!

archive
    self todos: self todosNotDone
! !

!TrappedProcessor class methodsFor: '*Trapped-Todo'!

classDoneXxx
	"This processor is not used any more,
	it was replaced by generic
	(replace ^ with ^done-) (attr class)
	in HTML.

	This example is left here to show how you can create quick
	toView-only processor without class by just passing a block"

	^self dataToView: [ :carrier | carrier target class: 'done-', carrier value ]
! !

