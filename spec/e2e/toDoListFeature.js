describe('To Do List Feature', function() {

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('To Do List');
  });

  it('allows you to add tasks via a form and view them', function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.tagName('span')).getText()).toEqual('Make a to do list.');
  });

  it('clears the search box after adding a task', function() {
    browser.get('http://localhost:8080');
    element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
    element(by.className("button")).click();
    expect(element(by.model("toDoCtrl.newTask")).getAttribute('value')).toEqual('')
  });
});