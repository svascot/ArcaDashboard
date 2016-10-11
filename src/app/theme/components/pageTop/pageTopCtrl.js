/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('PageTopCtrl', PageTopCtrl);

  /** @ngInject */
  function PageTopCtrl($scope, $sce,$state,AuthService,toastr,$rootScope) {
    var openedToasts =[];
    $scope.logout = function(){
      
      AuthService.logout().then(function(data){
        localStorage.removeItem("user");
        $state.go('auth')
        openedToasts.push(toastr["success"]("Deslogueo exitoso", "Exito", $rootScope.toastDefautlOptions));

      })

      

    };

   
  }
})();