angular.module('test-park', []);

angular.module('test-park').controller('helloWorldCtrl', helloWorldCtrl);

function helloWorldCtrl($scope) {
  $scope.helloMessage = 'Hello World';
}