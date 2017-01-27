(function () {
  'use strict';
//https://github.com/Gillardo/bootstrap-ui-datetime-picker
angular.module('BlurAdmin.pages.tags')
.controller('ActualizarTagModalCtrl', ActualizarTagModalCtrl);

/** @ngInject */
var openedToasts =[];
function ActualizarTagModalCtrl($scope,TagsService,$rootScope,tag,toastr,toastrConfig) {

  $scope.tag = tag
  $scope.actualizarTag = function(tag){
   var oldTag = JSON.parse(JSON.stringify(tag))
    TagsService.actualizarTag(tag).then(function(response){
      openedToasts.push(toastr["success"]("Usuario actualizado", "Exito", $rootScope.toastDefautlOptions));
    },function(err){
      console.dir(err);
      openedToasts.push(toastr["error"](err.message, "Error", $rootScope.toastDefautlOptions));
      tag = oldTag;
    })        

   $rootScope.currentOpenModal.close();
 }
}

})();
