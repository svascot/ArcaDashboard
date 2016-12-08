(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios')
      .controller('UsuariosCtrl', UsuariosCtrl);

  /** @ngInject */
    var openedToasts =[];
  function UsuariosCtrl($scope,$rootScope,UsuariosService,toastr, toastrConfig,uploadToAWS,usuarios,$timeout) {

    $scope.usuarios = usuarios;

    $scope.openCalendar = function(e,prop) {
        this[prop] =true
        e.preventDefault();
        e.stopPropagation();

    };

    $scope.openModalDocumentos = function(usuario){
      $rootScope.openModalController('app/pages/documentos/documentos.html','DocumentosCtrl',
        {
          propietario:function () {
            return usuario;
          }
        }
      )
    }

    $scope.openCrearUsuario = function(){
      $rootScope.openModalController('app/pages/usuarios/modal/crearUsuarioModal.html','CrearUsuarioModalCtrl',
        {
          usuarios:function () {
            return usuarios;
          }
        }
      )
    }

    $scope.openActualizarUsuario = function(usuario){
      $rootScope.openModalController('app/pages/usuarios/modal/actualizarUsuarioModal.html','ActializarUsuarioModalCtrl',
        {
          usuarios:function () {
            return usuarios;
          }
        }
      )
    }

    $scope.verDetalles= function(item){
      if(!item.expanded){
        item.expanded = false;
      }
        item.expanded = !item.expanded;
    }
  }
})();
