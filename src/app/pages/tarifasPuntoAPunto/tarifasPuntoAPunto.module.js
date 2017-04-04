(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPuntoAPunto', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('tarifasPuntoAPunto', {
          url: '/tarifasPuntoAPunto',
          templateUrl: 'app/pages/tarifasPuntoAPunto/tarifasPuntoAPunto.html',
          title: 'Punto a punto',
          controller:'TarifasPuntoAPuntoCtrl',
          sidebarMeta: {
            icon: 'ion-cash',
            order: 4,
          },
          resolve: {
            TarifasPuntoAPuntoService:'TarifasPuntoAPuntoService',
            tarifas:function(TarifasPuntoAPuntoService){
               return TarifasPuntoAPuntoService.listarTarifasPuntoAPunto().then(function(tarifas){
                       return tarifas
               })
            },
            destinos:function(ViajeService){
                 return ViajeService.listarDestinos().then(function(destinos){
                     return destinos
                 })
            }
          }
        })
        ;
  }

})();
