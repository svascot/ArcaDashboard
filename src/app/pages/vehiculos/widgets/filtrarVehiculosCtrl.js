(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('FiltrarVehiculosCtrl', FiltrarVehiculosCtrl);

  /** @ngInject */
  function FiltrarVehiculosCtrl($scope, FiltrarVehiculosService) {
    alert("controlador filtrar");
    $scope.filtro = {};
    var vehiculo;
    $scope.filtrar = function(){
      alert("metodo filtrar");
      FiltrarVehiculosService.filtrar($scope.filtro).then(function(response){
          vehiculo=response;
      })
    }
  }
})();
