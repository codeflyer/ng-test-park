'use strict';
describe('DigestCtrl Unit test', function() {
  var scope;
  beforeEach(module('tp-digest'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('digestCtrl',
        {$scope: scope});
    scope.$digest();
  }));

  it('check variables after init', function() {
    scope.helloMessage.should.be.equal('Hello');
  });

  it('check variables after first digest', function(done) {
    scope.$digest();
    setTimeout(function() {
      scope.helloMessage.should.be.equal('World');
      done();
    }, 200);
  });
});
