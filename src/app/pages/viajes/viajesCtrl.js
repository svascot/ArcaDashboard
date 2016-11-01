(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viajes')
      .controller('ViajesCtrl', ViajesCtrl);

  /** @ngInject */
  function ViajesCtrl($scope,ViajesService,ViajeService,vehiculos) {

    $scope.vehiculos =vehiculos;

    //TODO Cambiar tooooooodo con el diseno de mona
    $scope.crearViaje = function(viaje){
    	ViajesService.crearViaje(viaje).then(function(response){
        console.dir(response)
        alert("Exito")
        $scope.viaje = {};
      })
    }
  }
})();
