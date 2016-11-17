(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('CrearVehiculoModalCtrl', CrearVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CrearVehiculoModalCtrl($scope,VehiculosService,$rootScope,vehiculos,uploadToAWS,toastr,toastrConfig) {

    $scope.crearVehiculo = function(vehiculo,imagenVehiculo){
       uploadToAWS.uploadFiles(new Array(imagenVehiculo)).then(function(urls){
          vehiculo.imagen= urls[0].endPoint
          VehiculosService.crearVehiculo(vehiculo).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Velhiculo registrado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              VehiculosService.listarVehiculos({}).then(function(vehiculos){
                           $scope.vehiculos = vehiculos;
              })
          })
       })
       $rootScope.currentOpenModal.close();
    }
  }

})();
