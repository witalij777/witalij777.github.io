visit_plcrc
.service('AuthService', ['$q', '$http', '$localstorage', 'USER_ROLES', function ($q, $http, $localstorage, USER_ROLES) {
    var LOCAL_TOKEN_KEY = 'LOCAL_TOKEN_KEY';
    var username = '';
    var role = '';
    var authToken;
    var allowed_events = [];
    var allowed_pins = ['2222'];

    function loadUserCredentials() {
        var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
        if (token) {
           useCredentials(token);
        }
    }

    function storeUserCredentials(token) {
        window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
        useCredentials(token);
    }

    function isAllowedEvent(eventId) {
        return (allowed_events.indexOf(eventId) !== -1);
    }

    function updateNoPinEvents() {
        var events = $localstorage.getEvents();
        events.forEach(function (event) {
            if (event.pinCode === "") {
                allowed_events.push(event.objectId);
                role = USER_ROLES.agenda_viewer;
            }
        });
        $http.defaults.headers.common['X-Auth-Token'] = JSON.stringify({ 'user': '', 'password': '', 'pin': '' });
    }

    function useCredentials(token) {
        var login = JSON.parse(token);

        if (login.pin == '2222') {
            role = USER_ROLES.abb_member;
            allowed_events = [];
        }
        var events = $localstorage.getEvents();
        events.forEach(function (event) {
            if (allowed_pins.indexOf(event.pinCode) < 0) {
                allowed_pins.push(event.pinCode);
            }
            if (login.pin == event.pinCode) {
                role = USER_ROLES.abb_member;
                if (allowed_events.push(event.objectId) < 0) {
                    allowed_events.push(event.objectId);
                }                
            }
            if (event.pinCode === "") {
                allowed_events.push(event.objectId);
            }
        });

        // Set the token as header for your requests!
        $http.defaults.headers.common['X-Auth-Token'] = token;
    }

    function destroyUserCredentials() {
        authToken = undefined;
        username = '';
        $http.defaults.headers.common['X-Auth-Token'] = undefined;
        window.localStorage.removeItem(LOCAL_TOKEN_KEY);
    }

    var login = function (data) {
        return $q(function (resolve, reject) {
            var token = JSON.stringify({ 'user': data.username, 'password': data.password, 'pin': data.pin });
            useCredentials(token);
            if (allowed_pins.indexOf(data.pin) !== -1) {
                storeUserCredentials(token);
                resolve('Login success.');
            } else {
                reject('Login Failed.');
                loadUserCredentials();
            }
        });
    };

    var logout = function () {
        destroyUserCredentials();
    };

    var isAuthorized = function (authorizedRoles, next, nextParams, fromState) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        if (authorizedRoles.indexOf(role) !== -1) {
            if (next.name == "app.events/event") {
                if (allowed_events.indexOf(nextParams.id) !==-1) {
                    return true;
                } else return false;                    
            } else return true;
        }
        return false;
    };

    var isPlcrcMember = function () {
        if ((role == USER_ROLES.abb_member)) return true;
        else return false;
    };

    loadUserCredentials();

    return {
        login: login,
        logout: logout,
        isAuthorized: isAuthorized,
        isPlcrcMember: isPlcrcMember,
        username: function () { return username; },
        role: function () { return role; },
        isAllowedEvent: isAllowedEvent,
        updateNoPinEvents: updateNoPinEvents
    };
}])


.factory('AuthInterceptor', ['$rootScope', '$q', 'AUTH_EVENTS', function ($rootScope, $q, AUTH_EVENTS) {
    return {
        responseError: function (response) {
            $rootScope.$broadcast({
                401: AUTH_EVENTS.notAuthenticated,
                403: AUTH_EVENTS.notAuthorized
            }[response.status], response);
            return $q.reject(response);
        }
    };
}])

.config(['$httpProvider',function ($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor');
}]);


