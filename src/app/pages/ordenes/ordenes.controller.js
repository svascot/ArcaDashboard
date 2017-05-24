(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ordenes')
      .controller('OrdenesCtrl',OrdenesCtrl);

  /** @ngInject */
  var openedToasts =[];

  function OrdenesCtrl($scope,toastr, toastrConfig,$rootScope,TarifasPuntoAPuntoService,$state,ordenes) {
    $scope.ordenes = ordenes;

  }
  

})();
