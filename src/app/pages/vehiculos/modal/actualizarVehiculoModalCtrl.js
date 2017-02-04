(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('ActualizarVehiculoModalCtrl', ActualizarVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function ActualizarVehiculoModalCtrl($scope,VehiculosService,$rootScope,toastr,toastrConfig,params) {
    $scope.etiquetas = params.tags;
    $scope.vehiculo = params.vehiculo;
    $scope.propietarios = params.propietarios;
    $scope.marcas = params.marcas;
    $scope.referencias = {}

    $scope.ver=function(){
      console.dir(vehiculo.newTags);
    }
    

    $scope.addTag=function(tag){
      console.log(tag)
      var index = tags.indexOf(tag);
      if(index>=0){
          tags.splice(index,1)
      }else{
          tags.push(tag)
      }
      vehiculo.tags = tags;
    }
    
    $scope.switchMarca = function() {
      for(var m in $scope.marcas){
        if($scope.vehiculo.marca == $scope.marcas[m].nombre){
          $scope.referencias =  $scope.marcas[m].Referencia
        }
      }
    }

    $scope.actualizarVehiculo= function(vehiculo){

        delete vehiculo.Viajes // cuando ya tiene muchos viajes el servidor rechaza el update
        if(vehiculo.nuevaImagen){

         
            VehiculosService.actualizarVehiculo(vehiculo).then(function(vehiculoActualizado){
            vehiculo = vehiculoActualizado;
            openedToasts.push(toastr["success"]("Vehiculo actualizado", "Exito", $rootScope.toastDefautlOptions));
          })
         

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
