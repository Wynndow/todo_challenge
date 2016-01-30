describe('Clearing Completed Tasks', function() {

  it('clears completed tasks when the button is pressed', function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.buttonText("Add")).click();
    element(by.buttonText("Done?")).click();
    element(by.model("toDoCtrl.newTask")).sendKeys('Add another task.');
    element(by.buttonText("Add")).click();
    element(by.buttonText("Clear completed")).click();
    expect(element(by.className('completed-false')).isPresent()).toBe(true);
    expect(element(by.className('completed-true')).isPresent()).toBe(false);
  });

});
