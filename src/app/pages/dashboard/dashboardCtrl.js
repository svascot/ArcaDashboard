(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('dashboardCtrl', dashboardCtrl);

  /** @ngInject */
  var openedToasts =[];

  function dashboardCtrl($scope,VehiculosService,toastr, toastrConfig,$rootScope,
    usuarios, vehiculos,uploadToAWS,UsuariosService) {

    $scope.vehiculos = vehiculos;
    $scope.usuarios = usuarios;

    var vehiculoModa = $scope.vehiculos[0];
    var viajesTotales = 0;
    for(var v in $scope.vehiculos){
      viajesTotales += $scope.vehiculos[v].Viajes.length
      if($scope.vehiculos[v].Viajes.length >= vehiculoModa.Viajes.length){
        vehiculoModa = $scope.vehiculos[v];
      }
    }

    $scope.charts = [{
      description: 'Vehiculos registrados',
      stats: $scope.vehiculos.length,
      icon: 'person',
    }, {
      description: 'Vehiculo mas solicitado',
      //{{vehiculo.marca}} {{vehiculo.referencia}}
      stats: vehiculoModa.marca + "  " + vehiculoModa.referencia + " - " + vehiculoModa.placa,
      icon: 'person',
    }, {
      description: 'Usuarios Activos',
      stats: $scope.usuarios.length,
      icon: 'person',
    }, {
      description: 'Viajes Totales',
      stats: viajesTotales,
      icon: 'person',
    }
    ];

  }
})();
