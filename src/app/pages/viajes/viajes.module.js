(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viajes', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('viajes', {
          url: '/viajes',
          templateUrl: 'app/pages/viajes/viajes.html',
          controller: "ViajesCtrl",
          title: 'Viajes',
          sidebarMeta: {
            icon: 'ion-android-calendar',
            order: 2,
          },
           resolve: {
            VehiculosService:'VehiculosService',
            vehiculos:function(VehiculosService){
               return VehiculosService.listarVehiculos({}).then(function(vehiculos){
                       return vehiculos;
               })
            }
           }


        });
  }

})();
