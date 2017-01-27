(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tags')
    .service('TagsService',TagsService);

  /** @ngInject */
  function TagsService($http,$rootScope,$q) {
    var def = $q.defer();

    return{

      listar :function(){
        var query = $rootScope.serviceURL+"tag/";
        return $http.get(query).then(function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      crearTag :function(tag){
        var query = $rootScope.serviceURL+"tag/";       
        return $http.post(query,{tag:tag});

      },
      eliminar:function(tag){
           var query = $rootScope.serviceURL+"tag/"+tag.uuid;
           return $http.delete(query).then(function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      actualizarTag :function(tag){
        var query = $rootScope.serviceURL+"tag/"+tag.uuid;        
        return $http.patch(query,{tag:tag}).then(function(resultado){            
            return resultado.data
          }
        )
      }
    }
  }

})();
