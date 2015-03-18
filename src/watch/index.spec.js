'use strict';

describe('WatchCtrl Unit test', function() {
  var scope;

  beforeEach(module('tp-watch'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('watchCtrl',
        {$scope: scope});
    scope.$digest();
  }));

  it('check variables', function() {
    scope.result.should.be.equal('not clicked');
    scope.resultWatch.should.be.equal('not clicked w');
  });

  it('click and check variables', function() {
    scope.clickMe();
    scope.$digest();
    scope.result.should.be.equal('clicked');
    scope.resultWatch.should.be.equal('watched');
  });

  it('disable watcher, click and check variables', function() {
    scope.disableWatch();
    scope.clickMe();
    scope.$digest();
    scope.result.should.be.equal('clicked');
    scope.resultWatch.should.be.equal('not clicked w');
  });

});
