(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('FiltrarVehiculosCtrl', FiltrarVehiculosCtrl);

  /** @ngInject */
  function FiltrarVehiculosCtrl($scope,$rootScope,VehiculosService) {

    $scope.vehiculos = {};

    $scope.filtrar = function(filtro){
      console.dir(filtro)
      VehiculosService.listarVehiculos(filtro).then(function(response){
        $scope.vehiculos = response;
      })
    }
  }
})();
