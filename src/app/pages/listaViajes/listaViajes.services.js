(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
    .service('listarViajesService', listarViajesService);

  /** @ngInject */
  function listarViajesService($http,$rootScope,$q) {

    return{
      cancelarRecurrentes :function(viaje){
        console.dir("cancelara este viaje en el sservice:");
        console.dir(viaje);
        var query = $rootScope.serviceURL+"viaje/cancelarRecurrentes";
        console.dir("cancelara este viaje en el sservice:");
        console.dir(viaje);
        return $http.post(query,viaje).then(
          function(resultado){
            console.dir("cancelo este viaje:");
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      cancelarViaje :function(viaje){
        console.dir("ViajeUuid");
        console.dir(viaje);
        var query = $rootScope.serviceURL+"viaje/cancelarViaje";
        return $http.post(query,viaje).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarViaje :function(viaje){
        var query = $rootScope.serviceURL+"viaje";
        return $http.patch(query,{viaje:viaje}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }

    }

  }

})();
