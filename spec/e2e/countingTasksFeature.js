describe('Showing the number of remaining tasks', function() {

  it('shows the number of tasks still to be completed', function() {
    var n;
    browser.get('http://localhost:8080');
    for(n=0; n<3; n++) {
      element(by.model("toDoCtrl.newTask")).sendKeys('Make a to do list.');
      element(by.buttonText("Add")).click();
    }
    expect(element(by.className('numberOfThings')).getText()).toEqual('3 things to do...');

  });

});
