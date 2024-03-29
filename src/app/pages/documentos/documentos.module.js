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
