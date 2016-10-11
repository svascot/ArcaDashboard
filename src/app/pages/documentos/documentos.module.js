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
            order: 3,
          },
          resolve: {
            VehiculosService:'VehiculosService',
            vehiculos:function(VehiculosService){
               return VehiculosService.listarVehiculos({}).then(function(vehiculos){
                       return vehiculos;
               })
            }
           }
        })
        ;
  }

})();
