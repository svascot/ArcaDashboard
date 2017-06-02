(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ordenes')
      .controller('OrdenesCtrl',OrdenesCtrl);

  /** @ngInject */
  var openedToasts =[];

  function OrdenesCtrl($scope,toastr, toastrConfig,$rootScope,TarifasPuntoAPuntoService,$state,ordenes) {
    $scope.ordenes = ordenes;

    $scope.verPasajeros = function(orden){
        $rootScope.openModalController('app/pages/ordenes/modal/pasajerosModal.html','pasajerosModalCtrl',
        {
            order:function () {
              return orden;
            }
        }
        )
    }

  }
  

})();
