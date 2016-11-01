(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios')
      .controller('UsuariosCtrl', UsuariosCtrl);

  /** @ngInject */
    var openedToasts =[];
  function UsuariosCtrl($scope,$rootScope,UsuariosService,toastr, toastrConfig,uploadToAWS) {


    $scope.openCalendar = function(e,prop) {
        this[prop] =true
        e.preventDefault();
        e.stopPropagation();

    };
    
    $scope.crearUsuario = function(usuario){
          
        uploadToAWS.uploadFiles(new Array(usuario.imagen)).then(function(urls){
        usuario.foto= urls[0].endPoint        
        UsuariosService.crearUsuario(usuario).then(function(response){          
          openedToasts.push(toastr["success"]("Usuario registrado", "Exito", $rootScope.toastDefautlOptions));
          $scope.usuario = {};
        })

        })

        

    }
  }
})();
