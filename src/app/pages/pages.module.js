/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.dashboard',
    'BlurAdmin.pages.profile',
    'BlurAdmin.pages.auth',
    'BlurAdmin.pages.viaje',
    'BlurAdmin.pages.vehiculos',
    'BlurAdmin.pages.documentos',
    'BlurAdmin.pages.diagramaOcupacion',
    'BlurAdmin.pages.usuarios',
    'BlurAdmin.pages.documentos',
    'BlurAdmin.pages.editDocumento',
    'BlurAdmin.pages.modals',
    'BlurAdmin.pages.listarViajes',
    'BlurAdmin.pages.tags',
    'BlurAdmin.pages.destinos',
    'BlurAdmin.pages.tarifasPuntoAPunto',
    'BlurAdmin.pages.tarifasPorHora',
    'BlurAdmin.pages.paquetes',
    'BlurAdmin.pages.ordenes'

    

  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

  /*  baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });*/
  }

})();
