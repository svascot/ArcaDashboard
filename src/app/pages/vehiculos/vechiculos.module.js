(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('crearVehiculos', {
          url: '/crearVehiculos',
          templateUrl: 'app/pages/vehiculos/vehiculos.html',
          title: 'Vehículos',
          controller:'vehiculoCtrl',
          sidebarMeta: {
            icon: 'ion-android-car',
            order: 3,
          },
          resolve: {
            vehiculos:function(VehiculosService){
               return VehiculosService.listarVehiculos({}).then(function(vehiculos){
                       return vehiculos;
               })
            },
            marcas:function(VehiculosService){
              return VehiculosService.marcaVehiculo().then(function(marcas){
                      return marcas;
              })
            }
           }
        })
        ;
  }

})();
