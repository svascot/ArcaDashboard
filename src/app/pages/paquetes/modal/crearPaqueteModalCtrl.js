(function () {
  'use strict';

  angular.module('BlurAdmin.pages.paquetes')
      .controller('crearPaquetesModalCtrl', crearPaquetesModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function crearPaquetesModalCtrl($scope,$rootScope,uploadToAWS,toastr,toastrConfig,PaquetesService,paquetes,destinos) {
     $scope.paquete = {}
     $scope.paquete.noIncluye= [];
    $scope.destinos = destinos;

    $scope.crearPaquete = function(paquete){
    	console.dir(paquete)
    }
    $scope.cambioDestinos = function(destinoId){
    	$scope.paquete.destinos = $scope.paquete.destinos  || [];
    	var destinos = $scope.paquete.destinos
    	for (var i = destinos.length - 1; i >= 0; i--) {
    		if(destinos[i].id == destinoId){
    			destinos.splice(i,1)
    			return
    		}
    	}
    	$scope.paquete.destinos.push(destinoId);
    }
    $scope.addContenidoNoIncluido = function(contenidoNoIncluido){
    	$scope.paquete.noIncluye.push(contenidoNoIncluido)
    }
    $scope.eliminarContenidoNoIncluido=function(index){
    	$scope.paquete.noIncluye.splice(index,1);
    }
    
  }

})();
