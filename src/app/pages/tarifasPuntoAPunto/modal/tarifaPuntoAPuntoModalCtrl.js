(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPuntoAPunto')
      .controller('tarifaPuntoAPuntoModalCtrl', tarifaPuntoAPuntoModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function tarifaPuntoAPuntoModalCtrl($scope,$rootScope,uploadToAWS,toastr,toastrConfig,TarifasPuntoAPuntoService,tarifasActuales,tarifa,destinos) {
    $scope.tarifa=tarifa
    $scope.destinos =destinos;


    $scope.eliminarTarifa = function(tarifaAEliminar){        
      TarifasPuntoAPuntoService.eliminarTarifaPuntoAPunto(tarifaAEliminar).then(function(resultado){
        for (var i = tarifasActuales.length - 1; i >= 0; i--) {
          if(tarifasActuales[i].id == tarifaAEliminar.id){
            tarifasActuales.splice(i,1)
          }
        }
        openedToasts.push(toastr["success"]("Tarifa eliminada", "Exito", $rootScope.toastDefautlOptions)); 
         $rootScope.currentOpenModal.close();

      })
        
    }
    $scope.actualizarTarifa = function(tarifaActualizada){        
      TarifasPuntoAPuntoService.actualizarTarifaPuntoAPunto(tarifaActualizada).then(function(resultado){
        tarifa = tarifaActualizada
         openedToasts.push(toastr["success"]("Tarifa actualizada", "Exito", $rootScope.toastDefautlOptions)); 
         $rootScope.currentOpenModal.close();
      })
        
    }

  }

})();
