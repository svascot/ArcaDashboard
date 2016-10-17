(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
      .controller('AuthCtrl', AuthCtrl);

  /** @ngInject */
  function AuthCtrl($scope,$location, AuthService,$http) {

    

    $scope.openCalendar = function(e) {
        e.preventDefault();
        e.stopPropagation();

        this.isOpen = true;
    };
      
    $scope.login = function(user){
    console.log(user.date)/*
      AuthService.login(user).then(function(response){
          var usuario=response;
        if(usuario) {
          $location.path('/');
        } else {
          $scope.error = "Usuario o contraseña incorrectos";
        }

      })
      */
    }




  }
})();
