(function () {
  'use strict';

  angular.module('BlurAdmin.pages.destinos')
      .controller('crearDestinoModalCtrl', crearDestinoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function crearDestinoModalCtrl($scope,$rootScope,uploadToAWS,toastr,toastrConfig,DestinosService,destinos) {
     
    var crearDestino = function(destino){
      DestinosService.crearDestino(destino).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Destino creado", "Exito", $rootScope.toastDefautlOptions));
              $scope.destino = {};
              destinos.push(response)
          })

       $rootScope.currentOpenModal.close();
    }


    $scope.crearDestino = function(destino){
      destino.imagenes = destino.imagenes || [];
      if($scope.nuevasImagenes.length){
        uploadToAWS.uploadFiles($scope.nuevasImagenes).then(function(urls){
          for (var i = urls.length - 1; i >= 0; i--) {
            destino.imagenes.push(urls[i].endPoint);
          }
          crearDestino(destino);
        })

      }
      else{
        crearDestino(destino);
      }

          
    }

    $scope.deleteNewImage = function(index){
      $scope.nuevasImagenes.splice(index,1)
    }

  }

})();
