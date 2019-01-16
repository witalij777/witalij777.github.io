visit_controllers.controller('LocationCtrl', ['$scope', '$stateParams', '$ionicLoading', '$localstorage', '$ionicScrollDelegate', '$timeout', function ($scope, $stateParams, $ionicLoading, $localstorage, $ionicScrollDelegate, $timeout) {
    $scope.spot = {
        position: {
            latitude: 50.057901,
            longitude: 19.943042
        },
        address: 'Starowiślna 13A, Kraków',
        name: 'CRC Kraków'
    };

    var spotId = $stateParams.spotId;

    if (spotId) {
        $scope.spot = $localstorage.getSpot($stateParams.spotId);
    }
    if ($stateParams.position) {
        var spotPosition = JSON.parse($stateParams.position);
        $scope.spot = {
            position: {
                latitude: spotPosition[0],
                longitude: spotPosition[1]
            },
            address: '',
            name: ''
        };
        spotId = 1;
    }

    $scope.getDirections = function () {
        launchnavigator.navigate(
        [$scope.spot.position.latitude, $scope.spot.position.longitude],
        null,
        function () {

        },
        function (error) {
            alert("Plugin error: " + error);
        }, {
            navigationMode: "maps",
            transportMode: "walking"
        });
    };

    if (((window.Connection) && (navigator.connection.type == Connection.NONE)) || (typeof google === 'undefined')) {
        if (spotId) {
            $scope.getDirections();
        } else {
            document.getElementById("map").style.backgroundImage = "url('./img/map.jpg')";
            document.getElementById("map").style.backgroundRepeat = 'no-repeat';
            document.getElementById("map").style.backgroundPosition = 'center';
        }
    }
    else {
        var myLatlng = new google.maps.LatLng($scope.spot.position.latitude, $scope.spot.position.longitude);

        var mapOptions = {
            center: myLatlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            animation: google.maps.Animation.DROP,
            map: map,
            title: $scope.spot.name
        });

        var infoWindow = new google.maps.InfoWindow({
            content: $scope.spot.name
        });

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open($scope.map, marker);
        });
        $scope.map = map;
    }


}]);