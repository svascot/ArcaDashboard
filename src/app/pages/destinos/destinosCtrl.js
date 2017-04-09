(function () {
  'use strict';

  angular.module('BlurAdmin.pages.destinos')
      .controller('destinosCtrl', destinosCtrl);

  /** @ngInject */
  var openedToasts =[];

  function destinosCtrl($scope,toastr,toastrConfig,$rootScope,uploadToAWS,destinos) {
    
    $scope.destinos = destinos
     
   

    $scope.openCrearDestino = function(){
      $rootScope.openModalController('app/pages/destinos/modal/crearDestinoModal.html','crearDestinoModalCtrl',
      {
        destinos:function () {
            return destinos;
          }
      }
      )
    }
    $scope.verDetalleDestino = function(destino){
      $rootScope.openModalController('app/pages/destinos/modal/detalleDestinoModal.html','detalleDestinoModal',
        {
          
          destino:function(){
            return destino
          },
          destinosActuales:function(){
            return destinos
          }

        }
      )
    }

   


  }
})();
