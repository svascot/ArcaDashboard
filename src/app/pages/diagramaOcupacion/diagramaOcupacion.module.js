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
          title: 'Diagrama de ocupacion',
          controller:'diagramaOcupacionCtrl',
          sidebarMeta: {
            icon: 'ion-android-car',
            order: 2,
          },
          resolve: {
            VehiculosService:'VehiculosService',
            vehiculos:function(VehiculosService){
               return VehiculosService.listarVehiculos({}).then(function(vehiculos){
                console.dir(vehiculos);
                       return vehiculos;
               })
            }
           }
        })
        ;
  }

})();
