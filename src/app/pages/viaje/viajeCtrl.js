(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje')
      .controller('ViajeCtrl', ViajeCtrl);

  /** @ngInject */
  var openedToasts =[];
  function ViajeCtrl($scope,$rootScope,ViajeService,toastr, toastrConfig) {

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
    $scope.filtro.tipoViaje = true;
    $scope.vehiculos = {};
  
    $scope.expand = function(vehiculo){
      vehiculo.expanded = !vehiculo.expanded;
    }

    $scope.expandFilter = function(){
      $scope.filtro.expanded = !$scope.filtro.expanded;
    }

    $scope.filtrar = function(filtro){
      console.dir(filtro)
      if(filtro.fechaInicio != null && filtro.fechaFin != null){
        $scope.viaje.fechaInicio = filtro.fechaInicio;
        $scope.viaje.fechaFin = filtro.fechaFin;

        filtro.fechaInicio = filtro.fechaInicio.getTime()
        filtro.fechaFin = filtro.fechaFin.getTime()

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
