(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('EliminarVehiculoModalCtrl', EliminarVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function EliminarVehiculoModalCtrl($scope,VehiculosService,$rootScope,uploadToAWS,toastr,toastrConfig,vehiculo,vehiculos) {
    $scope.vehiculo = vehiculo;
    $scope.eliminarVehiculo = function(vehiculo){
      VehiculosService.eliminarVehiculo(vehiculo).then(function(vehiculoActualizado){
        removerVehiculoDeLaLista(vehiculo);
        openedToasts.push(toastr["success"]("Vehiculo eliminado", "Exito", $rootScope.toastDefautlOptions));
      })
       $rootScope.currentOpenModal.close();
    }

    var removerVehiculoDeLaLista = function(vehiculo){
      for (var i = vehiculos.length - 1; i >= 0; i--) {
        if(vehiculos[i].id == vehiculo.id){
          vehiculos.splice(i,1);
          break;
        }
      }
    }
  }

})();
