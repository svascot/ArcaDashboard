(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje')
    .service('ViajeService', ViajeService);

  /** @ngInject */
  function ViajeService($http,$rootScope,$q) {

    return{

      crearViaje :function(viaje){
        var query = $rootScope.serviceURL+"viaje/";
        return $http.post(query,{viaje:viaje}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      listarVehiculos :function(vehiculo){
        var query = $rootScope.serviceURL+"vehiculo/filtrar";
        window.console.log(query);
        return $http.post(query,{filtro:vehiculo}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
       /*

          var deferred = $q.defer();
           setTimeout(function() {
             deferred.resolve([{"AgenciumId":2,"placa":"tpt019","capacidad":15,"modelo":"2017","audio":1,"video":0,"aire":true,"bano":true,"reclinable":true,"imagen":"123456","marca":"Toyota","referencia":"Tundra",
              "Viajes": [
                      {
                        "id": 1,
                        "deletedAt": null,
                        "fechaInicio": "2016-09-20T01:58:39.000Z",
                        "fechaFin": "2016-09-21T01:58:39.000Z",
                        "origen": "Calle # 89 # 95 -87",
                        "destino": "Amaga",
                        "descripcion": "Viaje de la senora Maria",
                        "recurrenteId": null,
                        "createdAt": "2016-10-14T21:58:53.650Z",
                        "updatedAt": "2016-10-14T21:58:53.650Z",
                        "VehiculoId": 10,
                        "UsuarioId": null
                      }
                    ]}])
          }, 1000);
           return deferred.promise;
         */
      }

    }

  }

})();
