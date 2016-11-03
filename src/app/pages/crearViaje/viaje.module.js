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
          title: 'Viajes',
          sidebarMeta: {
            icon: 'ion-android-calendar',
            order: 1,
          },
        });
  }
})();
