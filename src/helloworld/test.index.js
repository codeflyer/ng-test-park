'use strict';

function hasClass(element, cls) {
  return element.getAttribute('class').then(function(classes) {
    return classes.split(' ').indexOf(cls) !== -1;
  });
}

describe('Hello world!!', function() {

  var url = 'http://localhost:9000/helloworld';
  // Initialize the controller and a mock scope
  beforeEach(function() {
    browser.get(url);
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('NGTestPark - Hello World');
  });

  it('should the databinding works with Id', function() {
    var items = element.all(by.id('check-id'));
    expect(items.get(0).getText()).toBe('Hello World');
  });

  it('should the databinding works with class', function() {
    var items = element.all(by.css('.check-class'));
    expect(items.get(0).getText()).toBe('Hello World');
  });
});
