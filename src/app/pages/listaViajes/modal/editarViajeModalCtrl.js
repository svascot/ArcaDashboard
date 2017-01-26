(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('EditarViajeModalCtrl', EditarViajeModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function EditarViajeModalCtrl($scope,$rootScope,listarViajesService,toastr,
        toastrConfig,viaje, vehiculo) {

    $scope.viaje = viaje;
    $scope.vehiculo = vehiculo;

    $scope.editarViaje = function(viaje){
    /*  var viajeUuid = {
        'uuid': viaje.uuid
      }
      listarViajesService.cancelarViaje(viajeUuid).then(function(response){
        console.dir(response)
        openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
        $scope.viaje.estado = "Cancelado";
      });*/
      $rootScope.currentOpenModal.close();
    }

  }
})();
