(function () {
  'use strict';

  angular.module('BlurAdmin.pages.crearVehiculos')
      .controller('DocumentosCtrl', DocumentosCtrl);

  /** @ngInject */
  var openedToasts =[];

  function DocumentosCtrl($scope,toastr, toastrConfig,$rootScope,vehiculos) {
  $scope.vehiculos = vehiculos;    

  }

})();
