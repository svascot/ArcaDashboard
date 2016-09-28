(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viajes')
    .service('ViajesService', ViajesService);

  /** @ngInject */
  function ViajesService($http,$rootScope) {

    return{
      listarVehiculos :function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/filtrar";
        return $http.post(query,vehiculo).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }
    }

  }

})();
