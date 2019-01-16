visit_controllers.controller('SessionEditCtrl', ['$scope', '$stateParams', '$localstorage', '$remotestorage', '$cordovaCalendar', '$window', function ($scope, $stateParams, $localstorage, $remotestorage, $cordovaCalendar, $window) {
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
    $scope.save = function () {
        var eventId = $scope.session.event.objectId;
        $remotestorage.saveSessions([$scope.session],
            function (event) {
                $remotestorage.forceUpdateEvents($localstorage,
                    function () {
                        document.location.href = "#/app/events/event?id=" + eventId;
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