(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('dashboardCtrl', dashboardCtrl);

  /** @ngInject */
  var openedToasts =[];

  function dashboardCtrl($scope,VehiculosService,toastr, toastrConfig,$rootScope
    ,dashboard, uploadToAWS,UsuariosService) {

    $scope.dashboard = dashboard;

    $scope.charts = [{
      description: 'Vehiculos registrados',
      stats: $scope.dashboard[0].count,
      icon: 'garage',
    }, {
      description: 'Total viajes',
      stats: $scope.dashboard[1].totalViajesAgendandados,
      icon: 'calendar',
    }, {
      description: 'Vehiculo mas solicitado',
      stats: $scope.dashboard[1].vehiculoMasSolicitado.marca + "  " +
             $scope.dashboard[1].vehiculoMasSolicitado.referencia + " - " +
             $scope.dashboard[1].vehiculoMasSolicitado.placa,
      icon: 'car',
    }
    /*, {
      description: 'Usuarios Activos',
      stats: $scope.usuarios.length,
      icon: 'person',
    }*/
    ];

  }
})();
