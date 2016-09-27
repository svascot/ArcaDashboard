(function () {
  'use strict';

  angular.module('BlurAdmin.pages.vehiculos')
      .directive('filtrarVehiculos', filtrarVehiculos);

  /** @ngInject */
  function filtrarVehiculos() {
    return {
      restrict: 'E',
      controller: 'FiltrarVehiculosCtrl',
      templateUrl: 'app/pages/vehiculos/widgets/filtrarVehiculos.html'
    };
  }
})();
