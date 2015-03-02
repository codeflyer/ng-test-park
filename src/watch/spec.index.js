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
    expect(scope.result).toBe('not clicked');
    expect(scope.resultWatch).toBe('not clicked w');
  });

  it('click and check variables', function() {
    scope.clickMe();
    scope.$digest();
    expect(scope.result).toBe('clicked');
    expect(scope.resultWatch).toBe('watched');
  });

  it('disable watcher, click and check variables', function() {
    scope.disableWatch();
    scope.clickMe();
    scope.$digest();
    expect(scope.result).toBe('clicked');
    expect(scope.resultWatch).toBe('not clicked w');
  });

});
