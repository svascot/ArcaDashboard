(function () {
  'use strict';

  angular.module('BlurAdmin.pages.paquetes')
    .service('PaquetesService', PaquetesService);

  /** @ngInject */
  function PaquetesService($http,$rootScope,$q) {

    return{

      listarPaquetes:function(){
        var query = $rootScope.serviceURL+"paquete";
        return $http.get(query).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      
      crearPaquete :function(paquete){
        var query = $rootScope.serviceURL+"paquete";
        return $http.post(query,{paquete:paquete}).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      eliminarPaquete:function(paquete){
        var query = $rootScope.serviceURL+"paquete/"+paquete.id;
        return $http.delete(query).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      actualizarPaquete:function(paquete){
        var query = $rootScope.serviceURL+"paquete";
        return $http.patch(query,{paquete:paquete}).then(
          function(resultado){
            return resultado.data
          }
        )
      }
     



    }

  }

})();
