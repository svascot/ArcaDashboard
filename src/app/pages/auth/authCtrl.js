/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('AuthCtrl', AuthCtrl);

  /** @ngInject */
  function AuthCtrl($scope,$location, AuthService) {
    $scope.user = {};
    var usuario;
    $scope.login = function(){
      AuthService.login($scope.user).then(function(response){
          usuario=response;
          alert(response.status);
        if(usuario) {
          $location.path('/');
        } else {
          $scope.error = "Usuario o contraseña incorrectos";
        }

      })
    }
  }
})();
