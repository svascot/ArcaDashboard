(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('dashboardCtrl', dashboardCtrl);

  /** @ngInject */
  var openedToasts =[];

  function dashboardCtrl($scope,VehiculosService,toastr, toastrConfig,$rootScope,
    usuarios, vehiculos,uploadToAWS,UsuariosService) {

    $scope.vehiculos = vehiculos
    $scope.usuarios = usuarios

    var viajesTotales = 0;
    for(var v in $scope.vehiculos){
      viajesTotales += $scope.vehiculos[v].Viajes.length
    }

    $scope.charts = [{
      description: 'Vehiculos',
      stats: $scope.vehiculos.length,
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
