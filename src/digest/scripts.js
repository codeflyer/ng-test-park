(function() {
  angular.module('tp-digest', []);

  angular.module('tp-digest').controller('digestCtrl', digestCtrl);

  function digestCtrl($scope) {
    $scope.helloMessage = 'Hello';

    var start = function() {
      setTimeout(function() {
        $scope.helloMessage = 'World';
        // If $apply is not cast the binding won't update
        $scope.$apply();
      }, 200);

      setTimeout(function() {
        $scope.helloMessage = 'Mars';
      }, 1000);
    };
    start();
  }
})();
