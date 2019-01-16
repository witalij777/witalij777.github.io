visit_controllers.controller('BleCtrl', function ($scope, $bleService) {
    $scope.devices = $bleService.getDevices();
    $bleService.startConstantScan(5000);
});