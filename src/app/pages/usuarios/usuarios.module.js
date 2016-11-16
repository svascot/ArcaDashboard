(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('usuarios', {
          url: '/usuarios',
          templateUrl: 'app/pages/usuarios/usuarios.html',
          controller: 'UsuariosCtrl',
          title: 'Usuarios',
          sidebarMeta: {
            icon: 'ion-person-stalker',
            order: 4,
          },
          resolve: {
            UsuariosService:'UsuariosService',
            usuarios:function(UsuariosService){
               return UsuariosService.listar().then(function(usuarios){
                       return usuarios;
               })
            }
           }
        });
  }
})();
