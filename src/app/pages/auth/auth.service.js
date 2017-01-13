/**
 * Created by k.danovsky on 12.05.2016.
 */

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
    .service('AuthService', AuthService);

  /** @ngInject */
  function AuthService($http,$rootScope, $state) {

    return{
      login :function(usuario){
        var query = $rootScope.serviceURL+"auth/login";
        usuario.desarrollo = true;
        return $http.post(query,usuario).then(
          function(resultado ){
            console.dir(resultado.data);
            localStorage.setItem("user", JSON.stringify(resultado.data.user));
            localStorage.setItem("arcaToken", resultado.data.token);
            $rootScope.setAuthorizationToken();
            return resultado.data.user
          }
        )
      },
      logout :function(){
        var query = $rootScope.serviceURL+"auth/logout";
        return $http.post(query).then(
          function(resultado ){  
          localStorage.removeItem("user");
          localStorage.removeItem("arcaToken");  
          delete $http.defaults.headers.common.Authorization;   
            return resultado.data
          }
        )
      },
      getUser : function(){
        return JSON.parse(localStorage.getItem("user"))
      }

    }
    
  }

})();
