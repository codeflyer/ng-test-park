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
    expect(scope.struct.result).toBe('not clicked');
    expect(scope.resultWatch).toBe('not clicked w');
  });

  it('click and check variables', function() {
    scope.clickMe();
    scope.$digest();
    expect(scope.struct.result).toBe('clicked');
    expect(scope.resultWatch).toBe('watched');
  });
});
