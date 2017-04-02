(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPuntoAPunto')
      .controller('TarifasPuntoAPuntoCtrl',TarifasPuntoAPuntoCtrl);

  /** @ngInject */
  var openedToasts =[];

  function TarifasPuntoAPuntoCtrl($scope,toastr, toastrConfig,$rootScope,TarifasPuntoAPuntoService,tarifas,$state) {
    $scope.tarifas = tarifas;

  	$scope.crearTarifasPuntoAPunto = function(tarifa){	      

  	  	
  	}
    $scope.eliminarTarifasPuntoAPunto = function(tarifa){        

        
    }
    $scope.actualizarTarifasPuntoAPunto = function(tarifa){        

        
    }

    

  }
  

})();
