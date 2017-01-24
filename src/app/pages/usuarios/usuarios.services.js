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
      actualizarUsuario :function(usuario){
        var query = $rootScope.serviceURL+"usuario";
        window.console.log(query);
        return $http.patch(query,{usuario:usuario}).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )

      },
      
      listCoductoresYAfiliados :function(){
        var query = $rootScope.serviceURL+"usuario/listCoductoresYAfiliados";
        window.console.log(query);
        return $http.get(query).then(
          function(resultado){
            console.dir(resultado.data);
            return resultado.data
          }
        )
      },
      getUsuario:function(){
          return JSON.parse(localStorage.getItem('user'));
      },
      listar :function(rol){


        var query = $rootScope.serviceURL+"usuario/";
        if(rol){
          query+=rol;
        }

         return $http.get(query).then(function(resultado){
           return  (resultado.data)
        })
      },
    }
  }

})();
