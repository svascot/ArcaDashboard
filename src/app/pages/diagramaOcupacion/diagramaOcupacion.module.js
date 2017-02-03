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
            placas:function(VehiculosService){
              return VehiculosService.placas().then(function(placas){
                      return placas;
              })
            },
            marcas:function(VehiculosService){
              return VehiculosService.marcaVehiculo().then(function(marcas){
                      return marcas;
              })
            },
            etiquetas:function(TagsService){
                 return TagsService.listar().then(function(etiquetas){
                     return etiquetas
                 })
            }
           }
        })
        ;
  }

})();
