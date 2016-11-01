(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('viaje', {
          url: '/viaje',
          templateUrl: 'app/pages/crearViaje/viaje.html',
          controller: 'ViajeCtrl',
          title: 'Crear viajes',
          sidebarMeta: {
            icon: 'ion-android-calendar',
            order: 2,
          },
        });
  }
})();
