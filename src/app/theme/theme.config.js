/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  angular.module('BlurAdmin.theme')
    .config(config);

  /** @ngInject */
  function config(baConfigProvider, colorHelper,envServiceProvider,$httpProvider) {
    //baConfigProvider.changeTheme({blur: true});
    //
    //baConfigProvider.changeColors({
    //  default: 'rgba(#000000, 0.2)',
    //  defaultText: '#ffffff',
    //  dashboard: {
    //    white: '#ffffff',
    //  },
    //});
    $httpProvider.interceptors.push('intercerptor');

    envServiceProvider.config({
        domains: {
            development: ['localhost'],
            lab: ['labunoa.arkap.co','52.25.135.134'],
            production: ['arkap.co']
        },
        vars: {
            development: {
                apiUrl: 'http://localhost:3000/',
                bucketS3: 'https://s3-us-west-2.amazonaws.com/arca/'

            },
            lab: {
                apiUrl: 'http://52.25.135.134:3000/',
                bucketS3: 'https://s3-us-west-2.amazonaws.com/arca/'

            },
            production: {
                apiUrl: 'http://arkap.co/', //aws load balancer
                bucketS3: 'https://s3-us-west-2.amazonaws.com/arca/'
            }
        }
    });

    // run the environment check, so the comprobation is made
    // before controllers and services are built
    envServiceProvider.check();




  }
})();
