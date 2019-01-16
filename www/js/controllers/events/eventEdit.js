visit_controllers.controller('EventEditCtrl', ['$scope', '$localstorage', '$remotestorage', '$stateParams', '$timeout', '$filter', '$ionicPopup', '$window', function ($scope, $localstorage, $remotestorage, $stateParams, $timeout, $filter, $ionicPopup, $window) {
    $scope.event = $localstorage.getEvent($stateParams.id);
    $scope.sessions = $localstorage.getSessions($stateParams.id);
    $scope.sessions = $filter('orderBy')($scope.sessions, ['startDate.iso', -'endDate.iso']);
    $scope.icons = [
        { 'icon': 'calendar', 'name': 'Calendar' },
        { 'icon': 'cutlery', 'name': 'Lunch' },
        { 'icon': 'coffee', 'name': 'Coffe break' },
        { 'icon': 'plane', 'name': 'Airport' },
        { 'icon': 'taxi', 'name': 'Taxi' },
        { 'icon': 'evacuationsign', 'name': 'Evacuation instructions' },
        { 'icon': 'guidelines', 'name': 'Visitor guidelines' },
        { 'icon': 'laboratory', 'name': 'Lab tour' },
        { 'icon': 'visitgroupa', 'name': 'Stream A' },
        { 'icon': 'visitgroupb', 'name': 'Stream B' },
        { 'icon': 'visitgroupc', 'name': 'Stream C' },
        { 'icon': 'visitgroupd', 'name': 'Stream D' },
        { 'icon': 'visitgroupe', 'name': 'Stream E' },
        { 'icon': 'train', 'name': 'Train' },
    ];
    $scope.sessionTypes = [
        { 'icon': 'meeting', 'name': 'Meeting details' },
        { 'icon': 'evacuation', 'name': 'Evacuation instructions' },
        { 'icon': 'guidelines', 'name': 'Visitor guidelines' },
        { 'icon': 'city', 'name': 'City spot' },
        { 'icon': 'room', 'name': 'Room details' },
        { 'icon': 'plan', 'name': 'Building plan' },
        { 'icon': 'other', 'name': 'No link' }
    ];
    var rooms = $localstorage.getRooms();
    $scope.rooms = $localstorage.getConferenceRooms();
    $scope.restaurants = $localstorage.getRestaurants();
    var spots = $localstorage.getSpots();
    var findById = function (rooms, id) {
        var found = {};
        rooms.forEach(function (room) {
            if (room.objectId == id) {
                found = room;
            }
        });
        return found;
    };
    $scope.sessions.forEach(function (session) {
        if (session.hasOwnProperty('room')) {
            session.roomName = findById(rooms, session.room.objectId).name;
        }
        if (session.hasOwnProperty('spot')) {
            session.spotName = findById(spots, session.spot.objectId).name;
        }
    });
    $scope.newDay = function (sessionIndex) {
        if ((sessionIndex === 0) || (!$scope.sessions[sessionIndex - 1].startDate) || (!$scope.sessions[sessionIndex].startDate)) return true;
        var dateBefore = new Date($scope.sessions[sessionIndex - 1].startDate.iso);
        var dateNow = new Date($scope.sessions[sessionIndex].startDate.iso);
        if (dateBefore.getDate() != dateNow.getDate()) return true;
        return false;
    };

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
        if (index === null) {
            index = { "__type": "Date", 'iso': (new Date()).toISOString() };
        }
        if ((index.iso === null) || (index.iso === "")) {
            index.iso = (new Date()).toISOString();
        }
        $scope.removeDate = function () {
            index.iso = "";
            popup.close();
        };
        $scope.tmp.newDate = (new Date(index.iso)).addOffset().toISOString();
        $scope.onTimeSet = function (newDate, oldDate) {
            index.iso = (new Date(newDate)).removeOffset().toISOString();
            popup.close();
        };
        var popup = $ionicPopup.show({
            template: '<datetimepicker data-ng-model="tmp.newDate" data-on-set-time="onTimeSet(newDate, oldDate)"></datetimepicker><button ng-click="removeDate()">No time</button>',
            scope: $scope,
        });
    };

    $scope.openIconPicker = function (session) {
        var popup = $ionicPopup.show({
            title: 'Set Icon',
            templateUrl: 'icon_picker.html',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    type: 'button-dark',
                    onTap: function (e) {

                    }
                }
            ],
        });
        $scope.selectIcon = function (icon) {
            session.icon = icon;
            popup.close();
        };
    };

    $scope.openMeetingTypePicker = function (session) {
        var popup = $ionicPopup.show({
            title: 'Link to..',
            templateUrl: 'type_picker.html',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    type: 'button-dark',
                    onTap: function (e) {

                    }
                }
            ],
        });
        $scope.selectIcon = function (icon) {
            session.type = icon;
            popup.close();
        };
    };

    $scope.addSession = function () {
        var currentDateISO = (new Date()).toISOString();
        var lastSession = $scope.sessions[$scope.sessions.length - 1];
        var roomName = (($scope.sessions.length > 0) && lastSession.hasOwnProperty('room') && lastSession.roomName) || '';
        var room = (($scope.sessions.length > 0) && lastSession.hasOwnProperty('room') && lastSession.room) || null;
        var date = $scope.sessions.length > 0 && lastSession.endDate !== null && (typeof lastSession.endDate !== "undefined") && JSON.parse(JSON.stringify(lastSession.endDate)) || $scope.sessions.length > 0 && JSON.parse(JSON.stringify(lastSession.startDate)) || { "__type": "Date", 'iso': (new Date()).toISOString() };
        var newSession = {
            "attendee": '',
            "event": {
                "__type": "Pointer",
                "className": "Event",
                "objectId": $scope.event.objectId
            },
            "presenter": '',
            "text": '',
            "type": 'meeting',
            "name": 'Edit session name',
            "icon": "calendar",
            "endDate": date,
            "startDate": JSON.parse(JSON.stringify(date)),
            "roomName": roomName,
            "room": room,
            "createdAt": currentDateISO,
            "updatedAt": currentDateISO
        };
        $scope.sessions.unshift(newSession);

    };

    $scope.removeSession = function (sessionId) {
        $remotestorage.removeSession(
            sessionId,
            function () {
                $remotestorage.forceUpdateEvents($localstorage,
                    function () {
                        document.location.href = "#/app/events/event?id=" + $stateParams.id;
                    },
                    function (result) {
                    }
                );
            },
            function () { });
    };
    $scope.roomPickerType = "meeting";
    $scope.openRoomPicker = function (session) {

        //$scope.thisEvent = { 'pinCode': event.pinCode }
        var popup = $ionicPopup.show({
            title: 'Set Icon',
            templateUrl: 'room_picker.html',
            scope: $scope,
            buttons: [
                {
                    text: 'No room',
                    type: 'button-dark',
                    onTap: function (e) {
                        session.roomName = "";
                        session.room = {
                            "__type": "Pointer",
                            "className": "Room",
                            "objectId": null
                        };
                        session.spotName = "";
                        session.spot = {
                            "__type": "Pointer",
                            "className": "Spot",
                            "objectId": null
                        };
                    }
                }
            ],
        });
        $scope.selectRoom = function (selectedRoom) {
            session.roomName = selectedRoom.name;
            session.room = {
                "__type": "Pointer",
                "className": "Room",
                "objectId": selectedRoom.objectId
            };
            popup.close();
        };
        $scope.selectSpot = function (selectedSpot) {
            session.spotName = selectedSpot.name;
            session.spot = {
                "__type": "Pointer",
                "className": "Spot",
                "objectId": selectedSpot.objectId
            };
            popup.close();
        };
    };

    $scope.save = function () {
        $remotestorage.saveSessions($scope.sessions,
            function (event) {
                $remotestorage.forceUpdateEvents($localstorage,
                    function () {
                        document.location.href = "#/app/events/event?id=" + $stateParams.id;
                        $window.location.reload();
                    },
                    function (result) {
                    }
                );
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