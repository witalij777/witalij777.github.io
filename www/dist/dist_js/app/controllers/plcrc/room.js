visit_controllers.controller('RoomCtrl', ['$scope', '$stateParams', '$localstorage', '$filter', '$ionicPopover', function ($scope, $stateParams, $localstorage, $filter, $ionicPopover) {
    $scope.room = $localstorage.getRoom($stateParams.id);
    $scope.roomAttributes = $localstorage.getRoomAttributes($stateParams.id);
    $scope.roomAttributes.forEach(function(attribute) {
        if (attribute.type == 'floor') {
            attribute.value = $filter('floorFilter')(attribute.value);
        }
    });
    $scope.roomAttributes.unshift({'value':$scope.room.address.name,'icon':'location'});
    $scope.makeLink = function (attribute, event) {
        if (attribute.type == 'phone') {
            document.location.href = 'tel:'+attribute.value;
        }
        if (attribute.type == 'floor') {
            document.location.href = '#/app/plcrc/plan?id=' + $stateParams.id;
            attribute.value = attribute.value;
        }
        if ((attribute.type == 'vc') && (attribute.value !== null)) {
            $ionicPopover.fromTemplateUrl('vc.html', {
                scope: $scope
            }).then(function (popover) {
                $scope.attribute = attribute;
                popover.show(event);
            });
        }
    };
    $scope.isLink = function (attribute) {
        if (attribute.type == 'floor') {
            return true;
        } else if ((attribute.type == 'vc')&&(attribute.value !== null)) {
            return true;
        } else return false;
    };
   // $scope.id = $stateParams.id
}]);