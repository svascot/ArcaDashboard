(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crearVehiculos', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crearVehiculos', {
          url: '/crearVehiculos',
          templateUrl: 'app/pages/crearVehiculos/crearVehiculos.html',
          title: 'Registrar vehiculos',
          controller:'CrearVehiculoCtrl',
          sidebarMeta: {
            icon: 'ion-android-car',
            order: 2,
          },
        })
        ;
  }

})();
