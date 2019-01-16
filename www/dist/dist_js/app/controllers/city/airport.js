visit_controllers.controller('AirportCtrl', ['$scope', '$localstorage', function ($scope, $localstorage) {
    $scope.airportAttributes = $localstorage.getAirportAttributes();
    $scope.showValue = function (icon) {
        if (['money', 'pedestrian'].indexOf(icon) > -1) return true;
        return false;
    };
    $scope.makeLink = function (icon) {
        if (['globe'].indexOf(icon) > -1) return true;
        return false;
    };
    $scope.newLine = function (icon) {
        if (['path'].indexOf(icon) > -1) return true;
        return false;
    };
}]);