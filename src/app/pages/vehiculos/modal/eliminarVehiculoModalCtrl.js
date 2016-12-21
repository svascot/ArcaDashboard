(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('EliminarVehiculoModalCtrl', EliminarVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function EliminarVehiculoModalCtrl($scope,VehiculosService,$rootScope,vehiculo,vehiculos,uploadToAWS,toastr,toastrConfig) {
    $scope.vehiculo = vehiculo;
    $scope.eliminarVehiculo = function(vehiculo){
      VehiculosService.eliminarVehiculo(vehiculo).then(function(vehiculoActualizado){
        $scope.removerVehiculoDeLaLista(vehiculo);
        openedToasts.push(toastr["success"]("Vehiculo eliminado", "Exito", $rootScope.toastDefautlOptions));
      })
       $rootScope.currentOpenModal.close();
    }

    $scope.removerVehiculoDeLaLista = function(vehiculo){
      for (var i = $scope.vehiculos.length - 1; i >= 0; i--) {
        if($scope.vehiculos[i].id == vehiculo.id){
          $scope.vehiculos.splice(i,1);
          break;
        }
      }
    }
  }

})();
