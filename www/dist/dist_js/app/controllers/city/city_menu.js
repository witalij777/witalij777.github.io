visit_controllers.controller('CityMenuCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goToCity = function () {
        $state.go('app.city/city');
    };
    $scope.goToAirport = function () {
        $state.go('app.city/airport');
    };
    $scope.goToSpot = function (type) {
        document.location.href = '#/app/city/spots?type='+type;
    };
}]);