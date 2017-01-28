(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .controller('vehiculoCtrl', vehiculoCtrl);

  /** @ngInject */
  var openedToasts =[];

  function vehiculoCtrl($scope,VehiculosService,toastr, marcas, toastrConfig,$rootScope,vehiculos,uploadToAWS,UsuariosService,TagsService) {
    $scope.marcas = marcas
    $scope.vehiculos = vehiculos
    $scope.openModalDocumentos = function(vehiculo){
      $rootScope.openModalController('app/pages/documentos/documentos.html','DocumentosCtrl',
        {
          propietario:function () {
            return vehiculo;
          }
        }
      )
    }
    $scope.verDetalles= function(vehiculo){
      if(!vehiculo.expanded){
        vehiculo.expanded = false;
      }
        vehiculo.expanded = !vehiculo.expanded;
    }

    $scope.crearVehiculo = function(vehiculo,imagenVehiculo){
       uploadToAWS.uploadFiles(new Array(imagenVehiculo)).then(function(urls){
          vehiculo.imagen= urls[0].endPoint
          VehiculosService.crearVehiculo(vehiculo).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Velhiculo registrado", "Exito", $rootScope.toastDefautlOptions));
              $scope.vehiculo = {};
              VehiculosService.listarVehiculos({}).then(function(vehiculos){
                           $scope.vehiculos = vehiculos;
              })
          })
       })
    }

    $scope.openCrearVehiculo = function(){
      $rootScope.openModalController('app/pages/vehiculos/modal/crearVehiculoModal.html','CrearVehiculoModalCtrl',
        {
          vehiculos:function () {
            return vehiculos;
          },
          marcas:function (){
            return marcas;
          },
          propietarios:function (){
            return UsuariosService.listCoductoresYAfiliados().then(function(coductoresYAfiliados){
                return coductoresYAfiliados
            });
          }
        }
      )
    }

    $scope.openModalActualizarVehiculo = function(vehiculo){
      $rootScope.openModalController('app/pages/vehiculos/modal/actualizarVehiculoModal.html','ActualizarVehiculoModalCtrl',
        {
          vehiculo:function () {
            return vehiculo;
          },
          marcas:function (){
            return marcas;
          },
          tags:function (TagsService){
            return TagsService.listar().then(function(tags){
                return tags
            });
          },
          propietarios:function (){
            return UsuariosService.listCoductoresYAfiliados().then(function(coductoresYAfiliados){
                return coductoresYAfiliados
            });
          }
        }
      )
    }

    $scope.openModalEliminarVehiculo = function(vehiculo){
      $rootScope.openModalController('app/pages/vehiculos/modal/eliminarVehiculoModal.html','EliminarVehiculoModalCtrl',
        {
          vehiculo:function () {
            return vehiculo;
          },
          vehiculos:function () {
            return vehiculos;
          }
        }
      )
    }

    $scope.openModalAsignarConductor = function(vehiculo){
      $rootScope.openModalController('app/pages/vehiculos/modal/asignarConductorModal.html','AsignarConductorModal',
        {
          vehiculo:function () {
            return vehiculo;
          },
          conductores:function () {
            return UsuariosService.listCoductoresYAfiliados().then(function(coductoresYAfiliados){
                return coductoresYAfiliados
            });
          },
          vehiculos:function(){
            return vehiculos
          }

        }
      )
    }

  }
})();
