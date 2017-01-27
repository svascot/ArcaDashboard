(function () {
  'use strict';

  angular.module('BlurAdmin.pages.usuarios')
      .controller('CrearTagModalCtrl', CrearTagModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function CrearTagModalCtrl($scope,TagsService,$rootScope,toastr,toastrConfig,tags) {

    
    $scope.crearTag = function(tag){
       
        TagsService.crearTag(tag).then(function(response){
          openedToasts.push(toastr["success"]("Tag registrado", "Exito", $rootScope.toastDefautlOptions));
          tag = {}
          $rootScope.currentOpenModal.close();
          tags.push(response.data)

        })

      
    }


  }

})();
