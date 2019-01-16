var visit_controllers = angular.module('visit_plcrc.controllers', []);
visit_controllers.controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', '$state', '$remotestorage', '$localstorage', '$ionicPopup', 'AuthService', 'AUTH_EVENTS', function ($scope, $ionicModal, $timeout, $state, $remotestorage, $localstorage, $ionicPopup, AuthService, AUTH_EVENTS) {

    $scope.username = AuthService.username();

    $scope.$on(AUTH_EVENTS.notAuthorized, function (event) {
        $state.go('login');
        //        var alertPopup = $ionicPopup.alert({
        //            title: 'Unauthorized!',
        //            template: 'You are not allowed to access this resource.'
        //        });
    });

    $scope.setCurrentUsername = function (name) {
        $scope.username = name;
    };

    $scope.goToState = function (state) {
        $state.go(state);
    };

    $scope.isAgendaEditEnabled = function () {
        return $localstorage.isAgendaEditEnabled();
    };

    $scope.isMobileDevice = function () {
        var currentPlatform = ionic.Platform.platform();
        return (currentPlatform != 'win32');
    };

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.side_menu_items = [
        { title: 'Office', icon: 'icon-office', state: 'app.plcrc' },
        { title: 'Events', icon: 'icon-events', state: 'app.events' },
        { title: 'Navigate', icon: 'icon-navigate', state: 'app.navigate' },
        { title: 'City', icon: 'icon-city', state: 'app.city' },
        { title: 'About ABB', icon: 'icon-about', state: 'app.abb' },
        { title: 'Settings', icon: 'icon-settings', state: 'app.settings' },
    ];
}])

.controller('MainMenuCtrl', ['$scope', function ($scope) {
    $scope.view_title = "Visit CRC Kraków";
    $scope.menu_items = [
        { title: 'ABB Corporate Research in Kraków', img: './img/plcrc_front.jpg', state: 'app.plcrc' },
        { title: 'Events', img: './img/events.jpg', state: 'app.events' },
        { title: 'Navigate', img: './img/directions.jpg', state: 'app.navigate' },
        { title: 'Kraków highlights', img: './img/city/krakow_1.jpg', state: 'app.city' },
        { title: 'About ABB', img: './img/plabb/abbgroup.jpg', state: 'app.abb' },
    ];

}])

.controller('AbbCtrl', ['$scope',function ($scope) {
    $scope.view_title = "About ABB";
    $scope.menu_items = [
        { title: 'Our heritage', img: './img/plabb/history.jpg', state: 'app.abb/history' },
        { title: 'Technology', img: './img/plabb/technology2.jpg', state: 'app.abb/technology' },
        { title: 'Our values', img: './img/plabb/dna.jpg', state: 'app.abb/dna' },
        { title: 'ABB in Poland', img: './img/plabb/plabb.jpg', state: 'app.abb/plabb' },
    ];
}]);


