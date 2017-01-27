(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tags')
      .controller('TagsCtrl', TagsCtrl);

  /** @ngInject */
    var openedToasts =[];
  function TagsCtrl($scope,$rootScope,TagsService,toastr,toastrConfig,tags) {

    $scope.tags = tags ;


 
    $scope.openCrearTag = function(){
      $rootScope.openModalController('app/pages/tags/modal/crearTagModal.html','CrearTagModalCtrl',
        { 
          tags:function () {
            return $scope.tags;
          }
        }
        )
    }

    $scope.openActualizarTag = function(tag){
      $rootScope.openModalController('app/pages/tags/modal/actualizarTagModal.html','ActualizarTagModalCtrl',
        {
          tag:function () {
            return tag;
          }
        }
      )
    }
    $scope.eliminarTag = function(tag){
      var r = confirm("Seguro que desea eliminar el tag?");
      if (r){
        TagsService.eliminar(tag);
      }
    }

    
  }
})();
