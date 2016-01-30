describe('Adding tasks', function() {

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('allows you to add tasks via a form and view them', function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.className('taskItem')).getText()).toEqual('Make a to do list.');
  });

  it('clears the search box after adding a task', function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.model("toDoCtrl.newTask")).getAttribute('value')).toEqual('')
  });

  it('won\'t allow an empty task to be submitted', function() {
    browser.get('http://localhost:8080');
    element(by.className("button")).click();
    expect(element(by.className('taskItem')).isPresent()).toBe(false);
  });
});
