/**
 * @author a.demeshko
 * created on 18.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.ui.notifications')
    .controller('ModalsPageCtrl', ModalsPageCtrl);

  /** @ngInject */
  function ModalsPageCtrl($scope,text) {
    $scope.text = text
  }


})();
