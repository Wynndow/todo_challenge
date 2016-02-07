'use strict'

toDoList.controller('ToDoListController', ['$http', 'getTodos', function($http, getTodos) {

  var self = this;
  self.newTask = {};
  self.taskList = [];

  getTodos.fetchTasks()
    .then(function(responce) {
      self.taskList = responce.data
    })


  self.addTask = function() {
    getTodos.addTask(self.newTask)
      .then(function(responce) {
        self.newTask = {}
        self.taskList = responce.data
      })
  };

  self.toggleEdit = function(task) {
    task.inEdit = !task.inEdit;
  };

  self.toggleDone = function(task) {
    task.done = !task.done;
  };

  self.taskCount = function() {
    return getTodos.taskCount(self.taskList)
  };

  self.removeCompleted = function() {
    getTodos.removeCompleted(self.taskList)
      .then(function(responce) {
        self.taskList = responce.data
      });
  };

  self.plural = function() {
    return self.taskCount() === 1 ? '' : 's'
  }

}]);
