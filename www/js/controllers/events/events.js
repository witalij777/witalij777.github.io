visit_controllers.controller('EventsCtrl', ['$scope', '$localstorage', '$remotestorage', '$filter', 'AuthService', function ($scope, $localstorage, $remotestorage, $filter, AuthService) {
     //   console.log(JSON.stringify($localstorage.dump()));
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

    $scope.isMultipleDays = function (event) {
        var start = new Date(event.startDate.iso);
        var end = new Date(event.endDate.iso);
        if (start.toISOString().substring(0, 10) == end.toISOString().substring(0, 10)) {
            return false;
        }
        return true;
    };

    $scope.init();
}]);