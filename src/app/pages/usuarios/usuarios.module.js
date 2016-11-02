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
            order: 2,
          },
          resolve: {
            UsuariosService:'UsuariosService',
            usuarios:function(UsuariosService){
               return UsuariosService.listar().then(function(usuarios){
                       return usuarios;
               })/*
               return [
                        {
                          "id": 14,
                          "deletedAt": null,
                          "cedula": "9632148",
                          "nombre": "Vasco",
                          "apellidoPaterno": null,
                          "apellidoMaterno": null,
                          "genero": null,
                          "fechaNacimiento": "2016-11-24T05:00:00.000Z",
                          "celular": null,
                          "tipoSangre": null,
                          "rol": "conductor",
                          "telefono": "+573206156698",
                          "activo": true,
                          "email": "juan.mejia.zuluaga@gmail.com",
                          "foto": "https://s3-us-west-2.amazonaws.com/arca/ff57e877-f5ed-7f8f-edad-9d03fb0a39c1.jpg",
                          "AgenciumId": 2,
                          "VehiculoId": null
                        },
                        {
                          "id": 5,
                          "deletedAt": null,
                          "cedula": "1017199032",
                          "nombre": "Camilo",
                          "apellidoPaterno": null,
                          "apellidoMaterno": null,
                          "genero": null,
                          "fechaNacimiento": null,
                          "celular": null,
                          "tipoSangre": null,
                          "rol": "despachador",
                          "telefono": null,
                          "activo": true,
                          "email": null,
                          "foto": null,
                          "AgenciumId": 2,
                          "VehiculoId": null
                        },
                        {
                          "id": 12,
                          "deletedAt": null,
                          "cedula": "123",
                          "nombre": "David",
                          "apellidoPaterno": null,
                          "apellidoMaterno": null,
                          "genero": null,
                          "fechaNacimiento": "2016-11-09T05:00:00.000Z",
                          "celular": null,
                          "tipoSangre": null,
                          "rol": "conductor",
                          "telefono": "+573206156698",
                          "activo": true,
                          "email": "juan.mejia.zuluaga@gmail.com",
                          "foto": "https://s3-us-west-2.amazonaws.com/arca/fa1a2fc8-c871-da6d-b565-6901f6faf4a9.jpg",
                          "AgenciumId": 2,
                          "VehiculoId": null
                        }
                      ]*/

            }
           }
        });
  }
})();
