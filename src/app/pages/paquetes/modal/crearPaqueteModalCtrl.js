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

       uploadToAWS.uploadFiles(new Array(paquete.imagenDestacada)).then(function(urls){
          paquete.imagenDestacada = urls[0].endPoint
          PaquetesService.crearPaquete(paquete).then(function(paqueteCreado){
          paquetes.push(paqueteCreado);
          toastr["success"]("Paquete creado", "Exito", $rootScope.toastDefautlOptions);
          $scope.paquete = {}
          $rootScope.currentOpenModal.close();
        })
       })

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
      $scope.noIncluido = "";
    }
    $scope.eliminarContenidoNoIncluido=function(index){
    	$scope.paquete.noIncluye.splice(index,1);
    }
    
  }

})();
