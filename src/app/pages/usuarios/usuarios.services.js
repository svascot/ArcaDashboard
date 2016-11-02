(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios')
    .service('UsuariosService', UsuariosService);

  /** @ngInject */
  function UsuariosService($http,$rootScope,$q) {
    var def = $q.defer();
    var usuarios;
    return{
      
      crearUsuario :function(usuario){
        var query = $rootScope.serviceURL+"auth/crearUsuario";
        window.console.log(query);
        window.console.dir(usuario);
        return $http.post(query,{usuario:usuario});
        
      },
      listar :function(){
        var q = $q.defer();
        if(usuarios){
          q.resolve(usuarios);
        }
        var query = $rootScope.serviceURL+"usuario";
        console.log("vamos al servidor a buscar usuarios")
         $http.get(query).then(function(resultado){
           usuarios = resultado.data
            q.resolve(resultado.data)
        })
         return q.promise;

        
      }




    }

  }

})();
