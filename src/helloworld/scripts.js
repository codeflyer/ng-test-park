(function() {
  angular.module('tp-helloworld', []);

  angular.module('tp-helloworld').controller('helloWorldCtrl', helloWorldCtrl);

  function helloWorldCtrl($scope) {
    $scope.helloMessage = 'Hello World';
  }
})();
