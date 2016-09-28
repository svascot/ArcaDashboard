(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viajes')
      .controller('ViajesCtrl', ViajesCtrl);

  /** @ngInject */
  function ViajesCtrl($scope,ViajesService,VehiculosService) {
    
    VehiculosService.listarVehiculos({}).then(function(vehiculos){
    	$scope.vehiculos = vehiculos;
    })

    $scope.crearViaje = function(viaje){
    	console.dir(viaje);
    }
  }
})();
