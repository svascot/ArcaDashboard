(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPorHora', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('tarifasPorHora', {
          url: '/tarifasPorHora',
          templateUrl: 'app/pages/tarifasPorHora/tarifasPorHora.html',
          title: 'Tarifas por hora',
          controller:'TarifasPorHoraCtrl',
          sidebarMeta: {
            icon: 'ion-cash',
            order: 4,
          },
          resolve: {
            TarifasPorHoraService:'TarifasPorHoraService',
            tarifas:function(TarifasPorHoraService){
               return TarifasPorHoraService.listarTarifasPorHora().then(function(tarifas){
                       return tarifas
               })
            }
          }
        });
  }

})();
