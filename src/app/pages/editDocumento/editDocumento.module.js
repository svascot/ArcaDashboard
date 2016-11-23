(function () {
  'use strict';

  angular.module('BlurAdmin.pages.editDocumento', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('editDocumento', {
          url: '/editDocumento',
          templateUrl: 'app/pages/editDocumento/editDocumento.html',
          title: 'Editar documento',
          controller:'editDocumentoCtrl'
        });
  }

})();
