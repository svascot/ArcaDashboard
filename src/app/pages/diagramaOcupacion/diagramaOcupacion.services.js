(function () {
  'use strict';

  angular.module('BlurAdmin.pages.diagramaOcupacion')
    .service('DiagramaOcupacionService', DiagramaOcupacionService);

  /** @ngInject */
  function DiagramaOcupacionService($http,$rootScope,$q) {

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
      }

    }

  }

})();
