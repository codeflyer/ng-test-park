'use strict';

describe('Run the digest recursively, stops after 10 cicle ', function() {

  var url = 'http://localhost:9000/digestCollision';
  // Initialize the controller and a mock scope
  beforeEach(function() {
    browser.get(url);
  });

  it('Run foo first, that is declared before bar', function(done) {
    var button = element.all(by.id('runFoo')).get(0);
    var divElementFoo = element.all(by.id('foo-id')).get(0);
    var divElementBar = element.all(by.id('bar-id')).get(0);
    button.click().then(function() {
          expect(divElementFoo.getText()).toBe('12');
          expect(divElementBar.getText()).toBe('11');
          done();
        }
    );
  });

  it('Run bar first, that is declared after foo', function(done) {
    var button = element.all(by.id('runBar')).get(0);
    var divElementFoo = element.all(by.id('foo-id')).get(0);
    var divElementBar = element.all(by.id('bar-id')).get(0);
    button.click().then(function() {
          expect(divElementFoo.getText()).toBe('11');
          expect(divElementBar.getText()).toBe('11');
          done();
        }
    );
  });
});
