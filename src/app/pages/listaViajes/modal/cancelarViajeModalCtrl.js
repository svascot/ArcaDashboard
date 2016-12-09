(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('CancelarViajeModalCtrl', CancelarViajeModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CancelarViajeModalCtrl($scope,$rootScope,ViajeService,toastr,toastrConfig,viaje,vehiculo) {

    $scope.viaje = viaje;
    $scope.vehiculo = vehiculo;

    $scope.cancelarViaje = function(){
      viaje.VehiculoId = vehiculo.id;
      listarViajesService.cancelarViaje(viaje).then(function(response){
        console.dir(response)
        openedToasts.push(toastr["success"]("Viaje cancelado", "Exito", $rootScope.toastDefautlOptions));
        $scope.viaje = {};
      });
      $rootScope.currentOpenModal.close();
    }

  }
})();
