describe('Adding tasks', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('allows you to add tasks via a form and view them', function() {
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.className('taskItem')).getText()).toEqual('Make a to do list.');
  });

  it('clears the search box after adding a task', function() {
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.model("toDoCtrl.newTask")).getAttribute('value')).toEqual('')
  });

  it('won\'t allow an empty task to be submitted', function() {
    element(by.className("button")).click();
    expect(element(by.className('taskItem')).isPresent()).toBe(false);
  });

  it('correctly plurlizes the number of tasks', function() {
    expect(element(by.className('numberOfThings')).getText()).toEqual('0 things to do...');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.className('numberOfThings')).getText()).toEqual('1 thing to do...');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.className('numberOfThings')).getText()).toEqual('2 things to do...');

  });
});
