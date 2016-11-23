(function () {
  'use strict';

  angular.module('BlurAdmin.pages.documentos')
      .controller('DocumentosCtrl', DocumentosCtrl);

  /** @ngInject */
  var openedToasts =[];

  function DocumentosCtrl($scope,toastr, toastrConfig,$rootScope,uploadToAWS,DocumentoService,propietario,$state) {
    $scope.propietario = propietario;
    console.log("--------")
    console.dir($scope.propietario)
    console.log("--------")
  	$scope.crearDocumento = function(documento,imagenDocumento){	      

  	  	uploadToAWS.uploadFiles(new Array(imagenDocumento)).then(function(urls){
            documento.imagen= urls[0].endPoint;
            propietario.placa ? (documento.VehiculoId = propietario.id) : (documento.UsuarioId = propietario.id); 

            DocumentoService.crearDocumento(documento).then(function(response){
              console.dir(response)
                openedToasts.push(toastr["success"]("Documento creado", "Exito", $rootScope.toastDefautlOptions));              
                $scope.propietario.Documentos.push(response);
                documento = {};
                $rootScope.currentOpenModal.close();
            })
         })
  	}
    $scope.editar = function(documento){
      DocumentoService.setDocumentoSeleccionado(documento);
      $rootScope.currentOpenModal.close();
      $state.go('editDocumento');
    }

    $scope.openCalendar = function(e,prop) {
        this[prop] =true
        e.preventDefault();
        e.stopPropagation();

    };
  }
  

})();
