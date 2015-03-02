(function() {
  angular.module('tp-watch-equality', []);

  angular.module('tp-watch-equality').controller('watchEqualityCtrl', watchEqualityCtrl);

  function watchEqualityCtrl($scope) {
    $scope.struct = {
      result: 'not clicked'
    };
    $scope.resultWatch = 'not clicked w';

    $scope.clickMe = function() {
      $scope.struct.result = 'clicked';
    };

    $scope.$watch('struct', function(newVal, oldVal, scope) {
      if (newVal === oldVal) {
        return;
      }
      scope.resultWatch = 'watched';
    }, true);
    // When objectEquality == true,
    // inequality of the watchExpression is determined according
    // to the angular.equals function.
    // To save the value of the object for later comparison,
    // the angular.copy function is used.
    // This therefore means that watching complex objects will
    // have adverse memory and performance implications.
  }
})();
