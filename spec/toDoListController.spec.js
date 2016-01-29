describe('toDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list of tasks', function() {
    expect(ctrl.taskList).toBeUndefined();
  });

});
