(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPorHora')
      .controller('tarifasPorHoraModalCtrl', tarifasPorHoraModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function tarifasPorHoraModalCtrl($scope,$rootScope,uploadToAWS,toastr,toastrConfig,TarifasPorHoraService,tarifasActuales,tarifa) {
    $scope.tarifa=tarifa


    $scope.eliminarTarifa = function(tarifaAEliminar){        
      TarifasPorHoraService.eliminarTarifaPorHora(tarifaAEliminar).then(function(resultado){
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
      TarifasPorHoraService.actualizarTarifaPorHora(tarifaActualizada).then(function(resultado){
        tarifa = tarifaActualizada
         openedToasts.push(toastr["success"]("Tarifa actualizada", "Exito", $rootScope.toastDefautlOptions)); 
         $rootScope.currentOpenModal.close();
      })
        
    }

  }

})();
