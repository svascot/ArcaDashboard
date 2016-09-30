(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crearVehiculos')
      .controller('CrearVehiculoCtrl', CrearVehiculoCtrl);

  /** @ngInject */
  var openedToasts =[];

  function CrearVehiculoCtrl($scope,VehiculosService,toastr, toastrConfig,$rootScope,vehiculos) {
    
    $scope.vehiculos = vehiculos
    
    $scope.crearVehiculo = function(vehiculo){
      

      VehiculosService.crearVehiculo(vehiculo).then(function(response){
        console.dir(response)
          openedToasts.push(toastr["success"]("Velhiculo registrado", "Exito", $rootScope.toastDefautlOptions));
          $scope.vehiculo = {};
          VehiculosService.listarVehiculos({}).then(function(vehiculos){
                       $scope.vehiculos = vehiculos;
          })
      })
    }
  }
})();
