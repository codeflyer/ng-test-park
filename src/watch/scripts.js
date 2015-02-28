angular.module('test-park', []);

angular.module('test-park').controller('watchCtrl', watchCtrl);

function watchCtrl($scope) {
  $scope.result = 'not clicked';
  $scope.resultWatch = 'not clicked w';

  $scope.clickMe = function() {
    $scope.result = 'clicked';
  };

  $scope.disableWatch = function() {
    disable();
  };

  var disable = $scope.$watch('result', function(newVal, oldVal, scope) {
    if (newVal === oldVal) return;
    scope.resultWatch = 'watched';
  })
}