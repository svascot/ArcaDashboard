(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('EditarViajeModalCtrl', EditarViajeModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function EditarViajeModalCtrl($scope,$rootScope,listarViajesService,toastr,
        toastrConfig,viaje, destinos,vehiculo) {

    $scope.viaje = viaje;
    $scope.vehiculo = vehiculo;
    $scope.destinos = destinos;

    $scope.editarViaje = function(viaje){
      listarViajesService.actualizarViaje(viaje).then(function(viajeActualizado){
      viaje = viajeActualizado;
      openedToasts.push(toastr["success"]("Viaje actualizado", "Exito", $rootScope.toastDefautlOptions));
      })
      $rootScope.currentOpenModal.close();
    }

  }
})();
