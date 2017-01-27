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
        TagsService.eliminar(tag).then(function(){
          removerDeLaLista(tag);
          openedToasts.push(toastr["success"]("Vehiculo eliminado", "Exito", $rootScope.toastDefautlOptions));

        })
      }
    }

    var removerDeLaLista = function(tag){
      for (var i = tags.length - 1; i >= 0; i--) {
        if(tags[i].id == tag.id){
          tags.splice(i,1);
          break;
        }
      }
    }

    
  }
})();
