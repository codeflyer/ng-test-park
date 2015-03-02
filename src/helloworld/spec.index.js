'use strict';

describe('Hello world!!', function() {
  var scope;

  beforeEach(module('tp-helloworld'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('helloWorldCtrl',
        {$scope: scope});
    scope.$digest();
  }));

  it('check a variable', function() {
    expect(scope.helloMessage).toBe('Hello World');
  });

});
