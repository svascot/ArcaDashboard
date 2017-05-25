/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .factory('Socket', Socket);

  /** @ngInject */
  function Socket(socketFactory,envService) {
  	var myIoSocket = io.connect( envService.read('apiUrl'));
  	
 	
 	var socket = socketFactory({
        ioSocket: myIoSocket
    });
    return socket;
  }

})();

