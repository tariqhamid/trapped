Smalltalk createPackage: 'Trapped-Counter'!
ListKeyedIsolatedEntity subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Counter'!
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
    self model: AppModel new
! !

Object subclass: #AppModel
	instanceVariableNames: 'value'
	package: 'Trapped-Counter'!

!AppModel methodsFor: 'accessing'!

value
	^value
!

value: aNumber
	value := aNumber
! !

!AppModel methodsFor: 'action'!

decrement
	value := value - 1
!

increment
	value := value + 1
! !

!AppModel methodsFor: 'initialization'!

initialize
	super initialize.
	value := 0
! !

