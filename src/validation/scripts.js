(function() {
  angular.module('tp-validation', []);
  angular.module('tp-validation').filter('color', function() {
    return function(value) {
      if (value === true) {
        return 'ok';
      } else if (value === false) {
        return 'error';
      }
      return '';
    };
  });

  angular.module('tp-validation').directive('myCompanyUserName', function() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, ele, attrs, ctrl) {
        ctrl.$parsers.unshift(function(value) {
          console.log('di qui');
          var valid = true;
          if (value) {
            valid = value.match(/^[c][0-9]{5}$/);
            if (!valid) {
              ctrl.$setValidity('invalidCompanyUserName', valid);
            }
          }
          return valid ? value : undefined;
        });
      }
    };
  });

  angular.module('tp-validation')
      .controller('validationController', validationController);

  function validationController($scope) {
    var vm = this;
    vm.userForm = null;
    vm.user = {
      name: '',
      companyUserName: ''
    };
  }
})();
