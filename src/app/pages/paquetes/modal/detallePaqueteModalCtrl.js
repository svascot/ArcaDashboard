(function () {
  'use strict';

  angular.module('BlurAdmin.pages.paquetes')
      .controller('detallePaqueteModal', detallePaqueteModal);

  /** @ngInject */
  var openedToasts =[];
  function detallePaqueteModal($scope,$rootScope,uploadToAWS,toastr,toastrConfig,PaquetesService,paquetesActuales,paquete) {
     
    $scope.paquete = paquete;

    var actualizarPaquete = function(paquete){
      PaquetesService.actualizarPaquete(paquete).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Destino actualizado", "Exito", $rootScope.toastDefautlOptions));
              $scope.paquete = {};              
          })

       $rootScope.currentOpenModal.close();
    }


    $scope.actualizarPaquete = function(paquete){
      paquete.imagenes = paquete.imagenes || [];
      if($scope.nuevasImagenes && $scope.nuevasImagenes.length){
        uploadToAWS.uploadFiles($scope.nuevasImagenes).then(function(urls){
          for (var i = urls.length - 1; i >= 0; i--) {
            paquete.imagenes.push(urls[i].endPoint);
          }
          actualizarPaquete(paquete);
        })

      }
      else{
        actualizarDestino(paquete);
      }

          
    }

    $scope.eliminarDestino= function(paquete){
      PaquetesService.eliminarDestino(paquete).then(function(){
        for (var i = paquetesActuales.length - 1; i >= 0; i--) {
          if(paquetesActuales[i].id == paquete.id){
            paquetesActuales.splice(i,1)
            openedToasts.push(toastr["success"]("Paquete eliminado", "Exito", $rootScope.toastDefautlOptions));
            $rootScope.currentOpenModal.close();
          }
        }
      })
    }

    $scope.deleteNewImage = function(index){
      $scope.nuevasImagenes.splice(index,1)
    }
    $scope.eliminarImagenActual = function(index){
      $scope.paquete.imagenes.splice(index,1)
    }

  }

})();
