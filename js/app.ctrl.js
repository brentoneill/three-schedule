'use strict';

angular.module('threeWireDemo')
    .controller('AppCtrl', function($scope, $state) {

        $scope.onHeaderSearch = function () {
            $state.go('app.results');
        };

    });
