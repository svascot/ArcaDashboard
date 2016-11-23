(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios')
      .controller('CrearUsuarioModalCtrl', CrearUsuarioModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CrearUsuarioModalCtrl($scope,UsuariosService,$rootScope,usuarios,uploadToAWS,toastr,toastrConfig) {

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
          $scope.usuarios.push(response.data);
             $timeout(function() {
                           $scope.$apply()
            });
                console.dir($scope.usuarios)
            },function(err){
              console.dir(err);
                if(err.status == 412){
                  openedToasts.push(toastr["error"](err.message, "No tienens permiso para crear ese tipo de usuario", $rootScope.toastDefautlOptions));

                }
            })
        })

      $rootScope.currentOpenModal.close();
    }


  }

})();
