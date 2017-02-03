(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
      .directive('errSrc', errSrc);

  /** @ngInject */
  function errSrc(layoutPaths) {
    var resolveImg = function(marca){
      return layoutPaths.images.marcas+marca.toUpperCase()+".jpg";
    }
    return {
     link: function (scope, element ,attrs) {
        element.bind('error', function() {
          console.dir(attrs);
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', resolveImg(attrs.errSrc));
          }
        });
      }

    };
  }

})();