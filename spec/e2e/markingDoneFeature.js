describe('Marking a task as done', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.buttonText("Add")).click();
    element(by.buttonText("Done?")).click();
  });

  it('crosses out the task when the done button is clicked', function() {
    expect(element(by.className('completed-true')).isPresent()).toBe(true)
  });

  it('uncrosses out the task when the done button is clicked again', function() {
    element(by.buttonText("Done?")).click();
    expect(element(by.className('completed-true')).isPresent()).toBe(false)
    expect(element(by.className('completed-false')).isPresent()).toBe(true)
  });

});
