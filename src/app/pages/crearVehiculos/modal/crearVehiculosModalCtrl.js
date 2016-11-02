(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crearVehiculos')
      .controller('CrearVehiculoModalCtrl', CrearVehiculoModalCtrl);

  /** @ngInject */
  function CrearVehiculoModalCtrl($scope,CrearVehiculosService,$rootScope,vehiculos,uploadToAWS) {

    $scope.crearVehiculo = function(vehiculo,imagenVehiculo){
       uploadToAWS.uploadFiles(new Array(imagenVehiculo)).then(function(urls){
          vehiculo.imagen= urls[0].endPoint
          CrearVehiculosService.crearVehiculo(vehiculo).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Velhiculo registrado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              CrearVehiculosService.listarVehiculos({}).then(function(vehiculos){
                           $scope.vehiculos = vehiculos;
              })
          })
       })
    }

  }
})();
