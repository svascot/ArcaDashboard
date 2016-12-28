(function () {
  'use strict';
//https://github.com/Gillardo/bootstrap-ui-datetime-picker
  angular.module('BlurAdmin.pages.usuarios')
      .controller('actualizarUsuarioModalCtrl', actualizarUsuarioModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function actualizarUsuarioModalCtrl($scope,UsuariosService,$rootScope,usuario,uploadToAWS,toastr,toastrConfig) {
    usuario.fechaNacimiento = new Date(usuario.fechaNacimiento);
    usuario.cedula = Number(usuario.cedula)
    $scope.usuario = usuario;
    $scope.openCalendar = function(e,prop) {
        this[prop] =true
        e.preventDefault();
        e.stopPropagation();

    };

    $scope.actualizarUsuario = function(usuario){

      if(usuario.nuevaImagen){
         uploadToAWS.uploadFiles(new Array(usuario.nuevaImagen)).then(function(urls){
        usuario.foto= urls[0].endPoint
        UsuariosService.actualizarUsuario(usuario).then(function(response){
            openedToasts.push(toastr["success"]("Usuario actualizado", "Exito", $rootScope.toastDefautlOptions));     
            },function(err){
              console.dir(err);
                if(err.status == 412){
                  openedToasts.push(toastr["error"](err.message, "No tienens permiso para actualizar ese tipo de usuario", $rootScope.toastDefautlOptions));
                  
                }
            })
        })
      }
      else{
        UsuariosService.actualizarUsuario(usuario).then(function(response){
          openedToasts.push(toastr["success"]("Usuario actualizado", "Exito", $rootScope.toastDefautlOptions));
        },function(err){
              console.dir(err);
                if(err.status == 412){
                  openedToasts.push(toastr["error"](err.message, "No tienens permiso para actualizar ese tipo de usuario", $rootScope.toastDefautlOptions));
                  
                }
            })        
      }
       

      $rootScope.currentOpenModal.close();
     
    }


  }

})();
