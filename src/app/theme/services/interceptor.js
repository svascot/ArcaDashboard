/**
 * @author a.demeshko
 * created on 3/1/16
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .factory('intercerptor', intercerptor);

  /** @ngInject */
  function intercerptor($q,$rootScope) {

   	 var succesTemplate = '<div class="modal-content">  <div class="modal-header bg-success"> <i class="ion-checkmark modal-icon"></i><span> Success</span> </div>  <div class="modal-body text-center">Your information has been saved successfully</div>  <div class="modal-footer">    <button type="button" class="btn btn-success" ng-click="$dismiss()">OK</button>  </div></div>',
   	 errorTemplate = '<div class="modal-content"> <div class="modal-header bg-danger"> <i class="ion-flame modal-icon"></i><span> Error</span> </div>  <div class="modal-body text-center">{{text}}</div>  <div class="modal-footer">    <button type="button" class="btn btn-danger" ng-click="$dismiss()">OK</button>  </div></div>',
   	 warningTemplate ='<div class="modal-content">  <div class="modal-header bg-warning"> <i class="ion-android-warning modal-icon"></i><span> Aleta</span> </div> <div class="modal-body text-center">{{text}}</div> <div class="modal-footer">    <button type="button" class="btn btn-warning" ng-click="$dismiss()">OK</button>  </div></div>';

      var intercerptor={};
	  var dialog = waitingDialog;
	  var showingLoading = false;
	  var loadingStack = 0;

	  var hideLoading = function(){
	    if(loadingStack > 0 ){
	        loadingStack--;
	    }
	    if(loadingStack==0){
	    //$rootScope.closeLoadingModal();
	    dialog.hide();
	    console.log("Acabo")
	      $('.modal-backdrop.fade.in').remove();
	      showingLoading = false;
	    }
	  }

	  var showLoading = function(){
	      if(loadingStack==0){
	         console.log("Cargando")
	        //$rootScope.openLoadingModal('app/pages/ui/modals/modalTemplates/loadingModal.html','md','','static');
	         dialog.show("Cargando");
	      }
	      loadingStack++;
	  }

	  intercerptor.request =  function(config) {
	  	console.dir(config)
	      showLoading();
	      return config;
	  }

	  intercerptor.requestError =  function(rejection) {
	    hideLoading();
	    if(!angular.isUndefined(rejection.data) && rejection.data != null && typeof rejection.data == "string"){
	      var type = rejection.data.substring(0, 3);
	      if(type == "INF" || type == "SUC" || type == "ERR" || type == "WAR" ){
	       // $rootScope.openModal(rejection.data,type);
	      }
	    }
	    return $q.reject(rejection);
	  }

	  intercerptor.response = function(response) {
	    hideLoading();
	    if(!angular.isUndefined(response.data) && response.data != null && typeof response.data == "string"){
	      var type = response.data.substring(0, 3);
	      if(type == "INF" || type == "SUC" || type == "ERR" || type == "WAR" ){
	       // $rootScope.openModal(response.data,type);
	      }
	    }
	    return response;
	  }

	  intercerptor.responseError = function(rejection){

	    hideLoading();
	    var status = rejection.status;
	    switch(status){
	    	case 403:
          		//$window.location.href = '#/auth';
	    		$rootScope.openModal(errorTemplate,'md','Debes estar logueado')
	    		break;
	    	case 404:
	    		$rootScope.openModal(warningTemplate,'md','Contenido no encontrado')
	    		break;
	    	case 412:
	    		$rootScope.openModal(errorTemplate,'md',rejection.data)
	    		break;
	    	case 500:{
	    		$rootScope.openModal(errorTemplate,'md','Error interno por favor contactarse con soporte tecnico')
	    		break;
	    	}

	    }
	    return $q.reject(rejection);
	  }

	 return intercerptor;
   }

})();
