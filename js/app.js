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
                templateUrl: 'templates/index.html',
                controller: 'AppCtrl'
            })
            .state('app.search', {
                url: '/search',
                templateUrl: 'templates/search.html',
                controller: 'SearchCtrl'
            })
            .state('app.results', {
                url: '/results',
                templateUrl: 'templates/results.html',
                controller: 'ResultsCtrl'
            });

        $locationProvider
            .html5Mode(true);
        $urlRouterProvider.otherwise('/search');
    });
