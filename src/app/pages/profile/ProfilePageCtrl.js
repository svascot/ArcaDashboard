/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  var openedToasts =[];
  function ProfilePageCtrl($scope, $rootScope, fileReader, $filter, $uibModal,
                      UsuariosService, uploadToAWS, toastr, toastrConfig) {

    $scope.usuario = UsuariosService.getUsuario();
    $scope.passStatus = "";
    $scope.usuario.fechaNacimiento = new Date($scope.usuario.fechaNacimiento);
    $scope.usuario.cedula = Number($scope.usuario.cedula)

    $scope.openCalendar = function(e,prop) {
        this[prop] =true
        e.preventDefault();
        e.stopPropagation();

    };

    $scope.actualizarUsuario = function(usuario){

      if(usuario.password == usuario.confPass){

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
        $scope.passStatus = ""
      }else{
          $scope.passStatus = "La contraseña debe coincidir"
      }

    }

    /* DEJO ESTE CODIGO PORQUE ME PARECE INTERESANTE
    $scope.removePicture = function () {
      $scope.picture = $filter('appImage')('theme/no-photo.png');
      $scope.noPicture = true;
    };

    */



  }

})();
