'use strict';

angular.module('threeWireDemo')
    .controller('ResultsCtrl', function($scope, $stateParams, uiCalendarConfig) {
        $scope.searchParams = $stateParams.searchParams;
        $scope.eventSources = [];
        $scope.calendarConfig = {
            defaultView: 'agendaWeek'
        };
    });
