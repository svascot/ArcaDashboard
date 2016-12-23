/**
 * @author v.lugovsky
 * created on 17.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .filter('vehiculoImagen', vehiculoImagen);

  /** @ngInject */
  function vehiculoImagen() {
    return function(vehiculo) {
      return "https://s3-us-west-2.amazonaws.com/arca/vehiculos/"+vehiculo.marca+""+vehiculo.referencia+""+vehiculo.modelo+".jpg"
    };
  }

})();
