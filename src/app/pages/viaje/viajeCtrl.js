(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje')
      .controller('ViajeCtrl', ViajeCtrl);

  /** @ngInject */
  var openedToasts =[];
  function ViajeCtrl($scope,$rootScope,ViajeService,toastr, toastrConfig,destinos) {
    $scope.destinos = destinos;

    $scope.openCalendar = function(e,prop) {
        this[prop] =true
        e.preventDefault();
        e.stopPropagation();

    };
      $scope.abrirCalendarioViaje = function(e,vehiculo,prop){
        vehiculo[prop] = true
        e.preventDefault();
        e.stopPropagation();
      }

    $scope.viaje = {};
    $scope.filtro = {};
    //$scope.filtro.tipoViaje = true;
    $scope.vehiculos = {};
  
   
    $scope.expandFilter = function(){
      $scope.opcionesAvanzadas= !$scope.opcionesAvanzadas;
    }

    $scope.filtrar = function(filtro){
      console.dir($scope.filtro)
      if(filtro.fechaInicio != null && filtro.fechaFin != null){
        $scope.viaje.fechaInicio = filtro.fechaInicio;
        $scope.viaje.fechaFin = filtro.fechaFin;

        filtro.fechaInicio = filtro.fechaInicio;
        filtro.fechaFin = filtro.fechaFin;

      }
      ViajeService.listarVehiculos(filtro).then(function(response){
        $scope.vehiculos = response;
      })
    }

    $scope.openCrearViaje = function(viaje,vehiculo){
      $rootScope.openModalController('app/pages/viaje/modal/crearViajeModal.html','CrearViajeModalCtrl',
        {
          viaje:function () {
            return viaje;
          },
          vehiculo:function () {
            return vehiculo;
          }
        }
      )
    }


  }
})();
