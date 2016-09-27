/**
 * Created by k.danovsky on 12.05.2016.
 */

(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth')
    .service('AuthService', AuthService);

  /** @ngInject */
  function AuthService($http) {

    return{
      login :function(usuario){
        var query = "http://52.39.7.127:3000/auth/login";
	console.log(query);
        return $http.post(query,usuario).then(
          function(resultado ){
            console.dir(resultado.data);
            localStorage.setItem("user", JSON.stringify(resultado.data));
            return resultado.data
          }
        )
      }
    }
    
  }

})();
