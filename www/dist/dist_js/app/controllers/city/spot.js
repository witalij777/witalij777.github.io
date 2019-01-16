visit_controllers.controller('SpotCtrl', ['$scope', '$stateParams', '$localstorage', function ($scope, $stateParams, $localstorage) {
    $scope.spot = $localstorage.getSpot($stateParams.spotId);
    $scope.spotAttributes = $localstorage.getSpotAttributes($stateParams.spotId);
    CRCcords = {
        latitude: 50.057901,
        longitude: 19.943042
    };
    toRad = function (value) {
        return value * Math.PI / 180;
    };
    distance = function (point1, point2) {
        var R = 6371; // earth radius in km
        var x = (toRad(point2.longitude) - toRad(point1.longitude)) *
                Math.cos((toRad(point1.latitude) + toRad(point2.latitude)) / 2);
        var y = (toRad(point2.latitude) - toRad(point1.latitude));
        return Math.sqrt(x * x + y * y) * R;
    };
    $scope.spot.distance = distance(CRCcords, $scope.spot.position);

    $scope.showValue = function (type) {
        if (['open', 'food', 'discount'].indexOf(type) > -1) return true;
        return false;
    };
    $scope.makeLink = function (type) {
        if (['url', 'email', 'phone'].indexOf(type) > -1) return true;
        return false;
    };

    $scope.getDirections = function () {
        launchnavigator.navigate(
        [$scope.spot.position.latitude, $scope.spot.position.longitude],
        null,
        function () {

        },
        function (error) {
            alert("Plugin error: " + error);
        }, {
            navigationMode: "maps",
            transportMode: "walking"
        });
    };
}]);