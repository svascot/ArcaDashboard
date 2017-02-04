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
      var viajeUuid = {
        'uuid': viaje.uuid
      }
      if(viaje.cancelarTodosLosViajes){
        listarViajesService.cancelarRecurrentes(viajeUuid).then(function(response){
          console.dir("Cancelo todos los viajes")
          console.dir(response)
          openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
          $scope.viaje.estado = "Cancelado"
        });
      }else{
        listarViajesService.cancelarViaje(viajeUuid).then(function(response){
          console.dir("Cancelo este viaje en el controller")
          console.dir(response)
          openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
          $scope.viaje.estado = "Cancelado"
        });
      }
      $rootScope.currentOpenModal.close();
    }

  }
})();
