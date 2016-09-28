(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viajes')
    .service('ViajesService', ViajesService);

  /** @ngInject */
  function ViajesService($http,$rootScope) {

    return{
      crearViaje :function(viaje){
        var query = $rootScope.serviceURL+"viaje/";
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
