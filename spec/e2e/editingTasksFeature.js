describe('Editing a task', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.buttonText("Add")).click();
  });

  it('allows a task to be edited via form when you click it', function() {
    element(by.className('taskText')).click();
    element(by.model("task.text")).sendKeys(' And profit');
    element(by.buttonText('Save')).click();
    expect(element(by.className('taskText')).getText()).toEqual('Make a to do list. And profit');
  });

  it('hides the edit form before the task is clicked', function() {
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.buttonText("Add")).click();
    expect(element(by.buttonText("Save")).isDisplayed()).toBe(false);
  });

  it('hides the task while being edited', function() {
    element(by.className('taskText')).click();
    expect(element(by.className('taskText')).isDisplayed()).toBe(false);
  });

});
