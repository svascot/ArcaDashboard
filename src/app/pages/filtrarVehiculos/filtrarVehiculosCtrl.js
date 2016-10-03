(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('FiltrarVehiculosCtrl', FiltrarVehiculosCtrl);

  /** @ngInject */
  function FiltrarVehiculosCtrl($scope,$rootScope,VehiculosService) {

    $scope.vehiculos = [
      {
        "AgenciumId":"2",
        "placa":"tpt028",
        "capacidad":"15",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"true",
        "bano":"false",
        "reclinable":"true",
        "imagen":"123456",
        "marca":"Toyota",
        "referencia":"Tacoma"
      },
      {
        "AgenciumId":"2",
        "placa":"tpt029",
        "capacidad":"15",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"flase",
        "bano":"true",
        "reclinable":"true",
        "imagen":"123456",
        "marca":"Toyota",
        "referencia":"Tundra"
      },
      {
        "AgenciumId":"2",
        "placa":"tpt030",
        "capacidad":"15",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"true",
        "bano":"true",
        "reclinable":"true",
        "imagen":"123456",
        "marca":"Kia",
        "referencia":"Sorento"
      },
      {
        "AgenciumId":"2",
        "placa":"tpt031",
        "capacidad":"15",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"true",
        "bano":"true",
        "reclinable":"true",
        "imagen":"123456",
        "marca":"Chevrolet",
        "referencia":"Tahoe"
      },
    ];

    $scope.filtrar = function(filtro){
      console.dir(filtro)
      VehiculosService.listarVehiculos(filtro).then(function(response){
        $scope.vehiculos = response;
      })
    }
  }
})();
