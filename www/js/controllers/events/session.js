visit_controllers.controller('SessionCtrl', ['$scope', '$stateParams', '$localstorage', '$cordovaCalendar', function ($scope, $stateParams, $localstorage, $cordovaCalendar) {
    $scope.session = $localstorage.getSession($stateParams.id);
    if ($scope.session.room) {
        $scope.room = $localstorage.getRoom($scope.session.room.objectId);
    } else {
        $scope.room = {};
    }
    if ($scope.session.spot) {
        $scope.spot = $localstorage.getSpot($scope.session.spot.objectId);
    } else {
        $scope.spot = {};
    }
    $scope.createEvent = function () {
        var event = {
            title: $scope.session.name
        };
        if ($scope.room.name) {
            event.location = $scope.room.name + ', ABB CRC Kraków';
        } else {
            if ($scope.spot.name) {
                event.location = $scope.spot.name + ', '+ $scope.spot.address;
            }
        }
        if ($scope.session.text) {
            event.notes = $scope.session.text.replace(/<\/?[^>]+(>|$)/g, "");
        }
        if ($scope.session.startDate) {
            event.startDate = new Date($scope.session.startDate.iso);
            event.endDate = event.startDate;
        }
        if ($scope.session.endDate) {
            event.endDate = new Date($scope.session.endDate.iso);
            if (!event.startDate) event.startDate = event.endDate;
        }
        $cordovaCalendar.createEventInteractively(event).then(function (result) {
            console.log("Event created successfully");
        }, function (err) {
            alert('Unable to create calendar entry from this session.');
        });
    };
}]);