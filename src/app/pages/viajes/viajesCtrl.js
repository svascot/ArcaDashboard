(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viajes')
      .controller('ViajesCtrl', ViajesCtrl);

  /** @ngInject */
  function ViajesCtrl($scope,ViajesService,VehiculosService,vehiculos) {
    
    $scope.vehiculos =vehiculos;

    
    $scope.crearViaje = function(viaje){
    	ViajesService.crearViaje(viaje).then(function(response){
        console.dir(response)
        alert("Exito")
        $scope.viaje = {};
      })
    }
  }
})();
