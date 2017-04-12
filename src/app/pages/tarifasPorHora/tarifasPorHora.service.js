(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPorHora')
    .service('TarifasPorHoraService', TarifasPorHoraService);

  /** @ngInject */
  function TarifasPorHoraService($http,$rootScope,$q) {

    return{

      crearTarifaPorHora :function(tarifaPorHora){
        var query = $rootScope.serviceURL+"tarifaPorHora";
        window.console.log(query);
        return $http.post(query,{tarifaPorHora:tarifaPorHora}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      eliminarTarifaPorHora :function(tarifaPorHora){
        var query = $rootScope.serviceURL+"tarifaPorHora/"+tarifaPorHora.id;
        window.console.log(query);
        return $http.delete(query).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarTarifaPorHora :function(tarifaPorHora){
        var query = $rootScope.serviceURL+"tarifaPorHora";
        window.console.log(query);
        return $http.patch(query,{tarifaPorHora:tarifaPorHora}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      listarTarifasPorHora :function(){
        var query = $rootScope.serviceURL+"tarifaPorHora";
        window.console.log(query);
        return $http.get(query).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }

    }

  }

})();
