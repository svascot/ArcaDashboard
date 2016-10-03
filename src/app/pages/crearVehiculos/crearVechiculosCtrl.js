(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crearVehiculos')
      .controller('CrearVehiculoCtrl', CrearVehiculoCtrl);

  /** @ngInject */
  var openedToasts =[];

  function CrearVehiculoCtrl($scope,VehiculosService,toastr, toastrConfig,$rootScope,vehiculos) {
    $scope.vehiculos = vehiculos
    var removerVehiculoDeLaLista = function(vehiculo){
      for (var i = $scope.vehiculos.length - 1; i >= 0; i--) {
        if($scope.vehiculos[i].id == vehiculo.id){
          $scope.vehiculos.splice(i,1);
          break;
        }
      }
    }
    
    
    $scope.verDetalles= function(vehiculo){
      if(!vehiculo.expanded){
        vehiculo.expanded = false;
      }
        vehiculo.expanded = !vehiculo.expanded;
    }
    $scope.actualizarVehiculo= function(vehiculo){
      if (confirm("Desea guardar los cambios?") == true) {
        VehiculosService.actualizarVehiculo(vehiculo).then(function(vehiculoActualizado){
          vehiculo = vehiculoActualizado;
          openedToasts.push(toastr["success"]("Vehiculo actualizado", "Exito", $rootScope.toastDefautlOptions));
        })
        
      }
    }
    $scope.eliminarVehiculo= function(vehiculo){
     if (confirm("Desea eliminar el vehiculo?") == true) {
          VehiculosService.eliminarVehiculo(vehiculo).then(function(vehiculoActualizado){         
          removerVehiculoDeLaLista(vehiculo);
          openedToasts.push(toastr["success"]("Vehiculo eliminado", "Exito", $rootScope.toastDefautlOptions));
        })
      }
    }
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
