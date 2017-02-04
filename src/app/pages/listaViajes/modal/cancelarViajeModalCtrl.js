(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('CancelarViajeModalCtrl', CancelarViajeModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CancelarViajeModalCtrl($scope,$rootScope,listarViajesService,toastr,toastrConfig,viaje) {

    $scope.viaje = viaje;

    $scope.cancelarViaje = function(viaje){
      var viajeUuid = {
        'uuid': viaje.uuid
      }
      if(viaje.cancelarTodosLosViajes){
        listarViajesService.cancelarRecurrentes(viajeUuid).then(function(response){
          console.dir(response)
          openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
          $scope.viaje.estado = "Cancelado"
        });
      }else{
        listarViajesService.cancelarViaje(viajeUuid).then(function(response){
          console.dir(response)
          openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
          $scope.viaje.estado = "Cancelado"
        });
      }
      $rootScope.currentOpenModal.close();
    }

  }
})();
