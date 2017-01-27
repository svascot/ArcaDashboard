(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('viaje', {
          url: '/viaje',
          templateUrl: 'app/pages/viaje/viaje.html',
          controller: 'ViajeCtrl',
          title: 'Viajes',
          sidebarMeta: {
            icon: 'ion-android-calendar',
            order: 1,
          },
          resolve:{
            destinos:function(ViajeService){
                 return ViajeService.listarDestinos().then(function(destinos){
                     return destinos
                 })
            },
             vehiculos:function(VehiculosService){
                  return VehiculosService.listarVehiculos().then(function(vehiculos){
                      return vehiculos
                  })
             }
          }
        });
  }
})();
