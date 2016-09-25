/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('AuthCtrl', AuthCtrl);

  /** @ngInject */
  function AuthCtrl($scope, $filter, editableOptions, editableThemes,AuthService) {
    $scope.user = {};
    $scope.login = function(){
      AuthService.login($scope.user);
    }

  }

})();
