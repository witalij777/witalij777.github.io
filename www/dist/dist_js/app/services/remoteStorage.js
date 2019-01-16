visit_plcrc.factory('$remotestorage', ['$window', '$ionicLoading', '$ionicPopup', 'AuthService', function ($window, $ionicLoading, $ionicPopup, AuthService) {
    var CITY_ID = 'K7kfEUTGad';
    var AIRPORT_ID = 'p2N3s9wGGb';
    var LOCATION_ID = 'llz1M6ZdiU';
    var getAddresses = function (onSuccess, onFail) {
        var Address = Parse.Object.extend("Address");
        var query = new Parse.Query(Address);
        query.equalTo("location", {
            "__type": "Pointer",
            "className": "Location",
            "objectId": LOCATION_ID
        });
        return query.find({
            success: onSuccess,
            error: onFail
        });
    };

    var getRooms = function (onSuccess, onFail) {
        var Address = Parse.Object.extend("Address");
        var addresses = new Parse.Query(Address);
        addresses.equalTo("location", {
            "__type": "Pointer",
            "className": "Location",
            "objectId": LOCATION_ID
        });

        var Room = Parse.Object.extend("Room");
        var query = new Parse.Query(Room);

        return query.matchesQuery('address', addresses).find({
            success: onSuccess,
            error: onFail
        });
    };
    var getEvent = function (onSuccess, onFail) {
        var Event = Parse.Object.extend("Event");
        var query = new Parse.Query(Event);
        query.greaterThan('endDate', moment().add(-30, 'days').toDate());
        return query.find({
            success: onSuccess,
            error: onFail
        });
    };

    var getRoomAttribute = function (onSuccess, onFail) {
        var Address = Parse.Object.extend("Address");
        var addresses = new Parse.Query(Address);
        addresses.equalTo("location", {
            "__type": "Pointer",
            "className": "Location",
            "objectId": LOCATION_ID
        });

        var Room = Parse.Object.extend("Room");
        var rooms = new Parse.Query(Room);
        rooms.matchesQuery('address', addresses);

        var RoomAttribute = Parse.Object.extend("RoomAttribute");
        var roomAttrQuery = new Parse.Query(RoomAttribute);
        roomAttrQuery.limit(1000);
        roomAttrQuery.matchesQuery('room', rooms);
        roomAttrQuery.select(['value', 'icon', 'type', 'order', 'room.objectId']);
        roomAttrQuery.include('room.objectId');
        return roomAttrQuery.find({
            success: onSuccess,
            error: onFail
        });
    };
    var getAirportAttribute = function (onSuccess, onFail) {
        var attribute = Parse.Object.extend("AirportAttribute");
        var attributesQuery = new Parse.Query(attribute);
        attributesQuery.equalTo("airport", {
            "__type": "Pointer",
            "className": "Airport",
            "objectId": AIRPORT_ID
        });
        return attributesQuery.find({
            success: onSuccess,
            error: onFail
        });
    };
    var getSession = function (onSuccess, onFail) {
        var Event = Parse.Object.extend("Event");
        var event = new Parse.Query(Event);
        event.greaterThan('endDate', moment().add(-30, 'days').toDate());
        var Session = Parse.Object.extend("Session");
        var sessionQuery = new Parse.Query(Session).limit(999);
        sessionQuery.matchesQuery('event', event);
        return sessionQuery.find({
            success: onSuccess,
            error: onFail
        });
    };
    var getSpot = function (onSuccess, onFail) {
        var Spot = Parse.Object.extend("Spot");
        var spotQuery = new Parse.Query(Spot);
        spotQuery.equalTo("city", {
            "__type": "Pointer",
            "className": "City",
            "objectId": CITY_ID
        });
        return spotQuery.find({
            success: onSuccess,
            error: onFail
        });
    };
    var getSpotAttribute = function (onSuccess, onFail) {
        var SpotAttrib = Parse.Object.extend("SpotAttribute");
        var spotQuery = new Parse.Query(SpotAttrib).limit(999);
        return spotQuery.find({
            success: onSuccess,
            error: onFail
        });
    };
    var getNewerEvents = function (lastLocalModified, onSuccess, onFail) {
        var Event = Parse.Object.extend("Event");
        var query = new Parse.Query(Event);
        if (lastLocalModified.length > 0) {
            query.greaterThan('updatedAt', new Date(lastLocalModified));
        }
        return query.find({
            success: onSuccess,
            error: onFail
        });
    };
    var getNewerContent = function (lastLocalModified, onSuccess, onFail) {
        var Event = Parse.Object.extend("ContentVersion");
        var query = new Parse.Query(Event);
        if (lastLocalModified.length > 0) {
            query.greaterThan('updatedAt', new Date(lastLocalModified));
            return query.find({
                success: onSuccess,
                error: onFail
            });
        } else {
            onSuccess([{}]);
            return true;
        }
    };
    var getWhoIsWho = function (onSuccess, onFail) {
        var People = Parse.Object.extend("People");
        var peopleQuery = new Parse.Query(People);
        peopleQuery.equalTo("location", {
            "__type": "Pointer",
            "className": "Location",
            "objectId": LOCATION_ID
        });
        return peopleQuery.find({
            success: onSuccess,
            error: onFail
        });
    };
    var updateEvents = function (localstorage, onSuccess, confirmWhenFailed) {
        var failed = function () {
            $ionicLoading.hide();
        };
        $ionicLoading.show({
            template: 'New data in Events section detected. <BR> Reading from remote server..'
        });
        var timeout = setTimeout(function () {
            promiseWithTime.resolve();
            $ionicLoading.hide();
        }, 10000)
        var promiseWithTime = Parse.Promise.when([
            getEvent(function (result) {
                localstorage.setObject('Event', result);
            }, failed),
            getSession(function (result) {
                localstorage.setObject('Session', result);
            }, failed)])
            .then(function () {
                localstorage.setObject('LastUpdatedEvents', new Date());
                $ionicLoading.hide();
                clearTimeout(timeout);
                AuthService.updateNoPinEvents();
                onSuccess();
            }, function (error) {
                $ionicLoading.hide();
                if (confirmWhenFailed) {
                    $ionicPopup.show({
                        template: '',
                        title: 'No internet connection',
                        subTitle: 'Data in Events section will be out-of-date. <BR>Do you want to retry?',
                        buttons: [
                            { text: 'Cancel' },
                            {
                                text: '<b>Retry</b>',
                                type: 'button-positive',
                                onTap: function (e) {
                                    readFromParse(localstorage, confirmWhenFailed);
                                }
                            }
                        ]
                    });
                }
            });
    };
    var readFromParse = function (localstorage, confirmWhenFailed) {
        var failed = function () {
            $ionicLoading.hide();
        };
        $ionicLoading.show({
            template: 'Loading data from external server..'
        });
        var timeout = setTimeout(function () {
            promiseWithTime.resolve();
        }, 10000)
        var promiseWithTime = Parse.Promise.when([
            getRooms(function (result) {
                localstorage.setObject('Room', result);
            }, failed),
            getAddresses(function (result) {
                localstorage.setObject('Address', result);
            }, failed),
            getRoomAttribute(function (result) {
                localstorage.setObject('RoomAttribute', result);
            }, failed),
            getEvent(function (result) {
                localstorage.setObject('Event', result);
            }, failed),
            getSession(function (result) {
                localstorage.setObject('Session', result);
            }, failed),
            getSpot(function (result) {
                localstorage.setObject('Spot', result);
            }, failed),
            getSpotAttribute(function (result) {
                localstorage.setObject('SpotAttribute', result);
            }, failed),
            getAirportAttribute(function (result) {
                localstorage.setObject('AirportAttribute', result);
            }, failed),
            getWhoIsWho(function (result) {
                localstorage.setObject('WhoIsWho', result);
            }, failed)])
            .then(function () {
                localstorage.setObject('LastUpdatedContent', new Date());
                clearTimeout(timeout);
                $ionicLoading.hide();
            }, function (error) {
                $ionicLoading.hide();
                if (confirmWhenFailed) {
                    $ionicPopup.show({
                        template: '',
                        title: 'No internet connection',
                        subTitle: 'Data in application can be out-of-date. <BR>Do you want to retry?',
                        buttons: [
                            { text: 'Cancel' },
                            {
                                text: '<b>Retry</b>',
                                type: 'button-positive',
                                onTap: function (e) {
                                    readFromParse(localstorage, confirmWhenFailed);
                                }
                            }
                        ]
                    });
                }
            });
    };
    return {
        init: function (localstorage, failed) {
            console.log("Checking for new content on remonte server");
            getNewerContent(localstorage.getObject('LastUpdatedContent'), function (events) {
                if (events.length > 0) {
                    console.log("New content found. Reading..");
                    readFromParse(localstorage, true);
                } else {
                    console.log("No new content.");
                }
            }, failed);
        },
        updateAll: function (localStorage) {
            readFromParse(localStorage, true);
        },
        updateEvents: function (localstorage, onSuccess, onFailed) {
            if ('LastUpdateChecked' in localStorage) {
                var nextCheckData = new Date(localstorage.getObject('LastUpdateChecked'));
                nextCheckData.setMinutes(nextCheckData.getMinutes() + 5);
                if ((new Date() > nextCheckData) || (!nextCheckData)) {
                    getNewerEvents(localstorage.getObject('LastUpdatedEvents'), function (events) {
                        if (events.length > 0) {
                            updateEvents(localstorage, onSuccess, true);
                        }
                    }, onFailed);
                    localstorage.setObject('LastUpdateChecked', new Date());
                }
            } else {
                updateEvents(localstorage, onSuccess, true);
                localstorage.setObject('LastUpdateChecked', new Date());
            }
        },
        forceUpdateEvents: function (localstorage, onSuccess, onFailed) {
            updateEvents(localstorage, onSuccess, true);
            localstorage.setObject('LastUpdateChecked', new Date());
        },
        saveEvents: function (data, onSuccess, onFail) {
            var Event = Parse.Object.extend("Event");
            var arrayToSave = [];
            data.forEach(function (element) {
                var event = new Event();
                event.set("objectId", element.objectId);
                event.set("startDate", element.startDate);
                event.set("endDate", element.endDate);
                event.set("hideAfter", element.hideAfter);
                event.set("name", element.name);
                event.set("pinCode", element.pinCode);
                event.set("location", element.location);
                arrayToSave.push(event);
            });
            Parse.Object.saveAll(arrayToSave, onSuccess, onFail);
        },
        saveRooms: function (data, onSuccess, onFail) {
            var Room = Parse.Object.extend("Room");
            var arrayToSave = [];
            data.forEach(function (element) {
                var event = new Room();
                event.set("id", element.objectId);
                event.set("name", element.name);
                event.set("floor", element.floor);
                event.set("address", { "__type": "Pointer", "className": "Address", "objectId": element.address.objectId });
                event.set("type", element.type);
                if (element.address.objectId == 'Pv0v5615DU') arrayToSave.push(event);
            });
            //      Parse.Object.saveAll(arrayToSave, onSuccess, onFail);
        },
        saveRoomAttributes: function (data, onSuccess, onFail) {
            var RoomAttrib = Parse.Object.extend("RoomAttribute");
            var arrayToSave = [];
            data.forEach(function (element) {
                var event = new RoomAttrib();
                event.set("id", element.objectId);
                event.set("icon", element.icon);
                event.set("order", element.order);
                event.set("room", { "__type": "Pointer", "className": "Room", "objectId": element.room.objectId });
                event.set("type", element.type);
                event.set("value", element.value);
                if (element.room.address.objectId == 'Pv0v5615DU') arrayToSave.push(event);
            });
        //    Parse.Object.saveAll(arrayToSave, onSuccess, onFail);
        },
        saveSessions: function (data, onSuccess, onFail) {
            var SingleSession = Parse.Object.extend("Session");
            var arrayToSave = [];
            data.forEach(function (element) {
                var session = new SingleSession();
                session.set("objectId", element.objectId);
                if (element.attendee) session.set("attendee", element.attendee);
                if (element.attendee === '') session.set("attendee");
                if ((element.startDate !== null) && (typeof element.startDate !== "undefined") && (element.startDate.iso !== '')) {
                    session.set("startDate", element.startDate);
                } else {
                    session.set("startDate");
                }
                if ((element.endDate !== null) && (typeof element.endDate !== "undefined") && (element.endDate.iso !== '')) {
                    session.set("endDate", element.endDate);
                } else {
                    session.set("endDate");
                }
                session.set("event", { "__type": "Pointer", "className": "Event", "objectId": element.event.objectId });
                session.set("icon", element.icon);
                if (element.name) session.set("name", element.name);
                if (element.name === '') session.set("name");
                if (element.presenter) session.set('presenter', element.presenter);
                if (element.presenter === '') session.set('presenter');
                if (element.room) session.set("room", { "__type": "Pointer", "className": "Room", "objectId": element.room.objectId });
                if (element.spot) session.set("spot", { "__type": "Pointer", "className": "Spot", "objectId": element.spot.objectId });
                if (element.text) session.set("text", element.text);
                if (element.text === '') session.set("text");
                session.set("type", element.type);
                arrayToSave.push(session);
            });
            Parse.Object.saveAll(arrayToSave, onSuccess, onFail);
        },
        removeSession: function (sessionId, onSuccess, onFail) {
            var Session = Parse.Object.extend("Session");
            var query = new Parse.Query(Session);
            query.get(sessionId, {
                success: function (result) {
                    result.destroy({
                        success: onSuccess,
                        error: onFail
                    });
                },
                error: onFail
            });
        },
        removeEvent: function (eventId, onSuccess, onFail) {
            var Event = Parse.Object.extend("Event");
            var query = new Parse.Query(Event);
            query.get(eventId, {
                success: function (result) {
                    result.destroy({
                        success: onSuccess,
                        error: onFail
                    });
                },
                error: onFail
            });
        },
        getObject: function (objectName, onSuccess, onFail) {
            var object = Parse.Object.extend(objectName);
            var query = new Parse.Query(object);
            query.find({
                success: onSuccess,
                error: onFail
            });
        },
        getRooms: function () {
            return getSession();
        }
    };
}]);