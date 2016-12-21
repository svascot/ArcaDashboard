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

    $scope.charts = [{
      description: 'Vehiculos',
      stats: $scope.vehiculos.length,
      icon: 'person',
    }, {
      description: 'usuarios',
      stats: $scope.usuarios.length,
      icon: 'person',
    }
    ];

  }
})();
