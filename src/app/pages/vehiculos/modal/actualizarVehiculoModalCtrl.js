(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('ActualizarVehiculoModalCtrl', ActualizarVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function ActualizarVehiculoModalCtrl($scope,VehiculosService,$rootScope,vehiculo,uploadToAWS,toastr,toastrConfig) {
    $scope.vehiculo = vehiculo;

    $scope.actualizarVehiculo= function(vehiculo){
      //if (confirm("Desea guardar los cambios?") == true) {
        if(vehiculo.nuevaImagen){

         // uploadToAWS.uploadFiles(new Array(vehiculo.nuevaImagen)).then(function(urls){
           // vehiculo.imagen= urls[0].endPoint
            VehiculosService.actualizarVehiculo(vehiculo).then(function(vehiculoActualizado){
            vehiculo = vehiculoActualizado;
            openedToasts.push(toastr["success"]("Vehiculo actualizado", "Exito", $rootScope.toastDefautlOptions));
          })
         //})

        }
        else{
          VehiculosService.actualizarVehiculo(vehiculo).then(function(vehiculoActualizado){
          vehiculo = vehiculoActualizado;
          openedToasts.push(toastr["success"]("Vehiculo actualizado", "Exito", $rootScope.toastDefautlOptions));
        })
        }
      //}
      $rootScope.currentOpenModal.close();
    }
  }
})();
