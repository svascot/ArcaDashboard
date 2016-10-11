/**
 * Created by k.danovsky on 12.05.2016.
 */

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
    .service('AuthService', AuthService);

  /** @ngInject */
  function AuthService($http,$rootScope) {

    return{
      login :function(usuario){
        var query = $rootScope.serviceURL+"auth/login";
        return $http.post(query,usuario).then(
          function(resultado ){
            console.dir(resultado.data);
            localStorage.setItem("user", JSON.stringify(resultado.data));
            return resultado.data
          }
        )
      },
      logout :function(){
        var query = $rootScope.serviceURL+"auth/logout";
        return $http.post(query).then(
          function(resultado ){            
            return resultado.data
          }
        )
      }

    }
    
  }

})();
