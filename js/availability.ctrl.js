'use strict';

angular.module('threeWireDemo')
    .controller('AvailabilityCtrl', function($scope, $uibModal) {

		$scope.data = {};
		$scope.data.veteran = {};

        var today = moment();

        var providers = [{
            id: 'a',
            title: 'Provider Jill'
        }, {
            id: 'b',
            title: 'Provider John'
        }, {
            id: 'c',
            title: 'Provider Bill'
        }, {
            id: 'd',
            title: 'Provider Mary'
        }];

        function generateTimeSlots(providers) {
            var timeSlots = []
            var count = 0;
            _.each(providers, function(provider, idx, arr) {
                count++;
                var startTime = Math.floor(Math.random() * 2) + 8;
                var endTime = Math.floor(Math.random() * 4) + 12;
                var offsetMinutesStart = Math.random() > .5 ? 30 : 0;
                var offsetMinutesEnd = Math.random() > .5 ? 30 : 0;
                var date = today.clone();
                var newSlot = {
                    id: count,
                    resourceId: provider.id,
                    title: 'Busy',
                    start: date.clone().hours(startTime).minutes(offsetMinutesStart).seconds(0).toJSON(),
                    end: date.clone().hours(endTime).minutes(offsetMinutesEnd).seconds(0).toJSON()
                };
                timeSlots.push(newSlot);
            });
            return timeSlots;
        }

        // $scope.timeSlots = generateTimeSlots(providers);

        $scope.calendarConfig = {
            header: {
                left: 'timelineWeek agendaDay',
                center: 'title',
                right: 'today prev,next'
            },
            height: 'auto',
            minTime: '08:00:00',
            maxTime: '18:00:00',
            allDaySlot: false,
            eventColor: '#03a9f4',
            eventTextColor: '#fff',
            resources: providers,
            defaultView: 'agendaDay',
            events: generateTimeSlots(providers),
            // viewRender: function() {
            //     $scope.timeSlots = generateTimeSlots(providers);
            // }
			dayClick: function(date, jsEvent, view) {
				openSchedulingModal(date)
				$scope.data.date = date.toJSON();
		    }
		};

		$scope.closeModal = function (modalId) {
			$scope[modalId].close();
		};

		$scope.confirmAppointment = function() {
			$scope.modal1.close();
			openConfirmationModal();
		};

		function openConfirmationModal(){
			$scope.modal2 = $uibModal.open({
				windowClass: 'show',
				scope: $scope,
				templateUrl: 'views/partials/_modal-scheduling-2.html'
			})
		}

		function openSchedulingModal(date) {
			$scope.modal1 = $uibModal.open({
				windowClass: 'show',
				scope: $scope,
				templateUrl: 'views/partials/_modal-scheduling-1.html'
			});
		}

    });
