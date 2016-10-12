(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .controller('AuthCtrl', AuthCtrl);

  /** @ngInject */
  function AuthCtrl($scope,$location, AuthService,$http) {
      
    $scope.login = function(user){
      AuthService.login(user).then(function(response){
          var usuario=response;
        if(usuario) {
          $location.path('/');
        } else {
          $scope.error = "Usuario o contraseña incorrectos";
        }

      })
    }




  }
})();
