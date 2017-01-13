(function () {
  'use strict';

  angular.module('BlurAdmin.pages.diagramaOcupacion', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('diagramaOcupacion', {
          url: '/diagramaOcupacion',
          templateUrl: 'app/pages/diagramaOcupacion/diagramaOcupacion.html',
          title: 'Disponibilidad',
          controller:'diagramaOcupacionCtrl',
          sidebarMeta: {
            icon: 'ion-clock',
            order: 2,
          },
          resolve: {
            ViajeService:'ViajeService',
            vehiculos:function(ViajeService){
               return ViajeService.listarVehiculos({}).then(function(vehiculos){
                console.dir(vehiculos);
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
