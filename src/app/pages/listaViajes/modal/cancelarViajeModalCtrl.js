(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('CancelarViajeModalCtrl', CancelarViajeModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CancelarViajeModalCtrl($scope,$rootScope,listarViajesService,toastr,toastrConfig,viaje) {

    $scope.viaje = viaje;

    $scope.cancelarViaje = function(viaje){

      listarViajesService.cancelarViaje(viaje).then(function(response){
        console.dir(response)
        openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
        $scope.viaje = {};
      });
      $rootScope.currentOpenModal.close();
    }

  }
})();
