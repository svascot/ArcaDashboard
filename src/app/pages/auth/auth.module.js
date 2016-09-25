(function () {
  'use strict';

  angular.module('BlurAdmin.pages.auth', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('auth', {
          url: '/auth',
          templateUrl: 'app/pages/auth/auth.html',
          controller: "AuthCtrl",
          title: 'Authentication',
          sidebarMeta: {
            icon: 'ion-android-lock',
            order: 1,
          },
        });
  }

})();