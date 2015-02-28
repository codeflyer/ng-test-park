'use strict';

function hasClass(element, cls) {
  return element.getAttribute('class').then(function(classes) {
    return classes.split(' ').indexOf(cls) !== -1;
  });
}

describe('Run the digest after an operation', function() {

  var url = 'http://localhost:9000/digest';
  // Initialize the controller and a mock scope
  beforeEach(function() {
    browser.get(url);
  });

  it('The first timeout func do an $apply and the binding is done', function(done) {
    var divElement = element.all(by.id('check-id')).get(0);
    divElement.getText().then(
        function(res) {
          expect(res).toBe('Hello');
          setTimeout(function() {
            divElement.getText().then(function(res) {
              expect(res).toBe('World');
              done();
            });
          }, 500);
        }
    );
  });

  it('The second timeout func don\'t call $apply and the binding isn\'t done', function(done) {
    var divElement = element.all(by.id('check-id')).get(0);
    divElement.getText().then(
        function(res) {
          expect(res).toBe('Hello');
          setTimeout(function() {
            divElement.getText().then(function(res) {
              expect(res).toBe('World');
              done();
            });
          }, 1500);
        }
    );
  });
});
