describe('Marking a task as done', function() {

  it('crosses out the task when the done button is clicked', function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.buttonText("Add")).click();
    element(by.buttonText("Done?")).click();
    expect(element(by.className('taskItem')).getAttribute('class')).toMatch('completed-true')
  });

  it('uncrosses out the task when the done button is clicked again', function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.buttonText("Add")).click();
    element(by.buttonText("Done?")).click();
    element(by.buttonText("Done?")).click();
    expect(element(by.className('taskItem')).getAttribute('class')).toMatch('completed-false')
  });

});