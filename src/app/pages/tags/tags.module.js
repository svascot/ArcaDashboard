(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tags', [])
      .config(routeConfig);

   /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('tags', {
          url: '/tags',
          templateUrl: 'app/pages/tags/tags.html',
          controller: 'TagsCtrl',
          title: 'Tags',
          sidebarMeta: {
            icon: 'ion-pricetag',
            order: 8,
          },
          resolve: {   
            tags:function(TagsService){
               return TagsService.listar().then(function(tags){
                      tags = tags || []
                       return tags;
               })
            }
           }
        });
  }
})();
