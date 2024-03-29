(function () {
  'use strict';

  angular.module('BlurAdmin.pages.documentos')
    .service('DocumentoService', DocumentoService);

  /** @ngInject */
  function DocumentoService($http,$rootScope,$q) {
    var documentoSeleccionado = undefined;

    return{

      getDocumentoSeleccionado: function(){
        return documentoSeleccionado;
      },
      setDocumentoSeleccionado:function(documento){
        documentoSeleccionado = documento;
      },

      crearDocumento :function(documento){
        var query = $rootScope.serviceURL+"documento";
        window.console.log(query);
        return $http.post(query,{documento:documento}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      eliminarDocumento :function(documento){
        var query = $rootScope.serviceURL+"documento/"+documento.uuid;
        window.console.log(query);
        return $http.delete(query).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarDocumento :function(documento){
        var query = $rootScope.serviceURL+"documento";
        window.console.log(query);
        return $http.patch(query,{documento:documento}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      documentoPorVencer :function(){
        var query = $rootScope.serviceURL+"documento/documentosProximosAVencer";
        window.console.log(query);
        return $http.get(query,{}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }




    }

  }

})();
