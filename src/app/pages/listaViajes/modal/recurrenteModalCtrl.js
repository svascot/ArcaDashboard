(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('RecurrenteModalCtrl', RecurrenteModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function RecurrenteModalCtrl($scope,$rootScope,listarViajesService,toastr,toastrConfig,viaje,vehiculo) {

    $scope.viaje = viaje;
    $scope.vehiculo = vehiculo;
    $scope.recurrente = [];

    for(var v in vehiculo.Viajes){
      if(vehiculo.Viajes[v].recurrenteId == $scope.viaje.recurrenteId){
        $scope.recurrente.push(vehiculo.Viajes[v]);
      }
    }

    $scope.editarViaje = function(viaje){
      listarViajesService.actualizarViaje(viaje).then(function(viajeActualizado){
      viaje = viajeActualizado;
      openedToasts.push(toastr["success"]("Viaje actualizado", "Exito", $rootScope.toastDefautlOptions));
      })
      $rootScope.currentOpenModal.close();
    }

    $scope.cancelarViaje = function(viaje){
      //editarViaje(viaje);
      var viajeUuid = {
        'uuid': viaje.uuid
      }
      listarViajesService.cancelarViaje(viajeUuid).then(function(response){
        console.dir(response)
        openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
        $scope.viaje.estado = "Cancelado"
      });
      $rootScope.currentOpenModal.close();
    }

  }
})();
