(function () {
  'use strict';

  angular.module('BlurAdmin.pages.diagramaOcupacion')
      .controller('diagramaOcupacionCtrl', diagramaOcupacionCtrl);

  /** @ngInject */
  var openedToasts =[];
  var formatDiasDeLaSemana = function(diasDeLaSemana){
    var dias= ""
    if(!diasDeLaSemana){
      return dias;
    }
    if(diasDeLaSemana.includes(0)){
      dias += "Dom"
    }
    if(diasDeLaSemana.includes(1)){
       dias += " Lun"
    }
    if(diasDeLaSemana.includes(2)){
       dias += " Mar"
    }
    if(diasDeLaSemana.includes(3)){
       dias += " Mie"
    }
    if(diasDeLaSemana.includes(4)){
       dias += " Jue"
    }
    if(diasDeLaSemana.includes(5)){
       dias += " Vie"
    }
    if(diasDeLaSemana.includes(6)){
       dias += " Sab"
    }

    return dias;
  }

  function diagramaOcupacionCtrl($scope,ViajeService,marcas,toastr,placas,
    DiagramaOcupacionService,toastrConfig,$rootScope,etiquetas) {
    $scope.etiquetas = etiquetas;
    $scope.marcas = marcas;
    $scope.referencias = {}
    $scope.vehiculo = {};
    $scope.vehiculos = {};
    $scope.placas = placas;

    var cargarDiagrama = (function cargar (vehiculos){

      var now = moment().minutes(0).seconds(0).milliseconds(0);
      var groups = new vis.DataSet();
      var items = new vis.DataSet();
      var content;
      var viaje;
      var vehiculo;

      // create a data set with groups
      for (var j = vehiculos.length - 1; j >= 0; j--) {
         vehiculo = vehiculos[j];


        groups.add({id:j,content:vehiculo.placa})

        if(vehiculo.Viajes){
          for (var i = vehiculo.Viajes.length - 1; i >= 0; i--) {
            viaje = vehiculo.Viajes[i]
            //alert (new Date(viaje.fechaInicio))
            if(viaje.estado == "Confirmado"){
              content =  viaje.destino || formatDiasDeLaSemana(viaje.recurreteDiasDeLaSemana);


              viaje.descripcion = viaje.descripcion || "";

              items.add({
                id:  viaje.id,
                group:(j),
                content: "<b>"+viaje.descripcion+" </b><span>" +content + '</span>',
                start: viaje.fechaInicio,
                end:viaje.fechaFin,
                type: 'range'
              });
            }

          }
        }
      }

      // create visualization
      var container = document.getElementById('visualization');
      container.innerHTML = "";
      var options = {
        groupOrder: 'group',  // groupOrder can be a property name or a sorting function
        locale: 'es',
         orientation:{
            axis:'both'
        }
      };

      var timeline = new vis.Timeline(container);
      timeline.setOptions(options);
      timeline.setGroups(groups);
      timeline.setItems(items);

      return  cargar;

    }($scope.vehiculos))

    $scope.switchMarca = function() {
      for(var m in $scope.marcas){
        if($scope.vehiculo.marca == $scope.marcas[m].nombre){
          $scope.referencias =  $scope.marcas[m].Referencia
        }
      }
    }
      $scope.filtrar = function(filtro){
        if($scope.validateDate(filtro)){
          $scope.vehiculos = "";
          return;
        }else{
          $scope.messageErrorFecha = "";
        }
          DiagramaOcupacionService.obtenerconViajesEnRangoDeFechas(filtro).then(function(response){
          $scope.vehiculos = response;
          cargarDiagrama(response)
        })
      }
      $scope.traerTodos = function(){
        $scope.vehiculo = {};
          DiagramaOcupacionService.obtenerconViajesEnRangoDeFechas({}).then(function(response){
          $scope.vehiculos = response;
          cargarDiagrama(response)
        })
      }

      $scope.openCalendar = function(e,prop) {
          this[prop] =true
          e.preventDefault();
          e.stopPropagation();

      };
      $scope.abrirCalendarioViaje = function(e,vehiculo,prop){
        vehiculo[prop] = true
        e.preventDefault();
        e.stopPropagation();
      };

      $scope.validateDate = function(filtro){
        var result = false;
        if(filtro.fechaInicio >= filtro.fechaFin){
          $scope.messageErrorFecha = "La fecha y hora fin deben ser mayor a la" +
            "fecha y hora de inicio.";
          result = true;
        }
        return result;
      }
  }
})();
