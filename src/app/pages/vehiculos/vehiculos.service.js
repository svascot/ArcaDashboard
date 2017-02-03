(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
    .service('VehiculosService', VehiculosService);

  /** @ngInject */
  function VehiculosService($http,$rootScope,$q) {

    return{

      listarVehiculos :function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/filtrar";
        return $http.post(query,{filtro:vehiculo}).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      obtenerconViajesEnRangoDeFechas :function(filtro){
        var query = $rootScope.serviceURL+"vehiculo/obtenerconViajesEnRangoDeFechas";
        return $http.post(query,{filtro:filtro}).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      crearVehiculo :function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo";
        return $http.post(query,{vehiculo:vehiculo}).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      eliminarVehiculo:function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/"+vehiculo.uuid;
        return $http.delete(query).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      actualizarVehiculo:function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo";
        return $http.patch(query,{vehiculo:vehiculo}).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      actualizarConductor:function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/conductor";
        return $http.patch(query,{vehiculo:vehiculo}).then(
          function(resultado){
            return resultado.data
          }
        )
      },
      marcaVehiculo:function(){
        var query = $rootScope.serviceURL+"marca";
        return $http.get(query,{}).then(
          function(resultado){
            return resultado.data
          }
        )
      }



    }

  }

})();
