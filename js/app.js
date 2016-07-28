'use strict';

angular.module('threeWireDemo', [
        'ui.router',
        'ui.bootstrap',
        'ui.calendar',
        'ngRoute',
        'ngAnimate',
        'ngMaterial'
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
            .state('app.results', {
                url: '/results',
                templateUrl: 'views/results.html',
                controller: 'ResultsCtrl'
            });

        $locationProvider
            .html5Mode(true);
        $urlRouterProvider.otherwise('/search');
    });
