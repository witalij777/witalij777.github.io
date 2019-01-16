visit_controllers.controller('NavigateCtrl', ['$scope', '$localstorage', '$ionicPopover', '$timeout', function ($scope, $localstorage, $ionicPopover, $timeout) {
    $scope.spots = $localstorage.getSpots();
    $scope.spotTypes = [{ id: 'atm', text: 'ATMs', selected: true }, { id: 'hotel', text: 'Hotels', selected: true }, { id: 'location', text: 'Locations', selected: true }, { id: 'restaurant', text: 'Restaurants', selected: true }, { id: 'shopping', text: 'Shopping', selected: true }, { id: 'sight', text: 'Sights', selected: true }];
    $scope.filteredSpots = [];
    $scope.filterSpots = function () {
        $scope.filteredSpots = [];
        $scope.spots.forEach(function (spot) {
            $scope.spotTypes.forEach(function (spotType) {
                if (spot.type == spotType.id) {
                    if (spotType.selected === true) $scope.filteredSpots.push(spot);
                }
            });
        });
    };
    $scope.changeFiltration = function () {
        var changeTo = !$scope.spotTypes[0].selected;
        $scope.spotTypes.forEach(function (spot) {
            spot.selected = changeTo;
        });
        $scope.filterSpots();
    };
    $scope.navigateToSpot = function (spotId) {
        var spot = $localstorage.getSpot(spotId);
        $timeout(function () {
            launchnavigator.navigate(
            [spot.position.latitude, spot.position.longitude],
            null,
            function () {

            },
            function (error) {
                alert("Plugin error: " + error);
            }, {
                preferGoogleMaps: true,
                navigationMode: "maps",
                transportMode: "walking"
            });
        }, 100);
        
    };
    $scope.filterSpots();

    $ionicPopover.fromTemplateUrl('popover.html', {
        scope: $scope
    }).then(function (popover) {
        $scope.popover = popover;
    });
    $scope.showFilterModal = function ($event) {
        $scope.popover.show($event);
    };
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
        $scope.filterSpots();
    });
    $scope.$on('popover.hidden', function () {
        $scope.filterSpots();
    });
    $scope.$on('popover.removed', function () {
        $scope.filterSpots();
    });
}]);