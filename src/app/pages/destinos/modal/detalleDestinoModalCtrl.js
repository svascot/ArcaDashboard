(function () {
  'use strict';

  angular.module('BlurAdmin.pages.destinos')
      .controller('detalleDestinoModal', detalleDestinoModal);

  /** @ngInject */
  var openedToasts =[];
  function detalleDestinoModal($scope,$rootScope,uploadToAWS,toastr,toastrConfig,DestinosService,destinosActuales,destino) {
     
    $scope.destino = destino;

    var actualizarDestino = function(destino){
      DestinosService.actualizarDestino(destino).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Destino actualizado", "Exito", $rootScope.toastDefautlOptions));
              $scope.destino = {};              
          })

       $rootScope.currentOpenModal.close();
    }


    $scope.actualizarDestino = function(destino){
      destino.imagenes = destino.imagenes || [];
      if($scope.nuevasImagenes && $scope.nuevasImagenes.length){
        uploadToAWS.uploadFiles($scope.nuevasImagenes).then(function(urls){
          for (var i = urls.length - 1; i >= 0; i--) {
            destino.imagenes.push(urls[i].endPoint);
          }
          actualizarDestino(destino);
        })

      }
      else{
        actualizarDestino(destino);
      }

          
    }

    $scope.eliminarDestino= function(destino){
      DestinosService.eliminarDestino(destino).then(function(){
        for (var i = destinosActuales.length - 1; i >= 0; i--) {
          if(destinosActuales[i].id == destino.id){
            destinosActuales.splice(i,1)
            openedToasts.push(toastr["success"]("Destino eliminado", "Exito", $rootScope.toastDefautlOptions));
            $rootScope.currentOpenModal.close();
          }
        }
      })
    }

    $scope.deleteNewImage = function(index){
      $scope.nuevasImagenes.splice(index,1)
    }
    $scope.eliminarImagenActual = function(index){
      $scope.destino.imagenes.splice(index,1)
    }

  }

})();
