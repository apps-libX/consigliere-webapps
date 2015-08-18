/**
 * Created by consigliere on August 18th 2015, 12:40:33 pm.
 */

webapps.config([
    '$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        'use strict';

        // $urlRouterProvider.otherwise('/');

        $stateProvider
            //.state('main', {
            //    url         : '/',
            //    templateUrl : '/webapps'
            //})
            .state('webapps', {
                url         : '/webapps',
                templateUrl : '/webapps'
            });
            //.state('webappsDashboard.webapps', {
            //    url         : '/dashboard/webapps',
            //    templateUrl : '/dashboard/webapps'
            //});
    }
]);