'use strict';

angular.module('threeWireDemo')
    .controller('ResultsCtrl', function(apiResponse, $scope) {
        $scope.data = apiResponse.data;
        console.log($scope.data);
    });
