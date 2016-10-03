/**
 * @author a.demeshko
 * created on 23.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .filter('siNo', siNo);

  /** @ngInject */
  function siNo() {
    return function(valor) {
      return  valor ? "Si" : 'No';
    };
  }

})();
