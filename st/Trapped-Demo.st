Smalltalk current createPackage: 'Trapped-Demo'!
ListKeyedIsolatedEntity subclass: #App
	instanceVariableNames: ''
	package: 'Trapped-Demo'!
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
	package: 'Trapped-Demo'!
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

Widget subclass: #TodoItemsWidget
	instanceVariableNames: ''
	package: 'Trapped-Demo'!
!TodoItemsWidget commentStamp!
<!!-- Code from AngularJS Todo example, http://angularjs.org/#todo-html -->
  <body>
    <h2>Todo</h2>
    <div ng-controller="TodoCtrl">
      <span>{{remaining()}} of {{todos.length}} remaining</span>
      [ <a href="" ng-click="archive()">archive</a> ]
      <ul class="unstyled">
        <li ng-repeat="todo in todos">
          <input type="checkbox" ng-model="todo.done">
          <span class="done-{{todo.done}}">{{todo.text}}</span>
        </li>
      </ul>
      <form ng-submit="addTodo()">
        <input type="text" ng-model="todoText"  size="30"
               placeholder="add new todo here">
        <input class="btn-primary" type="submit" value="add">
      </form>
    </div>
  </body>!

!TodoItemsWidget methodsFor: 'rendering'!

renderOn: html
	html trapIter: #() tag: #li do: [ :each |
		html root empty.
		html input type: 'checkbox'; trap: #('done') processors: #(inputChecked).
		html span
			trap: #('done') processors: #(classDoneXxx);
			trap: #('text')
	]
! !

!TrappedProcessor class methodsFor: '*Trapped-Demo'!

classDoneXxx
	^self dataToView: [ :carrier | carrier target class: 'done-', carrier value ]
! !

