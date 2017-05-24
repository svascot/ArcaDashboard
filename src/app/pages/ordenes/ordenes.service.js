(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ordenes')
    .service('OrdenesService', OrdenesService);

  /** @ngInject */
  function OrdenesService($http,$rootScope,$q) {

    return{

      listarOrdenes :function(tarifaPuntoAPunto){
        var query = $rootScope.serviceURL+"orden";       
        return $http.get(query).then(
          function(resultado){
            return resultado.data
          }
      )}
      
    }

  }

})();
