(function () {
  'use strict';

  angular.module('BlurAdmin.pages.documentos', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('documentos', {
          url: '/documentos',
          templateUrl: 'app/pages/documentos/documentos.html',
          title: 'Documentos',
          controller:'DocumentosCtrl',
          sidebarMeta: {
            icon: 'ion-document-text',
            order: 5,
          },
          resolve: {
            ViajeService:'ViajeService',
            vehiculos:function(ViajeService){
               return ViajeService.listarVehiculos({}).then(function(vehiculos){
                       return vehiculos;
               })
            }
           }
        })
        ;
  }

})();
