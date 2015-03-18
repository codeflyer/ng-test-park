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
    scope.helloMessage.should.be.equal('Hello World');
  });
});
