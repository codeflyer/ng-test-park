'use strict';

describe('Watch a variable', function() {

  var url = 'http://localhost:9000/watch';
  // Initialize the controller and a mock scope
  beforeEach(function() {
    browser.get(url);
  });

  it('check the result before the click w/out watch', function() {
    var result = element.all(by.id('result')).get(0);
    expect(result.getText()).toBe('not clicked');
  });

  it('click and check the result w/out watch', function(done) {
    var button = element.all(by.id('click')).get(0);
    var buttonDisable = element.all(by.id('disable')).get(0);
    var result = element.all(by.id('result')).get(0);
    var resultWatch = element.all(by.id('resultWatch')).get(0);
    result.getText().then(function(res) {
      expect(res).toBe('not clicked');
      return resultWatch.getText();
    }).then(function(resW) {
      expect(resW).toBe('not clicked w');
      return buttonDisable.click();
    }).then(function() {
      return button.click();
    }).then(function() {
      return result.getText();
    }).then(function(res) {
      expect(res).toBe('clicked');
      return resultWatch.getText();
    }).then(function(res) {
      expect(res).toBe('not clicked w');
      done();
    });
  });

  it('click and check the result with watch', function(done) {
    var button = element.all(by.id('click')).get(0);
    var result = element.all(by.id('result')).get(0);
    var resultWatch = element.all(by.id('resultWatch')).get(0);
    result.getText().then(function(res) {
      expect(res).toBe('not clicked');
      return resultWatch.getText();
    }).then(function(resW) {
      expect(resW).toBe('not clicked w');
      return button.click();
    }).then(function() {
      return result.getText();
    }).then(function(res) {
      expect(res).toBe('clicked');
      return resultWatch.getText();
    }).then(function(res) {
      expect(res).toBe('watched');
      done();
    });
  });
});
