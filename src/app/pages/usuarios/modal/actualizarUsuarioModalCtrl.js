(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios')
      .controller('actualizarUsuarioModalCtrl', actualizarUsuarioModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function actualizarUsuarioModalCtrl($scope,UsuariosService,$rootScope,usuario,uploadToAWS,toastr,toastrConfig) {
    $scope.usuario = usuario;
    $scope.openCalendar = function(e,prop) {
        this[prop] =true
        e.preventDefault();
        e.stopPropagation();

    };

    $scope.actualizarUsuario = function(usuario){

      if(usuario.nuevaImagen){
         uploadToAWS.uploadFiles(new Array(usuario.imagen)).then(function(urls){
        usuario.foto= urls[0].endPoint
        UsuariosService.actualizarUsuario(usuario).then(function(response){
          openedToasts.push(toastr["success"]("Usuario actualizado", "Exito", $rootScope.toastDefautlOptions));
          $scope.usuarios.push(response.data);
             $timeout(function() {
                           $scope.$apply()
                            
            });
                console.dir($scope.usuarios)
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
          $scope.usuarios.push(response.data);
             $timeout(function() {
                           $scope.$apply()
                           
            });
                console.dir($scope.usuarios)
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
