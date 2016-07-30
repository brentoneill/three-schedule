'use strict';

angular.module('threeWireDemo')
    .controller('ResultsCtrl', function($scope, $stateParams, uiCalendarConfig) {
        $scope.searchParams = $stateParams.searchParams;
        $scope.eventSources = [];
        $scope.calendarConfig = {
            header: false,
            defaultView: 'agendaDay',
            views: {
                agenda: {

                }
            }
        };
    });
