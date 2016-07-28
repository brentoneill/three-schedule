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
                return response.data.results.map(function(item) {
                    return item.formatted_address;
                });
            });
        };

        $scope.search = function() {
            console.log($scope.data);
            $state.go('app.results', {
                data: $scope.data
            });
        };

    });
