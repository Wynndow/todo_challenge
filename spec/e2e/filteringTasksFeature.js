describe('Filtering tasks', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    element(by.buttonText('Done?')).click();
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.buttonText("Add")).click();
  });

  it('shows only active tasks when the active button is clicked', function() {
    element(by.id('activeFilter')).click();
    expect(element(by.className('completed-false')).isPresent()).toBe(true);
    expect(element(by.className('completed-true')).isPresent()).toBe(false);
  });

  it('shows only completed tasks when the completed button is clicked', function() {
    element(by.id('completedFilter')).click();
    expect(element(by.className('completed-false')).isPresent()).toBe(false);
    expect(element(by.className('completed-true')).isPresent()).toBe(true);
  });

  it('shows all tasks when the all button is clicked', function() {
    element(by.id('allFilter')).click();
    expect(element(by.className('completed-false')).isPresent()).toBe(true);
    expect(element(by.className('completed-true')).isPresent()).toBe(true);
  });

});
