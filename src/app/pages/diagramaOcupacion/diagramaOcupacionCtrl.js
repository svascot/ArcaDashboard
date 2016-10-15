(function () {
  'use strict';

  angular.module('BlurAdmin.pages.diagramaOcupacion')
      .controller('diagramaOcupacionCtrl', diagramaOcupacionCtrl);

  /** @ngInject */
  var openedToasts =[];

  function diagramaOcupacionCtrl($scope,VehiculosService,toastr, toastrConfig,$rootScope,vehiculos) {
     var now = moment().minutes(0).seconds(0).milliseconds(0);
  var groups = new vis.DataSet();
  var items = new vis.DataSet();
  // create a data set with groups

  for (var j = vehiculos.length - 1; j >= 0; j--) {
     var vehiculo = vehiculos[j];
  
   
    groups.add({id:j,content:vehiculo.placa})

    if(vehiculo.Viajes){
    for (var i = vehiculo.Viajes.length - 1; i >= 0; i--) {
      var viaje = vehiculo.Viajes[i]
      //alert (new Date(viaje.fechaInicio))
      console.log(new Date(viaje.fechaFin).getTime()*1000)
      items.add({
      id:  viaje.id,
      group:(groups.length -1),
      content: ' <span>(' + viaje.destino + ')</span>',
      start: viaje.fechaInicio,
      end:viaje.fechaFin,
      type: 'range'
    });
    }
    }
  }

  // create visualization
  var container = document.getElementById('visualization');
  var options = {
    groupOrder: 'content',  // groupOrder can be a property name or a sorting function
    locale: 'es',
     orientation:{
        axis:'both'
    }
  };

  var timeline = new vis.Timeline(container);
  timeline.setOptions(options);
  timeline.setGroups(groups);
  timeline.setItems(items);

  }
})();
