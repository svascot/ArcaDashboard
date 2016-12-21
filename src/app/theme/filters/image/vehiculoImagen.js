/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .filter('vehiculoImagen', vehiculoImagen);

  /** @ngInject */
  function vehiculoImagen(layoutPaths) {
    return function(vehiculo) {
      return layoutPaths.images.vehiculos+"/"+vehiculo.marca+""+vehiculo.referencia+""+vehiculo.modelo+".jpg"
    };
  }

})();
