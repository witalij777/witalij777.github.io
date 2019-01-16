visit_controllers.controller('WhoIsWhoCtrl', ['$scope', '$localstorage', function ($scope, $localstorage) {
    $scope.whoIsWho = $localstorage.getWhoIsWho();
}]);