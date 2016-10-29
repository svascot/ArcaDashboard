(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('auth', {
          url: '/auth',
          templateUrl: 'auth.html',
          controller: "AuthCtrl",
          title: 'Authentication'
        });
  }

})();