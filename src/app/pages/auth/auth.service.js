/**
 * Created by k.danovsky on 12.05.2016.
 */

(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .service('AuthService', AuthService);

  /** @ngInject */
  function AuthService($http) {

    return{
     login :function(usuario){
        var query = "http://52.43.59.235:5000/auth/login";
        return $http.post(query,usuario).then(
          resultado =>{
            console.dir(resultado.data);
            return resultado.data
          }
        )
    }
  }

  }

})();
