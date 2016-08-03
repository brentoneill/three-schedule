'use strict';

angular.module('threeWireDemo')
    .controller('AvailabilityCtrl', function($scope, $uibModal) {
        
        $scope.today = moment();

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

        function generateTimeSlots(providers, offset) {
            var timeSlots = []
            var count = 0;
            _.each(providers, function(provider, idx, arr) {
                count++;
                var startTime;
                var endTime;
                var date;

                if ( idx % 2 === 0 ) {
                    startTime = Math.floor(Math.random() * 2) + 8;
                    endTime = Math.floor(Math.random() * 3) + 10;
                } else {
                    startTime = Math.floor(Math.random() * 2) + 12;
                    endTime = Math.floor(Math.random() * 2) + 15
                }

                var offsetMinutesStart = Math.random() > .5 ? 30 : 0;
                var offsetMinutesEnd = Math.random() > .5 ? 30 : 0;
                if ( offset ) {
                    date = $scope.today.clone().add('days', offset);
                } else {
                    date = $scope.today.clone();
                }

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

        $scope.timeSlots = generateTimeSlots(providers);

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
			timezone: 'local',
            events: $scope.timeSlots,
            // viewRender: function(event, element) {
            //     $scope.timeSlots = generateTimeSlots(providers, 1);
            //     console.log($scope.timeSlots);
            // },
			eventMouseHover: function(event, jsEvent, view) {
				console.log(event);
			},
			dayClick: function(date, jsEvent, view, resourceObj) {
				openSchedulingModal(date, resourceObj)
		    }
		};

		$scope.closeModal = function (modalId) {
			$scope[modalId].close();
		};

		$scope.confirmAppointment = function() {
			$scope.modal1.close();
			openConfirmationModal();
		};

        $scope.scheduleAppointment = function(appointment) {
            $scope.timeSlots.push({
                id: $scope.timeSlots.length + 1,
                resourceId: appointment.provider.id,
                title: 'Appointment with ' + appointment.veteran.firstName + ' ' + appointment.veteran.lastName,
                start: appointment.startDate,
                end: appointment.endDate
            });
        };

		function openConfirmationModal(){
			$scope.modal2 = $uibModal.open({
				windowClass: 'show',
				scope: $scope,
				templateUrl: 'views/partials/_modal-scheduling-2.html'
			});
		}

		function openSchedulingModal(date, provider) {
            // map all the appointment info
            $scope.appointment = {
                provider: {
                    name: provider.title,
                    id: provider.id
                },
                veteran: {},
                date: date,
                startDate: date.clone().toJSON(),
                endDate: date.clone().add('hours', 1).toJSON()
            };
            // open the modal
			$scope.modal1 = $uibModal.open({
				windowClass: 'show',
				scope: $scope,
				templateUrl: 'views/partials/_modal-scheduling-1.html'
			});
		}

    });
