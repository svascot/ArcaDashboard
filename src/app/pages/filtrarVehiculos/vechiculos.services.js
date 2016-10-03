(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
    .service('VehiculosService', VehiculosService);

  /** @ngInject */
  function VehiculosService($http,$rootScope,$q) {

    return{
      listarVehiculos :function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/filtrar";
        window.console.log(query);
        return $http.post(query,{filtro:vehiculo}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      crearVehiculo :function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo";
        window.console.log(query);
        return $http.post(query,{vehiculo:vehiculo}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }



    }

  }

})();
