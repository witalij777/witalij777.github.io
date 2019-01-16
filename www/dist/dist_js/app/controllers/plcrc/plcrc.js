visit_controllers.controller('PlcrcCtrl', ['$scope', '$state', '$ionicSlideBoxDelegate', 'AuthService', function ($scope, $state, $ionicSlideBoxDelegate, AuthService) {
    $scope.images = ['./img/plcrc_1.jpg', './img/plcrc_2.jpg', './img/plcrc_3.jpg'];
    $scope.selectedSlide = {'idx' : 0};

    $scope.links = [
        { title: 'About', state: 'app.plcrc/about', icon: 'ion-information-circled' },
        { title: 'Location', state: 'app.plcrc/location', icon: 'ion-location' },
        { title: 'Contact', state: 'app.plcrc/contact', icon: 'ion-ios-telephone' },
        { title: 'Who is who?', state: 'app.plcrc/whoiswho', icon: 'ion-person-stalker', toBeLocked: true },
        { title: 'Office plan', state: 'app.plcrc/plan', icon: 'ion-map', toBeLocked: true },
        { title: 'Meeting rooms', state: 'app.plcrc/rooms', icon: 'ion-android-calendar', toBeLocked: true },
        { title: 'Evacuation instructions', state: 'app.plcrc/evacuation', icon: 'icon-evacuationsign'},
        { title: 'Visitors guidelines', state: 'app.plcrc/guidelines', icon: 'icon-guidelines' }
    ];

    $scope.isLocked = (AuthService.isPlcrcMember()) ? false : true;

}]);