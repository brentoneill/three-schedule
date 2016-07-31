'use strict';

angular.module('threeWireDemo')
    .controller('SearchCtrl', function($scope, $state, $http) {

        $scope.data = {}

        $scope.providers = [
            'John Smith',
            'Jane Doe',
            'Helen Jacobson',
            'Paul Stenson',
            'Toby Wolken',
            'Donald N. Nelson',
            'Ronda Girón Villalobos',
            'Sun Mao',
        ];

        $scope.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function(response) {
                console.log(response);
                return response.data.results.map(function(item) {
                    return item.formatted_address;
                });
            });
        };

        $scope.search = function() {
            $http.get('https://api.freebusy.io/beta/week/jcavanaugh@threewiresys.com?tz=America/New_York&date=2016-06-12')
                .then(function(response) {
                    console.log(response);
                    $state.go('app.availability', {
                        data: $scope.data
                    });
                });
        };

    });
