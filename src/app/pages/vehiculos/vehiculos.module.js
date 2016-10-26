(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('vehiculos', {
          url: '/vehiculos',
          templateUrl: 'app/pages/vehiculos/vehiculos.html',
          controller: 'VehiculosCtrl',
          title: 'Crear viajes',
          sidebarMeta: {
            icon: 'ion-android-car',
            order: 2,
          },
        });
  }
})();
