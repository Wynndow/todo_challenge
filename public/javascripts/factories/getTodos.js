'use strict';

toDoList.factory('getTodos', function($http) {
  return {
    fetchTasks: function() {
      return $http.get('/api/todos')
    },
    addTask: function(task) {
      return $http.post('/api/todos', task)
    },
    removeCompleted: function(taskList) {
      var toDelete = taskList.filter(function(obj) {
        return obj.done === true
      });
      for (let task of toDelete) {
        $http.delete('/api/todos/' + task._id)
      }
      return $http.get('/api/todos');
    },
    taskCount: function(taskList) {
      var arrayToCount = taskList.filter(function(obj) {
        return obj.done === false
      });
      return arrayToCount.length;
    }
  }
});
