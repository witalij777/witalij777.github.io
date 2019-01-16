visit_controllers.controller('BleCtrl', ['$scope', '$bleService', function ($scope, $bleService) {
    $scope.devices = $bleService.getDevices();
    $bleService.startConstantScan(5000);
}]);