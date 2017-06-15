(function () {
  'use strict';

  angular.module('BlurAdmin.pages.paquetes')
      .controller('detallePaqueteModalCtrl', detallePaqueteModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function detallePaqueteModalCtrl($scope,$rootScope,uploadToAWS,toastr,toastrConfig,PaquetesService,paquetesActuales,paquete,destinos) {
     
    $scope.paquete = paquete;
    $scope.destinos = destinos;
     $scope.paquete.destinos = []
    $scope.paquete.PaqueteDestinos.forEach(function(destino) {
          $scope.paquete.destinos.push(destino.id);
    }, this);


    var actualizarPaquete = function(paquete){
       PaquetesService.actualizarPaquete(paquete).then(function(paqueteCreado){
            //paquetesActuales.filter((paquete)=>paquete.id == paqueteCreado.id).map((paquete)=>paquete = paqueteCreado);
            toastr["success"]("Paquete actualizado", "Exito", $rootScope.toastDefautlOptions);
            $scope.paquete = {}
            $rootScope.currentOpenModal.close();
         })
    }

      $scope.actualizarPaquete = function(paquete){
        if(paquete.nuevaImagenDestacada){
            uploadToAWS.uploadFiles(new Array(paquete.nuevaImagenDestacada)).then(function(urls){
              paquete.imagenDestacada = urls[0].endPoint        
              actualizarPaquete(paquete) 
            })
        }
        else{
          actualizarPaquete(paquete)
        }
       

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
