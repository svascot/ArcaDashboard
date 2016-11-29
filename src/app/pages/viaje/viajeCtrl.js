(function () {
  'use strict';

  angular.module('BlurAdmin.pages.viaje')
      .controller('ViajeCtrl', ViajeCtrl);

  /** @ngInject */
  var openedToasts =[];
  function ViajeCtrl($scope,$rootScope,ViajeService,toastr, toastrConfig,destinos,vehiculos) {
  	var tabSelected = undefined;
  	var viajeRecurrente ={}
    $scope.destinos = destinos;
    $scope.todosLosvehiculos = vehiculos;

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
    $scope.tabSelected= function(tab){
    	tabSelected = tab
    }
    $scope.crearViajeRecurrente = function(viaje){
    	viaje.diasDeLaSemana = viajeRecurrente.diasDeLaSemana;
    	viaje.trabajaFestivos = viajeRecurrente.trabajaFestivos;
    	viaje.tiempoDeViaje = Math.trunc((viaje.horaFin.getTime() - viaje.horaInicio.getTime())/1000)
      //aca seteo la hora de inicio del viaje//
      var horaInicio = viaje.horaInicio.getHours();
      var minutosInicio = viaje.horaInicio.getMinutes();

      viaje.fechaInicio.setHours(viaje.fechaInicio.getHours()+horaInicio);
      viaje.fechaInicio.setMinutes(viaje.fechaInicio.getMinutes()+minutosInicio)

      viaje.fechaFin.setHours(viaje.fechaFin.getHours()+horaInicio);
      viaje.fechaFin.setMinutes(viaje.fechaFin.getMinutes()+minutosInicio)
      ////////////////////////////////////////////////////////////////////

    	ViajeService.crearViajeRecurrente(viaje).then(function(result){
    		openedToasts.push(toastr["success"]("Viaje recurrente creado", "Exito", $rootScope.toastDefautlOptions));
    	})
    	
    	
    } 	
    $scope.procesarDia =function(dia){
    	if(viajeRecurrente.diasDeLaSemana){
    		var index = viajeRecurrente.diasDeLaSemana.indexOf(dia)
    		if(index>=0){
    			viajeRecurrente.diasDeLaSemana.splice(index,1)
    		}else{
    			viajeRecurrente.diasDeLaSemana.push(dia)
    		}
    	}
    	else{
    		viajeRecurrente.diasDeLaSemana = []
    		viajeRecurrente.diasDeLaSemana.push(dia)
    	}
    	
    }
    $scope.procesarTrabajaFestivos= function(trabajaFestivos){
    	if(viajeRecurrente.trabajaFestivos){
    		 viajeRecurrente.trabajaFestivos = false
    	}else{
    		viajeRecurrente.trabajaFestivos = true
    	}

    }
    $scope.dias = [
    	{text:"Lunes",color:'#6eba8c',id:1},
    	{text:"Martes",color:'#0e8174',id:2},
    	{text:"Miercoles",color:'#b9f2a1',id:3},
    	{text:"Jueves",color:'#005562',id:4},
    	{text:"Viernes",color:'#6eba8c',id:5},
    	{text:"Sabado",color:'#0e8174',id:6},
    	{text:"Domingo",color:'#b9f2a1',id:0}
    ]
 	
  }
})();
