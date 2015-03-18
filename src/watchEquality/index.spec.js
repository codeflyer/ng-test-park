'use strict';

describe('watchEqualityCtrl Unit test', function() {
  var scope;

  beforeEach(module('tp-watch-equality'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('watchEqualityCtrl',
        {$scope: scope});
    scope.$digest();
  }));

  it('check variables', function() {
    scope.struct.result.should.be.equal('not clicked');
    scope.resultWatch.should.be.equal('not clicked w');
  });

  it('click and check variables', function() {
    scope.clickMe();
    scope.$digest();
    scope.struct.result.should.be.equal('clicked');
    scope.resultWatch.should.be.equal('watched');
  });
});
