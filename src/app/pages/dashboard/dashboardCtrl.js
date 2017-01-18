(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('dashboardCtrl', dashboardCtrl);

  /** @ngInject */
  var openedToasts =[];

  function dashboardCtrl($scope,VehiculosService,toastr, toastrConfig,$rootScope,
    usuarios, vehiculos,uploadToAWS,UsuariosService, documentos) {

    $scope.vehiculos = vehiculos;
    $scope.usuarios = usuarios;
    $scope.documentos = documentos;

    console.log("Docuentos");
    console.log($scope.documentos);
    console.log("Docuentos");

    var vehiculoModa = $scope.vehiculos[0];
    var viajesTotales = 0;
    for(var v in $scope.vehiculos){
      viajesTotales += $scope.vehiculos[v].Viajes.length
      if($scope.vehiculos[v].Viajes.length >= vehiculoModa.Viajes.length){
        vehiculoModa = $scope.vehiculos[v];
      }
    }

    $scope.verDetalles= function(vehiculo){
      if(!vehiculo.expanded){
        vehiculo.expanded = false;
      }
        vehiculo.expanded = !vehiculo.expanded;
    }

    $scope.charts = [{
      description: 'Vehiculos registrados',
      stats: $scope.vehiculos.length,
      icon: 'garage',
    }, {
      description: 'Total viajes',
      stats: viajesTotales,
      icon: 'calendar',
    }, {
      description: 'Vehiculo mas solicitado',
      stats: vehiculoModa.marca + "  " + vehiculoModa.referencia + " - " + vehiculoModa.placa,
      icon: 'car',
    }, {
      description: 'Usuarios Activos',
      stats: $scope.usuarios.length,
      icon: 'person',
    }
    ];

  }
})();
