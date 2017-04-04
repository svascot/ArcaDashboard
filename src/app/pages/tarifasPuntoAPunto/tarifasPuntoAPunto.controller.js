(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPuntoAPunto')
      .controller('TarifasPuntoAPuntoCtrl',TarifasPuntoAPuntoCtrl);

  /** @ngInject */
  var openedToasts =[];

  function TarifasPuntoAPuntoCtrl($scope,toastr, toastrConfig,$rootScope,TarifasPuntoAPuntoService,tarifas,$state,destinos) {
    $scope.tarifas = tarifas;
    $scope.destinos = destinos;

  	$scope.crearTarifasPuntoAPunto = function(tarifa){   
	  	TarifasPuntoAPuntoService.crearTarifaPuntoAPunto(tarifa).then(function(result){
        $scope.tarifas.unshift(result);
        openedToasts.push(toastr["success"]("Tarifa registrada", "Exito", $rootScope.toastDefautlOptions));

      })  
  	}
    $scope.eliminarTarifasPuntoAPunto = function(tarifa){        

        
    }
    $scope.actualizarTarifasPuntoAPunto = function(tarifa){        

        
    }

    

  }
  

})();
