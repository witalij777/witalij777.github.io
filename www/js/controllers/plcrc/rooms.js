
visit_controllers.controller('RoomsCtrl', ['$scope', '$localstorage', '$filter', '$ionicPopover', function ($scope, $localstorage, $filter, $ionicPopover) {
    $scope.confRooms = $localstorage.getConferenceRooms();
    $scope.filter = { text: '' };
    $ionicPopover.fromTemplateUrl('search.html', {
        scope: $scope,
    }).then(function (popover) {
        $scope.popover = popover;
    });

}]);