(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
    .service('listarViajesService', listarViajesService);

  /** @ngInject */
  function listarViajesService($http,$rootScope,$q) {

    return{
      cancelarViaje :function(viaje){
        var query = $rootScope.serviceURL+"viaje/cancelarViaje";
        return $http.post(query,{viaje:viaje}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }

    }

  }

})();
