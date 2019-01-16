// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var visit_plcrc = angular.module('visit_plcrc', ['ionic', 'visit_plcrc.controllers', 'visit_plcrc.filters', 'visit_plcrc.directives', 'visit_plcrc.constants', 'ngMockE2E', 'ngCordova', 'ngAnimate', 'ui.bootstrap.datetimepicker', 'templates'])
    .run(['$ionicPlatform', '$remotestorage', '$localstorage', '$ionicPopup', 'LOCAL_STORAGE_CONTANTENT', function ($ionicPlatform, $remotestorage, $localstorage, $ionicPopup, LOCAL_STORAGE_CONTANTENT) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            //if (window.cordova && window.cordova.plugins.Keyboard) {
            //    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
            //    cordova.plugins.Keyboard.disableScroll(false);
            //}
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                // StatusBar.styleDefault();
            }
            cordova.plugins.certificates.trustUnsecureCerts(true);
            Parse.serverURL = 'https://parsejs7710.cloudapp.net/parse';
            Parse.initialize("7mSrdHYjCclPRvdzA39a4M8XFO7pINZMfz9xMGlU");
          //  Parse.serverURL = 'https://visitabbprod28.azurewebsites.net/parse';
          //  Parse.initialize("3839cb89-5604-4546-8fe0-0c89b49d1156", null, "d64dcdc5-9887-4500-9028-818bd7932bab");

            var updateContent = function () {
                $remotestorage.init($localstorage, function (result) {
                    $scope.fail = result;
                    window.alert(result);
                });
            };
            if (window.Connection) {
                if (navigator.connection.type == Connection.NONE) {
                    $ionicPopup.alert({
                        title: "Internet Disconnected",
                        content: "Unable to verify if content of application is valid."
                    })
                        .then(function (result) {
                        });
                } else {
                    updateContent();
                }
            }
            if (ionic.Platform.platform() == 'win32') {
                updateContent();
            }
            

            if (!localStorage.getItem('LastUpdatedContent')) {
                var localContent = LOCAL_STORAGE_CONTANTENT;
                for (var element in localContent) {
                    $localstorage.setObject(element,localContent[element]);
                }
            }

        });
    }])

    .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', '$locationProvider', 'USER_ROLES', function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $locationProvider, USER_ROLES) {
        $ionicConfigProvider.scrolling.jsScrolling(false);
        //    $ionicConfigProvider.views.transition('none');
        $stateProvider
            .state('login', {
                url: '/login',
                cache: false,
                params: {
                    next: null,
                    nextParams: null
                },
                templateUrl: 'login.html',
                controller: 'LoginCtrl'
            })
            .state('install', {
                url: '/install',
                templateUrl: 'install/install.html',
                controller: 'InstallCtrl'
            })
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'menu.html',
                controller: 'AppCtrl'
            })
            .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'settings/settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            })

            .state('app.main_menu', {
                url: '/main_menu',
                views: {
                    'menuContent': {
                        templateUrl: 'main_menu.html',
                        controller: 'MainMenuCtrl'
                    }
                }
            })
            .state('app.city', {
                url: '/city',
                views: {
                    'menuContent': {
                        templateUrl: 'city/city_menu.html',
                        controller: 'CityMenuCtrl'
                    }
                }
            })
            .state('app.city/city', {
                url: '/city/city',
                views: {
                    'menuContent': {
                        templateUrl: 'city/city.html',
                        controller: 'CityCtrl'
                    }
                }
            })
            .state('app.city/airport', {
                url: '/city/airport',
                views: {
                    'menuContent': {
                        templateUrl: 'city/airport.html',
                        controller: 'AirportCtrl'
                    }
                }
            })
            .state('app.city/spots', {
                url: '/city/spots?type',
                views: {
                    'menuContent': {
                        templateUrl: 'city/spots.html',
                        controller: 'SpotsCtrl'
                    }
                }
            })
            .state('app.city/spot', {
                url: '/city/spot?spotId',
                views: {
                    'menuContent': {
                        templateUrl: 'city/spot.html',
                        controller: 'SpotCtrl'
                    }
                }
            })
            .state('app.plcrc', {
                url: '/plcrc',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/plcrc.html',
                        controller: 'PlcrcCtrl'
                    }
                }
            })
            .state('app.plcrc/about', {
                url: '/plcrc/about',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/about.html',
                        controller: 'AboutCtrl'
                    }
                }
            })
            .state('app.plcrc/location', {
                url: '/plcrc/location?spotId&position',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/location.html',
                        controller: 'LocationCtrl'
                    }
                }
            })
            .state('app.plcrc/contact', {
                url: '/plcrc/contact',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/contact.html',
                        controller: 'ContactCtrl'
                    }
                }
            })
            .state('app.plcrc/whoiswho', {
                url: '/plcrc/whoiswho',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/whoiswho.html',
                        controller: 'WhoIsWhoCtrl'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.abb_member]
                }
            })
            .state('app.plcrc/evacuation', {
                url: '/plcrc/evacuation?roomId',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/evacuation.html',
                        controller: 'EvacuationCtrl'
                    }
                }
            })
            .state('app.plcrc/guidelines', {
                url: '/plcrc/guidelines',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/guidelines.html',
                        controller: 'GuidelinesCtrl'
                    }
                }
            })
            .state('app.plcrc/plan', {
                url: '/plcrc/plan?id',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/plan.html',
                        controller: 'PlanCtrl'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.abb_member]
                }
            })
            .state('app.plcrc/rooms', {
                url: '/plcrc/rooms',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/rooms.html',
                        controller: 'RoomsCtrl'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.abb_member]
                }
            })
            .state('app.plcrc/room', {
                url: '/plcrc/room?id',
                views: {
                    'menuContent': {
                        templateUrl: 'plcrc/room.html',
                        controller: 'RoomCtrl'
                    }
                }
            })
            .state('app.navigate', {
                url: '/navigate',
                views: {
                    'menuContent': {
                        templateUrl: 'navigate/navigate.html',
                        controller: 'NavigateCtrl'
                    }
                }
            })
            .state('app.events', {
                url: '/events',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'events/events.html',
                        controller: 'EventsCtrl'
                    }
                }
            })
            .state('app.eventsEdit', {
                url: '/eventsEdit',
                cache: false,
                views: {
                    'menuContent': {
                        templateUrl: 'events/eventsEdit.html',
                        controller: 'EventsEditCtrl'
                    }
                }
            })
            .state('app.events/event', {
                url: '/events/event?id',
                views: {
                    'menuContent': {
                        templateUrl: 'events/event.html',
                        controller: 'EventCtrl'
                    }
                },
                data: {
                    authorizedRoles: [USER_ROLES.abb_member, USER_ROLES.agenda_viewer]
                }
            })
            .state('app.events/eventEdit', {
                url: '/events/eventEdit?id',
                views: {
                    'menuContent': {
                        templateUrl: 'events/eventEdit.html',
                        controller: 'EventEditCtrl'
                    }
                }
            })
            .state('app.events/session', {
                url: '/events/session?id',
                views: {
                    'menuContent': {
                        templateUrl: 'events/session.html',
                        controller: 'SessionCtrl'
                    }
                }
            })
            .state('app.events/sessionEdit', {
                url: '/events/sessionEdit?id',
                views: {
                    'menuContent': {
                        templateUrl: 'events/sessionEdit.html',
                        controller: 'SessionEditCtrl'
                    }
                }
            })
            .state('app.ble', {
                url: '/ble',
                views: {
                    'menuContent': {
                        templateUrl: 'ble/ble.html',
                        controller: 'BleCtrl'
                    }
                }
            })
            .state('app.abb', {
                url: '/abb',
                views: {
                    'menuContent': {
                        templateUrl: 'main_menu.html',
                        controller: 'AbbCtrl'
                    }
                }
            })
            .state('app.abb/plabb', {
                url: '/abb/plabb',
                views: {
                    'menuContent': {
                        templateUrl: 'plabb/plabb.html',
                        controller: 'PlabbCtrl'
                    }
                }
            })
            .state('app.abb/dna', {
                url: '/abb/dna',
                views: {
                    'menuContent': {
                        templateUrl: 'plabb/dna.html',
                        controller: 'DnaCtrl'
                    }
                }
            })
            .state('app.abb/technology', {
                url: '/abb/technology',
                views: {
                    'menuContent': {
                        templateUrl: 'plabb/technology.html',
                        controller: 'TechnologyCtrl'
                    }
                }
            })
            .state('app.abb/history', {
                url: '/abb/history',
                views: {
                    'menuContent': {
                        templateUrl: 'plabb/history.html',
                        controller: 'HistoryCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/main_menu');

    }])

    .run(['$httpBackend', function ($httpBackend) {
        $httpBackend.whenGET('http://localhost:8100/valid')
            .respond({ message: 'This is my valid response!' });
        $httpBackend.whenGET('http://localhost:8100/notauthenticated')
            .respond(401, { message: "Not Authenticated" });
        $httpBackend.whenGET('http://localhost:8100/notauthorized')
            .respond(403, { message: "Not Authorized" });

        $httpBackend.whenGET(/templates\/\w+.*/).passThrough();
        $httpBackend.whenGET(/img\/\w+.*/).passThrough();
    }])

    .run(['$rootScope', '$state', 'AuthService', 'AUTH_EVENTS', function ($rootScope, $state, AuthService, AUTH_EVENTS) {
        $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {

            if ('data' in next && 'authorizedRoles' in next.data) {
                var authorizedRoles = next.data.authorizedRoles;
                if (!AuthService.isAuthorized(authorizedRoles, next, nextParams, fromState)) {
                    event.preventDefault();
                    $state.go('login', { 'next': next, 'nextParams': nextParams }, { reload: false });
                    //$state.go($state.current, {'next':next}, { reload: true });
                    //$rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                }
            }
        });
    }])

    .animation('.slide-toggle', ['$animateCss', function ($animateCss) {
        var lastId = 0;
        var _cache = {};

        function getId(el) {
            var id = el[0].getAttribute("data-slide-toggle");
            if (!id) {
                id = ++lastId;
                el[0].setAttribute("data-slide-toggle", id);
            }
            return id;
        }

        function getState(id) {
            var state = _cache[id];
            if (!state) {
                state = {};
                _cache[id] = state;
            }
            return state;
        }

        function generateRunner(closing, state, animator, element, doneFn) {
            return function () {
                state.animating = true;
                state.animator = animator;
                state.doneFn = doneFn;
                animator.start().finally(function () {
                    if (closing && state.doneFn === doneFn) {
                        element[0].style.height = '';
                    }
                    state.animating = false;
                    state.animator = undefined;
                    state.doneFn();
                });
            };
        }

        return {
            addClass: function (element, className, doneFn) {
                if (className == 'ng-hide') {
                    var state = getState(getId(element));
                    var height = (state.animating && state.height) ?
                        state.height : element[0].offsetHeight;

                    var animator = $animateCss(element, {
                        from: {
                            height: height + 'px',
                            opacity: 1
                        },
                        to: {
                            height: '0px',
                            opacity: 0
                        }
                    });
                    if (animator) {
                        if (state.animating) {
                            state.doneFn =
                                generateRunner(true,
                                    state,
                                    animator,
                                    element,
                                    doneFn);
                            return state.animator.end();
                        } else {
                            state.height = height;
                            return generateRunner(true,
                                state,
                                animator,
                                element,
                                doneFn)();
                        }
                    }
                }
                doneFn();
            },
            removeClass: function (element, className, doneFn) {
                if (className == 'ng-hide') {
                    var state = getState(getId(element));
                    var height = (state.animating && state.height) ?
                        state.height : element[0].offsetHeight;

                    var animator = $animateCss(element, {
                        from: {
                            height: '0px',
                            opacity: 0
                        },
                        to: {
                            height: height + 'px',
                            opacity: 1
                        }
                    });

                    if (animator) {
                        if (state.animating) {
                            state.doneFn = generateRunner(false,
                                state,
                                animator,
                                element,
                                doneFn);
                            return state.animator.end();
                        } else {
                            state.height = height;
                            return generateRunner(false,
                                state,
                                animator,
                                element,
                                doneFn)();
                        }
                    }
                }
                doneFn();
            }
        };
    }]);