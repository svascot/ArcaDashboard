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
      $scope.viajes = [];
      var id = "";
      for(var v in vehicle.Viajes){
        if(!vehicle.Viajes[v].recurrenteId){
          $scope.viajes.push(vehicle.Viajes[v])
        }
        if(vehicle.Viajes[v].recurrenteId && vehicle.Viajes[v].recurrenteId != id){
          vehicle.Viajes[v].fechaInicio = vehicle.Viajes[v].recurreteFechaInicio;
          vehicle.Viajes[v].fechaFin = vehicle.Viajes[v].recurreteFechaFin;
          $scope.viajes.push(vehicle.Viajes[v])
          id = vehicle.Viajes[v].recurrenteId;
        }
      }
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
