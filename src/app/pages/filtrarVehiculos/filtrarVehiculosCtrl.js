(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('FiltrarVehiculosCtrl', FiltrarVehiculosCtrl);

  /** @ngInject */
  function FiltrarVehiculosCtrl($scope,$rootScope,VehiculosService) {
    $scope.vehiculos = {};
  /**  $scope.vehiculos = [
      {
        "AgenciumId":"2",
        "placa":"KSO028",
        "capacidad":"24",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"true",
        "bano":"false",
        "reclinable":"true",
        "imagen":"http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-White-BMW-M2-Coupe-Front-View-Car-PNG-Image.png",
        "marca":"Toyota",
        "referencia":"Tacoma"
      },
      {
        "AgenciumId":"2",
        "placa":"WDS029",
        "capacidad":"15",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"flase",
        "bano":"true",
        "reclinable":"true",
        "imagen":"https://www.welovesolo.com/wp-content/uploads/2014/08/p16fepdsn31csuana114r1qr217ra9-details.jpg",
        "marca":"Toyota",
        "referencia":"Tundra"
      },
      {
        "AgenciumId":"2",
        "placa":"ASD030",
        "capacidad":"18",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"true",
        "bano":"true",
        "reclinable":"true",
        "imagen":"http://images.newcars.com/images/car-pictures/original/2010-Mazda-CX-7-SUV-i-SV-4dr-Front-wheel-Drive-Exterior-3.png",
        "marca":"Kia",
        "referencia":"Sorento"
      },
      {
        "AgenciumId":"2",
        "placa":"MKD031",
        "capacidad":"12",
        "modelo":"2017",
        "audio":"false",
        "video":"true",
        "aire":"true",
        "bano":"true",
        "reclinable":"false",
        "imagen":"https://www.mazdausa.com/siteassets/vehicles/2016/m3s/trims/s-gt/2016-m3s-sgt-soulred-frontangle-global.png",
        "marca":"Chevrolet",
        "referencia":"Tahoe"
      },
    ];
*/
    $scope.expand = function(vehiculo){
      vehiculo.expanded = !vehiculo.expanded;
    }

    $scope.filtrar = function(filtro){
      console.dir(filtro)
      if(filtro.fechaInicio != null && filtro.fechaFin != null){
        filtro.fechaInicio = filtro.fechaInicio.getTime()
        filtro.fechaFin = filtro.fechaFin.getTime()
      }
      VehiculosService.listarVehiculos(filtro).then(function(response){
        $scope.vehiculos = response;
      })
    }
  }
})();
