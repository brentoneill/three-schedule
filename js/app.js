'use strict';

angular.module('threeWireDemo', [
        'ui.router',
        'ngRoute',
        'ngAnimate',
        'ngMaterial'
    ])
    .run(function(){

    })
    .config(function($stateProvider, $urlRouterProvider) {
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

        $urlRouterProvider.otherwise('/search');
    });
