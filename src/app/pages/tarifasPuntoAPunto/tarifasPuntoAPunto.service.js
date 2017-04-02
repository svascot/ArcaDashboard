(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPuntoAPunto')
    .service('TarifasPuntoAPuntoService', TarifasPuntoAPuntoService);

  /** @ngInject */
  function TarifasPuntoAPuntoService($http,$rootScope,$q) {
    var documentoSeleccionado = undefined;

    return{

      crearTarifaPuntoAPunto :function(tarifasPuntoAPunto){
        var query = $rootScope.serviceURL+"tarifasPuntoAPunto";
        window.console.log(query);
        return $http.post(query,{tarifasPuntoAPunto:tarifasPuntoAPunto}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      eliminarTarifaPuntoAPunto :function(tarifasPuntoAPunto){
        var query = $rootScope.serviceURL+"tarifasPuntoAPunto/"+tarifasPuntoAPunto.uuid;
        window.console.log(query);
        return $http.delete(query).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarTarifaPuntoAPunto :function(tarifasPuntoAPunto){
        var query = $rootScope.serviceURL+"tarifasPuntoAPunto";
        window.console.log(query);
        return $http.patch(query,{tarifasPuntoAPunto:tarifasPuntoAPunto}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      listarTarifasPuntoAPunto :function(){
        var query = $rootScope.serviceURL+"tarifasPuntoAPunto";
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
