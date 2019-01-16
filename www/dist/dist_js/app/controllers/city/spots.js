visit_controllers.controller('SpotsCtrl', ['$scope', '$stateParams', '$localstorage', function ($scope, $stateParams, $localstorage) {
    $scope.spots = $localstorage.getSpots();
    $scope.spotType = $stateParams.type;
    $scope.spots.forEach(function (spot) {
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
        spot.distance = distance(CRCcords,spot.position);
    });
}]);