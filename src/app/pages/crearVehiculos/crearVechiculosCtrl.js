(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crearVehiculos')
      .controller('CrearVehiculoCtrl', CrearVehiculoCtrl);

  /** @ngInject */
  var openedToasts =[];

  function CrearVehiculoCtrl($scope,ViajeService,toastr, toastrConfig,$rootScope,vehiculos,uploadToAWS) {

//TODO Cambiar tooooooodo con el diseno de mona
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
        if(vehiculo.nuevaImagen){

          uploadToAWS.uploadFiles(new Array(vehiculo.nuevaImagen)).then(function(urls){
            vehiculo.imagen= urls[0].endPoint
            ViajeService.actualizarVehiculo(vehiculo).then(function(vehiculoActualizado){
            vehiculo = vehiculoActualizado;
            openedToasts.push(toastr["success"]("Vehiculo actualizado", "Exito", $rootScope.toastDefautlOptions));
          })
         })

        }
        else{
          ViajeService.actualizarVehiculo(vehiculo).then(function(vehiculoActualizado){
          vehiculo = vehiculoActualizado;
          openedToasts.push(toastr["success"]("Vehiculo actualizado", "Exito", $rootScope.toastDefautlOptions));
        })
        }
      }
    }

    $scope.eliminarVehiculo= function(vehiculo){
     if (confirm("Desea eliminar el vehiculo?") == true) {
          ViajeService.eliminarVehiculo(vehiculo).then(function(vehiculoActualizado){
          removerVehiculoDeLaLista(vehiculo);
          openedToasts.push(toastr["success"]("Vehiculo eliminado", "Exito", $rootScope.toastDefautlOptions));
        })
      }
    }

    $scope.crearVehiculo = function(vehiculo,imagenVehiculo){
       uploadToAWS.uploadFiles(new Array(imagenVehiculo)).then(function(urls){
          vehiculo.imagen= urls[0].endPoint
          ViajeService.crearVehiculo(vehiculo).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Velhiculo registrado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              ViajeService.listarVehiculos({}).then(function(vehiculos){
                           $scope.vehiculos = vehiculos;
              })
          })
       })
    }

    $scope.openCrearVehiculo = function(){
      $rootScope.openModalController('app/pages/crearVehiculos/modal/crearVehiculoModal.html','CrearVehiculoModalCtrl',{vehiculos:function () {
        return vehiculos;
      }})
    }

  }
})();
