(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje')
      .controller('CrearViajeModalCtrl', CrearViajeModalCtrl);

  /** @ngInject */
  var openedToasts =[];

 


  function CrearViajeModalCtrl($scope,$rootScope,ViajeService,toastr,toastrConfig,viaje,vehiculo,vehiculos) {

    $scope.viaje = viaje;
    $scope.vehiculo = vehiculo;

    $scope.asignarViaje = function(){
      viaje.VehiculoId = vehiculo.id;
      ViajeService.crearViaje(viaje).then(function(response){
        console.dir(response)
        openedToasts.push(toastr["success"]("Viaje creado", "Exito", $rootScope.toastDefautlOptions));
        $scope.viaje = {};
        removerVehiculoDeLaLista(vehiculo)
      });
      $rootScope.currentOpenModal.close();
    }

     var removerVehiculoDeLaLista = function(vehiculo){
      for (var i = vehiculos.length - 1; i >= 0; i--) {
        if(vehiculos[i].id == vehiculo.id){
          vehiculos.splice(i,1);
          break;
        }
      }
  }

  }
})();
