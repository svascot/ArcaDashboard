(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
    .service('VehiculosService', VehiculosService);

  /** @ngInject */
  function VehiculosService($http) {

    return{
      listarVehiculos :function(vehiculo){
        var query = "http://52.39.7.127:3000/vehiculo/filtrar";
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
