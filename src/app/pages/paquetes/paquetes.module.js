(function () {
  'use strict';

  angular.module('BlurAdmin.pages.paquetes', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('paquetes', {
          url: '/paquetes',
          templateUrl: 'app/pages/paquetes/paquetes.html',
          title: 'Paquetes',
          controller:'paquetesCtrl',
          sidebarMeta: {
            icon: 'ion-earth',
            order: 5,
          },
          resolve: {
            
            paquetes:function(PaquetesService){
                 return PaquetesService.listarPaquetes().then(function(paquetes){
                     return paquetes
                 })
            },
            destinos:function(DestinosService){
                return DestinosService.listarDestinos().then(function(destinos){
                     return destinos
                 })
            }       
            

           }
        })
        ;
  }

})();
