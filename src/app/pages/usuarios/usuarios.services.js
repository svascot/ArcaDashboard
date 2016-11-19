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
      getUsuario:function(){
          return JSON.parse(localStorage.getItem('user'));
      },
      listar :function(rol){
       
        var q = $q.defer();
        if(usuarios){
          q.resolve(usuarios);
        }
        var query = $rootScope.serviceURL+"usuario/";
        if(rol){
          query+=rol;
        }
        console.log("vamos al servidor a buscar usuarios")
         $http.get(query).then(function(resultado){
           usuarios = resultado.data
            q.resolve(resultado.data)
        })
         return q.promise;


         
         /*
  var deferred = $q.defer();
           setTimeout(function() {
             deferred.resolve(  
              [{
                  "id": 2,
                  "deletedAt": null,
                  "cedula": "1017199032",
                  "nombre": "Juan Camilo Mejia",
                  "genero": null,
                  "fechaNacimiento": null,
                  "celular": null,
                  "tipoSangre": null,
                  "rol": "gerente",
                  "telefono": null,
                  "activo": true,
                  "email": null,
                  "foto": null,
                  "uuid": "2346edc0-a301-11e6-bb94-4d71cfa50487",
                  "AgenciumId": 2
                }
              ])
          }, 1000);
           return deferred.promise;

      */
      },




    }

  }

})();
