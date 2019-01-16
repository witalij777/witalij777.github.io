visit_controllers.controller('ContactCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goToLocation = function () {
        $state.go('app.plcrc/location');
    };
    $scope.mailPlcrc = function () {
        document.location.href = "mailto:plcrcoffice@pl.abb.com?subject=Contact ABB Corporate Research Kraków";
    };
    $scope.callNumber = function (number) {
        document.location.href = number;
    };
}]);