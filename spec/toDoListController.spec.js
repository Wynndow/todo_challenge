describe('toDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list of tasks', function() {
    expect(ctrl.taskList.length).toEqual(0);
  });

  describe('when adding a task', function() {

    var itemOne = "Make a to do list"

    it('retains the task', function() {
      ctrl.newTask = "Adding a new task"
      ctrl.addTask();
      expect(ctrl.taskList[0].task).toEqual("Adding a new task")
    });
  });

});
