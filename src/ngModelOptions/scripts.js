(function() {
  angular.module('tp-ng-model-option', []);
  angular.module('tp-ng-model-option')
      .controller('ngModelOptionController', ngModelOptionController);

  function ngModelOptionController($scope) {
    var vm = this;
    vm.allowNotValid = '1';
    vm.cancel = cancel;
    vm.cancelGS = cancelGS;
    vm.user = {name: ''};
    vm.userGS = {
      name: function(newName) {
        return angular.isDefined(newName) ?
            (vm.user.name = newName.toUpperCase()) : vm.user.name;
      }
    };
    vm.emotionalMummy = '';

    $scope.$watch('vm.user.name', watchUserName);
    function watchUserName(newVal, oldVal, scope) {
      if (newVal === oldVal) {
        return;
      }
      console.log(newVal);
      if (newVal.toString().toLowerCase() === 'mummy') {
        vm.emotionalMummy = 'Mummy is happy';
      } else {
        vm.emotionalMummy = 'Mummy is unhappy';
      }
    }

    function cancel(e) {
      if (e.keyCode === 27) {
        vm.userForm.userName.$rollbackViewValue();
      }
    }

    function cancelGS(e) {
      if (e.keyCode === 27) {
        vm.userForm.userName.$rollbackViewValue();
      }
    }
  }
})();
