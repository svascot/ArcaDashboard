(function () {
  'use strict';

  angular.module('BlurAdmin.pages.destinos', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('destinos', {
          url: '/destinos',
          templateUrl: 'app/pages/destinos/destinos.html',
          title: 'Destinos',
          controller:'destinosCtrl',
          sidebarMeta: {
            icon: 'ion-earth',
            order: 3,
          },
          resolve: {
            
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
