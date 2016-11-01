(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios')
    .service('UsuariosService', UsuariosService);

  /** @ngInject */
  function UsuariosService($http,$rootScope,$q) {

    return{
      
      crearUsuario :function(usuario){
        var query = $rootScope.serviceURL+"auth/crearUsuario";
        window.console.log(query);
        window.console.dir(usuario);
        return $http.post(query,{usuario:usuario}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          },function(err){console.dir(err)}
        )
        
      }



    }

  }

})();
