(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
    .service('VehiculosService', VehiculosService);

  /** @ngInject */
  function VehiculosService($http) {

    return{
      filtrar :function(vehiculo){
        var query = "http://52.43.59.235:5000/vehiculo/filtrar";
        return $http.post(query,vehiculo).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          },
          function(error){
            console.dir(error)
          }
        )
      }
    }

  }

})();
