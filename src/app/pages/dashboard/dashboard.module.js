(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/pages/dashboard/dashboard.html',
          controller: 'dashboardCtrl',
          title: 'Dashboard',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 0,
          },
          resolve:{
             dashboard:function(VehiculosService){
                  return VehiculosService.dashboard().then(function(dashboard){
                    console.log("dashboard");
                    console.log(dashboard);
                      return dashboard;
                  })
             }
          }
        });
  }

})();
