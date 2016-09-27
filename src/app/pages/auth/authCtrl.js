(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .controller('AuthCtrl', AuthCtrl);

  /** @ngInject */
  function AuthCtrl($scope,$location, AuthService) {
    $scope.user = {};
    var usuario;
    $scope.login = function(){
      AuthService.login($scope.user).then(function(response){
          usuario=response;
        if(usuario) {
          $location.path('/');
        } else {
          $scope.error = "Usuario o contraseña incorrectos";
        }

      })
    }
  }
})();
