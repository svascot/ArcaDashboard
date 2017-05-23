(function () {
  'use strict';

  angular.module('BlurAdmin.pages.paquetes')
      .controller('paquetesCtrl', paquetesCtrl);

  /** @ngInject */
  var openedToasts =[];

  function paquetesCtrl($scope,toastr,toastrConfig,$rootScope,paquetes,destinos) {
    
    $scope.paquetes = paquetes
     
   

    $scope.abrirModalCrearPaquetes = function(){
      $rootScope.openModalController('app/pages/paquetes/modal/crearPaqueteModal.html','crearPaquetesModalCtrl',
      {
          paquetes:function () {
            return paquetes;
          },
          destinos:function () {
            return destinos;
          }
      }
      )
    }
    $scope.verDetallePaquete = function(paquete){
      $rootScope.openModalController('app/pages/paquetes/modal/detallePaqueteModal.html','detallePaqueteModal',
        {
          
          paquete:function(){
            return paquete
          },
          paquetesActuales:function(){
            return paquetes
          }

        }
      )
    }

   


  }
})();
