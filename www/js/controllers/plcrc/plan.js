visit_controllers.controller('PlanCtrl', ['$scope', '$ionicSlideBoxDelegate', '$ionicModal', '$localstorage', '$stateParams', '$timeout',  function ($scope, $ionicSlideBoxDelegate, $ionicModal, $localstorage, $stateParams, $timeout) {
    var rooms = $localstorage.getRooms();
    $scope.selectedRoom = {index:0, name:''};

    Array.prototype.clear = function () {
        this.length = 0;
    };
    var updateRoomsOnTheFloor = function (floor) {
        $scope.selectableRooms.clear();        
        $scope.selectedFloor = {'index': floor + 1};
        $scope.selectedRoom.index = 0;
        var selectedLocationId = $scope.selectableLocations[$scope.selectedLocation.index].objectId;
        rooms.forEach(function (room) {
            if ((room.address.objectId==selectedLocationId)&&(room.floor == floor)) {
                $scope.selectableRooms.push({ 'name': room.name, 'id': room.objectId, 'type': room.type });
                if ($stateParams.id == room.objectId) {
                    $scope.selectedRoom.index = ($scope.selectableRooms.length - 1);
                }
            }
        });       
        $scope.selectedRoom.name = $scope.selectableRooms[$scope.selectedRoom.index].name;
    };
    var updateFloors = function (location) {
        
        if ((typeof location.name  == "undefined")||(location.name == "Starowiślna 13A")) {
            $scope.selectableFloors = [{ name: 'Basement', url: 'plcrc/13a/13a_basement.svg' }, { name: 'Ground floor', url: 'plcrc/13a/13a_ground.svg' }, { name: '1st Floor', url: 'plcrc/13a/13a_first.svg' }, { name: '2nd Floor', url: 'plcrc/13a/13a_second.svg' }, { name: '3rd Floor', url: 'plcrc/13a/13a_third.svg' }, { name: '4th Floor', url: 'plcrc/13a/13a_fourth.svg' }, { name: '5th Floor', url: 'plcrc/13a/13a_fifth.svg' }];
        }
        if (location.name == "Starowiślna 15"){
            $scope.selectableFloors = [{ name: 'Basement', url: 'plcrc/15/15_basement.svg' }, { name: 'Ground floor', url: 'plcrc/15/15_ground.svg' }, { name: '1st Floor', url: 'plcrc/15/15_first.svg' }, { name: '2nd Floor', url: 'plcrc/15/15_second.svg' }, { name: '3rd Floor', url: 'plcrc/15/15_third.svg' }, { name: '4th Floor', url: 'plcrc/15/15_fourth.svg' }];
        }   
        $ionicSlideBoxDelegate.update();
    };

    $scope.slideHasChanged = function (index) {
        updateRoomsOnTheFloor(index - 1);
    };
    $scope.selectedFloorChanged = function (index) {
        updateRoomsOnTheFloor(index-1);
    };
    $scope.selectedLocationChanged = function (index) {
        updateFloors($scope.selectableLocations[index]);
        updateRoomsOnTheFloor($scope.selectedFloor.index);
    };
    $scope.selectedRoomChanged = function (room) {
        if (room === null) room = 1;
        $scope.selectedRoom.name = $scope.selectableRooms[room].name;
    };
    $scope.init = function () {
        $scope.selectableLocations = $localstorage.getLocations();
        var room = $localstorage.getRoom($stateParams.id);
        if ($stateParams.id) {
            $scope.selectedLocation = {"index":  room.location.index, "name": room.location.name};
            $scope.selectedFloor = {'index': room.floor};
        } else {
            $scope.selectedLocation =  {"index": 0};
            $scope.selectedFloor = { 'index': 0 };
        }
        $scope.selectableRooms = [];
        updateFloors($scope.selectedLocation);
        updateRoomsOnTheFloor($scope.selectedFloor.index);
    };
    $scope.init();
    $scope.parseInt = parseInt;

    $ionicModal.fromTemplateUrl('image-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.showImage = function () {
        $scope.imageSrc = './img/evacuation/map.png';
        $scope.openModal();
    };

    $scope.closeModal = function () {
        $scope.modal.hide();
    };
}]);