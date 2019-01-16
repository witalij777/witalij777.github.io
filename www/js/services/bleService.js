visit_plcrc.factory('$bleService', function ($q, $interval, $localstorage) {
    var connected;

    var devices = [];

    var confRooms = $localstorage.getConferenceRooms();

    var scan = function (time) {
        var deferred = $q.defer();

        foundDevices = [];

        if (connected) {
            var id = connected.id;
            ble.disconnect(connected.id, function () {
                console.log("Disconnected " + id);
            });
            connected = null;
        }

        ble.startScan([],  /* scan for all services */
            function (peripheral) {
                foundDevices.push(peripheral);
            },
            function (error) {
                deferred.reject(error);
            });

        setTimeout(ble.stopScan, time,
            function () {
                deferred.resolve(foundDevices);
            },
            function () {
                console.log("stopScan failed");
                deferred.reject("Error stopping scan");
            }
        );

        return deferred.promise;
    };
    
    var success = function (devicesFound) {
        devicesFound.forEach(function(deviceFound) {
            var found = false;
            devices.forEach(function(deviceRegister) {
                if (deviceRegister.id==deviceFound.id) {
                    deviceRegister.rssi = deviceFound.rssi;
                    deviceRegister.lastSeen = new Date();
                    found = true;
                }
            });
            if (!found) {
                deviceFound.lastSeen = new Date();
                confRooms.forEach(function(room) {
                    if (room.tag==deviceFound.id) {
                        deviceFound.room = room;
                    }
                });
                devices.push(deviceFound);
            }
        });
    };

    var failure = function (error) {
        alert(error);
    };

    var intervalTask = null;
    var startConstantScan = function(interval) {
        intervalTask = $interval(function () {
            scan(interval-100).then(success, failure);
        }, interval);
    };
    var stopConstantScan = function() {
        if (intervalTask) intervalTask.cancel();
    };
    return {
        getDevices: function() {
            return devices;
        },

        getRooms: function () {
            return rooms;
        },

        singleScan: scan,

        startConstantScan: startConstantScan,

        stopConstantScan: stopConstantScan,

        connect: function (deviceId) {
            var deferred = $q.defer();
            ble.connect(deviceId,
                function (peripheral) {
                    connected = peripheral;
                    deferred.resolve(peripheral);
                },
                function (reason) {
                    deferred.reject(reason);
                }
            );
            return deferred.promise;
        }
    };
});