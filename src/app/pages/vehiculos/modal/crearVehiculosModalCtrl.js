(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('CrearVehiculoModalCtrl', CrearVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CrearVehiculoModalCtrl($scope, marcas, VehiculosService,$rootScope,vehiculos,uploadToAWS,toastr,toastrConfig,propietarios) {
    $scope.propietarios = propietarios;
    $scope.marcas = marcas;
    $scope.referencias = {}

    $scope.switchMarca = function() {
      for(var m in $scope.marcas){
        if($scope.vehiculo.marca == $scope.marcas[m].nombre){
          $scope.referencias =  $scope.marcas[m].Referencia
        }
      }
    }

    $scope.crearVehiculo = function(vehiculo){

          VehiculosService.crearVehiculo(vehiculo).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Velhiculo registrado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              vehiculos.push(response)
          })

       //$rootScope.currentOpenModal.close();
    }
  }

})();
