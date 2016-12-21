(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          controller: 'dashboardCtrl',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
          resolve:{
             vehiculos:function(VehiculosService){
                  return VehiculosService.listarVehiculos().then(function(vehiculos){
                      return vehiculos;
                  })
             },
             usuarios:function(UsuariosService){
                return UsuariosService.listar().then(function(usuarios){
                        return usuarios;
                })
             }
          }
        });
  }

})();
