visit_controllers.controller('EventsEditCtrl', ['$scope', '$localstorage', '$remotestorage', '$filter', '$ionicPopup', '$state', 'AuthService', function ($scope, $localstorage, $remotestorage, $filter, $ionicPopup, $state, AuthService) {
    $remotestorage.updateEvents($localstorage,
        function () {
            $scope.init();
        },
        function (result) {

        }
    );

    $scope.isLocked = function (eventId) {
        return !AuthService.isAllowedEvent(eventId);
    };
    $scope.init = function () {
        $scope.events = $localstorage.getEvents();
        $scope.filteredEvents = $filter('hideAfterFilter')($scope.events);
    };
    $scope.init();
    Date.prototype.addOffset = function (min) {
        this.setTime(this.getTime() + (this.getTimezoneOffset() * 60 * 1000));
        return this;
    };

    Date.prototype.removeOffset = function (min) {
        this.setTime(this.getTime() - (this.getTimezoneOffset() * 60 * 1000));
        return this;
    };

    $scope.openDatePicker = function (index) {
        $scope.tmp = {};
        if (!index) {
            index = { "__type": "Date", 'iso': (new Date()).toISOString() };
        }
        $scope.tmp.newDate = (new Date(index.iso)).addOffset().toISOString();
        $scope.onTimeSet = function (newDate, oldDate) {
            index.iso = (new Date(newDate)).removeOffset().toISOString();
            popup.close();
        };
        var popup = $ionicPopup.show({
            template: '<datetimepicker data-ng-model="tmp.newDate" data-on-set-time="onTimeSet(newDate, oldDate)"></datetimepicker>',
            scope: $scope,
        });
    };

    $scope.addEvent = function () {
        var currentDateISO = (new Date()).toISOString();
        var LOCATION_ID = 'llz1M6ZdiU';
        var newEvent = {
            "endDate": {
                "__type": "Date",
                "iso": currentDateISO
            },
            "hideAfter": 300,
            "location": {
                "__type": "Pointer",
                "className": "Location",
                "objectId": LOCATION_ID
            },
            "name": "New meeting",
            "startDate": {
                "__type": "Date",
                "iso": currentDateISO
            },
            "createdAt": currentDateISO,
            "updatedAt": currentDateISO,
            "pinCode": '1997'
        };
        $scope.filteredEvents.unshift(newEvent);
    };

    $scope.removeEvent = function (sessionId, index) {
        var removeFromList = function (index) {
            $scope.filteredEvents.splice(index, 1);
        };
        if (!sessionId) {
            removeFromList(index);
        } else {
            $remotestorage.removeEvent(
                        sessionId,
                        function () {
                            $remotestorage.forceUpdateEvents($localstorage,
                                function () {
                                    removeFromList(index);
                                },
                                function (result) {
                                    $ionicPopup.alert({
                                        title: 'Error while deleting event!',
                                        template: 'Unable to delete event'
                                    });
                                }
                            );
                        },
                        function () { });
        }
    };
    
    $scope.setPinPicker = function (event) {
        $scope.thisEvent = { 'pinCode': event.pinCode };
        var popup = $ionicPopup.show({
            title: 'Set PIN for the meeting',
            template: '<input placeholder="PIN number" type="tel" maxlength="4" ng-model="thisEvent.pinCode">',
            buttons: [
                {
                    text: 'No PIN',
                    type: 'button-dark',
                    onTap: function (e) {
                        event.pinCode = null;
                    }
                },
                {
                    text: '<b>Set PIN</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        event.pinCode = $scope.thisEvent.pinCode;
                    }
                }
            ],
            scope: $scope,
        });
    };

    $scope.hideAfterPicker = function (event) {
        $scope.thisEvent = { 'hideAfter': event.hideAfter ? event.hideAfter : 10 };
        var popup = $ionicPopup.show({
            title: 'Hide meeting on the list',
            template: '<input placeholder="Number of days after meeting" type="number" min="0" max="365" ng-model="thisEvent.hideAfter">',
            buttons: [
                {
                    text: 'Never hide',
                    type: 'button-dark',
                    onTap: function (e) {
                        event.hideAfter = null;
                    }
                },
                {
                    text: '<b>Set</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        event.hideAfter = $scope.thisEvent.hideAfter;
                    }
                }
            ],
            scope: $scope,
        });
    };

    $scope.save = function () {
        $remotestorage.saveEvents($scope.filteredEvents,
            function (event) {
                setTimeout(function() {
                    $remotestorage.forceUpdateEvents($localstorage,
                        function () {
                            $state.go('app.events');
                        },
                        function (result) {}
                    );
                },200);
            },
            function (event, error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Error!',
                    template: 'Something went wrong while saving events.'
                });

                alertPopup.then(function (res) {
                });
            });
    };
}]);