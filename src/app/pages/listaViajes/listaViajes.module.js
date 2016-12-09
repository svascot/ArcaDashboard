(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('listarViajes', {
          url: '/listarViajes',
          templateUrl: 'app/pages/listaViajes/listaViajes.html',
          controller: 'listarViajesCtrl',
          title: 'Lista de viajes',
          sidebarMeta: {
            icon: 'ion-android-calendar',
            order: 6,
          },
          resolve:{
             vehiculos:function(VehiculosService){
                  return VehiculosService.listarVehiculos().then(function(vehiculos){
                    console.dir(vehiculos);
                      return vehiculos;
                  })
             }
          }
        });
  }
})();
