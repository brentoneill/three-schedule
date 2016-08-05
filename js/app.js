'use strict';

angular.module('threeWireDemo', [
        'ui.router',
        'ui.bootstrap',
        'ui.calendar',
        'ngRoute',
        'ngAnimate',
        'ngMaterial',
		'ngPrettyJson',
        'angular-loading-bar'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                url: '',
                templateUrl: 'views/index.html',
                controller: 'AppCtrl'
            })
            .state('app.search', {
                url: '/search',
                templateUrl: 'views/search.html',
                controller: 'SearchCtrl'
            })
            .state('app.availability', {
                url: '/availability/:date',
                templateUrl: 'views/availability.html',
                controller: 'AvailabilityCtrl'
            })
            .state('app.results', {
                url: '/results',
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl',
                resolve: {
                    apiResponse: function($http) {
                        return $http.get('https://api.freebusy.io/beta/week/jcavanaugh@threewiresys.com?tz=America/New_York&date=2016-06-12');
                    }
                }
            });

        // $locationProvider
        //     .html5Mode(true);
        $urlRouterProvider.otherwise('/search');
    });
