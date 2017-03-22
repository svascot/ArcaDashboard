(function () {
  'use strict';

  angular.module('BlurAdmin.pages.destinos')
      .controller('crearDestinoModalCtrl', crearDestinoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function crearDestinoModalCtrl($scope,$rootScope,uploadToAWS,toastr,toastrConfig,DestinosService,destinos) {
     

    $scope.crearDestino = function(destino){

          DestinosService.crearDestino(destino).then(function(response){
            console.dir(response)
              openedToasts.push(toastr["success"]("Destino creado", "Exito", $rootScope.toastDefautlOptions));
              $scope.destino = {};
              destinos.push(response)
          })

       $rootScope.currentOpenModal.close();
    }
  }

})();
