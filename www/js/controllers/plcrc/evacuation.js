visit_controllers.controller('EvacuationCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', '$stateParams', '$timeout', '$localstorage', function ($scope, $ionicModal, $ionicSlideBoxDelegate, $stateParams, $timeout, $localstorage) {
    $scope.evacuationSteps = [
        { img: './img/evacuation/exit.svg', text: 'Remain calm and proceed with exit.' },
        { img: './img/evacuation/exit2.svg', text: 'Locate nearest emergency exit.' },
        { img: './img/evacuation/stairs.svg', text: 'Use nearest staircase (do not use elevator).' },
        { img: './img/evacuation/meeting.svg', text: 'Leave the building and proceed to the meeting point (map above).' },
        { img: './img/evacuation/door.svg', text: 'Wait for instructions from the emergency officer. Do not reenter the building.' }
    ];
    var updateFloors = function (location) {
        
        if ((typeof location.name  == "undefined")||(location.name == "Starowiślna 13A")) {
            $scope.selectableFloors = [{ name: 'Basement', url: 'plcrc/13a/13a_basement.svg' }, { name: 'Ground floor', url: 'plcrc/13a/13a_ground.svg' }, { name: '1st Floor', url: 'plcrc/13a/13a_first.svg' }, { name: '2nd Floor', url: 'plcrc/13a/13a_second.svg' }, { name: '3rd Floor', url: 'plcrc/13a/13a_third.svg' }, { name: '4th Floor', url: 'plcrc/13a/13a_fourth.svg' }, { name: '5th Floor', url: 'plcrc/13a/13a_fifth.svg' }];
        }
        if (location.name == "Starowiślna 15"){
            $scope.selectableFloors = [{ name: 'Basement', url: 'plcrc/15/15_basement.svg' }, { name: 'Ground floor', url: 'plcrc/15/15_ground.svg' }, { name: '1st Floor', url: 'plcrc/15/15_first.svg' }, { name: '2nd Floor', url: 'plcrc/15/15_second.svg' }, { name: '3rd Floor', url: 'plcrc/15/15_third.svg' }, { name: '4th Floor', url: 'plcrc/15/15_fourth.svg' }];
        }   
        $ionicSlideBoxDelegate.update();
    };


    var selectedFloorIndex = 0;
    $scope.selectedFloor = {'idx':0,'siblings':0};

    $ionicModal.fromTemplateUrl('image-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    $scope.showModal = function (floorIdx) {
        $scope.floor = $scope.selectableFloors[floorIdx];
        $scope.modal.show();
    };

    $scope.$on("$ionicView.enter", function () {
        $ionicSlideBoxDelegate.slide(selectedFloorIndex);
        $scope.selectedFloor.siblings = 1;
    });

    $scope.init = function () {
        $scope.selectableLocations = $localstorage.getLocations();
        if ($stateParams.roomId) {
            var room = $localstorage.getRoom($stateParams.roomId);
            $scope.selectedLocation = {"index":  room.location.index, "name": room.location.name};
            $scope.selectedRoom = { 'name': room.name };
            selectedFloorIndex = room.floor + 1;
        } else {
            $scope.selectedLocation =  {"index": 0};
        }
        updateFloors($scope.selectedLocation);
        $scope.evacuationActive = true;
    };
    $scope.init();
}]);