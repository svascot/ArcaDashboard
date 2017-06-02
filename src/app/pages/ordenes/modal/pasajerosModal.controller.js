(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ordenes')
      .controller('pasajerosModalCtrl', pasajerosModalCtrl);

  /** @ngInject */
  var openedToasts =[];
  function pasajerosModalCtrl($scope,$rootScope,uploadToAWS,toastr,toastrConfig,order) {
    $scope.passengers = order.passengers;
   

  }

})();
