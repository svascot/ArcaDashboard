(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('listarViajesCtrl', listarViajesCtrl);

  /** @ngInject */
  var openedToasts =[];
  function listarViajesCtrl($scope,$rootScope,ViajeService,toastr, toastrConfig,vehiculos) {

    $scope.viaje = {};
    $scope.vehiculos = vehiculos;
    $scope.vehiculo = {};

    $scope.switchVehicle = function (vehicle) {
      $scope.vehiculo = vehicle;
      $scope.viaje.placa = vehicle.placa;
    }

    $scope.verDetalles= function(item){
      if(!item.expanded){
        item.expanded = false;
      }
      item.expanded = !item.expanded;
    }

    $scope.openCancelarViaje = function(viaje){
      $rootScope.openModalController('app/pages/listaViajes/modal/cancelarViajeModal.html','CancelarViajeModalCtrl',
        {
          viaje:function () {
            return viaje;
          }
        }
      )
    }
 }
})();
