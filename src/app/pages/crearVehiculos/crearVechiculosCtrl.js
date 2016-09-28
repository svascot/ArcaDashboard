(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crearVehiculos')
      .controller('CrearVehiculoCtrl', CrearVehiculoCtrl);

  /** @ngInject */
  function CrearVehiculoCtrl($scope,VehiculosService) {
    
    
    $scope.crearVehiculo = function(vehiculo){
      VehiculosService.crearVehiculo(vehiculo).then(function(response){
        console.dir(response)
        alert("Exito")
        $scope.vehiculo = {};
      })
    }
  }
})();
