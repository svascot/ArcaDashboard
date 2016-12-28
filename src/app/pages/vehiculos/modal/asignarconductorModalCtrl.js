(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('AsignarConductorModal', AsignarConductorModal);

  /** @ngInject */
  var openedToasts =[];
  function AsignarConductorModal($scope,VehiculosService,$rootScope,conductores,vehiculo,toastr, toastrConfig,vehiculos) {

    $scope.conductores = conductores;
    console.dir(conductores);
    $scope.vehiculo = vehiculo;
    var removerConductor = function(idConductor){
      for (var i = vehiculos.length - 1; i >= 0; i--) {
        if(vehiculos[i].UsuarioId == idConductor){
            delete vehiculos[i].Usuario;
        }
      }
    }

    $scope.actualizarVehiculo = function(){
          var usuario = JSON.parse(JSON.stringify($scope.vehiculo.Usuario)) // clono la variable a una ubiacion nueva de memoria
          removerConductor($scope.vehiculo.Usuario.id)
          $scope.vehiculo.UsuarioId = usuario.id;
          VehiculosService.actualizarConductor($scope.vehiculo).then(function(response){
              vehiculo.Usuario = usuario;
              openedToasts.push(toastr["success"]("Conductor asignado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              $rootScope.currentOpenModal.close();
              
          })
       
    }

  }
})();
