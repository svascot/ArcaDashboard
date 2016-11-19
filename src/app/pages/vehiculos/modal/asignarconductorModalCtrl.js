(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('AsignarConductorModal', AsignarConductorModal);

  /** @ngInject */
  var openedToasts =[];
  function AsignarConductorModal($scope,VehiculosService,$rootScope,conductores,vehiculo,toastr, toastrConfig) {

    $scope.conductores = conductores;
    console.dir(conductores);
    $scope.vehiculo = vehiculo;

    $scope.actualizarVehiculo = function(){
       
          VehiculosService.actualizarConductor($scope.vehiculo).then(function(response){
           
              openedToasts.push(toastr["success"]("Conductor asignado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              $rootScope.currentOpenModal.close();
              
          })
       
    }

  }
})();
