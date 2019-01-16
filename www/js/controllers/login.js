visit_controllers.controller('LoginCtrl', ['$scope', '$state', '$stateParams', '$ionicPopup', '$ionicHistory', 'AuthService', function ($scope, $state, $stateParams, $ionicPopup, $ionicHistory, AuthService) {
    $scope.data = {};

    $scope.login = function (data) {
        data.next = $stateParams.next;
        data.nextParams = $stateParams.nextParams;
        AuthService.login(data).then(function (authenticated) {
            if ($stateParams.next === null) {
                $stateParams.next = { 'name': 'app.main_menu' };
            }
            $ionicHistory.currentView($ionicHistory.backView());
            $state.go($stateParams.next.name, $stateParams.nextParams, { location: "replace", reload: true });
        }, function (err) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please ask for credentials!'
            });
        });
    };
}]);