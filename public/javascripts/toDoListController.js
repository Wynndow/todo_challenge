toDoList.controller('ToDoListController', [function() {

  var self = this;
  self.taskList = [];

  self.addTask = function() {
    var task = new Task({"text": self.newTask, "done": false});
    task.save(function(err) {
      if (err) throw err;
      console.log('Task saved successfully!')
    });
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

  self.plural = function() {
    return self.taskCount() === 1 ? '' : 's'
  }

}]);
