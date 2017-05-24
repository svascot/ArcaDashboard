(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ordenes', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ordenes', {
          url: '/ordenes',
          templateUrl: 'app/pages/ordenes/ordenes.html',
          title: 'Ordenes',
          controller:'OrdenesCtrl',
          sidebarMeta: {
            icon: 'ion-cash',
            order: 5,
          },
          resolve: {
            OrdenesService:'OrdenesService',
            ordenes:function(OrdenesService){
               return OrdenesService.listarOrdenes().then(function(ordenes){
                       return ordenes
               })
            }
          }
        })
        ;
  }

})();
