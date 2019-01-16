visit_controllers.controller('EventCtrl', ['$scope', '$localstorage', '$stateParams', '$timeout', '$filter', '$ionicPopover', function ($scope, $localstorage, $stateParams, $timeout, $filter, $ionicPopover) {
    $scope.event = $localstorage.getEvent($stateParams.id);
    $scope.sessions = $localstorage.getSessions($stateParams.id);
    $scope.sessions = $filter('orderBy')($scope.sessions, ['startDate.iso','-endDate.iso']);
    $scope.filter = { text: '' };
    var rooms = $localstorage.getRooms();
    var spots = $localstorage.getSpots();
    var findById = function (rooms, id) {
        var found = {};
        rooms.forEach(function(room) {
            if ((room!=null)&&(room.objectId == id)) {
                found = room;
            }
        });
        return found;
    };
    $scope.sessions.forEach(function (session) {
        if (session.hasOwnProperty('room')&&session.room) {
            session.roomName = findById(rooms, session.room.objectId).name;
        }
        if (session.hasOwnProperty('spot')&&session.spot) {
            session.spotName = findById(spots, session.spot.objectId).name;
        }
    });
    $scope.isOngoing = function (session) {
        var now = new Date();
        now = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
        if ((session.startDate) && (new Date(session.startDate.iso) < now) && (session.endDate) && (new Date(session.endDate.iso) > now)) return true;
        return false;
    };
    $scope.newDay = function (sessionIndex) {
        if (sessionIndex === 0) return true;
        if (($scope.sessions[sessionIndex - 1].startDate === null) || ($scope.sessions[sessionIndex].startDate === null)) return true;
        var dateBefore = new Date($scope.sessions[sessionIndex - 1].startDate.iso);
        dateBefore = new Date(dateBefore.getTime() + (dateBefore.getTimezoneOffset() * 60000));
        var dateNow = new Date($scope.sessions[sessionIndex].startDate.iso);
        dateNow = new Date(dateNow.getTime() + (dateNow.getTimezoneOffset() * 60000));
        if (dateBefore.getDate() != dateNow.getDate()) return true;
        return false;
    };
    $scope.getLink = function (session) {
        switch (session.type) {
            case 'evacuation':
                if ((session.room==null)||(session.room.objectId=="null")) break;
                return '#/app/plcrc/evacuation?roomId=' + session.room.objectId;
            case 'guidelines':
                return '#/app/plcrc/guidelines';
            case 'city':
                if ((session.spot==null)||(session.spot.objectId=="null")) break;
                return '#/app/city/spot?spotId=' + session.spot.objectId;
            case 'room':
                if ((session.room==null)||(session.room.objectId=="null")) break;
                return '#/app/plcrc/room?id=' + session.room.objectId;
            case 'plan':
                if ((session.room==null)||(session.room.objectId=="null"))break;
                return '#/app/plcrc/plan?id=' + session.room.objectId;
            case 'meeting':
                if ((session==null)||(session.objectId=="null")) break;
                return '#/app/events/session?id=' + session.objectId;
            case 'other':
                return '';
            default:
                if ((session==null)||(session.objectId=="null")) break;
                return '#/app/events/session?id=' + session.objectId;
        }
        return '';
    };

    $ionicPopover.fromTemplateUrl('search.html', {
        scope: $scope,
    }).then(function (popover) {
        $scope.popover = popover;
    });
    
}]);