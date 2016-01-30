describe('toDoListController', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with an empty list of tasks', function() {
    expect(ctrl.taskList.length).toEqual(0);
  });

  describe('#addTask', function() {

    var itemOne = "Make a to do list"

    it('retains the task', function() {
      ctrl.newTask = "Adding a new task"
      ctrl.addTask();
      expect(ctrl.taskList[0].text).toEqual("Adding a new task")
    });

  });

  describe('#toggleEdit', function() {

    it('changes the state of a tasks inEdit property to true', function() {
      var task = {"text": "Test the inEdit function"}
      ctrl.toggleEdit(task);
      expect(task.inEdit).toBe(true);
    });

    it('changes the state of a tasks inEdit property to false', function() {
      var task = {"text": "Test the toggleEdit function", "inEdit": true}
      ctrl.toggleEdit(task);
      expect(task.inEdit).toBe(false);
    });

  });

  describe('#toggleDone', function() {

    it('changes the state of a tasks done property to true', function() {
      var task = {"text": "Test the toggleDone function"}
      ctrl.toggleDone(task);
      expect(task.done).toBe(true);
    });

    it('changes the state of a tasks done property to false', function() {
      var task = {"text": "Test the toggleDone function", "done": true}
      ctrl.toggleDone(task);
      expect(task.done).toBe(false);
    });

  });

  describe('#taskCount', function() {

    it('counts the number of tasks not completed', function() {
      ctrl.taskList = [{"done": false}, {"done": false}, {"done": true}];
      expect(ctrl.taskCount()).toEqual(2)
    });

  });

  describe('#removeCompleted', function() {

    it('removes completed tasks', function() {
      ctrl.taskList = [{"done": true}, {"done": true}, {"done": false}]
      ctrl.removeCompleted();
      expect(ctrl.taskList).toEqual([{"done": false}])
    });

  });

});
