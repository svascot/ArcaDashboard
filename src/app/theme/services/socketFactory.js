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
  	var myIoSocket = io.connect('http://52.39.7.127:3000');
  	
 	
 	var socket = socketFactory({
        ioSocket: myIoSocket
    });
    return socket;
  }

})();

