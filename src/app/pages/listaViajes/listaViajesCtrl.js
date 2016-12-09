(function () {
  'use strict';

  angular.module('BlurAdmin.pages.listarViajes')
      .controller('listarViajesCtrl', listarViajesCtrl);

  /** @ngInject */
  var openedToasts =[];
  function listarViajesCtrl($scope,$rootScope,ViajeService,toastr, toastrConfig,vehiculos) {


    $scope.viaje = {};
    //$scope.filtro.tipoViaje = true;
    $scope.vehiculos = {};

    $scope.verDetalles= function(item){
      if(!item.expanded){
        item.expanded = false;
      }
        item.expanded = !item.expanded;
    }


    $scope.openCancelarViaje = function(viaje,vehiculo){
      $rootScope.openModalController('app/pages/listaViajes/modal/cancelarViajeModal.html','CancelarViajeModalCtrl',
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
