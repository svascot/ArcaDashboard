(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje')
      .controller('CrearViajeModalCtrl', CrearViajeModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CrearViajeModalCtrl($scope,$rootScope,ViajeService,toastr,toastrConfig,viaje,vehiculo) {

    $scope.viaje = viaje;
    $scope.vehiculo = vehiculo;

    $scope.asignarViaje = function(){
      viaje.VehiculoId = vehiculo.id;
      ViajeService.crearViaje(viaje).then(function(response){
        console.dir(response)
        openedToasts.push(toastr["success"]("Viaje creado", "Exito", $rootScope.toastDefautlOptions));
        $scope.viaje = {};
      });
      $rootScope.currentOpenModal.close();
    }

  }
})();
