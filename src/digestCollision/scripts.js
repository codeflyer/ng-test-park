(function() {
  angular.module('tp-digest-collision', []);

  angular.module('tp-digest-collision').controller('digestCollisionCtrl', digestCollisionCtrl);

  function digestCollisionCtrl($scope, $timeout) {
    $scope.foo = 0;
    $scope.bar = 0;

    $scope.$watch('foo', function(newVal, oldVal, scope) {
      if (newVal === oldVal) {
        return;
      }
      scope.bar++;
    });

    $scope.$watch('bar', function(newVal, oldVal, scope) {
      if (newVal === oldVal) {
        return;
      }
      scope.foo++;
    });

    // if start with foo the results is: foo == 12, bar == 11
    $scope.runFoo = function() {
      $scope.foo++;
    };

    // if start with foo the results is: foo == 11, bar == 11
    $scope.runBar = function() {
      $scope.bar++;
    };
  }
})();
