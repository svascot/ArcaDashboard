(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPorHora')
      .controller('TarifasPorHoraCtrl',TarifasPorHoraCtrl);

  /** @ngInject */
  var openedToasts =[];

  function TarifasPorHoraCtrl($scope,toastr, toastrConfig,$rootScope,TarifasPorHoraService,tarifas,$state) {
    $scope.tarifas = tarifas;

  	$scope.crearTarifaPorHora = function(tarifa){   
	  	TarifasPorHoraService.crearTarifaPorHora(tarifa).then(function(result){
        $scope.tarifas.unshift(result);
        openedToasts.push(toastr["success"]("Tarifa registrada", "Exito", $rootScope.toastDefautlOptions));

      })  
  	}
    
    $scope.verDetalleTarifa = function(tarifa){
      $rootScope.openModalController('app/pages/tarifasPorHora/modal/tarifasPorHoraModal.html','tarifasPorHoraModalCtrl',
        {
          
          tarifa:function(){
            return tarifa
          },
          tarifasActuales:function(){
            return tarifas
          }

        }
      )
    }

    

  }
  

})();
