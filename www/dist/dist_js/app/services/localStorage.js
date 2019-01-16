visit_plcrc.factory('$localstorage', ['$window', function ($window) {
    var getObject = function (key) {
        try {
            return JSON.parse($window.localStorage[key] || '[]');
        } catch(e){
            return {};
        }
    };
    var setObject = function (key,value) {
        $window.localStorage.setItem(key, JSON.stringify(value));
    };
    var getRoomAddress = function(addressId) {
        var addresses = getObject('Address');
        var location = {'name':'','index':0};
        for (var i = 0, len = addresses.length; i < len; i++) {
            if (addresses[i].objectId == addressId) {
                location = {'name':addresses[i].name,'index':i};
            }                    
        }
        return location;
    };
    var getKeys = function() {
        var toReturn = [];
        for (i = 0; i < $window.localStorage.length; i++)   {
            toReturn.push($window.localStorage.key(i));
        }
        return toReturn;
    };
    return {
        keys: function() {
            return getKeys();
        },
        dump: function() {
            var keys = getKeys();
            var toReturn ={};
            for (var key in keys){
                toReturn[keys[key]] = getObject(keys[key]);
            }
            return toReturn;
        },
        set: function (key, value) {
            $window.localStorage.setItem(key, value);
        },
        get: function (key, defaultValue) {
            return $window.localStorage.getItem(key) || defaultValue;
        },
        setObject: function (key, value) {
            setObject(key,value);
        },
        getObject: function (key) {
            return getObject(key);
        },
        getEvents: function () {
            return getObject('Event');
        },
        getEvent: function (eventId) {
            var found = {};
            getObject('Event').forEach(function (event) {
                if (event.objectId == eventId) {
                    found = event;
                }
            });
            return found;
        },
        getSessions: function (eventId) {
            var found = [];
            getObject('Session').forEach(function (session) {
                if ((session.event)&&(session.event.objectId == eventId)) {
                    found.push(session);
                }
            });
            return found;
        },
        getSession: function (sessionId) {
            var found = {};
            getObject('Session').forEach(function (session) {
                if (session.objectId == sessionId) {
                    found=session;
                }
            });
            return found;
        },
        getRooms: function () {
            return getObject('Room');
        },
        getRoom: function (roomId) {
            var found = {};
            getObject('Room').forEach(function (room) {
                if (room.objectId == roomId) {
                    room.location = getRoomAddress(room.address.objectId);
                    found = room;
                }
            });
            return found;
        },
        getRoomAttributes: function (roomId) {
            var found = [];
            getObject('RoomAttribute').forEach(function (room) {
                if (room.room.objectId==roomId) {
                    found.push(room);
                }
            });
            return found;
        },
        getSpots: function () {
            return getObject('Spot');
        },
        getSpot: function (spotId) {
            var found = {};
            getObject('Spot').forEach(function (spot) {
                if (spot.objectId == spotId) {
                    found = spot;
                }
            });
            return found;
        },
        getSpotAttributes: function (spotId) {
            var found = [];
            getObject('SpotAttribute').forEach(function (attribute) {
                if (attribute.spot.objectId == spotId) {
                    found.push(attribute);
                }
            });
            return found;
        },
        getAirportAttributes: function (airportId) {
            return getObject('AirportAttribute');
        },
        getConferenceRooms: function () {
            var toReturn = [];
            var getFloorName = function (floor) {
                switch (floor) {
                    case -1:
                        return 'Basement';
                    case 0:
                        return 'Ground floor';
                    case 1:
                        return '1st floor';
                    case 2:
                        return '2nd floor';
                    case 3:
                        return '3rd floor';
                    case 4:
                        return '4th floor';
                    case 5:
                        return '5th floor';
                }
            };
            getObject('Room').forEach(function (room) {
                if (room.type == 'meeting') {
                    room.floorName = getFloorName(room.floor);
                    room.location = getRoomAddress(room.address.objectId);
                    toReturn.push(room);
                }
            });
            return toReturn;
        },
        getRestaurants: function () {
            var toReturn = [];
            getObject('Spot').forEach(function (room) {
                if (room.type == 'restaurant') {
                    toReturn.push(room);
                }
            });
            return toReturn;
        },
        getWhoIsWho: function () {
            return getObject('WhoIsWho');
        },
        isAgendaEditEnabled: function () {
            return (getObject('AgendaEdit') && true);
        },
        setAgendaEditEnabled: function (value) {
            return setObject('AgendaEdit', value);
        },
        getLocations: function () {
            return getObject('Address');
        },
    };
}]);