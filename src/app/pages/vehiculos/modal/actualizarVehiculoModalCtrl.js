(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('ActualizarVehiculoModalCtrl', ActualizarVehiculoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function ActualizarVehiculoModalCtrl($scope,marcas,VehiculosService,$rootScope,vehiculo,uploadToAWS,toastr,toastrConfig,propietarios,tags) {
    $scope.etiquetas = tags;
    $scope.vehiculo = vehiculo;
    $scope.propietarios = propietarios;
    $scope.marcas = marcas;
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
