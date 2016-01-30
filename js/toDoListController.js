toDoList.controller('ToDoListController', [function() {

  var self = this;
  self.taskList = [];

  self.addTask = function() {
    self.taskList.push({"text": self.newTask, "done": false});
    self.newTask = '';
  };

  self.toggleEdit = function(task) {
    task.inEdit = !task.inEdit;
  };

  self.toggleDone = function(task) {
    task.done = !task.done;
  };

  self.taskCount = function() {
    var arrayToCount = self.taskList.filter(function(obj) {
      return obj.done === false
    });
    return arrayToCount.length;
  };

  self.removeCompleted = function() {
    self.taskList = self.taskList.filter(function(obj) {
      return obj.done === false
    });
  };

}]);
