(function () {
  'use strict';

  angular.module('BlurAdmin.pages.editDocumento')
      .controller('editDocumentoCtrl', editDocumentoCtrl);

  /** @ngInject */
  var openedToasts =[];

  function editDocumentoCtrl($scope,toastr, toastrConfig,$rootScope,uploadToAWS,DocumentoService) {
    var documento = DocumentoService.getDocumentoSeleccionado();
    documento.fechaExpiracion = new Date(documento.fechaExpiracion);
  	$scope.documento = documento
    
    $scope.save = function(imagenDocumento) {
        if(imagenDocumento){
          uploadToAWS.uploadFiles(new Array(imagenDocumento)).then(function(urls){
            $scope.documento.imagen =urls[0].endPoint;            
            DocumentoService.actualizarDocumento($scope.documento).then(function(){
                openedToasts.push(toastr["success"]("Documento actualizado", "Exito", $rootScope.toastDefautlOptions)); 
               window.history.back();
            })
          })
        }
        else{
          DocumentoService.actualizarDocumento($scope.documento).then(function(){
            openedToasts.push(toastr["success"]("Documento actualizado", "Exito", $rootScope.toastDefautlOptions)); 
               window.history.back();
          })
        }

    };
  }
  

})();
