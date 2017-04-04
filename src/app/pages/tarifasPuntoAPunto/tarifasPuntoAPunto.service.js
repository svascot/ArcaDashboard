(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tarifasPuntoAPunto')
    .service('TarifasPuntoAPuntoService', TarifasPuntoAPuntoService);

  /** @ngInject */
  function TarifasPuntoAPuntoService($http,$rootScope,$q) {
    var documentoSeleccionado = undefined;

    return{

      crearTarifaPuntoAPunto :function(tarifaPuntoAPunto){
        var query = $rootScope.serviceURL+"tarifaPuntoAPunto";
        window.console.log(query);
        return $http.post(query,{tarifaPuntoAPunto:tarifaPuntoAPunto}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      eliminarTarifaPuntoAPunto :function(tarifaPuntoAPunto){
        var query = $rootScope.serviceURL+"tarifaPuntoAPunto/"+tarifaPuntoAPunto.id;
        window.console.log(query);
        return $http.delete(query).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarTarifaPuntoAPunto :function(tarifaPuntoAPunto){
        var query = $rootScope.serviceURL+"tarifaPuntoAPunto";
        window.console.log(query);
        return $http.patch(query,{tarifaPuntoAPunto:tarifaPuntoAPunto}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      listarTarifasPuntoAPunto :function(){
        var query = $rootScope.serviceURL+"tarifaPuntoAPunto";
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
