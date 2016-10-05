(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .controller('AuthCtrl', AuthCtrl);

  /** @ngInject */
  function AuthCtrl($scope,$location, AuthService,$http) {
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

  $http.get("http://52.39.7.127:3000/vehiculos")
    .then(function(response) {
      console.log("aaa")
      console.dir(response)
        $scope.myWelcome = response.data;
    });


  }
})();
