(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('CrearVehiculoModalCtrl', CrearVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CrearVehiculoModalCtrl($scope,VehiculosService,$rootScope,vehiculos,uploadToAWS,toastr,toastrConfig) {

    $scope.crearVehiculo = function(vehiculo){
     
          VehiculosService.crearVehiculo(vehiculo).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Velhiculo registrado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              vehiculos.push(response)
          })
     
       $rootScope.currentOpenModal.close();
    }
  }

})();
