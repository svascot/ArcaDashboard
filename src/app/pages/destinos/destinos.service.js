(function () {
  'use strict';

  angular.module('BlurAdmin.pages.destinos')
    .service('DestinosService', DestinosService);

  /** @ngInject */
  function DestinosService($http,$rootScope,$q) {

    return{

      listarDestinos:function(){
        var query = $rootScope.serviceURL+"destinos";
        return $http.get(query).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      
      crearDestino :function(destino){
        var query = $rootScope.serviceURL+"destinos";
        return $http.post(query,{destinos:destinos}).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      eliminarDestino:function(destino){
        var query = $rootScope.serviceURL+"destinos/"+destino.uuid;
        return $http.delete(query).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      actualizarDestino:function(destino){
        var query = $rootScope.serviceURL+"destinos";
        return $http.patch(query,{destino:destino}).then(
          function(resultado){
            return resultado.data
          }
        )
      }
     



    }

  }

})();
