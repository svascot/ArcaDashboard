(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
    .service('FiltrarVehiculosService', FiltrarVehiculosService);

  /** @ngInject */
  function FiltrarVehiculosService($http) {

    return{
      filtrar :function(vehiculo){
        var query = "http://52.43.59.235:5000/vehiculo/filtrar";
        return $http.post(query,vehiculo).then(
          resultado =>{
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }
    }

  }

})();
