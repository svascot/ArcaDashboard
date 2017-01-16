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
          vehicle.Viajes[v].dias = dias(vehicle.Viajes[v].destino);
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

    function dias(dias){
      var dia = "";
      for (var d in dias){
        switch (dias[d]) {
          case ",":
              dia = dia + ", ";
              break;
          case "1":
              dia = dia + "Lunes";
              break;
          case "2":
              dia = dia + "Martes";
              break;
          case "3":
              dia = dia + "Miercoles";
              break;
          case "4":
              dia = dia + "Jueves";
              break;
          case "5":
              dia = dia + "Viernes";
              break;
          case "6":
              dia = dia + "Sabado";
              break;
          case "7":
              dia = dia + "Domingo";

        }
      }
      return dia;
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
