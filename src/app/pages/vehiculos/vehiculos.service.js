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
      },
      eliminarVehiculo:function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/"+vehiculo.uuid;
        window.console.log(query);
        return $http.delete(query).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarVehiculo:function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo";
        window.console.log(query);
        return $http.patch(query,{vehiculo:vehiculo}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarConductor:function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/conductor";
        window.console.log(query);
        return $http.patch(query,{vehiculo:vehiculo}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      marcaVehiculo:function(){
        var query = $rootScope.serviceURL+"marca";
        window.console.log(query);
        return $http.get(query,{}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      }



    }

  }

})();
