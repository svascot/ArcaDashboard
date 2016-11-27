/**
 * @author v.lugovksy
 * created on 15.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings,$uibModal,$state,envService,AuthService,$http) {
    var whatToWait = [
      preloader.loadAmCharts(),
      $timeout(500)
    ];

  var checkLoguedInFN=  (function checkLoguedIn(){
                          var user = AuthService.getUser();
                          if(!user){
                           $timeout(function() {
                             // $state.go('auth');
                            });
                          }
                          return checkLoguedIn;
                        })()


    var theme = themeLayoutSettings;
    if (theme.blur) {
      if (theme.mobile) {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-mobile.jpg'));
      } else {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg.jpg'));
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'blur-bg-blurred.jpg'));
      }
    }

    $q.all(whatToWait).then(function () {
      $rootScope.$pageFinishedLoading = true;
    });

    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 7000);

    $rootScope.$baSidebarService = baSidebarService;
    //$rootScope.serviceURL = "http://localhost:3000/"
    $rootScope.serviceURL = envService.read('apiUrl');
    $rootScope.s3bucketURL = envService.read('bucketS3');

    $rootScope.toastDefautlOptions={
        "autoDismiss": true,
        "positionClass": "toast-top-right",
        "type": "info",
        "timeOut": "3000",
        "extendedTimeOut": "2000",
        "allowHtml": false,
        "closeButton": false,
        "tapToDismiss": true,
        "progressBar": false,
        "newestOnTop": true,
        "maxOpened": 0,
        "preventDuplicates": false,
        "preventOpenDuplicates": false
      }

    $rootScope.modalLoadingStack= []


    $rootScope.openModal = function (template, size,text) {

      $uibModal.open({
        animation: true,
        template: template,
        //md,lg,sm
        size: size,
        controller:'ModalsPageCtrl',
        resolve: {
          text: function () {
            return text;
          }
        }
      });
    };

    $rootScope.openModalController = function (templateUrl, controller,resolver) {
    	$rootScope.currentOpenModal = $uibModal.open({
	        animation: true,
	        templateUrl: templateUrl,
	        //md,lg,sm
	        size: 'lg',
	        controller:controller,
	        resolve:resolver
	      });

    };

    $rootScope.openLoadingModal = function () {

       $rootScope.modalLoadingStack.push($uibModal.open({
        animation: true,
        template: '<div class="modal-content">  <div class="modal-header bg-success">    <i class="ion-android-warning modal-icon"></i><span> Cargando</span>  </div>  <div class="modal-body text-center">  <div class="progress">  <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">  </div> </div> </div>',
        size: 'lg',
        backdrop:'static'
      }));
    };

    $rootScope.closeLoadingModal = function () {
      $rootScope.modalLoadingStack[$rootScope.modalLoadingStack.length -1].close();
      $rootScope.modalLoadingStack.pop()

    };
    $rootScope.estaEnLogin= function(){
        if($state.is('auth')){
          return true
        }
        return false;
      };
    $rootScope.setAuthorizationToken = function(){
      var token = localStorage.getItem("arcaToken");
      if(token){
        $rootScope.isLoged = true
        $http.defaults.headers.common.Authorization = 'Bearer '+token;
      }
      else{
        $rootScope.isLoged = false;
      }
    }

    $rootScope.setAuthorizationToken()// refactorizar en produccion

    $rootScope.$on('$stateChangeStart', 
      function(event, toState, toParams, fromState, fromParams){ 
        checkLoguedInFN();

      })

     
  }

})();
