angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("login.html","<ion-view view-title=\"Sign-In\" name=\"login-view\">\r\n    <div class=\"bar bar-header bar-light\">\r\n        <h1 class=\"title\">Login required</h1>\r\n    </div>\r\n    <ion-tabs class=\"tabs-positive tabs-top tabs-icon-top\">\r\n        <ion-tab title=\"PIN login\" icon-on=\"ion-ios-keypad\" icon-off=\"ion-ios-keypad-outline\">\r\n            <ion-nav-view name=\"tab-2\">\r\n                <ion-content padding=\"true\" has-header=\"false\">       \r\n                    <div class=\"list list-inset\">\r\n                        <label class=\"item item-input\">\r\n                            <input placeholder=\"PIN number\" type=\"tel\" maxlength=\"4\" ng-model=\"data.pin\">\r\n                        </label>\r\n                    </div>\r\n                    <button class=\"button button-block button-positive\" ng-click=\"login(data)\">Login</button>\r\n                </ion-content>\r\n            </ion-nav-view>\r\n        </ion-tab>\r\n\r\n        <!--<ion-tab title=\"ABB login\" icon-on=\"ion-ios-locked\" icon-off=\"ion-ios-locked-outline\">\r\n            <ion-nav-view name=\"tab-2\">\r\n                <ion-content padding=\"true\" has-header=\"false\">\r\n                    <div class=\"list list-inset\">\r\n                        Not working yet !!!\r\n                        <label class=\"item item-input\">\r\n                            <input type=\"text\" placeholder=\"ABB email address\" ng-model=\"data.username\">\r\n                        </label>\r\n                        <label class=\"item item-input\">\r\n                            <input type=\"password\" placeholder=\"Password\" ng-model=\"data.password\">\r\n                        </label>\r\n                    </div>\r\n                    <button class=\"button button-block button-positive\" ng-click=\"login(data)\" disabled>Login</button>\r\n                </ion-content>\r\n            </ion-nav-view>\r\n        </ion-tab>-->\r\n\r\n    </ion-tabs>  \r\n</ion-view>\r\n");
$templateCache.put("main_menu.html","<ion-view view-title=\"{{::view_title}}\">\r\n    <ion-content>\r\n        <div class=\"row responsive-sm\" ng-repeat=\"item in ::menu_items\" ng-if=\"$index % 2 == 0\">\r\n            <div class=\"col\">\r\n                <div ng-click=\"goToState(menu_items[$index].state)\" class=\"item item-body\">\r\n                    <img class=\"full-image\" ng-src=\"{{::menu_items[$index].img}}\">\r\n                    <p>{{::menu_items[$index].title}}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div ng-if=\"$index<menu_items.length-1\" ng-click=\"goToState(menu_items[$index+1].state)\" class=\"item item-body\">\r\n                    <img class=\"full-image\" ng-src=\"{{::menu_items[$index+1].img}}\">\r\n                    <p>{{::menu_items[$index+1].title}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("menu.html","<ion-side-menus enable-menu-with-back-views=\"false\">\r\n  <ion-side-menu-content>\r\n    <ion-nav-bar class=\"bar-stable\">\r\n      <ion-nav-back-button>\r\n      </ion-nav-back-button>\r\n\r\n      <ion-nav-buttons side=\"left\">\r\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\r\n        </button>\r\n      </ion-nav-buttons>\r\n    </ion-nav-bar>\r\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\r\n  </ion-side-menu-content>\r\n\r\n  <ion-side-menu side=\"left\" width=\"200\">\r\n    <ion-header-bar class=\"bar-stable\">\r\n      <h1 class=\"title\">Menu</h1>\r\n    </ion-header-bar>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item ng-repeat=\"item in ::side_menu_items\" class=\"{{::item.icon}} item\" ng-click=\"goToState(item.state)\" menu-close>\r\n          {{::item.title}}\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-side-menu>\r\n</ion-side-menus>\r\n");
$templateCache.put("ble/ble.html","<ion-view view-title=\"Near me\">\r\n    <ion-content>\r\n        <div class=\"list\">\r\n            <a class=\"item item-avatar\" ng-if=\"device.room\" ng-repeat=\"device in devices\" href=\"#/app/plcrc/room?id={{device.room.objectId}}\">\r\n                <img src=\"./img/rooms/miniatures/{{device.room.name}}.jpg\">\r\n                <h2>{{device.room.name}}</h2>\r\n                <p>{{device.room.floorName}}</p>\r\n                <span class=\"badge ion-arrow-right-c\" />\r\n            </a>\r\n        </div>\r\n        <ion-list>\r\n            <ion-item ng-repeat=\"device in devices\" type=\"item-text-wrap\" href=\"#/devices/{{device.name}}\">\r\n                <h2>Name: {{device.name}}</h2>\r\n                <p>ID: {{device.id}}</p>\r\n                <p>RSSI: {{device.rssi}}</p>\r\n                <p>Last seen: {{device.lastSeen | date : \'HH:mm:ss\'}}</p>\r\n            </ion-item>\r\n        </ion-list>\r\n        <button class=\"button button-stable button-block\" ng-click=\"scanDevices()\">Refresh List</button>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("city/airport.html","<ion-view view-title=\"Airport Balice\">\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\r\n                    <ion-slide ng-repeat=\"i in [1,2,3]\">\r\n                        <img class=\"full-image\" ng-src=\"./img/city/airport/balice_{{::i}}.jpg\">\r\n                    </ion-slide>\r\n                </ion-slide-box>\r\n            </ion-item>\r\n            <ion-item class=\"item\" ng-repeat=\"attribute in ::airportAttributes|orderBy:\'order\'\" browse-to=\"{{makeLink(attribute.icon) ? attribute.value:null}}\">\r\n                <div class=\"icon-city-{{::attribute.icon}}\">\r\n                    {{::attribute.title}}\r\n                    <span ng-if=\"newLine(attribute.icon)\">:<br />\r\n                        <b>{{::attribute.value}}</b>\r\n                    </span>\r\n                    <span ng-if=\"showValue(attribute.icon)\" class=\"badge\">{{::attribute.value}}</span>\r\n                    <span ng-if=\"makeLink(attribute.icon)\" class=\"badge ion-arrow-right-c\" />\r\n                </div>\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("city/city.html","<ion-view view-title=\"About Kraków\">\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-slide-box on-slide-changed=\"slideHasChanged($index)\">\r\n                    <ion-slide ng-repeat=\"i in [1,2,3]\">\r\n                        <img class=\"full-image\" ng-src=\"./img/city/krakow_{{i}}.jpg\">\r\n                    </ion-slide>\r\n                </ion-slide-box>\r\n            </ion-item>\r\n            <ion-item class=\"item\">\r\n                <h2>\r\n                    Kraków (also Cracow, or Krakow), is the second largest and one of the oldest cities in Poland. Situated on the Vistula River in the Lesser Poland region, the city dates back to the 7th century. Kraków has traditionally been one of the leading centres of Polish academic, cultural, and artistic life and is one of Poland\'s most important economic hubs. Krakow is also famous for its myriad restaurants and nightspots.\r\n                </h2>\r\n            </ion-item>\r\n            <ion-item class=\"icon-city-www\">\r\n                <a browse-to=\"http://www.krakow.pl\">\r\n                    Krakow official web page\r\n                    <span class=\"badge ion-arrow-right-c\" />\r\n                </a>\r\n            </ion-item>\r\n            <ion-item class=\"icon-city-founded\">\r\n                Founded\r\n                <span class=\"badge\">7th century</span>\r\n            </ion-item>\r\n            <ion-item class=\"icon-city-university\">\r\n                Universities\r\n                <span class=\"badge\">23</span>\r\n            </ion-item>\r\n            <ion-item class=\"icon-city-population\">\r\n                Population\r\n                <span class=\"badge\">760 000</span>\r\n            </ion-item>\r\n            <ion-item class=\"icon-city-capital\">\r\n                Former capital of Poland\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("city/city_menu.html","<ion-view view-title=\"City\">\r\n    <ion-content>\r\n        <div class=\"row responsive-sm\">\r\n            <div class=\"col\">\r\n                <div ng-click=\"goToCity()\" class=\"item item-body\">\r\n                    <img class=\"full-image\" src=\"./img/city/krakow_3.jpg\">\r\n                    <p>About Kraków</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div ng-click=\"goToAirport()\" class=\"item item-body\">\r\n                    <img class=\"full-image\" src=\"./img/city/airport/balice_3.jpg\">\r\n                    <p>Airport Balice</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row responsive-sm\">\r\n            <div class=\"col\">\r\n                <div ng-click=\"goToSpot(\'restaurant\')\" class=\"item item-body\">\r\n                    <img class=\"full-image\" src=\"./img/city/restaurant/default.jpg\">\r\n                    <p>Restaurants</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div ng-click=\"goToSpot(\'sight\')\" class=\"item item-body\">\r\n                    <img class=\"full-image\" src=\"./img/city/sight/default.jpg\">\r\n                    <p>Sightseeing</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row responsive-sm\">\r\n            <div class=\"col\">\r\n                <div ng-click=\"goToSpot(\'hotel\')\" class=\"item item-body\">\r\n                    <img class=\"full-image\" src=\"./img/city/hotel/default.jpg\">\r\n                    <p>Hotels</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"col\">\r\n                <div ng-click=\"goToSpot(\'shopping\')\" class=\"item item-body\">\r\n                    <img class=\"full-image\" src=\"./img/city/shopping/default.jpg\">\r\n                    <p>Shopping</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</ion-content>\r\n</ion-view>\r\n");
$templateCache.put("city/spot.html","<ion-view view-title=\"{{::spot.name}}\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-navigate\" ng-if=\"isMobileDevice()\" ng-click=\"getDirections()\">Navigate</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <ion-item>\r\n            <img class=\"full-image\" fallback-src=\"./img/city/{{::spot.type}}/default.jpg\" ng-src=\"{{::\'./img/city/\'+spot.type+\'/\'+(spot.objectId)+\'.jpg\'}}\">\r\n        </ion-item>\r\n\r\n        <ion-item class=\"icon-city-spot\">\r\n            {{::spot.info}}\r\n        </ion-item>\r\n\r\n        <ion-item href=\"#/app/plcrc/location?spotId={{::spot.objectId}}\">\r\n            <div class=\"icon-plcrc-location\">\r\n                Location\r\n                <span class=\"item-note\">{{::spot.address}}</span>\r\n            </div>\r\n        </ion-item>\r\n\r\n        <ion-item ng-repeat=\"spotAttribute in ::spotAttributes | orderBy: order\" browse-to=\"{{spotAttribute.icon|linkType}}{{makeLink(spotAttribute.type) ? spotAttribute.value:null}}\">\r\n            <div ng-class=\"\'icon-\'+spotAttribute.icon\" >\r\n                <span ng-bind-html=\"::spotAttribute.title|nolinedivider\"></span>\r\n                <span ng-if=\"::spotAttribute.icon==\'pedestrian\'\" class=\"item-note\">{{::spotAttribute.value|distanceMeters}}</span>\r\n                <span ng-if=\"::showValue(spotAttribute.type)\" class=\"item-note\" ng-bind-html=\"::spotAttribute.value|linedivider\"></span>\r\n                <span ng-if=\"::spotAttribute.icon==\'money\'\" class=\"item-note\">{{::spotAttribute.value|money}}</span>\r\n                <span ng-if=\"makeLink(spotAttribute.type)\" class=\"badge ion-arrow-right-c\" />\r\n            </div>\r\n        </ion-item>\r\n\r\n\r\n\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("city/spots.html","<ion-view title=\"{{spotType|spotType}}\">\r\n    <ion-content>\r\n        <div class=\"list\">\r\n            <a class=\"item item-thumbnail-left\" ng-repeat=\"spot in ::spots|filter:{ type: spotType }|orderBy:\'order\'\" href=\"#/app/city/spot?spotId={{spot.objectId}}\">\r\n                <img fallback-src=\"./img/city/{{::spotType}}/mini.jpg\" ng-src=\"{{\'./img/city/\'+spotType+\'/\'+(spot.objectId)+\'_mini.jpg\'}}\">\r\n                <h2>{{::spot.name}}</h2>\r\n                <p>{{::spot.distance|distance}}</p>\r\n                <span class=\"badge ion-arrow-right-c\" />\r\n            </a>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>");
$templateCache.put("install/install.html","<ion-view view-title=\"Install\">\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <img class=\"full-image\" ng-src=\"./img/plcrc_front.jpg\">\r\n            </ion-item>\r\n            <div class=\"row responsive-sm\">\r\n                <div class=\"col\"  ng-repeat=\"item in ::run_options\">\r\n                    <div ng-click=\"trigger_action($index)\" class=\"item item-body text-center\">\r\n                        <div class=\"button button-icon icon {{::run_options[$index].icon}}\"></div>\r\n                        <div class=\"\">{{::run_options[$index].title}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("events/event.html","<script type=\"text/ng-template\" id=\"search.html\">\r\n    <ion-popover-view style=\"height:70px;width:250px\">\r\n        <ion-content>\r\n            <div class=\"list\">\r\n                <div class=\"item item-input-inset\">\r\n                    <i class=\"icon ion-ios-search placeholder-icon\"></i>\r\n                    <input autofocus id=\"filterTextField\" type=\"text\" placeholder=\"Find in events\" ng-model=\"filter.text\">\r\n                    <button class=\"button button-clear ion-backspace-outline\" ng-click=\"filter.text=\'\'\"></button>\r\n                </div>\r\n            </div>\r\n        </ion-content>\r\n    </ion-popover-view>\r\n</script>\r\n<ion-view ng-init=\"filterText=\'\'\" view-title=\"{{::event.name}}\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-edit\" ng-if=\"isAgendaEditEnabled()\" href=\"#/app/events/eventEdit?id={{::event.objectId}}\">Edit</a>\r\n        <a class=\"button ion-funnel\" ng-click=\"popover.show($event)\">\r\n            <i>Filter</i>\r\n            <B>{{filter.text}}</B>\r\n        </a>\r\n    </ion-nav-buttons>\r\n\r\n    <ion-content>\r\n\r\n        <div class=\"list\">\r\n            <div ng-repeat=\"session in sessions | filter:filter.text\">\r\n                <div ng-if=\"newDay($index)\" class=\"item item-divider\">\r\n                    {{::session.startDate.iso|date:\'EEEE, MMMM d, y\':\'-0200\'}}\r\n                </div>\r\n                <div ng-if=\"::session.type==\'headline\'\" class=\"button button-full button-clear button-positive\">\r\n                    {{::session.name}}\r\n                </div>\r\n                <a ng-if=\"::session.type!=\'headline\'\" class=\"item item-icon-left item-icon-right\" href=\"{{getLink(session)}}\">\r\n                    <i class=\"icon icon-{{::session.icon}}\"></i>\r\n                    <h2>{{::session.name}}</h2>\r\n                    <p>\r\n                        {{::session.startDate.iso|date:\"HH:mm\":\'GMT\' }}\r\n                        <i ng-if=\"session.startDate.iso&&session.endDate.iso\">-</i>\r\n                        {{::session.endDate.iso|date:\"HH:mm\":\'GMT\' }}\r\n                    </p>\r\n                    <div class=\"icon\">\r\n                        <p>\r\n                            <ion-spinner ng-if=\"isOngoing(session)\" class=\"spinner-balanced\" icon=\"dots\"></ion-spinner>\r\n                            <br />\r\n                            <i ng-if=\"session.roomName\">{{::session.roomName}}</i>\r\n                            <i ng-if=\"session.spotName\">{{::session.spotName}}</i>\r\n                        </p>\r\n                    </div>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n`");
$templateCache.put("events/eventEdit.html","<script id=\"icon_picker.html\" type=\"text/ng-template\">\r\n    <ion-list>\r\n        <ion-radio ng-repeat=\"icon in ::icons\" ng-click=\"selectIcon(icon.icon)\">\r\n            <div class=\"item-icon-left\">\r\n                <i class=\"icon icon-{{::icon.icon}}\"></i>\r\n                <h2>{{::icon.name}}</h2>\r\n            </div>\r\n        </ion-radio>\r\n    </ion-list>\r\n</script>\r\n\r\n<script id=\"type_picker.html\" type=\"text/ng-template\">\r\n    <ion-list>\r\n        <ion-radio ng-repeat=\"icon in ::sessionTypes\" ng-click=\"selectIcon(icon.icon)\">\r\n            <div class=\"item-icon-left\">\r\n                <i class=\"icon icon-{{::icon.icon}}\"></i>\r\n                <h2>{{::icon.name}}</h2>\r\n            </div>\r\n        </ion-radio>\r\n    </ion-list>\r\n</script>\r\n\r\n<script id=\"room_picker.html\" type=\"text/ng-template\">\r\n  <div class=\"list\">\r\n\r\n     <div class=\"tabs item\">\r\n        <a class=\"tab-item active\" ng-click=\"roomPickerType = \'meeting\'\" >\r\n            <i class=\"icon-plcrc-meeting\"></i>\r\n            Rooms\r\n        </a>\r\n        <a class=\"tab-item\" href=\"#\" ng-click=\"roomPickerType = \'restaurant\'\">\r\n            <i class=\"icon-navigate-restaurant\"></i>\r\n            Restaurants\r\n        </a>\r\n      </div>\r\n\r\n      <a class=\"item item-avatar\" ng-repeat=\"room in ::rooms| orderBy:\'floor\'\" ng-click=\"selectRoom(room)\" ng-if=\"roomPickerType == \'meeting\'\">\r\n        <img src=\"./img/rooms/miniatures/{{::room.name}}.jpg\">\r\n        <h2>{{::room.name}}</h2>\r\n        <p>{{::room.floorName}}</p>\r\n      </a>\r\n\r\n      <a class=\"item item-avatar\" ng-repeat=\"restaurant in ::restaurants| orderBy:\'order\'\" ng-click=\"selectSpot(restaurant)\" ng-if=\"roomPickerType == \'restaurant\'\">\r\n          <img src=\"./img/city/restaurant/{{::restaurant.objectId}}_mini.jpg\">\r\n          <h2>{{::restaurant.name}}</h2>\r\n          <p>{{::restaurant.address}}</p>\r\n      </a>\r\n    </div>\r\n</script>\r\n\r\n<ion-view ng-init=\"filterText=\'\'\" view-title=\"{{event.name}}\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button icon-save\" ng-click=\"save()\">Save</a>\r\n    </ion-nav-buttons>\r\n\r\n    <ion-content>\r\n        <div class=\"row responsive-sm\">\r\n            <span class=\"button button-dark icon-left ion-plus-circled\" ng-click=\"addSession()\">Add new session</span>\r\n        </div>\r\n        <div class=\"list\">\r\n            <div ng-repeat=\"session in sessions\">\r\n                <div ng-if=\"newDay($index)\" class=\"item item-divider\">\r\n                    {{session.startDate.iso|date:\'EEEE, MMMM d, y\'}}\r\n                </div>\r\n                <a class=\"item item-icon-left item-icon-right\">\r\n                    <i class=\"icon icon-{{session.icon}}\" ng-click=\"openIconPicker(session)\"></i>\r\n                    <input type=\"text\" ng-model=\"session.name\" select-on-click/>\r\n                    <p>                        \r\n                        <span class=\"button button-dark\" ng-click=\"openDatePicker(session.startDate)\">{{session.startDate.iso|date:\"HH:mm\":\'GMT\' }}</span>\r\n                        <span class=\"button button-dark\" ng-click=\"openDatePicker(session.endDate)\">{{session.endDate.iso|date:\"HH:mm\":\'GMT\' }}</span>\r\n                        <span class=\"button icon-right ion-trash-b button-clear\" ng-click=\"removeSession(session.objectId)\"></span>\r\n                    </p>\r\n                    <div class=\"icon\">\r\n                        <i class=\"icon-{{session.type}}\" style=\"margin-right:10px\" ng-click=\"openMeetingTypePicker(session)\"></i>\r\n                        <p class=\"button button-dark\" ng-click=\"openRoomPicker(session)\">{{session.roomName}}{{session.spotName}}</p><br />\r\n                    \r\n                    </div>\r\n\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n`");
$templateCache.put("events/events.html","<ion-view view-title=\"Events\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-edit\" ng-if=\"isAgendaEditEnabled()\" ng-click=\"goToState(\'app.eventsEdit\')\">Edit</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <div class=\"row responsive-sm\" ng-repeat=\"event in filteredEvents\" ng-if=\"$index % 2 == 0\">\r\n                <div class=\"col\">\r\n                    <a href=\"#/app/events/event?id={{filteredEvents[$index].objectId}}\" class=\"item item-body\">\r\n                        <img class=\"full-image\" fallback-src=\"./img/events/event.png\" ng-src=\"{{\'./img/events/\'+(filteredEvents[$index].objectId)+\'.png\'}}\">\r\n                        <p>{{filteredEvents[$index].name}}</p>\r\n                        <span class=\"badge\" ng-class=\"isLocked(filteredEvents[$index].objectId)?\'ion-locked\':\'\'\" />\r\n                        <span ng-if=\"isMultipleDays(filteredEvents[$index])\" class=\"button\" style=\"background: transparent; color : whitesmoke;\">{{filteredEvents[$index].startDate.iso|date:\"MMM dd\":\'GMT\'}}</span>\r\n                        <span ng-if=\"isMultipleDays(filteredEvents[$index])\" class=\"button ion-arrow-swap\" style=\"background: transparent; color : whitesmoke; min-width:0; padding:0 0\"></span>\r\n                        <span class=\"button\" style=\"background: transparent; color : whitesmoke;\">{{filteredEvents[$index].endDate.iso|date:\"MMM dd, yyyy\":\'GMT\'}}</span>                        \r\n                    </a>\r\n                </div>\r\n                <div class=\"col\" >\r\n                    <a ng-if=\"filteredEvents[$index+1].objectId\" href=\"#/app/events/event?id={{filteredEvents[$index+1].objectId}}\"  class=\"item item-body\">\r\n                        <img class=\"full-image\" fallback-src=\"./img/events/event.png\" ng-src=\"{{\'./img/events/\'+(filteredEvents[$index+1].objectId)+\'.png\'}}\">\r\n                        <p>{{filteredEvents[$index+1].name}}</p>\r\n                        <span class=\"badge\" ng-class=\"isLocked(filteredEvents[$index+1].objectId)?\'ion-locked\':\'\'\" />\r\n                        <span ng-if=\"isMultipleDays(filteredEvents[$index+1])\" class=\"button\" style=\"background: transparent; color : whitesmoke;\">{{filteredEvents[$index+1].startDate.iso|date:\"MMM dd\":\'GMT\'}}</span>\r\n                        <span ng-if=\"isMultipleDays(filteredEvents[$index+1])\" class=\"button ion-arrow-swap\" style=\"background: transparent; color : whitesmoke; min-width:0; padding:0 0\"></span>\r\n                        <span class=\"button\" style=\"background: transparent; color : whitesmoke;\">{{filteredEvents[$index+1].endDate.iso|date:\"MMM dd, yyyy\":\'GMT\'}}</span>                        \r\n                    </a>\r\n                </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("events/eventsEdit.html","<ion-view view-title=\"Events\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button icon-save\" ng-click=\"save()\">Save</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <div class=\"row responsive-sm\">\r\n            <span class=\"button button-dark icon-left ion-plus-circled\" ng-click=\"addEvent()\">Add new event</span>\r\n        </div>\r\n        <div class=\"row responsive-sm\" ng-repeat=\"event in filteredEvents\" ng-if=\"$index % 2 == 0\">\r\n            <div class=\"col\">\r\n                <a class=\"item item-body\">\r\n                    <img class=\"full-image\" fallback-src=\"./img/events/event.png\" ng-src=\"{{\'./img/events/\'+(filteredEvents[$index].objectId)+\'.png\'}}\">\r\n                    <span class=\"button button-dark icon-left ion-locked\" ng-click=\"setPinPicker(filteredEvents[$index])\">{{filteredEvents[$index].pinCode?\'PIN: \'+filteredEvents[$index].pinCode:\'Set PIN\'}}</span>\r\n                    <span class=\"button button-dark icon-left ion-eye-disabled\" ng-click=\"hideAfterPicker(filteredEvents[$index])\">{{filteredEvents[$index].hideAfter?\'Hide \'+filteredEvents[$index].hideAfter+\' days after\':\'Never hide\'}}</span>\r\n                    <span class=\"button button-dark icon-left ion-trash-b\" ng-click=\"removeEvent(filteredEvents[$index].objectId,$index)\"></span>\r\n                    <input type=\"text\" ng-model=\"filteredEvents[$index].name\">\r\n                    <span class=\"badge\" />\r\n                    <span class=\"button button-dark\" ng-click=\"openDatePicker(filteredEvents[$index].startDate)\">{{filteredEvents[$index].startDate.iso|date:\"MMM dd, HH:mm\":\'GMT\'}}</span>\r\n                    \r\n                    <span class=\"button button-dark\" style=\"margin-left:5px\" ng-click=\"openDatePicker(filteredEvents[$index].endDate)\">{{filteredEvents[$index].endDate.iso|date:\"MMM dd, HH:mm\":\'GMT\'}}</span>\r\n                </a>\r\n            </div>\r\n            <div class=\"col\">\r\n                <a ng-if=\"filteredEvents[$index+1]\" class=\"item item-body\">\r\n                    <img class=\"full-image\" fallback-src=\"./img/events/event.png\" ng-src=\"{{\'./img/events/\'+(filteredEvents[$index+1].objectId)+\'.png\'}}\">\r\n                    <span class=\"button button-dark icon-left ion-locked\" ng-click=\"setPinPicker(filteredEvents[$index+1])\">{{filteredEvents[$index+1].pinCode?\'PIN: \'+filteredEvents[$index+1].pinCode:\'Set PIN\'}}</span>\r\n                    <span class=\"button button-dark icon-left ion-eye-disabled\" ng-click=\"hideAfterPicker(filteredEvents[$index+1])\">{{filteredEvents[$index+1].hideAfter?\'Hide \'+filteredEvents[$index+1].hideAfter+\' days after\':\'Never hide\'}}</span>\r\n                    <span class=\"button button-dark icon-left ion-trash-b\" ng-click=\"removeEvent(filteredEvents[$index+1].objectId,$index+1)\"></span>\r\n                    <input type=\"text\" ng-model=\"filteredEvents[$index+1].name\">\r\n                    <span class=\"badge\" />\r\n                    <span class=\"button button-dark\" ng-click=\"openDatePicker(filteredEvents[$index+1].startDate)\">{{filteredEvents[$index+1].startDate.iso|date:\"MMM dd, HH:mm\":\'GMT\'}}</span>\r\n                    <span class=\"button button-dark\" style=\"margin-left:5px\" ng-click=\"openDatePicker(filteredEvents[$index+1].endDate)\">{{filteredEvents[$index+1].endDate.iso|date:\"MMM dd, HH:mm\":\'GMT\'}}</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n\r\n    </ion-content>\r\n\r\n</ion-view>\r\n");
$templateCache.put("events/session.html","<ion-view view-title=\"Session Details\">\r\n\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-edit\" ng-if=\"isAgendaEditEnabled()\" ng-href=\'#/app/events/sessionEdit?id={{::session.objectId}}\'>Edit</a>\r\n        <a class=\"button ion-calendar\" ng-if=\"isMobileDevice()\" ng-click=\"createEvent()\">Export to phone</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <ion-item class=\"item item-icon-left\">\r\n            <i class=\"icon icon-{{::session.icon}}\"></i>\r\n            {{::session.name}}\r\n        </ion-item>\r\n        <ion-item class=\"item item-icon-left\">\r\n            <i class=\"icon ion-clock\"></i>\r\n            {{::session.startDate.iso|date:\"HH:mm\":\'GMT\' }}\r\n            <i ng-if=\"::session.startDate.iso&&session.endDate.iso\">-</i>\r\n            {{::session.endDate.iso|date:\"HH:mm\":\'GMT\' }}\r\n            <p>{{::session.startDate.iso|date:\'EEEE, MMMM d, y\'}}</p>\r\n        </ion-item>\r\n        <ion-item ng-if=\"::room.objectId != null\" href=\"#/app/plcrc/room?id={{::room.objectId}}\" class=\"item item-icon-left\">\r\n            <i class=\"icon ion-home\"></i>\r\n            {{::room.name}}\r\n            <span class=\"badge ion-arrow-right-c\" />\r\n        </ion-item>\r\n        <ion-item ng-if=\"::spot.objectId != null\" href=\"#/app/city/spot?spotId={{::spot.objectId}}\" class=\"item item-icon-left\">\r\n            <i class=\"icon ion-pin\"></i>\r\n            {{::spot.name}}\r\n            <span class=\"badge ion-arrow-right-c\" />\r\n        </ion-item>\r\n\r\n        <ion-item ng-if=\"::session.presenter != null\" class=\"item item-icon-left\">\r\n            <i class=\"icon ion-person\"></i>\r\n            {{::session.presenter}}\r\n        </ion-item>\r\n        <ion-item ng-if=\"::session.attendee != null\" class=\"item item-icon-left\">\r\n            <i class=\"icon ion-person-stalker\"></i>\r\n            <h2>{{::session.attendee}}</h2>\r\n        </ion-item>\r\n        <ion-item ng-if=\"(session.text != null) && (session.text != \'\')\" class=\"item\">\r\n            <div class=\"session\" ng-bind-html=\"session.text\"></div>\r\n        </ion-item>\r\n\r\n        <ion-item ng-if=\"::session.icon == \'plane\'\" class=\"item item-icon-left\" ng-click=\"goToState(\'app.city/airport\')\">\r\n                <i class=\"icon ion-information-circled\"></i>\r\n                <h2>Kraków Airport info</h2>\r\n                <span class=\"badge ion-arrow-right-c\" />\r\n        </ion-item>\r\n        <ion-item ng-if=\"::session.icon == \'laboratory\'\" class=\"item item-thumbnail-left\">\r\n            \r\n                <img src=\"./img/guidelines/touch2.svg\">\r\n                <h2>\r\n                    In the measuring rooms additional safety regulations may be enforced. Follow your guide, do not touch anything without clear approval. \r\n                </h2>\r\n            \r\n        </ion-item>\r\n    </ion-content>\r\n</ion-view>\r\n`");
$templateCache.put("events/sessionEdit.html","<ion-view view-title=\"Session Details\">\r\n\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button icon-save\" ng-click=\"save()\">Save</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <ion-item class=\"item item-icon-left\">\r\n            <i class=\"icon icon-{{::session.icon}}\"></i>\r\n            {{::session.name}}\r\n        </ion-item>\r\n        <ion-item class=\"item item-icon-left\">\r\n            <i class=\"icon ion-clock\"></i>\r\n            {{::session.startDate.iso|date:\"HH:mm\":\'GMT\' }}\r\n            <i ng-if=\"::session.startDate.iso&&session.endDate.iso\">-</i>\r\n            {{::session.endDate.iso|date:\"HH:mm\":\'GMT\' }}\r\n            <p>{{::session.startDate.iso|date:\'EEEE, MMMM d, y\'}}</p>\r\n        </ion-item>\r\n        <ion-item ng-if=\"::room.objectId != null\" href=\"#/app/plcrc/room?id={{::room.objectId}}\" class=\"item item-icon-left\">\r\n            <i class=\"icon ion-home\"></i>\r\n            {{::room.name}}\r\n            <span class=\"badge ion-arrow-right-c\" />\r\n        </ion-item>\r\n        <ion-item ng-if=\"::spot.objectId != null\" href=\"#/app/city/spot?spotId={{::spot.objectId}}\" class=\"item item-icon-left\">\r\n            <i class=\"icon ion-pin\"></i>\r\n            {{::spot.name}}\r\n            <span class=\"badge ion-arrow-right-c\" />\r\n        </ion-item>\r\n\r\n        <ion-item class=\"item item-icon-left\">\r\n            <i class=\"icon ion-person\"></i>\r\n            <input type=\"text\" ng-model=\"session.presenter\">\r\n        </ion-item>\r\n        <ion-item class=\"item item-icon-left\">\r\n            <i class=\"icon ion-person-stalker\"></i>\r\n            <input type=\"text\" ng-model=\"session.attendee\">\r\n        </ion-item>\r\n        <ion-item class=\"item item-icon-left\">\r\n            <i class=\"icon ion-clipboard\"></i>\r\n            <input class=\"session\" type=\"text\" ng-model=\"session.text\">\r\n        </ion-item>\r\n        <ion-item ng-if=\"::session.icon == \'plane\'\" class=\"item item-icon-left\" ng-click=\"goToState(\'app.city/airport\')\">\r\n                <i class=\"icon ion-information-circled\"></i>\r\n                <h2>Kraków Airport info</h2>\r\n                <span class=\"badge ion-arrow-right-c\" />\r\n        </ion-item>\r\n        <ion-item ng-if=\"::session.icon == \'laboratory\'\" class=\"item item-thumbnail-left\">     \r\n                <img src=\"./img/guidelines/touch2.svg\">\r\n                <h2>\r\n                    In the measuring rooms additional safety regulations may be enforced. Follow your guide, do not touch anything without clear approval. \r\n                </h2>     \r\n        </ion-item>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("navigate/navigate.html","<script id=\"popover.html\" type=\"text/ng-template\">\r\n    <ion-popover-view>\r\n        <ion-header-bar>\r\n            <h1 class=\"title\">Show only:</h1>\r\n            <a class=\"button ion-ios-toggle\" ng-click=\"changeFiltration()\">All/None</a>\r\n        </ion-header-bar>\r\n        <ion-content>\r\n            <ul class=\"list\">\r\n                <li class=\"item item-toggle\" ng-repeat=\"type in ::spotTypes\" ng-class=\"\'icon-navigate-\'+type.id\">\r\n                    {{::type.text}}\r\n                    <label class=\"toggle\">\r\n                        <input type=\"checkbox\" ng-change=\"filterSpots()\" ng-model=\"type.selected\">\r\n                        <div class=\"track\">\r\n                            <div class=\"handle\"></div>\r\n                        </div>\r\n                    </label>\r\n                </li>\r\n            </ul>\r\n        </ion-content>\r\n    </ion-popover-view>\r\n</script>\r\n\r\n<ion-view title=\"Navigate\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a ng-click=\"showFilterModal($event)\" class=\"button ion-funnel\">Filter</a>\r\n    </ion-nav-buttons>\r\n\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item ng-repeat=\"spot in filteredSpots|orderBy:\'order\'\" ng-click=\"navigateToSpot(spot.objectId)\" ng-class=\"\'icon-navigate-\'+spot.type\">\r\n                {{::spot.name}}\r\n                <span class=\"badge ion-arrow-right-c\" />\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>");
$templateCache.put("plabb/dna.html","<ion-view view-title=\"Our values\">\r\n    <ion-content>\r\n        <div class=\"row responsive-sm\" ng-repeat=\"element in ::elements\" ng-if=\"$index % 2 == 0\">\r\n            <div class=\"col item\" ng-click=\"elements[$index].open=!elements[$index].open\">\r\n                <a class=\"row item-body\">   \r\n                    <div class=\"col col-40\" ng-include=\"\'./img/plabb/\'+elements[$index].image\"></div>\r\n                    <div class=\"col col-60 dna-header\">{{::elements[$index].name}}</div>\r\n                </a>\r\n                <span class=\"item-note\" ng-class=\"elements[$index].open?\'ion-chevron-up\':\'ion-chevron-down\'\">&nbsp;</span>\r\n                <h2 class=\"row slide-toggle\" ng-show=\"elements[$index].open\">{{::elements[$index].description}}</h2>\r\n            </div>\r\n            <div class=\"col item\" ng-click=\"elements[$index+1].open=!elements[$index+1].open\">\r\n                <a ng-if=\"elements[$index+1]\" class=\"item-body row\">\r\n                    <div class=\"col col-40\" ng-include=\"\'./img/plabb/\'+elements[$index+1].image\"></div>\r\n                    <div class=\"col col-60 dna-header\">{{::elements[$index+1].name}}</div>\r\n                </a>\r\n                <span class=\"item-note\" ng-class=\"elements[$index+1].open?\'ion-chevron-up\':\'ion-chevron-down\'\">&nbsp;</span>\r\n                <h2 class=\"row slide-toggle\" ng-show=\"elements[$index+1].open\"  ng-class=\"\">{{::elements[$index+1].description}}</h2>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("plabb/history.html","<ion-view view-title=\"Our heritage\">\r\n    <ion-content>\r\n\r\n        <ion-item>\r\n            <div class=\"item item-divider\">\r\n                History\r\n            </div>\r\n            <h2 class=\"row\">\r\n                ABB is the product of many acquisitions and mergers, but primarily the 1988 coming together of ASEA of Sweden and Switzerland\'s BBC, formerly known as Brown Boveri, two of the proudest and best known names in European electrical engineering history. In subsequent years, the combined business, which once included products as diverse as turbines and railway engines, was streamlined to focus on today\'s priorities of power and automation.\r\n            </h2>\r\n        </ion-item>\r\n        <ion-item>\r\n            <div class=\"item item-divider\">\r\n                Key facts\r\n            </div>\r\n            <div class=\"row\">\r\n                <ion-slide-box class=\"col-80\" active-slide=\"selectedSlide.idx\">\r\n                    <ion-slide ng-repeat=\"element in elements\" style=\"min-height:100px\">\r\n                        <img ng-if=\"$index >= (selectedSlide.idx-1) && $index <= (selectedSlide.idx+1)\" class=\"full-image\" ng-src=\"./img/plabb/{{::element.img}}\">\r\n                        <h2 class=\"row slide-toggle\" ng-bind-html=\"::element.text\"></h2>\r\n                        <br/>\r\n                    </ion-slide>\r\n                </ion-slide-box>\r\n                <div class=\"col col-20\" on-swipe-down=\"swipeDown()\" on-swipe-up=\"swipeUp()\">\r\n                    <ion-radio ng-if=\"checkIfShow($index)\" ng-model=\"selectedSlide.idx\" ng-value=\"$index\" class=\"location_swipe\" icon=\"ion-arrow-left-b\" ng-repeat=\"element in ::elements\">\r\n                        {{::element.header}}\r\n                    </ion-radio>\r\n                </div>\r\n            </div>\r\n        </ion-item>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("plabb/plabb.html","<ion-view view-title=\"ABB in Poland\">\r\n    <ion-content>\r\n        <ion-list>\r\n\r\n            <ion-item>\r\n                <div class=\"row\">\r\n                    <div class=\"col col-60\" ng-include=\"\'plabb/plabb.svg\'\">\r\n\r\n                    </div>                    \r\n\r\n                    <div class=\"col col-40\" on-swipe-down=\"swipeDown()\" on-swipe-up=\"swipeUp()\">\r\n                        <ion-radio ng-model=\"selectedLocation.idx\" ng-value=\"$index\" class=\"location_swipe\" icon=\"ion-arrow-left-b\" ng-repeat=\"i in ::localizations\">\r\n                            {{::i.name}}\r\n                        </ion-radio>\r\n                    </div>\r\n                </div>\r\n            </ion-item>\r\n            <ion-item ng-click=\"callNumber(\'tel: \'+localizations[selectedLocation.idx].phone)\" class=\"icon-contact-phone\">\r\n                Phone\r\n                <span class=\"item-note\">{{localizations[selectedLocation.idx].phone}}</span>\r\n            </ion-item>\r\n            <ion-item ng-click=\"callNumber(\'#/app/plcrc/location?position=[\'+localizations[selectedLocation.idx].position+\']\')\" class=\"icon-contact-address\">\r\n                Address\r\n                <span class=\"item-note\" ng-bind-html=\"localizations[selectedLocation.idx].address|linedivider\"> </span>\r\n            </ion-item>\r\n            <ion-item class=\"ion-ios-paper-outline\" ng-if=\"localizations[selectedLocation.idx].nip\">\r\n                NIP\r\n                <span class=\"item-note\">{{localizations[selectedLocation.idx].nip}}</span>\r\n            </ion-item>\r\n            <ion-item class=\"ion-ios-paper\" ng-if=\"localizations[selectedLocation.idx].regon\">\r\n                REGON\r\n                <span class=\"item-note\">{{localizations[selectedLocation.idx].regon}}</span>\r\n            </ion-item>\r\n            <ion-item class=\"wrap\">\r\n                {{localizations[selectedLocation.idx].description}}\r\n            </ion-item>\r\n\r\n              \r\n\r\n</ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("plabb/plabb.svg","<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" clip-rule=\"evenodd\" viewBox=\"0 -409.904 497.994 468.613\">\r\n    <defs>\r\n        <symbol id=\"star\">\r\n            <path transform=\"scale(0.7)\" d=\"M 46.296296,51.906272 31.916351,42.474649 17.502712,51.8547 22.029072,35.264028 8.654054,24.454438 25.831443,23.632463 31.978866,7.5717174 l 6.08985,16.0826626 17.174335,0.883504 -13.413655,10.761608 4.4669,16.60678 z\" />\r\n        </symbol>\r\n    </defs>\r\n    <style type=\"text/css\">\r\n        .location, .location_selected {\r\n            fill: #ff000f;\r\n            stroke: red;\r\n        }\r\n\r\n        .location_selected {            \r\n            animation-name: red-black;\r\n            animation-duration: 2s;\r\n            animation-iteration-count: infinite;\r\n        }\r\n\r\n        @keyframes red-black {\r\n            0% {\r\n                fill: white;\r\n            }\r\n\r\n            100% {\r\n                fill: red;\r\n            }\r\n        }\r\n    </style>\r\n    <g fill=\"none\" stroke=\"#BC5027\" stroke-miterlimit=\"10\">\r\n        <path stroke-width=\"2\" d=\"M237.502-389.67l3-10-36-4-83 23.5-14 19.5-94 27 1 69-12 5v10l21 22 3 81 14 12-17 42 12 3 12-9 59 30-10 17 25 24 18.667-12 48.332 20 48 51 21-11 28 27 70-23 82 31-13-39 43-61 24-12 4-39-34-42 4-50-28-17 39-38-30-109-30-19-140-1-25 15-38-7-8-27z\" style=\"stroke-dasharray: 1828.1px, 1828.1px; stroke-dashoffset: 6px;\" />\r\n        <path d=\"M121.502-380.17l15 66.5-43 49-71 36M39.502-132.67l66-30-12-102M140.17-39.67l23.332-68 20 3M251.502-356.67l-8 51-52-11-32 20-23-17 33 84 82 27-40 39-28 59-24-47-54-11M243.502-305.67l32 39 87-26 49-33 5-45M362.502-292.67l75 88-63 47 10 65 34 46 49 2M275.502-266.67M309.502-124.67l-36 40-90-20M273.502-84.67l10 29 33 25 29-14 39-48-75-32 5-33-63-45 24-64M224.502-95.537l-36 75.866M283.502-55.67l-44 41 18 35M345.502-44.67l10 69\" style=\"stroke-dasharray: 2494.89px, 2494.89px; stroke-dashoffset: 8px;\" />\r\n    </g>\r\n    <g transform=\"translate(10,-240)\">\r\n        <use id=\"warszawa\" ng-class=\"(selectedLocation.idx==0)?\'location_selected\':\'location\'\" transform=\"translate(322.09624,29.840578)\" xlink:href=\"#star\" />\r\n        <use id=\"lodz\" ng-class=\"(selectedLocation.idx==1)?\'location_selected\':\'location\'\" transform=\"translate(248.45633,88.752515)\" xlink:href=\"#star\" />\r\n        <use id=\"aleksandrow\" ng-class=\"(selectedLocation.idx==2)?\'location_selected\':\'location\'\" transform=\"translate(216.32254,67.329993)\" xlink:href=\"#star\" />\r\n        <use id=\"przasnysz\" ng-class=\"(selectedLocation.idx==3)?\'location_selected\':\'location\'\" transform=\"translate(300.67372,-30.410267)\" xlink:href=\"#star\" />\r\n        <use id=\"idsc\" ng-class=\"(selectedLocation.idx==4)?\'location_selected\':\'location\'\" transform=\"translate(276.33354,212.26541)\" xlink:href=\"#star\" />\r\n        <use id=\"crc\" ng-class=\"(selectedLocation.idx==5)?\'location_selected\':\'location\'\" transform=\"translate(255.77851,200.15387)\" xlink:href=\"#star\" />\r\n        <use id=\"wroclaw\" ng-class=\"(selectedLocation.idx==6)?\'location_selected\':\'location\'\" transform=\"translate(102.51538,119.54739)\" xlink:href=\"#star\" />\r\n        <use id=\"nowawies\" ng-class=\"(selectedLocation.idx==7)?\'location_selected\':\'location\'\" transform=\"translate(149.37716,-141.5396)\" xlink:href=\"#star\" />\r\n    </g>\r\n</svg>");
$templateCache.put("plabb/technology.html","<ion-view view-title=\"Technology\">\r\n    <ion-content>\r\n        <div class=\"row responsive-sm\" ng-repeat=\"element in ::elements\" ng-if=\"$index % 2 == 0\">\r\n            <div class=\"col item\" ng-click=\"elements[$index].open=!elements[$index].open\">\r\n                <a>   \r\n                    <div class=\"dna-image\" ng-include=\"\'./img/plabb/\'+elements[$index].image\"></div>\r\n                </a>\r\n                <div class=\"dna-header\" ng-bind-html=\"::elements[$index].name\"></div>\r\n                <span class=\"item-note\" ng-class=\"elements[$index].open?\'ion-chevron-up\':\'ion-chevron-down\'\">&nbsp;</span>\r\n                <h2 class=\"row slide-toggle\" ng-show=\"elements[$index].open\" ng-bind-html=\"::elements[$index].description\"></h2>\r\n            </div>\r\n            <div class=\"col item\" ng-click=\"elements[$index+1].open=!elements[$index+1].open\">\r\n                <a>\r\n                    <div class=\"dna-image\" ng-include=\"\'./img/plabb/\'+elements[$index+1].image\"></div>\r\n                </a>\r\n                <div class=\"dna-header\" ng-bind-html=\"::elements[$index+1].name\"></div>\r\n                <span class=\"item-note\" ng-class=\"elements[$index+1].open?\'ion-chevron-up\':\'ion-chevron-down\'\">&nbsp;</span>\r\n                <h2 class=\"row slide-toggle\" ng-show=\"elements[$index+1].open\"  ng-class=\"\" ng-bind-html=\"::elements[$index+1].description\"></h2>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("plcrc/about.html","<ion-view view-title=\"About\">\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-slide-box class=\"slide-box-limit-width\" active-slide=\"selectedSlide.idx\">\r\n                    <ion-slide ng-repeat=\"i in [1,2,3]\" style=\"min-height:50px\">\r\n                        <img ng-if=\"$index >= (selectedSlide.idx-1) && $index <= (selectedSlide.idx+1)\" class=\"full-image\" ng-src=\"./img/about/about_{{::i}}.jpg\">\r\n                    </ion-slide>\r\n                </ion-slide-box>\r\n            </ion-item>\r\n            <ion-item class=\"icon-about-established\">\r\n                Established\r\n                <span class=\"item-note\">January 1st, 1997</span>\r\n            </ion-item>\r\n            <ion-item class=\"icon-about-employees\" menu-close>\r\n                Employees\r\n                <span class=\"badge badge-assertive\">160+</span>\r\n            </ion-item>\r\n            <ion-item class=\"item item-divider icon-about-competences\">\r\n                Competences\r\n            </ion-item>\r\n            <ion-item class=\"wrap\">\r\n                <div class=\"icon-about-list\">\r\n                    Development of medium and high voltage products\r\n                </div>\r\n                <div class=\"icon-about-list\">\r\n                    Power electronics\r\n                </div>\r\n                <div class=\"icon-about-list\">\r\n                    Application of new materials and nanotechnology\r\n                </div>\r\n                <div class=\"icon-about-list\">\r\n                    Multiphisics simulations\r\n                </div>\r\n                <div class=\"icon-about-list\">\r\n                    Condition monitoring and diagnostics\r\n                </div>\r\n                <div class=\"icon-about-list\">\r\n                    Substation automation and distribution automation systems\r\n                </div>\r\n                <div class=\"icon-about-list\">\r\n                    Manufacturability and manufacturing\r\n                </div>\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("plcrc/contact.html","\r\n<ion-view title=\"Contact\">\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-slide-box class=\"slide-box-limit-width\" on-slide-changed=\"slideHasChanged($index)\">\r\n                    <ion-slide>\r\n                        <img class=\"full-image\" src=\"./img/reception.jpg\">\r\n                    </ion-slide>\r\n                </ion-slide-box>\r\n            </ion-item>\r\n            <ion-item ng-click=\"goToLocation()\" class=\"icon-contact-address\">\r\n                Address\r\n                <span class=\"item-note\">Starowiślna 13A, 31-038 Kraków</span>\r\n            </ion-item>\r\n            <ion-item ng-click=\"mailPlcrc()\" class=\"icon-contact-email\">\r\n                Email\r\n                <span class=\"item-note\">plcrcoffice@pl.abb.com</span>\r\n            </ion-item>\r\n            <ion-item browse-to=\"http://www.abb.com/plcrc\" class=\"icon-contact-www\">\r\n                WWW\r\n                <span class=\"item-note\">www.abb.com/plcrc</span>\r\n            </ion-item>\r\n            <ion-item ng-click=\"callNumber(\'tel: +48 22 223 9500\')\" class=\"icon-contact-phone\">\r\n                Phone\r\n                <span class=\"item-note\">+48 22 223 9500</span>\r\n            </ion-item>\r\n            <ion-item ng-click=\"callNumber(\'tel: +48 22 223 7777\')\" class=\"icon-contact-contact-center\">\r\n                ABB Contact Center\r\n                <span class=\"item-note\">+48 22 223 7777</span>\r\n            </ion-item>\r\n            <ion-item ng-click=\"callNumber(\'tel: +41 43 317 7700\')\" class=\"icon-ambulance\">\r\n                ABB Emergency Line\r\n                <span class=\"item-note\">+41 43 317 7700</span>\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>");
$templateCache.put("plcrc/evacuation.html","<ion-view view-title=\"Evacuation instruction\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-android-call\" href=\"tel:+48222238400\">Office emergency</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <div ng-include=\"\'./img/plan/common.svg\'\"></div>\r\n        <ion-slide-box class=\"slides slide-box-limit-width\" active-slide=\"selectedFloor.idx\">\r\n            <ion-slide ng-click=\"showModal($index)\" ng-repeat=\"floor in ::selectableFloors\" style=\"min-height:50px\">\r\n                <p ng-if=\"(selectedLocation.name==\'Starowiślna 13A\') && $index >= (selectedFloor.idx-selectedFloor.siblings) && $index <= (selectedFloor.idx+selectedFloor.siblings)\" ng-include=\"\'plcrc/map.svg\'\"></p>\r\n                <p ng-if=\"(selectedLocation.name!=\'Starowiślna 13A\') && $index >= (selectedFloor.idx-selectedFloor.siblings) && $index <= (selectedFloor.idx+selectedFloor.siblings)\" ng-include=\"floor.url\"></p>\r\n            </ion-slide>\r\n        </ion-slide-box>\r\n        <div class=\"floor-name\">{{selectedFloor.idx-1}}</div>\r\n        <div id=\"evacuation\" class=\"list\">\r\n            <div class=\"item item-thumbnail-left\" ng-repeat=\"step in ::evacuationSteps\">\r\n                <img ng-src=\"{{::step.img}}\">\r\n                <h2>{{::step.text}}</h2>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n\r\n<script id=\"image-modal.html\" type=\"text/ng-template\">\r\n    <div class=\"adic-modal\" ng-click=\"closeModal()\">\r\n        <ion-modal-view class=\"modal-bottom\" height=\"100px\">\r\n            <ion-scroll direction=\"xy\" style=\"height:500px;\">\r\n                <div ng-include=\"\'plcrc/map.svg\'\" style=\"height:300px; transform: translate(90px, 70px) scale(1.5);\"></div>\r\n            </ion-scroll>\r\n        </ion-modal-view>\r\n    </div>\r\n</script>\r\n");
$templateCache.put("plcrc/guidelines.html","<ion-view view-title=\"Visitors guidelines\">\r\n    <ion-content>\r\n        <div class=\"list\">\r\n            <div class=\"item\" ng-class=\"::step.img?\'item-thumbnail-left\':\'\'\" ng-repeat=\"step in ::guideSteps\">\r\n                <img ng-if=\"::step.img\" ng-src=\"{{::step.img}}\">\r\n                <h2>\r\n                    {{::step.text}}\r\n                </h2>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("plcrc/location.html","\r\n<ion-view title=\"{{::spot.address}}\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-navigate\" ng-if=\"isMobileDevice()\" ng-click=\"getDirections()\">Navigate</a>\r\n    </ion-nav-buttons>\r\n    <ion-content scroll=\"true\" overflow-scroll=true>\r\n        <div id=\"map\" data-tap-disabled=\"true\">            \r\n        </div>\r\n    </ion-content>\r\n</ion-view>");
$templateCache.put("plcrc/map.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"8000 0 33200.551 15090\">\r\n    <polygon points=\"0,-90 22222,0 22222,11111 0,11111 \" class=\"fil0\" transform=\"matrix(1.8730087,0,0,1.9270093,-300,100)\" class=\"fil0\" />\r\n    <g transform=\"matrix(0.738,0,0,0.738,17950,0)\">\r\n        <g ng-include=\"floor.url\" />\r\n    </g>\r\n\r\n    <g transform=\"translate(19100,100)\" class=\"fil3\">\r\n        <path d=\"m -2075.5479,9678.6344 c 0,-130.654 41.2088,-166.2487 92.0804,-79.4681 24.5746,41.8792 165.8867,47.3175 1048.62926,39.945 l 1020.223729,-8.4606 0,-463.6335 0,-463.6341 -1031.076869,-8.4606 c -895.47632,-7.3125 -1033.64132,-1.8133 -1050.54782,40.0058 -36.6688,91.1918 -79.3087,48.4664 -79.3087,-79.468 0,-133.131 24.5239,-155.733 95.4364,-87.9887 31.6222,30.2164 288.8484,40.0059 1053.66321,40.0059 l 1011.833779,0 9.270106,-471.6111 9.270105,-471.6711 -1040.5369,0 c -894.0136,0 -1043.247,6.7681 -1059.818,47.9828 -36.4978,90.7691 -79.1187,47.7419 -79.1187,-79.9508 0,-121.3481 38.6191,-165.5842 83.7538,-95.9056 13.082,20.1843 402.3818,31.968 1057.31677,31.968 l 1036.61106,0 0,-463.6333 0,-463.6341 -1036.61106,0 c -654.93497,0 -1044.23477,11.7838 -1057.31677,31.968 -45.1347,69.7386 -83.7538,25.5025 -83.7538,-95.9047 0,-118.8095 45.103,-174.6484 74.0911,-91.6154 9.0421,25.8652 309.3579,37.2871 1049.75002,39.9458 l 1037.092269,3.6259 0,-463.6341 0,-463.6333 -1019.438579,0 c -770.88091,0 -1029.65211,9.7895 -1061.32491,40.0059 -67.8984,64.783 -80.1699,48.1037 -80.1699,-108.8982 0,-142.136 2.7227,-146.4872 61.2688,-95.9057 54.2085,46.8348 179.7537,52.9385 1089.76203,52.9385 l 1028.49338,0 -9.295412,-455.6571 -9.295409,-455.6571 -1018.647059,-8.4606 c -912.34493,-7.6143 -1025.09943,-3.0214 -1080.46673,44.9014 -59.1602,51.1251 -61.8196,47.6202 -61.8196,-80.5561 0,-122.5561 5.5088,-131.1375 64.802,-100.8603 40.8037,20.7878 462.6248,33.056 1139.09499,33.056 l 1074.293,0 0,2616.8839 0,2616.8851 -1096.56277,19.1563 c -724.41002,12.6908 -1100.57722,30.639 -1108.38462,52.9993 -28.2599,80.9179 -73.2426,23.1456 -73.2426,-94.0323 z\" />\r\n        <path d=\"m 142.54394,19497.549 c 0,-130.654 41.2088,-166.249 92.0804,-79.468 24.5746,41.879 165.8867,47.317 1048.62926,39.945 l 1020.2236,-8.461 0,-463.633 0,-463.634 -1031.0768,-8.461 c -895.47626,-7.312 -1033.64126,-1.813 -1050.54776,40.006 -36.6688,91.192 -79.3087,48.466 -79.3087,-79.468 0,-133.131 24.5239,-155.733 95.4364,-87.989 31.6222,30.217 288.8484,40.006 1053.66316,40.006 l 1011.8337,0 9.2701,-471.611 9.2701,-471.671 -1040.5368,0 c -894.01356,0 -1043.24696,6.768 -1059.81796,47.983 -36.4978,90.769 -79.1187,47.742 -79.1187,-79.951 0,-121.348 38.6191,-165.584 83.7538,-95.906 13.082,20.185 402.3818,31.968 1057.31676,31.968 l 1036.6109,0 0,-463.633 0,-463.634 -1036.6109,0 c -654.93496,0 -1044.23476,11.784 -1057.31676,31.968 -45.1347,69.739 -83.7538,25.502 -83.7538,-95.905 0,-118.809 45.103,-174.648 74.0911,-91.615 9.0421,25.865 309.3579,37.287 1049.74996,39.946 l 1037.0922,3.626 0,-463.635 0,-463.633 -1019.4385,0 c -770.88086,0 -1029.65206,9.79 -1061.32486,40.006 -67.8984,64.783 -80.1699,48.104 -80.1699,-108.898 0,-142.136 2.7227,-146.487 61.2688,-95.906 54.2085,46.835 1075.62586,38.803 1075.62586,38.803 l 971.9487,28.272 c 877.3605,41.91 -3136.69736,-5.432 183.4826,-5.432 l -14.1361,1584.946 0,2616.885 -1096.5627,19.156 c -724.40996,12.691 -1100.57716,30.639 -1108.38456,52.999 -28.2599,80.918 -73.2426,23.146 -73.2426,-94.032 z\" />\r\n        <path d=\"m -16707.785,11426.377 0,1074.293 c 0,676.47 -12.268,1098.289 -33.057,1139.093 -30.276,59.293 -21.694,64.803 100.862,64.803 128.176,0 131.68,-2.66 80.555,-61.82 -47.923,-55.367 -52.515,-168.122 -44.901,-1080.467 l 8.459,-1018.646 455.658,-9.295 455.659,-9.297 0,1028.494 c 0,910.008 -6.105,1035.553 -52.94,1089.762 -50.582,58.546 -46.231,61.269 95.906,61.269 157.002,0 173.682,-12.272 108.899,-80.17 -30.216,-31.673 -40.006,-290.445 -40.006,-1061.326 l 0,-1019.437 463.633,0 463.634,0 -3.625,1037.091 c -2.659,740.393 -14.082,1040.708 -39.947,1049.75 -83.033,28.989 -27.194,74.092 91.615,74.092 121.407,0 165.646,-38.62 95.907,-83.754 -20.184,-13.082 -31.969,-402.381 -31.969,-1057.316 l 0,-1036.611 463.635,0 463.633,0 0,1036.611 c 0,654.935 -11.783,1044.234 -31.967,1057.316 -69.679,45.134 -25.444,83.754 95.904,83.754 127.693,0 170.72,-42.621 79.951,-79.119 -41.215,-16.571 -47.982,-165.805 -47.982,-1059.818 l 0,-1040.537 471.67,9.269 471.609,9.272 0,1011.834 c 0,764.815 -9.789,1022.04 -40.006,1053.662 -67.744,70.913 -45.141,95.437 87.99,95.437 127.935,0 170.659,-42.639 79.467,-79.308 -41.819,-16.907 -47.318,-155.073 -40.006,-1050.549 l 8.461,-1031.076 463.635,0 463.635,0 8.459,1020.222 c 7.373,882.742 1.934,1024.055 -39.945,1048.629 -73.46,43.063 -59.219,79.199 26.13,89.279 7.622,14.465 40.097,16.461 113.762,16.461 128.176,0 131.682,-2.66 80.557,-61.82 -47.923,-55.367 -52.517,-168.122 -44.903,-1080.467 l 8.461,-1018.646 455.659,-9.295 455.656,-9.297 0,1028.494 c 0,910.008 -6.105,1035.553 -52.94,1089.762 -50.581,58.546 -46.229,61.269 95.907,61.269 157.002,0 173.681,-12.272 108.898,-80.17 -30.216,-31.673 -40.006,-290.445 -40.006,-1061.326 l 0,-1019.437 463.6326,0 463.6347,0 -3.625,1037.092 c -2.659,740.393 -14.0822,1040.708 -39.9472,1049.75 -83.033,28.989 -27.1938,74.091 91.6152,74.091 121.407,0 165.6453,-38.62 95.9063,-83.754 -20.184,-13.082 -31.9688,-402.383 -31.9688,-1057.318 l 0,-1036.609 463.6348,0 463.6328,0 0,1036.609 c 0,654.935 -11.7828,1044.236 -31.9668,1057.318 -69.679,45.134 -25.4437,83.754 95.9043,83.754 127.693,0 170.7202,-42.621 79.9512,-79.119 -41.215,-16.571 -47.9825,-165.805 -47.9825,-1059.818 l 0,-1040.537 471.67,9.269 471.6093,9.272 0,1011.834 c 0,764.815 -9.7888,1022.04 -40.0058,1053.662 -67.744,70.913 -45.1408,95.437 87.9902,95.437 127.935,0 170.6588,-42.639 79.4668,-79.308 -41.819,-16.907 -47.3179,-155.073 -40.0059,-1050.549 l 8.461,-1031.076 463.6347,0 463.6329,0 8.4609,1020.222 c 7.373,882.742 1.9337,1024.055 -39.9453,1048.629 -86.78,50.872 -51.1853,92.082 79.4687,92.082 117.137,-0.01 174.8747,-44.989 93.9707,-73.244 -22.361,-7.807 -40.309,-383.975 -53,-1108.385 l -19.1543,-1096.56 -2616.8847,0 -2587.4488,0 -0.238,-13.658 -2616.885,0 -2616.885,0 z\" />\r\n        <path d=\"m -16749.954,10802.453 0,-1074.293 c 0,-676.4701 -12.268,-1098.2891 -33.057,-1139.0931 -30.276,-59.293 -21.694,-64.803 100.862,-64.803 128.176,0 131.68,2.66 80.555,61.82 -47.923,55.367 -52.515,168.122 -44.901,1080.4671 l 8.459,1018.646 455.658,9.295 455.659,9.297 0,-1028.494 c 0,-910.0081 -6.105,-1035.5531 -52.94,-1089.7621 -50.582,-58.546 -46.231,-61.269 95.906,-61.269 157.002,0 173.682,12.272 108.899,80.17 -30.216,31.673 -40.006,290.445 -40.006,1061.3261 l 0,1019.437 463.633,0 463.634,0 -3.625,-1037.091 c -2.659,-740.3931 -14.082,-1040.7081 -39.947,-1049.7501 -83.033,-28.989 -27.194,-74.092 91.615,-74.092 121.407,0 165.646,38.62 95.907,83.754 -20.184,13.082 -31.969,402.381 -31.969,1057.3161 l 0,1036.611 463.635,0 463.633,0 0,-1036.611 c 0,-654.9351 -11.783,-1044.2341 -31.967,-1057.3161 -69.679,-45.134 -25.444,-83.754 95.904,-83.754 127.693,0 170.72,42.621 79.951,79.119 -41.215,16.571 -47.982,165.805 -47.982,1059.8181 l 0,1040.537 471.67,-9.269 471.609,-9.272 0,-1011.834 c 0,-764.8151 -9.789,-1022.0401 -40.006,-1053.6621 -67.744,-70.913 -45.141,-95.437 87.99,-95.437 127.935,0 170.659,42.639 79.467,79.308 -41.819,16.907 -47.318,155.073 -40.006,1050.5491 l 8.461,1031.076 463.635,0 463.635,0 8.459,-1020.222 c 7.373,-882.7421 1.934,-1024.0551 -39.945,-1048.6291 -73.46,-43.063 -59.219,-79.199 26.13,-89.279 7.622,-14.465 40.097,-16.461 113.762,-16.461 128.176,0 131.682,2.66 80.557,61.82 -47.923,55.367 -52.517,168.122 -44.903,1080.4671 l 8.461,1018.646 455.659,9.295 455.656,9.297 0,-1028.494 c 0,-910.0081 -6.105,-1035.5531 -52.94,-1089.7621 -50.581,-58.546 -46.229,-61.269 95.907,-61.269 157.002,0 173.681,12.272 108.898,80.17 -30.216,31.673 -40.006,290.445 -40.006,1061.3261 l 0,1019.437 463.633,0 463.6345,0 -3.625,-1037.092 c -2.659,-740.3931 -14.0822,-1040.7081 -39.9472,-1049.7501 -83.033,-28.989 -27.1938,-74.091 91.6152,-74.091 121.407,0 165.6453,38.62 95.9063,83.754 -20.184,13.082 -31.9688,402.383 -31.9688,1057.3181 l 0,1036.609 463.6348,0 463.6328,0 0,-1036.609 c 0,-654.9351 -11.7828,-1044.2361 -31.9668,-1057.3181 -69.679,-45.134 -25.4437,-83.754 95.9043,-83.754 127.693,0 170.7202,42.621 79.9512,79.119 -41.215,16.571 -47.9825,165.805 -47.9825,1059.8181 l 0,1040.537 471.67,-9.269 471.6093,-9.272 0,-1011.834 c 0,-764.8151 -9.7888,-1022.0401 -40.0058,-1053.6621 -67.744,-70.913 -45.1408,-95.437 87.9902,-95.437 127.935,0 170.6588,42.639 79.4668,79.308 -41.819,16.907 -47.3179,155.073 -40.0059,1050.5491 l 8.461,1031.076 463.6347,0 463.633,0 8.461,-1020.222 c 7.373,-882.7421 1.934,-1024.0551 -39.945,-1048.6291 -86.78,-50.872 -51.186,-92.082 79.468,-92.082 117.137,0.01 174.875,44.989 93.971,73.244 -22.361,7.807 -40.309,383.975 -53,1108.3851 l -19.154,1096.56 -2616.8851,0 -2587.449,0 -0.238,13.658 -2616.885,0 -2616.885,0 z\" />\r\n        <path d=\"m -16643.542,17408.172 0,-1074.293 c 0,-676.47 -12.268,-1098.289 -33.057,-1139.093 -30.276,-59.293 -21.694,-64.803 100.862,-64.803 128.176,0 131.68,2.66 80.555,61.82 -47.923,55.367 -52.515,168.122 -44.901,1080.467 l 8.459,1018.646 455.658,9.295 455.659,9.297 0,-1028.494 c 0,-910.008 -6.105,-1035.553 -52.94,-1089.762 -50.582,-58.546 -46.231,-61.269 95.906,-61.269 157.002,0 173.682,12.272 108.899,80.17 -30.216,31.673 -40.006,290.445 -40.006,1061.326 l 0,1019.437 463.633,0 463.634,0 -3.625,-1037.091 c -2.659,-740.393 -14.082,-1040.708 -39.947,-1049.75 -83.033,-28.989 -27.194,-74.092 91.615,-74.092 121.407,0 165.646,38.62 95.907,83.754 -20.184,13.082 -31.969,402.381 -31.969,1057.316 l 0,1036.611 463.635,0 463.633,0 0,-1036.611 c 0,-654.935 -11.783,-1044.234 -31.967,-1057.316 -69.679,-45.134 -25.444,-83.754 95.904,-83.754 127.693,0 170.72,42.621 79.951,79.119 -41.215,16.571 -47.982,165.805 -47.982,1059.818 l 0,1040.537 471.67,-9.269 471.609,-9.272 0,-1011.834 c 0,-764.815 -9.789,-1022.04 -40.006,-1053.662 -67.744,-70.913 -45.141,-95.437 87.99,-95.437 127.935,0 170.659,42.639 79.467,79.308 -41.819,16.907 -47.318,155.073 -40.006,1050.549 l 8.461,1031.076 463.635,0 463.635,0 8.459,-1020.222 c 7.373,-882.742 1.934,-1024.055 -39.945,-1048.629 -73.46,-43.063 -59.219,-79.199 26.13,-89.279 7.622,-14.465 40.097,-16.461 113.762,-16.461 128.176,0 131.682,2.66 80.557,61.82 -47.923,55.367 -52.517,168.122 -44.903,1080.467 l 8.461,1018.646 455.659,9.295 455.656,9.297 0,-1028.494 c 0,-910.008 -6.105,-1035.553 -52.94,-1089.762 -50.581,-58.546 -46.229,-61.269 95.907,-61.269 157.002,0 173.681,12.272 108.898,80.17 -30.216,31.673 -40.006,290.445 -40.006,1061.326 l 0,1019.437 463.6329,0 463.6345,0 -3.625,-1037.092 c -2.659,-740.393 -14.0822,-1040.708 -39.9472,-1049.75 -83.033,-28.989 -27.1938,-74.091 91.6152,-74.091 121.407,0 165.6453,38.62 95.9063,83.754 -20.184,13.082 -31.9688,402.383 -31.9688,1057.318 l 0,1036.609 463.6348,0 463.6328,0 0,-1036.609 c 0,-654.935 -11.7828,-1044.236 -31.9668,-1057.318 -69.679,-45.134 -25.4437,-83.754 95.9043,-83.754 127.693,0 170.7202,42.621 79.9512,79.119 -41.215,16.571 -47.9825,165.805 -47.9825,1059.818 l 0,1040.537 471.67,-9.269 471.6093,-9.272 0,-1011.834 c 0,-764.815 -9.7888,-1022.04 -40.0058,-1053.662 -67.744,-70.913 -45.1408,-95.437 87.9902,-95.437 127.935,0 170.6588,42.639 79.4668,79.308 -41.819,16.907 -47.3179,155.073 -40.0059,1050.549 l 8.461,1031.076 463.6347,0 463.6328,0 8.461,-1020.222 c 7.373,-882.742 1.934,-1024.055 -39.945,-1048.629 -86.78,-50.872 -51.186,-92.082 79.468,-92.082 117.137,0.01 174.875,44.989 93.971,73.244 -22.361,7.807 -40.309,383.975 -53,1108.385 l -19.154,1096.56 -2616.8849,0 -2587.4489,0 -0.238,13.658 -2616.885,0 -2616.885,0 z\" />\r\n        <path d=\"m 6532.0589,12078.286 c -132.1226,0 -168.1177,-28.602 -80.3612,-63.912 42.3497,-17.056 47.8488,-115.139 40.394,-727.837 l -8.5561,-708.121 -468.8446,0 -468.8466,0 -8.5551,715.654 c -7.3952,621.537 -1.8333,717.435 40.4557,729.169 92.2161,25.452 49.0108,55.047 -80.3612,55.047 -134.6275,0 -157.4836,-17.021 -88.9781,-66.241 30.5556,-21.948 40.4557,-200.485 40.4557,-731.331 l 0,-702.298 -476.9122,-6.435 -476.973,-6.434 0,722.221 c 0,620.521 6.8441,724.101 48.5214,735.603 91.7903,25.333 48.2786,54.915 -80.8487,54.915 -122.712,0 -167.4463,-26.804 -96.9841,-58.132 20.4109,-9.08 32.3274,-279.287 32.3274,-733.867 l 0,-719.496 -468.8446,0 -468.8455,0 0,719.496 c 0,454.58 11.9154,724.787 32.3273,733.867 70.5219,31.328 25.7887,58.132 -96.983,58.132 -120.1455,0 -176.6112,-31.305 -92.6448,-51.425 26.1557,-6.276 37.7061,-214.721 40.394,-728.615 l 3.6667,-719.83 -468.8456,0 -468.8445,0 0,707.576 c 0,535.057 9.899,714.666 40.4557,736.65 65.5112,47.127 48.6437,55.644 -110.1221,55.644 -143.7337,0 -148.1346,-1.89 -96.9841,-42.526 47.3615,-37.624 53.5331,-124.764 53.5331,-756.386 l 0,-713.861 -460.7789,6.451 -460.7787,6.452 -8.5557,707.027 c -7.6999,633.244 -3.0554,711.506 45.4061,749.935 51.6998,41.062 48.1555,42.908 -81.4616,42.908 -123.9337,0 -132.6116,-3.823 -101.994,-44.978 21.0214,-28.321 33.4275,-321.101 33.4275,-790.628 l 0,-745.65 2646.299,0 2646.3017,0 19.3713,761.107 c 12.8337,502.802 30.9834,763.894 53.5947,769.313 81.8276,19.614 23.4062,50.836 -95.0889,50.836 z\" />\r\n        <path d=\"m 14168.028,11628.915 c -132.123,0 -168.118,-28.602 -80.362,-63.912 42.35,-17.056 47.849,-115.139 40.394,-727.837 l -8.556,-708.121 -468.844,0 -468.847,0 -8.555,715.654 c -7.395,621.537 -1.833,717.435 40.456,729.169 92.216,25.452 49.01,55.047 -80.362,55.047 -134.627,0 -157.483,-17.021 -88.978,-66.241 30.556,-21.948 40.456,-200.485 40.456,-731.331 l 0,-702.298 -476.912,-6.435 -476.973,-6.434 0,722.221 c 0,620.521 6.844,724.101 48.521,735.603 91.791,25.333 48.279,54.915 -80.848,54.915 -122.712,0 -167.447,-26.804 -96.985,-58.132 20.411,-9.08 32.328,-279.287 32.328,-733.867 l 0,-719.496 -468.845,0 -468.845,0 0,719.496 c 0,454.58 11.915,724.787 32.327,733.867 70.522,31.328 25.789,58.132 -96.983,58.132 -120.145,0 -176.611,-31.305 -92.645,-51.425 26.156,-6.276 37.706,-214.721 40.394,-728.615 l 3.667,-719.83 -468.846,0 -468.844,0 0,707.576 c 0,535.057 9.899,714.666 40.456,736.65 65.511,47.127 48.643,55.644 -110.1225,55.644 -143.7336,0 -148.1345,-1.89 -96.9841,-42.526 47.3615,-37.624 53.5331,-124.764 53.5331,-756.386 l 0,-713.861 -460.7788,6.451 -460.7787,6.452 -8.5557,707.027 c -7.6999,633.244 -3.0554,711.506 45.4061,749.935 51.6998,41.062 48.1555,42.908 -81.4616,42.908 -123.9337,0 -132.6116,-3.823 -101.994,-44.978 21.0214,-28.321 33.4275,-321.101 33.4275,-790.628 l 0,-745.65 2646.2987,0 2646.302,0 19.371,761.107 c 12.834,502.802 30.984,763.894 53.595,769.313 81.828,19.614 23.406,50.836 -95.089,50.836 z\" />\r\n        <path d=\"m 20910.726,11590.532 c -130.654,0 -166.249,-28.136 -79.468,-62.868 41.879,-16.779 47.317,-113.26 39.945,-715.955 l -8.461,-696.559 -463.633,0 -463.634,0 -8.461,703.969 c -7.312,611.389 -1.813,705.722 40.006,717.264 91.192,25.036 48.466,54.149 -79.468,54.149 -133.131,0 -155.733,-16.744 -87.989,-65.159 30.217,-21.591 40.006,-197.213 40.006,-719.392 l 0,-690.831 -471.611,-6.329 -471.671,-6.33 0,710.429 c 0,610.39 6.768,712.279 47.983,723.593 90.769,24.919 47.742,54.019 -79.951,54.019 -121.348,0 -165.584,-26.367 -95.906,-57.183 20.185,-8.932 31.968,-274.728 31.968,-721.886 l 0,-707.749 -463.633,0 -463.634,0 0,707.749 c 0,447.158 11.784,712.954 31.968,721.886 69.739,30.816 25.502,57.183 -95.905,57.183 -118.809,0 -174.648,-30.794 -91.615,-50.586 25.865,-6.173 37.287,-211.215 39.946,-716.719 l 3.626,-708.077 -463.635,0 -463.633,0 0,696.024 c 0,526.32 9.79,702.997 40.006,724.622 64.783,46.357 48.104,54.736 -108.898,54.736 -142.136,0 -146.487,-1.859 -95.906,-41.832 46.835,-37.01 38.803,-734.386 38.803,-734.386 l 28.272,-663.6 c 41.91,-599.0205 -5.432,2141.588 -5.432,-125.273 l 1584.946,9.651 2616.885,0 19.156,748.681 c 12.691,494.593 30.639,751.422 52.999,756.752 80.918,19.295 23.146,50.007 -94.032,50.007 z\" />\r\n        <path d=\"m 3386.9548,17256.665 0,-875.441 c 0,-551.256 -12.5838,-894.996 -33.9078,-928.247 -31.0552,-48.318 -22.2524,-52.809 103.4579,-52.809 131.4749,0 135.0691,2.169 82.6283,50.378 -49.1564,45.118 -53.8666,137.002 -46.0566,880.472 l 8.6767,830.096 467.3855,7.573 467.3865,7.576 0,-838.12 c 0,-741.565 -6.2621,-843.871 -54.3026,-888.047 -51.8838,-47.709 -47.4208,-49.928 98.3744,-49.928 161.0429,0 178.1522,10 111.7018,65.331 -30.9937,25.81 -41.0357,236.684 -41.0357,864.875 l 0,830.74 475.5658,0 475.5668,0 -3.7183,-845.126 c -2.7275,-603.347 -14.4445,-848.074 -40.9752,-855.442 -85.17,-23.623 -27.8939,-60.378 93.973,-60.378 124.5317,0 169.9093,31.472 98.3754,68.252 -20.7035,10.66 -32.7918,327.9 -32.7918,861.606 l 0,844.735 475.5678,0 475.5657,0 0,-844.735 c 0,-533.706 -12.0863,-850.946 -32.7897,-861.606 -71.4724,-36.78 -26.0989,-68.252 98.3723,-68.252 130.9795,0 175.1139,34.733 82.0087,64.474 -42.2757,13.504 -49.2169,135.115 -49.2169,863.647 l 0,847.933 483.8096,-7.553 483.747,-7.555 0,-824.545 c 0,-623.247 -10.0409,-832.86 -41.0356,-858.629 -69.4876,-57.787 -46.3029,-77.772 90.2546,-77.772 131.2277,0 175.0513,34.747 81.5123,64.628 -42.8953,13.777 -48.5359,126.37 -41.0357,856.093 l 8.6788,840.225 475.5678,0 475.5678,0 8.6767,-831.38 c 7.5627,-719.347 1.9838,-834.502 -40.9731,-854.528 -75.3507,-35.092 -60.7431,-64.54 26.8025,-72.754 7.8182,-11.787 41.129,-13.414 116.69,-13.414 131.4749,0 135.0711,2.169 82.6303,50.378 -49.1564,45.118 -53.8687,137.002 -46.0587,880.472 l 8.6788,830.096 467.3865,7.573 467.3833,7.576 0,-838.12 c 0,-741.564 -6.262,-843.871 -54.302,-888.047 -51.883,-47.709 -47.419,-49.928 98.375,-49.928 161.043,0 178.151,10 111.701,65.331 -30.994,25.81 -41.036,236.684 -41.036,864.875 l 0,830.74 475.5663,0 475.567,0 -3.718,-845.127 c -2.728,-603.347 -14.445,-848.073 -40.976,-855.441 -85.17,-23.624 -27.893,-60.378 93.974,-60.378 124.531,0 169.908,31.472 98.374,68.252 -20.703,10.66 -32.791,327.901 -32.791,861.609 l 0,844.732 475.567,0 475.566,0 0,-844.732 c 0,-533.708 -12.086,-850.949 -32.79,-861.609 -71.472,-36.78 -26.098,-68.252 98.373,-68.252 130.979,0 175.114,34.733 82.009,64.474 -42.276,13.504 -49.218,135.115 -49.218,863.647 l 0,847.933 483.81,-7.553 483.747,-7.555 0,-824.545 c 0,-623.247 -10.041,-832.86 -41.036,-858.629 -69.487,-57.787 -46.302,-77.772 90.255,-77.772 131.228,0 175.051,34.748 81.512,64.628 -42.895,13.778 -48.536,126.37 -41.035,856.093 l 8.678,840.225 475.568,0 475.566,0 8.679,-831.38 c 7.562,-719.347 1.984,-834.502 -40.973,-854.528 -89.014,-41.455 -52.504,-75.038 81.513,-75.038 120.152,0 179.376,36.662 96.39,59.687 -22.937,6.362 -41.347,312.901 -54.365,903.223 l -19.647,893.587 -2684.236,0 -2654.0441,0 -0.2441,11.13 -2684.237,0 -2684.237,0 z\" />\r\n        <path d=\"m 3371.8039,19529.275 0,-875.441 c 0,-551.256 -12.5838,-894.996 -33.9078,-928.247 -31.0552,-48.318 -22.2524,-52.809 103.4579,-52.809 131.4749,0 135.0691,2.169 82.6283,50.378 -49.1564,45.118 -53.8666,137.002 -46.0566,880.472 l 8.6767,830.096 467.3855,7.573 467.3865,7.576 0,-838.12 c 0,-741.565 -6.2621,-843.871 -54.3026,-888.047 -51.8838,-47.709 -47.4208,-49.928 98.3744,-49.928 161.0429,0 178.1522,10 111.7018,65.331 -30.9937,25.81 -41.0357,236.684 -41.0357,864.875 l 0,830.74 475.5658,0 475.5668,0 -3.7183,-845.126 c -2.7275,-603.347 -14.4445,-848.074 -40.9752,-855.442 -85.17,-23.623 -27.8939,-60.378 93.973,-60.378 124.5319,0 169.9089,31.472 98.3754,68.252 -20.7035,10.66 -32.7918,327.9 -32.7918,861.606 l 0,844.735 475.5683,0 475.565,0 0,-844.735 c 0,-533.706 -12.086,-850.946 -32.789,-861.606 -71.473,-36.78 -26.099,-68.252 98.372,-68.252 130.979,0 175.114,34.733 82.009,64.474 -42.276,13.504 -49.217,135.115 -49.217,863.647 l 0,847.933 483.809,-7.553 483.747,-7.555 0,-824.545 c 0,-623.247 -10.041,-832.86 -41.035,-858.629 -69.488,-57.787 -46.303,-77.772 90.254,-77.772 131.228,0 175.052,34.747 81.513,64.628 -42.896,13.777 -48.536,126.37 -41.036,856.093 l 8.679,840.225 475.567,0 475.568,0 8.677,-831.38 c 7.563,-719.347 1.984,-834.502 -40.973,-854.528 -75.351,-35.092 -60.743,-64.54 26.802,-72.754 7.819,-11.787 41.129,-13.414 116.69,-13.414 131.475,0 135.071,2.169 82.631,50.378 -49.157,45.118 -53.869,137.002 -46.059,880.472 l 8.679,830.096 467.386,7.573 467.384,7.576 0,-838.12 c 0,-741.564 -6.262,-843.871 -54.302,-888.047 -51.883,-47.709 -47.419,-49.928 98.375,-49.928 161.043,0 178.151,10 111.701,65.331 -30.994,25.81 -41.036,236.684 -41.036,864.875 l 0,830.74 475.5657,0 475.567,0 -3.718,-845.127 c -2.728,-603.347 -14.445,-848.073 -40.976,-855.441 -85.17,-23.624 -27.893,-60.378 93.974,-60.378 124.531,0 169.908,31.472 98.374,68.252 -20.703,10.66 -32.791,327.901 -32.791,861.609 l 0,844.732 475.567,0 475.566,0 0,-844.732 c 0,-533.708 -12.086,-850.949 -32.79,-861.609 -71.472,-36.78 -26.098,-68.252 98.373,-68.252 130.979,0 175.114,34.733 82.009,64.474 -42.276,13.504 -49.218,135.115 -49.218,863.647 l 0,847.933 483.81,-7.553 483.747,-7.555 0,-824.545 c 0,-623.247 -10.041,-832.86 -41.036,-858.629 -69.487,-57.787 -46.302,-77.772 90.255,-77.772 131.228,0 175.051,34.748 81.512,64.628 -42.895,13.778 -48.536,126.37 -41.035,856.093 l 8.678,840.225 475.568,0 475.566,0 8.679,-831.38 c 7.562,-719.347 1.984,-834.502 -40.973,-854.528 -89.014,-41.455 -52.504,-75.038 81.513,-75.038 120.152,0 179.376,36.662 96.39,59.687 -22.937,6.362 -41.347,312.901 -54.365,903.223 l -19.647,893.587 -2684.236,0 -2654.0437,0 -0.244,11.13 -2684.237,0 -2684.2374,0 z\" />\r\n        <path d=\"m 1800,3130  -19747.9617,3295.0487 -44.6,14040.8646 18007.42214,-24.588 0,-5458.967\"\r\n              style=\"fill:none;stroke:#ffffff;stroke-width:202.55223083\" />\r\n        <path d=\"m -795.85624,20203.458 15835.58824,54.698 -43.239,-3172.89 3547.832,0 21.619,3364.362 2725.794,-27.35 -129.778,-10667.505\"\r\n              style=\"fill:none;stroke:#ffffff;stroke-width:202.55223083\" />\r\n    </g>\r\n    <g transform=\"matrix(4.2987698,0,0,3.7709666,9038.6292,7323.2689)\" ng-include=\"\'./img/evacuation/meeting.svg\'\" />\r\n    <g class=\"fil6\">\r\n        <g transform=\"translate(26500,11000)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(1,0,0,1,0,1000)\" xlink:href=\"#arrow\" />\r\n        </g>\r\n        <g transform=\"translate(15000,13000)\">\r\n            <use transform=\"matrix(0,1,-1,0,0,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,1500,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,3000,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,4500,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,6000,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,7500,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,9000,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,10500,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,12000,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,13500,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,15000,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,16500,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,18000,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(0,1,-1,0,19500,0)\" xlink:href=\"#arrow\" />\r\n        </g>\r\n        <g transform=\"translate(14000,9500)\">\r\n            <use transform=\"matrix(1,0,0,-1,0,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(1,0,0,-1,0,1500)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(1,0,0,-1,0,3000)\" xlink:href=\"#arrow\" />\r\n        </g>\r\n        <g transform=\"translate(34500,10500)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\" />\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\" />\r\n        </g>\r\n        <use transform=\"matrix(0,1,-1,0,14000,8000)\" xlink:href=\"#arrow\" />\r\n\r\n    </g>\r\n</svg>");
$templateCache.put("plcrc/plan.html","<ion-view view-title=\"Office plan\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a ng-if=\"selectableRooms[selectedRoom.index].type == \'meeting\'\" class=\"button ion-android-search\" href=\"#/app/plcrc/room?id={{selectableRooms[selectedRoom.index].id}}\">Room details</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <div ng-include=\"\'./img/plan/common.svg\'\"></div>\r\n        <ion-slide-box class=\"list slides slide-box-limit-width\" on-slide-changed=\"slideHasChanged($index)\" active-slide=\"selectedFloor.index\">\r\n            <ion-slide id=\"slideBox\" ng-click=\"showImage()\" ng-repeat=\"floor in selectableFloors\" style=\"min-height:50px\">\r\n                <div ng-if=\"$index >= (selectedFloor.index-1) && $index <= (selectedFloor.index+1)\" ng-include=\"floor.url\"></div>\r\n            </ion-slide>\r\n        </ion-slide-box>\r\n        <div class=\"floor-name\">{{selectedFloor.index-1}}</div>\r\n        <ion-list>            \r\n            <ion-item class=\"icon-plcrc-location item-select\">\r\n                Location\r\n                <select ng-model=\"selectedLocation.index\" ng-options=\"parseInt(idx) as location.name for (idx, location) in ::selectableLocations\" ng-change=\"selectedLocationChanged(selectedLocation.index)\"  convert-to-number></select>\r\n            </ion-item>\r\n            <ion-item class=\"ion-social-buffer-outline item-select\">\r\n                Floor\r\n                <select ng-model=\"selectedFloor.index\" ng-options=\"parseInt(idx) as floor.name for (idx, floor) in selectableFloors\" ng-change=\"selectedFloorChanged(selectedFloor.index)\" convert-to-number></select>\r\n            </ion-item>\r\n            <ion-item class=\"icon-room item-select\">\r\n                Selection\r\n                <select ng-model=\"selectedRoom.index\" ng-options=\"parseInt(idx) as room.name for (idx, room) in selectableRooms\" ng-change=\"selectedRoomChanged(selectedRoom.index)\" convert-to-number></select>\r\n\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n<script id=\"image-modal.html\" type=\"text/ng-template\">\r\n    <div ng-click=\"closeModal()\">\r\n        <ion-modal-view class=\"modal\">\r\n            <ion-scroll zooming=\"true\" style=\"height: 430px\" direction=\"xy\">\r\n                <div ng-include=\"selectableFloors[selectedFloor.index].url\" style=\"width:700px\" ></div>\r\n            </ion-scroll>\r\n        </ion-modal-view>\r\n    </div>\r\n</script>");
$templateCache.put("plcrc/plcrc.html","<ion-view view-title=\"CRC Kraków\" cache-view=\"false\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-android-wifi\" ng-if=\"isMobileDevice()\" ng-click=\"goToState(\'app.ble\')\">Near me</a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-slide-box class=\"slide-box-limit-width\" active-slide=\"selectedSlide.idx\">\r\n                    <ion-slide ng-repeat=\"image in [1,2,3]\" style=\"min-height:100px\">\r\n                        <img ng-if=\"$index >= (selectedSlide.idx-1) && $index <= (selectedSlide.idx+1)\"  class=\"full-image\" ng-src=\"./img/plcrc_{{image}}.jpg\">\r\n                    </ion-slide>\r\n                </ion-slide-box>\r\n            </ion-item>\r\n            <ion-item ng-repeat=\"link in ::links\" ng-click=\"goToState(link.state)\">\r\n                <i class=\"icon {{::link.icon}}\"/>\r\n                {{::link.title}}\r\n                <span class=\"badge\" ng-class=\"::link.toBeLocked&&isLocked?\'ion-locked\':\'ion-arrow-right-c\'\"/>\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("plcrc/room.html","<script id=\"vc.html\" type=\"text/ng-template\">\r\n    <ion-popover-view style=\"width:90%; height:69px\">\r\n        <ion-content>\r\n            <div class=\"list\">\r\n                <a class=\"item item-icon-left\">\r\n                    <i class=\"icon ion-social-whatsapp-outline\"></i>Name:\r\n                    <span class=\"item-note\">{{attribute.value}}</span>\r\n                </a>\r\n             </div>\r\n        </ion-content>\r\n    </ion-popover-view>\r\n</script>\r\n\r\n<ion-view view-title=\"{{::room.name}}\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-android-alert\" href=\"#/app/plcrc/evacuation?roomId={{::room.objectId}}\">Evacuate me</a>\r\n    </ion-nav-buttons>\r\n    <ion-content class=\"slide-box-limit-width\">\r\n        <ion-item>\r\n            <img class=\"full-image\" ng-src=\"./img/rooms/{{::room.name}}.jpg\">\r\n        </ion-item>\r\n        <div class=\"row\" ng-repeat=\"roomAttribute in ::roomAttributes | orderBy: order\" ng-if=\"$index % 2 == 0\">\r\n            <div class=\"col\" ng-click=\"makeLink(roomAttributes[$index],$event)\">\r\n                <span ng-class=\"\'icon-room-\'+roomAttributes[$index].icon\">\r\n                        <span ng-if=\"::roomAttributes[$index].type!=\'vc\'\">{{::roomAttributes[$index].value}}</span>\r\n                </span>\r\n                <span class=\"ion-arrow-right-c\" ng-if=\"isLink(roomAttributes[$index])\"></span>\r\n            </div>\r\n\r\n            <div ng-if=\"roomAttributes[$index+1]\" class=\"col\" ng-click=\"makeLink(roomAttributes[$index+1],$event)\">\r\n                <span ng-class=\"\'icon-room-\'+roomAttributes[$index+1].icon\">\r\n                    <span ng-if=\"::roomAttributes[$index+1].type!=\'vc\'\">{{::roomAttributes[$index+1].value}}</span>\r\n                </span>\r\n                <span class=\"ion-arrow-right-c\" ng-if=\"isLink(roomAttributes[$index+1])\"></span>\r\n            </div>\r\n\r\n        </div>\r\n    </ion-content>\r\n</ion-view>");
$templateCache.put("plcrc/rooms.html","<script type=\"text/ng-template\" id=\"search.html\">\r\n    <ion-popover-view style=\"height:70px;width:250px\">\r\n        <ion-content>\r\n            <div class=\"list\">\r\n                <div class=\"item item-input-inset\">\r\n                    <i class=\"icon ion-ios-search placeholder-icon\"></i>\r\n                    <input autofocus id=\"filterTextField\" type=\"text\" placeholder=\"Room attribute\" ng-model=\"filter.text\">\r\n                    <button class=\"button button-clear ion-backspace-outline\" ng-click=\"filter.text=\'\'\"></button>\r\n                </div>\r\n            </div>\r\n        </ion-content>\r\n    </ion-popover-view>\r\n</script>\r\n<ion-view view-title=\"Meeting rooms\">\r\n    <ion-nav-buttons side=\"right\">\r\n        <a class=\"button ion-funnel\" ng-click=\"popover.show($event)\">\r\n            <i ng-show=\"filter.text\">Filter</i>\r\n            <B>{{filter.text}}</B>\r\n        </a>\r\n    </ion-nav-buttons>\r\n    <ion-content>\r\n        <div class=\"list\">\r\n            <div ng-repeat=\"room in filteredConfRooms = (confRooms| filter:filter.text | orderBy:[\'location.name\',\'floor\'] )\"> \r\n                <div ng-if=\"filteredConfRooms[$index].location.name!=filteredConfRooms[$index-1].location.name\" class=\"item item-divider\">\r\n                  {{room.location.name}}\r\n                </div>\r\n                <a class=\"item item-thumbnail-left\"\r\n                    href=\"#/app/plcrc/room?id={{room.objectId}}\">\r\n                    <img ng-src=\"./img/rooms/miniatures/{{room.name}}.jpg\">\r\n                    <h2>{{room.name}}</h2>\r\n                    <p>{{room.floorName}}</p>\r\n                    <p>{{room.location.name}}</p>\r\n                    <span class=\"badge ion-arrow-right-c\" />\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </ion-content>\r\n</ion-view>");
$templateCache.put("plcrc/whoiswho.html","<ion-view view-title=\"Who is who?\">\r\n  <ion-content>\r\n      <div class=\"list\">\r\n          <div class=\"item item-thumbnail-left\" ng-repeat=\"person in ::whoIsWho|orderBy:\'order\'\">\r\n              <img fallback-src=\"./img/whoiswho/default.jpg\" ng-src=\"./img/whoiswho/{{::person.icon}}.jpg\">\r\n              <h2>{{::person.name}}</h2>\r\n              <p ng-bind-html=\"person.position|linedivider\"></p>\r\n          </div>\r\n      </div>\r\n  </ion-content>\r\n</ion-view>\r\n");
$templateCache.put("settings/settings.html","<ion-view view-title=\"Settings\">\r\n    <ion-content>\r\n        <ion-list>\r\n            <ion-item ng-click=\"getData()\" class=\"icon-settings-load\" menu-close>\r\n                Load data\r\n            </ion-item>\r\n            <!--<ion-item class=\"ion-edit item-toggle\" ng-click=\"enableEditDialog()\">\r\n                        Allow agenda edit mode\r\n                        <label class=\"toggle toggle-assertive\">\r\n                            <input type=\"checkbox\" ng-model=\"enableAgendaEdit.value\">\r\n                            <div class=\"track\">\r\n                                <div class=\"handle\"></div>\r\n                            </div>\r\n                        </label>\r\n            </ion-item>\r\n            <ion-item ng-click=\"goToState(\'install\')\" class=\"ion-android-exit\" menu-close>\r\n                Install\r\n            </ion-item>-->\r\n            <ion-item ng-click=\"feedback()\" class=\"icon-bug\" menu-close>\r\n                Send feedback\r\n            </ion-item>\r\n            <ion-item ng-click=\"oss()\" class=\"icon-settings-version\" menu-close>\r\n                Open Source Components\r\n            </ion-item>\r\n            <ion-item ng-click=\"about()\" class=\"icon-settings-version\" menu-close>\r\n                About\r\n            </ion-item>\r\n        </ion-list>\r\n    </ion-content>\r\n</ion-view>\r\n\r\n<script id=\"about.html\" type=\"text/ng-template\">\r\n    <div class=\"list\">\r\n\r\n        <a class=\"item item-icon-left\">\r\n            <i class=\"icon ion-ios-pricetags-outline\"></i>\r\n            Application\r\n            <span class=\"item-note\">\r\n                Visit CRC Krakow\r\n            </span>\r\n        </a>\r\n\r\n        <a class=\"item item-icon-left item-icon-right\" href=\"#\">\r\n            <i class=\"icon ion-fork-repo\"></i>\r\n            Version\r\n            <span class=\"item-note\">\r\n                {{appVersion}}\r\n            </span>\r\n        </a>\r\n\r\n        <a class=\"item item-icon-left item-icon-right\" href=\"#\">\r\n            <i class=\"icon ion-ios-pulse-strong\"></i>\r\n            Build\r\n            <span class=\"item-note\">\r\n                {{appBuild}}\r\n            </span>\r\n        </a>\r\n\r\n    </div>\r\n</script>\r\n\r\n<script id=\"oss.html\" type=\"text/ng-template\">\r\nFollowing OSS components has been used in application:\r\n<table style=\"font-size:8px\">\r\n<tr>\r\n   <th>Component</th>\r\n   <th>Version</th>\r\n   <th>License</th>\r\n</tr>\r\n<tr>\r\n   <td>amdefine</td>\r\n   <td>1.0.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>angular-bootstrap-datetimepicker</td>\r\n   <td>1.0.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>angular-mocks</td>\r\n   <td>1.4.9</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>angular.js</td>\r\n   <td>1.4.3</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>angular.js</td>\r\n   <td>1.5.2</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>angular.js</td>\r\n   <td>1.4.9</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>AngularJS Animate</td>\r\n   <td>1.4.3</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>ansi.js</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>Apache Cordova</td>\r\n   <td>5.1.1</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>async</td>\r\n   <td>0.2.10</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>aws-sign</td>\r\n   <td>0.6.1</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>aws4</td>\r\n   <td>1.4.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>bestiejs\'s platform.js</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>bl</td>\r\n   <td>1.1.2</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>bluebird</td>\r\n   <td>2.9.34</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>Bootstrap</td>\r\n   <td>3.3.5</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>bower</td>\r\n   <td>1.7.9</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>buffer-to-vinyl</td>\r\n   <td>1.1.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>bufferstreams</td>\r\n   <td>1.1.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>caseless</td>\r\n   <td>0.11.1</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>clean-css</td>\r\n   <td>3.4.10</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>com.telerik.plugins.<br>nativepagetransitions</td>\r\n   <td>0.6.5</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>combined-stream</td>\r\n   <td>1.0.5</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>commander.js</td>\r\n   <td>2.9.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>concat-stream</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-android</td>\r\n   <td>Unspecified</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-browser</td>\r\n   <td>4.1.0</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-lib</td>\r\n   <td>Unspecified</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-app-version</td>\r\n   <td>0.1.8</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-calendar</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-crosswalk-webview</td>\r\n   <td>Unspecified</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-email-composer</td>\r\n   <td>Unspecified</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-inappbrowser</td>\r\n   <td>1.4.0</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-network-information</td>\r\n   <td>1.2.0</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-pebblecode-ble-central</td>\r\n   <td>1.0.4</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-plugin-whitelist</td>\r\n   <td>Unspecified</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-splashscreen</td>\r\n   <td>3.1.0</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>cordova-uglify</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>cross-spawn</td>\r\n   <td>4.0.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>cross-spawn-async</td>\r\n   <td>2.2.4</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>crosswalk</td>\r\n   <td>Unspecified</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>dispatch-cordova-plugin-crosswalk-webview</td>\r\n   <td>Unspecified</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>duplexer2.jbenet</td>\r\n   <td>0.1.4</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>Font-Awesome</td>\r\n   <td>Unspecified</td>\r\n   <td>SIL Open Font License 1.1</td>\r\n</tr>\r\n<tr>\r\n   <td>forever-agent</td>\r\n   <td>0.6.1</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>fork-stream</td>\r\n   <td>0.0.4</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>fstream</td>\r\n   <td>1.0.10</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>gifsicle</td>\r\n   <td>3.0.3</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>Google Maps for AngularJS</td>\r\n   <td>2.3.2</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gradle</td>\r\n   <td>Unspecified</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>grunt-contrib-compress</td>\r\n   <td>1.1.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>grunt-contrib-uglify</td>\r\n   <td>1.0.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-angular-templatecache</td>\r\n   <td>2.0.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-concat</td>\r\n   <td>2.6.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-minify-css</td>\r\n   <td>1.2.4</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-ng-annotate</td>\r\n   <td>2.0.0</td>\r\n   <td>Creative Commons Zero v1.0 Universal</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-rename</td>\r\n   <td>1.2.2</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-sass</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-svgmin</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-useref</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>gulp-util</td>\r\n   <td>3.0.7</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>har-validator</td>\r\n   <td>2.1.3</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>hawk</td>\r\n   <td>5.1.2</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>imagemin-jpegtran</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>imagemin-optipng</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>imagemin-svgo</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>inherits</td>\r\n   <td>2.0.1</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>ini</td>\r\n   <td>1.3.4</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>ionic</td>\r\n   <td>1.2.4</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>is-absolute</td>\r\n   <td>0.2.5</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>is-gif</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>is-jpg</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>is-my-json-valid</td>\r\n   <td>2.13.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>is-typedarray</td>\r\n   <td>1.0.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>isstream</td>\r\n   <td>0.1.2</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>js.merge</td>\r\n   <td>1.2.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>jshint</td>\r\n   <td>2.9.3</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>json-stringify-safe</td>\r\n   <td>5.0.1</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>lodash</td>\r\n   <td>2.4.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>lodash</td>\r\n   <td>4.5.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>lodash</td>\r\n   <td>3.7.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>lodash</td>\r\n   <td>4.6.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>meow</td>\r\n   <td>3.7.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>mime-types</td>\r\n   <td>2.0.14</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>minimatch</td>\r\n   <td>1.0.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>mkdirp</td>\r\n   <td>0.5.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>moment</td>\r\n   <td>2.12.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>nan</td>\r\n   <td>2.2.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>ng-annotate</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>ng-cordova</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>ngmap</td>\r\n   <td>1.16.8</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-archiver</td>\r\n   <td>0.20.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-bzip</td>\r\n   <td>Unspecified</td>\r\n   <td>GNU Lesser General Public License v2.1 or later</td>\r\n</tr>\r\n<tr>\r\n   <td>node-concat-stream</td>\r\n   <td>1.5.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-extend</td>\r\n   <td>3.0.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-form-data</td>\r\n   <td>0.2.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-fs-extra</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-glob</td>\r\n   <td>Unspecified</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-glob</td>\r\n   <td>7.0.4</td>\r\n   <td>BSD 2-clause \"Simplified\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-graceful-fs</td>\r\n   <td>Unspecified</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-gyp</td>\r\n   <td>3.4.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-http-signature</td>\r\n   <td>1.1.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-lru-cache</td>\r\n   <td>2.7.3</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-mv</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-optimist</td>\r\n   <td>0.3.7</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-path-array</td>\r\n   <td>1.0.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-pre-gyp-qn</td>\r\n   <td>0.6.29</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-semver</td>\r\n   <td>5.3.0</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-tar</td>\r\n   <td>Unspecified</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>node-which</td>\r\n   <td>1.2.10</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>nopt</td>\r\n   <td>3.0.6</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>npmlog</td>\r\n   <td>4.0.0</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>oauth-sign</td>\r\n   <td>0.8.2</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>OptiPNG</td>\r\n   <td>0.7.5</td>\r\n   <td>zlib License</td>\r\n</tr>\r\n<tr>\r\n   <td>os-shim</td>\r\n   <td>0.1.3</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>osenv</td>\r\n   <td>0.1.3</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>pinkie-promise</td>\r\n   <td>2.0.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>Q in javascript</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>qs</td>\r\n   <td>6.2.1</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>rc</td>\r\n   <td>1.1.6</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>readable-stream</td>\r\n   <td>2.1.4</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>request</td>\r\n   <td>2.40.1</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>rimraf</td>\r\n   <td>2.5.4</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>sax-js</td>\r\n   <td>Unspecified</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>shelljs</td>\r\n   <td>0.3.0</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>sindresorhus\'s chalk</td>\r\n   <td>1.1.3</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>source-map</td>\r\n   <td>0.4.4</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>source-map</td>\r\n   <td>0.5.6</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>spawn-sync</td>\r\n   <td>1.0.15</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>spdx-correct</td>\r\n   <td>1.0.2</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>spdx-exceptions</td>\r\n   <td>Unspecified</td>\r\n   <td>Creative Commons Attribution Share Alike 3.0</td>\r\n</tr>\r\n<tr>\r\n   <td>spdx-expression-parse</td>\r\n   <td>1.0.2</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>spdx-license-ids</td>\r\n   <td>Unspecified</td>\r\n   <td>The Unlicense</td>\r\n</tr>\r\n<tr>\r\n   <td>sprintf-js</td>\r\n   <td>Unspecified</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>StringStream</td>\r\n   <td>0.0.5</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>superhuman-node-uuid</td>\r\n   <td>1.4.9</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>tar-pack</td>\r\n   <td>3.1.4</td>\r\n   <td>BSD 2-clause \"Simplified\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>through2</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT +no-false-attribs license</td>\r\n</tr>\r\n<tr>\r\n   <td>tough-cookie</td>\r\n   <td>Unspecified</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>tough-cookie</td>\r\n   <td>2.3.1</td>\r\n   <td>BSD 3-clause \"New\" or \"Revised\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>try-thread-sleep</td>\r\n   <td>1.0.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>tunnel-agent</td>\r\n   <td>0.4.3</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>tweetnacl-js</td>\r\n   <td>0.14.3</td>\r\n   <td>Public Domain</td>\r\n</tr>\r\n<tr>\r\n   <td>uglify-to-browserify</td>\r\n   <td>1.0.2</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>UglifyJS2</td>\r\n   <td>2.7.0</td>\r\n   <td>BSD 2-clause \"Simplified\" License</td>\r\n</tr>\r\n<tr>\r\n   <td>ui-router</td>\r\n   <td>0.2.13</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>uk.co.workingedge.phonegap.<br>plugin.launchnavigator</td>\r\n   <td>2.9.9</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>validate-npm-package-license</td>\r\n   <td>3.0.1</td>\r\n   <td>Apache License 2.0</td>\r\n</tr>\r\n<tr>\r\n   <td>vinyl-fs</td>\r\n   <td>2.4.3</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>vinyl-sourcemaps-apply</td>\r\n   <td>Unspecified</td>\r\n   <td>ISC License</td>\r\n</tr>\r\n<tr>\r\n   <td>xtend</td>\r\n   <td>4.0.1</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n<tr>\r\n   <td>yargs</td>\r\n   <td>3.10.0</td>\r\n   <td>MIT License</td>\r\n</tr>\r\n</table>\r\n  \r\n</script>");
$templateCache.put("plcrc/13a/13a_basement.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 22222 11111\">\r\n\r\n    <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n    <g>\r\n        <g class=\"fil2\">\r\n            <polygon id=\"faraday\" ng-if=\"selectedRoom.name==\'Faraday lab\'\" points=\"4009 6109 2931 6109 2679 6020 1073 6019 1073 3332 4009 2899 \" />\r\n            <polygon id=\"hertz\" ng-if=\"selectedRoom.name==\'Hertz lab\'\" points=\"11303 4013 8312 4083 8312 2299 11303 1866 \" />\r\n            <polygon id=\"tesla\" ng-if=\"selectedRoom.name==\'Tesla lab\'\" points=\"11359 5991 8312 6062 8312 4070 11359 4053 \" />\r\n            <polygon id=\"volt\" ng-if=\"selectedRoom.name==\'Volt lab\'\" points=\"21042 5884 18062 5884 18069 4917 18118 1102 20912 814 \" />\r\n            <polygon id=\"kelvin\" ng-if=\"selectedRoom.name==\'Kelvin lab\'\" points=\"21071 9737 16557 9774 16512 8618 16486 6764 20982 6764 \" />\r\n            <polygon id=\"watt\" ng-if=\"selectedRoom.name==\'Watt lab\'\" points=\"14329 9737 12907 9774 12862 8618 12836 6764 14240 6764 \" />\r\n            <polygon id=\"maxwell\" ng-if=\"selectedRoom.name==\'Maxwell lab\'\" points=\"12929 9737 8500 9774 8456 8618 8430 6764 12840 6764 \" />\r\n            <polygon id=\"celsius\" ng-if=\"selectedRoom.name==\'Celsius lab\'\" points=\"7006 10291 4872 10328 4828 8618 4801 6764 6987 6764 \" />\r\n            <polygon id=\"ohm\" ng-if=\"selectedRoom.name==\'Ohm lab\'\" points=\"2659 10291 1144 10328 1099 8618 1073 7389 2661 7389 \" />\r\n            <polygon id=\"pascal\" ng-if=\"selectedRoom.name==\'Pascal lab\'\" points=\"4787 10291 2653 10328 2608 8618 2582 7889 3613 7889 3613 6861 4767 6764 \" />\r\n            <polygon id=\"newton\" ng-if=\"selectedRoom.name==\'Newton lab\'\" points=\"18140 3412 15845 3408 15842 3579 14343 3579 14343 3882 12536 3889 12534 2226 18157 1678 \" />\r\n            <polygon id=\"coulomb\" ng-if=\"selectedRoom.name==\'Coulomb lab\'\" points=\"8306 4806 7329 4792 7333 5993 5806 5993 5833 4672 4009 4672 4009 2907 8306 2208 \" />\r\n            <polygon id=\"toilet1\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"5871 6097 5187 6097 4009 6097 4009 4668 5871 4679 \" />\r\n            <polygon id=\"toilet2\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"14360 5778 12595 5778 12498 3834 14360 3846 \" />\r\n            <polygon id=\"toilet3\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"20093 6828 21022 6828 21073 5805 20093 5811 \" />\r\n            <polygon id=\"elevator1\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"8303 6085 7307 6085 7252 4762 8303 4769 \" />\r\n            <polygon id=\"elevator2\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"17153 5783 16276 5783 16228 4586 17153 4593 \" />\r\n        </g>\r\n        <g class=\"fil5 fnt1\">\r\n            <text x=\"1712\" y=\"4946\">FARADAY</text>\r\n            <text x=\"5232\" y=\"4044\">COULOMB</text>\r\n            <text x=\"9179\" y=\"3561\">HERTZ</text>\r\n            <text x=\"9205\" y=\"5485\">TESLA</text>\r\n            <text x=\"1414\" y=\"9191\">OHM</text>\r\n            <text x=\"2986\" y=\"9191\">PASCAL</text>\r\n            <text x=\"5087\" y=\"9191\">CELSIUS</text>\r\n            <text x=\"9759\" y=\"8649\">MAXWELL</text>\r\n            <text x=\"13067\" y=\"8649\">WATT</text>\r\n            <text x=\"19099\" y=\"3879\">VOLT</text>\r\n            <text x=\"15064\" y=\"3085\">NEWTON</text>\r\n            <text x=\"19467\" y=\"8678\">KELVIN</text>\r\n        </g>\r\n        <g id=\"walls\">\r\n            <polygon id=\"elevator3\" class=\"fil3\" points=\"1078 5942 2629 5942 2689 5942 2689 6001 2689 6275 2570 6275 2570 6060 1137 6060 1137 7368 2570 7368 2570 7102 2689 7102 2689 7427 2689 7487 2629 7487 1078 7487 1018 7487 1018 7427 1018 6001 1018 5942 \" />\r\n            <polygon class=\"fil3\" points=\"8244 4845 7372 4845 7372 5975 7562 5975 7562 6094 7312 6094 7252 6094 7252 6034 7252 4786 7252 4726 7312 4726 8303 4726 8363 4726 8363 4786 8363 6034 8363 6094 8303 6094 8018 6094 8018 5975 8244 5975 \" />\r\n            <polygon class=\"fil3\" points=\"16255 4538 17116 4538 17176 4538 17176 4597 17176 5730 17176 5790 17116 5790 16917 5790 16917 5671 17057 5671 17057 4657 16314 4657 16314 5671 16462 5671 16462 5790 16255 5790 16195 5790 16195 5730 16195 4597 16195 4538 \" />\r\n            <path class=\"fil3\" d=\"M14343 5182l0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502 0l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 1545-48 0 0-1545 24-15zm0 1575l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 727 0 0 30-727 0-24-15zm775 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1545 48 0 0 1545-24 15zm0-1575l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-727 0 0-30 727 0 24 15zM2669 7781l0 162-119 0 0-162 119 0zm17423-961l0 0 0-436 119 0 0 436-119 0zm0-829l0 0 0-162 119 0 0 162-119 0zm-1004 3784l0 0 0-742 119 0 0 742-119 0zm0-1145l0 0 0-1947 119 0 0 1947-119 0zm0-2450l0 0 0-350 119 0 0 350-119 0zm-12709-297l0 0 933 0 0 119-933 0 0-119zm933-865l0 0-960 0 0-119 960 0 0 119zm-1315 0l0 0-164 0 0-119 164 0 0 119zm-1947-2113l0 0 0 1750-119 0 0-1750 119 0zm-1420 3090l0 0 449 0 0 119-449 0 0-119zm852 0l0 0 509 0 0 119-509 0 0-119zm700 119l0 0-192 0 0-119 192 0 0 119zm-192 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-1400 119 0 0 1400-60 60-60-60zm0-1400l0 0 0-59 60 0-60 59zm60-59l0 0 1843 0 0 119-1843 0-60-59 60-59zm1843 0l0 0 60 0 0 59-60-59zm60 59l0 0 0 1400-119 0 0-1400 60-59 60 59zm0 1400l0 0 0 60-60 0 60-60zm-60 60l0 0-165 0 0-119 165 0 60 60-60 60zm-575 0l0 0-667 0 0-119 667 0 0 119zm1684 4215l0 0 0-3508 119 0 0 3508-119 0zm-2192 0l0 0 0-3508 119 0 0 3508-119 0zm-2200 0l0 0 0-2385 119 0 0 2385-119 0zm0-2385l0 0 0-60 60 0-60 60zm60-60l0 0 476 0 0 119-476 0-60-60 60-60zm892 0l0 0 112 0 0 119-112 0 0-119zm172 60l0 0 0 60-60 0 60-60zm-60 60l0 0-59-60 0-1123 119 0 0 1123-60 60zm-59-1183l0 0 0-59 59 0-59 59zm59-59l0 0 2047 0 0 119-2047 0-59-59 59-59zm2470 0l0 0 1222 0 0 119-1222 0 0-119zm1988 0l0 0 342 0 0 119-342 0 0-119zm9998 2984l0 0-132-2955 119-5 132 2955-119 5zm-1511 33l0 0-29-649 119-5 29 649-119 5zm-48-1073l0 0-84-1882 119-5 84 1882-119 5zm-1134 1073l0 0-132-2955 119-5 132 2955-119 5zm-1116 0l0 0-132-2955 119-5 132 2955-119 5zm-1380 0l0 0-132-2955 119-5 132 2955-119 5zm8185-2898l0 0-1105 0 0-119 1105 0 0 119zm-1534 0l0 0-1955 0 0-119 1955 0 0 119zm-2374 0l0 0-941 0 0-119 941 0 0 119zm-1364 0l0 0-674 0 0-119 674 0 0 119zm-1427 0l0 0-700 0 0-119 700 0 0 119zm-1136 0l0 0-1070 0 0-119 1070 0 0 119zm-1506 0l0 0-3310 0 0-119 3310 0 0 119zm-3369-59l0 0-1-60 60 0-59 60zm59-60l0 0 59 59 45 2955-119 1-45-2955 59-60zm12626-872l0 0-1998 0 0-119 1998 0 0 119zm-2622 0l0 0-300 0 0-119 300 0 0 119zm-300 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-99 119 0 0 99-60 60-60-60zm-3355-3792l0 0 0 638-119 0 0-638 119 0zm0 1061l0 0 0 426-119 0 0-426 119 0zm2477-1319l0 0 0 965-119 0 0-965 119 0zm0 1388l0 0 0 238-119 0 0-238 119 0zm-1407 356l0 0 0-119 119 0 0 119-119 0zm0-119l0 0 0-60 60 0-60 60zm60-60l0 0 2308 0 0 119-2308 0-60-60 60-60zm2384-1670l0 0-32 3263-119-1 32-3263 119 1zm-36 3636l0 0-4 419-119-1 4-419 119 1zm-4 419l0 0-1 59-59 0 59-59zm-59 59l0 0-1192 0 0-119 1192 0 59 60-59 59zm-1727 0l0 0-558 0 0-119 558 0 0 119zm-558 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-2206 119 0 0 2206-60 60-60-60zm60-2266l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-413 0 0-119 413 0 60 60zm-1149 60l0 0-409 0 0-119 409 0 0 119zm-469-60l0 0 0-60 59 0-59 60zm59-60l0 0 59 60 0 350-119 0 0-350 59-60zm-1796 350l0 0 1796 0 0 119-1796 0 0-119zm1796 0l0 0 60 0 0 60-60-60zm60 60l0 0 0 1856-119 0 0-1856 60-60 60 60zm0 1856l0 0 0 59-60 0 60-59zm-60 59l0 0-475 0 0-119 475 0 60 59-60 59zm-1276 0l0 0-474 0 0-119 474 0 0 119zm-474 0l0 0-58 0-1-58 59 58zm-59-58l0 0-86-3466 119-3 86 3466-59 61-59-58zm-1215-3839l0 0 0 1374-119 0 0-1374 119 0zm-3006 2120l0 0 3005-60 2 119-3005 60-2-119zm3005-60l0 0 61-1 0 60-61-59zm61 59l0 0 0 502-119 0 0-502 58-59 61 59zm0 1209l0 0 0 813-119 0 0-813 119 0zm0 813l0 0 0 60-60 0 60-60zm-60 60l0 0-3005 0 0-119 3005 0 60 60-60 60zm-3005 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-3794 119 0 0 3794-60 60-60-60zM952 3363l0-101 101-16-100 117zm100-117l0 0 137 117 18 6965-237 0-18-6965 100-117zm37 7201l0 0-118 0 0-119 119 119zm-119-119l0 0 119-119 7386 0 0 238-7386 0-119-119zm7623-3l0 0 4 122-122 0 119-122zm-119 122l0 0-119-116-16-553 237-7 16 553-119 122zm-134-669l0 0-3-122 122 0-119 122zm119-122l0 0 12681 0 0 238-12681 0-119-116 119-122zm12799 116l0 0 3 122-122 0 119-122zm-119 122l0 0-119-116-226-8960 237-6 226 8960-119 122zm-239-9198l0 0 128-14 3 129-132-115zm132 115l0 0-106 121-2756 304-26-236 2756-304 132 115zm-2994 307l0 0 0-106 106-12-106 118zm106-118l0 0 132 118 0 557-238 0 0-557 106-118zm132 675l0 0 0 107-107 11 107-118zm-107 118l0 0-5661 589-24-236 5661-589 131 118-107 118zm-5661 589l0 0-131 14 0-132 131 118zm-131-118l0 0 0-518 238 0 0 518-107 118-131-118zm106-636l0 0 132-16 0 134-132-118zm132 118l0 0-106 118-4386 518-27-236 4386-518 132 118zm-4524 400l0 0 5-1 5-1-10 2zm5-1l0 0 32 235-7039 1100-36-234 7039-1100 5-1zM6962 7637l0-15 47 0-47 15zm47-15l0 0 47 15 0 258-94 0 0-258 47-15zm0 287l0 0-47 0 0-15 47 15zm-47-15l0 0 47-15 1423 0 0 30-1423 0-47-15zm1517 0l0 0 0 15-47 0 47-15zm-47 15l0 0-47-15 0-258 94 0 0 258-47 15zm0-287l0 0 47 0 0 15-47-15zm47 15l0 0-47 15-1423 0 0-30 1423 0 47 15zm-1517 258l0 0 0-15 47 0-47 15zm47-15l0 0 47 15 0 258-94 0 0-258 47-15zm0 287l0 0-47 0 0-15 47 15zm-47-15l0 0 47-15 1423 0 0 30-1423 0-47-15zm1517 0l0 0 0 15-47 0 47-15zm-47 15l0 0-47-15 0-258 94 0 0 258-47 15zm0-287l0 0 47 0 0 15-47-15zm47 15l0 0-47 15-1423 0 0-30 1423 0 47 15zm-1517 258l0 0 0-15 47 0-47 15zm47-15l0 0 47 15 0 258-94 0 0-258 47-15zm0 287l0 0-47 0 0-15 47 15zm-47-15l0 0 47-15 1423 0 0 30-1423 0-47-15zm1517 0l0 0 0 15-47 0 47-15zm-47 15l0 0-47-15 0-258 94 0 0 258-47 15zm0-287l0 0 47 0 0 15-47-15zm47 15l0 0-47 15-1423 0 0-30 1423 0 47 15zm-1517 258l0 0 0-15 47 0-47 15zm47-15l0 0 47 15 0 258-94 0 0-258 47-15zm0 287l0 0-47 0 0-15 47 15zm-47-15l0 0 47-15 1423 0 0 30-1423 0-47-15zm1517 0l0 0 0 15-47 0 47-15zm-47 15l0 0-47-15 0-258 94 0 0 258-47 15zm0-287l0 0 47 0 0 15-47-15zm47 15l0 0-47 15-1423 0 0-30 1423 0 47 15zm-1517 258l0 0 0-15 47 0-47 15zm47-15l0 0 47 15 0 258-94 0 0-258 47-15zm0 287l0 0-47 0 0-15 47 15zm-47-15l0 0 47-15 1423 0 0 30-1423 0-47-15zm1517 0l0 0 0 15-47 0 47-15zm-47 15l0 0-47-15 0-258 94 0 0 258-47 15zm0-287l0 0 47 0 0 15-47-15zm47 15l0 0-47 15-1423 0 0-30 1423 0 47 15zm-1517 258l0 0 0-15 47 0-47 15zm47-15l0 0 47 15 0 258-94 0 0-258 47-15zm0 287l0 0-47 0 0-15 47 15zm-47-15l0 0 47-15 1423 0 0 30-1423 0-47-15zm1517 0l0 0 0 15-47 0 47-15zm-47 15l0 0-47-15 0-258 94 0 0 258-47 15zm0-287l0 0 47 0 0 15-47-15zm47 15l0 0-47 15-1423 0 0-30 1423 0 47 15z\" />\r\n        </g>\r\n        <use transform=\"translate(8632.2158,-130.29071)\" xlink:href=\"#elevator\" />\r\n        <use transform=\"translate(-264.16529,109.60589)\" xlink:href=\"#elevator\" />\r\n        <use transform=\"translate(-112.65165,-1153.0078)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(417.64611,3556.5413)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-3797.4654,-1910.576)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-6109.0383,3556.5413)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-9072.8384,3556.5211)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-13768.981,4074.2857)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-15929.564,4074.2857)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-17801.263,4074.2857)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-17160.36,-122.66213)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-13515.952,-967.10651)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-9849.3406,-1455.995)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-9849.3406,466.22635)\" xlink:href=\"#lab\" />\r\n        <use transform=\"translate(-433.27247,59.159916)\" xlink:href=\"#toilet\" />\r\n        <use transform=\"translate(8122.2759,-507.50667)\" xlink:href=\"#toilet\" />\r\n        <use transform=\"translate(15211.111,1025.8261)\" xlink:href=\"#toilet\" />\r\n        <use transform=\"translate(-7073.8376,317.64009)\" xlink:href=\"#storage\" />\r\n        <g class=\"fil6\" ng-if=\"evacuationActive\">\r\n            <g transform=\"translate(3500,6700)\">\r\n                <use transform=\"matrix(1,0,0,-1,-650,700)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,1,0,0,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,1,0,1500,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,1,0,3000,0)\" xlink:href=\"#arrow\" />\r\n            </g>\r\n            <g transform=\"translate(16000,6500)\">\r\n                <use transform=\"matrix(1,0,0,-1,-1500,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(1,0,0,-1,-1500,-1500)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,-1,0,3000,0)\" xlink:href=\"#arrow\" />\r\n            </g>\r\n            <g transform=\"translate(8800,6700)\">\r\n                <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(0,-1,-1,0,3000,0)\" xlink:href=\"#arrow\" />\r\n            </g>\r\n            <g transform=\"translate(7400,7000)\">\r\n                <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\" />\r\n            </g>\r\n            <g transform=\"translate(11700,3500)\">\r\n                <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\" />\r\n                <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\" />\r\n            </g>\r\n        </g>\r\n    </g>\r\n</svg>");
$templateCache.put("plcrc/13a/13a_fifth.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 22222 11111\">\r\n    <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n    <g class=\"fil2\">\r\n        <polygon id=\"giewont\" ng-if=\"selectedRoom.name==\'Giewont\'\" points=\"16016 8278 10408 8278 10408 7001 8210 7001 8209 5112 8317 5112 8274 4773 14082 4119 14301 5931 14750 5931 14750 7040 16020 7040\" />\r\n        <polygon id=\"elevator1\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"8209 6266 7431 6259 7414 5110 8201 5134\" />\r\n        <polygon id=\"elevator2\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"7414,5110 8201,5134 8209,6266 7431,6259 \" transform=\"matrix(1.159028,0,0,0.66096501,7443.3044,1479.6143)\" />\r\n        <polygon id=\"toilet\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"17803 8278 17803 7083 19019 7083 19026 6502 20373 6502 20373 7036 21046 7036 21065 8278\" />\r\n        <text y=\"6287\" x=\"11378\" class=\"fil5 fnt2\">GIEWONT</text>\r\n    </g>\r\n    <g id=\"roof\">\r\n        <line y2=\"2478\" x2=\"20966\" y1=\"1370\" x1=\"20669\" class=\"fil4 str5\" />\r\n        <line y2=\"6092\" x2=\"20714\" y1=\"1501\" x1=\"19484\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"20481\" y1=\"8278\" x1=\"20079\" class=\"fil4 str5\" />\r\n        <line y2=\"6502\" x2=\"19603\" y1=\"1631\" x1=\"18298\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"19260\" y1=\"8278\" x1=\"18859\" class=\"fil4 str5\" />\r\n        <line y2=\"6502\" x2=\"18383\" y1=\"5054\" x1=\"17995\" class=\"fil4 str5\" />\r\n        <line y2=\"3718\" x2=\"17637\" y1=\"2251\" x1=\"17244\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"18040\" y1=\"8278\" x1=\"17638\" class=\"fil4 str5\" />\r\n        <line y2=\"3852\" x2=\"16452\" y1=\"2384\" x1=\"16059\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"16819\" y1=\"8278\" x1=\"16417\" class=\"fil4 str5\" />\r\n        <line y2=\"3985\" x2=\"15267\" y1=\"2517\" x1=\"14874\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"15598\" y1=\"8278\" x1=\"15197\" class=\"fil4 str5\" />\r\n        <line y2=\"4119\" x2=\"14082\" y1=\"2649\" x1=\"13689\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"14378\" y1=\"8278\" x1=\"13976\" class=\"fil4 str5\" />\r\n        <line y2=\"4252\" x2=\"12897\" y1=\"2782\" x1=\"12503\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"13157\" y1=\"8278\" x1=\"12755\" class=\"fil4 str5\" />\r\n        <line y2=\"4385\" x2=\"11712\" y1=\"2915\" x1=\"11318\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"11936\" y1=\"8278\" x1=\"11535\" class=\"fil4 str5\" />\r\n        <line y2=\"4519\" x2=\"10528\" y1=\"3047\" x1=\"10133\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"10716\" y1=\"8278\" x1=\"10314\" class=\"fil4 str5\" />\r\n        <line y2=\"4652\" x2=\"9343\" y1=\"3180\" x1=\"8948\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"9495\" y1=\"8278\" x1=\"9094\" class=\"fil4 str5\" />\r\n        <line y2=\"4786\" x2=\"8158\" y1=\"2919\" x1=\"7658\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"8275\" y1=\"8278\" x1=\"7873\" class=\"fil4 str5\" />\r\n        <line y2=\"4919\" x2=\"6973\" y1=\"3106\" x1=\"6487\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"7202\" y1=\"3294\" x1=\"5317\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"5981\" y1=\"3481\" x1=\"4146\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"4761\" y1=\"3669\" x1=\"2976\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"3540\" y1=\"4648\" x1=\"2018\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"2319\" y1=\"9204\" x1=\"2018\" class=\"fil4 str5\" />\r\n        <line y2=\"5101\" x2=\"21033\" y1=\"1438\" x1=\"20051\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"21065\" y1=\"8278\" x1=\"20663\" class=\"fil4 str5\" />\r\n        <line y2=\"6502\" x2=\"20187\" y1=\"1569\" x1=\"18865\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"19844\" y1=\"8278\" x1=\"19443\" class=\"fil4 str5\" />\r\n        <line y2=\"6502\" x2=\"18967\" y1=\"2188\" x1=\"17811\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"18624\" y1=\"8278\" x1=\"18222\" class=\"fil4 str5\" />\r\n        <line y2=\"3788\" x2=\"17019\" y1=\"2320\" x1=\"16626\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"17403\" y1=\"8278\" x1=\"17001\" class=\"fil4 str5\" />\r\n        <line y2=\"3921\" x2=\"15834\" y1=\"2453\" x1=\"15441\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"16182\" y1=\"8278\" x1=\"15781\" class=\"fil4 str5\" />\r\n        <line y2=\"4055\" x2=\"14649\" y1=\"2586\" x1=\"14255\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"14962\" y1=\"8278\" x1=\"14560\" class=\"fil4 str5\" />\r\n        <line y2=\"4188\" x2=\"13464\" y1=\"2719\" x1=\"13070\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"13741\" y1=\"8278\" x1=\"13339\" class=\"fil4 str5\" />\r\n        <line y2=\"4322\" x2=\"12279\" y1=\"2851\" x1=\"11885\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"12520\" y1=\"8278\" x1=\"12119\" class=\"fil4 str5\" />\r\n        <line y2=\"4455\" x2=\"11094\" y1=\"2984\" x1=\"10700\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"11300\" y1=\"8278\" x1=\"10898\" class=\"fil4 str5\" />\r\n        <line y2=\"4589\" x2=\"9910\" y1=\"3117\" x1=\"9515\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"10079\" y1=\"8278\" x1=\"9678\" class=\"fil4 str5\" />\r\n        <line y2=\"4722\" x2=\"8725\" y1=\"3249\" x1=\"8330\" class=\"fil4 str5\" />\r\n        <line y2=\"9777\" x2=\"8859\" y1=\"8278\" x1=\"8457\" class=\"fil4 str5\" />\r\n        <line y2=\"4856\" x2=\"7540\" y1=\"3017\" x1=\"7047\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"7786\" y1=\"8278\" x1=\"7236\" class=\"fil4 str5\" />\r\n        <line y2=\"7304\" x2=\"6975\" y1=\"3204\" x1=\"5877\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"6565\" y1=\"3392\" x1=\"4706\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"5345\" y1=\"3579\" x1=\"3536\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"4124\" y1=\"3767\" x1=\"2366\" class=\"fil4 str5\" />\r\n        <line y2=\"10329\" x2=\"2903\" y1=\"6424\" x1=\"1857\" class=\"fil4 str5\" />\r\n        <line y2=\"5683\" x2=\"17614\" y1=\"5683\" x1=\"17995\" class=\"fil4 str6\" />\r\n        <line y2=\"5683\" x2=\"16964\" y1=\"5683\" x1=\"17250\" class=\"fil4 str6\" />\r\n        <line y2=\"5683\" x2=\"15999\" y1=\"5683\" x1=\"16284\" class=\"fil4 str6\" />\r\n    </g>\r\n    <path id=\"staircase1\" class=\"fil3\" d=\"m8489 7001h15v20l-15-20zm15 20l-15 20h-257v-41h257l15 20zm-287 0v-20h15l-15 20zm15-20l15 20v1236h-30v-1236l15-20zm0 1277h-15v-20l15 20zm-15-20l15-20h257v41h-257l-15-20zm287 0v20h-15l15-20zm-15 20l-15-20v-1236h30v1236l-15 20zm257-1277h15v20l-15-20zm15 20l-15 20h-257v-41h257l15 20zm-287 0v-20h15l-15 20zm15-20l15 20v1236h-30v-1236l15-20zm0 1277h-15v-20l15 20zm-15-20l15-20h257v41h-257l-15-20zm287 0v20h-15l15-20zm-15 20l-15-20v-1236h30v1236l-15 20zm257-1277h15v20l-15-20zm15 20l-15 21h-257v-41h257l15 20zm-287 0v-20h15l-15 20zm15-20l15 20v1236h-30v-1236l15-20zm0 1277h-15v-20l15 20zm-15-20l15-20h257v41h-257l-15-20zm287 0v20h-15l15-20zm-15 20l-15-20v-1236h30v1236l-15 20zm257-1277h15v20l-15-20zm15 20l-15 21h-257v-41h257l15 20zm-287 0v-20h15l-15 20zm15-20l15 20v1236h-30v-1236l15-20zm0 1277h-15v-20l15 20zm-15-20l15-20h257v41h-257l-15-20zm287 0v20h-15l15-20zm-15 20l-15-20v-1236h30v1236l-15 20zm257-1277h15v20l-15-20zm15 20l-15 20h-257v-41h257l15 20zm-287 0v-20h15l-15 20zm15-20l15 20v1236h-30v-1236l15-20zm0 1277h-15v-20l15 20zm-15-20l15-20h257v41h-257l-15-20zm287 0v20h-15l15-20zm-15 20l-15-20v-1236h30v1236l-15 20zm257-1277h15v20l-15-20zm15 20l-15 20h-257v-41h257l15 20zm-287 0v-20h15l-15 20zm15-20l15 20v1236h-30v-1236l15-20zm0 1277h-15v-20l15 20zm-15-20l15-20h257v41h-257l-15-20zm287 0v20h-15l15-20zm-15 20l-15-20v-1236h30v1236l-15 20zm0-1277h15v20l-15-20zm15 20l-15 20h-1542v-41h1542l15 20zm-1571 0v-20h15l-15 20zm15-20l15 20v618h-30v-618l15-20zm0 659h-15v-20l15 20zm-15-20l15-20h1542v41h-1542l-15-20zm1571 0v20h-15l15-20zm-15 20l-15-20v-618h30v618l-15 20z\" />\r\n    <path id=\"staircase2\" class=\"fil3\" d=\"m15377 4453l2 15-15 2 13-16zm-13 16l-16-13-29-255 29-3 29 255-13 16zm-33-285l15-2 2 15-16-13zm16 13l-13 16-890 102-3-29 890-102 16 13zm-920 106l-2-15 15-2-13 16zm13-16l16 13 29 255-30 3-29-255 13-16zm33 285l-15 2-2-15 16 13zm-16-13l13-16 890-102 3 29-890 102-16-13zm949 150l2 15-15 2 13-16zm-13 16l-16-13-29-255 29-3 29 255-13 16zm-33-285l15-2 2 15-16-13zm16 13l-13 16-890 102-3-30 890-102 16 13zm-920 106l-2-15 15-2-13 16zm13-16l16 13 29 255-29 3-29-255 13-16zm33 285l-15 2-2-15 16 13zm-16-13l13-16 890-102 3 29-890 102-16-13zm949 150l2 15-15 2 13-16zm-13 16l-16-13-29-255 29-3 29 255-13 16zm-33-285l15-2 2 15-16-13zm16 13l-13 16-890 102-3-29 890-102 16 13zm-920 106l-2-15 15-2-13 16zm13-16l16 13 29 255-29 3-29-255 13-16zm33 285l-15 2-2-15 16 13zm-16-13l13-16 890-102 3 29-890 102-16-13zm949 150l2 15-15 2 13-16zm-13 16l-16-13-29-255 30-3 29 255-13 16zm-33-285l15-2 2 15-16-13zm16 13l-13 16-890 102-3-29 890-102 16 13zm-920 106l-2-15 15-2-13 16zm13-16l16 13 29 255-29 3-29-255 13-16zm33 285l-15 2-2-15 16 13zm-16-13l13-16 890-102 3 29-890 102-16-13zm949 150l2 15-15 2 13-16zm-13 16l-16-13-29-255 29-3 29 255-13 16zm-33-285l15-2 2 15-16-13zm16 13l-13 16-890 102-3-29 890-102 16 13zm-920 106l-2-15 15-2-13 16zm13-16l16 13 29 255-30 3-29-255 13-16zm33 285l-15 2-2-15 16 13zm-16-13l13-16 890-102 3 30-890 102-16-13zm16 13l-3-30 890-102 3 30-890 102zm887-132l3 30-890 102-3-30 890-102zm-442 81l-15 2-2-15 16 13zm-16-13l13-16 445-51 3 29-445 51-16-13zm475-55l2 15-15 2 13-16zm-13 16l-16-13-147-1276 29-3 147 1276-13 16zm-150-1306l15-2 2 15-16-13zm16 13l-13 16-445 51-3-29 445-51 16 13zm-475 55l-2-15 15-2-13 16zm13-16l16 13 147 1276-29 3-147-1276 13-16z\" />\r\n    <g id=\"walls\">\r\n        <polyline points=\"16964 4844 16964 5683 16765 5683\" class=\"fil4 str6\" />\r\n        <line y2=\"4844\" x2=\"17995\" y1=\"4844\" x1=\"15999\" class=\"fil4 str6\" />\r\n        <polyline points=\"15999 6379 15999 4844 15736 4844 15645 3942\" class=\"fil4 str6\" />\r\n        <polyline points=\"14729 6955 14729 7040 15999 7040 15999 6955\" class=\"fil4 str6\" />\r\n        <polyline points=\"14087 4118 14301 5931 14729 5931 14729 6385\" class=\"fil4 str6\" />\r\n        <line y2=\"6502\" x2=\"19040\" y1=\"6633\" x1=\"19040\" class=\"fil4 str6\" />\r\n        <line y2=\"6978\" x2=\"19040\" y1=\"7109\" x1=\"19040\" class=\"fil4 str6\" />\r\n        <polyline points=\"21058 6092 20373 6092 20373 6502 18006 6502 18006 6633\" class=\"fil4 str6\" />\r\n        <line y2=\"6978\" x2=\"18006\" y1=\"7109\" x1=\"18006\" class=\"fil4 str6\" />\r\n        <polyline points=\"18710 7109 19418 7109 19663 7448 19663 8278\" class=\"fil4 str6\" />\r\n        <polyline points=\"17803 8278 17803 7109 18280 7109\" class=\"fil4 str6\" />\r\n        <line y2=\"7001\" x2=\"7139\" y1=\"6898\" x1=\"7139\" class=\"fil4 str6\" />\r\n        <line y2=\"6446\" x2=\"7139\" y1=\"6343\" x1=\"7139\" class=\"fil4 str6\" />\r\n        <polyline points=\"7908 7001 10408 7001 10408 8278\" class=\"fil4 str6\" />\r\n        <polyline points=\"7118 7304 7118 7001 7301 7001\" class=\"fil4 str6\" />\r\n        <line y2=\"7911\" x2=\"7118\" y1=\"8278\" x1=\"7118\" class=\"fil4 str6\" />\r\n        <polyline points=\"8209 5112 8317 5112 8274 4773\" class=\"fil4 str6\" />\r\n        <polyline points=\"6932 4924 7139 6343 7431 6343 7431 5112 8209 5112 8209 6241 7995 6241\" class=\"fil4 str6\" />\r\n        <polyline points=\"21113 8278 6735 8278 6735 8707 3837 8707 3837 5072 6746 4605 6794 4940 17923 3686 17995 4421 17995 5993\" class=\"fil4 str6\" />\r\n        <polyline points=\"20373 6502 20373 7036 21081 7036\" class=\"fil4 str6\" />\r\n        <path class=\"fil3\" d=\"m8285 10326l3 122h-122l118-122zm-118 122h-6149v-237h6149l118 115-118 122zm-6149 0h-119v-118l119 118zm-119-118v-3075h237v3075l-119 118-119-118zm118-3194l120-1v120l-120-118zm120 118l-118 118-366 4-2-237 366-4 120 118zm-484 122l-119 1v-120l119 118zm-119-118v-836h237v836l-117 118-119-118zm0-836v-120l120 1-120 118zm120-118l366 4-3 237-366-4-117-118 120-118zm483 123v120l-120-1 120-118zm-120 118l-117-118v-2603h237v2603l-120 118zm-117-2721v-101l100-16-100 117zm100-117l5880-942 37 234-5880 942-137-117 100-117zm5880-942l121-19 15 122-136-103zm136 103l51 412-236 29-51-412 99-131 136 103zm-54 544l-116 13-14-116 131 103zm-131-103l105-132 10305-1154 26 236-10305 1154-131-103zm10541-1184l16 120-120 13 104-133zm-104 133l-130-102-66-495 235-31 66 495-104 133zm-196-597l-16-120 120-13-104 133zm104-133l2749-303 26 236-2749 303-130-102 104-133zm2749-303l128-14 3 129-131-115zm131 115l213 8437-237 6-213-8436 105-121 131 115zm213 8437l3 122h-121l118-122zm-118 122h-5518v-237h5518l118 116-118 122zm-5518 0h-7482v-237h7482v237zm-7600-115l-3-122h122l-118 122zm118-122l118 115 16 552-237 7-16-552 118-122z\" />\r\n    </g>\r\n    <g transform=\"translate(-224.54694,342.04801)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(8451.7345,-22.911862)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(13290.91,2424.2184)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(15008.098,2412.6078)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n\r\n    <g class=\"fil6\" ng-if=\"evacuationActive\">\r\n        <g transform=\"translate(7400,6700)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,1,0,0,1000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,1,0,1500,1000)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(14600,5300)\">\r\n            <use transform=\"matrix(1,0,-0.2,-1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,-0.2,-1,230,1300)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,-1,0,1500,1000)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/13a/13a_first.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 22222 11111\">\r\n\r\n    <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n    <g class=\"fil2\">\r\n        <polygon id=\"atexpo\" ng-if=\"selectedRoom.name==\'AT Expocorner lab\'\" points=\"14427 9755 13179 9755 13179 6703 14463 6703 14597 9733 \" />\r\n        <polygon id=\"ptexpo\" ng-if=\"selectedRoom.name==\'PT Expocorner lab\'\" points=\"20872 9755 16795 9755 16656 6703 20984 6703 21102 7507 21129 9733 \" />\r\n        <polygon id=\"bronowice\" ng-if=\"selectedRoom.name==\'Bronowice\'\" points=\"6619 7957 4314 7957 4314 6568 6619 6568 \" />\r\n        <polygon id=\"kazimierz\" ng-if=\"selectedRoom.name==\'Kazimierz\'\" points=\"11473 9755 8673 9755 8673 6703 11459 6703 11459 7494 11703 7507 11730 9733 \" />\r\n        <polygon id=\"czochralski\" ng-if=\"selectedRoom.name==\'Czochralski lab\'\" points=\"18097 6704 18100 5686 18352 5618 18366 4049 17478 4049 17449 4239 16074 4259 16074 2797 16748 2797 16748 1238 20882 833 21076 6708 \" />\r\n        <polygon id=\"elevator1\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"8567 5960 7571 5960 7516 4637 8567 4644 \" />\r\n        <polygon id=\"elevator2\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"17462 5653 16062 5653 16044 4236 17462 4244 \" />\r\n        <polygon id=\"toilet1\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"6206 5984 4516 5984 4461 4646 6206 4654 \" />\r\n        <polygon id=\"toilet2\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"13980 5618 12761 5618 12715 3701 13966 3709 \" />\r\n        <polygon id=\"toilet3\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"13184 7510 12333 7510 12336 6711 13184 6715 \" />\r\n        <polygon id=\"toilet4\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"15708 7351 14463 7351 14447 6690 15615 6694 \" />\r\n        <text x=\"4472\" y=\"7390\" class=\"fil5 fnt2\">BRONOWICE</text>\r\n        <text x=\"9332\" y=\"8319\" class=\"fil5 fnt2\">KAZIMIERZ</text>\r\n        <text x=\"18547\" y=\"4983\" class=\"fil5 fnt2\">CZOCHRALSKI</text>\r\n        <text x=\"17644\" y=\"8476\" class=\"fil5 fnt2\">PT EXPOCORNER</text>\r\n        <text x=\"13687\" y=\"8309\" class=\"fil5 fnt5\">AT</text>\r\n        <text x=\"13440\" y=\"8589\" class=\"fil5 fnt5\">EXPO</text>\r\n        <text x=\"13278\" y=\"8868\" class=\"fil5 fnt5\">CORNER</text>\r\n    </g>\r\n    <path class=\"fil3\" d=\"M14567 5203l0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1458 0 0 30-1458 0-24-15zm1507 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1458 0 0-30 1458 0 24 15zm-1507-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1458 0 0 30-1458 0-24-15zm1507 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1458 0 0-30 1458 0 24 15zm-1507-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1458 0 0 30-1458 0-24-15zm1507 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1458 0 0-30 1458 0 24 15zm-1507-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1458 0 0 30-1458 0-24-15zm1507 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1458 0 0-30 1458 0 24 15zm-1507-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1458 0 0 30-1458 0-24-15zm1507 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1458 0 0-30 1458 0 24 15zm-1507-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1458 0 0 30-1458 0-24-15zm1507 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1458 0 0-30 1458 0 24 15zm-1507 0l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 1545-48 0 0-1545 24-15zm0 1575l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 729 0 0 30-729 0-24-15zm777 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1545 48 0 0 1545-24 15zm0-1575l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-729 0 0-30 729 0 24 15zM11474 4251l663 0 0 119-663 0 0-119zm856 3239l0 0 0-179 119 0 0 179-119 0zm0-494l0 0 0-296 119 0 0 296-119 0zm-6495-316l0 0-1522 0 0-119 1522 0 0 119zm-1581-59l0 0 0-59 60 0-60 59zm60-59l0 0 60 59 0 1356-119 0 0-1356 60-59zm0 1475l0 0-60 0 0-60 60 60zm-60-60l0 0 60-60 2305 0 0 119-2305 0-60-60zm2424 0l0 0 0 60-59 0 59-60zm-59 60l0 0-60-60 0-1356 119 0 0 1356-59 60zm0-1475l0 0 59 0 0 60-59-60zm59 60l0 0-59 60-386 0 0-119 386 0 59 60zm53 1415l0 0-2523 0 0-119 2523 0 0 119zm-1327 2299l0 0 0-2359 119 0 0 2359-119 0zm-2301-2350l0 0 0-106 119 0 0 106-119 0zm0-453l0 0 0-81 119 0 0 81-119 0zm0-81l0 0 0-60 60 0-60 60zm60-60l0 0 511 0 0 119-511 0-60-59 60-60zm571 60l0 0 0 59-60 0 60-59zm-60 59l0 0-59-59 0-1571 119 0 0 1571-60 59zm-415 534l0 0-1300 0 0-119 1300 0 0 119zm796-2957l0 0-559 0 0-119 559 0 0 119zm3337 875l0 0-700 0 0-119 700 0 0 119zm9429-4685l0 0 0 1519-119 0 0-1519 119 0zm-3683 6272l0 0-881 0 0-119 881 0 0 119zm-1285 4l0 0-122 0 0-119 122 0 0 119zm-374-879l0 0 0 298-119 0 0-298 119 0zm-3952 242l0 0-323 0 0-119 323 0 0 119zm-382-59l0 0 0-59 60 0-60 59zm60-59l0 0 60 59 0 3479-119 0 0-3479 60-59zm-3508 3538l0 0 0-2359 119 0 0 2359-119 0zm4601-3534l0 0 344 0 0 119-344 0 0-119zm8486 2983l0 0-51-1186 119-5 51 1186-119 5zm-67-1570l0 0-65-1512 119-5 65 1512-119 5zm-3605 1567l0 0 2-3082 119 0-2 3082-119 0zm1374 2l0 0-54-1264 119-5 54 1264-119 5zm-70-1624l0 0-64-1458 119-5 64 1458-119 5zm-64-1458l0 0-3-62 62 0-59 62zm59-62l0 0 68 0 0 119-68 0-59-57 59-62zm128 58l0 0 1 61-61 0 59-61zm-59 61l0 0-59-58-6-302 119-2 6 302-59 61zm-3014 600l0 0 0 134-119 0 0-134 119 0zm-60 194l0 0-59 0 0-60 59 60zm-59-60l0 0 59-60 326 0 0 119-326 0-59-60zm385-60l0 0 59 0 0 60-59-60zm59 60l0 0-7 2288-119 0 7-2288 59-60 59 60zm9270-735l0 0-4621 0 0-119 4621 0 0 119zm-5374 422l0 0 20 122-117 19-20-122 117-19zm20 122l0 0 11 67-69 1 57-69zm-57 69l0 0-637 13-2-119 637-13 60 50-57 69zm81 399l0 0 22 117-117 21-22-117 117-21zm22 117l0 0 13 68-69 2 57-70zm-57 70l0 0-621 22-4-119 621-22 60 49-57 70zm-621 22l0 0-55 2-6-55 61 53zm-61-53l0 0-61-595 118-12 61 595-57 65-61-53zm-5-660l0 0 56-3 6 56-62-53zm62 53l0 0-56 65-574 30-6-119 574-30 62 53zm762-560l0 0-3620 0 0-119 3620 0 0 119zm-4033 0l0 0-783 0 0-119 783 0 0 119zm-752 0l0 0-2408 0 0-119 2408 0 0 119zm-2467-59l0 0-1-60 60 0-59 60zm59-60l0 0 59 59 45 3082-119 1-45-3082 59-60zm8838-2660l0 0 888 0 0 119-888 0 0-119zm-1480-1065l0 0 0-119 119 0 0 119-119 0zm0-119l0 0 0-60 60 0-60 60zm60-60l0 0 1651 0 0 119-1651 0-60-60 60-60zm1994 0l0 0 507 0 0 119-507 0 0-119zm881 0l0 0 2057 0 0 119-2057 0 0-119zm-836 3229l0 0 0-340 119 0 0 340-119 0zm0-340l0 0 0-59 60 0-60 60zm60-60l0 0 197 0 0 119-197 0-60-60 60-60zm256 60l0 0 0 59-59 0 59-59zm-59 59l0 0-59-60 12-1713 119 0-12 1713-59 59zm-45-2197l0 0 16-2387 119 0-16 2387-119 0zm-799-692l0 0 0 145-119 0 0-145 119 0zm0 547l0 0 0 2267-119 0 0-2267 119 0zm0 2267l0 0 0 60-60 0 60-60zm-60 60l0 0-298 0 0-119 298 0 60 60-60 60zm-1391-1480l0 0 1391 0 0 119-1391 0 0-119zm558 1480l0 0-558 0 0-119 558 0 0 119zm-558 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-2079 119 0 0 2079-60 60-60-60zm-1381-2079l0 0 0 200-119 0 0-200 119 0zm-1893 1124l0 0-27-1105 119-3 27 1105-119 3zm-37-1515l0 0-34-1409 119-3 34 1409-119 3zm167 1973l0 0 13 497-119 3-13-497 119-3zm-46 558l0 0-58 0-2-58 59 58zm-59-58l0 0 59-61 767 0 0 119-767 0-59-58zm827-61l0 0 524 0 0 119-524 0 0-119zm831 348l0 0 0-288 119 0 0 288-119 0zm0-288l0 0 0-60 60 0-60 60zm60-60l0 0 93 0 0 119-93 0-60-60 60-60zm152 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1880 119 0 0 1880-60 60zm0-1999l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-600 0 0-119 600 0 60 60zm-719 1880l0 0 0-1880 119 0 0 1880-119 0zm59-1939l0 0 59 0 0 60-59-60zm59 60l0 0-59 60-1197 0 0-119 1197 0 59 60zm-2603 730l0 0 0-2561 119 0 0 2561-119 0zm178 497l0 0 0 957-119 0 0-957 119 0zm0 957l0 0 0 60-60 0 60-60zm-60 60l0 0-3005 0 0-119 3005 0 60 60-60 60zm-3005 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-3667 119 0 0 3667-60 60-60-60zm9739 492l0 0 0 298-119 0 0-298 119 0zm144-721l0 0-298 0 0-119 298 0 0 119zm-2235-2889l0 0 0 734-119 0 0-734 119 0zm-1833-250l0 0 0-974 119 0 0 974-119 0zm1773 1044l0 0-1700 0 0-119 1700 0 0 119zm-1700 0l0 0-60 0 0-59 60 59zm-60-59l0 0 0-537 119 0 0 537-60 59-60-59zm-2124-466l0 0-700 0 0-119 700 0 0 119zm4390 2546l0 0 0 298-119 0 0-298 119 0zm0 792l0 0 0 298-119 0 0-298 119 0zm-4971-488l0 0 0 149-119 0 0-149 119 0zm0 488l0 0 0 298-119 0 0-298 119 0zm-8156-503l0 0 0-416 119 0 0 416-119 0zm0-767l0 0 0-2141 119 0 0 2141-119 0zm1737 738l0 0 347 0 0 119-347 0 0-119zm735 0l0 0 277 0 0 119-277 0 0-119zm337 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1255 119 0 0 1255-60 60zm0-1374l0 0 60 0 0 59-60-59zm60 59l0 0-60 59-1719 0 0-119 1719 0 60 59zm-1838 0l0 0 0-59 60 0-60 59zm60-59l0 0 60 59 0 1255-119 0 0-1255 60-59zm0 1374l0 0-60 0 0-60 60 60zm-60-60l0 0 60-60 301 0 0 119-301 0-60-60zm1891 60l0 0-187 0 0-119 187 0 0 119zm-651-3324l0 0 0 2010-119 0 0-2010 119 0zm-1679 3275l0 0-2009 0 0-119 2009 0 0 119zm3296 688l0 0 0 240-119 0 0-240 119 0zm12089 3154l0 0 0-1089 119 0 0 1089-119 0zM8593 10332l3 122-122 0 119-122zm-119 122l0 0-6515 0 0-237 6515 0 119 115-119 122zm-6515 0l0 0-119 0 0-119 119 119zm-119-119l0 0 0-3083 238 0 0 3083-119 119-119-119zm118-3202l0 0 120-1 0 120-120-119zm120 119l0 0-118 119-367 4-2-237 367-4 120 119zm-485 122l0 0-120 1 0-120 120 119zm-120-119l0 0 0-1380 237 0 0 1380-118 119-120-119zm0-1380l0 0 0-120 120 1-120 119zm120-119l0 0 367 4-3 237-367-4-117-119 120-119zm484 123l0 0 0 120-120-1 120-119zm-120 119l0 0-118-119 0-2649 238 0 0 2649-120 119zm-118-2768l0 0 0-101 101-16-101 117zm101-117l0 0 6150-961 36 234-6150 961-137-117 101-117zm6150-961l0 0 5-1 5-1-10 2zm5-1l0 0 4386-518 27 236-4386 518-32-235 5-1zm4386-518l0 0 0 0-8 1 7-1zm0 0l0 0 5661-628 26 236-5661 628-26-236 0 0zm5661-628l0 0 2756-304 26 236-2756 304-26-236zm2756-304l0 0 128-14 3 129-132-115zm132 115l0 0 226 8960-237 6-226-8960 106-121 132 115zm226 8960l0 0 3 122-122 0 119-122zm-119 122l0 0-5532 0 0-238 5532 0 119 116-119 122zm-5532 0l0 0-7149 0 0-238 7149 0 0 238zm-7267-116l0 0-3-122 122 0-119 122zm119-122l0 0 119 116 16 553-237 7-16-553 119-122zM7202 8774l0-15 24 0-24 15zm24-15l0 0 24 15 0 258-47 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1430 0 0 30-1430 0-24-15zm1477 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 47 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1430 0 0-30 1430 0 24 15zm-1477-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-47 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1430 0 0 30-1430 0-24-15zm1477 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 47 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1430 0 0-30 1430 0 24 15zm-1477-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-47 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1430 0 0 30-1430 0-24-15zm1477 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 47 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1430 0 0-30 1430 0 24 15zm-1477-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-47 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1430 0 0 30-1430 0-24-15zm1477 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 47 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1430 0 0-30 1430 0 24 15zm-1477-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-47 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1430 0 0 30-1430 0-24-15zm1477 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 47 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1430 0 0-30 1430 0 24 15zm-1477-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-47 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1430 0 0 30-1430 0-24-15zm1477 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 47 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1430 0 0-30 1430 0 24 15zm-1477 0l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 1545-47 0 0-1545 24-15zm0 1575l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 715 0 0 30-715 0-24-15zm762 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1545 47 0 0 1545-24 15zm0-1575l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-715 0 0-30 715 0 24 15z\" />\r\n    <polygon class=\"fil3\" points=\"8481 4725 7609 4725 7609 5855 7800 5855 7800 5974 7549 5974 7490 5974 7490 5914 7490 4666 7490 4606 7549 4606 8540 4606 8600 4606 8600 4666 8600 5914 8600 5974 8540 5974 8255 5974 8255 5855 8481 5855 \" />\r\n    <g transform=\"translate(8745.851,-332.3089)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(-9.9892306,17.519965)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(8.0440694,50.496097)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(8068.6942,-549.91658)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(-136.1444,-117.37155)\">\r\n        <use xlink:href=\"#lab\" />\r\n    </g>\r\n    <g transform=\"translate(-798.47898,3518.7101)\">\r\n        <use xlink:href=\"#lab\" />\r\n    </g>\r\n    <g transform=\"translate(-5786.2639,3315.9546)\">\r\n        <use xlink:href=\"#lab\" />\r\n    </g>\r\n    <g class=\"fil6\" ng-if=\"evacuationActive\">\r\n        <g transform=\"translate(4000,6500)\">\r\n            <use transform=\"matrix(1,0,0,1,-100,-1300)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,-1,-250,800)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,3000,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(17400,6000)\">\r\n            <use transform=\"matrix(1,0,0,-1,-1500,1500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,1,0,-2000,2200)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,-1,0,100,2200)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(16250,5000)\">\r\n            <use transform=\"matrix(1,0,0,-1,-1500,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(16250,6400)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,3000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2500,-3000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2500,-4500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,1400,-2000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,1,0,1400,-3000)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(9500,6500)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,3000,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(7400,7500)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(12000,3500)\">\r\n            <use transform=\"matrix(0,-1,1,0,-1500,1500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1750,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/13a/13a_fourth.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 22222 11111\">\r\n    <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n    <g id=\"rooms\" class=\"fil2\">\r\n        <polygon id=\"bielany\" ng-if=\"selectedRoom.name==\'Bielany\'\" points=\"6364 8299 4040 8299 4040 6903 6364 6903 \" />\r\n        <polygon id=\"elevator1\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"8178 6308 7182 6308 7127 4984 8178 4992 \" />\r\n        <polygon id=\"elevator2\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"16969 6000 16160 6000 16149 4819 16969 4826 \" />\r\n        <polygon id=\"toilet1\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"5817 6304 4127 6304 4072 4966 5817 4974 \" />\r\n        <polygon id=\"toilet2\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"11538 6340 11538 4231 12435 4180 13435 4069 13454 5009 13455 6359 12983 6341 \" />\r\n        <text x=\"4506\" y=\"7739\" class=\"fil5 fnt2\">BIELANY</text>\r\n    </g>\r\n    <g class=\"fil3\">\r\n        <path d=\"M14190 5696l0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524 0l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 1557-49 0 0-1557 24-15zm0 1587l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 738 0 0 30-738 0-24-15zm786 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1557 49 0 0 1557-24 15zm0-1587l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-738 0 0-30 738 0 24 15zM3949 6911l97 0 0 119-97 0 0-119zm6285-1493l0 0 0 218-120 0 0-218 120 0zm1288 93l0 0-864 0 0-120 864 0 0 120zm5580-1016l0 0 0 1465-120 0 0-1465 120 0zm-3052 5282l0 0 0-2000 119 0 0 2000-119 0zm1274 0l0 0 0-2053 119 0 0 2053-119 0zm1244 0l0 0 0-2053 119 0 0 2053-119 0zm-3591-2009l0 0-433 0 0-120 433 0 0 120zm1879 15l0 0-1465 0 0-120 1465 0 0 120zm647 0l0 0-239 0 0-120 239 0 0 120zm1280 0l0 0-892 0 0-119 892 0 0 119zm1088 0l0 0-716 0 0-120 716 0 0 120zm-5266-803l0 0-7 2796-119 0 7-2796 119 0zm744 60l0 0-1120 0 0-120 1120 0 0 120zm-3215-57l0 0-7 2793-119 0 7-2793 119 0zm-6784 3351l0 0 0-3473 119 0 0 3473-119 0zm8678-4103l0 0 986 0 0 120-986 0 0-120zm-6569 790l0 0-1379-7 0-119 1378 7 0 119zm-1438-67l0 0 0-60 60 0-60 60zm60-60l0 0 60 60 0 1318-120 0 0-1318 60-60zm0 1438l0 0-60 0 0-60 60 60zm-60-60l0 0 60-60 2241 0 0 120-2241 0-60-60zm2361 0l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1318 120 0 0 1318-60 60zm0-1438l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-375 0 0-120 375 0 60 60zm-1472 3380l0 0 0-2062 120 0 0 2062-120 0zm2123-4013l0 0-705 0 0-120 705 0 0 120zm134 623l0 0-325 0 0-120 325 0 0 120zm-385-60l0 0 0-60 60 0-60 60zm60-60l0 0 60 60 0 3450-120 0 0-3450 60-60zm1140 323l0 0 346 0 0 120-346 0 0-120zm7817-346l0 0-5 221-119-3 5-221 119 3zm-5 221l0 0-1 59-58 0 60-59zm-60 59l0 0-1742 0 0-120 1742 0 60 61-60 59zm-4226-101l0 0-7 2796-119 0 7-2796 119 0zm9565 67l0 0-3248 0 0-120 3248 0 0 120zm-9226-7l0 0-864 0 0-120 864 0 0 120zm-1296 24l0 0-2225 0 0-119 2225 0 0 119zm-2285-58l0 0-2-61 61 0-60 61zm60-61l0 0 60 58 10 333-119 3-10-333 60-61zm83 1295l0 0 22 1535-119 1-22-1535 119-1zm8622-4253l0 0 0-336 120 0 0 336-120 0zm54-396l0 0 66-7 0 67-66-59zm66 59l0 0-54 59-1362 150-13-119 1362-150 66 59zm416-108l0 0 456-61 15 118-456 61-15-118zm-483 49l0 0 108-14 15 118-108 14-15-118zm864 2809l0 0 5-2100 119 0-5 2100-119 0zm65-1893l0 0 2919 4 0 119-2919-4 0-119zm-62-744l0 0-4-1676 119 0 4 1676-119 0zm-1677 2242l0 0-562 0 0-120 562 0 0 120zm-562 0l0 0-60 0 0-60 60 60zm-60-60l0 0-4-2276 119 0 4 2276-60 60-60-60zm56-2336l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-1660 0 0-120 1660 0 60 60zm-4250 115l0 0-116-916 118-15 116 916-118 15zm-1288 2250l0 0 0 279-120 0 0-279 120 0zm0 279l0 0 0 60-60 0 60-60zm-60 60l0 0-1389 0 0-120 1389 0 60 60-60 60zm-1389 0l0 0-603 0 0-120 603 0 0 120zm-603 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-1403 120 0 0 1403-60 60-60-60zm60-1463l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-147 0 0-119 147 0 60 60zm-207 60l0 0-52 0-7-52 59 52zm-59-52l0 0-217-1683 118-15 217 1683-59 67-59-52zm1970-1935l0 0 275 2460-119 13-275-2460 119-13zm216 2527l0 0-54 0-6-53 59 53zm-59-53l0 0 59-67 154 0 0 120-154 0-59-53zm7989 1342l0 0 0 191-120 0 0-191 120 0zm-2370-4456l0 0 162 1449-119 13-162-1449 119-13zm-1573 4109l0 0 2-2782 119 0-2 2782-119 0zm62-2842l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-161-1 0-119 161 1 60 60zm-221 59l0 0-61 0 1-61 60 61zm-60-61l0 0 5-210 119 2-5 210-60 59-60-61zm57-268l0 0 69-8-2 69-67-61zm67 61l0 0-52 58-660 82-15-119 660-82 67 61zm-713 140l0 0-59 7-8-59 66 52zm-66-52l0 0-123-924 118-15 123 924-52 67-66-52zm-8508 2643l0 0 349 0 0 120-349 0 0-120zm740 0l0 0 279 0 0 120-279 0 0-120zm339 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1264 120 0 0 1264-60 60zm0-1384l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-1731 0 0-120 1731 0 60 60zm-1851 0l0 0 0-60 60 0-60 60zm60-60l0 0 60 60 0 1264-120 0 0-1264 60-60zm0 1384l0 0-60 0 0-60 60 60zm-60-60l0 0 60-60 303 0 0 120-303 0-60-60zm-581 1l0 0 0 189-120 0 0-189 120 0zm1534-2989l0 0 0 1724-119 0 0-1724 119 0zm-1412 3042l0 0-1710 0 0-120 1710 0 0 120zm3593 961l0 0-295 0 0-120 295 0 0 120zm10637 2509l0 0 0-2159 119 0 0 2159-119 0zm-1304-2813l0 0 218 0 0 120-218 0 0-120zm-9787-55l0 0 111 0 0 120-111 0 0-120zm9040-1035l0 0 0 575-120 0 0-575 120 0zm-2433 370l0 0 116 0 0 119-116 0 0-119zm175 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-2243 120 0 0 2243-60 60zm-6-2362l0 0 66-7 0 66-66-59zm66 59l0 0-54 59-1922 197-12-119 1922-197 66 59zm-2042 197l0 0 0-54 54-6-54 59zm54-59l0 0 66 59 0 2031-119 0 0-2031 54-59zm6 2150l0 0-60 0 0-60 60 60zm-60-60l0 0 60-60 101 0 0 120-101 0-60-60zm-8011 622l0 0 97 0 0 119-97 0 0-119zM8154 10331l3 123-123 0 119-123zm-119 123l0 0-6208 0 0-239 6208 0 119 116-119 123zm-6208 0l0 0-120 0 0-119 120 119zm-120-119l0 0 0-3105 240 0 0 3105-120 119-120-119zm119-3225l0 0 121-1 0 121-121-119zm121 119l0 0-119 119-370 4-2-239 370-4 121 119zm-488 123l0 0-120 1 0-121 120 119zm-120-119l0 0 0-844 239 0 0 844-118 119-120-119zm0-844l0 0 0-121 121 1-121 119zm121-119l0 0 369 4-3 239-369-4-118-119 121-119zm488 124l0 0 0 121-121-1 121-119zm-121 119l0 0-118-119 0-2628 240 0 0 2628-121 119zm-118-2748l0 0 0-102 101-16-101 118zm101-118l0 0 5937-951 37 236-5937 951-139-118 101-118zm5937-951l0 0 123-20 15 123-138-103zm138 103l0 0 51 416-238 29-51-416 100-133 138 103zm-55 549l0 0-118 13-14-118 132 104zm-132-104l0 0 106-133 10405-1165 26 238-10405 1165-132-104zm10643-1195l0 0 16 121-121 14 105-134zm-105 134l0 0-132-104-66-499 237-31 67 499-105 134zm-198-603l0 0-16-121 122-13-105 134zm105-134l0 0 2776-306 26 238-2776 306-132-104 105-134zm2776-306l0 0 129-14 3 130-133-116zm133 116l0 0 215 8518-239 6-215-8518 106-122 133 116zm215 8518l0 0 3 123-122 0 119-123zm-119 123l0 0-5572 0 0-240 5572 0 119 117-119 123zm-5572 0l0 0-7554 0 0-240 7554 0 0 240zm-7674-117l0 0-4-123 123 0-119 123zm119-123l0 0 119 117 16 557-239 7-16-557 119-123zM6838 9667l0-15 24 0-24 15zm24-15l0 0 24 15 0 33-49 0 0-33 24-15zm0 63l0 0-24 0 0-15 24 15zm1475-63l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524-259l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 259-49 0 0-259 24-15zm0 289l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1475 0 0 30-1475 0-24-15zm1524 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-259 49 0 0 259-24 15zm0-289l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1475 0 0-30 1475 0 24 15zm-1524 0l0 0 0-15 24 0-24 15zm786 1287l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1287 49 0 0 1287-24 15zm0-1317l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-738 0 0-30 738 0 24 15z\" />\r\n        <polygon points=\"8111 5062 7238 5062 7238 6191 7429 6191 7429 6310 7179 6310 7119 6310 7119 6251 7119 5002 7119 4943 7179 4943 8170 4943 8230 4943 8230 5002 8230 6251 8230 6310 8170 6310 7885 6310 7885 6191 8111 6191 \" />\r\n        <polygon points=\"16121 4754 16983 4754 17043 4754 17043 4814 17043 5947 17043 6006 16983 6006 16784 6006 16784 5887 16924 5887 16924 4873 16181 4873 16181 5887 16329 5887 16329 6006 16121 6006 16062 6006 16062 5947 16062 4814 16062 4754 \" />\r\n    </g>\r\n    <g transform=\"translate(8516.0615,86.719098)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(-361.43207,341.92874)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(-343.39877,307.31971)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(7163.4912,-49.786387)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g class=\"fil6\" ng-if=\"evacuationActive\">\r\n        <g transform=\"translate(4000,6900)\">\r\n            <use transform=\"matrix(-1,0,0,1,0,-1300)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(-1,0,0,-1,0,800)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,3300,-400)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(13500,5000)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(15800,6000)\">\r\n            <use transform=\"matrix(1,0,0,-1,-1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,-1,-1500,-1100)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(15300,6900)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,2000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2000,-3000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2000,-1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(9300,6900)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,2900,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,4400,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(7000,7500)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/13a/13a_ground.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 22222 11111\">\r\n    <polygon points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n    <g class=\"fil2\">\r\n        <polygon id=\"reception\" ng-if=\"selectedRoom.name==\'Reception\'\" points=\"6628 6070 5361 6070 5361 4346 6628 4364 \" />\r\n        <polygon id=\"galicjad\" ng-if=\"selectedRoom.name==\'Galicja D\'\" points=\"5390 6248 1943 6248 1943 3204 3772 2933 5164 2761 5390 3542 \" />\r\n        <polygon id=\"galicjam\" ng-if=\"selectedRoom.name==\'Galicja M\'\" points=\"5390 10287 1957 10287 1957 7266 5390 7266 \" />\r\n        <polygon id=\"zwierzyniec\" ng-if=\"selectedRoom.name==\'Zwierzyniec\'\" points=\"17449 4254 16117 4254 16117 3419 17449 3419 \" />\r\n        <polygon id=\"amper\" ng-if=\"selectedRoom.name==\'Amper lab\'\" points=\"21021 6688 18316 6688 18315 5771 18367 3022 19388 3022 19388 980 20931 847 \" />\r\n        <polygon points=\"18313,1223 17219,1343 16123,1464 16118,2411 16118,3359 17210,3359 18303,3359 18303,3103 18309,2037 18313,1223 18313,1223\" ng-if=\"selectedRoom.name==\'Joule lab\'\"/>\r\n        <polygon id=\"nowahuta\" ng-if=\"selectedRoom.name==\'Nowa Huta\'\" points=\"19465 9789 16878 9789 16743 7379 19465 7379 \" />\r\n        <polygon points=\" 11915,9644 11853,8219 11792,6787 11790,6769 14350,6769 14350,6778 14471,9607 14473,9653 11916,9653\" ng-if=\"selectedRoom.name==\'Rynek\'\"/>\r\n        <polygon id=\"elevator1\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"8498 5974 7502 5974 7447 4651 8498 4658 \" />\r\n        <polygon id=\"elevator2\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"17462 5667 16062 5667 16044 4250 17462 4258 \" />\r\n        <polygon id=\"toilet1\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"8529 3656 5334 3656 5208 2715 8528 2277 \" />\r\n        <polygon id=\"toilet2\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"14539 5626 13941 5673 12823 5673 12823 5163 13418 5167 13385 3889 14539 3897 \"/>\r\n        <polygon id=\"bohr\" ng-if=\"selectedRoom.name==\'Bohr lab\'\" points=\"21090 8031 20073 8010 20068 6706 21038 6740 \" />\r\n        <text x=\"2621\" y=\"4886\" class=\"fil5 fnt1\">GALICJA D</text>\r\n        <text x=\"16159\" y=\"3896\" class=\"fil5 fnt6\">ZWIERZYNIEC</text>\r\n        <text x=\"2621\" y=\"8649\" class=\"fil5 fnt1\">GALICJA M</text>\r\n        <text x=\"16997\" y=\"8649\" class=\"fil5 fnt1\">NOWA HUTA</text>\r\n        <text x=\"19001\" y=\"4351\" class=\"fil5 fnt1\">AMPER</text>\r\n        <text x=\"20160\" y=\"7850\" class=\"fil5 fnt5\">BOHR</text>\r\n        <text x=\"16585.428\" y=\"2559.6028\" class=\"fil5 fnt1\">JOULE</text>\r\n        <text x=\"12467\" y=\"8257\" class=\"fil5 fnt1\">RYNEK</text>\r\n    </g>\r\n    <g id=\"walls\">\r\n        <path class=\"fil3\" d=\"M14540 5210l0-15 25 0-25 15zm25-15l0 0 25 15 0 258-49 0 0-258 25-15zm0 287l0 0-25 0 0-15 25 15zm-25-15l0 0 25-15 1490 0 0 30-1490 0-25-15zm1539 0l0 0 0 15-25 0 25-15zm-25 15l0 0-25-15 0-258 49 0 0 258-25 15zm0-287l0 0 25 0 0 15-25-15zm25 15l0 0-25 15-1490 0 0-30 1490 0 25 15zm-1539-258l0 0 0-15 25 0-25 15zm25-15l0 0 25 15 0 258-49 0 0-258 25-15zm0 287l0 0-25 0 0-15 25 15zm-25-15l0 0 25-15 1490 0 0 30-1490 0-25-15zm1539 0l0 0 0 15-25 0 25-15zm-25 15l0 0-25-15 0-258 49 0 0 258-25 15zm0-287l0 0 25 0 0 15-25-15zm25 15l0 0-25 15-1490 0 0-30 1490 0 25 15zm-1539-258l0 0 0-15 25 0-25 15zm25-15l0 0 25 15 0 258-49 0 0-258 25-15zm0 287l0 0-25 0 0-15 25 15zm-25-15l0 0 25-15 1490 0 0 30-1490 0-25-15zm1539 0l0 0 0 15-25 0 25-15zm-25 15l0 0-25-15 0-258 49 0 0 258-25 15zm0-287l0 0 25 0 0 15-25-15zm25 15l0 0-25 15-1490 0 0-30 1490 0 25 15zm-1539-258l0 0 0-15 25 0-25 15zm25-15l0 0 25 15 0 258-49 0 0-258 25-15zm0 287l0 0-25 0 0-15 25 15zm-25-15l0 0 25-15 1490 0 0 30-1490 0-25-15zm1539 0l0 0 0 15-25 0 25-15zm-25 15l0 0-25-15 0-258 49 0 0 258-25 15zm0-287l0 0 25 0 0 15-25-15zm25 15l0 0-25 15-1490 0 0-30 1490 0 25 15zm-1539-258l0 0 0-15 25 0-25 15zm25-15l0 0 25 15 0 258-49 0 0-258 25-15zm0 287l0 0-25 0 0-15 25 15zm-25-15l0 0 25-15 1490 0 0 30-1490 0-25-15zm1539 0l0 0 0 15-25 0 25-15zm-25 15l0 0-25-15 0-258 49 0 0 258-25 15zm0-287l0 0 25 0 0 15-25-15zm25 15l0 0-25 15-1490 0 0-30 1490 0 25 15zm-1539-258l0 0 0-15 25 0-25 15zm25-15l0 0 25 15 0 258-49 0 0-258 25-15zm0 287l0 0-25 0 0-15 25 15zm-25-15l0 0 25-15 1490 0 0 30-1490 0-25-15zm1539 0l0 0 0 15-25 0 25-15zm-25 15l0 0-25-15 0-258 49 0 0 258-25 15zm0-287l0 0 25 0 0 15-25-15zm25 15l0 0-25 15-1490 0 0-30 1490 0 25 15zm-1539 0l0 0 0-15 25 0-25 15zm25-15l0 0 25 15 0 1545-49 0 0-1545 25-15zm0 1575l0 0-25 0 0-15 25 15zm-25-15l0 0 25-15 745 0 0 30-745 0-25-15zm794 0l0 0 0 15-25 0 25-15zm-25 15l0 0-25-15 0-1545 49 0 0 1545-25 15zm0-1575l0 0 25 0 0 15-25-15zm25 15l0 0-25 15-745 0 0-30 745 0 25 15zM14085 5617l0 254-119 0 0-254 119 0zm0 836l0 0 0 254-119 0 0-254 119 0zm7010 1616l0 0-1170 0 0-119 1170 0 0 119zm-1027-524l0 0 0-838 119 0 0 838-119 0zm-715 2244l0 0 0-807 119 0 0 807-119 0zm0-1158l0 0 0-1196 119 0 0 1196-119 0zm60-1255l0 0 60 0 0 60-60-60zm60 60l0 0-60 59-1468 0 0-119 1468 0 60 60zm-1922 59l0 0-807 0 0-119 807 0 0 119zm-15650 2848l0 0 0-7114 119 0 0 7114-119 0zm6746-3148l0 0-379 0 0-119 379 0 0 119zm-117-3531l0 0-789 0 0-119 789 0 0 119zm-1190 0l0 0-1258 0 0-119 1258 0 0 119zm-1659 0l0 0-346 0 0-119 346 0 0 119zm-346 0l0 0-50 0-8-50 59 50zm-59-50l0 0-144-869 117-19 144 869-59 69-59-50zm14 2636l0 0 0-1882 119 0 0 1882-119 0zm0-1882l0 0 0-60 60 0-60 60zm60-60l0 0 1280 0 0 119-1280 0-60-60 60-60zm37-704l0 0 0 187-119 0 0-187 119 0zm3202 894l0 0-119 0 32 52 7 3-5-1-10-1-14-1-17-1-20-1-23 0-25 0-27 0-29 0-30 0-31 0-32 0-32 0-32 0-33 1-32 1-32 1-31 1-30 1-29 1-27 1-25 1-23 1-21 1-19 1-16 0-13 0-9 0-6 0-2 0-4-119 2 0 6 0 9 0 13 0 16 0 19-1 21-1 24-1 25-1 27-1 29-1 30-1 31-1 32-1 33-1 33-1 33 0 33 0 32 0 31 0 30 0 29 0 28 0 26 0 24 0 22 1 20 1 17 1 15 1 14 2 19 6 36 56zm-754 59l0 0-61-59 0-249 119 0 0 249-57 59zm-61-760l0 0 0-193 119 0 0 193-119 0zm2117 2613l0 0 0 298-119 0 0-298 119 0zm0-702l0 0 0 149-119 0 0-149 119 0zm1703 702l0 0 0 298-119 0 0-298 119 0zm0-702l0 0 0 149-119 0 0-149 119 0zm4971 702l0 0 0 298-119 0 0-298 119 0zm0-792l0 0 0 298-119 0 0-298 119 0zm-3784-1026l0 0-700 0 0-119 700 0 0 119zm1719-1053l0 0 0-281 119 0 0 281-119 0zm0-711l0 0 0-1248 119 0 0 1248-119 0zm1618-1464l0 0 0 2056-119 0 0-2056 119 0zm-7450 7141l0 0 1654 0 0 119-1654 0 0-119zm1646 1287l0 0-28-655 119-5 28 655-119 5zm-48-1111l0 0-84-1971 119-5 84 1971-119 5zm-681-2032l0 0 987 0 0 119-987 0 0-119zm8768-955l0 0-298 0 0-119 298 0 0 119zm80 717l0 0 0 298-119 0 0-298 119 0zm-6839-1301l0 0 0 599-119 0 0-599 119 0zm0 599l0 0 0 60-60 0 60-60zm-60 60l0 0-3005 0 0-119 3005 0 60 60-60 60zm-3005 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-3452 119 0 0 3452-60 60-60-60zm3187-1110l0 0-183 0 0-119 183 0 0 119zm-183 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-2631 119 0 0 2631-60 60-60-60zm1347-709l0 0 171 0 0 119-171 0 0-119zm814 1729l0 0 983 0 0 119-983 0 0-119zm1042 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1729 119 0 0 1729-60 60zm0-1848l0 0 60 0 0 60-60-60zm60 60l0 0-60 59-1121 0 0-119 1121 0 60 60zm-1240 0l0 0 0-60 60 0-60 60zm60-60l0 0 60 60 0 551-119 0 0-551 60-60zm83 1037l0 0 0 254-119 0 0-254 119 0zm0 254l0 0 0 60-60 0 60-60zm-60 60l0 0-666 0 0-119 666 0 60 60-60 60zm-726-58l0 0-2-61 61 0-59 61zm59-61l0 0 59 58 13 497-119 3-13-497 59-61zm13 616l0 0-58 0-2-58 59 58zm-59-58l0 0 59-61 283 0 0 119-283 0-59-58zm-25-957l0 0-71-2924 119-3 71 2924-119 3zm3334-1064l0 0-1499 0 0-119 1499 0 0 119zm-1559-60l0 0 0-60 59 0-59 60zm59-60l0 0 59 60 0 350-119 0 0-350 59-60zm2057 2198l0 0-558 0 0-119 558 0 0 119zm-558 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-2079 119 0 0 2079-60 60-60-60zm59-1421l0 0 1391 0 0 119-1391 0 0-119zm1450-777l0 0 0 2198-119 0 0-2198 119 0zm0 2198l0 0 0 60-60 0 60-60zm-60 60l0 0-298 0 0-119 298 0 60 60-60 60zm994-4567l0 0-32 4742-119 0 32-4742 119 0zm-2444 2429l0 0 0-119 119 0 0 119-119 0zm0-119l0 0 0-60 59 0-59 60zm59-60l0 0 1512 0 0 119-1512 0-59-60 59-60zm1793 0l0 0 515 0 0 119-515 0 0-119zm-8725 3406l0 0-486 0 0-119 486 0 0 119zm-545-59l0 0-1-60 60 0-59 60zm59-60l0 0 59 59 45 3082-119 1-45-3082 59-60zm4816 119l0 0-2439 0 0-119 2439 0 0 119zm1136 0l0 0-700 0 0-119 700 0 0 119zm1277 0l0 0-524 0 0-119 524 0 0 119zm1514 0l0 0-941 0 0-119 941 0 0 119zm3680 0l0 0-3260 0 0-119 3260 0 0 119zm-9257 3025l0 0-132-3082 119-5 132 3082-119 5zm2681 0l0 0-132-3082 119-5 132 3082-119 5zm1116 0l0 0-132-3082 119-5 132 3082-119 5zm1182 0l0 0-132-3082 119-5 132 3082-119 5zm-8487-3144l0 0 342 0 0 119-342 0 0-119zm-3030 3695l0 0 0-1535 119 0 0 1535-119 0zm0-1968l0 0 0-1541 119 0 0 1541-119 0zm2260-1204l0 0-323 0 0-119 323 0 0 119zm-382-59l0 0 0-59 60 0-60 59zm60-59l0 0 60 59 0 3230-119 0 0-3230 60-59zm12109-346l0 0 0-66 119 0 0 66-119 0zm-12685-615l0 0-1334 0 0-119 1334 0 0 119zm4-505l0 0 0 500-119 0 0-500 119 0zM15608 9655l5532 0 0 238-5532 0 0-238zm5651 116l0 0 3 122-122 0 119-122zm-119 122l0 0-119-116-226-8960 237-6 226 8960-119 122zm-239-9198l0 0 128-14 3 129-132-115zm132 115l0 0-106 121-2756 304-26-236 2756-304 132 115zm-2888 189l0 0 26 236-5661 628-26-236 5661-628zm-5661 628l0 0 0 0-8 1 7-1zm0 0l0 0 26 236-4386 518-27-236 4386-518 0 0zm-4392 519l0 0 5-1 5-1-10 2zm5-1l0 0 32 235-7039 1100-36-234 7039-1100 5-1zm-7144 1218l0 0 0-101 101-16-100 117zm100-117l0 0 137 117 18 6965-237 0-18-6965 100-117zm37 7200l0 0-118 0 0-118 119 119zm-119-119l0 0 119-119 6177 2 0 237-6177-2-119-119zm7386 3l0 0-16-553 237-7 16 553-237 7zm-16-553l0 0-3-122 122 0-119 122zm119-122l0 0 6142 0 0 237-6142 0-119-115 119-122zM20969 4791l-1701 0 0-30 1701 0 0 30zm-2602-30l0 0 482 0 0 30-482 0 0-30zm2602-1716l0 0-1701 0 0-30 1701 0 0 30zm-2602-30l0 0 482 0 0 30-482 0 0-30zM4901 7147l0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zM4901 6253l0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zm-238 0l0 0 0 119-119 0 0-119 119 0zM7187 8932l0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1454 0 0 30-1454 0-24-15zm1502 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1454 0 0-30 1454 0 24 15zm-1502 0l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 1545-48 0 0-1545 24-15zm0 1575l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 727 0 0 30-727 0-24-15zm775 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1545 48 0 0 1545-24 15zm0-1575l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-727 0 0-30 727 0 24 15zM14457 7592l-1-16 19 0-18 16zm18-16l0 0 18 14 15 258-36 1-15-258 18-16zm15 287l0 0-17 0-1-14 18 14zm-18-14l0 0 18-16 1081 0 0 30-1081 0-18-14zm1116-1l0 0 1 16-19 0 18-16zm-18 16l0 0-18-14-15-258 36-1 15 258-18 16zm-15-287l0 0 17 0 1 14-18-14zm18 14l0 0-18 16-1081 0 0-30 1081 0 18 14zm-1101 259l0 0-1-16 19 0-18 16zm18-16l0 0 18 14 15 258-36 1-15-258 18-16zm15 287l0 0-17 0-1-14 18 14zm-18-14l0 0 18-16 1081 0 0 30-1081 0-18-14zm1116-1l0 0 1 16-19 0 18-16zm-18 16l0 0-18-14-15-258 36-1 15 258-18 16zm-15-287l0 0 17 0 1 14-18-14zm18 14l0 0-18 16-1081 0 0-30 1081 0 18 14zm-1101 259l0 0-1-16 19 0-18 16zm18-16l0 0 18 14 15 258-36 1-15-258 18-16zm15 287l0 0-17 0-1-14 18 14zm-18-14l0 0 18-16 1081 0 0 30-1081 0-18-14zm1116-1l0 0 1 16-19 0 18-16zm-18 16l0 0-18-14-15-258 36-1 15 258-18 16zm-15-287l0 0 17 0 1 14-18-14zm18 14l0 0-18 16-1081 0 0-30 1081 0 18 14zm-1101 259l0 0-1-16 19 0-18 16zm18-16l0 0 18 14 15 258-36 1-15-258 18-16zm15 287l0 0-17 0-1-14 18 14zm-18-14l0 0 18-16 1081 0 0 30-1081 0-18-14zm1116-1l0 0 1 16-19 0 18-16zm-18 16l0 0-18-14-15-258 36-1 15 258-18 16zm-15-287l0 0 17 0 1 14-18-14zm18 14l0 0-18 16-1081 0 0-30 1081 0 18 14zm-1101 259l0 0-1-16 19 0-18 16zm18-16l0 0 18 14 15 258-36 1-15-258 18-16zm15 287l0 0-17 0-1-14 18 14zm-18-14l0 0 18-16 1081 0 0 30-1081 0-18-14zm1116-1l0 0 1 16-19 0 18-16zm-18 16l0 0-18-14-15-258 36-1 15 258-18 16zm-15-287l0 0 17 0 1 14-18-14zm18 14l0 0-18 16-1081 0 0-30 1081 0 18 14zm-1101 259l0 0-1-16 19 0-18 16zm18-16l0 0 18 14 15 258-36 1-15-258 18-16zm15 287l0 0-17 0-1-14 18 14zm-18-14l0 0 18-16 1081 0 0 30-1081 0-18-14zm1116-1l0 0 1 16-19 0 18-16zm-18 16l0 0-18-14-15-258 36-1 15 258-18 16zm-15-287l0 0 17 0 1 14-18-14zm18 14l0 0-18 16-1081 0 0-30 1081 0 18 14z\" />\r\n        <polygon class=\"fil3\" points=\"19448 980 19448 2569 19329 2569 19329 980 \" />\r\n        <polygon class=\"fil3\" points=\"8409 4733 7536 4733 7536 5862 7727 5862 7727 5981 7477 5981 7417 5981 7417 5922 7417 4673 7417 4614 7477 4614 8468 4614 8528 4614 8528 4673 8528 5922 8528 5981 8468 5981 8183 5981 8183 5862 8409 5862 \" />\r\n    </g>\r\n    <g transform=\"translate(34.809752,-612.37731)\">\r\n        <use xlink:href=\"#lab\" />\r\n    </g>\r\n    <g transform=\"translate(927.61246,2958.8335)\">\r\n        <use xlink:href=\"#lab\" />\r\n    </g>\r\n    <g transform=\"translate(-2482.9 -2427.5)\">\r\n		<use xlink:href=\"#lab\"/>\r\n	</g>\r\n    <g transform=\"translate(-76.6559,17.519965)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(8681.5429,-393.16928)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(1543.6647,-2288.647)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(8668.1998,-467.32948)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(-27.69857,104.06425)\">\r\n        <use xlink:href=\"#reception\" />\r\n    </g>\r\n    <g transform=\"translate(-27.69857,104.06425)\">\r\n        <use xlink:href=\"#storage\" />\r\n    </g>\r\n    <g class=\"fil6\" ng-if=\"evacuationActive\">\r\n        <g transform=\"translate(5800,6700)\">\r\n            <use transform=\"matrix(1,0,0,-1,0,500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,1000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,-1,0,2000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,1000,-1800)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(16250,6000)\">\r\n            <use transform=\"matrix(1,0,0,1,-1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,-1500,1500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,-1500,3000)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(16250,4500)\">\r\n            <use transform=\"matrix(1,0,0,1,-1500,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(16250,6400)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,3000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2600,-1500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2600,-3000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,3500,-3300)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,1400,-2000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,1400,-4000)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(9500,6500)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,3000,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(7400,7500)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(11700,3500)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n    </g>\r\n</svg>");
$templateCache.put("plcrc/13a/13a_second.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 22222 11111\">\r\n    <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n    <g class=\"fil2\">\r\n        <polygon id=\"kliny\" ng-if=\"selectedRoom.name==\'Kliny\'\" points=\"20973 2171 20135 2171 20142 1940 18437 1949 18351 1881 18351 1102 20973 813 \" />\r\n        <polygon id=\"smoczajama\" ng-if=\"selectedRoom.name==\'Smocza Jama\'\" points=\"17506 4223 16071 4223 16071 3418 17506 3418 \" />\r\n        <polygon id=\"elevator1\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"8567 5960 7571 5960 7516 4637 8567 4644 \" />\r\n        <polygon id=\"elevator2\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"17462 5653 16062 5653 16044 4236 17462 4244 \" />\r\n        <polygon id=\"toilet1\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"6192 5984 4502 5984 4447 4646 6192 4654 \" />\r\n        <polygon id=\"toilet2\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"14545 5660 13478 5660 13437 3743 14533 3751 \" />\r\n        <text x=\"19240\" y=\"1547\" class=\"fil5 fnt2\">KLINY</text>\r\n        <text x=\"16211\" y=\"3738\" class=\"fil5 fnt5\">SMOCZA</text>\r\n        <text x=\"16437\" y=\"4040\" class=\"fil5 fnt5\">JAMA</text>\r\n    </g>\r\n    <path class=\"fil3\" d=\"M14442 8022l0-15 15 0-15 15zm15-15l0 0 15 15 0 710-30 0 0-710 15-15zm0 739l0 0-15 0 0-15 15 15zm-15-15l0 0 30 0-15-15 18 0 17-1 17-2 17-3 17-4 16-5 16-5 15-6 15-7 15-7 14-8 14-9 13-10 13-10 12-11 12-11 11-12 11-12 10-13 9-13 9-14 8-14 7-15 7-15 6-15 5-16 5-16 4-17 3-17 2-17 1-17 0-18 30 0-1 19-1 19-2 18-3 18-4 18-5 18-6 17-7 17-7 16-8 16-9 15-10 15-10 14-11 14-12 13-12 13-13 12-13 12-14 11-15 10-15 10-15 9-16 8-16 7-17 7-17 6-18 5-18 4-18 3-19 2-19 1-19 1-15-15zm385-355l0 0-30 0 0-18-1-17-2-17-3-17-4-16-5-16-5-16-6-15-7-15-7-15-8-14-9-14-9-13-10-13-11-12-11-12-12-11-12-11-13-10-13-9-14-9-14-8-15-8-15-7-15-6-16-5-16-5-16-4-17-3-17-2-17-1-18 0 0-30 19 1 19 1 19 2 18 3 18 4 18 5 17 6 17 7 16 7 16 8 15 9 15 10 15 10 14 11 13 12 13 12 12 13 12 13 11 14 10 15 10 15 9 15 8 16 7 16 7 17 6 17 5 18 4 18 3 18 2 19 1 19 1 19zM14555 5203l0-15 24 0-24 15zm24-15l0 0 24 15 0 258-49 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1468 0 0 30-1468 0-24-15zm1517 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 49 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1468 0 0-30 1468 0 24 15zm-1517-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-49 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1468 0 0 30-1468 0-24-15zm1517 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 49 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1468 0 0-30 1468 0 24 15zm-1517-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-49 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1468 0 0 30-1468 0-24-15zm1517 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 49 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1468 0 0-30 1468 0 24 15zm-1517-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-49 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1468 0 0 30-1468 0-24-15zm1517 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 49 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1468 0 0-30 1468 0 24 15zm-1517-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-49 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1468 0 0 30-1468 0-24-15zm1517 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 49 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1468 0 0-30 1468 0 24 15zm-1517-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-49 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1468 0 0 30-1468 0-24-15zm1517 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 49 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1468 0 0-30 1468 0 24 15zm-1517 0l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 1545-49 0 0-1545 24-15zm0 1575l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 734 0 0 30-734 0-24-15zm783 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1545 49 0 0 1545-24 15zm0-1575l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-734 0 0-30 734 0 24 15zM15961 6143l37-537 119 8-37 537-119-8zm-1542-533l0 0 0 562-119 0 0-562 119 0zm5 904l0 0 0 185-119 0 0-185 119 0zm-10804 1402l0 0 274 0 0 119-274 0 0-119zm3475 0l0 0 110 0 0 119-110 0 0-119zm5649-4852l0 0-246 0 0-119 246 0 0 119zm978 4902l0 0-54-1264 119-5 54 1264-119 5zm5632-534l0 0 0-732 119 0 0 732-119 0zm1592-5255l0 0-152 0 0-119 152 0 0 119zm-481 0l0 0-279 0 0-119 279 0 0 119zm-339 157l0 0 0-433 119 0 0 433-119 0zm60-493l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-1815 0 0-119 1815 0 60 60zm-892 7881l0 0 0-1378 119 0 0 1378-119 0zm-12089-3154l0 0 0 293-119 0 0-293 119 0zm-3296-688l0 0-424 0 0-119 424 0 0 119zm-853 0l0 0-1156 0 0-119 1156 0 0 119zm2531-3276l0 0 0 2010-119 0 0-2010 119 0zm651 3324l0 0-187 0 0-119 187 0 0 119zm-390-119l0 0 277 0 0 119-277 0 0-119zm337 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1255 119 0 0 1255-60 60zm0-1374l0 0 60 0 0 59-60-59zm60 59l0 0-60 59-1719 0 0-119 1719 0 60 59zm-1838 0l0 0 0-59 60 0-60 59zm60-59l0 0 60 59 0 1255-119 0 0-1255 60-59zm0 1374l0 0-60 0 0-60 60 60zm-60-60l0 0 60-60 301 0 0 119-301 0-60-60zm766-59l0 0 347 0 0 119-347 0 0-119zm-1575 11l0 0 0-2890 119 0 0 2890-119 0zm7994 521l0 0 0 298-119 0 0-298 119 0zm0-488l0 0 0 149-119 0 0-149 119 0zm4971 488l0 0 0 298-119 0 0-298 119 0zm0-792l0 0 0 298-119 0 0-298 119 0zm-4495-2546l0 0-595 0 0-119 595 0 0 119zm3989 370l0 0-1700 0 0-119 1700 0 0 119zm-1561-643l0 0 0-1219 119 0 0 1219-119 0zm1621-1439l0 0 0 2179-119 0 0-2179 119 0zm2235 4334l0 0-298 0 0-119 298 0 0 119zm-144 721l0 0 0 298-119 0 0-298 119 0zm-6615-1248l0 0 0 756-119 0 0-756 119 0zm0 756l0 0 0 60-60 0 60-60zm-60 60l0 0-3005 0 0-119 3005 0 60 60-60 60zm-3005 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-3667 119 0 0 3667-60 60-60-60zm2945-1185l0 0 0-2830 119 0 0 2830-119 0zm1404-1135l0 0 49 2014-119 3-49-2014 119-3zm-11 2075l0 0-58 0-1-58 59 58zm-59-58l0 0 59-61 137 0 0 119-137 0-59-58zm616-61l0 0 173 0 0 119-173 0 0-119zm584 0l0 0 610 0 0 119-610 0 0-119zm669 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1880 119 0 0 1880-60 60zm0-1999l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-1121 0 0-119 1121 0 60 60zm-1180-59l0 0 0 0 76 0-76 0zm0 0l0 0 0 119-675 2 0-119 675-2 0 0zm-750-532l0 0-34-1409 119-3 34 1409-119 3zm719 2471l0 0-1-1880 119 0 1 1880-119 0zm1212-2354l0 0 0 474-119 0 0-474 119 0zm1998 2413l0 0-558 0 0-119 558 0 0 119zm-558 0l0 0-60 0 0-60 60 60zm-60-60l0 0 0-2079 119 0 0 2079-60 60-60-60zm60-1421l0 0 1391 0 0 119-1391 0 0-119zm2250-276l0 0 16-2811 119 0-16 2811-119 0zm-211 2053l0 0 0-340 119 0 0 340-119 0zm0-340l0 0 0-59 60 0-60 60zm60-60l0 0 197 0 0 119-197 0-60-60 60-60zm256 60l0 0 0 59-59 0 59-59zm-59 59l0 0-59-60 12-1713 119 0-12 1713-59 59zm1893-2904l0 0 0 433-119 0 0-433 119 0zm0 433l0 0 0 59-60 0 60-59zm-60 59l0 0-1815 0 0-119 1815 0 60 60-60 59zm-2737 41l0 0 51 0 0 119-51 0 0-119zm452 0l0 0 467 0 0 119-467 0 0-119zm-750 2235l0 0 298 0 0 119-298 0 0-119zm357 60l0 0 0 60-60 0 60-60zm-60 60l0 0-60-60 0-1669 119 0 0 1669-60 60zm-60-2089l0 0 0-205 119 0 0 205-119 0zm60-265l0 0 60 0 0 60-60-60zm60 60l0 0-60 60-1391 0 0-119 1391 0 60 60zm-6460 3384l0 0-2408 0 0-119 2408 0 0 119zm-2467-59l0 0-1-60 60 0-59 60zm59-60l0 0 59 59 45 3082-119 1-45-3082 59-60zm3315 119l0 0-938 0 0-119 938 0 0 119zm9107 0l0 0-4621 0 0-119 4621 0 0 119zm-9270 735l0 0-7 2288-119 0 7-2288 119 0zm3286 411l0 0-52-1203 119-5 52 1203-119 5zm-718 62l0 0-6-130 119-5 6 130-119 5zm-19-450l0 0-35-814 119-5 35 814-119 5zm1665-1031l0 0-16 219-119-8 16-219 119 8zm-16 219l0 0-4 55-55 0 59-55zm-59 55l0 0-1730 0 0-119 1730 0 59 64-59 55zm-2099 0l0 0-1421 0 0-119 1421 0 0 119zm-1481-60l0 0 0-59 59 0-59 59zm59-59l0 0 59 59 3 1234-119 0-3-1234 59-59zm4 1353l0 0-60 0 0-60 60 59zm-60-59l0 0 59-59 220-2 1 119-220 2-60-59zm601-64l0 0 2931-23 1 119-2931 23-1-119zm2990 34l0 0 3 61-61 1 59-62zm-59 62l0 0-60-57-7-160 119-5 7 160-59 62zm-80-541l0 0-31-723 119-5 31 723-119 5zm-230 2360l0 0-65-1300 119-6 65 1300-119 6zm-84-1661l0 0-11-228 119-6 11 228-119 6zm-7193-1322l0 0 344 0 0 119-344 0 0-119zm-4601 3534l0 0 0-2359 119 0 0 2359-119 0zm3830-3366l0 0-323 0 0-119 323 0 0 119zm-382-59l0 0 0-59 60 0-60 59zm60-59l0 0 60 59 0 3425-119 0 0-3425 60-59zm4549-177l0 0 0 298-119 0 0-298 119 0zm-4361-711l0 0-700 0 0-119 700 0 0 119zm-4133 2082l0 0-1300 0 0-119 1300 0 0 119zm2145 2291l0 0 0-2359 119 0 0 2359-119 0zm1327-2300l0 0-2523 0 0-119 2523 0 0 119zm-896-1356l0 0-1522 0 0-119 1522 0 0 119zm-1581-59l0 0 0-59 60 0-60 59zm60-59l0 0 60 59 0 1356-119 0 0-1356 60-59zm0 1475l0 0-60 0 0-60 60 60zm-60-60l0 0 60-60 2305 0 0 119-2305 0-60-60zm2424 0l0 0 0 60-59 0 59-60zm-59 60l0 0-60-60 0-1356 119 0 0 1356-59 60zm0-1475l0 0 59 0 0 59-59-59zm59 59l0 0-59 60-386 0 0-119 386 0 59 59zm4796-2370l0 0 663 0 0 119-663 0 0-119zM8593 10332l3 122-122 0 119-122zm-119 122l0 0-6515 0 0-237 6515 0 119 115-119 122zm-6515 0l0 0-119 0 0-119 119 119zm-119-119l0 0 0-3083 238 0 0 3083-119 119-119-119zm118-3202l0 0 120-1 0 120-120-119zm120 119l0 0-118 119-367 4-2-237 367-4 120 119zm-485 122l0 0-120 1 0-120 120 119zm-120-119l0 0 0-1380 237 0 0 1380-118 119-120-119zm0-1380l0 0 0-120 120 1-120 119zm120-119l0 0 367 4-3 237-367-4-117-119 120-119zm484 123l0 0 0 120-120-1 120-119zm-120 119l0 0-118-119 0-2649 238 0 0 2649-120 119zm-118-2768l0 0 0-101 101-16-101 117zm101-117l0 0 6150-961 36 234-6150 961-137-117 101-117zm6150-961l0 0 5-1 5-1-10 2zm5-1l0 0 4386-518 27 236-4386 518-32-235 5-1zm4386-518l0 0 0 0-8 1 7-1zm0 0l0 0 5661-628 26 236-5661 628-26-236 0 0zm5661-628l0 0 2756-304 26 236-2756 304-26-236zm2756-304l0 0 128-14 3 129-132-115zm132 115l0 0 226 8960-237 6-226-8960 106-121 132 115zm226 8960l0 0 3 122-122 0 119-122zm-119 122l0 0-5532 0 0-238 5532 0 119 116-119 122zm-5532 0l0 0-7149 0 0-238 7149 0 0 238zm-7267-116l0 0-3-122 122 0-119 122zm119-122l0 0 119 116 16 553-237 6-16-553 119-122zM7180 8940l0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1461 0 0 30-1461 0-24-15zm1509 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1461 0 0-30 1461 0 24 15zm-1509-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1461 0 0 30-1461 0-24-15zm1509 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1461 0 0-30 1461 0 24 15zm-1509-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1461 0 0 30-1461 0-24-15zm1509 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1461 0 0-30 1461 0 24 15zm-1509-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1461 0 0 30-1461 0-24-15zm1509 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1461 0 0-30 1461 0 24 15zm-1509-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1461 0 0 30-1461 0-24-15zm1509 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1461 0 0-30 1461 0 24 15zm-1509-258l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 258-48 0 0-258 24-15zm0 287l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 1461 0 0 30-1461 0-24-15zm1509 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-258 48 0 0 258-24 15zm0-287l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-1461 0 0-30 1461 0 24 15zm-1509 0l0 0 0-15 24 0-24 15zm24-15l0 0 24 15 0 1545-48 0 0-1545 24-15zm0 1575l0 0-24 0 0-15 24 15zm-24-15l0 0 24-15 730 0 0 30-730 0-24-15zm779 0l0 0 0 15-24 0 24-15zm-24 15l0 0-24-15 0-1545 48 0 0 1545-24 15zm0-1575l0 0 24 0 0 15-24-15zm24 15l0 0-24 15-730 0 0-30 730 0 24 15z\" />\r\n    <g id=\"stairslibrary\">\r\n        <polygon class=\"fil3\" points=\"14216 8116 14467 8366 14446 8387 14195 8137 \" />\r\n        <polygon class=\"fil3\" points=\"14102 8362 14457 8362 14457 8392 14102 8392 \" />\r\n        <polygon class=\"fil3\" points=\"14195 8617 14446 8366 14467 8387 14216 8638 \" />\r\n        <polygon class=\"fil3\" points=\"14442 8732 14442 8377 14472 8377 14472 8732 \" />\r\n        <polygon class=\"fil3\" points=\"14697 8638 14446 8387 14467 8366 14718 8617 \" />\r\n        <polygon class=\"fil3\" points=\"14812 8392 14457 8392 14457 8362 14812 8362 \" />\r\n        <polygon class=\"fil3\" points=\"14718 8137 14467 8387 14446 8366 14697 8116 \" />\r\n        <polygon class=\"fil3\" points=\"14472 8022 14472 8377 14442 8377 14442 8022 \" />\r\n    </g>\r\n    <path class=\"fil3\" d=\"M14457 8007l0 30-18 0-17 1-17 2-17 3-16 4-16 5-16 5-15 6-15 7-15 8-14 8-14 9-13 9-13 10-12 11-12 11-11 12-11 12-10 13-10 13-9 14-8 14-7 15-7 15-6 15-5 16-5 16-4 16-3 17-2 17-1 17 0 18-30 0 1-19 1-19 2-19 3-18 4-18 5-18 6-17 7-17 7-16 8-16 9-15 10-15 10-15 11-14 12-13 12-13 13-12 13-12 14-11 14-10 15-10 15-9 16-8 16-7 17-7 17-6 18-5 18-4 18-3 19-2 19-1 19-1zm-370 370l0 0 30 0 0 18 1 17 2 17 3 17 4 17 5 16 5 16 6 15 7 15 7 15 8 14 9 14 10 13 10 13 11 12 11 12 12 11 12 11 13 10 13 9 14 9 14 8 15 7 15 7 15 6 16 5 16 5 16 4 17 3 17 2 17 1 18 0 0 30-19-1-19-1-19-2-18-3-18-4-18-5-17-6-17-7-16-7-16-8-15-9-15-10-14-10-14-11-13-12-13-12-12-13-12-13-11-14-10-14-10-15-9-15-8-16-7-16-7-17-6-17-5-18-4-18-3-18-2-19-1-19-1-19zm370 370l0 0 0-30 18 0 17-1 17-2 17-3 17-4 16-5 16-5 15-6 15-7 15-7 14-8 14-9 13-9 13-10 12-11 12-11 11-12 11-12 10-13 9-13 9-14 8-14 7-15 7-15 6-15 5-16 5-16 4-17 3-17 2-17 1-17 0-18 30 0-1 19-1 19-2 19-3 18-4 18-5 18-6 17-7 17-7 16-8 16-9 15-10 15-10 14-11 14-12 13-12 13-13 12-13 12-14 11-15 10-15 10-15 9-16 8-16 7-17 7-17 6-18 5-18 4-18 3-19 2-19 1-19 1zm370-370l0 0-30 0 0-18-1-17-2-17-3-17-4-16-5-16-5-16-6-15-7-15-7-15-8-14-9-14-9-13-10-13-11-12-11-12-12-11-12-11-13-10-13-9-14-9-14-8-15-8-15-7-15-6-16-5-16-5-17-4-17-3-17-2-17-1-18 0 0-30 19 1 19 1 19 2 18 3 18 4 18 5 17 6 17 7 16 7 16 8 15 9 15 10 15 10 14 11 13 12 13 12 12 13 12 13 11 14 10 15 10 15 9 15 8 16 7 16 7 17 6 17 5 18 4 18 3 18 2 19 1 19 1 19z\" />\r\n    <polygon class=\"fil3\" points=\"8477 4725 7605 4725 7605 5854 7796 5854 7796 5973 7546 5973 7486 5973 7486 5914 7486 4665 7486 4606 7546 4606 8537 4606 8596 4606 8596 4665 8596 5914 8596 5973 8537 5973 8252 5973 8252 5854 8477 5854 \" />\r\n\r\n    <g transform=\"translate(8745.851,-332.3089)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(-9.9892306,17.519965)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(8.0440694,50.496097)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(8690.9158,-549.91658)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g class=\"fil6\" ng-if=\"evacuationActive\">\r\n        <g transform=\"translate(4300,6500)\">\r\n            <use transform=\"matrix(-1,0,0,1,0,-1300)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(-1,0,0,-1,-500,800)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,3000,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(17500,5900)\">\r\n            <use transform=\"matrix(1,0,0,-1,-1500,1500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,1,0,-2500,2200)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,1,-1,0,1500,1700)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,-1,-5700,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(16250,5000)\">\r\n            <use transform=\"matrix(1,0,0,-1,-1500,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(17500,6500)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,2000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2800,-2500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2800,-4000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2800,-1000)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(15500,6500)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,2000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,4000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2000,-3000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2000,-4500)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2000,-1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(9500,6500)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,3000,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(7400,7500)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(12000,3500)\">\r\n            <use transform=\"matrix(0,-1,1,0,-1500,1700)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1750,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/13a/13a_third.svg","<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" clip-rule=\"evenodd\"\r\n     xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 22222 11111\">\r\n    <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n    <g id=\"rooms\" class=\"fil2\">\r\n        <polygon id=\"waweld\" ng-if=\"selectedRoom.name==\'Wawel D\'\" points=\"20994 6637 18311 6637 18331 1102 20949 852\" />\r\n        <polygon id=\"wawelm\" ng-if=\"selectedRoom.name==\'Wawel M\'\" points=\"21067 9715 18270 9715 18270 6759 21067 6759\" />\r\n        <polygon id=\"planty\" ng-if=\"selectedRoom.name==\'Planty\'\" points=\"6624 7998 4300 7998 4300 6565 6624 6565\" />\r\n        <polygon id=\"elevator1\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"8581 5960 7585 5960 7530 4637 8581 4644\" />\r\n        <polygon id=\"elevator2\" ng-if=\"selectedRoom.name==\'Elevators\'\" points=\"17476 5653 16076 5653 16058 4236 17476 4244\" />\r\n        <polygon id=\"toilet1\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"6206 5970 4516 5970 4461 4633 6206 4640\" />\r\n        <polygon id=\"toilet2\" ng-if=\"selectedRoom.name==\'Restrooms\'\" points=\"13099 6065 11915 6065 11871 4065 12776 4065 12769 3874 13769 3874 13787 4704 13788 6026\" />\r\n        <text y=\"3894\" x=\"18943\" class=\"fil5 fnt2\">WAWEL D</text>\r\n        <text y=\"8469\" x=\"18943\" class=\"fil5 fnt2\">WAWEL M</text>\r\n        <text y=\"7428\" x=\"4837\" class=\"fil5 fnt2\">PLANTY</text>\r\n    </g>\r\n    <g id=\"walls\" class=\"fil3\">\r\n        <path d=\"m14547 5203v-15h24l-24 15zm24-15l24 15v258h-49v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1473v30h-1473l-24-15zm1522 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1473v-30h1473l24 15zm-1522-258v-15h24l-24 15zm24-15l24 15v258h-49v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1473v30h-1473l-24-15zm1522 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1473v-30h1473l24 15zm-1522-258v-15h24l-24 15zm24-15l24 15v258h-49v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1473v30h-1473l-24-15zm1522 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1473v-30h1473l24 15zm-1522-258v-15h24l-24 15zm24-15l24 15v258h-49v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1473v30h-1473l-24-15zm1522 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1473v-30h1473l24 15zm-1522-258v-15h24l-24 15zm24-15l24 15v258h-49v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1473v30h-1473l-24-15zm1522 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1473v-30h1473l24 15zm-1522-258v-15h24l-24 15zm24-15l24 15v258h-49v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1473v30h-1473l-24-15zm1522 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1473v-30h1473l24 15zm-1522 0v-15h24l-24 15zm24-15l24 15v1545h-49v-1545l24-15zm0 1575h-24v-15l24 15zm-24-15l24-15h736v30h-736l-24-15zm785 0v15h-24l24-15zm-24 15l-24-15v-1545h49v1545l-24 15zm0-1575h24v15l-24-15zm24 15l-24 15h-736v-30h736l24 15zm-10956 1100h96v119h-96v-119zm-831 0h443v119h-443v-119zm12421 1130l37-537 119 8-37 537-119-8zm-4687-188h607v119h-607v-119zm666 60v60h-60l60-60zm-60 60l-60-60v-1945h119v1945l-60 60zm-60-2004v-59h60l-60 59zm60-59h888v119h-888l-60-59 60-59zm948 59v59h-60l60-59zm-60 59l-60-59v-196h119v196l-60 59zm-60-255v-60h60l-60 60zm60-60h1020v119h-1020l-60-60 60-60zm1020 0h60v60l-60-60zm60 60v2152h-119v-2152l59-60 60 60zm774 2640v185h-119v-185h119zm-7529 1402h110v119h-110v-119zm11098-1001v-216h119v216h-119zm5 2866v-2558h119v2558h-119zm-10933-3154v293h-119v-293h119zm-3273-615h-1976v-119h1976v119zm1655-3348v2010h-119v-2010h119zm651 3324h-187v-119h187v119zm-390-119h277v119h-277v-119zm337 60v60h-60l60-60zm-60 60l-60-60v-1255h119v1255l-60 60zm0-1374h60v59l-60-59zm60 59l-60 59h-1719v-119h1719l60 59zm-1838 0v-59h60l-60 59zm60-59l60 59v1255h-119v-1255l60-59zm0 1374h-60v-60l60 60zm-60-60l60-60h301v119h-301l-60-60zm766-59h347v119h-347v-119zm-1693 74v-406h119v406h-119zm0-762v-2191h119v2191h-119zm8112 1220v298h-119v-298h119zm4971 0v298h-119v-298h119zm0-792v298h-119v-298h119zm-6287-3588v3988h-119v-3988h119zm5780 1413h-1767v-119h1767v119zm-2132 0h-147v-119h147v119zm-147 0h-59v-60l59 60zm-59-60v-1764h119v1764l-59 60-59-60zm2744-2023v2023h-119v-2023h119zm1939 5163v190h-119v-190h119zm-7536-445h-925v-119h925v119zm-1258 0h-1080v-119h1080v119zm-1080 0h-60v-60l60 60zm-60-60v-1446h119v1446l-59 60-60-60zm60-1506h59v59l-59-59zm59 59l-59 59h-146v-119h146l59 59zm-206 60h-59v-59l59 59zm-59-59l6-2326h119l-6 2326-59 59-59-59zm3497-1045v-1694h119v1694h-119zm2797-144v2797h-119v-2797h119zm1998 2295h-558v-119h558v119zm-558 0h-60v-60l60 60zm-60-60v-2235h119v2235l-60 60-60-60zm60-1421h1391v119h-1391v-119zm2251-597l14-2490h119l-14 2490h-119zm-16 2471l4-818h119l-4 818h-119zm7-1210l5-904h119l-5 904h-119zm-958-1537h158v119h-158v-119zm559 0h467v119h-467v-119zm-750 2235h298v119h-298v-119zm357 60v60h-60l60-60zm-60 60l-60-60v-1361h119v1361l-60 60zm0-1480h60v60l-60-60zm60 60l-60 60h-91v-119h91l60 60zm-151 60h-60v-60l60 60zm-60-60v-191h119v191l-60 60-60-60zm-5-529v-344h119v344h-119zm60-404h60v60l-60-60zm60 60l-60 60h-1295v-119h1295l60 60zm-6525 3384h-945v-119h945v119zm-1278 0h-969v-119h969v119zm-1029-59l-1-60h60l-59 60zm59-60l59 59 45 3082-119 1-45-3082 59-60zm3488 119h-858v-119h858v119zm8933 0h-400v-119h400v119zm-993 0h-182v-119h182v119zm-775 0h-217v-119h217v119zm-810 0h-477v-119h477v119zm-1070 0h-241v-119h241v119zm-834 0h-139v-119h139v119zm-4789-60l-7 3082h-119l7-3082h119zm4214-215l-16 219-119-8 16-219 119 8zm-16 219l-4 55h-55l59-55zm-59 55h-1730v-119h1730l59 64-59 55zm-7631 96h344v119h-344v-119zm-4601 3480v-2359h119v2359h-119zm3830-3366h-323v-119h323v119zm-382-59v-59h60l-60 59zm60-59l60 59v3425h-119v-3425l60-59zm188-888h-700v-119h700v119zm-3501 2082h-1932v-119h1932v119zm1513 2291v-2359h119v2359h-119zm1327-2299h-2523v-119h2523v119zm-896-1356h-1522v-119h1522v119zm-1581-59v-59h60l-60 59zm60-59l60 59v1356h-119v-1356l60-59zm0 1475h-60v-60l60 60zm-60-60l60-60h2305v119h-2305l-60-60zm2424 0v60h-60l60-60zm-60 60l-60-60v-1356h119v1356l-60 60zm0-1475h60v60l-60-60zm60 60l-60 60h-386v-119h386l60 60zm5787-654h663v119h-663v-119zm-524-2033v149h-119v-149h119zm1908-208v149h-119v-149h119zm-10639 3866v-103h119v103h-119zm0-103v-59h60l-60 59zm60-59h452v119h-452l-60-59 60-59zm512 59v59h-60l60-59zm-60 59l-59-59v-1535h119v1535l-60 59zm6777-848l-7 3082h-119l7-3082h119zm3203 60h-1112v-119h1112v119zm-739-60l-7 3082h-119l7-3082h119zm5282 782h-441v-119h441v119zm-797 0h-885v-119h885v119zm-1241 0h-570v-119h570v119zm-926 0h-543v-119h543v119zm-899 0h-694v-119h694v119zm-1050 0h-430v-119h430v119zm3609 2300v-2359h119v2359h-119zm-1255 0v-2359h119v2359h-119zm-1342 0v-1005h119v1005h-119zm-307-1430h119v20l2 20 3 20 3 19 4 19 5 18 6 18 7 18 8 17 9 17 9 17 10 16 11 15 12 15 12 14 13 14 14 13 14 12 15 12 15 11 16 10 17 9 17 9 17 8 18 7 18 6 18 5 19 4 19 3 20 3 20 2h20v119l-26-1-26-2-26-3-25-5-25-6-24-7-24-8-23-9-23-10-22-11-21-12-21-13-20-14-19-15-19-16-18-17-17-18-16-19-15-19-14-20-13-21-12-21-11-22-10-23-9-23-8-24-7-24-6-25-5-25-3-26-2-26-1-26zm510 510v-119h20l20-2 20-3 19-3 19-4 18-5 18-6 18-7 17-8 17-9 17-9 16-10 15-11 15-12 14-12 14-13 13-14 12-14 12-15 11-15 10-16 9-17 9-17 8-17 7-18 6-18 5-18 4-19 3-19 3-20 2-20v-20h119l-1 26-2 26-3 26-5 25-6 25-7 24-8 24-9 23-10 23-11 22-12 21-13 21-14 20-15 19-16 19-17 18-18 17-19 16-19 15-20 14-21 13-21 12-22 11-23 10-23 9-24 8-24 7-25 6-25 5-26 3-26 2-26 1zm510-1440v929h-119v-929h119zm-902 0v929h-119v-929h119zm-5556 2905l3 122h-122l119-122zm-119 122h-6515v-237h6515l119 115-119 122zm-6515 0h-119v-119l119 119zm-119-119v-3083h238v3083l-119 119-119-119zm118-3202l120-1v120l-120-119zm120 119l-118 119-367 4-2-237 367-4 120 119zm-485 122l-120 1v-120l120 119zm-120-119v-1380h237v1380l-118 119-120-119zm0-1380v-120l120 1-120 119zm120-119l367 4-3 237-367-4-117-119 120-119zm484 123v120l-120-1 120-119zm-120 119l-118-119v-2649h238v2649l-120 119zm-118-2768v-101l101-16-101 117zm101-117l6150-961 36 234-6150 961-137-117 101-117zm6150-961l5-1 5-1-10 2zm5-1l4386-518 27 236-4386 518-32-235 5-1zm4386-518l-8 1 7-1zl5661-628 26 236-5661 628-26-236zm5661-628l2756-304 26 236-2756 304-26-236zm2756-304l128-14 3 129-132-115zm132 115l226 8960-237 6-226-8960 106-121 132 115zm226 8960l3 122h-122l119-122zm-119 122h-5532v-238h5532l119 116-119 122zm-5532 0h-7149v-238h7149v238zm-7267-116l-3-122h122l-119 122zm119-122l119 116 16 553-237 6-16-553 119-122zm-1266-752v-15h24l-24 15zm24-15l24 15v258h-48v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1463v30h-1463l-24-15zm1512 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1463v-30h1463l24 15zm-1512-258v-15h24l-24 15zm24-15l24 15v258h-48v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1463v30h-1463l-24-15zm1512 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1463v-30h1463l24 15zm-1512-258v-15h24l-24 15zm24-15l24 15v258h-48v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1463v30h-1463l-24-15zm1512 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1463v-30h1463l24 15zm-1512-258v-15h24l-24 15zm24-15l24 15v258h-48v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1463v30h-1463l-24-15zm1512 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1463v-30h1463l24 15zm-1512-258v-15h24l-24 15zm24-15l24 15v258h-48v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1463v30h-1463l-24-15zm1512 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1463v-30h1463l24 15zm-1512-258v-15h24l-24 15zm24-15l24 15v258h-48v-258l24-15zm0 287h-24v-15l24 15zm-24-15l24-15h1463v30h-1463l-24-15zm1512 0v15h-24l24-15zm-24 15l-24-15v-258h49v258l-24 15zm0-287h24v15l-24-15zm24 15l-24 15h-1463v-30h1463l24 15zm-1512 0v-15h24l-24 15zm24-15l24 15v1545h-48v-1545l24-15zm0 1575h-24v-15l24 15zm-24-15l24-15h732v30h-732l-24-15zm780 0v15h-24l24-15zm-24 15l-24-15v-1545h48v1545l-24 15zm0-1575h24v15l-24-15zm24 15l-24 15h-732v-30h732l24 15zm6562 382v-15h15l-15 15zm15-15l15 15v704h-30v-704l15-15zm0 733h-15v-15l15 15zm-15-15h30l-15-15h17l17-1 17-2 17-3 16-4 16-5 16-5 15-6 15-7 15-7 14-8 14-9 13-9 13-10 12-11 12-11 11-12 11-12 10-13 9-13 9-14 8-14 7-15 7-15 6-15 5-16 5-16 4-16 3-17 2-17 1-17v-17h30l-1 19-1 19-2 18-3 18-4 18-5 17-6 17-7 17-7 16-8 16-9 15-9 15-10 14-11 14-12 13-12 13-13 12-13 12-14 11-14 10-15 10-15 9-16 8-16 7-17 7-17 6-17 5-18 4-18 3-18 2-19 1-19 1-15-15zm382-352h-30v-17l-1-17-2-17-3-17-4-16-5-16-5-16-6-15-7-15-7-15-8-14-9-14-9-13-10-13-11-12-11-12-12-11-12-11-13-10-13-9-14-9-14-8-15-7-15-7-15-6-16-5-16-5-16-4-17-3-17-2-17-1h-17v-30l19 1 19 1 18 2 18 3 18 4 17 5 17 6 17 7 16 7 16 8 15 9 15 10 14 10 14 11 13 12 13 12 12 13 12 13 11 14 10 14 9 15 9 15 8 16 7 16 7 17 6 17 5 17 4 18 3 18 2 18 1 19 1 19zm-367-366v30h-17l-17 1-17 2-17 3-16 4-16 5-16 5-15 6-15 7-15 7-14 8-14 9-13 9-13 10-12 11-12 11-11 12-11 12-10 13-9 13-9 14-8 14-7 15-7 15-6 15-5 16-5 16-4 16-3 17-2 17-1 17v17h-30l1-19 1-19 2-18 3-18 4-18 5-17 6-17 7-17 7-16 8-16 9-15 9-15 10-14 11-14 12-13 12-13 13-12 13-12 14-11 14-10 15-10 15-9 16-8 16-7 17-7 17-6 17-5 18-4 18-3 18-2 19-1 19-1zm-367 367h30v17l1 17 2 17 3 17 4 16 5 16 5 16 6 15 7 15 7 15 8 14 9 14 9 13 10 13 11 12 11 12 12 11 12 11 13 10 13 9 14 9 14 8 15 7 15 7 15 6 16 5 16 5 16 4 17 3 17 2 17 1h17v30l-19-1-19-1-18-2-18-3-18-4-17-5-17-6-17-7-16-7-16-8-15-9-15-10-14-10-14-11-13-12-13-12-12-13-12-13-11-14-10-14-9-15-9-15-8-16-7-16-7-17-6-17-5-17-4-18-3-18-2-18-1-19-1-19zm367 367v-30h17l17-1 17-2 17-3 16-4 16-5 16-5 15-6 15-7 15-7 14-8 14-9 13-9 13-10 12-11 12-11 11-12 11-12 10-13 9-13 9-14 8-14 7-15 7-15 6-15 5-16 5-16 4-16 3-17 2-17 1-17v-17h30l-1 19-1 19-2 18-3 18-4 18-5 17-6 17-7 17-7 16-8 16-9 15-9 15-10 14-11 14-12 13-12 13-13 12-13 12-14 11-14 10-15 10-15 9-16 8-16 7-17 7-17 6-17 5-18 4-18 3-18 2-19 1-19 1zm367-367h-30v-17l-1-17-2-17-3-17-4-16-5-16-5-16-6-15-7-15-7-15-8-14-9-14-9-13-10-13-11-12-11-12-12-11-12-11-13-10-13-9-14-9-14-8-15-7-15-7-15-6-16-5-16-5-16-4-17-3-17-2-17-1h-17v-30l19 1 19 1 18 2 18 3 18 4 17 5 17 6 17 7 16 7 16 8 15 9 15 10 14 10 14 11 13 12 13 12 12 13 12 13 11 14 10 14 9 15 9 15 8 16 7 16 7 17 6 17 5 17 4 18 3 18 2 18 1 19 1 19z\" />\r\n        <polygon points=\"8483 4724 7611 4724 7611 5854 7802 5854 7802 5973 7552 5973 7492 5973 7492 5914 7492 4665 7492 4605 7552 4605 8543 4605 8602 4605 8602 4665 8602 5914 8602 5973 8543 5973 8258 5973 8258 5854 8483 5854\" />\r\n    </g>\r\n    <g id=\"stairs_library\" class=\"fil3\">\r\n        <polygon points=\"14316 8093 14565 8341 14544 8362 14295 8114\" />\r\n        <polygon points=\"14202 8337 14554 8337 14554 8367 14202 8367\" />\r\n        <polygon points=\"14295 8590 14544 8341 14565 8362 14316 8611\" />\r\n        <polygon points=\"14539 8704 14539 8352 14569 8352 14569 8704\" />\r\n        <polygon points=\"14793 8611 14544 8362 14565 8341 14814 8590\" />\r\n        <polygon points=\"14906 8367 14554 8367 14554 8337 14906 8337\" />\r\n        <polygon points=\"14814 8114 14565 8362 14544 8341 14793 8093\" />\r\n        <polygon points=\"14569 8e3 14569 8352 14539 8352 14539 8e3\" />\r\n    </g>\r\n    <g transform=\"translate(8705.3 -372.86)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(3.5278 31.037)\">\r\n        <use xlink:href=\"#elevator\" />\r\n    </g>\r\n    <g transform=\"translate(-18.99 9.945)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g transform=\"translate(7487.9 -306.61)\">\r\n        <use xlink:href=\"#toilet\" />\r\n    </g>\r\n    <g class=\"fil6\" ng-if=\"evacuationActive\">\r\n        <g transform=\"translate(4300,6500)\">\r\n            <use transform=\"matrix(-1,0,0,1,0,-1300)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(-1,0,0,-1,0,800)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,3100,-400)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(13900,5000)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(16250,5000)\">\r\n            <use transform=\"matrix(1,0,0,-1,-1500,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(17500,6500)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(15500,6500)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,2000,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2000,-3000)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,2000,-1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(9500,6600)\">\r\n            <use transform=\"matrix(0,-1,-1,0,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,-1,0,1500,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,2900,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(0,-1,1,0,4400,0)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n        <g transform=\"translate(7400,7500)\">\r\n            <use transform=\"matrix(1,0,0,1,0,0)\" xlink:href=\"#arrow\"></use>\r\n            <use transform=\"matrix(1,0,0,1,0,1500)\" xlink:href=\"#arrow\"></use>\r\n        </g>\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/15/15_basement.svg","<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n   id=\"svg3336\"\r\n   viewBox=\"0 0 22222 11111\"\r\n   clip-rule=\"evenodd\"\r\n   version=\"1.1\">\r\n\r\n  \r\n  <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n  <g class=\"fil2\">\r\n    <rect ng-if=\"selectedRoom.name==\'Elevator\'\" y=\"6786.8853\" x=\"10398.467\" height=\"1252.6204\" width=\"1081.0287\"/>\r\n    <path ng-if=\"selectedRoom.name==\'Miłosz\'\" d=\"m 13339.571,6540.9504 0,-150 -528.571,0 -528.571,0 0,-789.2857 0,-789.2857 1746.428,0 1746.429,0 0,939.2857 0,939.2857 -1217.857,0 -1217.858,0 0,-150 z\"></path>\r\n	<path ng-if=\"selectedRoom.name==\'Matejko\'\" d=\"m 13339.571,7744.5218 0,-989.2857 1217.858,0 1217.857,0 0,989.2857 0,989.2857 -1217.857,0 -1217.858,0 0,-989.2857 z\"/>\r\n	<path ng-if=\"selectedRoom.name==\'Wyspiański\'\" d=\"m 12768.143,10458.808 0,-217.858 255.357,-0.04 c 212.562,-0.04 258.786,-1.833 275.816,-10.715 11.253,-5.87 24.914,-10.671 30.358,-10.671 8.368,0 9.897,-109.787 9.897,-710.7145 l 0,-710.7143 1217.858,0 1217.857,0 0,939.2858 0,939.286 -1503.572,0 -1503.571,0 0,-217.857 z\"/>\r\n	<path ng-if=\"selectedRoom.name==\'Showers\'\" d=\"m 6061,7080.226 0,-582.1429 1278.5714,0 1278.5715,0 0,582.1429 0,582.1428 -1278.5715,0 -1278.5714,0 0,-582.1428 z\"/>	\r\n	<path ng-if=\"selectedRoom.name==\'Showers\'\" d=\"m 6061,8298.0831 0,-571.4286 1278.5714,0 1278.5715,0 0,571.4286 0,571.4286 -1278.5715,0 -1278.5714,0 0,-571.4286 z\"/>\r\n	<rect ng-if=\"selectedRoom.name==\'Modrzejewska\'\" width=\"2221.4285\" height=\"1750\" x=\"7521.4287\" y=\"8932.4287\"/>\r\n      <path ng-if=\"selectedRoom.name==\'Kopernik\'\" d=\"m 6065.3583,5331.8272 0,-1092.3554 -136.5444,0 -136.5444,0 0,-929.8025 0,-929.8025 656.7137,0 656.7136,0 0,995.6874 0,995.6874 35.7617,-4.1148 35.7616,-4.1148 3.3323,-991.5726 3.3322,-991.5726 1196.3081,0 1196.308,0 0,2022.1579 0,2022.1579 -1755.5712,0 -1755.5712,0 0,-1092.3554 z\"/>\r\n	<text x=\"14000\" y=\"6000\" class=\"fil5 fnt5\">MIŁOSZ</text>\r\n	 <text x=\"14000\" y=\"7800\" class=\"fil5 fnt5\">MATEJKO</text>\r\n	 <text x=\"13750\" y=\"9800\" class=\"fil5 fnt5\">WYSPIAŃSKI</text>\r\n	 <text x=\"7700\" y=\"10000\" class=\"fil5 fnt7\">MODRZEJEWSKA</text>\r\n       <text x=\"7000\" y=\"5000\" class=\"fil5 fnt5\">KOPERNIK</text>\r\n  </g>\r\n  <g transform=\"translate(2907.0724,2179.5774)\">\r\n        <use xlink:href=\"#elevator\" />\r\n  </g>\r\n  <g transform=\"translate(7400,6900)\">\r\n        <use xlink:href=\"#shower\" />\r\n  </g>\r\n  <g transform=\"translate(7400,8100)\">\r\n        <use xlink:href=\"#shower\" />\r\n  </g>\r\n    <g transform=\"translate(-12100,8100)\">\r\n        <use xlink:href=\"#storage\" />\r\n  </g>\r\n  <g class=\"fil3\">\r\n    <path d=\"m 10353.973,6746.957 0,14.9453 0,1337.8887 1174.138,0 0,-1352.834 -1174.138,0 z m 29.89,29.8907 1114.358,0 0,1293.0527 -1114.358,0 0,-1293.0527 z\"/>\r\n  <path d=\"m 9601.6992,6579.5078 0,30 0,1657.7324 2662.4378,0 0,-1687.7324 -2662.4378,0 z m 60,60 2542.4378,0 0,1567.7324 -2542.4378,0 0,-1567.7324 z\"/>\r\n  <path d=\"m 5972.83,10815.151 c 0,-9.783 -5.8567,-17.789 -12.9814,-17.789 -49.5706,0 -47.6384,131.452 -47.6384,-3236.7615 l 0,-3202.8758 -139.4438,0 -139.4135,0 0,-1043.6225 c 0,-919.7625 2.1132,-1043.6254 18.1739,-1043.6254 10.0228,0 18.204,-8.0055 18.204,-17.7887 0,-15.7394 222.2828,-17.7888 1927.7297,-17.7888 l 1927.759,0 0,-189.7498 0,-189.7498 1406.3925,0 1406.392,0 0,1399.4037 0,1399.4066 1782.248,0 1782.277,0 0,29.648 c 0,16.3063 5.434,29.6479 12.106,29.6479 8.06,0 12.136,1016.2365 12.136,3024.9852 0,3180.4009 1.811,3058.8709 -47.639,3058.8709 -7.154,0 -12.981,8.006 -12.981,17.789 0,15.784 -557.714,17.789 -4946.675,17.789 -4388.9315,0 -4946.646,-2.008 -4946.646,-17.789 z m 1479.149,-634.475 0,-498.0947 30.3099,0 30.3099,0 0,498.0947 0,498.091 1115.4291,0 1115.3989,0 0,-498.091 c 0,-324.1581 4.2566,-498.0947 12.136,-498.0947 6.6718,0 12.136,5.336 12.136,11.8591 0,6.5232 8.1813,11.8592 18.1739,11.8592 15.8795,0 18.2041,61.9329 18.2041,486.2354 l 0,486.232 1448.8082,0 1448.838,0 0,-219.397 0,-219.399 -272.789,0 -272.789,0 0,-266.834 0,-266.8374 30.31,0 30.31,0 0,219.3978 0,219.4006 527.404,0 527.405,0 0,-231.2598 0,-231.2569 30.31,0 30.31,0 0,260.9048 c 0,166.0319 -4.408,260.9079 -12.136,260.9079 -6.642,0 -12.106,8.005 -12.106,17.789 0,15.284 -38.401,17.788 -272.789,17.788 l -272.82,0 0,219.399 0,219.397 1509.458,0 1509.458,0 0,-942.8194 0,-942.8195 -1224.532,0 -1224.533,0 0,160.1019 0,160.1019 -30.31,0 -30.31,0 0,-278.6966 0,-278.6937 30.31,0 c 29.646,0 30.31,1.9785 30.31,88.9439 l 0,88.9468 1224.533,0 1224.532,0 0,-990.2562 0,-990.2591 -1224.532,0 -1224.533,0 0,604.827 0,604.8299 -30.31,0 -30.31,0 0,-735.2809 c 0,-482.2811 -4.166,-735.2808 -12.136,-735.2808 -6.672,0 -12.106,-8.0056 -12.106,-17.7888 0,-14.6261 -21.555,-17.7888 -121.24,-17.7888 -121.239,0 -121.239,0 -121.239,-29.6509 l 0,-29.6479 151.549,0 c 126.614,0 151.55,2.9234 151.55,17.7887 0,9.7862 5.464,17.7888 12.106,17.7888 7.366,0 12.136,51.3908 12.136,130.4539 l 0,130.4539 1224.533,0 1224.532,0 0,-942.8194 0,-942.8194 -1751.937,0 -1751.937,0 0,985.174 c 0,838.0063 -2.416,987.7048 -17.299,1002.1154 -21.676,21.1758 -28.589,21.1758 -50.235,0 -14.762,-14.4283 -17.328,-174.2555 -17.328,-1078.2137 0,-837.4216 3.2,-1062.7312 15.155,-1068.1913 12.136,-5.5339 12.136,-8.3008 0,-13.8347 -17.902,-8.1768 -20.71,-99.8167 -3.019,-99.8167 7.94,0 12.106,-252.9998 12.106,-735.2809 0,-482.2811 -4.166,-735.2808 -12.106,-735.2808 -6.672,0 -12.136,-13.3416 -12.136,-29.648 0,-16.3063 5.464,-29.6479 12.136,-29.6479 7.879,0 12.106,-175.9151 12.106,-504.0239 l 0,-504.024 -1285.153,0 -1285.1528,0 0,148.2427 c 0,90.9223 4.6793,148.2427 12.1058,148.2427 6.6718,0 12.1361,8.0055 12.1361,17.7887 0,9.7833 -5.4643,17.7888 -12.1361,17.7888 -7.7888,0 -12.1058,120.5703 -12.1058,337.9925 0,217.4222 4.317,337.9925 12.1058,337.9925 6.6718,0 12.1361,13.3416 12.1361,29.6479 0,16.3064 -5.4643,29.648 -12.1361,29.648 -7.9397,0 -12.1058,268.8129 -12.1058,782.7175 0,513.9076 4.1661,782.7206 12.1058,782.7206 6.6718,0 12.1361,18.6776 12.1361,41.5071 0,22.8295 -5.4643,41.5071 -12.1361,41.5071 -6.6718,0 -12.1058,21.3471 -12.1058,47.4367 0,26.0926 5.434,47.4397 12.1058,47.4397 6.6718,0 12.1361,18.6776 12.1361,41.5071 0,22.8295 -5.4643,41.5071 -12.1361,41.5071 -6.6718,0 -12.1058,21.3471 -12.1058,47.4367 0,26.0926 5.434,47.4397 12.1058,47.4397 6.6718,0 12.1361,18.6776 12.1361,41.5071 0,22.8295 -5.4643,41.5072 -12.1361,41.5072 -6.6718,0 -12.1058,21.3471 -12.1058,47.4367 0,26.0925 5.434,47.4396 12.1058,47.4396 6.6718,0 12.1361,18.6776 12.1361,41.5072 0,22.8295 -5.4643,41.5071 -12.1361,41.5071 -6.6718,0 -12.1058,18.6776 -12.1058,41.5071 0,22.8295 5.434,41.5101 12.1058,41.5101 6.6718,0 12.1361,21.3441 12.1361,47.4367 0,26.0896 -5.4643,47.4367 -12.1361,47.4367 -7.9397,0 -12.1058,239.165 -12.1058,693.7737 0,454.6088 -4.1963,693.7738 -12.1361,693.7738 -6.6718,0 -12.136,-5.339 -12.136,-11.8622 0,-6.5201 -8.1813,-11.8591 -18.1739,-11.8591 -16.0908,0 -18.1739,-252.9998 -18.1739,-2205.8426 l 0,-2205.8396 -1206.3588,0 -1206.3597,0 0,990.2561 0,990.2562 -30.3099,0 -30.3099,0 0,-990.2562 0,-990.2561 -660.7804,0 -660.7501,0 0,930.9602 0,930.9603 133.3455,0 133.3757,0 0,1096.9917 0,1096.9887 1448.8391,0 1448.8381,0 0,29.6509 0,29.648 -1448.8381,0 -1448.8391,0 0,587.0381 0,587.0382 1285.1525,0 1285.1837,0 0,-278.6936 c 0,-177.8907 4.3774,-278.6966 12.1058,-278.6966 6.6718,0 12.1361,5.336 12.1361,11.8592 0,6.5231 8.1812,11.8591 18.1738,11.8591 15.9399,0 18.2041,73.7921 18.2041,592.9678 l 0,592.9707 -30.3099,0 -30.3099,0 0,-296.4853 0,-296.4854 -1285.1837,0 -1285.1525,0 0,575.1819 0,575.179 1448.8391,0 1448.8381,0 0,29.648 0,29.6479 -1448.8381,0 -1448.8391,0 0,871.6644 0,871.6614 697.1583,0 697.129,0 0,-498.091 z\" />\r\n       <use xlink:href=\"#stairs15\" />\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/15/15_first.svg","<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n   id=\"svg3336\"\r\n   viewBox=\"0 0 22222 11111\"\r\n   clip-rule=\"evenodd\"\r\n   version=\"1.1\">\r\n\r\n  \r\n <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n  <g class=\"fil2\">\r\n  <path ng-if=\"selectedRoom.name==\'Kitchen\'\" d=\"m 7305.2551,4446.9671 c -852.9501,-4.2804 -1553.2315,-10.1955 -1556.1798,-13.1514 -2.9484,-2.9555 -8.6895,-657.156 -12.7572,-1453.7785 l -7.3963,-1448.4039 251.5833,-6.922 c 311.7397,-8.5771 778.908,-8.5761 1000.553,0 l 167.0817,6.4664 3.0908,620.7303 c 3.2533,652.6669 4.2801,665.768 50.0558,636.9167 14.5953,-9.1993 20.7197,-35.2353 26.8344,-114.0835 4.3564,-56.1899 9.9863,-104.2316 12.5071,-106.7586 2.5212,-2.5275 152.9093,-5.5568 334.1954,-6.7318 328.0827,-2.125 329.7337,-2.023 355.9979,22.6259 l 26.3856,24.763 798.0164,0 798.0159,0 0,432.9185 c 0,238.1058 -3.2686,648.7999 -7.2657,912.6543 -7.1711,473.5094 -7.563,479.8356 -30.1921,487.4726 -36.6047,12.354 -553.6356,13.5886 -2210.5287,5.2796 z\"/>\r\n  <path ng-if=\"selectedRoom.name==\'Szymborska\'\" d=\"m 5730,5187.6105 c 4.026,-361.1869 8.5406,-657.7903 10.0331,-659.1183 1.4945,-1.33 577.0542,-6.0527 1279.025,-10.4985 l 1276.3111,-8.0839 0,667.2019 0,667.2025 -1286.3446,0 -1286.344,0 7.3194,-656.7037 z\" />\r\n  <path ng-if=\"selectedRoom.name==\'Restrooms\'\" d=\"m 5730,6980.6514 c -3.8481,-40.8588 -7.0343,-295.8752 -7.077,-566.7031 l -0.1017,-492.4143 1291.7919,-2.8434 1291.7914,-2.8434 -7.1212,534.5242 c -3.9142,293.9889 -10.2653,550.2836 -14.1083,569.5444 l -6.9866,35.0197 -1270.6065,0 -1270.6062,0 -6.9992,-74.2882 z\"/>\r\n  <path  ng-if=\"selectedRoom.name==\'Restrooms\'\" d=\"m 5730,7687.7666 0,-544.7815 1284.086,0 1284.0867,0 6.1269,211.8597 c 3.3703,116.5227 8.6564,361.6744 11.7487,544.7817 l 5.6216,332.9219 -1295.8347,0 -1295.8352,0 0,-544.7818 z\"/>\r\n  <!--<path d=\"m 12262.064,3334.2526 4018.321,0 0,5150.662 -4018.321,0 z m -6532.519,4974.5709 10550.838,0 0,2333.2055 -10550.8378,0 z\" />-->\r\n  <rect ng-if=\"selectedRoom.name==\'Elevator\'\" y=\"6786.8853\" x=\"10398.467\" height=\"1252.6204\" width=\"1081.0287\"/>\r\n  <text x=\"6150\" y=\"5300\" class=\"fil5 fnt5\">SZYMBORSKA</text>\r\n    <text x=\"6150\" y=\"1100\" class=\"fil5 fnt5\">Balcony</text>\r\n  </g>\r\n  <g transform=\"translate(2907.0724,2179.5774)\">\r\n        <use xlink:href=\"#elevator\" />\r\n  </g>\r\n  <g transform=\"translate(1740.2477,2385.4876)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n    <g transform=\"translate(1879.5212,-579.25562)\">\r\n        <use xlink:href=\"#food\" />\r\n  </g>\r\n  <g transform=\"translate(1740.2477,1185.4876)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n  <g class=\"fil3\">\r\n    <path d=\"m 10353.973,6746.957 0,14.9453 0,1337.8887 1174.138,0 0,-1352.834 -1174.138,0 z m 29.89,29.8907 1114.358,0 0,1293.0527 -1114.358,0 0,-1293.0527 z\"/>\r\n  <path d=\"m 9601.6992,6579.5078 0,30 0,1657.7324 2662.4378,0 0,-1687.7324 -2662.4378,0 z m 60,60 2542.4378,0 0,1567.7324 -2542.4378,0 0,-1567.7324 z\"/>\r\n  <path d=\"m 5605.6535,10730.216 c -14.4869,-27.136 -21.2545,-1661.7312 -21.2545,-5133.755 0,-4603.41532 3.1059,-5097.05862 32.2651,-5126.28715 28.5751,-28.64436 165.7687,-32.34343 1199.6669,-32.34343 1033.8976,0 1171.0912,3.69948 1199.6665,32.34343 28.4243,28.49373 32.265,148.52948 32.265,1008.52125 l 0,976.1776 729.7514,0 729.7516,0 57.8953,-128.6379 c 31.8425,-70.7507 78.671,-172.6321 104.0634,-226.4024 l 46.168,-97.7651 1034.9258,0 1034.925,0 107.484,62.542 c 59.115,34.3986 172.159,106.1787 251.208,159.5113 l 143.724,96.9686 5.541,437.369 5.543,437.3687 2038.437,0 c 1558.076,0 2044.246,5.8203 2063.077,24.6989 35.844,35.9302 35.844,7488.8722 0,7524.8022 -19.036,19.084 -1246.371,24.698 -5399.243,24.698 -5292.7013,0 -5374.9297,-0.606 -5395.8605,-39.81 z m 10691.4745,-3752.4345 -5.191,-3648.1711 -2021.148,-5.2471 c -1603.346,-4.1632 -2024.527,0.1019 -2037.504,20.5821 -8.998,14.2062 -16.501,593.1223 -16.674,1286.4806 -0.203,826.5026 -7.385,1260.6512 -20.846,1260.6512 -21.954,0 -22.469,-54.5545 -20.929,-2215.2473 0.875,-1223.045 -1.199,-1300.092 -35.269,-1312.0604 -19.909,-6.9933 -114.286,-63.6763 -209.73,-125.9627 l -173.533,-113.2472 -980.191,0 c -761.825,0 -983.7998,5.7316 -996.3898,25.7276 -8.9101,14.1503 -48.723,95.1923 -88.4738,180.0932 l -72.2745,154.3651 7.3973,751.2455 c 9.3137,945.9573 -16.6073,2613.9221 -40.6221,2613.9221 -10.0813,0 -18.1055,-296.4591 -18.1055,-668.9166 l 0,-668.9171 -71.8626,0 c -90.5711,0 -94.7167,-36.3473 -5.1332,-45.0059 l 66.7296,-6.4495 5.3402,-941.6296 5.3405,-941.6294 -810.0171,0 c -517.8636,0 -814.5942,-7.4234 -822.7068,-20.582 -7.6748,-12.4484 -154.2043,-20.5821 -370.791,-20.5821 l -358.1017,0 0,123.4922 c 0,68.6071 -9.1252,123.4929 -20.5323,123.4929 -13.2468,0 -20.532,-226.403 -20.532,-638.0445 l 0,-638.0438 -174.524,0 c -102.6607,0 -174.5231,-8.4746 -174.5231,-20.582 0,-12.2745 78.5872,-20.5821 194.6971,-20.5821 l 194.697,0 5.4916,509.4059 5.4921,509.406 343.9142,5.6436 343.914,5.643 0,-957.5637 0,-957.56357 -1098.4724,0 -1098.4724,0 0,442.51467 0,442.5141 256.6524,0 c 157.4135,0 256.6524,7.9584 256.6524,20.5821 0,12.6241 -99.284,20.582 -256.7883,20.582 l -256.788,0 5.2688,1476.7631 5.269,1476.7632 1555.3134,5.2751 c 1013.0981,3.4345 1555.3134,12.4049 1555.3134,25.7275 0,13.3691 -540.4174,20.4528 -1560.4466,20.4528 l -1560.4465,0 0,668.9171 0,668.9166 1303.7941,0 1303.7942,0 0,-339.6039 c 0,-212.6813 7.6739,-339.604 20.5322,-339.604 12.928,0 20.5321,137.2139 20.5321,370.4774 l 0,370.4768 -1324.3264,0 -1324.3264,0 0,576.2976 0,576.2983 1303.7943,0 1303.7942,0 0,-216.1117 c 0,-130.3532 8.1482,-216.1118 20.5322,-216.1118 13.0799,0 20.5321,168.0868 20.5321,463.0963 0,284.1992 -7.663,463.0971 -19.8373,463.0971 -11.1705,0 -22.384,-96.6702 -25.6652,-221.2574 l -5.8276,-221.2576 -1293.5284,0 -1293.528,0 -5.4626,560.727 -5.463,560.7267 1492.3374,5.2797 c 1171.8482,4.1479 1494.1739,10.8053 1500.8906,31.0078 6.7908,20.4256 -300.6844,25.7277 -1492.0075,25.7277 l -1500.5612,0 0,1162.8868 0,1162.8861 5297.3619,0 5297.363,0 -5.189,-3648.1705 z\" />\r\n       <use xlink:href=\"#stairs15\" />\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/15/15_fourth.svg","<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n   id=\"svg3336\"\r\n   viewBox=\"0 0 22222 11111\"\r\n   clip-rule=\"evenodd\"\r\n   version=\"1.1\">\r\n\r\n  <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n  <g class=\"fil2\">\r\n  <!--<path d=\"m 5709.0211,3678.4584 0,-2168.1867 434.8981,-5.7009 c 239.1939,-3.1355 566.3093,-3.1476 726.9231,-0.027 l 292.025,5.674 0.4192,523.9828 c 0.3916,488.8475 6.3656,737.1781 18.0147,748.8272 2.6945,2.6946 9.1483,0.65 14.3419,-4.5436 6.351,-6.351 10.3702,-47.4721 12.2756,-125.5922 l 2.8328,-116.1496 331.827,4.7528 c 192.2029,2.7529 346.3922,8.2336 366.4423,13.0252 76.5909,18.304 211.1397,22.3561 917.3077,27.6261 l 736.5385,5.4966 0,1289.9862 0,1289.9862 -49.9981,4.0134 c -27.4989,2.2073 -58.6597,9.6886 -69.2461,16.6251 -17.3791,11.3873 -60.8833,12.3609 -448.0788,10.0284 -300.9183,-1.8129 -440.3033,-5.3587 -467.2924,-11.8877 -21.1539,-5.1173 -74.6077,-10.0967 -118.7863,-11.0654 l -80.3244,-1.7613 -6.1586,26.9231 c -3.3872,14.8076 -8.4667,166.25 -11.2876,336.5384 l -5.129,309.6154 -1298.7723,0 -1298.7723,0 0,-2168.1866 z\"/>-->\r\n  <rect ng-if=\"selectedRoom.name==\'Skłodowska-Curie\'\" width=\"4109.5054\" height=\"4850.7461\" x=\"12236.897\" y=\"3347.3896\"/>\r\n  <path ng-if=\"selectedRoom.name==\'Restrooms\'\" d=\"m 5730,6980.6514 c -3.8481,-40.8588 -7.0343,-295.8752 -7.077,-566.7031 l -0.1017,-492.4143 1291.7919,-2.8434 1291.7914,-2.8434 -7.1212,534.5242 c -3.9142,293.9889 -10.2653,550.2836 -14.1083,569.5444 l -6.9866,35.0197 -1270.6065,0 -1270.6062,0 -6.9992,-74.2882 z\"/>\r\n  <path ng-if=\"selectedRoom.name==\'Restrooms\'\" d=\"m 5730,7687.7666 0,-544.7815 1284.086,0 1284.0867,0 6.1269,211.8597 c 3.3703,116.5227 8.6564,361.6744 11.7487,544.7817 l 5.6216,332.9219 -1295.8347,0 -1295.8352,0 0,-544.7818 z\"/>\r\n  <!--<path d=\"m 12262.064,3334.2526 4018.321,0 0,5150.662 -4018.321,0 z m -6532.519,4974.5709 10550.838,0 0,2333.2055 -10550.8378,0 z\" />-->\r\n  <rect ng-if=\"selectedRoom.name==\'Elevator\'\" y=\"6786.8853\" x=\"10398.467\" height=\"1252.6204\" width=\"1081.0287\"/>\r\n  <text x=\"6150\" y=\"1100\" class=\"fil5 fnt5\">Balcony</text>\r\n  <text x=\"13000\" y=\"5900\" class=\"fil5 fnt5\">SKŁODOWSKA-CURIE</text>\r\n  </g>\r\n  <g transform=\"translate(2907.0724,2179.5774)\">\r\n        <use xlink:href=\"#elevator\" />\r\n  </g>\r\n  <g transform=\"translate(1740.2477,2385.4876)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n  <g transform=\"translate(1740.2477,1185.4876)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n  <g class=\"fil3\">\r\n    <path d=\"m 10353.973,6746.957 0,14.9453 0,1337.8887 1174.138,0 0,-1352.834 -1174.138,0 z m 29.89,29.8907 1114.358,0 0,1293.0527 -1114.358,0 0,-1293.0527 z\"/>\r\n  <path d=\"m 9601.6992,6579.5078 0,30 0,1657.7324 2662.4378,0 0,-1687.7324 -2662.4378,0 z m 60,60 2542.4378,0 0,1567.7324 -2542.4378,0 0,-1567.7324 z\"/>\r\n  <path d=\"m 5605.6535,10730.216 c -14.4869,-27.136 -21.2545,-1661.7312 -21.2545,-5133.755 0,-4603.41532 3.1059,-5097.05862 32.2651,-5126.28715 28.5751,-28.64436 165.7687,-32.34343 1199.6669,-32.34343 1033.8976,0 1171.0912,3.69948 1199.6665,32.34343 28.4243,28.49373 32.265,148.52948 32.265,1008.52125 l 0,976.1776 729.7514,0 729.7516,0 57.8953,-128.6379 c 31.8425,-70.7507 78.671,-172.6321 104.0634,-226.4024 l 46.168,-97.7651 1034.9258,0 1034.925,0 107.484,62.542 c 59.115,34.3986 172.159,106.1787 251.208,159.5113 l 143.724,96.9686 5.541,437.369 5.543,437.3687 2038.437,0 c 1558.076,0 2044.246,5.8203 2063.077,24.6989 35.844,35.9302 35.844,7488.8722 0,7524.8022 -19.036,19.084 -1246.371,24.698 -5399.243,24.698 -5292.7013,0 -5374.9297,-0.606 -5395.8605,-39.81 z m 10691.4745,-3752.4345 -5.191,-3648.1711 -2021.148,-5.2471 c -1603.346,-4.1632 -2024.527,0.1019 -2037.504,20.5821 -8.998,14.2062 -16.501,593.1223 -16.674,1286.4806 -0.203,826.5026 -7.385,1260.6512 -20.846,1260.6512 -21.954,0 -22.469,-54.5545 -20.929,-2215.2473 0.875,-1223.045 -1.199,-1300.092 -35.269,-1312.0604 -19.909,-6.9933 -114.286,-63.6763 -209.73,-125.9627 l -173.533,-113.2472 -980.191,0 c -761.825,0 -983.7998,5.7316 -996.3898,25.7276 -8.9101,14.1503 -48.723,95.1923 -88.4738,180.0932 l -72.2745,154.3651 7.3973,751.2455 c 9.3137,945.9573 -16.6073,2613.9221 -40.6221,2613.9221 -10.0813,0 -18.1055,-296.4591 -18.1055,-668.9166 l 4.7062,62.8436 -74.3016,-2.439 c -90.5224,-2.9715 -89.8388,-58.2988 -0.2552,-66.9571 l 66.7296,-6.4495 -1.805,-1649.0001 5.3405,-941.6294 -810.0171,0 c -517.8636,0 -814.5942,-7.4234 -822.7068,-20.582 -7.6748,-12.4484 -154.2043,-20.5821 -370.791,-20.5821 l -358.1017,0 0,123.4922 c 0,68.6071 -9.1252,123.4929 -20.5323,123.4929 -13.2468,0 -20.532,-226.403 -20.532,-638.0445 l 0,-638.0438 -174.524,0 c -102.6607,0 -174.5231,-8.4746 -174.5231,-20.582 0,-12.2745 78.5872,-20.5821 194.6971,-20.5821 l 194.697,0 5.4916,509.4059 5.4921,509.406 343.9142,5.6436 343.914,5.643 0,-957.5637 0,-957.56357 -1098.4724,0 -1098.4724,0 0,442.51467 0,442.5141 256.6524,0 c 157.4135,0 256.6524,7.9584 256.6524,20.5821 0,12.6241 -99.284,20.582 -256.7883,20.582 l -256.788,0 0.2715,4342.8154 1303.7941,0 1303.7942,0 0,-339.6039 c 0,-212.6813 7.6809,-340.0287 20.5322,-339.604 341.6537,11.2903 345.3304,73.0445 20.5321,71.2839 l 0,669.6703 -1324.3264,0 -1324.3264,0 0,576.2976 0,576.2983 1303.7943,0 1303.7942,0 0,-216.1117 c 0,-130.3532 8.1482,-216.1118 20.5322,-216.1118 13.0799,0 20.5321,168.0868 20.5321,463.0963 0,284.1992 -7.663,463.0971 -19.8373,463.0971 -11.1705,0 -22.384,-96.6702 -25.6652,-221.2574 l -5.8276,-221.2576 -1293.5284,0 -1293.528,0 -5.4626,560.727 -5.463,560.7267 1492.3374,5.2797 c 1171.8482,4.1479 1494.1739,10.8053 1500.8906,31.0078 6.7908,20.4256 -300.6844,25.7277 -1492.0075,25.7277 l -1500.5612,0 0,1162.8868 0,1162.8861 5297.3619,0 5297.363,0 z\" />\r\n       <use xlink:href=\"#stairs15\" />\r\n  <path style=\"fill:none;fill-opacity:1;fill-rule:evenodd;stroke:#ffffff;stroke-width:40;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" d=\"m 12184.965,8243.0649 1885.472,-5.9106 520.205,-1.6307 1742.672,-5.4629\"/>\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/15/15_ground.svg","<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n   id=\"svg3336\"\r\n   viewBox=\"0 0 22222 11111\"\r\n   clip-rule=\"evenodd\"\r\n   version=\"1.1\">\r\n\r\n  <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n  <g class=\"fil2\">\r\n    <rect ng-if=\"selectedRoom.name==\'Elevator\'\" y=\"6786.8853\" x=\"10398.467\" height=\"1252.6204\" width=\"1081.0287\"/>\r\n    <path ng-if=\"selectedRoom.name==\'Kitchen\'\" d=\"m 8780.0895,4600.6331 c -4.1361,-12.4086 -329.2956,-18.1081 -1460.8086,-25.606 -800.5185,-5.3044 -1491.5078,-13.1579 -1535.5319,-17.4522 l -80.0438,-7.8077 6.9909,-548.5256 c 3.8451,-301.6892 7.9066,-549.7284 9.0256,-551.1981 1.119,-1.4699 86.5934,-7.3218 189.9431,-13.0043 163.7848,-9.0054 188.4674,-13.2535 192.261,-33.0892 3.8864,-20.3215 -8.2778,-22.7574 -113.6393,-22.7574 l -117.9916,0 0,-873.3635 0,-873.3635 314.2073,8.5821 c 172.814,4.7202 386.4085,8.5821 474.6544,8.5821 l 160.4471,0 0,338.2933 0,338.2934 39.7698,35.5783 39.7698,35.5783 10.4115,556.6961 c 6.7653,361.7366 15.2471,561.5318 24.2193,570.5039 22.2986,22.2986 27.1292,-62.0342 35.0999,-612.7704 4.0827,-282.0976 10.6895,-516.1738 14.6816,-520.1693 3.9923,-3.9955 591.0735,-9.1049 1304.6249,-11.3543 l 1297.3662,-4.0897 8.4813,100.3324 c 4.6647,55.1829 8.4812,148.7031 8.4812,207.8228 0,68.1386 5.3623,109.2776 14.6472,112.3726 10.7973,3.5991 12.0943,243.1435 4.9347,911.3798 l -9.7123,906.4975 -413.4844,0 c -315.1678,0 -414.7495,-3.7953 -418.8049,-15.9614 z\"/>\r\n    <rect ng-if=\"selectedRoom.name==\'Restrooms\'\" y=\"4660.9014\" x=\"5903.9209\" height=\"2288.7446\" width=\"2860.9309\"/>\r\n  </g>\r\n  <g transform=\"translate(2907.0724,2179.5774)\">\r\n        <use xlink:href=\"#elevator\" />\r\n  </g>\r\n  <g transform=\"translate(1740.2477,0)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n\r\n  <g transform=\"translate(1740.2477,1185.4876)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n  <g transform=\"translate(1879.5212,-200)\">\r\n        <use xlink:href=\"#food\" />\r\n  </g>\r\n  <g class=\"fil3\">\r\n    <path d=\"m 10353.973,6746.957 0,14.9453 0,1337.8887 1174.138,0 0,-1352.834 -1174.138,0 z m 29.89,29.8907 1114.358,0 0,1293.0527 -1114.358,0 0,-1293.0527 z\"/>\r\n  <path d=\"m 9601.6992,6579.5078 0,30 0,1657.7324 2662.4378,0 0,-1687.7324 -2662.4378,0 z m 60,60 2542.4378,0 0,1567.7324 -2542.4378,0 0,-1567.7324 z\"/>\r\n  <path d=\"m 6092.3177,10844.264 c -9.8475,-11.871 -17.41,-115.07 -19.869,-271.202 l -3.9805,-252.042 -141.585,-7.23 c -104.197,-5.344 -145.1945,-12.961 -155.2545,-28.926 -8.4565,-13.429 -13.751,-1081.4702 -13.8875,-2802.1812 l 0,-2780.486 -76.6565,0 c -42.159,0 -84.4595,-7.808 -94.0065,-17.3555 -25.6925,-25.692 -24.94,-1375.709 0.763,-1397.05 9.973,-8.2825 40.8885,-17.214 68.6965,-19.853 l 50.566,-4.798 3.6535,-860.541 c 3.326,-788.5785 5.676,-862.051 28.0695,-878.6155 18.604,-13.762 163.5095,-18.0805 606.394,-18.0805 509.76,0 584.7645,2.835 604.6715,22.726 19.373,19.367 22.7315,72.818 22.7315,361.5715 l 0,338.8455 1298.0385,-0.763 1298.044,-0.7635 121.1055,-158.346 121.1055,-158.346 1115.4668,0.545 c 854.718,0.5455 1120.56,4.58 1137.244,18.0805 54.193,43.86 297.396,334.331 305.88,365.3395 5.18,19.029 9.733,185.4505 10.055,369.8155 0.545,184.371 6.123,340.754 12.889,347.526 6.772,6.772 838.562,13.9585 1848.425,15.9815 l 1836.119,3.653 7.23,730.3735 7.23,730.373 259.266,3.9805 c 161.307,2.4535 266.496,9.9615 278.41,19.8525 15.66,12.9935 19.144,287.6905 19.144,1508.5815 l 0,1492.687 -32.541,16.6685 c -31.221,15.9975 -117.872,37.126 -336.261,82 -55.681,11.445 -125.647,28.6095 -155.472,38.1405 l -54.236,17.339 0,1291.081 c 0,1154.4192 -2.399,1293.4802 -22.732,1313.8012 -17.502,17.508 -54.89,22.765 -162.702,22.885 l -139.982,0 -40.943,111.934 c -89.481,244.643 -118.374,318.262 -160.298,408.419 l -16.81,36.156 -4708.938,3.653 c -3894.3223,2.999 -4711.6848,0.545 -4724.8308,-15.518 z m 9334.8813,-122.12 c 8.643,-5.845 22.814,-30.152 31.494,-54.018 8.68,-23.86 28.337,-75.926 43.68,-115.702 15.338,-39.771 52.453,-137.294 82.469,-216.721 30.016,-79.421 65.119,-152.43 78.009,-162.244 14.067,-10.709 71.144,-18.026 142.752,-18.304 l 119.322,-0.545 0,-1277.7502 c 0,-1469.394 -16.357,-1323.556 151.858,-1353.943 55.681,-10.0545 114.257,-23.4675 130.168,-29.798 15.91,-6.33 83.494,-21.799 150.189,-34.3615 66.695,-12.568 130.151,-30.2285 141.012,-39.2415 27.241,-22.606 29.569,-1747.254 2.399,-1774.4235 -13.053,-13.059 -204.73,-17.3555 -773.764,-17.3555 -662.719,0 -756.403,-2.6715 -756.403,-21.6955 0,-19.013 94.78,-21.6955 766.256,-21.6955 l 766.256,0 7.939,-32.5405 c 4.362,-17.9005 6.117,-227.789 3.871,-466.4285 l -4.035,-433.883 -253.099,-3.653 c -237.386,-3.435 -254.67,-5.5615 -278.411,-34.149 -23.336,-28.0965 -25.31,-84.999 -25.31,-729.141 0,-384.265 -3.926,-708.956 -8.779,-721.54 -7.857,-20.4745 -91.002,-22.8515 -791.839,-22.6555 -430.687,0 -791.163,5.3435 -801.059,11.652 -14.079,8.937 -18.806,278.4375 -21.696,1236.3545 -2.399,801.474 -8.697,1226.1745 -18.162,1228.541 -9.537,2.399 -15.725,-412.3725 -18.162,-1217.118 -2.618,-872.667 -8.305,-1226.278 -19.848,-1240.1875 -13.249,-15.965 -195.205,-19.4655 -1011.809,-19.4655 -969.575,0 -996.052,-0.763 -1010.632,-27.971 -9.22,-17.23 -15.027,-174.164 -15.114,-408.578 l 0,-380.6005 -87.011,-94.0065 c -47.857,-51.7065 -103.887,-115.1625 -124.508,-141.013 l -37.497,-47.006 -1053.019,0 -1053.0253,0 -29.6615,39.7705 c -16.3085,21.8755 -38.5055,49.536 -49.3235,61.4665 -10.8125,11.9355 -48.38,60.746 -83.478,108.472 l -63.8105,86.7765 -7.23,223.007 c -5.18,160.2325 -12.3225,224.692 -25.3105,228.994 -13.8055,4.5805 -18.124,-36.199 -18.2765,-172.3805 0,-98.107 -4.144,-193.057 -8.937,-210.9955 l -8.74,-32.617 -1310.803,3.708 -1310.7975,3.7075 -3.762,576.046 c -2.9445,450.202 -7.6935,574.748 -21.6955,570.086 -13.664,-4.5255 -19.6235,-139.9275 -25.1415,-571.133 l -7.23,-565.168 -39.5145,-31.0685 -39.514,-31.0735 -3.8715,-342.646 -3.871,-342.6515 -480.889,-3.817 -480.8885,-3.8165 0,875.2025 0,875.197 122.932,0 c 98.5865,0 122.9375,4.1985 122.9375,21.2865 0,17.5135 -35.256,21.9955 -198.869,25.3105 l -198.8635,4.035 -3.7625,559.0885 -3.762,559.083 83.3305,10.1905 c 45.834,5.6055 730.9075,12.721 1522.387,15.8125 791.4795,3.108 1447.9225,8.953 1458.762,13.026 15.7685,5.9215 16.1395,11.701 1.854,28.9255 -15.5945,18.789 -198.624,21.521 -1440.6815,21.521 l -1422.8245,0 0,593.03 0,593.036 1862.094,-3.6535 1862.0945,-3.653 3.7075,-1131.721 c 3.2715,-992.6275 6.3575,-1131.721 25.3105,-1131.721 18.3805,0 21.603,39.531 21.603,264.6755 0,159.8675 5.8175,270.482 14.689,279.3535 14.7655,14.765 9.727,1379.128 -7.661,2073.035 -5.774,230.608 -3.2715,336.4575 8.6695,365.2685 l 16.805,40.572 1238.4048,-3.708 1238.404,-3.7075 7.23,-1113.646 c 6.347,-977.0445 9.891,-1113.6405 28.926,-1113.6405 18.827,0 22.649,81.155 28.925,614.677 l 7.23,614.671 656.863,7.23 c 504.52,5.556 658.242,11.3905 662.833,25.1635 4.689,14.0565 -137.25,18.7455 -656.863,21.6955 l -662.833,3.762 -3.817,509.8145 c -3.653,487.9985 -4.961,509.814 -30.992,509.814 -14.956,0 -30.937,-9.76 -35.517,-21.6955 -7.312,-19.0455 -158.919,-21.69 -1243.585,-21.69 -1080.3633,0 -1237.5153,2.7265 -1253.2623,21.69 -9.9015,11.9355 -26.8645,21.6955 -37.693,21.6955 -16.0195,0 -20.4035,-72.044 -23.5385,-386.882 l -3.8715,-386.882 -1858.479,0 -1858.4735,0 -3.817,531.515 -3.8165,531.5095 1337.989,0 c 1179.6865,0 1337.994,2.563 1337.994,21.69 0,18.3535 -34.5525,21.6955 -224.174,21.6955 l -224.174,0 0,1316.1245 c 0,866.3205 -4.962,1316.8605 -14.4655,1318.289 -7.9495,1.2 -22.595,2.8355 -32.5405,3.599 -14.291,1.145 -19.591,-274.19 -25.3105,-1314.674 l -7.23,-1316.1245 -1070.2495,0 -1070.255,0 0,1590.9195 0,1590.9137 129.4155,4.199 c 71.1765,2.344 137.8825,11.254 148.2425,19.847 14.138,11.734 18.833,77.965 18.833,265.755 0,186.568 4.58,251.976 18.075,257.418 29.029,11.712 9185.9193,10.228 9203.2473,-1.473 z\" />\r\n       <use xlink:href=\"#stairs15\" />\r\n    </g>\r\n</svg>\r\n");
$templateCache.put("plcrc/15/15_second.svg","<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n   id=\"svg3336\"\r\n   viewBox=\"0 0 22222 11111\"\r\n   clip-rule=\"evenodd\"\r\n   version=\"1.1\">\r\n  \r\n  <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n  <g class=\"fil2\">\r\n  <!--<path d=\"m 7305.2551,4446.9671 c -852.9501,-4.2804 -1553.2315,-10.1955 -1556.1798,-13.1514 -2.9484,-2.9555 -8.6895,-657.156 -12.7572,-1453.7785 l -7.3963,-1448.4039 251.5833,-6.922 c 311.7397,-8.5771 778.908,-8.5761 1000.553,0 l 167.0817,6.4664 3.0908,620.7303 c 3.2533,652.6669 4.2801,665.768 50.0558,636.9167 14.5953,-9.1993 20.7197,-35.2353 26.8344,-114.0835 4.3564,-56.1899 9.9863,-104.2316 12.5071,-106.7586 2.5212,-2.5275 152.9093,-5.5568 334.1954,-6.7318 328.0827,-2.125 329.7337,-2.023 355.9979,22.6259 l 26.3856,24.763 798.0164,0 798.0159,0 0,432.9185 c 0,238.1058 -3.2686,648.7999 -7.2657,912.6543 -7.1711,473.5094 -7.563,479.8356 -30.1921,487.4726 -36.6047,12.354 -553.6356,13.5886 -2210.5287,5.2796 z\"/>\r\n  <path d=\"m 12262.064,3334.2526 4018.321,0 0,5150.662 -4018.321,0 z m -6532.519,4974.5709 10550.838,0 0,2333.2055 -10550.8378,0 z\" />-->\r\n  <path ng-if=\"selectedRoom.name==\'Restrooms\'\" d=\"m 5731.168,6838.3628 1698.7594,0 0,1389.8941 -1698.7594,0 z\"/>\r\n  <rect ng-if=\"selectedRoom.name==\'Elevator\'\" y=\"6786.8853\" x=\"10398.467\" height=\"1252.6204\" width=\"1081.0287\"/>\r\n    <text x=\"6150\" y=\"1100\" class=\"fil5 fnt5\">Balcony</text>\r\n  </g>\r\n  <g transform=\"translate(2907.0724,2179.5774)\">\r\n        <use xlink:href=\"#elevator\" />\r\n  </g>\r\n  <g transform=\"translate(1300,2300)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n  <g transform=\"translate(1300,2300)\">\r\n        <use xlink:href=\"#server\" />\r\n  </g>\r\n  <g class=\"fil3\">\r\n    <path d=\"m 10353.973,6746.957 0,14.9453 0,1337.8887 1174.138,0 0,-1352.834 -1174.138,0 z m 29.89,29.8907 1114.358,0 0,1293.0527 -1114.358,0 0,-1293.0527 z\"/>\r\n  <path d=\"m 9601.6992,6579.5078 0,30 0,1657.7324 2662.4378,0 0,-1687.7324 -2662.4378,0 z m 60,60 2542.4378,0 0,1567.7324 -2542.4378,0 0,-1567.7324 z\"/>\r\n\r\n  <path d=\"M 6816.3301 437.83008 C 5782.4319 437.83008 5645.2392 441.52947 5616.6641 470.17383 C 5587.5049 499.40236 5584.3984 993.04562 5584.3984 5596.4609 C 5584.3984 9068.4847 5591.1674 10703.081 5605.6543 10730.217 C 5626.5851 10769.421 5708.8124 10770.025 11001.514 10770.025 C 15154.386 10770.025 16381.722 10764.412 16400.758 10745.328 C 16436.602 10709.398 16436.602 3256.4556 16400.758 3220.5254 C 16381.927 3201.6468 15895.756 3195.8262 14337.68 3195.8262 L 12299.242 3195.8262 L 12293.699 2758.459 L 12288.158 2321.0898 L 12144.436 2224.1211 C 12065.387 2170.7885 11952.342 2099.008 11893.227 2064.6094 L 11785.742 2002.0664 L 10750.818 2002.0664 L 9715.8926 2002.0664 L 9669.7246 2099.832 C 9644.3322 2153.6023 9597.5027 2255.4837 9565.6602 2326.2344 L 9507.7656 2454.873 L 8778.0137 2454.873 L 8048.2617 2454.873 L 8048.2617 1478.6953 C 8048.2617 618.70354 8044.4223 498.66756 8015.998 470.17383 C 7987.4227 441.52988 7850.2277 437.83008 6816.3301 437.83008 z M 5707.5918 581.9043 L 6806.0645 581.9043 L 7904.5371 581.9043 L 7904.5371 1539.4688 L 7904.5371 2497.0312 L 7560.623 2491.3887 L 7216.709 2485.7461 L 7211.2168 1976.3398 L 7205.7246 1466.9336 L 7011.0273 1466.9336 C 6894.9174 1466.9336 6816.332 1475.2411 6816.332 1487.5156 C 6816.332 1499.623 6888.1928 1508.0977 6990.8535 1508.0977 L 7165.3789 1508.0977 L 7165.3789 2146.1406 C 7165.3789 2557.7821 7172.6634 2784.1855 7185.9102 2784.1855 C 7197.3173 2784.1855 7206.4434 2729.3005 7206.4434 2660.6934 L 7206.4434 2537.2012 L 7564.5449 2537.2012 C 7781.1316 2537.2012 7927.6611 2545.3348 7935.3359 2557.7832 C 7943.4485 2570.9418 8240.1794 2578.3652 8758.043 2578.3652 L 9568.0586 2578.3652 L 9562.7188 3519.9941 L 9557.3789 4461.623 L 9490.6484 4468.0742 C 9401.0649 4476.7328 9405.2102 4513.0801 9495.7812 4513.0801 L 9567.6445 4513.0801 L 9567.6445 5181.9961 C 9567.6445 5554.4536 9575.6687 5850.9141 9585.75 5850.9141 C 9609.7648 5850.9141 9635.6867 4182.9475 9626.373 3236.9902 L 9618.9746 2485.7461 L 9691.25 2331.3809 C 9731.0008 2246.48 9770.8126 2165.4374 9779.7227 2151.2871 C 9792.3127 2131.2911 10014.288 2125.5605 10776.113 2125.5605 L 11756.305 2125.5605 L 11929.838 2238.8066 C 12025.282 2301.093 12119.657 2357.7762 12139.566 2364.7695 C 12173.636 2376.7379 12175.711 2453.7851 12174.836 3676.8301 C 12173.296 5837.5229 12173.812 5892.0781 12195.766 5892.0781 C 12209.227 5892.0781 12216.408 5457.9284 12216.611 4631.4258 C 12216.784 3938.0675 12224.287 3359.1515 12233.285 3344.9453 C 12246.262 3324.4651 12667.443 3320.2001 14270.789 3324.3633 L 16291.938 3329.6113 L 16297.129 6977.7812 L 16302.316 10625.951 L 11004.953 10625.951 L 5707.5918 10625.951 L 5707.5918 9463.0664 L 5707.5918 8300.1797 L 7208.1523 8300.1797 C 8399.4754 8300.1797 8706.951 8294.8768 8700.1602 8274.4512 C 8693.4435 8254.2487 8371.1177 8247.5913 7199.2695 8243.4434 L 5706.9336 8238.1641 L 5707.1816 6832.3828 L 6560.0215 6832.3828 L 7448.707 6832.3828 L 7448.707 7160.6875 L 7448.707 7488.9902 L 7482.6699 7488.9902 L 7516.6328 7488.9902 L 7516.6328 7160.6875 L 7516.6328 6832.3828 L 7884.5605 6832.3828 L 8252.4883 6832.3828 L 8252.4883 6124.8301 L 8252.4883 5417.2773 L 8224.1855 5417.2773 L 8195.8828 5417.2773 L 8195.8828 6090.8672 L 8195.8828 6764.457 L 6933.6094 6764.457 L 5707.1934 6764.457 L 5707.5918 4513.0801 L 7268.0391 4513.0801 C 8288.0683 4513.0801 8828.4863 4505.9961 8828.4863 4492.627 C 8828.4863 4479.3044 8286.27 4470.3329 7273.1719 4466.8984 L 5717.8594 4461.623 L 5712.5898 2984.8613 L 5707.3203 1508.0977 L 5964.1094 1508.0977 C 6121.6137 1508.0977 6220.8965 1500.1397 6220.8965 1487.5156 C 6220.8965 1474.8919 6121.6576 1466.9336 5964.2441 1466.9336 L 5707.5918 1466.9336 L 5707.5918 1024.4199 L 5707.5918 581.9043 z \"/>\r\n       <use xlink:href=\"#stairs15\" />\r\n    </g>\r\n	\r\n	\r\n</svg>\r\n");
$templateCache.put("plcrc/15/15_third.svg","<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n<svg\r\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\r\n   xmlns:cc=\"http://creativecommons.org/ns#\"\r\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\r\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\r\n   xmlns=\"http://www.w3.org/2000/svg\"\r\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n   id=\"svg3336\"\r\n   viewBox=\"0 0 22222 11111\"\r\n   clip-rule=\"evenodd\"\r\n   version=\"1.1\">\r\n  \r\n      <polygon id=\"background\" points=\"22222 11111 0 11111 0 0 22222 0\" class=\"fil0\" />\r\n  <g class=\"fil2\">\r\n  <path ng-if=\"selectedRoom.name==\'Kitchen\'\" d=\"m 7305.2551,4446.9671 c -852.9501,-4.2804 -1553.2315,-10.1955 -1556.1798,-13.1514 -2.9484,-2.9555 -8.6895,-657.156 -12.7572,-1453.7785 l -7.3963,-1448.4039 251.5833,-6.922 c 311.7397,-8.5771 778.908,-8.5761 1000.553,0 l 167.0817,6.4664 3.0908,620.7303 c 3.2533,652.6669 4.2801,665.768 50.0558,636.9167 14.5953,-9.1993 20.7197,-35.2353 26.8344,-114.0835 4.3564,-56.1899 9.9863,-104.2316 12.5071,-106.7586 2.5212,-2.5275 152.9093,-5.5568 334.1954,-6.7318 328.0827,-2.125 329.7337,-2.023 355.9979,22.6259 l 26.3856,24.763 798.0164,0 798.0159,0 0,432.9185 c 0,238.1058 -3.2686,648.7999 -7.2657,912.6543 -7.1711,473.5094 -7.563,479.8356 -30.1921,487.4726 -36.6047,12.354 -553.6356,13.5886 -2210.5287,5.2796 z\"/>\r\n  <!--<path d=\"m 5730,5187.6105 c 4.026,-361.1869 8.5406,-657.7903 10.0331,-659.1183 1.4945,-1.33 577.0542,-6.0527 1279.025,-10.4985 l 1276.3111,-8.0839 0,667.2019 0,667.2025 -1286.3446,0 -1286.344,0 7.3194,-656.7037 z\" />-->\r\n  <path ng-if=\"selectedRoom.name==\'Restrooms\'\" d=\"m 5730,6980.6514 c -3.8481,-40.8588 -7.0343,-295.8752 -7.077,-566.7031 l -0.1017,-492.4143 1291.7919,-2.8434 1291.7914,-2.8434 -7.1212,534.5242 c -3.9142,293.9889 -10.2653,550.2836 -14.1083,569.5444 l -6.9866,35.0197 -1270.6065,0 -1270.6062,0 -6.9992,-74.2882 z\"/>\r\n  <path ng-if=\"selectedRoom.name==\'Restrooms\'\" d=\"m 5730,7687.7666 0,-544.7815 1284.086,0 1284.0867,0 6.1269,211.8597 c 3.3703,116.5227 8.6564,361.6744 11.7487,544.7817 l 5.6216,332.9219 -1295.8347,0 -1295.8352,0 0,-544.7818 z\"/>\r\n  <!--<path d=\"m 12262.064,3334.2526 4018.321,0 0,5150.662 -4018.321,0 z m -6532.519,4974.5709 10550.838,0 0,2333.2055 -10550.8378,0 z\" />-->\r\n  <rect ng-if=\"selectedRoom.name==\'Elevator\'\" y=\"6786.8853\" x=\"10398.467\" height=\"1252.6204\" width=\"1081.0287\"/>\r\n  <text x=\"6150\" y=\"1100\" class=\"fil5 fnt5\">Balcony</text>\r\n  </g>\r\n  <g transform=\"translate(2907.0724,2179.5774)\">\r\n        <use xlink:href=\"#elevator\" />\r\n  </g>\r\n  <g transform=\"translate(1740.2477,2385.4876)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n    <g transform=\"translate(1879.5212,-579.25562)\">\r\n        <use xlink:href=\"#food\" />\r\n  </g>\r\n  <g transform=\"translate(1740.2477,1185.4876)\">\r\n        <use xlink:href=\"#toilet\" />\r\n  </g>\r\n    <g transform=\"translate(-11800.2477,3100)\">\r\n        <use xlink:href=\"#storage\" />\r\n  </g>\r\n  <g class=\"fil3\">\r\n    <path d=\"m 10353.973,6746.957 0,14.9453 0,1337.8887 1174.138,0 0,-1352.834 -1174.138,0 z m 29.89,29.8907 1114.358,0 0,1293.0527 -1114.358,0 0,-1293.0527 z\"/>\r\n  <path d=\"m 9601.6992,6579.5078 0,30 0,1657.7324 2662.4378,0 0,-1687.7324 -2662.4378,0 z m 60,60 2542.4378,0 0,1567.7324 -2542.4378,0 0,-1567.7324 z\"/>\r\n  <path d=\"m 5605.6535,10730.216 c -14.4869,-27.136 -21.2545,-1661.7312 -21.2545,-5133.755 0,-4603.41532 3.1059,-5097.05862 32.2651,-5126.28715 28.5751,-28.64436 165.7687,-32.34343 1199.6669,-32.34343 1033.8976,0 1171.0912,3.69948 1199.6665,32.34343 28.4243,28.49373 32.265,148.52948 32.265,1008.52125 l 0,976.1776 729.7514,0 729.7516,0 57.8953,-128.6379 c 31.8425,-70.7507 78.671,-172.6321 104.0634,-226.4024 l 46.168,-97.7651 1034.9258,0 1034.925,0 107.484,62.542 c 59.115,34.3986 172.159,106.1787 251.208,159.5113 l 143.724,96.9686 5.541,437.369 5.543,437.3687 2038.437,0 c 1558.076,0 2044.246,5.8203 2063.077,24.6989 35.844,35.9302 35.844,7488.8722 0,7524.8022 -19.036,19.084 -1246.371,24.698 -5399.243,24.698 -5292.7013,0 -5374.9297,-0.606 -5395.8605,-39.81 z m 10691.4745,-3752.4345 -5.191,-3648.1711 -2021.148,-5.2471 c -1603.346,-4.1632 -2024.527,0.1019 -2037.504,20.5821 -8.998,14.2062 -16.501,593.1223 -16.674,1286.4806 -0.203,826.5026 -7.385,1260.6512 -20.846,1260.6512 -21.954,0 -22.469,-54.5545 -20.929,-2215.2473 0.875,-1223.045 -1.199,-1300.092 -35.269,-1312.0604 -19.909,-6.9933 -114.286,-63.6763 -209.73,-125.9627 l -173.533,-113.2472 -980.191,0 c -761.825,0 -983.7998,5.7316 -996.3898,25.7276 -8.9101,14.1503 -48.723,95.1923 -88.4738,180.0932 l -72.2745,154.3651 7.3973,751.2455 c 9.3137,945.9573 -16.6073,2613.9221 -40.6221,2613.9221 -10.0813,0 -18.1055,-296.4591 -18.1055,-668.9166 l 0,-668.9171 -71.8626,0 c -90.5711,0 -94.7167,-36.3473 -5.1332,-45.0059 l 66.7296,-6.4495 5.3402,-941.6296 5.3405,-941.6294 -810.0171,0 c -517.8636,0 -814.5942,-7.4234 -822.7068,-20.582 -7.6748,-12.4484 -154.2043,-20.5821 -370.791,-20.5821 l -358.1017,0 0,123.4922 c 0,68.6071 -9.1252,123.4929 -20.5323,123.4929 -13.2468,0 -20.532,-226.403 -20.532,-638.0445 l 0,-638.0438 -174.524,0 c -102.6607,0 -174.5231,-8.4746 -174.5231,-20.582 0,-12.2745 78.5872,-20.5821 194.6971,-20.5821 l 194.697,0 5.4916,509.4059 5.4921,509.406 343.9142,5.6436 343.914,5.643 0,-957.5637 0,-957.56357 -1098.4724,0 -1098.4724,0 0,442.51467 0,442.5141 256.6524,0 c 157.4135,0 256.6524,7.9584 256.6524,20.5821 0,12.6241 -99.284,20.582 -256.7883,20.582 l -256.788,0 5.2688,1476.7631 5.269,1476.7632 1555.3134,5.2751 c 1013.0981,3.4345 1555.3134,12.4049 1555.3134,25.7275 0,13.3691 -540.4174,20.4528 -1560.4466,20.4528 l -1560.4465,0 0,668.9171 0,668.9166 1303.7941,0 1303.7942,0 0,-339.6039 c 0,-212.6813 7.6739,-339.604 20.5322,-339.604 12.928,0 20.5321,137.2139 20.5321,370.4774 l 0,370.4768 -1324.3264,0 -1324.3264,0 0,576.2976 0,576.2983 1303.7943,0 1303.7942,0 0,-216.1117 c 0,-130.3532 8.1482,-216.1118 20.5322,-216.1118 13.0799,0 20.5321,168.0868 20.5321,463.0963 0,284.1992 -7.663,463.0971 -19.8373,463.0971 -11.1705,0 -22.384,-96.6702 -25.6652,-221.2574 l -5.8276,-221.2576 -1293.5284,0 -1293.528,0 -5.4626,560.727 -5.463,560.7267 1492.3374,5.2797 c 1171.8482,4.1479 1494.1739,10.8053 1500.8906,31.0078 6.7908,20.4256 -300.6844,25.7277 -1492.0075,25.7277 l -1500.5612,0 0,1162.8868 0,1162.8861 5297.3619,0 5297.363,0 -5.189,-3648.1705 z\" />\r\n       <use xlink:href=\"#stairs15\" />\r\n    </g>\r\n</svg>\r\n");}]);
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
var visit_controllers = angular.module('visit_plcrc.controllers', []);
visit_controllers.controller('AppCtrl', ['$scope', '$ionicModal', '$timeout', '$state', '$remotestorage', '$localstorage', '$ionicPopup', 'AuthService', 'AUTH_EVENTS', function ($scope, $ionicModal, $timeout, $state, $remotestorage, $localstorage, $ionicPopup, AuthService, AUTH_EVENTS) {

    $scope.username = AuthService.username();

    $scope.$on(AUTH_EVENTS.notAuthorized, function (event) {
        $state.go('login');
        //        var alertPopup = $ionicPopup.alert({
        //            title: 'Unauthorized!',
        //            template: 'You are not allowed to access this resource.'
        //        });
    });

    $scope.setCurrentUsername = function (name) {
        $scope.username = name;
    };

    $scope.goToState = function (state) {
        $state.go(state);
    };

    $scope.isAgendaEditEnabled = function () {
        return $localstorage.isAgendaEditEnabled();
    };

    $scope.isMobileDevice = function () {
        var currentPlatform = ionic.Platform.platform();
        return (currentPlatform != 'win32');
    };

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.side_menu_items = [
        { title: 'Office', icon: 'icon-office', state: 'app.plcrc' },
        { title: 'Events', icon: 'icon-events', state: 'app.events' },
        { title: 'Navigate', icon: 'icon-navigate', state: 'app.navigate' },
        { title: 'City', icon: 'icon-city', state: 'app.city' },
        { title: 'About ABB', icon: 'icon-about', state: 'app.abb' },
        { title: 'Settings', icon: 'icon-settings', state: 'app.settings' },
    ];
}])

.controller('MainMenuCtrl', ['$scope', function ($scope) {
    $scope.view_title = "Visit CRC Kraków";
    $scope.menu_items = [
        { title: 'ABB Corporate Research in Kraków', img: './img/plcrc_front.jpg', state: 'app.plcrc' },
        { title: 'Events', img: './img/events.jpg', state: 'app.events' },
        { title: 'Navigate', img: './img/directions.jpg', state: 'app.navigate' },
        { title: 'Kraków highlights', img: './img/city/krakow_1.jpg', state: 'app.city' },
        { title: 'About ABB', img: './img/plabb/abbgroup.jpg', state: 'app.abb' },
    ];

}])

.controller('AbbCtrl', ['$scope',function ($scope) {
    $scope.view_title = "About ABB";
    $scope.menu_items = [
        { title: 'Our heritage', img: './img/plabb/history.jpg', state: 'app.abb/history' },
        { title: 'Technology', img: './img/plabb/technology2.jpg', state: 'app.abb/technology' },
        { title: 'Our values', img: './img/plabb/dna.jpg', state: 'app.abb/dna' },
        { title: 'ABB in Poland', img: './img/plabb/plabb.jpg', state: 'app.abb/plabb' },
    ];
}]);



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
visit_controllers.controller('AboutCtrl', ['$scope', function ($scope) {
    $scope.selectedSlide = { 'idx': 0 };
}]);
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

visit_controllers.controller('RoomsCtrl', ['$scope', '$localstorage', '$filter', '$ionicPopover', function ($scope, $localstorage, $filter, $ionicPopover) {
    $scope.confRooms = $localstorage.getConferenceRooms();
    $scope.filter = { text: '' };
    $ionicPopover.fromTemplateUrl('search.html', {
        scope: $scope,
    }).then(function (popover) {
        $scope.popover = popover;
    });

}]);
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
visit_controllers.controller('ContactCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goToLocation = function () {
        $state.go('app.plcrc/location');
    };
    $scope.mailPlcrc = function () {
        document.location.href = "mailto:plcrcoffice@pl.abb.com?subject=Contact ABB Corporate Research Kraków";
    };
    $scope.callNumber = function (number) {
        document.location.href = number;
    };
}]);
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
visit_controllers.controller('WhoIsWhoCtrl', ['$scope', '$localstorage', function ($scope, $localstorage) {
    $scope.whoIsWho = $localstorage.getWhoIsWho();
}]);
visit_controllers.controller('GuidelinesCtrl', ['$scope', function ($scope) {
    $scope.guideSteps = [
    { text: 'You must be accompanied by an ABB employee at all times. Please follow his directions. Please observe and comply with all safety signs when entering any area.' },
    { img: './img/guidelines/badge.svg', text: 'Please make sure your badge is cleary visible.' },
    { img: './img/guidelines/glasses.svg', text: 'In all specially marked areas always use specified protective equipment (safety glasses, safety helmets etc.).' },
    { img: './img/guidelines/touch2.svg', text: 'Keep away from machinery and equipment. Remember that in case of break-down or any hazard, you are allowed to push the emergency stop switch.' },
    { img: './img/guidelines/touch.svg', text: 'Do not touch anything without approval. Do not approach the machines and equipment closer than it is allowed by barriers and lines.' },
    { img: './img/guidelines/nofoto.svg', text: 'It is strictly forbidden to take pictures, to film and to enter computer data bases without a prior authorization.' },
    { img: './img/guidelines/nosmoke.svg', text: 'The ABB office is a non-smoking facility.' },
    { text: 'The visitor guidelines in the Measuring rooms differ from the ones above. In order to get acquainted with them please contact your guide.' },
    ];
}]);
visit_controllers.controller('SettingsCtrl', ['$scope', '$ionicSlideBoxDelegate', '$remotestorage', '$localstorage', '$ionicPopup', function ($scope, $ionicSlideBoxDelegate, $remotestorage, $localstorage, $ionicPopup) {
    $scope.appVersion = '';    
    $scope.enableAgendaEdit = { value: $localstorage.isAgendaEditEnabled() };
    if (typeof (cordova) !== 'undefined') {
        cordova.getAppVersion.getVersionNumber(function (version) {
            $scope.appVersion = version;
        });
        cordova.getAppVersion.getVersionCode(function (code) {
            $scope.appBuild = code;
        });
        cordova.getAppVersion.getPackageName(function (name) {
            $scope.packetName = name;
        });
    }
    $scope.getData = function () {
        $remotestorage.updateAll($localstorage);
    };    
    $scope.feedback = function () {
        document.location.href = "mailto:marcin.bajer@pl.abb.com?subject=Visit PLCRC feedback";
    };
    $scope.enableEditDialog = function () {

        if ($scope.enableAgendaEdit.value === true) {
            $scope.data={'password' : ''};
            var myPopup = $ionicPopup.show({
                template: '<input placeholder="{{data.title}}" type="tel" maxlength="4" ng-model="data.password">',
                title: 'Enter password',
                subTitle: 'Please enter password to enable edit mode',
                scope: $scope,
                buttons: [
                  { text: 'Cancel' },
                  {
                      text: '<b>Ok</b>',
                      type: 'button-positive',
                      onTap: function (e) {
                          if (!$scope.data.password) {
                              e.preventDefault();
                          } else {
                              if ($scope.data.password != '1997') {
                                  $scope.data.password = '';
                                  $scope.data.title = 'Wrong password! Try again';
                                  e.preventDefault();
                              } else {
                                  $localstorage.setAgendaEditEnabled(true);
                              }
                          }
                      }
                  }
                ]
            });
        } else {
            $localstorage.setAgendaEditEnabled(false);
        }
    };

    $scope.about = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'About',
                scope: $scope,
                templateUrl: 'about.html'
            });
    };

    $scope.oss = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Open Source Components',
                scope: $scope,
                templateUrl: 'oss.html'
            });
    };
}]);

visit_controllers.controller('EventsCtrl', ['$scope', '$localstorage', '$remotestorage', '$filter', 'AuthService', function ($scope, $localstorage, $remotestorage, $filter, AuthService) {
     //   console.log(JSON.stringify($localstorage.dump()));
     $remotestorage.updateEvents($localstorage,
         function () {
             $scope.init();
         },
         function (result) {

         }
     );

    $scope.isLocked = function (eventId) {
        return !AuthService.isAllowedEvent(eventId);
    };
    $scope.init = function () {
        $scope.events = $localstorage.getEvents();
        $scope.filteredEvents = $filter('hideAfterFilter')($scope.events);
    };

    $scope.isMultipleDays = function (event) {
        var start = new Date(event.startDate.iso);
        var end = new Date(event.endDate.iso);
        if (start.toISOString().substring(0, 10) == end.toISOString().substring(0, 10)) {
            return false;
        }
        return true;
    };

    $scope.init();
}]);
visit_controllers.controller('EventsEditCtrl', ['$scope', '$localstorage', '$remotestorage', '$filter', '$ionicPopup', '$state', 'AuthService', function ($scope, $localstorage, $remotestorage, $filter, $ionicPopup, $state, AuthService) {
    $remotestorage.updateEvents($localstorage,
        function () {
            $scope.init();
        },
        function (result) {

        }
    );

    $scope.isLocked = function (eventId) {
        return !AuthService.isAllowedEvent(eventId);
    };
    $scope.init = function () {
        $scope.events = $localstorage.getEvents();
        $scope.filteredEvents = $filter('hideAfterFilter')($scope.events);
    };
    $scope.init();
    Date.prototype.addOffset = function (min) {
        this.setTime(this.getTime() + (this.getTimezoneOffset() * 60 * 1000));
        return this;
    };

    Date.prototype.removeOffset = function (min) {
        this.setTime(this.getTime() - (this.getTimezoneOffset() * 60 * 1000));
        return this;
    };

    $scope.openDatePicker = function (index) {
        $scope.tmp = {};
        if (!index) {
            index = { "__type": "Date", 'iso': (new Date()).toISOString() };
        }
        $scope.tmp.newDate = (new Date(index.iso)).addOffset().toISOString();
        $scope.onTimeSet = function (newDate, oldDate) {
            index.iso = (new Date(newDate)).removeOffset().toISOString();
            popup.close();
        };
        var popup = $ionicPopup.show({
            template: '<datetimepicker data-ng-model="tmp.newDate" data-on-set-time="onTimeSet(newDate, oldDate)"></datetimepicker>',
            scope: $scope,
        });
    };

    $scope.addEvent = function () {
        var currentDateISO = (new Date()).toISOString();
        var LOCATION_ID = 'llz1M6ZdiU';
        var newEvent = {
            "endDate": {
                "__type": "Date",
                "iso": currentDateISO
            },
            "hideAfter": 300,
            "location": {
                "__type": "Pointer",
                "className": "Location",
                "objectId": LOCATION_ID
            },
            "name": "New meeting",
            "startDate": {
                "__type": "Date",
                "iso": currentDateISO
            },
            "createdAt": currentDateISO,
            "updatedAt": currentDateISO,
            "pinCode": '1997'
        };
        $scope.filteredEvents.unshift(newEvent);
    };

    $scope.removeEvent = function (sessionId, index) {
        var removeFromList = function (index) {
            $scope.filteredEvents.splice(index, 1);
        };
        if (!sessionId) {
            removeFromList(index);
        } else {
            $remotestorage.removeEvent(
                        sessionId,
                        function () {
                            $remotestorage.forceUpdateEvents($localstorage,
                                function () {
                                    removeFromList(index);
                                },
                                function (result) {
                                    $ionicPopup.alert({
                                        title: 'Error while deleting event!',
                                        template: 'Unable to delete event'
                                    });
                                }
                            );
                        },
                        function () { });
        }
    };
    
    $scope.setPinPicker = function (event) {
        $scope.thisEvent = { 'pinCode': event.pinCode };
        var popup = $ionicPopup.show({
            title: 'Set PIN for the meeting',
            template: '<input placeholder="PIN number" type="tel" maxlength="4" ng-model="thisEvent.pinCode">',
            buttons: [
                {
                    text: 'No PIN',
                    type: 'button-dark',
                    onTap: function (e) {
                        event.pinCode = null;
                    }
                },
                {
                    text: '<b>Set PIN</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        event.pinCode = $scope.thisEvent.pinCode;
                    }
                }
            ],
            scope: $scope,
        });
    };

    $scope.hideAfterPicker = function (event) {
        $scope.thisEvent = { 'hideAfter': event.hideAfter ? event.hideAfter : 10 };
        var popup = $ionicPopup.show({
            title: 'Hide meeting on the list',
            template: '<input placeholder="Number of days after meeting" type="number" min="0" max="365" ng-model="thisEvent.hideAfter">',
            buttons: [
                {
                    text: 'Never hide',
                    type: 'button-dark',
                    onTap: function (e) {
                        event.hideAfter = null;
                    }
                },
                {
                    text: '<b>Set</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        event.hideAfter = $scope.thisEvent.hideAfter;
                    }
                }
            ],
            scope: $scope,
        });
    };

    $scope.save = function () {
        $remotestorage.saveEvents($scope.filteredEvents,
            function (event) {
                setTimeout(function() {
                    $remotestorage.forceUpdateEvents($localstorage,
                        function () {
                            $state.go('app.events');
                        },
                        function (result) {}
                    );
                },200);
            },
            function (event, error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Error!',
                    template: 'Something went wrong while saving events.'
                });

                alertPopup.then(function (res) {
                });
            });
    };
}]);
visit_controllers.controller('EventCtrl', ['$scope', '$localstorage', '$stateParams', '$timeout', '$filter', '$ionicPopover', function ($scope, $localstorage, $stateParams, $timeout, $filter, $ionicPopover) {
    $scope.event = $localstorage.getEvent($stateParams.id);
    $scope.sessions = $localstorage.getSessions($stateParams.id);
    $scope.sessions = $filter('orderBy')($scope.sessions, ['startDate.iso','-endDate.iso']);
    $scope.filter = { text: '' };
    var rooms = $localstorage.getRooms();
    var spots = $localstorage.getSpots();
    var findById = function (rooms, id) {
        var found = {};
        rooms.forEach(function(room) {
            if ((room!=null)&&(room.objectId == id)) {
                found = room;
            }
        });
        return found;
    };
    $scope.sessions.forEach(function (session) {
        if (session.hasOwnProperty('room')&&session.room) {
            session.roomName = findById(rooms, session.room.objectId).name;
        }
        if (session.hasOwnProperty('spot')&&session.spot) {
            session.spotName = findById(spots, session.spot.objectId).name;
        }
    });
    $scope.isOngoing = function (session) {
        var now = new Date();
        now = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
        if ((session.startDate) && (new Date(session.startDate.iso) < now) && (session.endDate) && (new Date(session.endDate.iso) > now)) return true;
        return false;
    };
    $scope.newDay = function (sessionIndex) {
        if (sessionIndex === 0) return true;
        if (($scope.sessions[sessionIndex - 1].startDate === null) || ($scope.sessions[sessionIndex].startDate === null)) return true;
        var dateBefore = new Date($scope.sessions[sessionIndex - 1].startDate.iso);
        dateBefore = new Date(dateBefore.getTime() + (dateBefore.getTimezoneOffset() * 60000));
        var dateNow = new Date($scope.sessions[sessionIndex].startDate.iso);
        dateNow = new Date(dateNow.getTime() + (dateNow.getTimezoneOffset() * 60000));
        if (dateBefore.getDate() != dateNow.getDate()) return true;
        return false;
    };
    $scope.getLink = function (session) {
        switch (session.type) {
            case 'evacuation':
                if ((session.room==null)||(session.room.objectId=="null")) break;
                return '#/app/plcrc/evacuation?roomId=' + session.room.objectId;
            case 'guidelines':
                return '#/app/plcrc/guidelines';
            case 'city':
                if ((session.spot==null)||(session.spot.objectId=="null")) break;
                return '#/app/city/spot?spotId=' + session.spot.objectId;
            case 'room':
                if ((session.room==null)||(session.room.objectId=="null")) break;
                return '#/app/plcrc/room?id=' + session.room.objectId;
            case 'plan':
                if ((session.room==null)||(session.room.objectId=="null"))break;
                return '#/app/plcrc/plan?id=' + session.room.objectId;
            case 'meeting':
                if ((session==null)||(session.objectId=="null")) break;
                return '#/app/events/session?id=' + session.objectId;
            case 'other':
                return '';
            default:
                if ((session==null)||(session.objectId=="null")) break;
                return '#/app/events/session?id=' + session.objectId;
        }
        return '';
    };

    $ionicPopover.fromTemplateUrl('search.html', {
        scope: $scope,
    }).then(function (popover) {
        $scope.popover = popover;
    });
    
}]);
visit_controllers.controller('EventEditCtrl', ['$scope', '$localstorage', '$remotestorage', '$stateParams', '$timeout', '$filter', '$ionicPopup', '$window', function ($scope, $localstorage, $remotestorage, $stateParams, $timeout, $filter, $ionicPopup, $window) {
    $scope.event = $localstorage.getEvent($stateParams.id);
    $scope.sessions = $localstorage.getSessions($stateParams.id);
    $scope.sessions = $filter('orderBy')($scope.sessions, ['startDate.iso', -'endDate.iso']);
    $scope.icons = [
        { 'icon': 'calendar', 'name': 'Calendar' },
        { 'icon': 'cutlery', 'name': 'Lunch' },
        { 'icon': 'coffee', 'name': 'Coffe break' },
        { 'icon': 'plane', 'name': 'Airport' },
        { 'icon': 'taxi', 'name': 'Taxi' },
        { 'icon': 'evacuationsign', 'name': 'Evacuation instructions' },
        { 'icon': 'guidelines', 'name': 'Visitor guidelines' },
        { 'icon': 'laboratory', 'name': 'Lab tour' },
        { 'icon': 'visitgroupa', 'name': 'Stream A' },
        { 'icon': 'visitgroupb', 'name': 'Stream B' },
        { 'icon': 'visitgroupc', 'name': 'Stream C' },
        { 'icon': 'visitgroupd', 'name': 'Stream D' },
        { 'icon': 'visitgroupe', 'name': 'Stream E' },
        { 'icon': 'train', 'name': 'Train' },
    ];
    $scope.sessionTypes = [
        { 'icon': 'meeting', 'name': 'Meeting details' },
        { 'icon': 'evacuation', 'name': 'Evacuation instructions' },
        { 'icon': 'guidelines', 'name': 'Visitor guidelines' },
        { 'icon': 'city', 'name': 'City spot' },
        { 'icon': 'room', 'name': 'Room details' },
        { 'icon': 'plan', 'name': 'Building plan' },
        { 'icon': 'other', 'name': 'No link' }
    ];
    var rooms = $localstorage.getRooms();
    $scope.rooms = $localstorage.getConferenceRooms();
    $scope.restaurants = $localstorage.getRestaurants();
    var spots = $localstorage.getSpots();
    var findById = function (rooms, id) {
        var found = {};
        rooms.forEach(function (room) {
            if (room.objectId == id) {
                found = room;
            }
        });
        return found;
    };
    $scope.sessions.forEach(function (session) {
        if (session.hasOwnProperty('room')) {
            session.roomName = findById(rooms, session.room.objectId).name;
        }
        if (session.hasOwnProperty('spot')) {
            session.spotName = findById(spots, session.spot.objectId).name;
        }
    });
    $scope.newDay = function (sessionIndex) {
        if ((sessionIndex === 0) || (!$scope.sessions[sessionIndex - 1].startDate) || (!$scope.sessions[sessionIndex].startDate)) return true;
        var dateBefore = new Date($scope.sessions[sessionIndex - 1].startDate.iso);
        var dateNow = new Date($scope.sessions[sessionIndex].startDate.iso);
        if (dateBefore.getDate() != dateNow.getDate()) return true;
        return false;
    };

    Date.prototype.addOffset = function (min) {
        this.setTime(this.getTime() + (this.getTimezoneOffset() * 60 * 1000));
        return this;
    };

    Date.prototype.removeOffset = function (min) {
        this.setTime(this.getTime() - (this.getTimezoneOffset() * 60 * 1000));
        return this;
    };

    $scope.openDatePicker = function (index) {
        $scope.tmp = {};
        if (index === null) {
            index = { "__type": "Date", 'iso': (new Date()).toISOString() };
        }
        if ((index.iso === null) || (index.iso === "")) {
            index.iso = (new Date()).toISOString();
        }
        $scope.removeDate = function () {
            index.iso = "";
            popup.close();
        };
        $scope.tmp.newDate = (new Date(index.iso)).addOffset().toISOString();
        $scope.onTimeSet = function (newDate, oldDate) {
            index.iso = (new Date(newDate)).removeOffset().toISOString();
            popup.close();
        };
        var popup = $ionicPopup.show({
            template: '<datetimepicker data-ng-model="tmp.newDate" data-on-set-time="onTimeSet(newDate, oldDate)"></datetimepicker><button ng-click="removeDate()">No time</button>',
            scope: $scope,
        });
    };

    $scope.openIconPicker = function (session) {
        var popup = $ionicPopup.show({
            title: 'Set Icon',
            templateUrl: 'icon_picker.html',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    type: 'button-dark',
                    onTap: function (e) {

                    }
                }
            ],
        });
        $scope.selectIcon = function (icon) {
            session.icon = icon;
            popup.close();
        };
    };

    $scope.openMeetingTypePicker = function (session) {
        var popup = $ionicPopup.show({
            title: 'Link to..',
            templateUrl: 'type_picker.html',
            scope: $scope,
            buttons: [
                {
                    text: 'Cancel',
                    type: 'button-dark',
                    onTap: function (e) {

                    }
                }
            ],
        });
        $scope.selectIcon = function (icon) {
            session.type = icon;
            popup.close();
        };
    };

    $scope.addSession = function () {
        var currentDateISO = (new Date()).toISOString();
        var lastSession = $scope.sessions[$scope.sessions.length - 1];
        var roomName = (($scope.sessions.length > 0) && lastSession.hasOwnProperty('room') && lastSession.roomName) || '';
        var room = (($scope.sessions.length > 0) && lastSession.hasOwnProperty('room') && lastSession.room) || null;
        var date = $scope.sessions.length > 0 && lastSession.endDate !== null && (typeof lastSession.endDate !== "undefined") && JSON.parse(JSON.stringify(lastSession.endDate)) || $scope.sessions.length > 0 && JSON.parse(JSON.stringify(lastSession.startDate)) || { "__type": "Date", 'iso': (new Date()).toISOString() };
        var newSession = {
            "attendee": '',
            "event": {
                "__type": "Pointer",
                "className": "Event",
                "objectId": $scope.event.objectId
            },
            "presenter": '',
            "text": '',
            "type": 'meeting',
            "name": 'Edit session name',
            "icon": "calendar",
            "endDate": date,
            "startDate": JSON.parse(JSON.stringify(date)),
            "roomName": roomName,
            "room": room,
            "createdAt": currentDateISO,
            "updatedAt": currentDateISO
        };
        $scope.sessions.unshift(newSession);

    };

    $scope.removeSession = function (sessionId) {
        $remotestorage.removeSession(
            sessionId,
            function () {
                $remotestorage.forceUpdateEvents($localstorage,
                    function () {
                        document.location.href = "#/app/events/event?id=" + $stateParams.id;
                    },
                    function (result) {
                    }
                );
            },
            function () { });
    };
    $scope.roomPickerType = "meeting";
    $scope.openRoomPicker = function (session) {

        //$scope.thisEvent = { 'pinCode': event.pinCode }
        var popup = $ionicPopup.show({
            title: 'Set Icon',
            templateUrl: 'room_picker.html',
            scope: $scope,
            buttons: [
                {
                    text: 'No room',
                    type: 'button-dark',
                    onTap: function (e) {
                        session.roomName = "";
                        session.room = {
                            "__type": "Pointer",
                            "className": "Room",
                            "objectId": null
                        };
                        session.spotName = "";
                        session.spot = {
                            "__type": "Pointer",
                            "className": "Spot",
                            "objectId": null
                        };
                    }
                }
            ],
        });
        $scope.selectRoom = function (selectedRoom) {
            session.roomName = selectedRoom.name;
            session.room = {
                "__type": "Pointer",
                "className": "Room",
                "objectId": selectedRoom.objectId
            };
            popup.close();
        };
        $scope.selectSpot = function (selectedSpot) {
            session.spotName = selectedSpot.name;
            session.spot = {
                "__type": "Pointer",
                "className": "Spot",
                "objectId": selectedSpot.objectId
            };
            popup.close();
        };
    };

    $scope.save = function () {
        $remotestorage.saveSessions($scope.sessions,
            function (event) {
                $remotestorage.forceUpdateEvents($localstorage,
                    function () {
                        document.location.href = "#/app/events/event?id=" + $stateParams.id;
                        $window.location.reload();
                    },
                    function (result) {
                    }
                );
            },
            function (event, error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Error!',
                    template: 'Something went wrong while saving events.'
                });
                alertPopup.then(function (res) {
                });
            });
    };
}]);
visit_controllers.controller('SessionCtrl', ['$scope', '$stateParams', '$localstorage', '$cordovaCalendar', function ($scope, $stateParams, $localstorage, $cordovaCalendar) {
    $scope.session = $localstorage.getSession($stateParams.id);
    if ($scope.session.room) {
        $scope.room = $localstorage.getRoom($scope.session.room.objectId);
    } else {
        $scope.room = {};
    }
    if ($scope.session.spot) {
        $scope.spot = $localstorage.getSpot($scope.session.spot.objectId);
    } else {
        $scope.spot = {};
    }
    $scope.createEvent = function () {
        var event = {
            title: $scope.session.name
        };
        if ($scope.room.name) {
            event.location = $scope.room.name + ', ABB CRC Kraków';
        } else {
            if ($scope.spot.name) {
                event.location = $scope.spot.name + ', '+ $scope.spot.address;
            }
        }
        if ($scope.session.text) {
            event.notes = $scope.session.text.replace(/<\/?[^>]+(>|$)/g, "");
        }
        if ($scope.session.startDate) {
            event.startDate = new Date($scope.session.startDate.iso);
            event.endDate = event.startDate;
        }
        if ($scope.session.endDate) {
            event.endDate = new Date($scope.session.endDate.iso);
            if (!event.startDate) event.startDate = event.endDate;
        }
        $cordovaCalendar.createEventInteractively(event).then(function (result) {
            console.log("Event created successfully");
        }, function (err) {
            alert('Unable to create calendar entry from this session.');
        });
    };
}]);
visit_controllers.controller('SessionEditCtrl', ['$scope', '$stateParams', '$localstorage', '$remotestorage', '$cordovaCalendar', '$window', function ($scope, $stateParams, $localstorage, $remotestorage, $cordovaCalendar, $window) {
    $scope.session = $localstorage.getSession($stateParams.id);
    if ($scope.session.room) {
        $scope.room = $localstorage.getRoom($scope.session.room.objectId);
    } else {
        $scope.room = {};
    }
    if ($scope.session.spot) {
        $scope.spot = $localstorage.getSpot($scope.session.spot.objectId);
    } else {
        $scope.spot = {};
    }
    $scope.save = function () {
        var eventId = $scope.session.event.objectId;
        $remotestorage.saveSessions([$scope.session],
            function (event) {
                $remotestorage.forceUpdateEvents($localstorage,
                    function () {
                        document.location.href = "#/app/events/event?id=" + eventId;
                        $window.location.reload();
                    },
                    function (result) {
                    }
                );
            },
            function (event, error) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Error!',
                    template: 'Something went wrong while saving events.'
                });
                alertPopup.then(function (res) {
                });
            });
    };
}]);
visit_controllers.controller('NavigateCtrl', ['$scope', '$localstorage', '$ionicPopover', '$timeout', function ($scope, $localstorage, $ionicPopover, $timeout) {
    $scope.spots = $localstorage.getSpots();
    $scope.spotTypes = [{ id: 'atm', text: 'ATMs', selected: true }, { id: 'hotel', text: 'Hotels', selected: true }, { id: 'location', text: 'Locations', selected: true }, { id: 'restaurant', text: 'Restaurants', selected: true }, { id: 'shopping', text: 'Shopping', selected: true }, { id: 'sight', text: 'Sights', selected: true }];
    $scope.filteredSpots = [];
    $scope.filterSpots = function () {
        $scope.filteredSpots = [];
        $scope.spots.forEach(function (spot) {
            $scope.spotTypes.forEach(function (spotType) {
                if (spot.type == spotType.id) {
                    if (spotType.selected === true) $scope.filteredSpots.push(spot);
                }
            });
        });
    };
    $scope.changeFiltration = function () {
        var changeTo = !$scope.spotTypes[0].selected;
        $scope.spotTypes.forEach(function (spot) {
            spot.selected = changeTo;
        });
        $scope.filterSpots();
    };
    $scope.navigateToSpot = function (spotId) {
        var spot = $localstorage.getSpot(spotId);
        $timeout(function () {
            launchnavigator.navigate(
            [spot.position.latitude, spot.position.longitude],
            null,
            function () {

            },
            function (error) {
                alert("Plugin error: " + error);
            }, {
                preferGoogleMaps: true,
                navigationMode: "maps",
                transportMode: "walking"
            });
        }, 100);
        
    };
    $scope.filterSpots();

    $ionicPopover.fromTemplateUrl('popover.html', {
        scope: $scope
    }).then(function (popover) {
        $scope.popover = popover;
    });
    $scope.showFilterModal = function ($event) {
        $scope.popover.show($event);
    };
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
        $scope.filterSpots();
    });
    $scope.$on('popover.hidden', function () {
        $scope.filterSpots();
    });
    $scope.$on('popover.removed', function () {
        $scope.filterSpots();
    });
}]);
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
visit_controllers.controller('LoginCtrl', ['$scope', '$state', '$stateParams', '$ionicPopup', '$ionicHistory', 'AuthService', function ($scope, $state, $stateParams, $ionicPopup, $ionicHistory, AuthService) {
    $scope.data = {};

    $scope.login = function (data) {
        data.next = $stateParams.next;
        data.nextParams = $stateParams.nextParams;
        AuthService.login(data).then(function (authenticated) {
            if ($stateParams.next === null) {
                $stateParams.next = { 'name': 'app.main_menu' };
            }
            $ionicHistory.currentView($ionicHistory.backView());
            $state.go($stateParams.next.name, $stateParams.nextParams, { location: "replace", reload: true });
        }, function (err) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please ask for credentials!'
            });
        });
    };
}]);
visit_controllers.controller('CityMenuCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.goToCity = function () {
        $state.go('app.city/city');
    };
    $scope.goToAirport = function () {
        $state.go('app.city/airport');
    };
    $scope.goToSpot = function (type) {
        document.location.href = '#/app/city/spots?type='+type;
    };
}]);
visit_controllers.controller('CityCtrl', ['$scope', function ($scope) {
}]);
visit_controllers.controller('AirportCtrl', ['$scope', '$localstorage', function ($scope, $localstorage) {
    $scope.airportAttributes = $localstorage.getAirportAttributes();
    $scope.showValue = function (icon) {
        if (['money', 'pedestrian'].indexOf(icon) > -1) return true;
        return false;
    };
    $scope.makeLink = function (icon) {
        if (['globe'].indexOf(icon) > -1) return true;
        return false;
    };
    $scope.newLine = function (icon) {
        if (['path'].indexOf(icon) > -1) return true;
        return false;
    };
}]);
visit_controllers.controller('SpotsCtrl', ['$scope', '$stateParams', '$localstorage', function ($scope, $stateParams, $localstorage) {
    $scope.spots = $localstorage.getSpots();
    $scope.spotType = $stateParams.type;
    $scope.spots.forEach(function (spot) {
        CRCcords = {
            latitude: 50.057901,
            longitude: 19.943042
        };
        toRad = function (value) {
            return value * Math.PI / 180;
        };

        distance = function (point1, point2) {
            var R = 6371; // earth radius in km
            var x = (toRad(point2.longitude) - toRad(point1.longitude)) *
                    Math.cos((toRad(point1.latitude) + toRad(point2.latitude)) / 2);
            var y = (toRad(point2.latitude) - toRad(point1.latitude));
            return Math.sqrt(x * x + y * y) * R;
        };
        spot.distance = distance(CRCcords,spot.position);
    });
}]);
visit_controllers.controller('SpotCtrl', ['$scope', '$stateParams', '$localstorage', function ($scope, $stateParams, $localstorage) {
    $scope.spot = $localstorage.getSpot($stateParams.spotId);
    $scope.spotAttributes = $localstorage.getSpotAttributes($stateParams.spotId);
    CRCcords = {
        latitude: 50.057901,
        longitude: 19.943042
    };
    toRad = function (value) {
        return value * Math.PI / 180;
    };
    distance = function (point1, point2) {
        var R = 6371; // earth radius in km
        var x = (toRad(point2.longitude) - toRad(point1.longitude)) *
                Math.cos((toRad(point1.latitude) + toRad(point2.latitude)) / 2);
        var y = (toRad(point2.latitude) - toRad(point1.latitude));
        return Math.sqrt(x * x + y * y) * R;
    };
    $scope.spot.distance = distance(CRCcords, $scope.spot.position);

    $scope.showValue = function (type) {
        if (['open', 'food', 'discount'].indexOf(type) > -1) return true;
        return false;
    };
    $scope.makeLink = function (type) {
        if (['url', 'email', 'phone'].indexOf(type) > -1) return true;
        return false;
    };

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
}]);
visit_controllers.controller('BleCtrl', function ($scope, $bleService) {
    $scope.devices = $bleService.getDevices();
    $bleService.startConstantScan(5000);
});
visit_controllers.controller('PlabbCtrl', ['$scope', function ($scope) {
    $scope.selectedLocation = { idx: 0 };
    $scope.swipeUp = function () {
        if ($scope.selectedLocation.idx > 0) {
            $scope.selectedLocation.idx = $scope.selectedLocation.idx - 1;
        } else {
            $scope.selectedLocation.idx = $scope.localizations.length -1;
        }
    };
    $scope.swipeDown = function () {
        if ($scope.selectedLocation.idx < $scope.localizations.length-1) {
            $scope.selectedLocation.idx = $scope.selectedLocation.idx + 1;
        } else {
            $scope.selectedLocation.idx = 0;
        }
    };
    $scope.callNumber = function (number) {
        document.location.href = number;
    };
    $scope.localizations = [ 
        {
            'name': 'Warszawa',
            'description': 'The Warsaw location of ABB hosts a number of departments that are essential for the operation of the company. This is where the company’s head office is located, together with central functions, including: the Human Resources Department, Legal Department, Accounting and Finance Division and Communication Department. Warsaw is also the location of a number of ABB’s business departments related to energy products and systems, robotics, low voltage products, as well as a department of medium and high voltage equipment maintenance services.',
            'address': 'ABB Sp. z o.o.|ul. Żegańska 1|04-713 Warszawa',
            'position': [52.206002, 21.169195],
            'phone': '+48 22 22 37 000',
            'nip': '5260304484',
            'regon': '010017168'
        }, {
            'name': 'Łódź',
            'description': 'ABB’s Lodz factory is the company’s largest production center in our country. It is also one of the world’s largest and most important producers of distribution transformers, power transformers and insulating components for power transformers. Products from the Łódź factory reach the markets of dozens of countries around the world, and the engineering and technical staff are an elite representation of their profession.',
            'address': 'ul. Aleksandrowska 67/93',
            'position': [51.80103, 19.380375],
            'phone': '+48 42 29 93 000'
        }, {
            'name': 'Aleksandrów',
            'description': 'In only two years, Aleksandrów Łódzki has become one of ABB’s largest and most modern production centers in Poland and Europe. This is the site where two factories have been built from scratch: an electrical motor factory and a power electronics factory. These two factories in Aleksandrów Łódzki produce energy efficient and highly effective top-class electrical motors and medium voltage drives, converters for ecologically clean rail transport and wind converters for use in wind farms.',
            'address': 'ul. Placydowska 27',
            'position': [51.811876, 19.276958],
            'phone': '+48 22 223 96 00'
        }, {
            'name': 'Przasnysz',
            'description': 'ABB’s manufacturing plant in Przasnysz are some of the most modern high and medium voltage equipment factories in the world. This is where a number of specialized products are manufactured, which means that the factory in Przasnysz - as the only one in the ABB Group - produces them and supplies markets on all continents. The plant is famous in Poland and abroad for its instrument transformers, disconnectors, surge arresters and fuses. The Przasnysz branch of ABB employs over 300 people, and the factory itself stands as an example of practical application of energy efficiency principles',
            'address': 'ul. Leszno 59',
            'position': [53.00708, 20.898253],
            'phone': '+48 22 223 8900'
        }, {
            'name': 'Kraków CRC',
            'description': 'The ABB Research Center in Krakow hires many experts in their field, graduates of key Polish and international universities and engineering schools, representing very high level of expertise and technical knowledge. Here, they can find perfect environment for professional development as well as wide access to most recent technologies. Additionally, an international environment provides an opportunity to share knowledge with colleagues from other ABB centers from all over the world.',
            'address': 'ul. Starowiślna 13A',
            'position': [50.0577,19.9427],
            'phone': '+48 22 223 8900'
        }, {
            'name': 'Kraków ISDC',
            'description': 'Information Systems Delivery Center in Poland employs over 300 professionals from the IT industry. Developers, analysts, project managers, database specialists and web application developers are all responsible for functioning of the global ABB systems. ISDC employees carry out projects of all dimensions of the international business of ABB and its customers, thus they participate in projects not only in Poland but all over the world. ABB’s leading position gives a person employed in ISDC a chance to work on innovative projects, creating unique solutions on a global scale.',
            'address': 'ul. Starowiślna 13',
            'position': [50.0577, 19.9427],
            'phone': '+48 22 223 86 00'
        }, {
            'name': 'Wrocław',
            'description': 'ABB’s factory in Wrocław is one of the major suppliers of Low Voltage Switchgears in Europe.',
            'address': 'ul. Graniczna 8B',
            'position': [51.109409, 16.926906],
            'phone': '+48 22 223 93 85'
        }, {
            'name': 'Nowa Wieś Lęborska',
            'description': 'Nowa Wieś Lęborska is a headquarter of ABB Entrelec. The factory produces components of low voltage products, electronic components and measurement instruments .',
            'address': 'ul. Grunwaldzka 38',
            'position': [54.570917, 17.738860],
            'phone': '+48 59 86 15 800'
        }];

}]);
visit_controllers.controller('DnaCtrl', ['$scope', function ($scope) {
    $scope.elements = [
        {
            'name': 'Integrity',
            'image': 'integrity.svg',
            'description': 'We are committed to a high standard of integrity which is expected of every employee and in every country where we do business. With hard work and a clear commitment from ABB`s top management at headquarters and across our regions and divisions, ABB has seen the positive impact that a robust compliance and integrity program and a strong culture of integrity can have on the long-term success and sustainability of our company.'
        },
        {
            'name': 'Workplace Safety & Health',
            'image': 'bhp.svg',
            'description': 'The safety and good health of our employees and contractors are a top priority for ABB. We have a duty of care and know that our ability to carry out business successfully depends on robust health and safety performance.'
        },
        {
            'name': 'Sustainable development',
            'image': 'sustainability.svg',
            'description': 'For ABB, sustainability is about balancing economic success, environmental stewardship and social progress to benefit all our stakeholders. Sustainability is part of ABB`s corporate strategy and business success. '
        },
        {
            'name': 'Corporate social responsibility',
            'image': 'csr.svg',
            'description': 'ABB is committed to maintaining high social, environmental, human rights, ethical and governance standards for the benefit of all stakeholders. Corporate responsibility reflects the company’s values and behavior to its stakeholders. The company has several policies and standards in place to underpin those core values, covering business ethics and governance, the Code of Conduct, and policies such as the Group Social and Human Rights policies. These are all supported by internal Group directives and instructions.'
        },
    ];

}]);
visit_controllers.controller('TechnologyCtrl', ['$scope', function ($scope) {
    $scope.elements = [
        {
            'name': 'Power grids',
            'image': 'technology/grid.svg',
            'description': 'The Power Grids division is the world’s leading supplier of power and automation products, systems and service solutions across the power value chain of generation, transmission and distribution serving utility, industry, transportation and infrastructure customers directly and through channel partners. The division is focused on addressing key areas such as the integration of renewable energies, growing network complexity, grid automation, and microgrids. This division also offers a full range of consulting, service and asset management solutions based on a lifecycle approach.'
        },
        {
            'name': 'Process automation',
            'image': 'technology/automation.svg',
            'description': 'The main focus of this ABB business is to provide customers with products and solutions for instrumentation, automation and optimization of industrial processes. The industries served include oil and gas, power, chemicals and pharmaceuticals, pulp and paper, metals and minerals, marine and turbocharging. Key customer benefits include improved asset productivity and energy savings.'
        },
        {
            'name': 'Discrete Automation <br/> and Motion',
            'image': 'technology/discrete.svg',
            'description': 'The Discrete Automation and Motion division provides products, solutions and related services that increase industrial productivity and energy efficiency. Its motors, generators, drives, power electronics and robotics provide power, motion and control for a wide range of automation applications.The leading position in wind generators and a growing offering in solar complement the industrial focus, leveraging joint technology, channels and operations platforms.'
        },
        {
            'name': 'Electrification Products',
            'image': 'technology/electro.svg',
            'description': 'ABB offers a full range of low- and medium-voltage solutions to connect, protect, control and measure a wide range of electrical systems for all major industries, including the residential sector. The business improves the reliability and efficiency of electrical installations through modular substation packages, distribution automation products, switchgear, circuit breakers, measuring and sensing devices, control products, wiring accessories, and enclosures and cabling systems, including KNX systems designed to integrate and automate a building’s lighting, ventilation, heating, and security and data communication networks.'
        }
    ];

}]);
visit_controllers.controller('HistoryCtrl', ['$scope', function ($scope) {
    $scope.selectedSlide = { 'idx': 0 };
    $scope.swipeUp = function () {
        if ($scope.selectedSlide.idx > 0) {
            $scope.selectedSlide.idx = $scope.selectedSlide.idx - 1;
        } else {
            $scope.selectedSlide.idx = $scope.elements.length - 1;
        }
    };
    $scope.swipeDown = function () {
        if ($scope.selectedSlide.idx < $scope.elements.length - 1) {
            $scope.selectedSlide.idx = $scope.selectedSlide.idx + 1;
        } else {
            $scope.selectedSlide.idx = 0;
        }
    };
    $scope.checkIfShow = function (index) {
        var entriesLimit = 5;
        if ((index > $scope.selectedSlide.idx - entriesLimit) && (index < $scope.selectedSlide.idx + entriesLimit)) {
            return true;
        }
        if ((index<2*entriesLimit-1)&&($scope.selectedSlide.idx<entriesLimit)) {
            return true;
        }
        return false;
    };
    $scope.elements = [
        {
            'header': '1883',
            'text': 'Ludvig Fredholm establishes Elektriska Aktiebolaget in Stockholm as manufacturers of electrical lighting and generators.',
            'img': 'history/1883.jpg'
        },
        {
            'header': '1889',
            'text': 'Jonas Wenström invents the three phase system for generators, transformers and motors.',
            'img': 'history/1889.jpg'
        },
        {
            'header': '1890',
            'text': 'Elektriska Aktiebolaget merges with Wenströms & Granströms Elektriska Kraftbolag to form Allmänna Svenska Elektriska Aktiebolaget, later shortened to ASEA.',
            'img': 'history/1890.jpg'
        },
        {
            'header': '1891',
            'text': 'Charles E. L. Brown and Walter Boveri establish Brown, Boveri & Cie in Baden, Switzerland. Shortly afterward, Brown, Boveri is the first company to transmit high-voltage power.',
            'img': 'history/1891.jpg'
        },
        {
            'header': '1893',
            'text': 'ASEA builds the first three-phase transmission system in Sweden.',
            'img': 'history/1893.jpg'
        },
        {
            'header': '1893',
            'text': 'Brown Boveri supplies Europe’s first large-scale combined heat and power plant producing alternating current.',
            'img': 'history/1893b.jpg'
        },
        {
            'header': '1901',
            'text': 'BBC builds the first steam turbine in Europe.',
            'img': 'history/1893b.jpg'
        },
        {
            'header': '1932',
            'text': 'ASEA builds the world’s largest self-cooling transformer rated at 2,500 kVA (kilovolt ampere).',
            'img': 'history/1932.jpg'
        },
        {
            'header': '1933',
            'text': 'BBC obtains the patent for turbine rotors constructed from individual steel disks that are welded together.',
            'img': 'history/1933.jpg'
        },
        {
            'header': '1939',
            'text': 'BBC builds the first combustion gas turbine for generating electricity.',
            'img': 'history/1939.jpg'
        },
        {
            'header': '1942',
            'text': 'ASEA builds the world’s first 120 MVA, 220 kV transformer in the Stockholm Elverks Värtanstation.',
            'img': 'history/1942.jpg'
        },
        {
            'header': '1943',
            'text': 'BBC builds the first 110 kV high-speed air blast circuit breaker.',
            'img': 'history/1943.jpg'
        },
        {
            'header': '1988',
            'text': 'ASEA and BBC merge to form the new company, with headquarters in Zurich, Switzerland. The new group, which started operations on Jan. 5, 1988, had revenues of $17 billion and employed 160,000 people around the world.',
            'img': 'history/1988.jpg'
        },
        {
            'header': '1998',
            'text': 'ABB launches the FlexPicker, a delta robot uniquely designed for the picking and packing industry.',
            'img': 'history/1998.jpg'
        },
        {
            'header': '2005',
            'text': 'ABB delivers electricity through a DC (direct current) link originating 70 km away on land to a gas platform in the North Sea, helping avoid annual emissions of 230,000 tons of CO2 and 230 tons of NOX.',
            'img': 'history/2005.jpg'
        },
        {
            'header': '2008',
            'text': 'NorNed, the longest submarine HVDC cable in the world at 580 km, links the power networks of Norway and the Netherlands with a transmission capacity of 700 MW.',
            'img': 'history/2008.jpg'
        },
        {
            'header': '2012',
            'text': 'ABB successfully designs and develops a hybrid DC breaker suitable for the creation of large inter-regional DC grids. This breakthrough solves a technical challenge that has been left unresolved for over a hundred years and was perhaps one of the main influencers in the ’war of currents’.',
            'img': 'history/2012.jpg'
        },

    ];

}]);
visit_controllers.controller('InstallCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.run_options = [
    { title: 'Install on Android', state: 'https://abb-my.sharepoint.com/personal/marcin_bajer_pl_abb_com/Documents/VisitPlcrc.apk?web=1', icon: 'ion-social-android-outline' },
    { title: 'Install on iOS', state: 'app.install/ios', icon: 'ion-social-apple-outline' },
    { title: 'Run in browser', state: 'app.main_menu', icon: 'ion-earth' }
    ];

    var pfx = ["webkit", "moz", "ms", "o", ""];
    function RunPrefixMethod(obj, method) {

        var p = 0, m, t;
        while (p < pfx.length && !obj[m]) {
            m = method;
            if (pfx[p] == "") {
                m = m.substr(0, 1).toLowerCase() + m.substr(1);
            }
            m = pfx[p] + m;
            t = typeof obj[m];
            if (t != "undefined") {
                pfx = [pfx[p]];
                return (t == "function" ? obj[m]() : obj[m]);
            }
            p++;
        }

    }

    $scope.trigger_action = function (index) {
        switch (index) {
            case 0:
                window.location = $scope.run_options[index].state;
                break;
            case 2:
                RunPrefixMethod(document.documentElement, "RequestFullScreen");
            default:
                $state.go($scope.run_options[index].state);
        }
    }

}]);

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
angular.module('visit_plcrc.constants', []).constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
    agenda_viewer: 'agenda_viewer_role',
    abb_member: 'abb_member_role',
    public: 'public_role'
})

.constant('LOCAL_STORAGE_CONTANTENT', {
  "Address": [
    {
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "phone2Label": "PLABB Contact Center",
      "zipCode": "31-038",
      "address": "Ul. Starowiślna 13A",
      "createdAt": "2015-05-05T12:57:58.275Z",
      "updatedAt": "2015-10-09T12:25:52.240Z",
      "phone2": "+48 2222 3 7777",
      "name": "Starowiślna 13A",
      "email": "plcrcoffice@pl.abb.com",
      "phone1": "+48 22 223 9500",
      "phone1Label": "PLCRC reception",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.057741,
        "longitude": 19.942656
      },
      "objectId": "mMajt3V6Kc"
    },
    {
      "createdAt": "2016-01-27T12:46:31.675Z",
      "updatedAt": "2017-01-31T09:15:22.303Z",
      "name": "Starowiślna 15",
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "address": "Ul. Starowiślna 15",
      "objectId": "Pv0v5615DU"
    }
  ],
  "AgendaEdit": false,
  "AirportAttribute": [
    {
      "createdAt": "2012-11-04T15:23:38.008Z",
      "updatedAt": "2015-08-25T14:42:59.864Z",
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "icon": "plane",
      "order": 5,
      "title": "John Paul II International Airport Kraków-Balice",
      "objectId": "1n3G6cub23"
    },
    {
      "createdAt": "2015-11-23T12:19:42.820Z",
      "updatedAt": "2015-11-23T12:20:42.573Z",
      "title": "Train cost",
      "value": "8 PLN",
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "icon": "money",
      "order": 20,
      "objectId": "3yhzSwt88t"
    },
    {
      "updatedAt": "2015-11-23T12:24:00.686Z",
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "icon": "globe",
      "order": 30,
      "title": "Kraków Airport Taxi service",
      "value": "http://www.krakowairport.pl/en/passenger,c70/transport-parking,c76/krakow-airport-taxi-service,a202.html",
      "createdAt": "2015-11-23T12:21:59.601Z",
      "objectId": "P2dGwGm3Nl"
    },
    {
      "createdAt": "2013-01-26T18:14:47.701Z",
      "updatedAt": "2016-09-19T11:37:36.416Z",
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "icon": "path",
      "order": 50,
      "title": "Connections via",
      "value": "WAW|ZRH|MUC|FRA|ARN|PRG|VIE|HEL|TXL",
      "objectId": "Q9BBGfZ8Gu"
    },
    {
      "createdAt": "2012-06-20T20:48:26.949Z",
      "updatedAt": "2015-11-23T12:23:50.418Z",
      "title": "Taxi cost",
      "value": "69 PLN",
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "icon": "money",
      "order": 25,
      "objectId": "a5iG7AqG5V"
    },
    {
      "icon": "pedestrian",
      "createdAt": "2012-06-20T20:48:51.452Z",
      "updatedAt": "2015-11-22T17:25:09.282Z",
      "order": 15,
      "title": "Distance",
      "value": "15 km",
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "objectId": "k7rwSImgjc"
    },
    {
      "createdAt": "2015-11-23T12:20:56.866Z",
      "updatedAt": "2015-11-23T12:21:49.102Z",
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "icon": "globe",
      "order": 22,
      "title": "Train connection details",
      "value": "http://www.malopolskiekoleje.pl/index.php/routes/krakow-airport-krakow-main-railway-station",
      "objectId": "tpZ4dGPGXA"
    },
    {
      "airport": {
        "__type": "Pointer",
        "className": "Airport",
        "objectId": "p2N3s9wGGb"
      },
      "icon": "globe",
      "order": 10,
      "title": "Kraków Airport website",
      "value": "http://m.krakowairport.pl/en",
      "createdAt": "2012-06-20T20:49:54.959Z",
      "updatedAt": "2015-11-22T17:25:37.142Z",
      "objectId": "wz6qOj8jaA"
    }
  ],
  "Event": [
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-08T00:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T23:55:00.000Z"
      },
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "hideAfter": 300,
      "name": "Visit of Bazmi Husain",
      "pinCode": "1997",
      "createdAt": "2017-02-02T12:17:35.836Z",
      "updatedAt": "2017-02-02T12:17:35.836Z",
      "objectId": "2TORCtecd0"
    }
  ],
  "Room": [
    {
      "name": "Skłodowska-Curie",
      "createdAt": "2017-02-02T11:16:56.008Z",
      "updatedAt": "2017-02-02T11:44:06.820Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "type": "other",
      "floor": 4,
      "objectId": "RmbqAFcvzn"
    },
    {
      "name": "Restrooms",
      "createdAt": "2016-02-12T09:35:22.315Z",
      "updatedAt": "2017-02-02T11:17:02.193Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 0,
      "type": "wc",
      "objectId": "LDj8c0MCMC"
    },
    {
      "name": "Wyspiański",
      "createdAt": "2016-02-09T12:51:01.226Z",
      "updatedAt": "2017-02-02T10:32:51.225Z",
      "type": "meeting",
      "floor": -1,
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "office365Address": "st15.salsa-krakow.isdc@pl.abb.com",
      "objectId": "yEa0Er8cb4"
    },
    {
      "name": "Kopernik",
      "createdAt": "2016-02-09T12:50:51.910Z",
      "updatedAt": "2017-02-02T10:38:28.211Z",
      "floor": -1,
      "type": "other",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "objectId": "bzweaJ4woo"
    },
    {
      "name": "Szymborska",
      "createdAt": "2016-01-27T13:11:51.410Z",
      "updatedAt": "2017-02-02T11:02:18.736Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "type": "meeting",
      "office365Address": "st15.shakespeare-krakow.isdc@pl.abb.com",
      "objectId": "w66N79llJk"
    },
    {
      "updatedAt": "2016-01-27T13:03:36.764Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2016-01-27T13:03:15.864Z",
      "name": "Stairs",
      "floor": 4,
      "type": "other",
      "objectId": "C7U5cm2lKg"
    },
    {
      "createdAt": "2016-01-27T13:03:14.952Z",
      "updatedAt": "2016-01-27T13:03:36.106Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Elevator",
      "floor": 4,
      "type": "other",
      "objectId": "zAgnL5j5we"
    },
    {
      "createdAt": "2016-01-27T13:03:10.992Z",
      "updatedAt": "2016-01-27T13:03:38.447Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Restrooms",
      "floor": 4,
      "type": "wc",
      "objectId": "TYKpNiNWBG"
    },
    {
      "createdAt": "2016-01-27T13:02:27.596Z",
      "updatedAt": "2016-01-27T13:02:44.842Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Restrooms",
      "type": "wc",
      "floor": 3,
      "objectId": "vQHxY8WUtL"
    },
    {
      "createdAt": "2016-01-27T13:02:26.884Z",
      "updatedAt": "2016-01-27T13:02:46.076Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Kitchen",
      "type": "other",
      "floor": 3,
      "objectId": "j1rGwsehk4"
    },
    {
      "updatedAt": "2016-01-27T13:02:46.692Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2016-01-27T13:02:26.121Z",
      "name": "Elevator",
      "type": "other",
      "floor": 3,
      "objectId": "qJOoNqO4W5"
    },
    {
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2016-01-27T13:02:25.228Z",
      "updatedAt": "2016-01-27T13:02:47.298Z",
      "name": "Stairs",
      "type": "other",
      "floor": 3,
      "objectId": "ObZRY5tqbt"
    },
    {
      "createdAt": "2016-01-27T13:01:37.058Z",
      "updatedAt": "2016-01-27T13:01:51.631Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Stairs",
      "floor": 2,
      "type": "other",
      "objectId": "8iDF30ID5l"
    },
    {
      "createdAt": "2016-01-27T13:01:34.772Z",
      "updatedAt": "2016-01-27T13:01:50.953Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Elevator",
      "floor": 2,
      "type": "other",
      "objectId": "Hbuw0L1y0k"
    },
    {
      "createdAt": "2016-01-27T13:01:32.103Z",
      "updatedAt": "2016-01-27T13:01:49.708Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Restrooms",
      "floor": 2,
      "type": "wc",
      "objectId": "QODjDvTCm6"
    },
    {
      "createdAt": "2016-01-27T13:00:24.244Z",
      "updatedAt": "2016-01-27T13:00:40.707Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "name": "Stairs",
      "type": "other",
      "objectId": "3Qy9U92BxZ"
    },
    {
      "createdAt": "2016-01-27T12:59:59.705Z",
      "updatedAt": "2016-01-27T13:00:39.546Z",
      "floor": 1,
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Elevator",
      "type": "other",
      "objectId": "Xcn5e7GEhI"
    },
    {
      "updatedAt": "2016-01-27T13:00:43.578Z",
      "floor": 1,
      "createdAt": "2016-01-27T12:59:58.783Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Restrooms",
      "type": "wc",
      "objectId": "CAXUavFFix"
    },
    {
      "createdAt": "2016-01-27T12:59:58.131Z",
      "updatedAt": "2016-01-27T13:00:38.771Z",
      "floor": 1,
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Kitchen",
      "type": "other",
      "objectId": "CSpMgcS6U7"
    },
    {
      "createdAt": "2016-01-27T12:59:24.739Z",
      "updatedAt": "2016-01-27T12:59:51.835Z",
      "floor": 0,
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Kitchen",
      "type": "other",
      "objectId": "2Lhjsvkedk"
    },
    {
      "floor": 0,
      "createdAt": "2016-01-27T12:59:23.189Z",
      "updatedAt": "2016-01-27T12:59:51.030Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Stairs",
      "type": "other",
      "objectId": "bwF6KcRcY0"
    },
    {
      "updatedAt": "2016-01-27T12:59:49.129Z",
      "floor": 0,
      "createdAt": "2016-01-27T12:59:22.659Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Elevator",
      "type": "other",
      "objectId": "2dPeGzMqrn"
    },
    {
      "createdAt": "2016-01-27T12:54:06.666Z",
      "updatedAt": "2016-01-27T12:59:50.423Z",
      "name": "Elevator",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "type": "other",
      "objectId": "Xd0L6T6WiD"
    },
    {
      "updatedAt": "2016-01-27T14:37:11.323Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2016-01-27T12:48:48.355Z",
      "name": "Showers",
      "floor": -1,
      "type": "other",
      "objectId": "EQSP5GzWHi"
    },
    {
      "updatedAt": "2016-01-27T12:53:32.421Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2016-01-27T12:48:45.621Z",
      "name": "Stairs",
      "floor": -1,
      "type": "other",
      "objectId": "ZUpa9U7zut"
    },
    {
      "createdAt": "2016-01-27T12:48:42.465Z",
      "updatedAt": "2017-02-02T10:32:18.456Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Miłosz",
      "floor": -1,
      "type": "meeting",
      "office365Address": "st15.dart-krakow.isdc@pl.abb.com",
      "objectId": "mVh3Eeg5H0"
    },
    {
      "createdAt": "2016-01-27T12:48:38.944Z",
      "updatedAt": "2017-02-02T10:33:24.773Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Modrzejewska",
      "floor": -1,
      "type": "meeting",
      "office365Address": "st15.scala-krakow.isdc@pl.abb.com",
      "objectId": "1gYlmiRVJG"
    },
    {
      "createdAt": "2016-01-27T12:48:36.769Z",
      "updatedAt": "2017-02-02T10:32:32.424Z",
      "address": {
        "createdAt": "2016-01-27T12:46:31.675Z",
        "updatedAt": "2017-01-31T09:15:22.303Z",
        "name": "Starowiślna 15",
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "address": "Ul. Starowiślna 15",
        "objectId": "Pv0v5615DU",
        "__type": "Object",
        "className": "Address"
      },
      "name": "Matejko",
      "floor": -1,
      "type": "meeting",
      "office365Address": "st15.agile-krakow.isdc@pl.abb.com",
      "objectId": "6q1C1mhHDj"
    },
    {
      "floor": 3,
      "name": "Restrooms",
      "createdAt": "2015-05-19T19:10:47.628Z",
      "updatedAt": "2015-05-19T19:26:44.834Z",
      "type": "wc",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "objectId": "2imNPjOMBH"
    },
    {
      "createdAt": "2015-05-05T19:01:50.312Z",
      "updatedAt": "2015-10-30T09:46:58.559Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 3,
      "name": "Planty",
      "office365Address": "planty-krakow.crc@pl.abb.com",
      "type": "meeting",
      "objectId": "7UAMxYAS5m"
    },
    {
      "type": "lab",
      "createdAt": "2015-05-05T19:09:18.664Z",
      "updatedAt": "2015-05-18T05:59:38.749Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 0,
      "name": "Amper lab",
      "objectId": "7dpf3oFYZ1"
    },
    {
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 4,
      "name": "Restrooms",
      "type": "wc",
      "createdAt": "2015-05-19T19:10:48.675Z",
      "updatedAt": "2015-05-19T19:27:50.122Z",
      "objectId": "80tbj7vvbe"
    },
    {
      "floor": 0,
      "name": "Elevators",
      "createdAt": "2015-05-19T19:10:02.934Z",
      "updatedAt": "2015-05-19T19:19:20.504Z",
      "type": "other",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "objectId": "C8BqxjIgGb"
    },
    {
      "name": "Restrooms",
      "type": "wc",
      "createdAt": "2015-05-19T19:10:51.053Z",
      "updatedAt": "2015-05-19T19:29:59.531Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "objectId": "CqkzWnergR"
    },
    {
      "createdAt": "2015-05-14T14:11:50.484Z",
      "updatedAt": "2015-05-14T14:12:32.739Z",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "name": "Faraday lab",
      "objectId": "DXhUP5PSpF"
    },
    {
      "type": "other",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "createdAt": "2015-05-19T19:10:44.662Z",
      "updatedAt": "2015-05-19T19:23:00.280Z",
      "name": "Elevators",
      "objectId": "EAVDEka4qC"
    },
    {
      "createdAt": "2015-05-05T19:09:27.706Z",
      "updatedAt": "2015-05-11T12:03:28.336Z",
      "name": "PT Expocorner lab",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "objectId": "EbUwcA3Gz2"
    },
    {
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 0,
      "name": "Galicja D",
      "office365Address": "galicja.d-krakow.crc@pl.abb.com",
      "createdAt": "2015-05-05T19:01:40.645Z",
      "updatedAt": "2015-10-30T09:47:11.056Z",
      "type": "meeting",
      "objectId": "EiFvCBr4wH"
    },
    {
      "createdAt": "2015-05-05T19:09:32.848Z",
      "updatedAt": "2015-05-11T12:03:21.379Z",
      "name": "Tesla lab",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "objectId": "F46UDdNNgu"
    },
    {
      "name": "Maxwell lab",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2015-05-05T19:09:26.013Z",
      "updatedAt": "2015-05-11T12:03:30.396Z",
      "floor": -1,
      "objectId": "GHRjpWukKW"
    },
    {
      "createdAt": "2015-05-05T19:09:31.086Z",
      "updatedAt": "2015-05-11T12:03:23.396Z",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "name": "Volt lab",
      "objectId": "GzK4JOfDvD"
    },
    {
      "office365Address": "kazimierz-krakow.crc@pl.abb.com",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "createdAt": "2015-05-05T19:01:38.498Z",
      "updatedAt": "2015-10-30T09:44:05.492Z",
      "name": "Kazimierz",
      "objectId": "HIDX1z9i39"
    },
    {
      "createdAt": "2015-05-05T19:01:58.580Z",
      "updatedAt": "2015-05-05T19:05:45.722Z",
      "floor": 5,
      "name": "Giewont",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "objectId": "IgNrWrNVMP"
    },
    {
      "createdAt": "2015-05-05T19:01:33.002Z",
      "updatedAt": "2015-10-30T09:44:37.403Z",
      "office365Address": "smocza.jama-krakow.crc@pl.abb.com",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 2,
      "name": "Smocza Jama",
      "objectId": "IptNoZqdtI"
    },
    {
      "createdAt": "2015-05-19T19:10:49.780Z",
      "updatedAt": "2015-05-19T19:28:48.042Z",
      "type": "wc",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 5,
      "name": "Restrooms",
      "objectId": "Jx3ODDPghW"
    },
    {
      "floor": 3,
      "name": "Wawel D",
      "createdAt": "2015-05-05T19:01:54.546Z",
      "updatedAt": "2016-03-02T08:37:44.623Z",
      "office365Address": "wawel.d-krakow.crc@pl.abb.com",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "tag": "C3:E3:36:35:48:35",
      "objectId": "MXEqLB27XX"
    },
    {
      "updatedAt": "2015-05-11T12:03:32.420Z",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "name": "Kelvin lab",
      "createdAt": "2015-05-05T19:09:24.335Z",
      "objectId": "OHaKaRdCNs"
    },
    {
      "name": "Zwierzyniec",
      "office365Address": "zwierzyniec-krakow.crc@pl.abb.com",
      "type": "meeting",
      "createdAt": "2015-05-05T19:01:46.426Z",
      "updatedAt": "2017-01-30T16:38:17.602Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 0,
      "objectId": "P2c8blkRLJ"
    },
    {
      "createdAt": "2015-05-05T19:01:52.356Z",
      "updatedAt": "2015-10-30T09:44:19.961Z",
      "floor": 2,
      "name": "Kliny",
      "office365Address": "kliny-krakow.crc@pl.abb.com",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "objectId": "PliBgsT5DK"
    },
    {
      "updatedAt": "2017-01-30T16:37:16.244Z",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 3,
      "name": "Wawel M",
      "office365Address": "wawel.m-krakow.crc@pl.abb.com",
      "createdAt": "2015-05-05T19:01:56.755Z",
      "tag": "F0:12:F0:EE:53:91",
      "objectId": "Qiwami7zba"
    },
    {
      "type": "other",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 4,
      "name": "Elevators",
      "createdAt": "2015-05-19T19:10:48.104Z",
      "updatedAt": "2015-05-19T19:27:24.519Z",
      "objectId": "RrbXEeTcpD"
    },
    {
      "floor": 0,
      "name": "Reception",
      "type": "other",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2015-05-05T19:02:00.487Z",
      "updatedAt": "2015-05-05T19:08:02.422Z",
      "objectId": "W6P4hE7itg"
    },
    {
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 5,
      "name": "Elevators",
      "type": "other",
      "createdAt": "2015-05-19T19:10:49.237Z",
      "updatedAt": "2015-05-19T19:28:20.210Z",
      "objectId": "YGIJcJKCqw"
    },
    {
      "type": "wc",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 0,
      "createdAt": "2015-05-19T19:10:05.184Z",
      "updatedAt": "2015-05-19T19:22:50.762Z",
      "name": "Restrooms",
      "objectId": "YQETYYdTIk"
    },
    {
      "createdAt": "2015-05-05T19:09:29.413Z",
      "updatedAt": "2015-05-11T12:03:25.413Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "name": "AT Expocorner lab",
      "type": "lab",
      "objectId": "ZlXbc2RH3b"
    },
    {
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2015-05-05T19:09:20.706Z",
      "updatedAt": "2015-05-11T12:03:36.480Z",
      "floor": -1,
      "name": "Watt lab",
      "type": "lab",
      "objectId": "a5sSYxjb7H"
    },
    {
      "name": "Elevators",
      "type": "other",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "createdAt": "2015-05-19T19:10:50.389Z",
      "updatedAt": "2015-05-19T19:29:33.585Z",
      "objectId": "dyfcTS17BF"
    },
    {
      "floor": -1,
      "name": "Pascal lab",
      "type": "lab",
      "createdAt": "2015-05-05T19:09:34.555Z",
      "updatedAt": "2015-05-11T12:03:19.110Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "objectId": "eLMHemRLC6"
    },
    {
      "createdAt": "2015-05-05T19:01:36.266Z",
      "updatedAt": "2015-10-30T09:46:46.249Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "name": "Bronowice",
      "office365Address": "bronowice-krakow.crc@pl.abb.com",
      "type": "meeting",
      "objectId": "hTNRzWZAR4"
    },
    {
      "updatedAt": "2015-10-30T09:43:34.138Z",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 0,
      "name": "Nowa Huta",
      "office365Address": "nowa.huta-krakow.crc@pl.abb.com",
      "createdAt": "2015-05-05T19:01:44.553Z",
      "objectId": "i8zCNSyMLP"
    },
    {
      "type": "lab",
      "createdAt": "2015-05-14T14:11:11.785Z",
      "updatedAt": "2015-05-14T14:12:40.021Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "name": "Czochralski lab",
      "objectId": "iMxkLgSdRj"
    },
    {
      "updatedAt": "2015-10-30T09:46:30.581Z",
      "floor": 4,
      "name": "Bielany",
      "office365Address": "bielany-krakow.crc@pl.abb.com",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2015-05-05T19:01:48.466Z",
      "objectId": "kSM9JwYx40"
    },
    {
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 2,
      "name": "Elevators",
      "type": "other",
      "createdAt": "2015-05-19T19:10:45.982Z",
      "updatedAt": "2015-05-19T19:24:54.785Z",
      "objectId": "kUbJO5Dwa8"
    },
    {
      "floor": 0,
      "name": "Galicja M",
      "createdAt": "2015-05-05T19:01:42.706Z",
      "updatedAt": "2015-10-30T09:45:09.408Z",
      "office365Address": "galicja.m-krakow.crc@pl.abb.com",
      "type": "meeting",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "objectId": "o0OldDvVV7"
    },
    {
      "updatedAt": "2015-05-11T12:03:14.620Z",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "name": "Hetrz lab",
      "type": "lab",
      "createdAt": "2015-05-05T19:09:57.537Z",
      "objectId": "oTjiYNQzuZ"
    },
    {
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 1,
      "name": "Restrooms",
      "createdAt": "2015-05-19T19:10:45.494Z",
      "updatedAt": "2015-05-19T19:23:28.653Z",
      "type": "wc",
      "objectId": "qB0ZHMN1vI"
    },
    {
      "createdAt": "2015-05-19T19:10:47.063Z",
      "updatedAt": "2015-05-19T19:26:08.794Z",
      "type": "other",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 3,
      "name": "Elevators",
      "objectId": "rYuxMovrpp"
    },
    {
      "name": "Joule lab",
      "createdAt": "2015-05-14T14:11:40.098Z",
      "updatedAt": "2015-05-14T14:12:36.894Z",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": -1,
      "objectId": "tXK3OLqvZN"
    },
    {
      "floor": -1,
      "name": "Newton lab",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2015-05-05T19:09:22.617Z",
      "updatedAt": "2015-05-11T12:03:34.555Z",
      "objectId": "vRg49gVoiw"
    },
    {
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2015-05-14T14:11:52.945Z",
      "updatedAt": "2015-05-14T14:12:34.993Z",
      "floor": -1,
      "name": "Ohm lab",
      "type": "lab",
      "objectId": "wGwADTNHBQ"
    },
    {
      "createdAt": "2015-05-19T19:10:46.506Z",
      "updatedAt": "2015-05-19T19:25:28.235Z",
      "name": "Restrooms",
      "type": "wc",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "floor": 2,
      "objectId": "xHjoxYCiur"
    },
    {
      "floor": -1,
      "name": "Coulomb lab",
      "type": "lab",
      "address": {
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "phone2Label": "PLABB Contact Center",
        "zipCode": "31-038",
        "address": "Ul. Starowiślna 13A",
        "createdAt": "2015-05-05T12:57:58.275Z",
        "updatedAt": "2015-10-09T12:25:52.240Z",
        "phone2": "+48 2222 3 7777",
        "name": "Starowiślna 13A",
        "email": "plcrcoffice@pl.abb.com",
        "phone1": "+48 22 223 9500",
        "phone1Label": "PLCRC reception",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057741,
          "longitude": 19.942656
        },
        "objectId": "mMajt3V6Kc",
        "__type": "Object",
        "className": "Address"
      },
      "createdAt": "2015-05-05T19:09:36.381Z",
      "updatedAt": "2015-05-11T12:03:17.068Z",
      "objectId": "zeOEmhNqrl"
    }
  ],
  "RoomAttribute": [
    {
      "createdAt": "2016-09-19T21:45:48.550Z",
      "updatedAt": "2016-09-19T21:46:35.403Z",
      "room": {
        "createdAt": "2015-05-05T19:01:50.312Z",
        "updatedAt": "2015-10-30T09:46:58.559Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Planty",
        "office365Address": "planty-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "7UAMxYAS5m",
        "__type": "Object",
        "className": "Room"
      },
      "icon": "owner",
      "order": 40,
      "type": "owner",
      "value": "Łukasz Ziomka",
      "objectId": "3X5pSfxU4e"
    },
    {
      "room": {
        "createdAt": "2015-05-05T19:01:50.312Z",
        "updatedAt": "2015-10-30T09:46:58.559Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Planty",
        "office365Address": "planty-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "7UAMxYAS5m",
        "__type": "Object",
        "className": "Room"
      },
      "type": "vc",
      "createdAt": "2015-05-08T05:33:43.345Z",
      "updatedAt": "2016-09-19T09:55:30.629Z",
      "value": "PLKRK - Krakow, PLCRC Planty",
      "icon": "camera",
      "order": 60,
      "objectId": "6nyT3kzu9e"
    },
    {
      "type": "phone",
      "value": "+48 22 223 8986",
      "createdAt": "2015-05-08T05:33:41.094Z",
      "updatedAt": "2015-05-08T05:34:13.561Z",
      "icon": "phone",
      "order": 10,
      "room": {
        "createdAt": "2015-05-05T19:01:50.312Z",
        "updatedAt": "2015-10-30T09:46:58.559Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Planty",
        "office365Address": "planty-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "7UAMxYAS5m",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "9nLrSd1uZQ"
    },
    {
      "order": 20,
      "room": {
        "createdAt": "2015-05-05T19:01:50.312Z",
        "updatedAt": "2015-10-30T09:46:58.559Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Planty",
        "office365Address": "planty-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "7UAMxYAS5m",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "createdAt": "2015-05-08T05:33:41.803Z",
      "updatedAt": "2015-09-07T13:51:33.639Z",
      "value": "8",
      "icon": "users",
      "objectId": "Lfjp34P67V"
    },
    {
      "createdAt": "2015-05-08T05:33:42.459Z",
      "updatedAt": "2015-09-07T13:53:54.156Z",
      "type": "beamer",
      "value": "",
      "icon": "projector",
      "order": 50,
      "room": {
        "createdAt": "2015-05-05T19:01:50.312Z",
        "updatedAt": "2015-10-30T09:46:58.559Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Planty",
        "office365Address": "planty-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "7UAMxYAS5m",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "Tan9NsoA6Z"
    },
    {
      "createdAt": "2015-05-08T05:33:40.484Z",
      "updatedAt": "2015-09-07T13:52:35.734Z",
      "type": "floor",
      "value": "3",
      "icon": "floors",
      "order": 0,
      "room": {
        "createdAt": "2015-05-05T19:01:50.312Z",
        "updatedAt": "2015-10-30T09:46:58.559Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Planty",
        "office365Address": "planty-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "7UAMxYAS5m",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "w2PDaJU0cC"
    },
    {
      "updatedAt": "2016-09-19T11:01:33.694Z",
      "value": "Miłosz Miśkiewicz",
      "createdAt": "2016-09-19T11:01:10.651Z",
      "room": {
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Galicja D",
        "office365Address": "galicja.d-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:40.645Z",
        "updatedAt": "2015-10-30T09:47:11.056Z",
        "type": "meeting",
        "objectId": "EiFvCBr4wH",
        "__type": "Object",
        "className": "Room"
      },
      "type": "owner",
      "icon": "owner",
      "order": 40,
      "objectId": "Cgx1HKcMT3"
    },
    {
      "updatedAt": "2015-09-07T13:51:38.291Z",
      "value": "80",
      "icon": "users",
      "order": 20,
      "room": {
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Galicja D",
        "office365Address": "galicja.d-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:40.645Z",
        "updatedAt": "2015-10-30T09:47:11.056Z",
        "type": "meeting",
        "objectId": "EiFvCBr4wH",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "createdAt": "2015-05-07T20:49:28.941Z",
      "objectId": "QUQ7hvg3Ek"
    },
    {
      "type": "phone",
      "value": "+48 22 223 8980",
      "icon": "phone",
      "createdAt": "2015-05-07T20:49:28.177Z",
      "updatedAt": "2015-05-07T20:50:39.186Z",
      "order": 10,
      "room": {
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Galicja D",
        "office365Address": "galicja.d-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:40.645Z",
        "updatedAt": "2015-10-30T09:47:11.056Z",
        "type": "meeting",
        "objectId": "EiFvCBr4wH",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "eHdtbKxCAD"
    },
    {
      "createdAt": "2015-05-07T20:49:27.330Z",
      "updatedAt": "2015-09-07T13:52:40.278Z",
      "room": {
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Galicja D",
        "office365Address": "galicja.d-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:40.645Z",
        "updatedAt": "2015-10-30T09:47:11.056Z",
        "type": "meeting",
        "objectId": "EiFvCBr4wH",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "0",
      "icon": "floors",
      "order": 0,
      "objectId": "l1TfBmerwU"
    },
    {
      "icon": "projector",
      "createdAt": "2015-05-07T20:49:29.572Z",
      "updatedAt": "2015-09-07T13:53:57.435Z",
      "order": 50,
      "room": {
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Galicja D",
        "office365Address": "galicja.d-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:40.645Z",
        "updatedAt": "2015-10-30T09:47:11.056Z",
        "type": "meeting",
        "objectId": "EiFvCBr4wH",
        "__type": "Object",
        "className": "Room"
      },
      "type": "beamer",
      "value": "",
      "objectId": "zhwcL63tEV"
    },
    {
      "createdAt": "2015-05-07T20:43:52.304Z",
      "updatedAt": "2015-05-07T20:45:19.294Z",
      "value": "+48 22 223 8988",
      "icon": "phone",
      "order": 10,
      "room": {
        "office365Address": "kazimierz-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "createdAt": "2015-05-05T19:01:38.498Z",
        "updatedAt": "2015-10-30T09:44:05.492Z",
        "name": "Kazimierz",
        "objectId": "HIDX1z9i39",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "objectId": "Le2bhtHIj8"
    },
    {
      "updatedAt": "2015-09-07T13:52:41.075Z",
      "icon": "floors",
      "order": 0,
      "room": {
        "office365Address": "kazimierz-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "createdAt": "2015-05-05T19:01:38.498Z",
        "updatedAt": "2015-10-30T09:44:05.492Z",
        "name": "Kazimierz",
        "objectId": "HIDX1z9i39",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "1",
      "createdAt": "2015-05-07T20:43:52.006Z",
      "objectId": "UstNMu2LJ5"
    },
    {
      "createdAt": "2015-05-07T20:43:53.813Z",
      "updatedAt": "2015-09-07T13:53:58.137Z",
      "order": 50,
      "room": {
        "office365Address": "kazimierz-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "createdAt": "2015-05-05T19:01:38.498Z",
        "updatedAt": "2015-10-30T09:44:05.492Z",
        "name": "Kazimierz",
        "objectId": "HIDX1z9i39",
        "__type": "Object",
        "className": "Room"
      },
      "type": "beamer",
      "value": "",
      "icon": "projector",
      "objectId": "XBIJrGIS1Q"
    },
    {
      "createdAt": "2015-05-07T20:43:53.072Z",
      "updatedAt": "2015-09-07T13:51:38.986Z",
      "value": "20",
      "icon": "users",
      "order": 20,
      "room": {
        "office365Address": "kazimierz-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "createdAt": "2015-05-05T19:01:38.498Z",
        "updatedAt": "2015-10-30T09:44:05.492Z",
        "name": "Kazimierz",
        "objectId": "HIDX1z9i39",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "objectId": "XYGY8roH1y"
    },
    {
      "updatedAt": "2016-09-19T11:02:50.147Z",
      "room": {
        "office365Address": "kazimierz-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "createdAt": "2015-05-05T19:01:38.498Z",
        "updatedAt": "2015-10-30T09:44:05.492Z",
        "name": "Kazimierz",
        "objectId": "HIDX1z9i39",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-09-19T11:02:36.104Z",
      "value": "Daniel Szary",
      "type": "owner",
      "order": 40,
      "icon": "owner",
      "objectId": "gJd2Squ3Y5"
    },
    {
      "icon": "users",
      "order": 20,
      "createdAt": "2015-05-08T05:40:37.806Z",
      "updatedAt": "2015-09-07T13:51:30.191Z",
      "room": {
        "createdAt": "2015-05-05T19:01:58.580Z",
        "updatedAt": "2015-05-05T19:05:45.722Z",
        "floor": 5,
        "name": "Giewont",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "IgNrWrNVMP",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "value": "80",
      "objectId": "IjJzaH3T2t"
    },
    {
      "createdAt": "2015-05-08T05:40:37.231Z",
      "updatedAt": "2015-05-08T05:41:14.609Z",
      "icon": "phone",
      "order": 10,
      "room": {
        "createdAt": "2015-05-05T19:01:58.580Z",
        "updatedAt": "2015-05-05T19:05:45.722Z",
        "floor": 5,
        "name": "Giewont",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "IgNrWrNVMP",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 9575",
      "objectId": "hyR0uS9Njz"
    },
    {
      "room": {
        "createdAt": "2015-05-05T19:01:58.580Z",
        "updatedAt": "2015-05-05T19:05:45.722Z",
        "floor": 5,
        "name": "Giewont",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "IgNrWrNVMP",
        "__type": "Object",
        "className": "Room"
      },
      "type": "tv",
      "value": "32\"",
      "icon": "tv",
      "createdAt": "2015-05-08T05:40:38.567Z",
      "updatedAt": "2015-09-07T13:55:05.339Z",
      "order": 30,
      "objectId": "nMS2GPDrFQ"
    },
    {
      "type": "floor",
      "value": "5",
      "icon": "floors",
      "createdAt": "2015-05-08T05:40:36.657Z",
      "updatedAt": "2015-09-07T13:52:32.113Z",
      "order": 0,
      "room": {
        "createdAt": "2015-05-05T19:01:58.580Z",
        "updatedAt": "2015-05-05T19:05:45.722Z",
        "floor": 5,
        "name": "Giewont",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "IgNrWrNVMP",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "xs8nWO60hS"
    },
    {
      "createdAt": "2015-05-05T19:15:43.876Z",
      "updatedAt": "2015-09-07T13:51:40.602Z",
      "value": "4",
      "icon": "users",
      "order": 20,
      "room": {
        "createdAt": "2015-05-05T19:01:33.002Z",
        "updatedAt": "2015-10-30T09:44:37.403Z",
        "office365Address": "smocza.jama-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 2,
        "name": "Smocza Jama",
        "objectId": "IptNoZqdtI",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "objectId": "71zG5lYnSG"
    },
    {
      "value": "+48 22 223 8987",
      "icon": "phone",
      "order": 10,
      "room": {
        "createdAt": "2015-05-05T19:01:33.002Z",
        "updatedAt": "2015-10-30T09:44:37.403Z",
        "office365Address": "smocza.jama-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 2,
        "name": "Smocza Jama",
        "objectId": "IptNoZqdtI",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "createdAt": "2015-05-05T19:15:45.064Z",
      "updatedAt": "2015-05-05T19:16:41.994Z",
      "objectId": "7TPfI0RJQh"
    },
    {
      "icon": "floors",
      "order": 0,
      "room": {
        "createdAt": "2015-05-05T19:01:33.002Z",
        "updatedAt": "2015-10-30T09:44:37.403Z",
        "office365Address": "smocza.jama-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 2,
        "name": "Smocza Jama",
        "objectId": "IptNoZqdtI",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "createdAt": "2015-05-05T19:15:45.902Z",
      "updatedAt": "2015-09-07T13:52:43.193Z",
      "value": "2",
      "objectId": "Z1HEQB5kGS"
    },
    {
      "updatedAt": "2016-09-19T21:42:51.579Z",
      "room": {
        "createdAt": "2015-05-05T19:01:33.002Z",
        "updatedAt": "2015-10-30T09:44:37.403Z",
        "office365Address": "smocza.jama-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 2,
        "name": "Smocza Jama",
        "objectId": "IptNoZqdtI",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-09-19T21:42:18.373Z",
      "type": "owner",
      "icon": "owner",
      "order": 40,
      "value": "Krzysztof Dudek",
      "objectId": "x45Xvi42eZ"
    },
    {
      "createdAt": "2015-05-08T05:36:58.459Z",
      "updatedAt": "2015-05-08T05:37:50.156Z",
      "order": 10,
      "room": {
        "floor": 3,
        "name": "Wawel D",
        "createdAt": "2015-05-05T19:01:54.546Z",
        "updatedAt": "2016-03-02T08:37:44.623Z",
        "office365Address": "wawel.d-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "tag": "C3:E3:36:35:48:35",
        "objectId": "MXEqLB27XX",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 8987",
      "icon": "phone",
      "objectId": "4TJPNN10j6"
    },
    {
      "updatedAt": "2016-09-19T11:05:38.380Z",
      "room": {
        "floor": 3,
        "name": "Wawel D",
        "createdAt": "2015-05-05T19:01:54.546Z",
        "updatedAt": "2016-03-02T08:37:44.623Z",
        "office365Address": "wawel.d-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "tag": "C3:E3:36:35:48:35",
        "objectId": "MXEqLB27XX",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-09-19T11:05:21.127Z",
      "value": "Łukasz Ziomka ",
      "type": "owner",
      "order": 40,
      "icon": "owner",
      "objectId": "9KgVaW21Pe"
    },
    {
      "order": 0,
      "room": {
        "floor": 3,
        "name": "Wawel D",
        "createdAt": "2015-05-05T19:01:54.546Z",
        "updatedAt": "2016-03-02T08:37:44.623Z",
        "office365Address": "wawel.d-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "tag": "C3:E3:36:35:48:35",
        "objectId": "MXEqLB27XX",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "3",
      "createdAt": "2015-05-08T05:36:57.879Z",
      "updatedAt": "2015-09-07T13:52:33.881Z",
      "icon": "floors",
      "objectId": "BvPvqZfBUh"
    },
    {
      "value": "",
      "icon": "projector",
      "order": 50,
      "room": {
        "floor": 3,
        "name": "Wawel D",
        "createdAt": "2015-05-05T19:01:54.546Z",
        "updatedAt": "2016-03-02T08:37:44.623Z",
        "office365Address": "wawel.d-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "tag": "C3:E3:36:35:48:35",
        "objectId": "MXEqLB27XX",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2015-05-08T05:36:59.809Z",
      "updatedAt": "2015-09-07T13:53:52.782Z",
      "type": "beamer",
      "objectId": "aAZWC4NyGx"
    },
    {
      "order": 20,
      "room": {
        "floor": 3,
        "name": "Wawel D",
        "createdAt": "2015-05-05T19:01:54.546Z",
        "updatedAt": "2016-03-02T08:37:44.623Z",
        "office365Address": "wawel.d-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "tag": "C3:E3:36:35:48:35",
        "objectId": "MXEqLB27XX",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2015-05-08T05:36:59.192Z",
      "updatedAt": "2015-09-07T13:51:32.059Z",
      "type": "seats",
      "value": "80",
      "icon": "users",
      "objectId": "s7LuLFtECg"
    },
    {
      "order": 10,
      "room": {
        "name": "Zwierzyniec",
        "office365Address": "zwierzyniec-krakow.crc@pl.abb.com",
        "type": "meeting",
        "createdAt": "2015-05-05T19:01:46.426Z",
        "updatedAt": "2017-01-30T16:38:17.602Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "objectId": "P2c8blkRLJ",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "createdAt": "2015-05-08T05:28:02.869Z",
      "updatedAt": "2015-05-08T05:29:08.643Z",
      "value": "+48 22 223 8985",
      "icon": "phone",
      "objectId": "3Mdop5znmK"
    },
    {
      "order": 0,
      "createdAt": "2015-05-08T05:28:01.322Z",
      "updatedAt": "2015-09-07T13:52:37.798Z",
      "room": {
        "name": "Zwierzyniec",
        "office365Address": "zwierzyniec-krakow.crc@pl.abb.com",
        "type": "meeting",
        "createdAt": "2015-05-05T19:01:46.426Z",
        "updatedAt": "2017-01-30T16:38:17.602Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "objectId": "P2c8blkRLJ",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "0",
      "icon": "floors",
      "objectId": "OP4mbZn2ei"
    },
    {
      "createdAt": "2015-05-08T05:28:02.330Z",
      "updatedAt": "2015-09-07T13:51:35.742Z",
      "order": 20,
      "room": {
        "name": "Zwierzyniec",
        "office365Address": "zwierzyniec-krakow.crc@pl.abb.com",
        "type": "meeting",
        "createdAt": "2015-05-05T19:01:46.426Z",
        "updatedAt": "2017-01-30T16:38:17.602Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "objectId": "P2c8blkRLJ",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "value": "4",
      "icon": "users",
      "objectId": "fuhhbJTvBu"
    },
    {
      "createdAt": "2016-09-19T11:23:29.340Z",
      "updatedAt": "2016-09-19T11:23:42.573Z",
      "room": {
        "name": "Zwierzyniec",
        "office365Address": "zwierzyniec-krakow.crc@pl.abb.com",
        "type": "meeting",
        "createdAt": "2015-05-05T19:01:46.426Z",
        "updatedAt": "2017-01-30T16:38:17.602Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "objectId": "P2c8blkRLJ",
        "__type": "Object",
        "className": "Room"
      },
      "value": "Miłosz Miśkiewicz",
      "type": "owner",
      "order": 40,
      "icon": "owner",
      "objectId": "sAlwkDlDRL"
    },
    {
      "value": "4",
      "icon": "users",
      "order": 20,
      "room": {
        "createdAt": "2015-05-05T19:01:52.356Z",
        "updatedAt": "2015-10-30T09:44:19.961Z",
        "floor": 2,
        "name": "Kliny",
        "office365Address": "kliny-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "PliBgsT5DK",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "createdAt": "2015-05-08T05:35:30.051Z",
      "updatedAt": "2015-09-07T13:51:32.813Z",
      "objectId": "57R9ru882h"
    },
    {
      "icon": "floors",
      "order": 0,
      "room": {
        "createdAt": "2015-05-05T19:01:52.356Z",
        "updatedAt": "2015-10-30T09:44:19.961Z",
        "floor": 2,
        "name": "Kliny",
        "office365Address": "kliny-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "PliBgsT5DK",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "2",
      "createdAt": "2015-05-08T05:35:28.685Z",
      "updatedAt": "2015-09-07T13:52:34.757Z",
      "objectId": "h5Mcp144dN"
    },
    {
      "icon": "phone",
      "order": 10,
      "room": {
        "createdAt": "2015-05-05T19:01:52.356Z",
        "updatedAt": "2015-10-30T09:44:19.961Z",
        "floor": 2,
        "name": "Kliny",
        "office365Address": "kliny-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "PliBgsT5DK",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 8982",
      "createdAt": "2015-05-08T05:35:29.387Z",
      "updatedAt": "2015-05-08T05:36:04.045Z",
      "objectId": "mFTYcaR6qC"
    },
    {
      "createdAt": "2015-05-08T05:38:48.628Z",
      "updatedAt": "2015-09-07T13:51:31.174Z",
      "icon": "users",
      "order": 20,
      "room": {
        "updatedAt": "2017-01-30T16:37:16.244Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Wawel M",
        "office365Address": "wawel.m-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:56.755Z",
        "tag": "F0:12:F0:EE:53:91",
        "objectId": "Qiwami7zba",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "value": "40",
      "objectId": "F1nk1WNH6p"
    },
    {
      "createdAt": "2015-05-08T05:38:49.449Z",
      "updatedAt": "2015-09-07T13:53:51.985Z",
      "type": "beamer",
      "value": "",
      "icon": "projector",
      "order": 50,
      "room": {
        "updatedAt": "2017-01-30T16:37:16.244Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Wawel M",
        "office365Address": "wawel.m-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:56.755Z",
        "tag": "F0:12:F0:EE:53:91",
        "objectId": "Qiwami7zba",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "Q9Sg3D571I"
    },
    {
      "updatedAt": "2015-05-08T05:39:23.872Z",
      "icon": "phone",
      "order": 10,
      "room": {
        "updatedAt": "2017-01-30T16:37:16.244Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Wawel M",
        "office365Address": "wawel.m-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:56.755Z",
        "tag": "F0:12:F0:EE:53:91",
        "objectId": "Qiwami7zba",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 8988",
      "createdAt": "2015-05-08T05:38:47.873Z",
      "objectId": "aDasMAK0i8"
    },
    {
      "createdAt": "2016-09-19T11:22:44.406Z",
      "updatedAt": "2016-09-19T11:22:57.380Z",
      "room": {
        "updatedAt": "2017-01-30T16:37:16.244Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Wawel M",
        "office365Address": "wawel.m-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:56.755Z",
        "tag": "F0:12:F0:EE:53:91",
        "objectId": "Qiwami7zba",
        "__type": "Object",
        "className": "Room"
      },
      "value": "Łukasz Ziomka ",
      "type": "owner",
      "order": 40,
      "icon": "owner",
      "objectId": "bCWpYpyb83"
    },
    {
      "order": 0,
      "room": {
        "updatedAt": "2017-01-30T16:37:16.244Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 3,
        "name": "Wawel M",
        "office365Address": "wawel.m-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:56.755Z",
        "tag": "F0:12:F0:EE:53:91",
        "objectId": "Qiwami7zba",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "3",
      "createdAt": "2015-05-08T05:38:47.278Z",
      "updatedAt": "2015-09-07T13:52:33.136Z",
      "icon": "floors",
      "objectId": "d8Zpb2dw6i"
    },
    {
      "createdAt": "2016-02-09T13:47:48.476Z",
      "updatedAt": "2016-02-09T13:48:34.048Z",
      "room": {
        "name": "Szymborska",
        "createdAt": "2016-01-27T13:11:51.410Z",
        "updatedAt": "2017-02-02T11:02:18.736Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "type": "meeting",
        "office365Address": "st15.shakespeare-krakow.isdc@pl.abb.com",
        "objectId": "w66N79llJk",
        "__type": "Object",
        "className": "Room"
      },
      "type": "tv",
      "order": 30,
      "icon": "tv",
      "value": "32\"",
      "objectId": "tcLNt0Xv2O"
    },
    {
      "updatedAt": "2016-02-09T13:48:39.026Z",
      "room": {
        "name": "Szymborska",
        "createdAt": "2016-01-27T13:11:51.410Z",
        "updatedAt": "2017-02-02T11:02:18.736Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "type": "meeting",
        "office365Address": "st15.shakespeare-krakow.isdc@pl.abb.com",
        "objectId": "w66N79llJk",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-02-09T13:47:47.591Z",
      "type": "seats",
      "order": 20,
      "icon": "users",
      "value": "8",
      "objectId": "Pm26EsJxq2"
    },
    {
      "updatedAt": "2016-02-09T13:48:44.196Z",
      "room": {
        "name": "Szymborska",
        "createdAt": "2016-01-27T13:11:51.410Z",
        "updatedAt": "2017-02-02T11:02:18.736Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "type": "meeting",
        "office365Address": "st15.shakespeare-krakow.isdc@pl.abb.com",
        "objectId": "w66N79llJk",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-02-09T13:47:46.811Z",
      "type": "phone",
      "order": 10,
      "icon": "phone",
      "value": "+48 22 223 7298",
      "objectId": "Ig33V7uELo"
    },
    {
      "createdAt": "2016-02-09T13:47:46.191Z",
      "updatedAt": "2016-02-09T13:48:17.331Z",
      "room": {
        "name": "Szymborska",
        "createdAt": "2016-01-27T13:11:51.410Z",
        "updatedAt": "2017-02-02T11:02:18.736Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "type": "meeting",
        "office365Address": "st15.shakespeare-krakow.isdc@pl.abb.com",
        "objectId": "w66N79llJk",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "1",
      "order": 0,
      "icon": "floors",
      "objectId": "CNOpmVCzuB"
    },
    {
      "createdAt": "2016-02-09T13:39:35.744Z",
      "updatedAt": "2016-02-09T13:41:23.348Z",
      "room": {
        "createdAt": "2016-01-27T12:48:36.769Z",
        "updatedAt": "2017-02-02T10:32:32.424Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Matejko",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.agile-krakow.isdc@pl.abb.com",
        "objectId": "6q1C1mhHDj",
        "__type": "Object",
        "className": "Room"
      },
      "type": "tv",
      "value": "46\"",
      "order": 30,
      "icon": "tv",
      "objectId": "b6tIxDA53X"
    },
    {
      "createdAt": "2016-02-09T13:39:34.512Z",
      "updatedAt": "2016-02-09T13:41:13.094Z",
      "room": {
        "createdAt": "2016-01-27T12:48:36.769Z",
        "updatedAt": "2017-02-02T10:32:32.424Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Matejko",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.agile-krakow.isdc@pl.abb.com",
        "objectId": "6q1C1mhHDj",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "value": "9",
      "order": 20,
      "icon": "users",
      "objectId": "lu69t9LJqc"
    },
    {
      "createdAt": "2016-02-09T13:39:33.591Z",
      "updatedAt": "2016-02-09T13:41:10.736Z",
      "room": {
        "createdAt": "2016-01-27T12:48:36.769Z",
        "updatedAt": "2017-02-02T10:32:32.424Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Matejko",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.agile-krakow.isdc@pl.abb.com",
        "objectId": "6q1C1mhHDj",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 7295",
      "order": 10,
      "icon": "phone",
      "objectId": "MfDEO9l01P"
    },
    {
      "createdAt": "2016-02-09T13:39:32.838Z",
      "updatedAt": "2016-02-09T13:41:08.732Z",
      "room": {
        "createdAt": "2016-01-27T12:48:36.769Z",
        "updatedAt": "2017-02-02T10:32:32.424Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Matejko",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.agile-krakow.isdc@pl.abb.com",
        "objectId": "6q1C1mhHDj",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "-1",
      "order": 0,
      "icon": "floors",
      "objectId": "8Ji1jJBsJG"
    },
    {
      "createdAt": "2016-02-09T13:46:24.926Z",
      "updatedAt": "2016-02-09T13:47:36.250Z",
      "room": {
        "createdAt": "2016-01-27T12:48:38.944Z",
        "updatedAt": "2017-02-02T10:33:24.773Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Modrzejewska",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.scala-krakow.isdc@pl.abb.com",
        "objectId": "1gYlmiRVJG",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "-1",
      "order": 0,
      "icon": "floors",
      "objectId": "SjBxW7MKFa"
    },
    {
      "room": {
        "createdAt": "2016-01-27T12:48:38.944Z",
        "updatedAt": "2017-02-02T10:33:24.773Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Modrzejewska",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.scala-krakow.isdc@pl.abb.com",
        "objectId": "1gYlmiRVJG",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-02-09T13:46:23.717Z",
      "updatedAt": "2016-02-09T13:47:33.487Z",
      "type": "phone",
      "value": "+48 22 223 7297",
      "order": 10,
      "icon": "phone",
      "objectId": "2y6rR6R3mD"
    },
    {
      "updatedAt": "2016-02-09T13:47:31.427Z",
      "room": {
        "createdAt": "2016-01-27T12:48:38.944Z",
        "updatedAt": "2017-02-02T10:33:24.773Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Modrzejewska",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.scala-krakow.isdc@pl.abb.com",
        "objectId": "1gYlmiRVJG",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-02-09T13:46:22.908Z",
      "type": "seats",
      "value": "6",
      "order": 20,
      "icon": "users",
      "objectId": "dDgM2OAYgA"
    },
    {
      "createdAt": "2016-02-09T13:46:21.440Z",
      "updatedAt": "2016-02-09T13:47:29.449Z",
      "room": {
        "createdAt": "2016-01-27T12:48:38.944Z",
        "updatedAt": "2017-02-02T10:33:24.773Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Modrzejewska",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.scala-krakow.isdc@pl.abb.com",
        "objectId": "1gYlmiRVJG",
        "__type": "Object",
        "className": "Room"
      },
      "type": "tv",
      "value": "46\"",
      "order": 30,
      "icon": "tv",
      "objectId": "VPZZrumfNr"
    },
    {
      "room": {
        "createdAt": "2015-05-05T19:01:36.266Z",
        "updatedAt": "2015-10-30T09:46:46.249Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "name": "Bronowice",
        "office365Address": "bronowice-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "hTNRzWZAR4",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 8979",
      "icon": "phone",
      "createdAt": "2015-05-05T19:17:37.508Z",
      "updatedAt": "2015-05-05T19:18:30.936Z",
      "order": 10,
      "objectId": "1TGpyuWsiC"
    },
    {
      "type": "seats",
      "createdAt": "2015-05-05T19:17:38.212Z",
      "updatedAt": "2015-09-07T13:51:39.845Z",
      "value": "8",
      "icon": "users",
      "order": 20,
      "room": {
        "createdAt": "2015-05-05T19:01:36.266Z",
        "updatedAt": "2015-10-30T09:46:46.249Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "name": "Bronowice",
        "office365Address": "bronowice-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "hTNRzWZAR4",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "DXIotADP3J"
    },
    {
      "createdAt": "2015-05-05T19:19:28.397Z",
      "updatedAt": "2016-09-19T09:56:16.859Z",
      "value": "PLKRK - Krakow, PLCRC Broniwice",
      "icon": "camera",
      "order": 60,
      "room": {
        "createdAt": "2015-05-05T19:01:36.266Z",
        "updatedAt": "2015-10-30T09:46:46.249Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "name": "Bronowice",
        "office365Address": "bronowice-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "hTNRzWZAR4",
        "__type": "Object",
        "className": "Room"
      },
      "type": "vc",
      "objectId": "LIIPLQqwGB"
    },
    {
      "order": 50,
      "createdAt": "2015-05-05T19:19:27.828Z",
      "updatedAt": "2015-09-07T13:53:58.909Z",
      "room": {
        "createdAt": "2015-05-05T19:01:36.266Z",
        "updatedAt": "2015-10-30T09:46:46.249Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "name": "Bronowice",
        "office365Address": "bronowice-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "hTNRzWZAR4",
        "__type": "Object",
        "className": "Room"
      },
      "type": "beamer",
      "value": "",
      "icon": "projector",
      "objectId": "RkkUYJedaz"
    },
    {
      "createdAt": "2015-05-05T19:17:36.820Z",
      "updatedAt": "2015-09-07T13:52:42.421Z",
      "icon": "floors",
      "order": 0,
      "room": {
        "createdAt": "2015-05-05T19:01:36.266Z",
        "updatedAt": "2015-10-30T09:46:46.249Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "name": "Bronowice",
        "office365Address": "bronowice-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "hTNRzWZAR4",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "1",
      "objectId": "bLq739QjWf"
    },
    {
      "createdAt": "2016-09-19T11:00:05.204Z",
      "updatedAt": "2016-09-19T11:01:37.364Z",
      "room": {
        "createdAt": "2015-05-05T19:01:36.266Z",
        "updatedAt": "2015-10-30T09:46:46.249Z",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 1,
        "name": "Bronowice",
        "office365Address": "bronowice-krakow.crc@pl.abb.com",
        "type": "meeting",
        "objectId": "hTNRzWZAR4",
        "__type": "Object",
        "className": "Room"
      },
      "value": "Krzysztof Dudek",
      "icon": "owner",
      "type": "owner",
      "order": 40,
      "objectId": "tmTfr4mjdm"
    },
    {
      "updatedAt": "2016-09-19T11:26:29.121Z",
      "room": {
        "updatedAt": "2015-10-30T09:43:34.138Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Nowa Huta",
        "office365Address": "nowa.huta-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:44.553Z",
        "objectId": "i8zCNSyMLP",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-09-19T11:26:04.634Z",
      "icon": "owner",
      "order": 40,
      "type": "owner",
      "value": "Miłosz Miśkiewicz",
      "objectId": "9yHF5sMlmW"
    },
    {
      "value": "",
      "icon": "projector",
      "createdAt": "2015-05-08T05:25:36.874Z",
      "updatedAt": "2015-09-07T13:53:55.708Z",
      "order": 50,
      "room": {
        "updatedAt": "2015-10-30T09:43:34.138Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Nowa Huta",
        "office365Address": "nowa.huta-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:44.553Z",
        "objectId": "i8zCNSyMLP",
        "__type": "Object",
        "className": "Room"
      },
      "type": "beamer",
      "objectId": "APkli3Jmsx"
    },
    {
      "order": 20,
      "room": {
        "updatedAt": "2015-10-30T09:43:34.138Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Nowa Huta",
        "office365Address": "nowa.huta-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:44.553Z",
        "objectId": "i8zCNSyMLP",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "value": "14",
      "createdAt": "2015-05-08T05:25:36.177Z",
      "updatedAt": "2015-09-07T13:51:36.521Z",
      "icon": "users",
      "objectId": "M2zoSKHBX0"
    },
    {
      "createdAt": "2015-05-08T05:25:34.089Z",
      "updatedAt": "2015-09-07T13:52:38.565Z",
      "type": "floor",
      "value": "0",
      "icon": "floors",
      "order": 0,
      "room": {
        "updatedAt": "2015-10-30T09:43:34.138Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Nowa Huta",
        "office365Address": "nowa.huta-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:44.553Z",
        "objectId": "i8zCNSyMLP",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "j34KoQiKIq"
    },
    {
      "value": "+48 22 223 8983",
      "createdAt": "2015-05-08T05:25:35.491Z",
      "updatedAt": "2015-05-08T05:26:35.657Z",
      "icon": "phone",
      "order": 10,
      "room": {
        "updatedAt": "2015-10-30T09:43:34.138Z",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "floor": 0,
        "name": "Nowa Huta",
        "office365Address": "nowa.huta-krakow.crc@pl.abb.com",
        "createdAt": "2015-05-05T19:01:44.553Z",
        "objectId": "i8zCNSyMLP",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "objectId": "xULOMWWnkK"
    },
    {
      "createdAt": "2015-05-08T05:29:27.334Z",
      "updatedAt": "2016-09-19T09:53:54.716Z",
      "order": 60,
      "room": {
        "updatedAt": "2015-10-30T09:46:30.581Z",
        "floor": 4,
        "name": "Bielany",
        "office365Address": "bielany-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "createdAt": "2015-05-05T19:01:48.466Z",
        "objectId": "kSM9JwYx40",
        "__type": "Object",
        "className": "Room"
      },
      "type": "vc",
      "value": "PLKRK - Krakow, Bielany",
      "icon": "camera",
      "objectId": "33A3OaEN8S"
    },
    {
      "value": "4",
      "icon": "floors",
      "createdAt": "2015-05-08T05:29:29.642Z",
      "updatedAt": "2015-09-07T13:52:37.088Z",
      "order": 0,
      "room": {
        "updatedAt": "2015-10-30T09:46:30.581Z",
        "floor": 4,
        "name": "Bielany",
        "office365Address": "bielany-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "createdAt": "2015-05-05T19:01:48.466Z",
        "objectId": "kSM9JwYx40",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "objectId": "49BxFXP2Tb"
    },
    {
      "createdAt": "2016-09-19T10:58:05.903Z",
      "updatedAt": "2016-09-19T11:01:39.987Z",
      "room": {
        "updatedAt": "2015-10-30T09:46:30.581Z",
        "floor": 4,
        "name": "Bielany",
        "office365Address": "bielany-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "createdAt": "2015-05-05T19:01:48.466Z",
        "objectId": "kSM9JwYx40",
        "__type": "Object",
        "className": "Room"
      },
      "type": "owner",
      "icon": "owner",
      "order": 40,
      "value": "Łukasz Ziomka",
      "objectId": "9OGXpij5mm"
    },
    {
      "createdAt": "2015-05-08T05:29:28.018Z",
      "updatedAt": "2015-09-07T13:53:54.867Z",
      "icon": "projector",
      "order": 50,
      "room": {
        "updatedAt": "2015-10-30T09:46:30.581Z",
        "floor": 4,
        "name": "Bielany",
        "office365Address": "bielany-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "createdAt": "2015-05-05T19:01:48.466Z",
        "objectId": "kSM9JwYx40",
        "__type": "Object",
        "className": "Room"
      },
      "type": "beamer",
      "value": "",
      "objectId": "RjRmWotDQ8"
    },
    {
      "type": "phone",
      "createdAt": "2015-05-08T05:29:29.148Z",
      "updatedAt": "2015-05-08T05:32:24.549Z",
      "value": "+48 22 223 8984",
      "icon": "phone",
      "order": 10,
      "room": {
        "updatedAt": "2015-10-30T09:46:30.581Z",
        "floor": 4,
        "name": "Bielany",
        "office365Address": "bielany-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "createdAt": "2015-05-05T19:01:48.466Z",
        "objectId": "kSM9JwYx40",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "WVdlj26jbS"
    },
    {
      "value": "8",
      "createdAt": "2015-05-08T05:29:28.594Z",
      "updatedAt": "2015-09-07T13:51:34.887Z",
      "icon": "users",
      "order": 20,
      "room": {
        "updatedAt": "2015-10-30T09:46:30.581Z",
        "floor": 4,
        "name": "Bielany",
        "office365Address": "bielany-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "createdAt": "2015-05-05T19:01:48.466Z",
        "objectId": "kSM9JwYx40",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "objectId": "mlrg9ssoHQ"
    },
    {
      "room": {
        "floor": 0,
        "name": "Galicja M",
        "createdAt": "2015-05-05T19:01:42.706Z",
        "updatedAt": "2015-10-30T09:45:09.408Z",
        "office365Address": "galicja.m-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "o0OldDvVV7",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-09-19T11:01:49.977Z",
      "updatedAt": "2016-09-19T11:02:06.871Z",
      "value": "Miłosz Miśkiewicz",
      "type": "owner",
      "icon": "owner",
      "order": 40,
      "objectId": "216n8meF5r"
    },
    {
      "icon": "camera",
      "createdAt": "2015-05-08T05:23:12.051Z",
      "updatedAt": "2016-09-19T10:03:17.867Z",
      "order": 60,
      "room": {
        "floor": 0,
        "name": "Galicja M",
        "createdAt": "2015-05-05T19:01:42.706Z",
        "updatedAt": "2015-10-30T09:45:09.408Z",
        "office365Address": "galicja.m-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "o0OldDvVV7",
        "__type": "Object",
        "className": "Room"
      },
      "type": "vc",
      "value": "PLKRK - Krakow, Galicja (SIP)",
      "objectId": "4XaCWd1AcN"
    },
    {
      "order": 10,
      "room": {
        "floor": 0,
        "name": "Galicja M",
        "createdAt": "2015-05-05T19:01:42.706Z",
        "updatedAt": "2015-10-30T09:45:09.408Z",
        "office365Address": "galicja.m-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "o0OldDvVV7",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 8981",
      "icon": "phone",
      "createdAt": "2015-05-08T05:23:09.160Z",
      "updatedAt": "2015-05-08T05:23:46.167Z",
      "objectId": "DqXregXtlH"
    },
    {
      "room": {
        "floor": 0,
        "name": "Galicja M",
        "createdAt": "2015-05-05T19:01:42.706Z",
        "updatedAt": "2015-10-30T09:45:09.408Z",
        "office365Address": "galicja.m-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "o0OldDvVV7",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "createdAt": "2015-05-08T05:23:09.991Z",
      "updatedAt": "2015-09-07T13:51:37.436Z",
      "value": "40",
      "icon": "users",
      "order": 20,
      "objectId": "HZcesmWix4"
    },
    {
      "room": {
        "floor": 0,
        "name": "Galicja M",
        "createdAt": "2015-05-05T19:01:42.706Z",
        "updatedAt": "2015-10-30T09:45:09.408Z",
        "office365Address": "galicja.m-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "o0OldDvVV7",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "0",
      "createdAt": "2015-05-08T05:23:06.623Z",
      "updatedAt": "2015-09-07T13:52:39.428Z",
      "icon": "floors",
      "order": 0,
      "objectId": "Q8fcUXL8Ul"
    },
    {
      "type": "beamer",
      "value": "",
      "icon": "projector",
      "order": 50,
      "createdAt": "2015-05-08T05:23:10.633Z",
      "updatedAt": "2015-09-07T13:53:56.547Z",
      "room": {
        "floor": 0,
        "name": "Galicja M",
        "createdAt": "2015-05-05T19:01:42.706Z",
        "updatedAt": "2015-10-30T09:45:09.408Z",
        "office365Address": "galicja.m-krakow.crc@pl.abb.com",
        "type": "meeting",
        "address": {
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "phone2Label": "PLABB Contact Center",
          "zipCode": "31-038",
          "address": "Ul. Starowiślna 13A",
          "createdAt": "2015-05-05T12:57:58.275Z",
          "updatedAt": "2015-10-09T12:25:52.240Z",
          "phone2": "+48 2222 3 7777",
          "name": "Starowiślna 13A",
          "email": "plcrcoffice@pl.abb.com",
          "phone1": "+48 22 223 9500",
          "phone1Label": "PLCRC reception",
          "position": {
            "__type": "GeoPoint",
            "latitude": 50.057741,
            "longitude": 19.942656
          },
          "objectId": "mMajt3V6Kc",
          "__type": "Object",
          "className": "Address"
        },
        "objectId": "o0OldDvVV7",
        "__type": "Object",
        "className": "Room"
      },
      "objectId": "xthjLfgmhD"
    },
    {
      "updatedAt": "2016-04-04T13:34:02.077Z",
      "room": {
        "createdAt": "2016-01-27T12:48:42.465Z",
        "updatedAt": "2017-02-02T10:32:18.456Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Miłosz",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.dart-krakow.isdc@pl.abb.com",
        "objectId": "mVh3Eeg5H0",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-02-09T13:42:03.246Z",
      "type": "vc",
      "icon": "camera",
      "order": 40,
      "objectId": "A06hlUiIOw"
    },
    {
      "updatedAt": "2016-02-09T13:44:08.131Z",
      "room": {
        "createdAt": "2016-01-27T12:48:42.465Z",
        "updatedAt": "2017-02-02T10:32:18.456Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Miłosz",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.dart-krakow.isdc@pl.abb.com",
        "objectId": "mVh3Eeg5H0",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-02-09T13:41:54.426Z",
      "type": "tv",
      "value": "55\"",
      "icon": "tv",
      "order": 30,
      "objectId": "MJMIsEHWyv"
    },
    {
      "createdAt": "2016-02-09T13:41:52.223Z",
      "updatedAt": "2016-02-09T13:44:05.939Z",
      "room": {
        "createdAt": "2016-01-27T12:48:42.465Z",
        "updatedAt": "2017-02-02T10:32:18.456Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Miłosz",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.dart-krakow.isdc@pl.abb.com",
        "objectId": "mVh3Eeg5H0",
        "__type": "Object",
        "className": "Room"
      },
      "type": "seats",
      "value": "12",
      "icon": "users",
      "order": 20,
      "objectId": "JFkhttCnPX"
    },
    {
      "createdAt": "2016-02-09T13:41:51.160Z",
      "updatedAt": "2016-02-09T13:44:03.668Z",
      "room": {
        "createdAt": "2016-01-27T12:48:42.465Z",
        "updatedAt": "2017-02-02T10:32:18.456Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Miłosz",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.dart-krakow.isdc@pl.abb.com",
        "objectId": "mVh3Eeg5H0",
        "__type": "Object",
        "className": "Room"
      },
      "type": "phone",
      "value": "+48 22 223 7294",
      "icon": "phone",
      "order": 10,
      "objectId": "5rgPc6rhwy"
    },
    {
      "createdAt": "2016-02-09T13:41:49.531Z",
      "updatedAt": "2016-02-09T13:44:01.335Z",
      "room": {
        "createdAt": "2016-01-27T12:48:42.465Z",
        "updatedAt": "2017-02-02T10:32:18.456Z",
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "name": "Miłosz",
        "floor": -1,
        "type": "meeting",
        "office365Address": "st15.dart-krakow.isdc@pl.abb.com",
        "objectId": "mVh3Eeg5H0",
        "__type": "Object",
        "className": "Room"
      },
      "type": "floor",
      "value": "-1",
      "icon": "floors",
      "order": 0,
      "objectId": "y9b8QYtmEG"
    },
    {
      "createdAt": "2016-02-09T13:44:38.735Z",
      "updatedAt": "2016-02-09T13:45:45.367Z",
      "room": {
        "name": "Wyspiański",
        "createdAt": "2016-02-09T12:51:01.226Z",
        "updatedAt": "2017-02-02T10:32:51.225Z",
        "type": "meeting",
        "floor": -1,
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "office365Address": "st15.salsa-krakow.isdc@pl.abb.com",
        "objectId": "yEa0Er8cb4",
        "__type": "Object",
        "className": "Room"
      },
      "icon": "tv",
      "value": "46\"",
      "type": "tv",
      "order": 30,
      "objectId": "W1z4CdAAtv"
    },
    {
      "createdAt": "2016-02-09T13:44:37.660Z",
      "updatedAt": "2016-02-09T13:45:43.291Z",
      "room": {
        "name": "Wyspiański",
        "createdAt": "2016-02-09T12:51:01.226Z",
        "updatedAt": "2017-02-02T10:32:51.225Z",
        "type": "meeting",
        "floor": -1,
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "office365Address": "st15.salsa-krakow.isdc@pl.abb.com",
        "objectId": "yEa0Er8cb4",
        "__type": "Object",
        "className": "Room"
      },
      "icon": "users",
      "type": "seats",
      "value": "8",
      "order": 20,
      "objectId": "EGdJbDF5fU"
    },
    {
      "room": {
        "name": "Wyspiański",
        "createdAt": "2016-02-09T12:51:01.226Z",
        "updatedAt": "2017-02-02T10:32:51.225Z",
        "type": "meeting",
        "floor": -1,
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "office365Address": "st15.salsa-krakow.isdc@pl.abb.com",
        "objectId": "yEa0Er8cb4",
        "__type": "Object",
        "className": "Room"
      },
      "createdAt": "2016-02-09T13:44:36.944Z",
      "updatedAt": "2016-02-09T13:45:39.948Z",
      "icon": "phone",
      "type": "phone",
      "value": "+48 22 223 7296",
      "order": 10,
      "objectId": "qdNbghDaAf"
    },
    {
      "createdAt": "2016-02-09T13:44:35.042Z",
      "updatedAt": "2016-02-09T13:45:37.638Z",
      "room": {
        "name": "Wyspiański",
        "createdAt": "2016-02-09T12:51:01.226Z",
        "updatedAt": "2017-02-02T10:32:51.225Z",
        "type": "meeting",
        "floor": -1,
        "address": {
          "createdAt": "2016-01-27T12:46:31.675Z",
          "updatedAt": "2017-01-31T09:15:22.303Z",
          "name": "Starowiślna 15",
          "location": {
            "__type": "Pointer",
            "className": "Location",
            "objectId": "llz1M6ZdiU"
          },
          "address": "Ul. Starowiślna 15",
          "objectId": "Pv0v5615DU",
          "__type": "Object",
          "className": "Address"
        },
        "office365Address": "st15.salsa-krakow.isdc@pl.abb.com",
        "objectId": "yEa0Er8cb4",
        "__type": "Object",
        "className": "Room"
      },
      "icon": "floors",
      "type": "floor",
      "value": "-1",
      "order": 0,
      "objectId": "R56FAHKOMM"
    }
  ],
  "Session": [
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T15:45:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-11T16:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "icon": "coffee",
      "name": "Coffee break",
      "text": null,
      "type": "other",
      "createdAt": "2017-02-02T15:48:25.592Z",
      "updatedAt": "2017-02-02T18:58:18.528Z",
      "objectId": "dSWWzw0fEs"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T12:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-09T13:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "IgNrWrNVMP"
      },
      "icon": "cutlery",
      "name": "Lunch (in house)",
      "type": "plan",
      "createdAt": "2017-02-02T14:48:16.978Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "objectId": "uDUMY8EswW"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T08:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-08T12:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "icon": "calendar",
      "name": "SDC review",
      "type": "meeting",
      "createdAt": "2017-02-02T14:35:19.771Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "presenter": "Przemysław Zakrzewski",
      "objectId": "kk3vQIDyfZ"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-08T18:25:00.000Z"
      },
      "endDate": null,
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "icon": "calendar",
      "name": "Arrival at Cracow Airport, flight from Frankfurt (LH 1368)",
      "type": "meeting",
      "createdAt": "2017-02-02T12:23:19.756Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "attendee": null,
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "objectId": "rrZYZXHMk5"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T13:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-09T14:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "icon": "calendar",
      "name": "PLCRC update",
      "type": "meeting",
      "createdAt": "2017-02-02T14:49:49.312Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "presenter": "Marek Florkowski",
      "objectId": "yxY292cORt"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T14:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-09T14:15:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "icon": "calendar",
      "name": "PLCRC financial update",
      "type": "meeting",
      "createdAt": "2017-02-02T14:51:58.977Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "presenter": "Beata Kasprzyk",
      "objectId": "K8V4GAZlEl"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T14:15:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-09T15:15:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "CRC global financial update",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:36:19.431Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "presenter": "Beata Kasprzyk",
      "objectId": "kUS7AEwpOM"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T15:25:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-09T17:30:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "PLCRC Research Global Areas",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:38:23.699Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "objectId": "AMr2YWxtHZ"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T15:15:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-09T15:25:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "icon": "coffee",
      "name": "Coffee break",
      "text": null,
      "type": "other",
      "createdAt": "2017-02-02T15:38:23.700Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "objectId": "QFP5XgcH5X"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T08:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T10:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "PLCRC Business related R&D",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:41:03.772Z",
      "updatedAt": "2017-02-02T18:58:18.519Z",
      "objectId": "AJbFLJeQ1Y"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T10:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T11:15:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "Town Hall Speech for R&D",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:41:29.148Z",
      "updatedAt": "2017-02-02T18:58:18.519Z",
      "presenter": "CTO Bazmi Husain",
      "objectId": "WhPUWbUH9S"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T11:30:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T12:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "Global Simulation Hub",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:44:17.058Z",
      "updatedAt": "2017-02-02T18:58:18.528Z",
      "presenter": "Daniel Szary",
      "objectId": "1sC49Gf5NJ"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T12:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T13:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "icon": "cutlery",
      "name": "Lunch",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:45:09.094Z",
      "updatedAt": "2017-02-02T18:58:18.528Z",
      "objectId": "7qxp3uUfWS"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T13:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T13:45:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "CTO message to PLCRC mgmt. team",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:45:50.526Z",
      "updatedAt": "2017-02-02T18:58:18.528Z",
      "presenter": "CTO Bazmi Husain",
      "objectId": "u1Zbh3rzHs"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T13:45:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T14:05:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "Group Standard Office",
      "text": null,
      "type": "meeting",
      "createdAt": "2017-02-02T15:46:33.185Z",
      "updatedAt": "2017-02-02T18:58:18.528Z",
      "presenter": "Lukasz Malinowski / Janusz Maruszczyk",
      "objectId": "G8Va6mRqBT"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T11:15:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T11:30:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "icon": "coffee",
      "name": "Coffee break",
      "text": null,
      "type": "other",
      "createdAt": "2017-02-02T15:43:53.398Z",
      "updatedAt": "2017-02-02T18:58:18.521Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "null"
      },
      "objectId": "qyEuTHBi1O"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T16:00:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T17:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "icon": "calendar",
      "name": "Summary",
      "text": null,
      "type": "plan",
      "createdAt": "2017-02-02T15:49:23.422Z",
      "updatedAt": "2017-02-02T18:58:18.907Z",
      "objectId": "LqX8r69p35"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T17:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "endDate": null,
      "icon": "taxi",
      "name": "Taxi to airport",
      "text": null,
      "type": "other",
      "createdAt": "2017-02-02T15:49:46.272Z",
      "updatedAt": "2017-02-02T18:58:18.917Z",
      "objectId": "1VdsnjCCtY"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T19:50:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "endDate": null,
      "icon": "plane",
      "name": "Flight to Zurich",
      "text": null,
      "type": "other",
      "createdAt": "2017-02-02T15:50:47.737Z",
      "updatedAt": "2017-02-02T18:58:18.917Z",
      "objectId": "dhNXOSpCkR"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T19:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "endDate": null,
      "icon": "cutlery",
      "name": "Dinner",
      "text": null,
      "type": "other",
      "createdAt": "2017-02-02T15:39:09.740Z",
      "updatedAt": "2017-02-02T18:58:18.519Z",
      "objectId": "AuCzhJCvVu"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T08:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "endDate": null,
      "icon": "guidelines",
      "name": "Visitor guidelines",
      "text": null,
      "type": "guidelines",
      "createdAt": "2017-02-02T15:54:43.959Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "objectId": "jHDGBbVckC"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-09T08:00:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "EiFvCBr4wH"
      },
      "attendee": null,
      "endDate": null,
      "icon": "evacuationsign",
      "name": "Evacuation instructions",
      "text": null,
      "type": "evacuation",
      "createdAt": "2017-02-02T15:55:48.084Z",
      "updatedAt": "2017-02-02T18:58:18.512Z",
      "objectId": "WGlXHrwhXo"
    },
    {
      "startDate": {
        "__type": "Date",
        "iso": "2017-02-10T14:20:00.000Z"
      },
      "endDate": {
        "__type": "Date",
        "iso": "2017-02-10T15:45:00.000Z"
      },
      "event": {
        "startDate": {
          "__type": "Date",
          "iso": "2017-02-08T00:00:00.000Z"
        },
        "endDate": {
          "__type": "Date",
          "iso": "2017-02-10T23:55:00.000Z"
        },
        "location": {
          "__type": "Pointer",
          "className": "Location",
          "objectId": "llz1M6ZdiU"
        },
        "hideAfter": 300,
        "name": "Visit of Bazmi Husain",
        "pinCode": "1997",
        "createdAt": "2017-02-02T12:17:35.836Z",
        "updatedAt": "2017-02-02T12:17:35.836Z",
        "objectId": "2TORCtecd0",
        "__type": "Object",
        "className": "Event"
      },
      "room": {
        "__type": "Pointer",
        "className": "Room",
        "objectId": "null"
      },
      "attendee": null,
      "icon": "laboratory",
      "name": "Lab Tour",
      "text": "<!-- #######  YAY, I AM THE SOURCE EDITOR! #########--> <table> <tbody> <tr> <td> <p><strong>Time</strong></p> </td> <td> <p><strong>Meeting</strong></p> </td> <td> <p><strong>Labs</strong></p> </td> <td> <p><strong>Participants</strong></p> </td> </tr> <tr> <td> <p>14:05</p> <p>14:15</p> </td> <td> <p>EDWIN for mining </p><p>+ DC field mapping</p> </td> <td> <p>PASCAL</p> </td> <td>  <p>Baszynski/P. Ryba</p>  </td> </tr> <tr> <td> <p>14:15</p> <p>14:22</p> </td> <td> <p>Digital Materials</p> </td> <td> <p>OHM</p> </td> <td>  <p>Malinowski  </td> </tr> <tr> <td> <p>14:22</p> <p>14:29</p> </td> <td> <p>Next Generation Insulation</p><p> for Power Products</p> </td> <td> <p>COULOMB</p> </td> <td>  <p>Adamczyk</p>  </td> </tr> <tr> <td> <p>14:29</p> <p>14:36</p> </td> <td> <p>Bypass Switch</p> </td> <td> <p>MAXWELL</p> </td> <td>  <p>Ruszczyk  </td> </tr> <tr> <td> <p>14:36</p> <p>14:43</p> </td> <td> <p>Check Before Make</p> </td> <td> <p>MAXWELL</p> </td> <td>  <p>Koska</p>  </td> </tr> <tr> <td> <p>14:43</p> <p>14:50</p> </td> <td> <p>PETAC + Scout</p><p>(live transmission)</p> </td> <td> <p>TESLA</p> </td> <td>  <p>Aloszko</p>  </td> </tr> <tr> <td> <p>14:50</p> <p>14:57</p> </td> <td> <p>Hardware in the Loop</p> </td> <td> <p>HERTZ</p> </td> <td>  <p>Szlosek</p>  </td> </tr> <tr> <td> <p>14:57</p> <p>15:04</p> </td> <td> <p>YuMi testing (Kazimierz)</p> </td> <td> <p>KAZIMIERZ</p> </td> <td>  <p>Bajerski</p>  </td> </tr> <tr> <td> <p>15:04</p> <p>15:15</p> </td> <td> <p>EXPO EP (CMS, WiFi</p><p> for DA, Febris, MLC&hellip;)</p> </td> <td> <p>EXPO</p> </td> <td>  <p>Wrzesniak</p>  </td> </tr> <tr> <td> <p>15:15</p> <p>15:22</p> </td> <td> <p>Wireless Power Transfer</p><p>(HVDC + EV charging)</p> </td> <td> <p>EXPO</p> </td> <td>  <p>Ruszczyk</p>  </td> </tr> <tr> <td> <p>15:22</p> <p>15:33</p> </td> <td> <p>ABB Ability </p><p>(Sensors &ndash; Gateway &ndash; Cloud)</p> </td> <td> <p>CZOCHRALSKI</p> </td> <td>  <p>Lewandowski</p>  </td> </tr> <tr> <td> <p>15:33</p> <p>15:45</p> </td> <td> <p>HVDC Electronics</p><p>(OPTICUS, PS750)</p> </td> <td> <p>CZOCHRALSKI</p> </td> <td>  <p>Rydygier</p>  </td> </tr> </tbody> </table>",
      "type": "meeting",
      "createdAt": "2017-02-02T15:47:51.106Z",
      "updatedAt": "2017-02-02T18:58:18.528Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "null"
      },
      "objectId": "L66ybt1WvB"
    }
  ],
  "Spot": [
    {
      "order": 50,
      "updatedAt": "2013-03-24T20:54:33.126Z",
      "address": "Al. Waszyngtona 1",
      "info": "The Kosciuszko Mound was raised in 1820-1823 to commemorate the Polish national hero Tadeusz Kosciuszko. In 1850-1854, under the partitions, the Austrian authorities erected a fortress around the Mound. Nowadays, the restored fortress contains a hotel, the radio station headquarters and two permanent exhibitions. The top of the Mound affords a vast panorama of Krakow and the surrounding area.",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.054922,
        "longitude": 19.89458
      },
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "createdAt": "2012-12-01T13:33:49.701Z",
      "type": "sight",
      "name": "Kościuszko Mound",
      "objectId": "1N5VuGOJmq"
    },
    {
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "updatedAt": "2013-03-24T20:53:30.811Z",
      "order": 50,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.061065,
        "longitude": 19.936645
      },
      "type": "atm",
      "createdAt": "2012-12-01T12:38:12.693Z",
      "address": "Rynek Główny",
      "name": "Deutche Bank",
      "objectId": "3KGCvLl4yt"
    },
    {
      "updatedAt": "2013-01-21T15:45:30.379Z",
      "type": "hotel",
      "order": 60,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.058296,
        "longitude": 19.933274
      },
      "createdAt": "2012-10-15T11:39:09.829Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
      "name": "Radisson BLU",
      "address": "Ul. Straszewskiego",
      "objectId": "458tmli0cB"
    },
    {
      "updatedAt": "2013-03-14T14:28:45.026Z",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.054184,
        "longitude": 19.936296
      },
      "createdAt": "2012-07-30T11:13:05.840Z",
      "name": "Wawel Royal Castle",
      "address": "Ul. Wawel 5",
      "order": 10,
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "The beginnings of the residence of Polish rulers on Wawel hill go back to an early Romanesque stone building from mid 11th century, called the palatium, whose remains are located in the northern wing of the present-day Castle. In time, the prince's residence on the hill was expanded eastwards. Along with the cathedral it was called \"the Upper Castle\", while \"the Lower Castle\" was a settlement consisting of courtiers' and clergy's houses and churches other than the cathedral.",
      "type": "sight",
      "objectId": "4XTRiLs5cc"
    },
    {
      "updatedAt": "2013-02-28T20:30:25.566Z",
      "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060643,
        "longitude": 19.940241
      },
      "order": 20,
      "createdAt": "2012-12-01T13:06:17.978Z",
      "address": "Ul. Sienna 9",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "name": "Aperitif",
      "type": "restaurant",
      "objectId": "7DAxfA3Wgc"
    },
    {
      "createdAt": "2012-12-01T11:39:53.352Z",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.057345,
        "longitude": 19.944413
      },
      "type": "atm",
      "updatedAt": "2013-01-24T14:45:30.924Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "name": "Euronet",
      "order": 20,
      "address": "Ul. Starowiślna 21",
      "objectId": "8ExElVYQIa"
    },
    {
      "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
      "updatedAt": "2013-01-21T15:45:14.302Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "name": "Grodek",
      "type": "hotel",
      "address": "Ul. Na Grodku 4",
      "order": 30,
      "createdAt": "2012-10-15T11:37:07.849Z",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060813,
        "longitude": 19.942497
      },
      "objectId": "8Zp5it8WW3"
    },
    {
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "Bonarka City Center is a contemporary representation of municipal streets and market places. Buildings are made of high-quality natural materials, such as stone, wood and glass. The selection of the facade materials refers to the industrial past of the area as well as traditional shopping arcades from the turn of the 19th and 20th century. The complex comprises 270 shops, 30 cafes and Cinema City. ",
      "address": "Ul. Kamieńskiego 11",
      "order": 50,
      "name": "Bonarka",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.028531,
        "longitude": 19.950213
      },
      "type": "shopping",
      "updatedAt": "2013-03-24T18:23:42.276Z",
      "createdAt": "2013-03-06T18:29:04.679Z",
      "objectId": "9D34sbFF4d"
    },
    {
      "address": "Ul. Pawia 5",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "Galeria Krakowska is the most prestigous shopping centre in Krakow. It offers 270 shops and is located in a 5 minutes walk distance from the Main Square.",
      "name": "Galeria Krakowska",
      "type": "shopping",
      "createdAt": "2012-12-01T13:20:54.852Z",
      "updatedAt": "2013-03-24T18:22:15.889Z",
      "order": 10,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.066836,
        "longitude": 19.945457
      },
      "objectId": "9hhFoHtz1i"
    },
    {
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "type": "restaurant",
      "name": "Cosa Nostra",
      "updatedAt": "2013-02-28T20:34:27.720Z",
      "createdAt": "2012-12-01T13:06:29.400Z",
      "address": "Ul. Dajwór 25",
      "order": 80,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.050801,
        "longitude": 19.949412
      },
      "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
      "objectId": "B25bAYVfF5"
    },
    {
      "order": 10,
      "updatedAt": "2013-01-21T15:45:00.152Z",
      "address": "Ul. Wielopole 3",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
      "type": "hotel",
      "name": "Wielopole",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.058906,
        "longitude": 19.943482
      },
      "createdAt": "2012-10-15T11:35:52.471Z",
      "objectId": "BcEzwnbk9J"
    },
    {
      "createdAt": "2013-01-31T20:01:37.280Z",
      "type": "sight",
      "order": 40,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.05991,
        "longitude": 19.94147
      },
      "address": "Ul. Sienna",
      "info": "Park of 30 varied gardens among old trees around Krakow's Old Town historical district. ",
      "name": "Planty Garden Ring",
      "updatedAt": "2013-03-17T10:18:38.943Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "objectId": "BmJCScvc0V"
    },
    {
      "name": "Qubus",
      "order": 50,
      "type": "hotel",
      "address": "Ul. Nadwiślanska 6",
      "updatedAt": "2013-01-21T15:45:19.844Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.04675,
        "longitude": 19.950331
      },
      "createdAt": "2012-10-15T11:37:41.395Z",
      "objectId": "DNd9Gfr2U7"
    },
    {
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.057607,
        "longitude": 19.943488
      },
      "type": "restaurant",
      "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
      "order": 10,
      "name": "Il Calzone",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "createdAt": "2012-07-06T20:21:05.223Z",
      "updatedAt": "2013-03-24T20:53:46.916Z",
      "address": "Ul. Starowiślna 15",
      "objectId": "J1lNLYTDFE"
    },
    {
      "createdAt": "2015-05-27T11:52:10.028Z",
      "order": 10,
      "name": "CRC Kraków",
      "updatedAt": "2015-05-27T14:16:38.971Z",
      "type": "location",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "address": "Ul. Starowiślna 13A",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.057741,
        "longitude": 19.942656
      },
      "objectId": "JacjTMvtw7"
    },
    {
      "order": 0,
      "updatedAt": "2015-05-27T14:17:49.637Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "type": "location",
      "name": "ISDC Kraków",
      "createdAt": "2013-01-15T12:25:05.098Z",
      "address": "Ul. Starowiślna 13",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.05813,
        "longitude": 19.943222
      },
      "objectId": "L08zmVbMCw"
    },
    {
      "info": "The world's oldest shopping mall has been in business for 700 years. The present Renaissance edifice dates from 1555.",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.061657,
        "longitude": 19.937463
      },
      "updatedAt": "2013-03-24T18:22:57.783Z",
      "type": "shopping",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "createdAt": "2012-12-01T13:20:56.069Z",
      "name": "Cloth Hall",
      "order": 20,
      "address": "Rynek Główny",
      "objectId": "MOWOgUmFEP"
    },
    {
      "createdAt": "2016-05-09T13:01:01.524Z",
      "updatedAt": "2016-05-09T13:05:50.743Z",
      "address": "Rynek Główny 16, Kraków",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "Wierzynek Restaurant, as one of the oldest in Europe, is famous for its old Polish cuisine and care for royal court customs. The origin of our restaurant dates back to 1364, the year in which a splendid and abundant feast took place in a tenement on the Main Market Square.",
      "name": "Wierzynek",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060465,
        "longitude": 19.93722
      },
      "type": "restaurant",
      "order": 15,
      "objectId": "OmFvm0bzZc"
    },
    {
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "type": "restaurant",
      "address": "Ul. Grodzka 5",
      "updatedAt": "2013-02-28T20:33:40.287Z",
      "name": "Marmolada",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.059959,
        "longitude": 19.937578
      },
      "createdAt": "2012-12-01T13:06:26.120Z",
      "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
      "order": 50,
      "objectId": "RS9V21TenK"
    },
    {
      "type": "sight",
      "address": "Rynek główny",
      "name": "Church of the St. Mary",
      "order": 20,
      "createdAt": "2012-12-01T13:33:52.133Z",
      "updatedAt": "2013-03-17T09:37:57.003Z",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.061664,
        "longitude": 19.939188
      },
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "St. Mary's church is a Brick Gothic church re-built in the 14th century, adjacent to the Main Market Square. On every hour, a trumpet signal—called the Hejnał Mariacki—is played from the top of the taller of St. Mary's two towers.",
      "objectId": "RdsfxB5czr"
    },
    {
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.061184,
        "longitude": 19.938356
      },
      "info": "The Szara Restaurant is located in the house of the same name (The Grey House) at the Market Square.  Our cuisine specializes in European dishes, and we need to mention our deliciously cooked fish (salmon and pikeperch) and our famous fish soup, as well as sirloin served in various ways (e.g. tournedos or planksteak), not to mention our veal (medallion or schnitzel) which cannot be matched by anyone else.",
      "type": "restaurant",
      "address": "Ul. Rynek Główny 6",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "name": "Szara",
      "createdAt": "2015-05-08T08:51:34.031Z",
      "updatedAt": "2015-05-08T08:54:28.812Z",
      "order": 13,
      "objectId": "Rtm5XqoTJx"
    },
    {
      "address": "Ul. Stolarska 13",
      "updatedAt": "2013-02-28T20:34:10.863Z",
      "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
      "name": "Pimiento",
      "type": "restaurant",
      "createdAt": "2012-12-01T13:06:28.230Z",
      "order": 70,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.059791,
        "longitude": 19.938757
      },
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "objectId": "SL9huVbKje"
    },
    {
      "address": "Rynek Główny 10",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "name": "Wesele",
      "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
      "order": 40,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060708,
        "longitude": 19.937957
      },
      "type": "restaurant",
      "createdAt": "2012-12-01T13:06:24.949Z",
      "updatedAt": "2013-03-24T20:53:25.776Z",
      "objectId": "TtWjyelace"
    },
    {
      "address": "Ul. Pawia 3",
      "name": "Andels",
      "createdAt": "2012-10-15T11:39:34.972Z",
      "order": 40,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.065652,
        "longitude": 19.945267
      },
      "type": "hotel",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "updatedAt": "2013-01-21T15:45:34.714Z",
      "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
      "objectId": "VBWkPaq5G7"
    },
    {
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.05729,
        "longitude": 19.944413
      },
      "type": "restaurant",
      "name": "Cukiernia Cichowscy",
      "createdAt": "2012-12-01T13:06:34.763Z",
      "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
      "updatedAt": "2013-02-28T20:35:41.811Z",
      "address": "Ul. Starowiślna 21",
      "order": 30,
      "objectId": "VGcIpSDrMU"
    },
    {
      "name": "Miód Malina",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.058205,
        "longitude": 19.938447
      },
      "type": "restaurant",
      "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
      "createdAt": "2012-12-01T13:06:27.068Z",
      "updatedAt": "2013-02-28T20:33:54.615Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "order": 60,
      "address": "Ul. Grodzka 40",
      "objectId": "XYUuQv8NkK"
    },
    {
      "type": "restaurant",
      "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
      "createdAt": "2012-12-01T13:06:33.571Z",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.052069,
        "longitude": 19.942889
      },
      "address": "Ul. Miodowa 8",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "name": "Edo Fusion",
      "updatedAt": "2013-02-28T20:35:26.511Z",
      "order": 130,
      "objectId": "YCRIB7mewu"
    },
    {
      "name": "Bank BPS",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.050291,
        "longitude": 19.944026
      },
      "updatedAt": "2013-03-20T10:28:35.496Z",
      "address": "Ul. Bożego Ciała 23",
      "type": "atm",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "createdAt": "2012-12-01T12:38:15.200Z",
      "order": 70,
      "objectId": "ZRzg8HTd6c"
    },
    {
      "name": "Pasaż 13",
      "updatedAt": "2013-05-06T13:39:05.273Z",
      "order": 30,
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "createdAt": "2012-12-01T13:20:57.478Z",
      "info": "Rynek 13 is definitely the most elegant shopping center in Krakow.Likus Concept Stores on the Krakow Main square – the idea for creating it came from the luxury shopping centers in New York and Milan. Old town houses have been transformed into an intimate shopping arcade. The renaissance style stairway, gothic vaulted ceilings, glass and cement, steal escalators and elevators co-exist here in harmony. LCS is a new way of shopping – elegant stores with brand named clothing, wine cellar with imported wines (mostly from Italy and over 200 types), superbly stocked Italian delicatessen, and a place to relax while shopping. The Long Bar offers a place to eat, drink a glass of wine or have a cup of real espresso.",
      "type": "shopping",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060381,
        "longitude": 19.937841
      },
      "address": "Rynek Główny 13",
      "objectId": "cqoz9xfQ5t"
    },
    {
      "type": "restaurant",
      "createdAt": "2012-12-01T13:06:32.489Z",
      "info": "The ancient name of Tokyo—Edo —adorns Edo Sushi, located in Krakow's historic Kazimierz. The sushi masters at Edo have arranged the menu in convenient \"sets\" that include well matched selections from the menu’s wide range.",
      "address": "Ul. Bożego Ciała 3",
      "name": "Edo Sushi Bar",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "updatedAt": "2013-02-28T20:35:13.879Z",
      "order": 120,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.052138,
        "longitude": 19.942889
      },
      "objectId": "dZWI2J6dRb"
    },
    {
      "type": "sight",
      "info": "The showrooms of the Main Building host temporary exhibitions presenting – in keeping with the Museum’s mission – works drawn from internal holdings as well as objects on loan from other institutions or private collectors.",
      "updatedAt": "2013-03-24T20:54:35.758Z",
      "address": "Al. 3 Maja 1",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060075,
        "longitude": 19.92377
      },
      "order": 70,
      "createdAt": "2012-12-01T13:33:48.407Z",
      "name": "National Museum",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "objectId": "eh3pUJxZcs"
    },
    {
      "updatedAt": "2013-01-21T15:45:13.833Z",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.057604,
        "longitude": 19.943457
      },
      "name": "Pugetów",
      "order": 20,
      "type": "hotel",
      "createdAt": "2012-10-15T11:36:32.820Z",
      "address": "Ul. Starowiślna 15a",
      "info": "Hotel Pugetów is located right in the center od Kraków, between the Market Square and Kazimierz. The quiet courtyard and parking available at a guarded parking lot - these things are hard to come by in the centre of a city. Hotel is located just next to ABB office.",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "objectId": "fdyf0Ldm37"
    },
    {
      "createdAt": "2015-05-08T08:51:38.429Z",
      "name": "Kawaleria",
      "type": "restaurant",
      "order": 16,
      "info": "The Kawaleria Restaurant is  which refer to tradition of polish cavalry. The original interior design, wherein old Poland and its customs seems to be still alive certainly will be interesting for all of our guests. The restaurant offers three dining rooms. The seasonal garden illuminated with candles, immersed in the green is an ideal place for a romantic dinner.",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060217,
        "longitude": 19.935414
      },
      "updatedAt": "2015-05-08T08:54:50.961Z",
      "address": "Ul. Gołębia 4",
      "objectId": "g9l8Z2oPGB"
    },
    {
      "name": "Holiday Inn",
      "type": "hotel",
      "updatedAt": "2013-01-21T15:44:35.054Z",
      "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
      "createdAt": "2012-10-15T11:34:27.379Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "order": 0,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.0592,
        "longitude": 19.943626
      },
      "address": "Ul. Wielopole 4",
      "objectId": "hLzmXeDV1d"
    },
    {
      "type": "shopping",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "address": "Ul. Podgórska 34",
      "name": "Galeria Kazimierz",
      "info": "Galeria Kaziemierz shopping mall is located on the west bank of the Vistula river, just 15 minutes walk from the Krakow’s Old Town.Galeria Kazimierz houses more than 130 shops  and service points. It is a popular place for entertainment thanks to the Cinema City. Customers can also enjoy the food court with many restaurants and cafes.",
      "createdAt": "2012-12-01T13:20:58.525Z",
      "updatedAt": "2013-03-24T18:23:26.208Z",
      "order": 40,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.052675,
        "longitude": 19.956529
      },
      "objectId": "oVgSX18SuH"
    },
    {
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.045855,
        "longitude": 19.94909
      },
      "address": "Ul. Józefińska 4",
      "order": 110,
      "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
      "name": "Kura",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "type": "restaurant",
      "createdAt": "2012-12-01T13:06:31.428Z",
      "updatedAt": "2013-03-02T21:08:17.193Z",
      "objectId": "omLMbTRPgC"
    },
    {
      "type": "atm",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.060507,
        "longitude": 19.940819
      },
      "createdAt": "2012-12-01T12:38:10.514Z",
      "updatedAt": "2013-01-24T14:45:11.363Z",
      "name": "PKO Bank Polski",
      "address": "Ul. Sienna 15",
      "order": 40,
      "objectId": "p2yfJi0v1v"
    },
    {
      "updatedAt": "2013-01-24T14:44:13.561Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "type": "atm",
      "address": "Ul. Szeroka 22",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.051752,
        "longitude": 19.94864
      },
      "createdAt": "2012-12-01T12:38:36.700Z",
      "order": 80,
      "name": "Pekao S.A.",
      "objectId": "pPvzIqrDgj"
    },
    {
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.061902,
        "longitude": 19.936092
      },
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "type": "atm",
      "updatedAt": "2013-03-24T20:53:19.319Z",
      "order": 60,
      "name": "Bank Zachodni WBK",
      "address": "Rynek Główny",
      "createdAt": "2012-12-01T12:38:13.942Z",
      "objectId": "pgoft4TfWD"
    },
    {
      "address": "Sukiennice",
      "order": 60,
      "type": "sight",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "updatedAt": "2013-03-17T09:48:38.800Z",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.061668,
        "longitude": 19.937458
      },
      "createdAt": "2012-12-01T13:33:41.160Z",
      "info": "The Sukiennice, a huge market hall built in the 13th century in the middle of Rynek Główny (Main Square), enlarged in the 14th century in the Gothic style and remodelled in the mid-16th century after Renaissance fashion, was restored in 1875–1879 and became the city’s showpiece facility hosting grand balls and patriotic celebrations. Its location and character made the rooms on the first floor of the Sukiennice a perfect place for the National Museum in Krakow.",
      "name": "Sukiennice Gallery",
      "objectId": "r0KNe06MgN"
    },
    {
      "createdAt": "2012-12-01T13:06:30.489Z",
      "updatedAt": "2013-02-28T20:34:42.236Z",
      "address": "Ul. Kanonicza 7",
      "name": "La Campana",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.057056,
        "longitude": 19.937503
      },
      "type": "restaurant",
      "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
      "order": 90,
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "objectId": "sMV6ZIMrXR"
    },
    {
      "type": "sight",
      "address": "Rynek Główny 1",
      "name": "Rynek Underground",
      "createdAt": "2013-03-14T14:25:59.215Z",
      "updatedAt": "2013-03-14T14:28:29.143Z",
      "info": "The underground museum is the first of its kind in Poland, and unique on a global scale too. The ‘In the Footsteps of Krakow’s European Identity’  exhibition is a multimedia show as well as a journey through time – allowing visitors to not only see the history of the origins of the legendary city, but also to touch them! In the archaeological park located 4 metres below the surface of Krakow’s Market Square, we can see a section of medieval Krakow come alive, something as yet unprecedented in Europe. ",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "order": 30,
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.061671,
        "longitude": 19.937439
      },
      "objectId": "uih4zpxeWk"
    },
    {
      "name": "Park Inn",
      "type": "hotel",
      "createdAt": "2012-10-15T11:38:27.488Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.04762,
        "longitude": 19.92969
      },
      "address": "Ul. Monte Cassino 2",
      "updatedAt": "2013-01-21T16:13:18.730Z",
      "order": 70,
      "objectId": "uwzD7OhpiY"
    },
    {
      "address": "Ul. Starowiślna 8",
      "name": "Alior Bank S.A.",
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.058365,
        "longitude": 19.943619
      },
      "type": "atm",
      "createdAt": "2012-12-01T11:37:54.442Z",
      "updatedAt": "2013-01-24T14:45:39.808Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "order": 10,
      "objectId": "veNSJHRRQn"
    },
    {
      "updatedAt": "2013-01-24T14:45:21.591Z",
      "city": {
        "__type": "Pointer",
        "className": "City",
        "objectId": "K7kfEUTGad"
      },
      "position": {
        "__type": "GeoPoint",
        "latitude": 50.05942,
        "longitude": 19.942524
      },
      "order": 30,
      "address": "Ul. Wielopole 1",
      "name": "Pekao S.A.",
      "type": "atm",
      "createdAt": "2012-12-01T12:38:08.937Z",
      "objectId": "wbtImPaZUC"
    }
  ],
  "SpotAttribute": [
    {
      "title": "+41 56 222 75 74",
      "order": 20,
      "icon": "phone",
      "updatedAt": "2015-10-07T11:38:02.017Z",
      "value": "+41 56 222 75 74",
      "createdAt": "2015-10-07T09:43:42.860Z",
      "type": "phone",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "39izZUdjlg"
      },
      "objectId": "05tObh8mGW"
    },
    {
      "updatedAt": "2013-01-24T14:49:05.691Z",
      "value": "800",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061902,
          "longitude": 19.936092
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "atm",
        "updatedAt": "2013-03-24T20:53:19.319Z",
        "order": 60,
        "name": "Bank Zachodni WBK",
        "address": "Rynek Główny",
        "createdAt": "2012-12-01T12:38:13.942Z",
        "objectId": "pgoft4TfWD",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "type": "distance",
      "createdAt": "2013-01-24T14:47:24.548Z",
      "objectId": "06n4X3U36R"
    },
    {
      "order": 40,
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "address": "Ul. Grodzka 5",
        "updatedAt": "2013-02-28T20:33:40.287Z",
        "name": "Marmolada",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059959,
          "longitude": 19.937578
        },
        "createdAt": "2012-12-01T13:06:26.120Z",
        "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
        "order": 50,
        "objectId": "RS9V21TenK",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "createdAt": "2013-02-28T22:11:07.680Z",
      "title": "+48 12 396 49 46",
      "type": "phone",
      "value": "+48 12 396 49 46",
      "updatedAt": "2013-02-28T22:13:15.493Z",
      "objectId": "0CFhCQoijF"
    },
    {
      "updatedAt": "2013-02-28T22:20:13.554Z",
      "title": "+48 12 430 04 11",
      "spot": {
        "name": "Miód Malina",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058205,
          "longitude": 19.938447
        },
        "type": "restaurant",
        "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
        "createdAt": "2012-12-01T13:06:27.068Z",
        "updatedAt": "2013-02-28T20:33:54.615Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 60,
        "address": "Ul. Grodzka 40",
        "objectId": "XYUuQv8NkK",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "value": "+48 12 430 04 11",
      "createdAt": "2013-02-28T22:17:20.752Z",
      "order": 40,
      "type": "phone",
      "objectId": "0kOddm0vBD"
    },
    {
      "title": "Website",
      "icon": "globe",
      "type": "url",
      "createdAt": "2012-10-15T11:54:11.775Z",
      "value": "http://www.hik.krakow.pl/?lang=en",
      "spot": {
        "name": "Holiday Inn",
        "type": "hotel",
        "updatedAt": "2013-01-21T15:44:35.054Z",
        "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
        "createdAt": "2012-10-15T11:34:27.379Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 0,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.0592,
          "longitude": 19.943626
        },
        "address": "Ul. Wielopole 4",
        "objectId": "hLzmXeDV1d",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 60,
      "updatedAt": "2015-09-01T09:56:14.926Z",
      "objectId": "0s37nNimaM"
    },
    {
      "icon": "envelope",
      "spot": {
        "updatedAt": "2013-03-14T14:28:45.026Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054184,
          "longitude": 19.936296
        },
        "createdAt": "2012-07-30T11:13:05.840Z",
        "name": "Wawel Royal Castle",
        "address": "Ul. Wawel 5",
        "order": 10,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The beginnings of the residence of Polish rulers on Wawel hill go back to an early Romanesque stone building from mid 11th century, called the palatium, whose remains are located in the northern wing of the present-day Castle. In time, the prince's residence on the hill was expanded eastwards. Along with the cathedral it was called \"the Upper Castle\", while \"the Lower Castle\" was a settlement consisting of courtiers' and clergy's houses and churches other than the cathedral.",
        "type": "sight",
        "objectId": "4XTRiLs5cc",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-03T15:01:58.602Z",
      "updatedAt": "2015-09-01T09:51:57.800Z",
      "order": 40,
      "title": "Contact email",
      "value": "zamek@wawel.org.pl",
      "type": "email",
      "objectId": "0uijYuzHPL"
    },
    {
      "title": "+48 12 432 49 50",
      "icon": "phone",
      "spot": {
        "updatedAt": "2013-01-21T15:45:13.833Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057604,
          "longitude": 19.943457
        },
        "name": "Pugetów",
        "order": 20,
        "type": "hotel",
        "createdAt": "2012-10-15T11:36:32.820Z",
        "address": "Ul. Starowiślna 15a",
        "info": "Hotel Pugetów is located right in the center od Kraków, between the Market Square and Kazimierz. The quiet courtyard and parking available at a guarded parking lot - these things are hard to come by in the centre of a city. Hotel is located just next to ABB office.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "fdyf0Ldm37",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-22T15:13:42.982Z",
      "updatedAt": "2013-03-20T21:21:15.250Z",
      "type": "phone",
      "value": "+48 12 432 49 50",
      "order": 40,
      "objectId": "0xdCDBiClU"
    },
    {
      "order": 50,
      "type": "email",
      "icon": "envelope",
      "updatedAt": "2015-09-01T09:51:56.789Z",
      "spot": {
        "updatedAt": "2013-01-21T15:45:13.833Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057604,
          "longitude": 19.943457
        },
        "name": "Pugetów",
        "order": 20,
        "type": "hotel",
        "createdAt": "2012-10-15T11:36:32.820Z",
        "address": "Ul. Starowiślna 15a",
        "info": "Hotel Pugetów is located right in the center od Kraków, between the Market Square and Kazimierz. The quiet courtyard and parking available at a guarded parking lot - these things are hard to come by in the centre of a city. Hotel is located just next to ABB office.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "fdyf0Ldm37",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Contact email",
      "createdAt": "2013-01-22T15:24:41.608Z",
      "value": "pugetow@donimirski.com\n",
      "objectId": "19zrCrQmU7"
    },
    {
      "type": "price",
      "value": "10",
      "spot": {
        "type": "sight",
        "info": "The showrooms of the Main Building host temporary exhibitions presenting – in keeping with the Museum’s mission – works drawn from internal holdings as well as objects on loan from other institutions or private collectors.",
        "updatedAt": "2013-03-24T20:54:35.758Z",
        "address": "Al. 3 Maja 1",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060075,
          "longitude": 19.92377
        },
        "order": 70,
        "createdAt": "2012-12-01T13:33:48.407Z",
        "name": "National Museum",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "eh3pUJxZcs",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "money",
      "createdAt": "2013-03-17T09:52:30.498Z",
      "updatedAt": "2015-09-01T09:53:53.704Z",
      "title": "Ticket",
      "order": 20,
      "objectId": "1BkR6AjlZ7"
    },
    {
      "title": "Contact email",
      "createdAt": "2013-02-28T22:04:50.292Z",
      "type": "email",
      "order": 50,
      "value": "restauracja@weselerestauracja.pl",
      "updatedAt": "2015-09-01T09:51:34.616Z",
      "spot": {
        "address": "Rynek Główny 10",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Wesele",
        "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060708,
          "longitude": 19.937957
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:24.949Z",
        "updatedAt": "2013-03-24T20:53:25.776Z",
        "objectId": "TtWjyelace",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "envelope",
      "objectId": "1IIjCRPFDK"
    },
    {
      "value": "MON-SUN|12:00-22:00",
      "title": "Opening|hours",
      "createdAt": "2013-02-28T20:43:15.654Z",
      "icon": "clock",
      "type": "open",
      "updatedAt": "2015-09-01T09:58:31.897Z",
      "order": 30,
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "1WJZtibeGL"
    },
    {
      "icon": "envelope",
      "order": 40,
      "title": "Contact email",
      "updatedAt": "2015-10-07T11:53:26.774Z",
      "type": "email",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "eZqoASw3uM"
      },
      "createdAt": "2015-10-07T11:46:09.458Z",
      "value": "restaurant@grandcasinobaden.ch",
      "objectId": "1fbgHJ6BT8"
    },
    {
      "type": "email",
      "icon": "envelope",
      "createdAt": "2013-03-02T21:02:15.909Z",
      "updatedAt": "2015-09-01T09:51:29.905Z",
      "order": 50,
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.045855,
          "longitude": 19.94909
        },
        "address": "Ul. Józefińska 4",
        "order": 110,
        "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
        "name": "Kura",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:31.428Z",
        "updatedAt": "2013-03-02T21:08:17.193Z",
        "objectId": "omLMbTRPgC",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "kurabistro@gmail.com",
      "title": "Contact email",
      "objectId": "2A2wolJYAf"
    },
    {
      "icon": "money",
      "spot": {
        "order": 50,
        "updatedAt": "2013-03-24T20:54:33.126Z",
        "address": "Al. Waszyngtona 1",
        "info": "The Kosciuszko Mound was raised in 1820-1823 to commemorate the Polish national hero Tadeusz Kosciuszko. In 1850-1854, under the partitions, the Austrian authorities erected a fortress around the Mound. Nowadays, the restored fortress contains a hotel, the radio station headquarters and two permanent exhibitions. The top of the Mound affords a vast panorama of Krakow and the surrounding area.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054922,
          "longitude": 19.89458
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:33:49.701Z",
        "type": "sight",
        "name": "Kościuszko Mound",
        "objectId": "1N5VuGOJmq",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 20,
      "title": "Ticket",
      "value": "11",
      "createdAt": "2013-03-17T09:27:51.548Z",
      "updatedAt": "2015-09-01T09:53:55.072Z",
      "type": "price",
      "objectId": "2BP4CKf6e1"
    },
    {
      "title": "Opening|hours",
      "updatedAt": "2015-09-01T09:58:19.500Z",
      "value": "MON-SUN|12:00-23:00",
      "order": 30,
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.045855,
          "longitude": 19.94909
        },
        "address": "Ul. Józefińska 4",
        "order": 110,
        "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
        "name": "Kura",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:31.428Z",
        "updatedAt": "2013-03-02T21:08:17.193Z",
        "objectId": "omLMbTRPgC",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "open",
      "icon": "clock",
      "createdAt": "2013-03-02T21:02:13.936Z",
      "objectId": "2NAD4DJfTh"
    },
    {
      "createdAt": "2013-03-02T21:20:23.631Z",
      "title": "Website",
      "value": "http://www.cichowscy.pl",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05729,
          "longitude": 19.944413
        },
        "type": "restaurant",
        "name": "Cukiernia Cichowscy",
        "createdAt": "2012-12-01T13:06:34.763Z",
        "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
        "updatedAt": "2013-02-28T20:35:41.811Z",
        "address": "Ul. Starowiślna 21",
        "order": 30,
        "objectId": "VGcIpSDrMU",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:55:57.267Z",
      "type": "url",
      "icon": "globe",
      "order": 60,
      "objectId": "2bNFcqn7rA"
    },
    {
      "value": "http://www.weselerestauracja.pl/en/",
      "createdAt": "2013-02-28T22:04:51.383Z",
      "title": "Website",
      "spot": {
        "address": "Rynek Główny 10",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Wesele",
        "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060708,
          "longitude": 19.937957
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:24.949Z",
        "updatedAt": "2013-03-24T20:53:25.776Z",
        "objectId": "TtWjyelace",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "url",
      "updatedAt": "2015-09-01T09:56:03.933Z",
      "icon": "globe",
      "order": 60,
      "objectId": "2z29GczQan"
    },
    {
      "title": "+48 12 422 66 72",
      "value": "+48 12 422 66 72",
      "icon": "phone",
      "createdAt": "2013-02-28T22:27:09.976Z",
      "spot": {
        "address": "Ul. Stolarska 13",
        "updatedAt": "2013-02-28T20:34:10.863Z",
        "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
        "name": "Pimiento",
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:28.230Z",
        "order": 70,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059791,
          "longitude": 19.938757
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "SL9huVbKje",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 40,
      "updatedAt": "2013-02-28T22:29:00.515Z",
      "type": "phone",
      "objectId": "39Wqc5fLMp"
    },
    {
      "value": "info@langmatt.ch",
      "icon": "envelope",
      "order": 30,
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "P4T8ivnmoG"
      },
      "createdAt": "2015-10-07T09:43:45.937Z",
      "updatedAt": "2015-10-07T11:39:16.482Z",
      "title": "Contact email",
      "type": "email",
      "objectId": "3AVz8eQQg6"
    },
    {
      "createdAt": "2016-03-23T08:13:20.081Z",
      "updatedAt": "2016-03-23T09:37:26.843Z",
      "icon": "percent",
      "order": 45,
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "ABB discount",
      "value": "20%",
      "type": "discount",
      "objectId": "3QzbrRiEFS"
    },
    {
      "createdAt": "2012-10-15T11:54:15.431Z",
      "icon": "money",
      "order": 20,
      "updatedAt": "2015-09-01T09:54:14.898Z",
      "title": "Price",
      "type": "price",
      "value": "455",
      "spot": {
        "name": "Holiday Inn",
        "type": "hotel",
        "updatedAt": "2013-01-21T15:44:35.054Z",
        "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
        "createdAt": "2012-10-15T11:34:27.379Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 0,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.0592,
          "longitude": 19.943626
        },
        "address": "Ul. Wielopole 4",
        "objectId": "hLzmXeDV1d",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "3gt4WLVw6z"
    },
    {
      "order": 30,
      "createdAt": "2015-05-08T08:55:31.672Z",
      "updatedAt": "2015-09-01T09:58:09.083Z",
      "icon": "clock",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061184,
          "longitude": 19.938356
        },
        "info": "The Szara Restaurant is located in the house of the same name (The Grey House) at the Market Square.  Our cuisine specializes in European dishes, and we need to mention our deliciously cooked fish (salmon and pikeperch) and our famous fish soup, as well as sirloin served in various ways (e.g. tournedos or planksteak), not to mention our veal (medallion or schnitzel) which cannot be matched by anyone else.",
        "type": "restaurant",
        "address": "Ul. Rynek Główny 6",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Szara",
        "createdAt": "2015-05-08T08:51:34.031Z",
        "updatedAt": "2015-05-08T08:54:28.812Z",
        "order": 13,
        "objectId": "Rtm5XqoTJx",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "type": "open",
      "value": "MON-SUN|11:00-23:00",
      "objectId": "4076dYPcSU"
    },
    {
      "updatedAt": "2015-05-12T09:55:14.916Z",
      "order": 30,
      "icon": "wifi",
      "value": "",
      "spot": {
        "name": "Holiday Inn",
        "type": "hotel",
        "updatedAt": "2013-01-21T15:44:35.054Z",
        "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
        "createdAt": "2012-10-15T11:34:27.379Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 0,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.0592,
          "longitude": 19.943626
        },
        "address": "Ul. Wielopole 4",
        "objectId": "hLzmXeDV1d",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2012-10-15T11:54:13.688Z",
      "title": "Free wireless Internet",
      "type": "wifi",
      "objectId": "40wzrDNPMI"
    },
    {
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "info@cosanostra.krakow.pl",
      "updatedAt": "2015-09-01T09:51:31.445Z",
      "type": "email",
      "title": "Contact email",
      "createdAt": "2013-03-02T20:52:08.612Z",
      "icon": "envelope",
      "order": 50,
      "objectId": "4bc67yGcZ0"
    },
    {
      "icon": "money",
      "value": "12",
      "order": 20,
      "type": "price",
      "spot": {
        "address": "Sukiennice",
        "order": 60,
        "type": "sight",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-03-17T09:48:38.800Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061668,
          "longitude": 19.937458
        },
        "createdAt": "2012-12-01T13:33:41.160Z",
        "info": "The Sukiennice, a huge market hall built in the 13th century in the middle of Rynek Główny (Main Square), enlarged in the 14th century in the Gothic style and remodelled in the mid-16th century after Renaissance fashion, was restored in 1875–1879 and became the city’s showpiece facility hosting grand balls and patriotic celebrations. Its location and character made the rooms on the first floor of the Sukiennice a perfect place for the National Museum in Krakow.",
        "name": "Sukiennice Gallery",
        "objectId": "r0KNe06MgN",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-17T09:40:13.791Z",
      "updatedAt": "2015-09-01T09:53:54.356Z",
      "title": "Ticket",
      "objectId": "54uSATF09m"
    },
    {
      "spot": {
        "createdAt": "2012-12-01T13:06:30.489Z",
        "updatedAt": "2013-02-28T20:34:42.236Z",
        "address": "Ul. Kanonicza 7",
        "name": "La Campana",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057056,
          "longitude": 19.937503
        },
        "type": "restaurant",
        "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
        "order": 90,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "sMV6ZIMrXR",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Contact email",
      "order": 50,
      "updatedAt": "2015-09-01T09:51:30.567Z",
      "value": "restauracja@lacampana.pl\n",
      "type": "email",
      "icon": "envelope",
      "createdAt": "2013-03-02T20:56:38.551Z",
      "objectId": "57ax7Xc1oV"
    },
    {
      "type": "price",
      "value": "6",
      "order": 20,
      "updatedAt": "2015-09-01T09:53:56.532Z",
      "spot": {
        "type": "sight",
        "address": "Rynek główny",
        "name": "Church of the St. Mary",
        "order": 20,
        "createdAt": "2012-12-01T13:33:52.133Z",
        "updatedAt": "2013-03-17T09:37:57.003Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061664,
          "longitude": 19.939188
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "St. Mary's church is a Brick Gothic church re-built in the 14th century, adjacent to the Main Market Square. On every hour, a trumpet signal—called the Hejnał Mariacki—is played from the top of the taller of St. Mary's two towers.",
        "objectId": "RdsfxB5czr",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-17T09:02:29.401Z",
      "icon": "money",
      "title": "Ticket",
      "objectId": "5wimZtxB5m"
    },
    {
      "value": "http://www.donimirski.com/en/hotel-pugetow",
      "updatedAt": "2015-09-01T09:56:11.549Z",
      "spot": {
        "updatedAt": "2013-01-21T15:45:13.833Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057604,
          "longitude": 19.943457
        },
        "name": "Pugetów",
        "order": 20,
        "type": "hotel",
        "createdAt": "2012-10-15T11:36:32.820Z",
        "address": "Ul. Starowiślna 15a",
        "info": "Hotel Pugetów is located right in the center od Kraków, between the Market Square and Kazimierz. The quiet courtyard and parking available at a guarded parking lot - these things are hard to come by in the centre of a city. Hotel is located just next to ABB office.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "fdyf0Ldm37",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "url",
      "order": 60,
      "icon": "globe",
      "title": "Website",
      "createdAt": "2013-01-22T15:32:56.805Z",
      "objectId": "6GplZlp663"
    },
    {
      "createdAt": "2012-12-27T22:54:52.450Z",
      "updatedAt": "2015-09-01T09:31:56.061Z",
      "value": "120",
      "icon": "pedestrian",
      "spot": {
        "address": "Ul. Starowiślna 8",
        "name": "Alior Bank S.A.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058365,
          "longitude": 19.943619
        },
        "type": "atm",
        "createdAt": "2012-12-01T11:37:54.442Z",
        "updatedAt": "2013-01-24T14:45:39.808Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 10,
        "objectId": "veNSJHRRQn",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "type": "distance",
      "objectId": "6deyZdmgUZ"
    },
    {
      "value": "http://www.pickwick.ch",
      "order": 50,
      "icon": "globe",
      "createdAt": "2015-10-07T12:16:33.154Z",
      "updatedAt": "2015-10-13T09:08:14.858Z",
      "title": "Website",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "R4KxyrH1fj"
      },
      "type": "url",
      "objectId": "6kl8W4B3x3"
    },
    {
      "createdAt": "2013-03-17T09:11:44.964Z",
      "updatedAt": "2015-09-01T09:31:30.136Z",
      "value": "600",
      "type": "distance",
      "icon": "pedestrian",
      "spot": {
        "type": "sight",
        "address": "Rynek Główny 1",
        "name": "Rynek Underground",
        "createdAt": "2013-03-14T14:25:59.215Z",
        "updatedAt": "2013-03-14T14:28:29.143Z",
        "info": "The underground museum is the first of its kind in Poland, and unique on a global scale too. The ‘In the Footsteps of Krakow’s European Identity’  exhibition is a multimedia show as well as a journey through time – allowing visitors to not only see the history of the origins of the legendary city, but also to touch them! In the archaeological park located 4 metres below the surface of Krakow’s Market Square, we can see a section of medieval Krakow come alive, something as yet unprecedented in Europe. ",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 30,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061671,
          "longitude": 19.937439
        },
        "objectId": "uih4zpxeWk",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 0,
      "title": "Distance|from office",
      "objectId": "71WvB4QLsq"
    },
    {
      "icon": "pedestrian",
      "spot": {
        "name": "Qubus",
        "order": 50,
        "type": "hotel",
        "address": "Ul. Nadwiślanska 6",
        "updatedAt": "2013-01-21T15:45:19.844Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04675,
          "longitude": 19.950331
        },
        "createdAt": "2012-10-15T11:37:41.395Z",
        "objectId": "DNd9Gfr2U7",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-04T14:02:08.968Z",
      "title": "Distance|from office",
      "type": "distance",
      "updatedAt": "2015-09-01T09:31:51.652Z",
      "value": "1400",
      "order": 0,
      "objectId": "7CYXCyNVju"
    },
    {
      "order": 40,
      "createdAt": "2015-10-07T12:20:01.165Z",
      "icon": "globe",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "r4Lw9xWWYg"
      },
      "value": "http://www.trafohotel.ch/mobile/en/home",
      "type": "url",
      "title": "Website",
      "updatedAt": "2015-10-13T08:42:18.228Z",
      "objectId": "7PVoMMHpj6"
    },
    {
      "createdAt": "2013-03-24T18:49:13.059Z",
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:20.310Z",
      "order": 0,
      "value": "4000",
      "icon": "pedestrian",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Bonarka City Center is a contemporary representation of municipal streets and market places. Buildings are made of high-quality natural materials, such as stone, wood and glass. The selection of the facade materials refers to the industrial past of the area as well as traditional shopping arcades from the turn of the 19th and 20th century. The complex comprises 270 shops, 30 cafes and Cinema City. ",
        "address": "Ul. Kamieńskiego 11",
        "order": 50,
        "name": "Bonarka",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.028531,
          "longitude": 19.950213
        },
        "type": "shopping",
        "updatedAt": "2013-03-24T18:23:42.276Z",
        "createdAt": "2013-03-06T18:29:04.679Z",
        "objectId": "9D34sbFF4d",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "distance",
      "objectId": "7UKdWYiiMe"
    },
    {
      "createdAt": "2013-01-03T14:35:34.872Z",
      "type": "price",
      "title": "Dinner price",
      "order": 20,
      "updatedAt": "2015-09-01T09:54:14.157Z",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "money",
      "value": "17-40|1",
      "objectId": "7bspNNZAbP"
    },
    {
      "icon": "cutlery",
      "createdAt": "2013-02-28T22:17:17.688Z",
      "type": "food",
      "order": 10,
      "title": "Cuisine",
      "spot": {
        "name": "Miód Malina",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058205,
          "longitude": 19.938447
        },
        "type": "restaurant",
        "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
        "createdAt": "2012-12-01T13:06:27.068Z",
        "updatedAt": "2013-02-28T20:33:54.615Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 60,
        "address": "Ul. Grodzka 40",
        "objectId": "XYUuQv8NkK",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:56:40.387Z",
      "value": "Polish",
      "objectId": "7kXJjlgkoV"
    },
    {
      "updatedAt": "2013-03-24T18:43:57.552Z",
      "title": "+48 12 636 14 10",
      "spot": {
        "name": "Pasaż 13",
        "updatedAt": "2013-05-06T13:39:05.273Z",
        "order": 30,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:20:57.478Z",
        "info": "Rynek 13 is definitely the most elegant shopping center in Krakow.Likus Concept Stores on the Krakow Main square – the idea for creating it came from the luxury shopping centers in New York and Milan. Old town houses have been transformed into an intimate shopping arcade. The renaissance style stairway, gothic vaulted ceilings, glass and cement, steal escalators and elevators co-exist here in harmony. LCS is a new way of shopping – elegant stores with brand named clothing, wine cellar with imported wines (mostly from Italy and over 200 types), superbly stocked Italian delicatessen, and a place to relax while shopping. The Long Bar offers a place to eat, drink a glass of wine or have a cup of real espresso.",
        "type": "shopping",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060381,
          "longitude": 19.937841
        },
        "address": "Rynek Główny 13",
        "objectId": "cqoz9xfQ5t",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "createdAt": "2013-03-24T18:39:56.683Z",
      "order": 30,
      "value": "+48 12 636 14 10",
      "type": "phone",
      "objectId": "7zvHAur69c"
    },
    {
      "spot": {
        "createdAt": "2012-12-01T13:06:30.489Z",
        "updatedAt": "2013-02-28T20:34:42.236Z",
        "address": "Ul. Kanonicza 7",
        "name": "La Campana",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057056,
          "longitude": 19.937503
        },
        "type": "restaurant",
        "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
        "order": 90,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "sMV6ZIMrXR",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "MON-SUN|12:00-23:00",
      "title": "Opening|hours",
      "type": "open",
      "updatedAt": "2015-09-01T09:58:20.279Z",
      "order": 30,
      "createdAt": "2013-03-02T20:56:36.852Z",
      "icon": "clock",
      "objectId": "8AOVq0DpTE"
    },
    {
      "value": "MON-SUN|10:00-18:00",
      "createdAt": "2013-03-24T18:39:54.177Z",
      "title": "Opening|hours",
      "icon": "clock",
      "spot": {
        "info": "The world's oldest shopping mall has been in business for 700 years. The present Renaissance edifice dates from 1555.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061657,
          "longitude": 19.937463
        },
        "updatedAt": "2013-03-24T18:22:57.783Z",
        "type": "shopping",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:20:56.069Z",
        "name": "Cloth Hall",
        "order": 20,
        "address": "Rynek Główny",
        "objectId": "MOWOgUmFEP",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:58:12.364Z",
      "type": "open",
      "order": 10,
      "objectId": "8bo1xwqWyL"
    },
    {
      "createdAt": "2016-05-09T13:11:26.861Z",
      "updatedAt": "2016-05-09T13:12:35.345Z",
      "icon": "clock",
      "order": 20,
      "spot": {
        "createdAt": "2016-05-09T13:01:01.524Z",
        "updatedAt": "2016-05-09T13:05:50.743Z",
        "address": "Rynek Główny 16, Kraków",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Wierzynek Restaurant, as one of the oldest in Europe, is famous for its old Polish cuisine and care for royal court customs. The origin of our restaurant dates back to 1364, the year in which a splendid and abundant feast took place in a tenement on the Main Market Square.",
        "name": "Wierzynek",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060465,
          "longitude": 19.93722
        },
        "type": "restaurant",
        "order": 15,
        "objectId": "OmFvm0bzZc",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "type": "open",
      "value": "12:00 - 23:00",
      "objectId": "8nWJO8n0kD"
    },
    {
      "createdAt": "2013-03-17T09:11:48.478Z",
      "value": "+48 12 426 50 60",
      "icon": "phone",
      "updatedAt": "2013-03-17T09:16:14.268Z",
      "order": 30,
      "spot": {
        "type": "sight",
        "address": "Rynek Główny 1",
        "name": "Rynek Underground",
        "createdAt": "2013-03-14T14:25:59.215Z",
        "updatedAt": "2013-03-14T14:28:29.143Z",
        "info": "The underground museum is the first of its kind in Poland, and unique on a global scale too. The ‘In the Footsteps of Krakow’s European Identity’  exhibition is a multimedia show as well as a journey through time – allowing visitors to not only see the history of the origins of the legendary city, but also to touch them! In the archaeological park located 4 metres below the surface of Krakow’s Market Square, we can see a section of medieval Krakow come alive, something as yet unprecedented in Europe. ",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 30,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061671,
          "longitude": 19.937439
        },
        "objectId": "uih4zpxeWk",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "+48 12 426 50 60",
      "type": "phone",
      "objectId": "8qtahlXOYK"
    },
    {
      "icon": "clock",
      "updatedAt": "2015-09-01T09:58:16.559Z",
      "spot": {
        "type": "sight",
        "address": "Rynek główny",
        "name": "Church of the St. Mary",
        "order": 20,
        "createdAt": "2012-12-01T13:33:52.133Z",
        "updatedAt": "2013-03-17T09:37:57.003Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061664,
          "longitude": 19.939188
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "St. Mary's church is a Brick Gothic church re-built in the 14th century, adjacent to the Main Market Square. On every hour, a trumpet signal—called the Hejnał Mariacki—is played from the top of the taller of St. Mary's two towers.",
        "objectId": "RdsfxB5czr",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "open",
      "order": 10,
      "value": "MON-SAT|11:30-18:00",
      "createdAt": "2013-03-17T09:02:27.703Z",
      "title": "Opening|hours",
      "objectId": "94OSpxTGXt"
    },
    {
      "createdAt": "2015-10-07T12:16:29.096Z",
      "order": 10,
      "type": "price",
      "title": "Dinner price",
      "value": "10-30",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "R4KxyrH1fj"
      },
      "updatedAt": "2015-10-07T12:18:08.574Z",
      "icon": "money",
      "objectId": "9eJtf3pk7N"
    },
    {
      "updatedAt": "2016-05-09T13:16:45.320Z",
      "spot": {
        "createdAt": "2016-05-09T13:01:01.524Z",
        "updatedAt": "2016-05-09T13:05:50.743Z",
        "address": "Rynek Główny 16, Kraków",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Wierzynek Restaurant, as one of the oldest in Europe, is famous for its old Polish cuisine and care for royal court customs. The origin of our restaurant dates back to 1364, the year in which a splendid and abundant feast took place in a tenement on the Main Market Square.",
        "name": "Wierzynek",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060465,
          "longitude": 19.93722
        },
        "type": "restaurant",
        "order": 15,
        "objectId": "OmFvm0bzZc",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2016-05-09T13:16:06.620Z",
      "icon": "cutlery",
      "order": 10,
      "title": "Cuisine",
      "type": "food",
      "value": "Polish",
      "objectId": "9vDqKCchSf"
    },
    {
      "title": "Price",
      "type": "price",
      "icon": "money",
      "order": 20,
      "value": "340",
      "updatedAt": "2015-09-01T09:54:12.658Z",
      "spot": {
        "order": 10,
        "updatedAt": "2013-01-21T15:45:00.152Z",
        "address": "Ul. Wielopole 3",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
        "type": "hotel",
        "name": "Wielopole",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058906,
          "longitude": 19.943482
        },
        "createdAt": "2012-10-15T11:35:52.471Z",
        "objectId": "BcEzwnbk9J",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-04T14:18:22.761Z",
      "objectId": "A718AoHqqH"
    },
    {
      "value": "12",
      "title": "Ticket",
      "type": "price",
      "createdAt": "2015-10-07T09:43:44.305Z",
      "updatedAt": "2015-10-07T11:37:15.271Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "P4T8ivnmoG"
      },
      "icon": "money",
      "order": 0,
      "objectId": "AFCvsRpNcO"
    },
    {
      "order": 20,
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "avuCzZXLhF"
      },
      "createdAt": "2015-10-07T11:19:07.233Z",
      "value": "http://www.abb-wfs.ch/articles/98",
      "type": "url",
      "title": "Website",
      "icon": "globe",
      "updatedAt": "2015-10-07T11:38:50.791Z",
      "objectId": "AKTcNYN7cq"
    },
    {
      "spot": {
        "updatedAt": "2013-01-21T15:45:13.833Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057604,
          "longitude": 19.943457
        },
        "name": "Pugetów",
        "order": 20,
        "type": "hotel",
        "createdAt": "2012-10-15T11:36:32.820Z",
        "address": "Ul. Starowiślna 15a",
        "info": "Hotel Pugetów is located right in the center od Kraków, between the Market Square and Kazimierz. The quiet courtyard and parking available at a guarded parking lot - these things are hard to come by in the centre of a city. Hotel is located just next to ABB office.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "fdyf0Ldm37",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "order": 0,
      "type": "distance",
      "icon": "pedestrian",
      "updatedAt": "2015-09-01T09:31:53.454Z",
      "value": "10",
      "createdAt": "2013-01-04T14:01:53.866Z",
      "objectId": "ALFjdHMCRT"
    },
    {
      "value": "info@hirschli.ch",
      "updatedAt": "2015-10-07T11:53:39.287Z",
      "type": "email",
      "createdAt": "2015-10-07T11:48:53.421Z",
      "order": 40,
      "title": "Contact email",
      "icon": "envelope",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "XXlqwj6XJR"
      },
      "objectId": "AjJFGbTqgY"
    },
    {
      "createdAt": "2013-01-22T15:24:47.771Z",
      "updatedAt": "2015-09-01T09:51:36.202Z",
      "type": "email",
      "icon": "envelope",
      "spot": {
        "address": "Ul. Pawia 3",
        "name": "Andels",
        "createdAt": "2012-10-15T11:39:34.972Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.065652,
          "longitude": 19.945267
        },
        "type": "hotel",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-01-21T15:45:34.714Z",
        "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
        "objectId": "VBWkPaq5G7",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 50,
      "value": "reservation@andelscracow.com\n",
      "title": "Contact email",
      "objectId": "AvwlhihEwL"
    },
    {
      "createdAt": "2013-01-04T14:01:40.968Z",
      "order": 0,
      "spot": {
        "order": 10,
        "updatedAt": "2013-01-21T15:45:00.152Z",
        "address": "Ul. Wielopole 3",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
        "type": "hotel",
        "name": "Wielopole",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058906,
          "longitude": 19.943482
        },
        "createdAt": "2012-10-15T11:35:52.471Z",
        "objectId": "BcEzwnbk9J",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "distance",
      "value": "150",
      "icon": "pedestrian",
      "updatedAt": "2015-09-01T09:31:55.321Z",
      "title": "Distance|from office",
      "objectId": "BtlFnelR4e"
    },
    {
      "updatedAt": "2015-09-01T09:54:13.277Z",
      "title": "Ticket price",
      "type": "price",
      "icon": "money",
      "spot": {
        "updatedAt": "2013-03-14T14:28:45.026Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054184,
          "longitude": 19.936296
        },
        "createdAt": "2012-07-30T11:13:05.840Z",
        "name": "Wawel Royal Castle",
        "address": "Ul. Wawel 5",
        "order": 10,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The beginnings of the residence of Polish rulers on Wawel hill go back to an early Romanesque stone building from mid 11th century, called the palatium, whose remains are located in the northern wing of the present-day Castle. In time, the prince's residence on the hill was expanded eastwards. Along with the cathedral it was called \"the Upper Castle\", while \"the Lower Castle\" was a settlement consisting of courtiers' and clergy's houses and churches other than the cathedral.",
        "type": "sight",
        "objectId": "4XTRiLs5cc",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "18",
      "createdAt": "2013-01-03T15:01:56.778Z",
      "order": 20,
      "objectId": "BwxGPfhm21"
    },
    {
      "spot": {
        "updatedAt": "2013-01-24T14:44:13.561Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "atm",
        "address": "Ul. Szeroka 22",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.051752,
          "longitude": 19.94864
        },
        "createdAt": "2012-12-01T12:38:36.700Z",
        "order": 80,
        "name": "Pekao S.A.",
        "objectId": "pPvzIqrDgj",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "createdAt": "2013-01-24T14:47:26.482Z",
      "updatedAt": "2013-01-24T14:49:26.213Z",
      "type": "distance",
      "value": "900",
      "objectId": "C2IcYFuPDn"
    },
    {
      "createdAt": "2015-10-07T12:20:00.175Z",
      "value": "home@trafohotel.ch ",
      "type": "email",
      "order": 30,
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "r4Lw9xWWYg"
      },
      "title": "Contact email",
      "icon": "envelope",
      "updatedAt": "2015-10-07T12:25:04.377Z",
      "objectId": "C2xT6MJRts"
    },
    {
      "updatedAt": "2015-09-01T09:58:17.320Z",
      "order": 30,
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05729,
          "longitude": 19.944413
        },
        "type": "restaurant",
        "name": "Cukiernia Cichowscy",
        "createdAt": "2012-12-01T13:06:34.763Z",
        "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
        "updatedAt": "2013-02-28T20:35:41.811Z",
        "address": "Ul. Starowiślna 21",
        "order": 30,
        "objectId": "VGcIpSDrMU",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "createdAt": "2013-03-02T21:20:18.895Z",
      "value": "MON-SAT|08:30-18:00",
      "icon": "clock",
      "type": "open",
      "objectId": "CJrKXIacbF"
    },
    {
      "createdAt": "2013-03-02T21:08:59.835Z",
      "type": "open",
      "value": "MON-SUN|12:00-22:00",
      "order": 30,
      "icon": "clock",
      "title": "Opening|hours",
      "updatedAt": "2015-09-01T09:58:18.723Z",
      "spot": {
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:32.489Z",
        "info": "The ancient name of Tokyo—Edo —adorns Edo Sushi, located in Krakow's historic Kazimierz. The sushi masters at Edo have arranged the menu in convenient \"sets\" that include well matched selections from the menu’s wide range.",
        "address": "Ul. Bożego Ciała 3",
        "name": "Edo Sushi Bar",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-02-28T20:35:13.879Z",
        "order": 120,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052138,
          "longitude": 19.942889
        },
        "objectId": "dZWI2J6dRb",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "CKMDFI8YxC"
    },
    {
      "type": "url",
      "value": "http://www.qubushotel.com/en/hotels/krakow/1/",
      "createdAt": "2013-01-22T15:33:00.309Z",
      "updatedAt": "2015-09-01T09:56:10.204Z",
      "title": "Website",
      "icon": "globe",
      "spot": {
        "name": "Qubus",
        "order": 50,
        "type": "hotel",
        "address": "Ul. Nadwiślanska 6",
        "updatedAt": "2013-01-21T15:45:19.844Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04675,
          "longitude": 19.950331
        },
        "createdAt": "2012-10-15T11:37:41.395Z",
        "objectId": "DNd9Gfr2U7",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 60,
      "objectId": "CYHTbgearZ"
    },
    {
      "type": "category",
      "value": "5",
      "createdAt": "2013-01-04T13:52:52.015Z",
      "order": 10,
      "updatedAt": "2015-09-03T07:56:37.866Z",
      "title": "Category",
      "icon": "star",
      "spot": {
        "updatedAt": "2013-01-21T15:45:30.379Z",
        "type": "hotel",
        "order": 60,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058296,
          "longitude": 19.933274
        },
        "createdAt": "2012-10-15T11:39:09.829Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
        "name": "Radisson BLU",
        "address": "Ul. Straszewskiego",
        "objectId": "458tmli0cB",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "D2IxZHa8h6"
    },
    {
      "updatedAt": "2015-09-01T09:56:12.261Z",
      "value": "http://www.wielopole.pl/home.php",
      "spot": {
        "order": 10,
        "updatedAt": "2013-01-21T15:45:00.152Z",
        "address": "Ul. Wielopole 3",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
        "type": "hotel",
        "name": "Wielopole",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058906,
          "longitude": 19.943482
        },
        "createdAt": "2012-10-15T11:35:52.471Z",
        "objectId": "BcEzwnbk9J",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "globe",
      "order": 60,
      "title": "Website",
      "createdAt": "2013-01-22T15:32:52.861Z",
      "type": "url",
      "objectId": "D2Us5eWBJk"
    },
    {
      "order": 30,
      "createdAt": "2013-01-04T14:22:15.376Z",
      "updatedAt": "2015-05-12T09:55:11.375Z",
      "spot": {
        "name": "Park Inn",
        "type": "hotel",
        "createdAt": "2012-10-15T11:38:27.488Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04762,
          "longitude": 19.92969
        },
        "address": "Ul. Monte Cassino 2",
        "updatedAt": "2013-01-21T16:13:18.730Z",
        "order": 70,
        "objectId": "uwzD7OhpiY",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Free wireless Internet",
      "type": "wifi",
      "icon": "wifi",
      "objectId": "DHuevEnehS"
    },
    {
      "title": "Opening|hours",
      "type": "open",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "address": "Ul. Grodzka 5",
        "updatedAt": "2013-02-28T20:33:40.287Z",
        "name": "Marmolada",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059959,
          "longitude": 19.937578
        },
        "createdAt": "2012-12-01T13:06:26.120Z",
        "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
        "order": 50,
        "objectId": "RS9V21TenK",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-02-28T22:11:06.452Z",
      "icon": "clock",
      "order": 30,
      "value": "MON-SUN|12:00-23:00",
      "updatedAt": "2015-09-01T09:58:29.877Z",
      "objectId": "DMqMBoS9IS"
    },
    {
      "icon": "envelope",
      "title": "Contact email",
      "type": "email",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "39izZUdjlg"
      },
      "order": 30,
      "value": "hist.museum@baden.ag.ch",
      "createdAt": "2015-10-07T09:43:42.073Z",
      "updatedAt": "2015-10-07T11:38:08.839Z",
      "objectId": "DSpIpYRj6k"
    },
    {
      "icon": "pedestrian",
      "spot": {
        "type": "shopping",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "address": "Ul. Podgórska 34",
        "name": "Galeria Kazimierz",
        "info": "Galeria Kaziemierz shopping mall is located on the west bank of the Vistula river, just 15 minutes walk from the Krakow’s Old Town.Galeria Kazimierz houses more than 130 shops  and service points. It is a popular place for entertainment thanks to the Cinema City. Customers can also enjoy the food court with many restaurants and cafes.",
        "createdAt": "2012-12-01T13:20:58.525Z",
        "updatedAt": "2013-03-24T18:23:26.208Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052675,
          "longitude": 19.956529
        },
        "objectId": "oVgSX18SuH",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "value": "1400",
      "updatedAt": "2015-09-01T09:31:21.336Z",
      "createdAt": "2013-03-24T18:46:05.228Z",
      "type": "distance",
      "order": 0,
      "objectId": "DisGRvy3o9"
    },
    {
      "order": 30,
      "createdAt": "2013-02-28T22:17:19.802Z",
      "icon": "clock",
      "updatedAt": "2015-09-01T09:58:26.805Z",
      "title": "Opening|hours",
      "value": "MON-SUN|12:00-23:00",
      "type": "open",
      "spot": {
        "name": "Miód Malina",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058205,
          "longitude": 19.938447
        },
        "type": "restaurant",
        "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
        "createdAt": "2012-12-01T13:06:27.068Z",
        "updatedAt": "2013-02-28T20:33:54.615Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 60,
        "address": "Ul. Grodzka 40",
        "objectId": "XYUuQv8NkK",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "DwEojdMjZm"
    },
    {
      "value": "restauracja@kawaleria.com.pl",
      "icon": "envelope",
      "order": 50,
      "spot": {
        "createdAt": "2015-05-08T08:51:38.429Z",
        "name": "Kawaleria",
        "type": "restaurant",
        "order": 16,
        "info": "The Kawaleria Restaurant is  which refer to tradition of polish cavalry. The original interior design, wherein old Poland and its customs seems to be still alive certainly will be interesting for all of our guests. The restaurant offers three dining rooms. The seasonal garden illuminated with candles, immersed in the green is an ideal place for a romantic dinner.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060217,
          "longitude": 19.935414
        },
        "updatedAt": "2015-05-08T08:54:50.961Z",
        "address": "Ul. Gołębia 4",
        "objectId": "g9l8Z2oPGB",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2015-05-08T09:11:13.167Z",
      "type": "email",
      "title": "Contact email",
      "updatedAt": "2015-09-01T09:51:17.280Z",
      "objectId": "DwbYzpvNY8"
    },
    {
      "type": "url",
      "title": "Website",
      "icon": "globe",
      "order": 40,
      "updatedAt": "2015-10-13T09:45:45.187Z",
      "createdAt": "2015-10-07T09:43:48.552Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "P4T8ivnmoG"
      },
      "value": "http://www.langmatt.ch/en/",
      "objectId": "E891bX8CQz"
    },
    {
      "createdAt": "2013-03-02T20:52:05.746Z",
      "updatedAt": "2015-09-01T09:54:01.233Z",
      "order": 20,
      "type": "price",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Dinner price",
      "icon": "money",
      "value": "15-68|2",
      "objectId": "Ee7xx7TZOg"
    },
    {
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "distance",
      "value": "50",
      "updatedAt": "2015-09-01T09:31:58.121Z",
      "icon": "pedestrian",
      "title": "Distance|from office",
      "createdAt": "2012-07-06T20:27:09.491Z",
      "order": 0,
      "objectId": "F2h8MENXVg"
    },
    {
      "icon": "pedestrian",
      "type": "distance",
      "order": 0,
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:36.188Z",
      "value": "720",
      "spot": {
        "createdAt": "2012-12-01T13:06:30.489Z",
        "updatedAt": "2013-02-28T20:34:42.236Z",
        "address": "Ul. Kanonicza 7",
        "name": "La Campana",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057056,
          "longitude": 19.937503
        },
        "type": "restaurant",
        "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
        "order": 90,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "sMV6ZIMrXR",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-02T20:56:33.919Z",
      "objectId": "FAqq5LvfcY"
    },
    {
      "createdAt": "2013-01-22T15:13:44.099Z",
      "updatedAt": "2013-03-20T21:21:11.247Z",
      "value": "+48 12 431 90 30",
      "order": 40,
      "title": "+48 12 431 90 30",
      "type": "phone",
      "spot": {
        "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
        "updatedAt": "2013-01-21T15:45:14.302Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Grodek",
        "type": "hotel",
        "address": "Ul. Na Grodku 4",
        "order": 30,
        "createdAt": "2012-10-15T11:37:07.849Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060813,
          "longitude": 19.942497
        },
        "objectId": "8Zp5it8WW3",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "objectId": "FkhlqKeOuO"
    },
    {
      "type": "phone",
      "createdAt": "2013-03-02T20:56:37.733Z",
      "icon": "phone",
      "title": "+48 12 430 22 32",
      "spot": {
        "createdAt": "2012-12-01T13:06:30.489Z",
        "updatedAt": "2013-02-28T20:34:42.236Z",
        "address": "Ul. Kanonicza 7",
        "name": "La Campana",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057056,
          "longitude": 19.937503
        },
        "type": "restaurant",
        "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
        "order": 90,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "sMV6ZIMrXR",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2013-03-02T20:59:37.936Z",
      "value": "+48 12 430 22 32",
      "order": 40,
      "objectId": "GCNFaqeI2v"
    },
    {
      "type": "open",
      "updatedAt": "2015-09-01T09:58:23.734Z",
      "value": "MON-SUN|12:00-23:00",
      "createdAt": "2013-02-28T22:27:09.013Z",
      "order": 30,
      "title": "Opening|hours",
      "spot": {
        "address": "Ul. Stolarska 13",
        "updatedAt": "2013-02-28T20:34:10.863Z",
        "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
        "name": "Pimiento",
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:28.230Z",
        "order": 70,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059791,
          "longitude": 19.938757
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "SL9huVbKje",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "clock",
      "objectId": "GJHvuh5uGU"
    },
    {
      "type": "food",
      "order": 10,
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061184,
          "longitude": 19.938356
        },
        "info": "The Szara Restaurant is located in the house of the same name (The Grey House) at the Market Square.  Our cuisine specializes in European dishes, and we need to mention our deliciously cooked fish (salmon and pikeperch) and our famous fish soup, as well as sirloin served in various ways (e.g. tournedos or planksteak), not to mention our veal (medallion or schnitzel) which cannot be matched by anyone else.",
        "type": "restaurant",
        "address": "Ul. Rynek Główny 6",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Szara",
        "createdAt": "2015-05-08T08:51:34.031Z",
        "updatedAt": "2015-05-08T08:54:28.812Z",
        "order": 13,
        "objectId": "Rtm5XqoTJx",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2015-05-08T09:03:58.304Z",
      "updatedAt": "2015-09-01T09:56:34.558Z",
      "value": "European",
      "title": "Cuisine",
      "icon": "cutlery",
      "objectId": "GL5abOhUpE"
    },
    {
      "createdAt": "2013-01-24T14:47:25.604Z",
      "updatedAt": "2013-01-24T14:49:16.018Z",
      "type": "distance",
      "value": "850",
      "spot": {
        "name": "Bank BPS",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050291,
          "longitude": 19.944026
        },
        "updatedAt": "2013-03-20T10:28:35.496Z",
        "address": "Ul. Bożego Ciała 23",
        "type": "atm",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T12:38:15.200Z",
        "order": 70,
        "objectId": "ZRzg8HTd6c",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "objectId": "GeYVtxmBQA"
    },
    {
      "createdAt": "2013-03-14T14:49:19.473Z",
      "spot": {
        "updatedAt": "2013-03-14T14:28:45.026Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054184,
          "longitude": 19.936296
        },
        "createdAt": "2012-07-30T11:13:05.840Z",
        "name": "Wawel Royal Castle",
        "address": "Ul. Wawel 5",
        "order": 10,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The beginnings of the residence of Polish rulers on Wawel hill go back to an early Romanesque stone building from mid 11th century, called the palatium, whose remains are located in the northern wing of the present-day Castle. In time, the prince's residence on the hill was expanded eastwards. Along with the cathedral it was called \"the Upper Castle\", while \"the Lower Castle\" was a settlement consisting of courtiers' and clergy's houses and churches other than the cathedral.",
        "type": "sight",
        "objectId": "4XTRiLs5cc",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "1300",
      "order": 0,
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:31.931Z",
      "type": "distance",
      "icon": "pedestrian",
      "objectId": "GshwgcUCpJ"
    },
    {
      "value": "1800",
      "order": 0,
      "updatedAt": "2015-09-01T09:31:50.893Z",
      "spot": {
        "name": "Park Inn",
        "type": "hotel",
        "createdAt": "2012-10-15T11:38:27.488Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04762,
          "longitude": 19.92969
        },
        "address": "Ul. Monte Cassino 2",
        "updatedAt": "2013-01-21T16:13:18.730Z",
        "order": 70,
        "objectId": "uwzD7OhpiY",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-04T14:02:14.237Z",
      "type": "distance",
      "icon": "pedestrian",
      "title": "Distance|from office",
      "objectId": "H6UCOuPeTb"
    },
    {
      "updatedAt": "2015-09-01T09:54:08.389Z",
      "spot": {
        "name": "Park Inn",
        "type": "hotel",
        "createdAt": "2012-10-15T11:38:27.488Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04762,
          "longitude": 19.92969
        },
        "address": "Ul. Monte Cassino 2",
        "updatedAt": "2013-01-21T16:13:18.730Z",
        "order": 70,
        "objectId": "uwzD7OhpiY",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Price",
      "createdAt": "2013-01-04T14:18:49.079Z",
      "type": "price",
      "order": 20,
      "value": "380",
      "icon": "money",
      "objectId": "HE4pv1fW8a"
    },
    {
      "value": "25-100|3",
      "order": 20,
      "title": "Dinner price",
      "spot": {
        "address": "Ul. Stolarska 13",
        "updatedAt": "2013-02-28T20:34:10.863Z",
        "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
        "name": "Pimiento",
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:28.230Z",
        "order": 70,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059791,
          "longitude": 19.938757
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "SL9huVbKje",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "money",
      "createdAt": "2013-02-28T22:27:08.108Z",
      "updatedAt": "2015-09-01T09:54:01.924Z",
      "type": "price",
      "objectId": "Hb8FcNyEzf"
    },
    {
      "order": 50,
      "value": "rsva@hik.krakow.pl",
      "spot": {
        "name": "Holiday Inn",
        "type": "hotel",
        "updatedAt": "2013-01-21T15:44:35.054Z",
        "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
        "createdAt": "2012-10-15T11:34:27.379Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 0,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.0592,
          "longitude": 19.943626
        },
        "address": "Ul. Wielopole 4",
        "objectId": "hLzmXeDV1d",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Contact email",
      "createdAt": "2012-10-15T11:52:18.311Z",
      "icon": "envelope",
      "updatedAt": "2015-09-01T09:51:49.076Z",
      "type": "email",
      "objectId": "Ilb2L7UNOA"
    },
    {
      "createdAt": "2015-10-07T09:43:40.263Z",
      "updatedAt": "2015-10-07T11:37:52.282Z",
      "title": "Opening|hours",
      "type": "open",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "39izZUdjlg"
      },
      "order": 10,
      "value": "TUE-FRI 13-17|SAT-SUN 10-17",
      "icon": "clock",
      "objectId": "IsVnxZhCqW"
    },
    {
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "distance",
      "value": "960",
      "createdAt": "2013-03-02T20:52:03.565Z",
      "icon": "pedestrian",
      "title": "Distance|from office",
      "order": 0,
      "updatedAt": "2015-09-01T09:31:37.427Z",
      "objectId": "JUo8lx05E7"
    },
    {
      "order": 20,
      "title": "Opening|hours",
      "updatedAt": "2015-10-07T12:18:06.679Z",
      "value": "11:30 - 00:00",
      "icon": "clock",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "R4KxyrH1fj"
      },
      "type": "open",
      "createdAt": "2015-10-07T12:16:29.733Z",
      "objectId": "JaJyt18xXA"
    },
    {
      "title": "Opening|hours",
      "createdAt": "2013-03-02T20:52:06.661Z",
      "type": "open",
      "updatedAt": "2015-09-01T09:58:21.201Z",
      "icon": "clock",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "MON-SUN|12:00-24:00",
      "order": 30,
      "objectId": "Jjb8pRGYcF"
    },
    {
      "type": "url",
      "updatedAt": "2015-09-01T09:56:10.865Z",
      "value": "http://www.donimirski.com/en/hotel-grodek",
      "icon": "globe",
      "spot": {
        "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
        "updatedAt": "2013-01-21T15:45:14.302Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Grodek",
        "type": "hotel",
        "address": "Ul. Na Grodku 4",
        "order": 30,
        "createdAt": "2012-10-15T11:37:07.849Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060813,
          "longitude": 19.942497
        },
        "objectId": "8Zp5it8WW3",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-22T15:32:58.485Z",
      "title": "Website",
      "order": 60,
      "objectId": "K053rsdD27"
    },
    {
      "value": "home@bluecityhotel.ch ",
      "icon": "envelope",
      "updatedAt": "2015-10-07T12:31:31.833Z",
      "title": "Contact email",
      "type": "email",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "L3y60tTqcm"
      },
      "order": 30,
      "createdAt": "2015-10-07T12:28:53.039Z",
      "objectId": "K47QSViORS"
    },
    {
      "value": "487",
      "order": 20,
      "title": "Price",
      "spot": {
        "address": "Ul. Pawia 3",
        "name": "Andels",
        "createdAt": "2012-10-15T11:39:34.972Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.065652,
          "longitude": 19.945267
        },
        "type": "hotel",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-01-21T15:45:34.714Z",
        "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
        "objectId": "VBWkPaq5G7",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "price",
      "createdAt": "2013-01-04T14:19:01.172Z",
      "updatedAt": "2015-09-01T09:54:06.168Z",
      "icon": "money",
      "objectId": "KMiH3q2LAC"
    },
    {
      "order": 0,
      "type": "url",
      "title": "Website",
      "icon": "globe",
      "value": "http://www.baden.ch/documents/Ruine_Stein.pdf",
      "createdAt": "2015-10-07T09:43:49.709Z",
      "updatedAt": "2015-10-07T11:39:43.982Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "srYbx73jaA"
      },
      "objectId": "KXDzAQRaRC"
    },
    {
      "spot": {
        "type": "sight",
        "info": "The showrooms of the Main Building host temporary exhibitions presenting – in keeping with the Museum’s mission – works drawn from internal holdings as well as objects on loan from other institutions or private collectors.",
        "updatedAt": "2013-03-24T20:54:35.758Z",
        "address": "Al. 3 Maja 1",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060075,
          "longitude": 19.92377
        },
        "order": 70,
        "createdAt": "2012-12-01T13:33:48.407Z",
        "name": "National Museum",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "eh3pUJxZcs",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 30,
      "createdAt": "2013-03-17T09:52:31.902Z",
      "updatedAt": "2013-03-17T09:56:10.331Z",
      "icon": "phone",
      "title": "+48 12 295 55 55",
      "type": "phone",
      "value": "+48 12 295 55 55",
      "objectId": "KerFOfeL4m"
    },
    {
      "updatedAt": "2015-09-01T09:54:02.545Z",
      "title": "Dinner price",
      "createdAt": "2013-02-28T22:17:18.848Z",
      "order": 20,
      "spot": {
        "name": "Miód Malina",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058205,
          "longitude": 19.938447
        },
        "type": "restaurant",
        "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
        "createdAt": "2012-12-01T13:06:27.068Z",
        "updatedAt": "2013-02-28T20:33:54.615Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 60,
        "address": "Ul. Grodzka 40",
        "objectId": "XYUuQv8NkK",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "price",
      "value": "10-60|1",
      "icon": "money",
      "objectId": "Km7xqznGx3"
    },
    {
      "updatedAt": "2015-09-01T09:54:11.667Z",
      "value": "250",
      "type": "price",
      "spot": {
        "updatedAt": "2013-01-21T15:45:13.833Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057604,
          "longitude": 19.943457
        },
        "name": "Pugetów",
        "order": 20,
        "type": "hotel",
        "createdAt": "2012-10-15T11:36:32.820Z",
        "address": "Ul. Starowiślna 15a",
        "info": "Hotel Pugetów is located right in the center od Kraków, between the Market Square and Kazimierz. The quiet courtyard and parking available at a guarded parking lot - these things are hard to come by in the centre of a city. Hotel is located just next to ABB office.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "fdyf0Ldm37",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Price",
      "createdAt": "2013-01-04T14:18:31.240Z",
      "icon": "money",
      "order": 20,
      "objectId": "L5ZEfcKldl"
    },
    {
      "value": "150",
      "spot": {
        "createdAt": "2012-12-01T11:39:53.352Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057345,
          "longitude": 19.944413
        },
        "type": "atm",
        "updatedAt": "2013-01-24T14:45:30.924Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Euronet",
        "order": 20,
        "address": "Ul. Starowiślna 21",
        "objectId": "8ExElVYQIa",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "type": "distance",
      "createdAt": "2013-01-24T14:47:20.120Z",
      "updatedAt": "2013-01-24T14:48:15.695Z",
      "objectId": "L9qSATYTrd"
    },
    {
      "createdAt": "2013-02-28T22:11:05.822Z",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "address": "Ul. Grodzka 5",
        "updatedAt": "2013-02-28T20:33:40.287Z",
        "name": "Marmolada",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059959,
          "longitude": 19.937578
        },
        "createdAt": "2012-12-01T13:06:26.120Z",
        "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
        "order": 50,
        "objectId": "RS9V21TenK",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:54:03.245Z",
      "type": "price",
      "icon": "money",
      "title": "Dinner price",
      "value": "15-55|1",
      "order": 20,
      "objectId": "LROIoOkrqp"
    },
    {
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "gkr5n1kBrg"
      },
      "updatedAt": "2015-10-12T09:04:03.157Z",
      "type": "price",
      "icon": "money",
      "order": 10,
      "createdAt": "2015-10-07T12:25:42.084Z",
      "value": "160",
      "title": "Price",
      "objectId": "LbDLfIp430"
    },
    {
      "title": "+48 12 422 74 60",
      "icon": "phone",
      "createdAt": "2013-02-28T22:04:49.207Z",
      "spot": {
        "address": "Rynek Główny 10",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Wesele",
        "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060708,
          "longitude": 19.937957
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:24.949Z",
        "updatedAt": "2013-03-24T20:53:25.776Z",
        "objectId": "TtWjyelace",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2013-02-28T22:07:41.687Z",
      "type": "phone",
      "value": "+48 12 422 74 60",
      "order": 40,
      "objectId": "LgLVThU14G"
    },
    {
      "value": "Japanese",
      "updatedAt": "2015-09-01T09:56:37.379Z",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.045855,
          "longitude": 19.94909
        },
        "address": "Ul. Józefińska 4",
        "order": 110,
        "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
        "name": "Kura",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:31.428Z",
        "updatedAt": "2013-03-02T21:08:17.193Z",
        "objectId": "omLMbTRPgC",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "cutlery",
      "title": "Cuisine",
      "order": 10,
      "type": "food",
      "createdAt": "2013-03-02T21:02:11.811Z",
      "objectId": "Lvpx80IBoe"
    },
    {
      "createdAt": "2015-10-07T12:06:20.410Z",
      "type": "email",
      "value": "info@bluecityhotel.ch",
      "title": "Contact email",
      "order": 40,
      "updatedAt": "2015-10-07T12:16:02.540Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "y55Ua6eDXQ"
      },
      "icon": "envelope",
      "objectId": "M1M1Jy6qoG"
    },
    {
      "createdAt": "2015-10-07T11:19:06.617Z",
      "title": "Contact email",
      "value": "kontakt@abb-wfs.ch",
      "order": 10,
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "avuCzZXLhF"
      },
      "icon": "envelope",
      "updatedAt": "2015-10-07T11:38:49.051Z",
      "type": "email",
      "objectId": "M64Szpgv6p"
    },
    {
      "type": "distance",
      "spot": {
        "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
        "updatedAt": "2013-01-21T15:45:14.302Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Grodek",
        "type": "hotel",
        "address": "Ul. Na Grodku 4",
        "order": 30,
        "createdAt": "2012-10-15T11:37:07.849Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060813,
          "longitude": 19.942497
        },
        "objectId": "8Zp5it8WW3",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:31:52.502Z",
      "title": "Distance|from office",
      "createdAt": "2013-01-04T14:02:02.577Z",
      "order": 0,
      "icon": "pedestrian",
      "value": "350",
      "objectId": "M6LBZaO5nl"
    },
    {
      "type": "url",
      "createdAt": "2013-03-17T09:11:50.141Z",
      "spot": {
        "type": "sight",
        "address": "Rynek Główny 1",
        "name": "Rynek Underground",
        "createdAt": "2013-03-14T14:25:59.215Z",
        "updatedAt": "2013-03-14T14:28:29.143Z",
        "info": "The underground museum is the first of its kind in Poland, and unique on a global scale too. The ‘In the Footsteps of Krakow’s European Identity’  exhibition is a multimedia show as well as a journey through time – allowing visitors to not only see the history of the origins of the legendary city, but also to touch them! In the archaeological park located 4 metres below the surface of Krakow’s Market Square, we can see a section of medieval Krakow come alive, something as yet unprecedented in Europe. ",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 30,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061671,
          "longitude": 19.937439
        },
        "objectId": "uih4zpxeWk",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "globe",
      "order": 50,
      "value": "http://www.podziemiarynku.com/index.php?lang=eng",
      "title": "Website",
      "updatedAt": "2015-09-01T09:55:55.546Z",
      "objectId": "MKW7WZRQSo"
    },
    {
      "updatedAt": "2013-03-20T21:19:59.016Z",
      "icon": "phone",
      "value": "+48 12 619 00 00",
      "createdAt": "2012-10-15T11:52:19.566Z",
      "order": 40,
      "spot": {
        "name": "Holiday Inn",
        "type": "hotel",
        "updatedAt": "2013-01-21T15:44:35.054Z",
        "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
        "createdAt": "2012-10-15T11:34:27.379Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 0,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.0592,
          "longitude": 19.943626
        },
        "address": "Ul. Wielopole 4",
        "objectId": "hLzmXeDV1d",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "phone",
      "title": "+48 12 619 00 00",
      "objectId": "MY1FEkbaYj"
    },
    {
      "icon": "pedestrian",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "address": "Ul. Grodzka 5",
        "updatedAt": "2013-02-28T20:33:40.287Z",
        "name": "Marmolada",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059959,
          "longitude": 19.937578
        },
        "createdAt": "2012-12-01T13:06:26.120Z",
        "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
        "order": 50,
        "objectId": "RS9V21TenK",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "680",
      "updatedAt": "2015-09-01T09:31:46.553Z",
      "createdAt": "2013-02-28T22:11:03.449Z",
      "order": 0,
      "title": "Distance|from office",
      "type": "distance",
      "objectId": "Mh9SYbXNcJ"
    },
    {
      "createdAt": "2013-03-17T09:27:48.422Z",
      "icon": "pedestrian",
      "updatedAt": "2015-09-01T09:31:29.263Z",
      "order": 0,
      "value": "3900",
      "type": "distance",
      "spot": {
        "order": 50,
        "updatedAt": "2013-03-24T20:54:33.126Z",
        "address": "Al. Waszyngtona 1",
        "info": "The Kosciuszko Mound was raised in 1820-1823 to commemorate the Polish national hero Tadeusz Kosciuszko. In 1850-1854, under the partitions, the Austrian authorities erected a fortress around the Mound. Nowadays, the restored fortress contains a hotel, the radio station headquarters and two permanent exhibitions. The top of the Mound affords a vast panorama of Krakow and the surrounding area.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054922,
          "longitude": 19.89458
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:33:49.701Z",
        "type": "sight",
        "name": "Kościuszko Mound",
        "objectId": "1N5VuGOJmq",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "objectId": "MlEms4TBz2"
    },
    {
      "createdAt": "2013-03-17T09:11:46.324Z",
      "spot": {
        "type": "sight",
        "address": "Rynek Główny 1",
        "name": "Rynek Underground",
        "createdAt": "2013-03-14T14:25:59.215Z",
        "updatedAt": "2013-03-14T14:28:29.143Z",
        "info": "The underground museum is the first of its kind in Poland, and unique on a global scale too. The ‘In the Footsteps of Krakow’s European Identity’  exhibition is a multimedia show as well as a journey through time – allowing visitors to not only see the history of the origins of the legendary city, but also to touch them! In the archaeological park located 4 metres below the surface of Krakow’s Market Square, we can see a section of medieval Krakow come alive, something as yet unprecedented in Europe. ",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 30,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061671,
          "longitude": 19.937439
        },
        "objectId": "uih4zpxeWk",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "type": "open",
      "value": "MON, WED-SUN|10:00-22:00",
      "updatedAt": "2015-09-01T09:58:15.812Z",
      "icon": "clock",
      "order": 10,
      "objectId": "MxCPl40vzk"
    },
    {
      "icon": "envelope",
      "order": 50,
      "createdAt": "2013-02-28T20:56:26.897Z",
      "type": "email",
      "spot": {
        "updatedAt": "2013-02-28T20:30:25.566Z",
        "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060643,
          "longitude": 19.940241
        },
        "order": 20,
        "createdAt": "2012-12-01T13:06:17.978Z",
        "address": "Ul. Sienna 9",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Aperitif",
        "type": "restaurant",
        "objectId": "7DAxfA3Wgc",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:51:35.468Z",
      "title": "Contact email",
      "value": "restauracja@aperitif.com.pl",
      "objectId": "NKxgbviVXS"
    },
    {
      "value": "info@kopieckosciuszki.pl",
      "title": "Contact email",
      "order": 40,
      "updatedAt": "2015-09-01T09:51:24.229Z",
      "spot": {
        "order": 50,
        "updatedAt": "2013-03-24T20:54:33.126Z",
        "address": "Al. Waszyngtona 1",
        "info": "The Kosciuszko Mound was raised in 1820-1823 to commemorate the Polish national hero Tadeusz Kosciuszko. In 1850-1854, under the partitions, the Austrian authorities erected a fortress around the Mound. Nowadays, the restored fortress contains a hotel, the radio station headquarters and two permanent exhibitions. The top of the Mound affords a vast panorama of Krakow and the surrounding area.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054922,
          "longitude": 19.89458
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:33:49.701Z",
        "type": "sight",
        "name": "Kościuszko Mound",
        "objectId": "1N5VuGOJmq",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-17T09:27:53.417Z",
      "icon": "envelope",
      "type": "email",
      "objectId": "NYXLajpubP"
    },
    {
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "R4KxyrH1fj"
      },
      "icon": "phone",
      "type": "phone",
      "value": "+41 56 222 63 40",
      "order": 30,
      "updatedAt": "2015-10-07T12:18:04.745Z",
      "title": "+41 56 222 63 40",
      "createdAt": "2015-10-07T12:16:30.396Z",
      "objectId": "NZj4awaL7i"
    },
    {
      "order": 10,
      "icon": "clock",
      "updatedAt": "2015-10-07T11:39:08.903Z",
      "value": "SAT,SUN 11-17|TUE-FRI 14-17 ",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "P4T8ivnmoG"
      },
      "title": "Opening|hours",
      "createdAt": "2015-10-07T09:43:45.198Z",
      "type": "open",
      "objectId": "Nfy3wq9nuc"
    },
    {
      "type": "open",
      "value": "MON-SUN|9:00-24:00",
      "createdAt": "2013-03-17T09:27:50.608Z",
      "updatedAt": "2015-09-01T09:58:15.082Z",
      "icon": "clock",
      "spot": {
        "order": 50,
        "updatedAt": "2013-03-24T20:54:33.126Z",
        "address": "Al. Waszyngtona 1",
        "info": "The Kosciuszko Mound was raised in 1820-1823 to commemorate the Polish national hero Tadeusz Kosciuszko. In 1850-1854, under the partitions, the Austrian authorities erected a fortress around the Mound. Nowadays, the restored fortress contains a hotel, the radio station headquarters and two permanent exhibitions. The top of the Mound affords a vast panorama of Krakow and the surrounding area.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054922,
          "longitude": 19.89458
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:33:49.701Z",
        "type": "sight",
        "name": "Kościuszko Mound",
        "objectId": "1N5VuGOJmq",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 10,
      "title": "Opening|hours",
      "objectId": "ONSNXQVfs4"
    },
    {
      "value": "http://www.edofusion.pl/en/edo-fusion.html",
      "title": "Website",
      "type": "url",
      "order": 60,
      "updatedAt": "2015-09-01T09:55:58.161Z",
      "spot": {
        "type": "restaurant",
        "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
        "createdAt": "2012-12-01T13:06:33.571Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052069,
          "longitude": 19.942889
        },
        "address": "Ul. Miodowa 8",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Edo Fusion",
        "updatedAt": "2013-02-28T20:35:26.511Z",
        "order": 130,
        "objectId": "YCRIB7mewu",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "globe",
      "createdAt": "2013-03-02T21:14:37.413Z",
      "objectId": "ObZpTVYPTb"
    },
    {
      "createdAt": "2013-01-04T13:52:53.944Z",
      "updatedAt": "2015-09-03T07:56:37.072Z",
      "spot": {
        "address": "Ul. Pawia 3",
        "name": "Andels",
        "createdAt": "2012-10-15T11:39:34.972Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.065652,
          "longitude": 19.945267
        },
        "type": "hotel",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-01-21T15:45:34.714Z",
        "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
        "objectId": "VBWkPaq5G7",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "category",
      "order": 10,
      "title": "Category",
      "icon": "star",
      "value": "4",
      "objectId": "OyPTwYmspf"
    },
    {
      "order": 20,
      "createdAt": "2013-03-02T21:08:58.730Z",
      "title": "Dinner price",
      "spot": {
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:32.489Z",
        "info": "The ancient name of Tokyo—Edo —adorns Edo Sushi, located in Krakow's historic Kazimierz. The sushi masters at Edo have arranged the menu in convenient \"sets\" that include well matched selections from the menu’s wide range.",
        "address": "Ul. Bożego Ciała 3",
        "name": "Edo Sushi Bar",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-02-28T20:35:13.879Z",
        "order": 120,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052138,
          "longitude": 19.942889
        },
        "objectId": "dZWI2J6dRb",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "11-109|3",
      "updatedAt": "2015-09-01T09:53:58.640Z",
      "icon": "money",
      "type": "price",
      "objectId": "PBdMA5lKGE"
    },
    {
      "icon": "cutlery",
      "title": "Cuisine",
      "createdAt": "2015-10-07T12:16:23.711Z",
      "updatedAt": "2015-10-07T12:18:10.487Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "R4KxyrH1fj"
      },
      "type": "food",
      "order": 0,
      "value": "English",
      "objectId": "PnXrKqoks5"
    },
    {
      "order": 0,
      "createdAt": "2013-03-17T09:02:25.636Z",
      "title": "Distance|from office",
      "icon": "pedestrian",
      "updatedAt": "2015-09-01T09:31:31.111Z",
      "spot": {
        "type": "sight",
        "address": "Rynek główny",
        "name": "Church of the St. Mary",
        "order": 20,
        "createdAt": "2012-12-01T13:33:52.133Z",
        "updatedAt": "2013-03-17T09:37:57.003Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061664,
          "longitude": 19.939188
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "St. Mary's church is a Brick Gothic church re-built in the 14th century, adjacent to the Main Market Square. On every hour, a trumpet signal—called the Hejnał Mariacki—is played from the top of the taller of St. Mary's two towers.",
        "objectId": "RdsfxB5czr",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "550",
      "type": "distance",
      "objectId": "Q6aYdE73XY"
    },
    {
      "updatedAt": "2015-10-12T09:03:50.463Z",
      "order": 10,
      "type": "price",
      "value": "175 ",
      "createdAt": "2015-10-07T12:28:50.364Z",
      "title": "Price",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "L3y60tTqcm"
      },
      "icon": "money",
      "objectId": "QKZA3RmeVX"
    },
    {
      "type": "email",
      "createdAt": "2013-03-17T09:11:49.325Z",
      "updatedAt": "2015-09-01T09:51:25.066Z",
      "icon": "envelope",
      "order": 40,
      "value": "info@mhk.pl",
      "spot": {
        "type": "sight",
        "address": "Rynek Główny 1",
        "name": "Rynek Underground",
        "createdAt": "2013-03-14T14:25:59.215Z",
        "updatedAt": "2013-03-14T14:28:29.143Z",
        "info": "The underground museum is the first of its kind in Poland, and unique on a global scale too. The ‘In the Footsteps of Krakow’s European Identity’  exhibition is a multimedia show as well as a journey through time – allowing visitors to not only see the history of the origins of the legendary city, but also to touch them! In the archaeological park located 4 metres below the surface of Krakow’s Market Square, we can see a section of medieval Krakow come alive, something as yet unprecedented in Europe. ",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 30,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061671,
          "longitude": 19.937439
        },
        "objectId": "uih4zpxeWk",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Contact email",
      "objectId": "QMaTzRPYzP"
    },
    {
      "createdAt": "2013-02-28T22:27:07.148Z",
      "updatedAt": "2015-09-01T09:56:39.668Z",
      "order": 10,
      "title": "Cuisine",
      "value": "Argentinian",
      "icon": "cutlery",
      "type": "food",
      "spot": {
        "address": "Ul. Stolarska 13",
        "updatedAt": "2013-02-28T20:34:10.863Z",
        "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
        "name": "Pimiento",
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:28.230Z",
        "order": 70,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059791,
          "longitude": 19.938757
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "SL9huVbKje",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "QgMwCMxSOy"
    },
    {
      "value": "+48 12 424 46 03",
      "createdAt": "2013-03-17T09:40:14.934Z",
      "updatedAt": "2013-03-17T09:44:12.122Z",
      "spot": {
        "address": "Sukiennice",
        "order": 60,
        "type": "sight",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-03-17T09:48:38.800Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061668,
          "longitude": 19.937458
        },
        "createdAt": "2012-12-01T13:33:41.160Z",
        "info": "The Sukiennice, a huge market hall built in the 13th century in the middle of Rynek Główny (Main Square), enlarged in the 14th century in the Gothic style and remodelled in the mid-16th century after Renaissance fashion, was restored in 1875–1879 and became the city’s showpiece facility hosting grand balls and patriotic celebrations. Its location and character made the rooms on the first floor of the Sukiennice a perfect place for the National Museum in Krakow.",
        "name": "Sukiennice Gallery",
        "objectId": "r0KNe06MgN",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 30,
      "title": "+48 12 424 46 03",
      "type": "phone",
      "icon": "phone",
      "objectId": "Qz7Pjv5b9C"
    },
    {
      "title": "Dinner price",
      "type": "price",
      "createdAt": "2013-02-28T22:04:46.838Z",
      "updatedAt": "2015-09-01T09:54:04.142Z",
      "order": 20,
      "value": "15-70|2",
      "spot": {
        "address": "Rynek Główny 10",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Wesele",
        "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060708,
          "longitude": 19.937957
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:24.949Z",
        "updatedAt": "2013-03-24T20:53:25.776Z",
        "objectId": "TtWjyelace",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "money",
      "objectId": "RHAYMb8J3p"
    },
    {
      "createdAt": "2013-01-22T15:24:44.047Z",
      "value": "krakow@qubushotel.com\n",
      "updatedAt": "2015-09-01T09:51:40.483Z",
      "title": "Contact email",
      "icon": "envelope",
      "spot": {
        "name": "Qubus",
        "order": 50,
        "type": "hotel",
        "address": "Ul. Nadwiślanska 6",
        "updatedAt": "2013-01-21T15:45:19.844Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04675,
          "longitude": 19.950331
        },
        "createdAt": "2012-10-15T11:37:41.395Z",
        "objectId": "DNd9Gfr2U7",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "email",
      "order": 50,
      "objectId": "RsDljjLY0F"
    },
    {
      "title": "+41 (0)56 200 86 70",
      "createdAt": "2015-10-07T09:43:47.665Z",
      "order": 20,
      "value": "+41 (0)56 200 86 70",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "P4T8ivnmoG"
      },
      "icon": "phone",
      "type": "phone",
      "updatedAt": "2015-10-07T11:39:13.998Z",
      "objectId": "RvniX4UHX7"
    },
    {
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "XXlqwj6XJR"
      },
      "title": "Website",
      "order": 50,
      "icon": "globe",
      "value": "http://www.hirschli.ch",
      "updatedAt": "2015-10-13T09:28:04.949Z",
      "createdAt": "2015-10-07T11:48:55.115Z",
      "type": "url",
      "objectId": "S5siSl9wIb"
    },
    {
      "type": "email",
      "updatedAt": "2015-10-07T11:39:41.062Z",
      "createdAt": "2015-10-07T09:53:39.853Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "5nOcDWSLHg"
      },
      "value": "info@baden.ag.ch",
      "order": 10,
      "title": "Contact email",
      "icon": "envelope",
      "objectId": "SbAhsdr8r6"
    },
    {
      "createdAt": "2013-03-02T20:56:35.963Z",
      "order": 20,
      "updatedAt": "2015-09-01T09:54:00.158Z",
      "title": "Dinner price",
      "spot": {
        "createdAt": "2012-12-01T13:06:30.489Z",
        "updatedAt": "2013-02-28T20:34:42.236Z",
        "address": "Ul. Kanonicza 7",
        "name": "La Campana",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057056,
          "longitude": 19.937503
        },
        "type": "restaurant",
        "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
        "order": 90,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "sMV6ZIMrXR",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "price",
      "icon": "money",
      "value": "16-67|2",
      "objectId": "SsYf0xzbgt"
    },
    {
      "type": "wifi",
      "icon": "wifi",
      "createdAt": "2013-01-04T14:21:53.428Z",
      "updatedAt": "2015-05-12T09:55:13.938Z",
      "order": 30,
      "spot": {
        "order": 10,
        "updatedAt": "2013-01-21T15:45:00.152Z",
        "address": "Ul. Wielopole 3",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
        "type": "hotel",
        "name": "Wielopole",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058906,
          "longitude": 19.943482
        },
        "createdAt": "2012-10-15T11:35:52.471Z",
        "objectId": "BcEzwnbk9J",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Free wireless Internet",
      "objectId": "T8otlz8bDX"
    },
    {
      "type": "open",
      "createdAt": "2013-03-24T18:39:55.949Z",
      "title": "Opening|hours",
      "updatedAt": "2015-09-01T09:58:11.185Z",
      "spot": {
        "name": "Pasaż 13",
        "updatedAt": "2013-05-06T13:39:05.273Z",
        "order": 30,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:20:57.478Z",
        "info": "Rynek 13 is definitely the most elegant shopping center in Krakow.Likus Concept Stores on the Krakow Main square – the idea for creating it came from the luxury shopping centers in New York and Milan. Old town houses have been transformed into an intimate shopping arcade. The renaissance style stairway, gothic vaulted ceilings, glass and cement, steal escalators and elevators co-exist here in harmony. LCS is a new way of shopping – elegant stores with brand named clothing, wine cellar with imported wines (mostly from Italy and over 200 types), superbly stocked Italian delicatessen, and a place to relax while shopping. The Long Bar offers a place to eat, drink a glass of wine or have a cup of real espresso.",
        "type": "shopping",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060381,
          "longitude": 19.937841
        },
        "address": "Rynek Główny 13",
        "objectId": "cqoz9xfQ5t",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 10,
      "value": "MON-SUN|11:00-21:00",
      "icon": "clock",
      "objectId": "TAmRIYKpmf"
    },
    {
      "title": "Distance|from office",
      "value": "350",
      "spot": {
        "updatedAt": "2013-02-28T20:30:25.566Z",
        "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060643,
          "longitude": 19.940241
        },
        "order": 20,
        "createdAt": "2012-12-01T13:06:17.978Z",
        "address": "Ul. Sienna 9",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Aperitif",
        "type": "restaurant",
        "objectId": "7DAxfA3Wgc",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "pedestrian",
      "order": 0,
      "createdAt": "2013-02-28T20:56:16.484Z",
      "updatedAt": "2015-09-01T09:31:48.573Z",
      "type": "distance",
      "objectId": "TRdTSrxrpE"
    },
    {
      "icon": "phone",
      "order": 20,
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "r4Lw9xWWYg"
      },
      "value": "+41 56 203 80 80",
      "updatedAt": "2015-10-07T12:25:05.798Z",
      "createdAt": "2015-10-07T12:19:59.526Z",
      "title": "+41 56 203 80 80",
      "type": "phone",
      "objectId": "Tkv7qO8K2C"
    },
    {
      "updatedAt": "2015-09-01T09:31:22.710Z",
      "icon": "pedestrian",
      "spot": {
        "name": "Pasaż 13",
        "updatedAt": "2013-05-06T13:39:05.273Z",
        "order": 30,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:20:57.478Z",
        "info": "Rynek 13 is definitely the most elegant shopping center in Krakow.Likus Concept Stores on the Krakow Main square – the idea for creating it came from the luxury shopping centers in New York and Milan. Old town houses have been transformed into an intimate shopping arcade. The renaissance style stairway, gothic vaulted ceilings, glass and cement, steal escalators and elevators co-exist here in harmony. LCS is a new way of shopping – elegant stores with brand named clothing, wine cellar with imported wines (mostly from Italy and over 200 types), superbly stocked Italian delicatessen, and a place to relax while shopping. The Long Bar offers a place to eat, drink a glass of wine or have a cup of real espresso.",
        "type": "shopping",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060381,
          "longitude": 19.937841
        },
        "address": "Rynek Główny 13",
        "objectId": "cqoz9xfQ5t",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-24T18:39:55.120Z",
      "value": "650",
      "order": 0,
      "type": "distance",
      "title": "Distance|from office",
      "objectId": "UFBA8rdWvq"
    },
    {
      "updatedAt": "2013-03-20T21:20:33.498Z",
      "order": 40,
      "createdAt": "2013-01-22T15:13:48.724Z",
      "spot": {
        "address": "Ul. Pawia 3",
        "name": "Andels",
        "createdAt": "2012-10-15T11:39:34.972Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.065652,
          "longitude": 19.945267
        },
        "type": "hotel",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-01-21T15:45:34.714Z",
        "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
        "objectId": "VBWkPaq5G7",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "+48 12 660 01 00",
      "value": "+48 12 660 01 00",
      "icon": "phone",
      "type": "phone",
      "objectId": "UJdSg24O1g"
    },
    {
      "spot": {
        "address": "Ul. Pawia 5",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Galeria Krakowska is the most prestigous shopping centre in Krakow. It offers 270 shops and is located in a 5 minutes walk distance from the Main Square.",
        "name": "Galeria Krakowska",
        "type": "shopping",
        "createdAt": "2012-12-01T13:20:54.852Z",
        "updatedAt": "2013-03-24T18:22:15.889Z",
        "order": 10,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.066836,
          "longitude": 19.945457
        },
        "objectId": "9hhFoHtz1i",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-03T14:45:29.888Z",
      "type": "phone",
      "value": "+48 12 428 99 00",
      "icon": "phone",
      "updatedAt": "2013-03-24T18:37:37.935Z",
      "title": "+48 12 428 99 00",
      "order": 20,
      "objectId": "UP93gi9h7k"
    },
    {
      "createdAt": "2013-03-24T18:42:09.293Z",
      "order": 40,
      "type": "email",
      "value": "k.kaczmarczyk@hotel.com.pl",
      "icon": "envelope",
      "title": "Contact email",
      "updatedAt": "2015-09-01T09:51:22.029Z",
      "spot": {
        "name": "Pasaż 13",
        "updatedAt": "2013-05-06T13:39:05.273Z",
        "order": 30,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:20:57.478Z",
        "info": "Rynek 13 is definitely the most elegant shopping center in Krakow.Likus Concept Stores on the Krakow Main square – the idea for creating it came from the luxury shopping centers in New York and Milan. Old town houses have been transformed into an intimate shopping arcade. The renaissance style stairway, gothic vaulted ceilings, glass and cement, steal escalators and elevators co-exist here in harmony. LCS is a new way of shopping – elegant stores with brand named clothing, wine cellar with imported wines (mostly from Italy and over 200 types), superbly stocked Italian delicatessen, and a place to relax while shopping. The Long Bar offers a place to eat, drink a glass of wine or have a cup of real espresso.",
        "type": "shopping",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060381,
          "longitude": 19.937841
        },
        "address": "Rynek Główny 13",
        "objectId": "cqoz9xfQ5t",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "Ue6qbUhKEy"
    },
    {
      "icon": "clock",
      "title": "Opening|hours",
      "createdAt": "2013-03-24T18:49:17.582Z",
      "value": "MON-SUN|10:00-20:00",
      "order": 10,
      "updatedAt": "2015-09-01T09:58:09.757Z",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Bonarka City Center is a contemporary representation of municipal streets and market places. Buildings are made of high-quality natural materials, such as stone, wood and glass. The selection of the facade materials refers to the industrial past of the area as well as traditional shopping arcades from the turn of the 19th and 20th century. The complex comprises 270 shops, 30 cafes and Cinema City. ",
        "address": "Ul. Kamieńskiego 11",
        "order": 50,
        "name": "Bonarka",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.028531,
          "longitude": 19.950213
        },
        "type": "shopping",
        "updatedAt": "2013-03-24T18:23:42.276Z",
        "createdAt": "2013-03-06T18:29:04.679Z",
        "objectId": "9D34sbFF4d",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "open",
      "objectId": "UjBn0GZmud"
    },
    {
      "createdAt": "2013-03-17T09:52:34.142Z",
      "updatedAt": "2015-09-01T09:51:22.811Z",
      "spot": {
        "type": "sight",
        "info": "The showrooms of the Main Building host temporary exhibitions presenting – in keeping with the Museum’s mission – works drawn from internal holdings as well as objects on loan from other institutions or private collectors.",
        "updatedAt": "2013-03-24T20:54:35.758Z",
        "address": "Al. 3 Maja 1",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060075,
          "longitude": 19.92377
        },
        "order": 70,
        "createdAt": "2012-12-01T13:33:48.407Z",
        "name": "National Museum",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "eh3pUJxZcs",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "dyrekcja@muzeum.krakow.pl",
      "title": "Contact email",
      "icon": "envelope",
      "order": 40,
      "type": "email",
      "objectId": "V3409zIhYl"
    },
    {
      "icon": "star",
      "createdAt": "2013-01-04T13:52:46.327Z",
      "spot": {
        "name": "Qubus",
        "order": 50,
        "type": "hotel",
        "address": "Ul. Nadwiślanska 6",
        "updatedAt": "2013-01-21T15:45:19.844Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04675,
          "longitude": 19.950331
        },
        "createdAt": "2012-10-15T11:37:41.395Z",
        "objectId": "DNd9Gfr2U7",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Category",
      "updatedAt": "2015-09-03T07:56:39.426Z",
      "order": 10,
      "type": "category",
      "value": "4",
      "objectId": "V77f0Gg6ED"
    },
    {
      "type": "distance",
      "icon": "pedestrian",
      "order": 0,
      "value": "100",
      "spot": {
        "createdAt": "2013-01-31T20:01:37.280Z",
        "type": "sight",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05991,
          "longitude": 19.94147
        },
        "address": "Ul. Sienna",
        "info": "Park of 30 varied gardens among old trees around Krakow's Old Town historical district. ",
        "name": "Planty Garden Ring",
        "updatedAt": "2013-03-17T10:18:38.943Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "BmJCScvc0V",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:31:26.265Z",
      "title": "Distance|from office",
      "createdAt": "2013-03-17T10:19:07.305Z",
      "objectId": "VBmVjN7mWC"
    },
    {
      "type": "phone",
      "icon": "phone",
      "value": "+48 12 433 01 01",
      "createdAt": "2013-03-24T18:46:07.088Z",
      "order": 30,
      "spot": {
        "type": "shopping",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "address": "Ul. Podgórska 34",
        "name": "Galeria Kazimierz",
        "info": "Galeria Kaziemierz shopping mall is located on the west bank of the Vistula river, just 15 minutes walk from the Krakow’s Old Town.Galeria Kazimierz houses more than 130 shops  and service points. It is a popular place for entertainment thanks to the Cinema City. Customers can also enjoy the food court with many restaurants and cafes.",
        "createdAt": "2012-12-01T13:20:58.525Z",
        "updatedAt": "2013-03-24T18:23:26.208Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052675,
          "longitude": 19.956529
        },
        "objectId": "oVgSX18SuH",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2013-03-24T18:48:12.474Z",
      "title": "+48 12 433 01 01",
      "objectId": "VFNpTae7Nm"
    },
    {
      "createdAt": "2013-03-02T20:52:04.718Z",
      "order": 10,
      "title": "Cuisine",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:56:38.899Z",
      "icon": "cutlery",
      "type": "food",
      "value": "Italian",
      "objectId": "VNzl4nt7Mz"
    },
    {
      "title": "Contact email",
      "updatedAt": "2015-10-07T12:18:02.120Z",
      "type": "email",
      "icon": "envelope",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "R4KxyrH1fj"
      },
      "createdAt": "2015-10-07T12:16:31.014Z",
      "order": 40,
      "value": "pwbn@tiscalinet.ch",
      "objectId": "VS8LbMiptL"
    },
    {
      "type": "phone",
      "value": "+48 12 375 55 55",
      "icon": "phone",
      "spot": {
        "name": "Park Inn",
        "type": "hotel",
        "createdAt": "2012-10-15T11:38:27.488Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04762,
          "longitude": 19.92969
        },
        "address": "Ul. Monte Cassino 2",
        "updatedAt": "2013-01-21T16:13:18.730Z",
        "order": 70,
        "objectId": "uwzD7OhpiY",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2013-03-20T21:20:57.652Z",
      "title": "+48 12 375 55 55",
      "createdAt": "2013-01-22T15:13:46.305Z",
      "order": 40,
      "objectId": "VngwC9Gir0"
    },
    {
      "updatedAt": "2015-09-01T09:54:10.358Z",
      "spot": {
        "name": "Qubus",
        "order": 50,
        "type": "hotel",
        "address": "Ul. Nadwiślanska 6",
        "updatedAt": "2013-01-21T15:45:19.844Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04675,
          "longitude": 19.950331
        },
        "createdAt": "2012-10-15T11:37:41.395Z",
        "objectId": "DNd9Gfr2U7",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-04T14:18:44.198Z",
      "order": 20,
      "title": "Price",
      "value": "304",
      "icon": "money",
      "type": "price",
      "objectId": "WQraFAxaUA"
    },
    {
      "title": "Contact email",
      "type": "email",
      "updatedAt": "2015-09-01T09:51:28.014Z",
      "order": 50,
      "value": "edo@edosushi.pl",
      "createdAt": "2013-03-02T21:09:02.007Z",
      "icon": "envelope",
      "spot": {
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:32.489Z",
        "info": "The ancient name of Tokyo—Edo —adorns Edo Sushi, located in Krakow's historic Kazimierz. The sushi masters at Edo have arranged the menu in convenient \"sets\" that include well matched selections from the menu’s wide range.",
        "address": "Ul. Bożego Ciała 3",
        "name": "Edo Sushi Bar",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-02-28T20:35:13.879Z",
        "order": 120,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052138,
          "longitude": 19.942889
        },
        "objectId": "dZWI2J6dRb",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "WSsZie7q8v"
    },
    {
      "value": "http://www.mariacki.com",
      "order": 50,
      "createdAt": "2013-03-17T09:02:32.505Z",
      "updatedAt": "2015-09-01T09:55:56.570Z",
      "spot": {
        "type": "sight",
        "address": "Rynek główny",
        "name": "Church of the St. Mary",
        "order": 20,
        "createdAt": "2012-12-01T13:33:52.133Z",
        "updatedAt": "2013-03-17T09:37:57.003Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061664,
          "longitude": 19.939188
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "St. Mary's church is a Brick Gothic church re-built in the 14th century, adjacent to the Main Market Square. On every hour, a trumpet signal—called the Hejnał Mariacki—is played from the top of the taller of St. Mary's two towers.",
        "objectId": "RdsfxB5czr",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "globe",
      "title": "Website",
      "type": "url",
      "objectId": "WU3yqXLOJb"
    },
    {
      "type": "food",
      "value": "Japanese",
      "spot": {
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:32.489Z",
        "info": "The ancient name of Tokyo—Edo —adorns Edo Sushi, located in Krakow's historic Kazimierz. The sushi masters at Edo have arranged the menu in convenient \"sets\" that include well matched selections from the menu’s wide range.",
        "address": "Ul. Bożego Ciała 3",
        "name": "Edo Sushi Bar",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-02-28T20:35:13.879Z",
        "order": 120,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052138,
          "longitude": 19.942889
        },
        "objectId": "dZWI2J6dRb",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-02T21:08:57.631Z",
      "title": "Cuisine",
      "order": 10,
      "icon": "cutlery",
      "updatedAt": "2015-09-01T09:56:36.576Z",
      "objectId": "WfsZbFqmLq"
    },
    {
      "title": "Distance|from office",
      "type": "distance",
      "value": "650",
      "createdAt": "2013-03-17T09:40:10.527Z",
      "updatedAt": "2015-09-01T09:31:28.330Z",
      "icon": "pedestrian",
      "spot": {
        "address": "Sukiennice",
        "order": 60,
        "type": "sight",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-03-17T09:48:38.800Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061668,
          "longitude": 19.937458
        },
        "createdAt": "2012-12-01T13:33:41.160Z",
        "info": "The Sukiennice, a huge market hall built in the 13th century in the middle of Rynek Główny (Main Square), enlarged in the 14th century in the Gothic style and remodelled in the mid-16th century after Renaissance fashion, was restored in 1875–1879 and became the city’s showpiece facility hosting grand balls and patriotic celebrations. Its location and character made the rooms on the first floor of the Sukiennice a perfect place for the National Museum in Krakow.",
        "name": "Sukiennice Gallery",
        "objectId": "r0KNe06MgN",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 0,
      "objectId": "WlpaDC7EWI"
    },
    {
      "spot": {
        "type": "shopping",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "address": "Ul. Podgórska 34",
        "name": "Galeria Kazimierz",
        "info": "Galeria Kaziemierz shopping mall is located on the west bank of the Vistula river, just 15 minutes walk from the Krakow’s Old Town.Galeria Kazimierz houses more than 130 shops  and service points. It is a popular place for entertainment thanks to the Cinema City. Customers can also enjoy the food court with many restaurants and cafes.",
        "createdAt": "2012-12-01T13:20:58.525Z",
        "updatedAt": "2013-03-24T18:23:26.208Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052675,
          "longitude": 19.956529
        },
        "objectId": "oVgSX18SuH",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-24T18:46:08.066Z",
      "updatedAt": "2015-09-01T09:51:21.224Z",
      "order": 40,
      "title": "Contact email",
      "icon": "envelope",
      "value": "galeriakazimierz@gtc.com.pl ",
      "type": "email",
      "objectId": "WoxRFktzre"
    },
    {
      "type": "price",
      "updatedAt": "2015-09-01T09:53:57.265Z",
      "icon": "money",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05729,
          "longitude": 19.944413
        },
        "type": "restaurant",
        "name": "Cukiernia Cichowscy",
        "createdAt": "2012-12-01T13:06:34.763Z",
        "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
        "updatedAt": "2013-02-28T20:35:41.811Z",
        "address": "Ul. Starowiślna 21",
        "order": 30,
        "objectId": "VGcIpSDrMU",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 20,
      "title": "Cookie price",
      "createdAt": "2013-03-02T21:20:17.766Z",
      "value": "3-10|1",
      "objectId": "XBBUzQerXU"
    },
    {
      "order": 60,
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "url",
      "title": "Website",
      "updatedAt": "2015-09-01T09:56:14.286Z",
      "icon": "globe",
      "value": "http://www.ilcalzone.pl/en/",
      "createdAt": "2013-01-03T14:40:02.687Z",
      "objectId": "XeX1tncSLC"
    },
    {
      "icon": "clock",
      "value": "MON-SUN|10:00-22:00",
      "type": "open",
      "createdAt": "2013-03-24T18:25:47.587Z",
      "updatedAt": "2015-09-01T09:58:12.959Z",
      "order": 10,
      "spot": {
        "address": "Ul. Pawia 5",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Galeria Krakowska is the most prestigous shopping centre in Krakow. It offers 270 shops and is located in a 5 minutes walk distance from the Main Square.",
        "name": "Galeria Krakowska",
        "type": "shopping",
        "createdAt": "2012-12-01T13:20:54.852Z",
        "updatedAt": "2013-03-24T18:22:15.889Z",
        "order": 10,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.066836,
          "longitude": 19.945457
        },
        "objectId": "9hhFoHtz1i",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "objectId": "Yvyd1i9N3j"
    },
    {
      "updatedAt": "2015-09-01T09:55:52.878Z",
      "value": "http://www.galeriakazimierz.pl",
      "order": 50,
      "spot": {
        "type": "shopping",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "address": "Ul. Podgórska 34",
        "name": "Galeria Kazimierz",
        "info": "Galeria Kaziemierz shopping mall is located on the west bank of the Vistula river, just 15 minutes walk from the Krakow’s Old Town.Galeria Kazimierz houses more than 130 shops  and service points. It is a popular place for entertainment thanks to the Cinema City. Customers can also enjoy the food court with many restaurants and cafes.",
        "createdAt": "2012-12-01T13:20:58.525Z",
        "updatedAt": "2013-03-24T18:23:26.208Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052675,
          "longitude": 19.956529
        },
        "objectId": "oVgSX18SuH",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Website",
      "icon": "globe",
      "createdAt": "2013-03-24T18:46:09.227Z",
      "type": "url",
      "objectId": "YxKUC7IQPp"
    },
    {
      "createdAt": "2013-01-04T14:21:59.009Z",
      "updatedAt": "2015-05-12T09:55:13.099Z",
      "title": "Free wireless Internet",
      "type": "wifi",
      "icon": "wifi",
      "order": 30,
      "spot": {
        "updatedAt": "2013-01-21T15:45:13.833Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057604,
          "longitude": 19.943457
        },
        "name": "Pugetów",
        "order": 20,
        "type": "hotel",
        "createdAt": "2012-10-15T11:36:32.820Z",
        "address": "Ul. Starowiślna 15a",
        "info": "Hotel Pugetów is located right in the center od Kraków, between the Market Square and Kazimierz. The quiet courtyard and parking available at a guarded parking lot - these things are hard to come by in the centre of a city. Hotel is located just next to ABB office.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "fdyf0Ldm37",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "ZUfJ9Ka6iC"
    },
    {
      "icon": "envelope",
      "order": 50,
      "value": "reservations.krakow@radissonblu.com\n",
      "title": "Contact email",
      "type": "email",
      "updatedAt": "2015-09-01T09:51:36.836Z",
      "spot": {
        "updatedAt": "2013-01-21T15:45:30.379Z",
        "type": "hotel",
        "order": 60,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058296,
          "longitude": 19.933274
        },
        "createdAt": "2012-10-15T11:39:09.829Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
        "name": "Radisson BLU",
        "address": "Ul. Straszewskiego",
        "objectId": "458tmli0cB",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-22T15:24:46.814Z",
      "objectId": "ZqOQ4Ctbwp"
    },
    {
      "icon": "globe",
      "type": "url",
      "createdAt": "2013-01-22T15:33:05.412Z",
      "updatedAt": "2015-09-01T09:56:05.384Z",
      "order": 60,
      "spot": {
        "address": "Ul. Pawia 3",
        "name": "Andels",
        "createdAt": "2012-10-15T11:39:34.972Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.065652,
          "longitude": 19.945267
        },
        "type": "hotel",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-01-21T15:45:34.714Z",
        "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
        "objectId": "VBWkPaq5G7",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Website",
      "value": "http://www.andelskrakow.com",
      "objectId": "aHWhQtePWk"
    },
    {
      "createdAt": "2015-10-07T12:25:43.848Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "gkr5n1kBrg"
      },
      "title": "+41 56 200 0 200",
      "icon": "phone",
      "value": "+41 56 200 0 200",
      "updatedAt": "2015-10-07T12:28:29.621Z",
      "type": "phone",
      "order": 20,
      "objectId": "aTU3PIda1G"
    },
    {
      "value": "http://www.miodmalina.pl/en",
      "icon": "globe",
      "type": "url",
      "title": "Website",
      "order": 60,
      "spot": {
        "name": "Miód Malina",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058205,
          "longitude": 19.938447
        },
        "type": "restaurant",
        "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
        "createdAt": "2012-12-01T13:06:27.068Z",
        "updatedAt": "2013-02-28T20:33:54.615Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 60,
        "address": "Ul. Grodzka 40",
        "objectId": "XYUuQv8NkK",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-02-28T22:17:22.518Z",
      "updatedAt": "2015-09-01T09:56:02.321Z",
      "objectId": "ax0ccombAc"
    },
    {
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "avuCzZXLhF"
      },
      "value": "+41 58 585 24 61",
      "order": 0,
      "createdAt": "2015-10-07T09:53:42.688Z",
      "updatedAt": "2015-11-05T13:55:36.107Z",
      "icon": "phone",
      "title": "+41 58 585 24 61",
      "type": "phone",
      "objectId": "bgAkedoKgF"
    },
    {
      "order": 50,
      "value": "cukiernia@cichowscy.pl",
      "updatedAt": "2015-09-01T09:51:26.158Z",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05729,
          "longitude": 19.944413
        },
        "type": "restaurant",
        "name": "Cukiernia Cichowscy",
        "createdAt": "2012-12-01T13:06:34.763Z",
        "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
        "updatedAt": "2013-02-28T20:35:41.811Z",
        "address": "Ul. Starowiślna 21",
        "order": 30,
        "objectId": "VGcIpSDrMU",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-02T21:20:21.168Z",
      "title": "Contact email",
      "type": "email",
      "icon": "envelope",
      "objectId": "cB78pgAKaQ"
    },
    {
      "icon": "envelope",
      "title": "Contact email",
      "createdAt": "2013-01-03T14:35:37.617Z",
      "updatedAt": "2015-09-01T09:51:59.210Z",
      "order": 50,
      "type": "email",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "ilcalzone@ilcalzone.pl",
      "objectId": "cWHJNGRJSw"
    },
    {
      "createdAt": "2013-02-28T22:11:10.178Z",
      "order": 60,
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "address": "Ul. Grodzka 5",
        "updatedAt": "2013-02-28T20:33:40.287Z",
        "name": "Marmolada",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059959,
          "longitude": 19.937578
        },
        "createdAt": "2012-12-01T13:06:26.120Z",
        "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
        "order": 50,
        "objectId": "RS9V21TenK",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "globe",
      "value": "http://www.marmoladarestauracja.pl/en/",
      "updatedAt": "2015-09-01T09:56:03.204Z",
      "title": "Website",
      "type": "url",
      "objectId": "co49lQYwcz"
    },
    {
      "value": "750",
      "createdAt": "2015-05-08T09:04:03.564Z",
      "icon": "pedestrian",
      "order": 0,
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:18.521Z",
      "spot": {
        "createdAt": "2015-05-08T08:51:38.429Z",
        "name": "Kawaleria",
        "type": "restaurant",
        "order": 16,
        "info": "The Kawaleria Restaurant is  which refer to tradition of polish cavalry. The original interior design, wherein old Poland and its customs seems to be still alive certainly will be interesting for all of our guests. The restaurant offers three dining rooms. The seasonal garden illuminated with candles, immersed in the green is an ideal place for a romantic dinner.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060217,
          "longitude": 19.935414
        },
        "updatedAt": "2015-05-08T08:54:50.961Z",
        "address": "Ul. Gołębia 4",
        "objectId": "g9l8Z2oPGB",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "distance",
      "objectId": "cpJ7To6fMU"
    },
    {
      "createdAt": "2015-10-07T11:48:52.733Z",
      "updatedAt": "2015-10-07T11:53:36.238Z",
      "type": "phone",
      "icon": "phone",
      "order": 30,
      "title": "+41 56 210 09 55",
      "value": "+41 56 210 09 55",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "XXlqwj6XJR"
      },
      "objectId": "d23DfvtDHd"
    },
    {
      "value": "670",
      "createdAt": "2013-02-28T22:17:16.856Z",
      "title": "Distance|from office",
      "icon": "pedestrian",
      "order": 0,
      "spot": {
        "name": "Miód Malina",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058205,
          "longitude": 19.938447
        },
        "type": "restaurant",
        "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
        "createdAt": "2012-12-01T13:06:27.068Z",
        "updatedAt": "2013-02-28T20:33:54.615Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 60,
        "address": "Ul. Grodzka 40",
        "objectId": "XYUuQv8NkK",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:31:45.820Z",
      "type": "distance",
      "objectId": "d2d5SxK5zq"
    },
    {
      "updatedAt": "2015-09-01T09:51:18.399Z",
      "spot": {
        "type": "sight",
        "address": "Rynek główny",
        "name": "Church of the St. Mary",
        "order": 20,
        "createdAt": "2012-12-01T13:33:52.133Z",
        "updatedAt": "2013-03-17T09:37:57.003Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061664,
          "longitude": 19.939188
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "St. Mary's church is a Brick Gothic church re-built in the 14th century, adjacent to the Main Market Square. On every hour, a trumpet signal—called the Hejnał Mariacki—is played from the top of the taller of St. Mary's two towers.",
        "objectId": "RdsfxB5czr",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "email",
      "value": "administracja@mariacki.com",
      "icon": "envelope",
      "createdAt": "2014-07-23T15:01:55.019Z",
      "order": 40,
      "title": "Contact email",
      "objectId": "d7TlC0MO3v"
    },
    {
      "icon": "cutlery",
      "type": "food",
      "createdAt": "2013-03-02T21:20:16.818Z",
      "updatedAt": "2015-09-01T09:56:35.223Z",
      "order": 10,
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05729,
          "longitude": 19.944413
        },
        "type": "restaurant",
        "name": "Cukiernia Cichowscy",
        "createdAt": "2012-12-01T13:06:34.763Z",
        "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
        "updatedAt": "2013-02-28T20:35:41.811Z",
        "address": "Ul. Starowiślna 21",
        "order": 30,
        "objectId": "VGcIpSDrMU",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Food",
      "value": "Pastries",
      "objectId": "dfe5RHbbNJ"
    },
    {
      "order": 0,
      "type": "price",
      "icon": "money",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "39izZUdjlg"
      },
      "updatedAt": "2015-10-07T11:15:31.811Z",
      "title": "Ticket",
      "createdAt": "2015-10-07T09:43:29.530Z",
      "value": "7",
      "objectId": "dlWFzWWsSK"
    },
    {
      "value": "restauracja@marmoladarestauracja.pl",
      "updatedAt": "2015-09-01T09:51:33.887Z",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "address": "Ul. Grodzka 5",
        "updatedAt": "2013-02-28T20:33:40.287Z",
        "name": "Marmolada",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059959,
          "longitude": 19.937578
        },
        "createdAt": "2012-12-01T13:06:26.120Z",
        "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
        "order": 50,
        "objectId": "RS9V21TenK",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Contact email",
      "type": "email",
      "createdAt": "2013-02-28T22:11:09.038Z",
      "order": 50,
      "icon": "envelope",
      "objectId": "du9FbxtxRy"
    },
    {
      "spot": {
        "type": "sight",
        "address": "Rynek Główny 1",
        "name": "Rynek Underground",
        "createdAt": "2013-03-14T14:25:59.215Z",
        "updatedAt": "2013-03-14T14:28:29.143Z",
        "info": "The underground museum is the first of its kind in Poland, and unique on a global scale too. The ‘In the Footsteps of Krakow’s European Identity’  exhibition is a multimedia show as well as a journey through time – allowing visitors to not only see the history of the origins of the legendary city, but also to touch them! In the archaeological park located 4 metres below the surface of Krakow’s Market Square, we can see a section of medieval Krakow come alive, something as yet unprecedented in Europe. ",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 30,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061671,
          "longitude": 19.937439
        },
        "objectId": "uih4zpxeWk",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "price",
      "value": "17",
      "updatedAt": "2015-09-01T09:53:55.886Z",
      "title": "Ticket",
      "createdAt": "2013-03-17T09:11:47.608Z",
      "icon": "money",
      "order": 20,
      "objectId": "e0x0Zg2R4J"
    },
    {
      "type": "price",
      "title": "Price",
      "updatedAt": "2015-09-01T09:54:06.991Z",
      "value": "451",
      "icon": "money",
      "createdAt": "2013-01-04T14:18:54.081Z",
      "order": 20,
      "spot": {
        "updatedAt": "2013-01-21T15:45:30.379Z",
        "type": "hotel",
        "order": 60,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058296,
          "longitude": 19.933274
        },
        "createdAt": "2012-10-15T11:39:09.829Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
        "name": "Radisson BLU",
        "address": "Ul. Straszewskiego",
        "objectId": "458tmli0cB",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "e1xGmeeRBo"
    },
    {
      "updatedAt": "2015-09-01T09:55:54.054Z",
      "type": "url",
      "icon": "globe",
      "value": "http://www.muzeum.krakow.pl/O-muzeum.61.0.html?L=1",
      "title": "Website",
      "createdAt": "2013-03-17T09:40:16.623Z",
      "spot": {
        "address": "Sukiennice",
        "order": 60,
        "type": "sight",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-03-17T09:48:38.800Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061668,
          "longitude": 19.937458
        },
        "createdAt": "2012-12-01T13:33:41.160Z",
        "info": "The Sukiennice, a huge market hall built in the 13th century in the middle of Rynek Główny (Main Square), enlarged in the 14th century in the Gothic style and remodelled in the mid-16th century after Renaissance fashion, was restored in 1875–1879 and became the city’s showpiece facility hosting grand balls and patriotic celebrations. Its location and character made the rooms on the first floor of the Sukiennice a perfect place for the National Museum in Krakow.",
        "name": "Sukiennice Gallery",
        "objectId": "r0KNe06MgN",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 50,
      "objectId": "eSsiWB6JgU"
    },
    {
      "type": "phone",
      "createdAt": "2013-03-14T14:47:13.826Z",
      "spot": {
        "updatedAt": "2013-03-14T14:28:45.026Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054184,
          "longitude": 19.936296
        },
        "createdAt": "2012-07-30T11:13:05.840Z",
        "name": "Wawel Royal Castle",
        "address": "Ul. Wawel 5",
        "order": 10,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The beginnings of the residence of Polish rulers on Wawel hill go back to an early Romanesque stone building from mid 11th century, called the palatium, whose remains are located in the northern wing of the present-day Castle. In time, the prince's residence on the hill was expanded eastwards. Along with the cathedral it was called \"the Upper Castle\", while \"the Lower Castle\" was a settlement consisting of courtiers' and clergy's houses and churches other than the cathedral.",
        "type": "sight",
        "objectId": "4XTRiLs5cc",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2013-03-20T09:35:48.176Z",
      "order": 30,
      "value": "+48 12 422 51 55",
      "title": "+48 12 422 51 55 (ext. 219)",
      "icon": "phone",
      "objectId": "ealRouCryv"
    },
    {
      "icon": "pedestrian",
      "type": "distance",
      "createdAt": "2013-03-02T21:02:10.490Z",
      "value": "1750",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.045855,
          "longitude": 19.94909
        },
        "address": "Ul. Józefińska 4",
        "order": 110,
        "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
        "name": "Kura",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:31.428Z",
        "updatedAt": "2013-03-02T21:08:17.193Z",
        "objectId": "omLMbTRPgC",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 0,
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:35.335Z",
      "objectId": "etwhZgTmmy"
    },
    {
      "title": "Cuisine",
      "order": 10,
      "updatedAt": "2015-09-01T09:56:41.071Z",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "address": "Ul. Grodzka 5",
        "updatedAt": "2013-02-28T20:33:40.287Z",
        "name": "Marmolada",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059959,
          "longitude": 19.937578
        },
        "createdAt": "2012-12-01T13:06:26.120Z",
        "info": "Marmolada restaurant offers combination of simplicity with tempting range and easy to prepare dishes, as a sentiment to Soutern Europe, filled with a rich aroma of root spices and a gush of nature fruits. Italian cusine is one of our many interests which inspires and delights us. ",
        "order": 50,
        "objectId": "RS9V21TenK",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "Polish",
      "icon": "cutlery",
      "type": "food",
      "createdAt": "2013-02-28T22:11:04.728Z",
      "objectId": "f91jylur62"
    },
    {
      "createdAt": "2013-02-28T20:56:35.380Z",
      "updatedAt": "2015-09-01T09:58:31.257Z",
      "title": "Opening|hours",
      "value": "MON-SUN|12:00-23:00",
      "icon": "clock",
      "type": "open",
      "spot": {
        "updatedAt": "2013-02-28T20:30:25.566Z",
        "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060643,
          "longitude": 19.940241
        },
        "order": 20,
        "createdAt": "2012-12-01T13:06:17.978Z",
        "address": "Ul. Sienna 9",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Aperitif",
        "type": "restaurant",
        "objectId": "7DAxfA3Wgc",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 30,
      "objectId": "f9cBLYCOG1"
    },
    {
      "spot": {
        "info": "The world's oldest shopping mall has been in business for 700 years. The present Renaissance edifice dates from 1555.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061657,
          "longitude": 19.937463
        },
        "updatedAt": "2013-03-24T18:22:57.783Z",
        "type": "shopping",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:20:56.069Z",
        "name": "Cloth Hall",
        "order": 20,
        "address": "Rynek Główny",
        "objectId": "MOWOgUmFEP",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-24T18:39:52.916Z",
      "type": "distance",
      "value": "650",
      "order": 0,
      "icon": "pedestrian",
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:24.510Z",
      "objectId": "fB6OkoFMM7"
    },
    {
      "createdAt": "2016-05-09T13:13:58.610Z",
      "updatedAt": "2016-05-09T13:14:23.923Z",
      "title": "Website",
      "type": "url",
      "value": "http://en.wierzynek.pl/",
      "spot": {
        "createdAt": "2016-05-09T13:01:01.524Z",
        "updatedAt": "2016-05-09T13:05:50.743Z",
        "address": "Rynek Główny 16, Kraków",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Wierzynek Restaurant, as one of the oldest in Europe, is famous for its old Polish cuisine and care for royal court customs. The origin of our restaurant dates back to 1364, the year in which a splendid and abundant feast took place in a tenement on the Main Market Square.",
        "name": "Wierzynek",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060465,
          "longitude": 19.93722
        },
        "type": "restaurant",
        "order": 15,
        "objectId": "OmFvm0bzZc",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 50,
      "icon": "globe",
      "objectId": "fR2YMzdsap"
    },
    {
      "type": "food",
      "spot": {
        "createdAt": "2015-05-08T08:51:38.429Z",
        "name": "Kawaleria",
        "type": "restaurant",
        "order": 16,
        "info": "The Kawaleria Restaurant is  which refer to tradition of polish cavalry. The original interior design, wherein old Poland and its customs seems to be still alive certainly will be interesting for all of our guests. The restaurant offers three dining rooms. The seasonal garden illuminated with candles, immersed in the green is an ideal place for a romantic dinner.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060217,
          "longitude": 19.935414
        },
        "updatedAt": "2015-05-08T08:54:50.961Z",
        "address": "Ul. Gołębia 4",
        "objectId": "g9l8Z2oPGB",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "cutlery",
      "value": "Polish",
      "order": 10,
      "createdAt": "2015-05-08T09:11:15.145Z",
      "updatedAt": "2015-09-01T09:56:33.922Z",
      "title": "Cuisine",
      "objectId": "fWbnwEFUmN"
    },
    {
      "title": "Website",
      "icon": "globe",
      "value": "http://www.bonarkacitycenter.pl/english",
      "order": 50,
      "type": "url",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Bonarka City Center is a contemporary representation of municipal streets and market places. Buildings are made of high-quality natural materials, such as stone, wood and glass. The selection of the facade materials refers to the industrial past of the area as well as traditional shopping arcades from the turn of the 19th and 20th century. The complex comprises 270 shops, 30 cafes and Cinema City. ",
        "address": "Ul. Kamieńskiego 11",
        "order": 50,
        "name": "Bonarka",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.028531,
          "longitude": 19.950213
        },
        "type": "shopping",
        "updatedAt": "2013-03-24T18:23:42.276Z",
        "createdAt": "2013-03-06T18:29:04.679Z",
        "objectId": "9D34sbFF4d",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-24T18:49:16.590Z",
      "updatedAt": "2015-09-01T09:55:50.341Z",
      "objectId": "fclhefnOvg"
    },
    {
      "icon": "cutlery",
      "updatedAt": "2015-09-01T09:56:35.947Z",
      "order": 10,
      "createdAt": "2013-03-02T21:14:33.168Z",
      "type": "food",
      "title": "Cuisine",
      "value": "Asian",
      "spot": {
        "type": "restaurant",
        "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
        "createdAt": "2012-12-01T13:06:33.571Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052069,
          "longitude": 19.942889
        },
        "address": "Ul. Miodowa 8",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Edo Fusion",
        "updatedAt": "2013-02-28T20:35:26.511Z",
        "order": 130,
        "objectId": "YCRIB7mewu",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "fmKEa1VFQm"
    },
    {
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061184,
          "longitude": 19.938356
        },
        "info": "The Szara Restaurant is located in the house of the same name (The Grey House) at the Market Square.  Our cuisine specializes in European dishes, and we need to mention our deliciously cooked fish (salmon and pikeperch) and our famous fish soup, as well as sirloin served in various ways (e.g. tournedos or planksteak), not to mention our veal (medallion or schnitzel) which cannot be matched by anyone else.",
        "type": "restaurant",
        "address": "Ul. Rynek Główny 6",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Szara",
        "createdAt": "2015-05-08T08:51:34.031Z",
        "updatedAt": "2015-05-08T08:54:28.812Z",
        "order": 13,
        "objectId": "Rtm5XqoTJx",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "+48 12 421 66 69",
      "order": 40,
      "icon": "phone",
      "createdAt": "2015-05-08T08:55:35.878Z",
      "updatedAt": "2015-05-08T09:10:26.280Z",
      "type": "phone",
      "title": "+48 12 421 66 69",
      "objectId": "fye60B6cIl"
    },
    {
      "createdAt": "2013-02-28T22:27:12.465Z",
      "updatedAt": "2015-09-01T09:51:32.189Z",
      "title": "Contact email",
      "order": 50,
      "type": "email",
      "value": "stolarska@pimiento.pl",
      "spot": {
        "address": "Ul. Stolarska 13",
        "updatedAt": "2013-02-28T20:34:10.863Z",
        "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
        "name": "Pimiento",
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:28.230Z",
        "order": 70,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059791,
          "longitude": 19.938757
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "SL9huVbKje",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "envelope",
      "objectId": "g8IJclBxCP"
    },
    {
      "order": 10,
      "value": "TUE-SUN|10:00-16:00",
      "type": "open",
      "createdAt": "2013-01-03T15:01:54.218Z",
      "updatedAt": "2015-09-01T09:58:32.479Z",
      "spot": {
        "updatedAt": "2013-03-14T14:28:45.026Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054184,
          "longitude": 19.936296
        },
        "createdAt": "2012-07-30T11:13:05.840Z",
        "name": "Wawel Royal Castle",
        "address": "Ul. Wawel 5",
        "order": 10,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The beginnings of the residence of Polish rulers on Wawel hill go back to an early Romanesque stone building from mid 11th century, called the palatium, whose remains are located in the northern wing of the present-day Castle. In time, the prince's residence on the hill was expanded eastwards. Along with the cathedral it was called \"the Upper Castle\", while \"the Lower Castle\" was a settlement consisting of courtiers' and clergy's houses and churches other than the cathedral.",
        "type": "sight",
        "objectId": "4XTRiLs5cc",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "icon": "clock",
      "objectId": "gMcjtxytOo"
    },
    {
      "updatedAt": "2015-09-01T09:55:58.773Z",
      "icon": "globe",
      "order": 60,
      "title": "Website",
      "value": "http://www.facebook.com/KuraNoodleShopMore",
      "type": "url",
      "createdAt": "2013-03-02T21:02:17.229Z",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.045855,
          "longitude": 19.94909
        },
        "address": "Ul. Józefińska 4",
        "order": 110,
        "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
        "name": "Kura",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:31.428Z",
        "updatedAt": "2013-03-02T21:08:17.193Z",
        "objectId": "omLMbTRPgC",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "gjh8ZsyjtF"
    },
    {
      "title": "+41 (0)56 204 08 08",
      "updatedAt": "2015-10-07T11:53:24.665Z",
      "icon": "phone",
      "order": 30,
      "value": "+41 (0)56 204 08 08",
      "type": "phone",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "eZqoASw3uM"
      },
      "createdAt": "2015-10-07T11:46:08.542Z",
      "objectId": "gvRxdeDsH8"
    },
    {
      "updatedAt": "2015-05-12T09:55:08.033Z",
      "spot": {
        "address": "Ul. Pawia 3",
        "name": "Andels",
        "createdAt": "2012-10-15T11:39:34.972Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.065652,
          "longitude": 19.945267
        },
        "type": "hotel",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-01-21T15:45:34.714Z",
        "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
        "objectId": "VBWkPaq5G7",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Free wireless Internet",
      "type": "wifi",
      "icon": "wifi",
      "order": 30,
      "createdAt": "2013-01-04T14:22:26.130Z",
      "objectId": "h2EuaQAMDR"
    },
    {
      "type": "email",
      "value": "office@wielopole.pl\n",
      "spot": {
        "order": 10,
        "updatedAt": "2013-01-21T15:45:00.152Z",
        "address": "Ul. Wielopole 3",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
        "type": "hotel",
        "name": "Wielopole",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058906,
          "longitude": 19.943482
        },
        "createdAt": "2012-10-15T11:35:52.471Z",
        "objectId": "BcEzwnbk9J",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:51:57.161Z",
      "icon": "envelope",
      "title": "Contact email",
      "order": 50,
      "createdAt": "2013-01-22T15:23:32.194Z",
      "objectId": "haljNUDAE2"
    },
    {
      "updatedAt": "2015-09-01T09:56:00.266Z",
      "title": "Website",
      "type": "url",
      "order": 60,
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-02T20:52:09.471Z",
      "value": "http://www.cosanostra.krakow.pl/en/",
      "icon": "globe",
      "objectId": "iWkiCPwZ7Q"
    },
    {
      "type": "food",
      "icon": "cutlery",
      "title": "Cuisine",
      "value": "Italian",
      "order": 10,
      "createdAt": "2013-03-02T20:56:34.990Z",
      "spot": {
        "createdAt": "2012-12-01T13:06:30.489Z",
        "updatedAt": "2013-02-28T20:34:42.236Z",
        "address": "Ul. Kanonicza 7",
        "name": "La Campana",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057056,
          "longitude": 19.937503
        },
        "type": "restaurant",
        "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
        "order": 90,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "sMV6ZIMrXR",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:56:38.081Z",
      "objectId": "j9dQda0VLO"
    },
    {
      "title": "Free wireless Internet",
      "type": "wifi",
      "icon": "wifi",
      "order": 30,
      "createdAt": "2013-01-04T14:22:20.776Z",
      "updatedAt": "2015-05-12T09:55:09.261Z",
      "spot": {
        "updatedAt": "2013-01-21T15:45:30.379Z",
        "type": "hotel",
        "order": 60,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058296,
          "longitude": 19.933274
        },
        "createdAt": "2012-10-15T11:39:09.829Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
        "name": "Radisson BLU",
        "address": "Ul. Straszewskiego",
        "objectId": "458tmli0cB",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "jBmIr5fvzh"
    },
    {
      "title": "Distance|from office",
      "type": "distance",
      "value": "200",
      "spot": {
        "updatedAt": "2013-01-24T14:45:21.591Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05942,
          "longitude": 19.942524
        },
        "order": 30,
        "address": "Ul. Wielopole 1",
        "name": "Pekao S.A.",
        "type": "atm",
        "createdAt": "2012-12-01T12:38:08.937Z",
        "objectId": "wbtImPaZUC",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-24T14:47:21.489Z",
      "updatedAt": "2013-01-24T14:48:27.867Z",
      "objectId": "jFcb8Cznbw"
    },
    {
      "updatedAt": "2015-09-01T09:54:10.815Z",
      "value": "350",
      "createdAt": "2013-01-04T14:18:38.713Z",
      "title": "Price",
      "type": "price",
      "spot": {
        "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
        "updatedAt": "2013-01-21T15:45:14.302Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Grodek",
        "type": "hotel",
        "address": "Ul. Na Grodku 4",
        "order": 30,
        "createdAt": "2012-10-15T11:37:07.849Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060813,
          "longitude": 19.942497
        },
        "objectId": "8Zp5it8WW3",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "money",
      "order": 20,
      "objectId": "jtdfZynDQG"
    },
    {
      "value": "20-30",
      "icon": "money",
      "createdAt": "2015-10-07T12:06:17.150Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "y55Ua6eDXQ"
      },
      "title": "Dinner price",
      "type": "price",
      "updatedAt": "2015-10-07T12:15:58.789Z",
      "order": 10,
      "objectId": "jxS3mC8Rcb"
    },
    {
      "updatedAt": "2015-09-01T09:58:14.423Z",
      "type": "open",
      "icon": "clock",
      "title": "Opening|hours",
      "order": 10,
      "value": "TUE-SUN|10:00-20:00",
      "spot": {
        "address": "Sukiennice",
        "order": 60,
        "type": "sight",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-03-17T09:48:38.800Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061668,
          "longitude": 19.937458
        },
        "createdAt": "2012-12-01T13:33:41.160Z",
        "info": "The Sukiennice, a huge market hall built in the 13th century in the middle of Rynek Główny (Main Square), enlarged in the 14th century in the Gothic style and remodelled in the mid-16th century after Renaissance fashion, was restored in 1875–1879 and became the city’s showpiece facility hosting grand balls and patriotic celebrations. Its location and character made the rooms on the first floor of the Sukiennice a perfect place for the National Museum in Krakow.",
        "name": "Sukiennice Gallery",
        "objectId": "r0KNe06MgN",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-17T09:40:11.267Z",
      "objectId": "k3Bl0diJ5A"
    },
    {
      "createdAt": "2013-03-02T20:52:07.609Z",
      "value": "+48 12 429 00 97",
      "title": "+48 12 429 00 97",
      "icon": "phone",
      "order": 40,
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "phone",
      "updatedAt": "2013-03-02T20:54:46.045Z",
      "objectId": "k4jYV9XGJx"
    },
    {
      "spot": {
        "address": "Rynek Główny 10",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Wesele",
        "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060708,
          "longitude": 19.937957
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:24.949Z",
        "updatedAt": "2013-03-24T20:53:25.776Z",
        "objectId": "TtWjyelace",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "MON-SUN|12:00-23:00",
      "type": "open",
      "icon": "clock",
      "title": "Opening|hours",
      "order": 30,
      "updatedAt": "2015-09-01T09:58:30.588Z",
      "createdAt": "2013-02-28T22:04:47.872Z",
      "objectId": "k5o2cm7ewz"
    },
    {
      "value": "MON-SUN|10:00-20:00",
      "spot": {
        "type": "shopping",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "address": "Ul. Podgórska 34",
        "name": "Galeria Kazimierz",
        "info": "Galeria Kaziemierz shopping mall is located on the west bank of the Vistula river, just 15 minutes walk from the Krakow’s Old Town.Galeria Kazimierz houses more than 130 shops  and service points. It is a popular place for entertainment thanks to the Cinema City. Customers can also enjoy the food court with many restaurants and cafes.",
        "createdAt": "2012-12-01T13:20:58.525Z",
        "updatedAt": "2013-03-24T18:23:26.208Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052675,
          "longitude": 19.956529
        },
        "objectId": "oVgSX18SuH",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "type": "open",
      "icon": "clock",
      "order": 10,
      "createdAt": "2013-03-24T18:46:05.989Z",
      "updatedAt": "2015-09-01T09:58:10.477Z",
      "objectId": "k8fA5qFtnh"
    },
    {
      "order": 40,
      "value": "http://blume-baden.ch/en/node/324/",
      "updatedAt": "2015-10-13T08:40:19.094Z",
      "type": "url",
      "title": "Website",
      "icon": "globe",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "gkr5n1kBrg"
      },
      "createdAt": "2015-10-07T12:26:49.574Z",
      "objectId": "kAndzvLAWm"
    },
    {
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "eZqoASw3uM"
      },
      "updatedAt": "2015-10-07T12:05:04.865Z",
      "title": "Dinner price",
      "type": "price",
      "value": "20-70 ",
      "createdAt": "2015-10-07T11:45:33.247Z",
      "icon": "money",
      "order": 10,
      "objectId": "kFakYn5ttx"
    },
    {
      "order": 30,
      "spot": {
        "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
        "updatedAt": "2013-01-21T15:45:14.302Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Grodek",
        "type": "hotel",
        "address": "Ul. Na Grodku 4",
        "order": 30,
        "createdAt": "2012-10-15T11:37:07.849Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060813,
          "longitude": 19.942497
        },
        "objectId": "8Zp5it8WW3",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Free wireless Internet",
      "type": "wifi",
      "icon": "wifi",
      "createdAt": "2013-02-04T21:37:04.861Z",
      "updatedAt": "2015-05-12T09:55:05.251Z",
      "objectId": "kJRHoxDJkG"
    },
    {
      "createdAt": "2015-05-08T08:55:30.890Z",
      "type": "distance",
      "order": 0,
      "icon": "pedestrian",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061184,
          "longitude": 19.938356
        },
        "info": "The Szara Restaurant is located in the house of the same name (The Grey House) at the Market Square.  Our cuisine specializes in European dishes, and we need to mention our deliciously cooked fish (salmon and pikeperch) and our famous fish soup, as well as sirloin served in various ways (e.g. tournedos or planksteak), not to mention our veal (medallion or schnitzel) which cannot be matched by anyone else.",
        "type": "restaurant",
        "address": "Ul. Rynek Główny 6",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Szara",
        "createdAt": "2015-05-08T08:51:34.031Z",
        "updatedAt": "2015-05-08T08:54:28.812Z",
        "order": 13,
        "objectId": "Rtm5XqoTJx",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "550",
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:19.409Z",
      "objectId": "kmjxJ1zKaz"
    },
    {
      "value": "info@bonarkacitycenter.pl",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Bonarka City Center is a contemporary representation of municipal streets and market places. Buildings are made of high-quality natural materials, such as stone, wood and glass. The selection of the facade materials refers to the industrial past of the area as well as traditional shopping arcades from the turn of the 19th and 20th century. The complex comprises 270 shops, 30 cafes and Cinema City. ",
        "address": "Ul. Kamieńskiego 11",
        "order": 50,
        "name": "Bonarka",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.028531,
          "longitude": 19.950213
        },
        "type": "shopping",
        "updatedAt": "2013-03-24T18:23:42.276Z",
        "createdAt": "2013-03-06T18:29:04.679Z",
        "objectId": "9D34sbFF4d",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-24T18:49:19.254Z",
      "updatedAt": "2015-09-01T09:51:19.261Z",
      "title": "Contact email",
      "type": "email",
      "icon": "envelope",
      "order": 40,
      "objectId": "ku8ESaJxvU"
    },
    {
      "icon": "globe",
      "value": "http://www.parkinn.com/hotel-krakow",
      "order": 60,
      "createdAt": "2013-01-22T15:33:01.835Z",
      "updatedAt": "2015-09-01T09:56:07.518Z",
      "title": "Website",
      "type": "url",
      "spot": {
        "name": "Park Inn",
        "type": "hotel",
        "createdAt": "2012-10-15T11:38:27.488Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04762,
          "longitude": 19.92969
        },
        "address": "Ul. Monte Cassino 2",
        "updatedAt": "2013-01-21T16:13:18.730Z",
        "order": 70,
        "objectId": "uwzD7OhpiY",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "l3jAguhnHP"
    },
    {
      "createdAt": "2013-03-02T21:09:01.054Z",
      "updatedAt": "2013-03-02T21:12:01.841Z",
      "spot": {
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:32.489Z",
        "info": "The ancient name of Tokyo—Edo —adorns Edo Sushi, located in Krakow's historic Kazimierz. The sushi masters at Edo have arranged the menu in convenient \"sets\" that include well matched selections from the menu’s wide range.",
        "address": "Ul. Bożego Ciała 3",
        "name": "Edo Sushi Bar",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-02-28T20:35:13.879Z",
        "order": 120,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052138,
          "longitude": 19.942889
        },
        "objectId": "dZWI2J6dRb",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "order": 40,
      "type": "phone",
      "value": "+48 12 422 24 24",
      "title": "+48 12 422 24 24",
      "objectId": "l42FciT1Fs"
    },
    {
      "type": "category",
      "spot": {
        "name": "Park Inn",
        "type": "hotel",
        "createdAt": "2012-10-15T11:38:27.488Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04762,
          "longitude": 19.92969
        },
        "address": "Ul. Monte Cassino 2",
        "updatedAt": "2013-01-21T16:13:18.730Z",
        "order": 70,
        "objectId": "uwzD7OhpiY",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "star",
      "createdAt": "2013-01-04T13:52:50.421Z",
      "title": "Category",
      "updatedAt": "2015-09-03T07:56:38.651Z",
      "order": 10,
      "value": "4",
      "objectId": "lJQQhufJNp"
    },
    {
      "order": 40,
      "updatedAt": "2013-03-20T21:21:06.122Z",
      "spot": {
        "name": "Qubus",
        "order": 50,
        "type": "hotel",
        "address": "Ul. Nadwiślanska 6",
        "updatedAt": "2013-01-21T15:45:19.844Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04675,
          "longitude": 19.950331
        },
        "createdAt": "2012-10-15T11:37:41.395Z",
        "objectId": "DNd9Gfr2U7",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "type": "phone",
      "createdAt": "2013-01-22T15:13:45.173Z",
      "title": "+48 12 374 51 00",
      "value": "+48 12 374 51 00",
      "objectId": "lSk9cQdMJc"
    },
    {
      "order": 40,
      "value": "+48 12 422 14 75",
      "createdAt": "2013-01-22T15:13:34.993Z",
      "type": "phone",
      "icon": "phone",
      "updatedAt": "2013-03-20T21:21:20.870Z",
      "title": "+48 12 422 14 75",
      "spot": {
        "order": 10,
        "updatedAt": "2013-01-21T15:45:00.152Z",
        "address": "Ul. Wielopole 3",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
        "type": "hotel",
        "name": "Wielopole",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058906,
          "longitude": 19.943482
        },
        "createdAt": "2012-10-15T11:35:52.471Z",
        "objectId": "BcEzwnbk9J",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "lxGNyHbshk"
    },
    {
      "updatedAt": "2013-03-02T21:23:31.399Z",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05729,
          "longitude": 19.944413
        },
        "type": "restaurant",
        "name": "Cukiernia Cichowscy",
        "createdAt": "2012-12-01T13:06:34.763Z",
        "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
        "updatedAt": "2013-02-28T20:35:41.811Z",
        "address": "Ul. Starowiślna 21",
        "order": 30,
        "objectId": "VGcIpSDrMU",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "type": "phone",
      "value": "+48 12 421 02 27",
      "title": "+48 12 421 02 27",
      "createdAt": "2013-03-02T21:20:20.191Z",
      "order": 40,
      "objectId": "lyVXolDEoI"
    },
    {
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "eZqoASw3uM"
      },
      "title": "Website",
      "type": "url",
      "updatedAt": "2015-10-13T10:14:39.509Z",
      "value": "https://www.facebook.com/grandcasinobaden.ch?_rdr=p",
      "createdAt": "2015-10-07T11:46:10.533Z",
      "order": 50,
      "icon": "globe",
      "objectId": "mUFUVwLjz4"
    },
    {
      "type": "phone",
      "icon": "phone",
      "title": "+48 12 425 11 16",
      "createdAt": "2013-03-17T09:27:52.383Z",
      "spot": {
        "order": 50,
        "updatedAt": "2013-03-24T20:54:33.126Z",
        "address": "Al. Waszyngtona 1",
        "info": "The Kosciuszko Mound was raised in 1820-1823 to commemorate the Polish national hero Tadeusz Kosciuszko. In 1850-1854, under the partitions, the Austrian authorities erected a fortress around the Mound. Nowadays, the restored fortress contains a hotel, the radio station headquarters and two permanent exhibitions. The top of the Mound affords a vast panorama of Krakow and the surrounding area.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054922,
          "longitude": 19.89458
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:33:49.701Z",
        "type": "sight",
        "name": "Kościuszko Mound",
        "objectId": "1N5VuGOJmq",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "+48 12 425 11 16",
      "updatedAt": "2013-03-17T09:30:16.378Z",
      "order": 30,
      "objectId": "mWCAWnTxb5"
    },
    {
      "type": "url",
      "title": "Website",
      "updatedAt": "2015-09-01T09:55:53.280Z",
      "icon": "globe",
      "createdAt": "2013-03-17T09:52:35.155Z",
      "spot": {
        "type": "sight",
        "info": "The showrooms of the Main Building host temporary exhibitions presenting – in keeping with the Museum’s mission – works drawn from internal holdings as well as objects on loan from other institutions or private collectors.",
        "updatedAt": "2013-03-24T20:54:35.758Z",
        "address": "Al. 3 Maja 1",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060075,
          "longitude": 19.92377
        },
        "order": 70,
        "createdAt": "2012-12-01T13:33:48.407Z",
        "name": "National Museum",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "eh3pUJxZcs",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "http://www.muzeum.krakow.pl/Main-building.42.0.html?L=1\n",
      "order": 50,
      "objectId": "mtS7SlgIqU"
    },
    {
      "type": "url",
      "updatedAt": "2015-09-01T09:55:51.741Z",
      "title": "Website",
      "value": "http://www.pasaz-13.pl/en/",
      "icon": "globe",
      "order": 50,
      "spot": {
        "name": "Pasaż 13",
        "updatedAt": "2013-05-06T13:39:05.273Z",
        "order": 30,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:20:57.478Z",
        "info": "Rynek 13 is definitely the most elegant shopping center in Krakow.Likus Concept Stores on the Krakow Main square – the idea for creating it came from the luxury shopping centers in New York and Milan. Old town houses have been transformed into an intimate shopping arcade. The renaissance style stairway, gothic vaulted ceilings, glass and cement, steal escalators and elevators co-exist here in harmony. LCS is a new way of shopping – elegant stores with brand named clothing, wine cellar with imported wines (mostly from Italy and over 200 types), superbly stocked Italian delicatessen, and a place to relax while shopping. The Long Bar offers a place to eat, drink a glass of wine or have a cup of real espresso.",
        "type": "shopping",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060381,
          "longitude": 19.937841
        },
        "address": "Rynek Główny 13",
        "objectId": "cqoz9xfQ5t",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-03-24T18:42:10.069Z",
      "objectId": "n5SVELOei2"
    },
    {
      "updatedAt": "2015-09-01T09:56:01.241Z",
      "value": "http://www.pimiento.pl/empty,2.html",
      "createdAt": "2013-02-28T22:27:13.346Z",
      "order": 60,
      "title": "Website",
      "spot": {
        "address": "Ul. Stolarska 13",
        "updatedAt": "2013-02-28T20:34:10.863Z",
        "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
        "name": "Pimiento",
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:28.230Z",
        "order": 70,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059791,
          "longitude": 19.938757
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "SL9huVbKje",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "url",
      "icon": "globe",
      "objectId": "nJdX4ENKcs"
    },
    {
      "type": "email",
      "value": "restauracja@szara.pl",
      "title": "Contact email",
      "order": 50,
      "createdAt": "2015-05-08T09:03:58.989Z",
      "updatedAt": "2015-09-01T09:51:20.298Z",
      "icon": "envelope",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061184,
          "longitude": 19.938356
        },
        "info": "The Szara Restaurant is located in the house of the same name (The Grey House) at the Market Square.  Our cuisine specializes in European dishes, and we need to mention our deliciously cooked fish (salmon and pikeperch) and our famous fish soup, as well as sirloin served in various ways (e.g. tournedos or planksteak), not to mention our veal (medallion or schnitzel) which cannot be matched by anyone else.",
        "type": "restaurant",
        "address": "Ul. Rynek Główny 6",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Szara",
        "createdAt": "2015-05-08T08:51:34.031Z",
        "updatedAt": "2015-05-08T08:54:28.812Z",
        "order": 13,
        "objectId": "Rtm5XqoTJx",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "nMLcR81cHX"
    },
    {
      "title": "Website",
      "updatedAt": "2015-09-01T09:56:13.617Z",
      "order": 50,
      "spot": {
        "address": "Ul. Pawia 5",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Galeria Krakowska is the most prestigous shopping centre in Krakow. It offers 270 shops and is located in a 5 minutes walk distance from the Main Square.",
        "name": "Galeria Krakowska",
        "type": "shopping",
        "createdAt": "2012-12-01T13:20:54.852Z",
        "updatedAt": "2013-03-24T18:22:15.889Z",
        "order": 10,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.066836,
          "longitude": 19.945457
        },
        "objectId": "9hhFoHtz1i",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-03T14:45:34.144Z",
      "value": "http://www.galeria-krakowska.pl/en/",
      "type": "url",
      "icon": "globe",
      "objectId": "o23S4vhyVn"
    },
    {
      "value": "5",
      "order": 10,
      "icon": "star",
      "updatedAt": "2015-09-03T07:56:40.081Z",
      "type": "category",
      "title": "Category",
      "spot": {
        "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
        "updatedAt": "2013-01-21T15:45:14.302Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Grodek",
        "type": "hotel",
        "address": "Ul. Na Grodku 4",
        "order": 30,
        "createdAt": "2012-10-15T11:37:07.849Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060813,
          "longitude": 19.942497
        },
        "objectId": "8Zp5it8WW3",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-04T13:24:16.590Z",
      "objectId": "o4ZUejpY2H"
    },
    {
      "value": "370",
      "spot": {
        "type": "atm",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060507,
          "longitude": 19.940819
        },
        "createdAt": "2012-12-01T12:38:10.514Z",
        "updatedAt": "2013-01-24T14:45:11.363Z",
        "name": "PKO Bank Polski",
        "address": "Ul. Sienna 15",
        "order": 40,
        "objectId": "p2yfJi0v1v",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "createdAt": "2013-01-24T14:47:22.473Z",
      "updatedAt": "2013-01-24T14:48:39.412Z",
      "type": "distance",
      "objectId": "o4fCDTydQ8"
    },
    {
      "type": "email",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "gkr5n1kBrg"
      },
      "updatedAt": "2015-10-13T08:40:06.230Z",
      "value": "info@blume-baden.ch",
      "createdAt": "2015-10-07T12:25:46.592Z",
      "order": 30,
      "icon": "envelope",
      "title": "Contact email",
      "objectId": "oBtnrx2fNw"
    },
    {
      "order": 0,
      "updatedAt": "2015-10-13T09:11:42.474Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "eZqoASw3uM"
      },
      "title": "Cuisine",
      "icon": "cutlery",
      "createdAt": "2015-10-07T11:45:34.988Z",
      "value": "Versatile",
      "type": "food",
      "objectId": "oNKVAvYCVm"
    },
    {
      "title": "Website",
      "icon": "globe",
      "type": "url",
      "value": "http://aperitif.com.pl/en/",
      "order": 60,
      "createdAt": "2013-02-28T20:56:21.830Z",
      "updatedAt": "2015-09-01T09:56:04.635Z",
      "spot": {
        "updatedAt": "2013-02-28T20:30:25.566Z",
        "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060643,
          "longitude": 19.940241
        },
        "order": 20,
        "createdAt": "2012-12-01T13:06:17.978Z",
        "address": "Ul. Sienna 9",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Aperitif",
        "type": "restaurant",
        "objectId": "7DAxfA3Wgc",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "ogSPWYkYY3"
    },
    {
      "createdAt": "2015-10-07T11:48:51.403Z",
      "type": "price",
      "title": "Dinner price",
      "value": "20-60",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "XXlqwj6XJR"
      },
      "order": 10,
      "updatedAt": "2015-10-07T11:53:32.659Z",
      "icon": "money",
      "objectId": "ohX3RRCXMv"
    },
    {
      "updatedAt": "2015-09-01T09:51:58.536Z",
      "order": 20,
      "title": "Contact email",
      "icon": "envelope",
      "type": "email",
      "spot": {
        "address": "Ul. Pawia 5",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Galeria Krakowska is the most prestigous shopping centre in Krakow. It offers 270 shops and is located in a 5 minutes walk distance from the Main Square.",
        "name": "Galeria Krakowska",
        "type": "shopping",
        "createdAt": "2012-12-01T13:20:54.852Z",
        "updatedAt": "2013-03-24T18:22:15.889Z",
        "order": 10,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.066836,
          "longitude": 19.945457
        },
        "objectId": "9hhFoHtz1i",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "galeria@galeria-krakowska.pl",
      "createdAt": "2013-01-03T14:45:32.695Z",
      "objectId": "p2vElz3G0m"
    },
    {
      "title": "Contact email",
      "spot": {
        "type": "restaurant",
        "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
        "createdAt": "2012-12-01T13:06:33.571Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052069,
          "longitude": 19.942889
        },
        "address": "Ul. Miodowa 8",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Edo Fusion",
        "updatedAt": "2013-02-28T20:35:26.511Z",
        "order": 130,
        "objectId": "YCRIB7mewu",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "edo@edosushi.pl",
      "createdAt": "2013-03-02T21:14:36.541Z",
      "order": 50,
      "type": "email",
      "updatedAt": "2015-09-01T09:51:27.240Z",
      "icon": "envelope",
      "objectId": "p7MhsIAb5R"
    },
    {
      "icon": "percent",
      "createdAt": "2016-03-23T08:09:31.299Z",
      "updatedAt": "2016-03-23T09:37:32.934Z",
      "order": 45,
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "name": "Cosa Nostra",
        "updatedAt": "2013-02-28T20:34:27.720Z",
        "createdAt": "2012-12-01T13:06:29.400Z",
        "address": "Ul. Dajwór 25",
        "order": 80,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.050801,
          "longitude": 19.949412
        },
        "info": "Cosa Nostra is an Italian trattoria laid in Kazimierz, one of the most famous district in Cracow, and at the same time carefully hidden from the town noise.  On weekdays from hr 12 to 16 we offer 50% discount to all dishes from the menu. We have also all-year-round garden and wireless internet connection. If you are searching for a place to enjoy a couple of beers with your friends, we invite you into our basements where you can enjoy the most interesting live broadcasted sports events on LCD TV sets.",
        "objectId": "B25bAYVfF5",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "ABB discount",
      "value": "40% between 12:00-17:00",
      "type": "discount",
      "objectId": "pDzkr08QhN"
    },
    {
      "value": "http://www.museum.baden.ch/xml_11/internet/de/intro.cfm",
      "order": 40,
      "type": "url",
      "title": "Website",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "39izZUdjlg"
      },
      "updatedAt": "2015-10-07T11:38:10.489Z",
      "icon": "globe",
      "createdAt": "2015-10-07T09:43:43.659Z",
      "objectId": "pEzTSZkbg7"
    },
    {
      "title": "Website",
      "createdAt": "2013-03-02T20:56:39.433Z",
      "spot": {
        "createdAt": "2012-12-01T13:06:30.489Z",
        "updatedAt": "2013-02-28T20:34:42.236Z",
        "address": "Ul. Kanonicza 7",
        "name": "La Campana",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057056,
          "longitude": 19.937503
        },
        "type": "restaurant",
        "info": "The restaurant is located in the Old Town, at Kanonicza Street 7, one of the oldest streets of Krakow, near the Archdiocesan Museum and the Bishops Palace. ",
        "order": 90,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "sMV6ZIMrXR",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:55:59.509Z",
      "icon": "globe",
      "order": 60,
      "value": "http://www.lacampana.pl/en",
      "type": "url",
      "objectId": "pHWw734mIX"
    },
    {
      "icon": "globe",
      "order": 60,
      "spot": {
        "updatedAt": "2013-01-21T15:45:30.379Z",
        "type": "hotel",
        "order": 60,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058296,
          "longitude": 19.933274
        },
        "createdAt": "2012-10-15T11:39:09.829Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
        "name": "Radisson BLU",
        "address": "Ul. Straszewskiego",
        "objectId": "458tmli0cB",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "url",
      "createdAt": "2013-01-22T15:33:03.364Z",
      "value": "http://www.radissonblu.com/hotel-krakow",
      "updatedAt": "2015-09-01T09:56:06.173Z",
      "title": "Website",
      "objectId": "pRTYKqDnj1"
    },
    {
      "icon": "clock",
      "createdAt": "2015-05-08T09:11:14.455Z",
      "value": "MON-SUN|12:00-22:00",
      "spot": {
        "createdAt": "2015-05-08T08:51:38.429Z",
        "name": "Kawaleria",
        "type": "restaurant",
        "order": 16,
        "info": "The Kawaleria Restaurant is  which refer to tradition of polish cavalry. The original interior design, wherein old Poland and its customs seems to be still alive certainly will be interesting for all of our guests. The restaurant offers three dining rooms. The seasonal garden illuminated with candles, immersed in the green is an ideal place for a romantic dinner.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060217,
          "longitude": 19.935414
        },
        "updatedAt": "2015-05-08T08:54:50.961Z",
        "address": "Ul. Gołębia 4",
        "objectId": "g9l8Z2oPGB",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "type": "open",
      "updatedAt": "2015-09-01T09:58:05.901Z",
      "order": 30,
      "objectId": "pnZtx4o4eg"
    },
    {
      "spot": {
        "name": "Holiday Inn",
        "type": "hotel",
        "updatedAt": "2013-01-21T15:44:35.054Z",
        "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
        "createdAt": "2012-10-15T11:34:27.379Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 0,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.0592,
          "longitude": 19.943626
        },
        "address": "Ul. Wielopole 4",
        "objectId": "hLzmXeDV1d",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "value": "150",
      "createdAt": "2012-10-15T11:52:20.994Z",
      "icon": "pedestrian",
      "updatedAt": "2015-09-01T09:31:57.482Z",
      "order": 0,
      "type": "distance",
      "objectId": "ptD3b7SxBO"
    },
    {
      "icon": "pedestrian",
      "createdAt": "2013-03-02T21:14:24.831Z",
      "type": "distance",
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:33.572Z",
      "value": "850",
      "order": 0,
      "spot": {
        "type": "restaurant",
        "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
        "createdAt": "2012-12-01T13:06:33.571Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052069,
          "longitude": 19.942889
        },
        "address": "Ul. Miodowa 8",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Edo Fusion",
        "updatedAt": "2013-02-28T20:35:26.511Z",
        "order": 130,
        "objectId": "YCRIB7mewu",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "qM4JIATBYu"
    },
    {
      "order": 20,
      "createdAt": "2015-10-07T12:28:51.170Z",
      "updatedAt": "2015-10-07T12:31:32.921Z",
      "value": "+41 56 200 18 18",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "L3y60tTqcm"
      },
      "icon": "phone",
      "title": "+41 56 200 18 18",
      "type": "phone",
      "objectId": "qWQmrUo9XG"
    },
    {
      "order": 20,
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "XXlqwj6XJR"
      },
      "title": "Opening|hours",
      "createdAt": "2015-10-07T11:48:52.149Z",
      "updatedAt": "2015-10-07T11:53:34.503Z",
      "value": "11.00 - 00.00",
      "icon": "clock",
      "type": "open",
      "objectId": "qYKpMtAciW"
    },
    {
      "type": "distance",
      "order": 0,
      "icon": "pedestrian",
      "updatedAt": "2015-09-01T09:31:44.670Z",
      "value": "550",
      "spot": {
        "address": "Ul. Stolarska 13",
        "updatedAt": "2013-02-28T20:34:10.863Z",
        "info": "Our restaurant is famous for its fantastic beef imported from Argentina directly to our kitchen. Having such wide range of beef to choose and also special selected wines from around the world.",
        "name": "Pimiento",
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:28.230Z",
        "order": 70,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.059791,
          "longitude": 19.938757
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "SL9huVbKje",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-02-28T22:27:05.761Z",
      "title": "Distance|from office",
      "objectId": "qaSLPXp9RB"
    },
    {
      "order": 20,
      "createdAt": "2015-10-07T11:45:38.205Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "eZqoASw3uM"
      },
      "title": "Opening|hours",
      "type": "open",
      "icon": "clock",
      "updatedAt": "2015-10-07T11:53:22.885Z",
      "value": "08.00-00.00",
      "objectId": "qexgOXTWvT"
    },
    {
      "order": 30,
      "title": "+41 56 200 18 18",
      "updatedAt": "2015-10-07T12:16:03.664Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "y55Ua6eDXQ"
      },
      "value": "+41 56 200 18 18",
      "createdAt": "2015-10-07T12:06:19.647Z",
      "icon": "phone",
      "type": "phone",
      "objectId": "rJCsU87LEs"
    },
    {
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-03T14:35:36.306Z",
      "updatedAt": "2013-03-20T21:20:05.040Z",
      "icon": "phone",
      "order": 40,
      "title": "+48 12 429 51 41",
      "value": "+48 12 429 51 41",
      "type": "phone",
      "objectId": "rJXMUIfw05"
    },
    {
      "value": "5",
      "order": 10,
      "spot": {
        "name": "Holiday Inn",
        "type": "hotel",
        "updatedAt": "2013-01-21T15:44:35.054Z",
        "info": "Holiday Inn Kraków City Center five star hotel is conveniently located in the heart of the Kraków Old Town only 5 minutes walking distance from ABB office and only 5 minutes away from the Main Market Square and Jewish district - Kazimierz the biggest area of restaurants and bars and only 15 km away from the Balice Airport.",
        "createdAt": "2012-10-15T11:34:27.379Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 0,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.0592,
          "longitude": 19.943626
        },
        "address": "Ul. Wielopole 4",
        "objectId": "hLzmXeDV1d",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2012-10-15T11:52:22.222Z",
      "type": "category",
      "updatedAt": "2015-09-03T07:56:43.444Z",
      "icon": "star",
      "title": "Category",
      "objectId": "rYdDdmx7Y5"
    },
    {
      "title": "Distance|from office",
      "value": "1750",
      "order": 0,
      "createdAt": "2013-03-17T09:52:26.994Z",
      "updatedAt": "2015-09-01T09:31:27.325Z",
      "icon": "pedestrian",
      "type": "distance",
      "spot": {
        "type": "sight",
        "info": "The showrooms of the Main Building host temporary exhibitions presenting – in keeping with the Museum’s mission – works drawn from internal holdings as well as objects on loan from other institutions or private collectors.",
        "updatedAt": "2013-03-24T20:54:35.758Z",
        "address": "Al. 3 Maja 1",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060075,
          "longitude": 19.92377
        },
        "order": 70,
        "createdAt": "2012-12-01T13:33:48.407Z",
        "name": "National Museum",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "eh3pUJxZcs",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "rsVPqGKU0S"
    },
    {
      "createdAt": "2013-03-02T21:02:13.083Z",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.045855,
          "longitude": 19.94909
        },
        "address": "Ul. Józefińska 4",
        "order": 110,
        "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
        "name": "Kura",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:31.428Z",
        "updatedAt": "2013-03-02T21:08:17.193Z",
        "objectId": "omLMbTRPgC",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "9-55|1",
      "type": "price",
      "updatedAt": "2015-09-01T09:53:59.556Z",
      "title": "Dinner price",
      "order": 20,
      "icon": "money",
      "objectId": "sTXN0bw1pQ"
    },
    {
      "spot": {
        "type": "restaurant",
        "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
        "createdAt": "2012-12-01T13:06:33.571Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052069,
          "longitude": 19.942889
        },
        "address": "Ul. Miodowa 8",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Edo Fusion",
        "updatedAt": "2013-02-28T20:35:26.511Z",
        "order": 130,
        "objectId": "YCRIB7mewu",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "clock",
      "createdAt": "2013-03-02T21:14:34.865Z",
      "order": 30,
      "updatedAt": "2015-09-01T09:58:18.014Z",
      "type": "open",
      "title": "Opening|hours",
      "value": "MON-SUN|12:00-22:00",
      "objectId": "scLQYPPZ3W"
    },
    {
      "order": 40,
      "title": "+48 502 377 180",
      "createdAt": "2013-03-02T21:02:14.905Z",
      "icon": "phone",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.045855,
          "longitude": 19.94909
        },
        "address": "Ul. Józefińska 4",
        "order": 110,
        "info": "Kura, which means \"treasure box\" is categorically the only place in this city which offers authentic Japanese. Laid out in two rooms in Krakow's emerging area of Podgórze, incredible passion here results in outstanding Japanese. This time the culinary journey is through the \"warm\" Japanese cuisine, where there is not only exhilarating sushi but also an array of Japanese noodles and other dishes served and prepared according to traditional Japanese recipes including the ramen, gyoza dumplings, tempura, sake teriyaki.",
        "name": "Kura",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:31.428Z",
        "updatedAt": "2013-03-02T21:08:17.193Z",
        "objectId": "omLMbTRPgC",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "phone",
      "updatedAt": "2013-03-02T21:06:04.580Z",
      "value": "+48 502 377 180",
      "objectId": "tNMPOtzbXj"
    },
    {
      "updatedAt": "2015-10-07T11:53:30.395Z",
      "createdAt": "2015-10-07T11:48:50.692Z",
      "value": "Gourmet",
      "type": "food",
      "order": 0,
      "icon": "cutlery",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "XXlqwj6XJR"
      },
      "title": "Cuisine",
      "objectId": "uLXsVhaGfi"
    },
    {
      "title": "Website",
      "type": "url",
      "createdAt": "2013-03-17T09:27:54.220Z",
      "updatedAt": "2015-09-01T09:55:54.746Z",
      "value": "http://www.kopieckosciuszki.pl/?lang=en",
      "spot": {
        "order": 50,
        "updatedAt": "2013-03-24T20:54:33.126Z",
        "address": "Al. Waszyngtona 1",
        "info": "The Kosciuszko Mound was raised in 1820-1823 to commemorate the Polish national hero Tadeusz Kosciuszko. In 1850-1854, under the partitions, the Austrian authorities erected a fortress around the Mound. Nowadays, the restored fortress contains a hotel, the radio station headquarters and two permanent exhibitions. The top of the Mound affords a vast panorama of Krakow and the surrounding area.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054922,
          "longitude": 19.89458
        },
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-12-01T13:33:49.701Z",
        "type": "sight",
        "name": "Kościuszko Mound",
        "objectId": "1N5VuGOJmq",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "globe",
      "order": 50,
      "objectId": "uc2fZ1gFOG"
    },
    {
      "spot": {
        "type": "restaurant",
        "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
        "createdAt": "2012-12-01T13:06:33.571Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052069,
          "longitude": 19.942889
        },
        "address": "Ul. Miodowa 8",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Edo Fusion",
        "updatedAt": "2013-02-28T20:35:26.511Z",
        "order": 130,
        "objectId": "YCRIB7mewu",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "createdAt": "2013-03-02T21:14:35.680Z",
      "type": "phone",
      "order": 40,
      "title": "+48 12 426 24 24",
      "updatedAt": "2013-03-02T21:17:53.732Z",
      "value": "+48 12 426 24 24",
      "objectId": "vFMq3GpOF9"
    },
    {
      "createdAt": "2013-01-22T15:24:45.116Z",
      "spot": {
        "name": "Park Inn",
        "type": "hotel",
        "createdAt": "2012-10-15T11:38:27.488Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Park Inn by Radisson Kraków hotel is nestled in the heart of the city, within walking distance of Wawel Castle, Main Market Square and Jewish district Kazimierz. ",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04762,
          "longitude": 19.92969
        },
        "address": "Ul. Monte Cassino 2",
        "updatedAt": "2013-01-21T16:13:18.730Z",
        "order": 70,
        "objectId": "uwzD7OhpiY",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:51:38.595Z",
      "value": "info.krakow@rezidorparkinn.com\n",
      "title": "Contact email",
      "order": 50,
      "type": "email",
      "icon": "envelope",
      "objectId": "vMuOOXkp1k"
    },
    {
      "updatedAt": "2015-10-07T11:39:30.019Z",
      "type": "phone",
      "title": "+41 56 200 87 8",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "5nOcDWSLHg"
      },
      "icon": "phone",
      "order": 0,
      "value": "+41 56 200 87 8",
      "createdAt": "2015-10-07T09:53:41.297Z",
      "objectId": "vSuUr1s4on"
    },
    {
      "icon": "cutlery",
      "order": 10,
      "createdAt": "2013-02-28T20:56:42.373Z",
      "value": "Italian",
      "title": "Cuisine",
      "type": "food",
      "updatedAt": "2015-09-01T09:56:42.649Z",
      "spot": {
        "updatedAt": "2013-02-28T20:30:25.566Z",
        "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060643,
          "longitude": 19.940241
        },
        "order": 20,
        "createdAt": "2012-12-01T13:06:17.978Z",
        "address": "Ul. Sienna 9",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Aperitif",
        "type": "restaurant",
        "objectId": "7DAxfA3Wgc",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "vZEhbY1Zji"
    },
    {
      "order": 50,
      "icon": "globe",
      "value": "http://www.wawel.krakow.pl/en/",
      "title": "Website",
      "type": "url",
      "updatedAt": "2015-09-01T09:56:12.940Z",
      "spot": {
        "updatedAt": "2013-03-14T14:28:45.026Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.054184,
          "longitude": 19.936296
        },
        "createdAt": "2012-07-30T11:13:05.840Z",
        "name": "Wawel Royal Castle",
        "address": "Ul. Wawel 5",
        "order": 10,
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The beginnings of the residence of Polish rulers on Wawel hill go back to an early Romanesque stone building from mid 11th century, called the palatium, whose remains are located in the northern wing of the present-day Castle. In time, the prince's residence on the hill was expanded eastwards. Along with the cathedral it was called \"the Upper Castle\", while \"the Lower Castle\" was a settlement consisting of courtiers' and clergy's houses and churches other than the cathedral.",
        "type": "sight",
        "objectId": "4XTRiLs5cc",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-03T15:02:34.186Z",
      "objectId": "vcheTWOmwL"
    },
    {
      "spot": {
        "updatedAt": "2013-02-28T20:30:25.566Z",
        "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060643,
          "longitude": 19.940241
        },
        "order": 20,
        "createdAt": "2012-12-01T13:06:17.978Z",
        "address": "Ul. Sienna 9",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Aperitif",
        "type": "restaurant",
        "objectId": "7DAxfA3Wgc",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "price",
      "order": 20,
      "updatedAt": "2015-09-01T09:54:04.961Z",
      "createdAt": "2013-02-28T20:56:38.538Z",
      "title": "Dinner price",
      "icon": "money",
      "value": "15-60|1",
      "objectId": "vdcDijYaCv"
    },
    {
      "createdAt": "2016-05-09T13:09:53.331Z",
      "updatedAt": "2016-05-09T13:11:33.773Z",
      "spot": {
        "createdAt": "2016-05-09T13:01:01.524Z",
        "updatedAt": "2016-05-09T13:05:50.743Z",
        "address": "Rynek Główny 16, Kraków",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Wierzynek Restaurant, as one of the oldest in Europe, is famous for its old Polish cuisine and care for royal court customs. The origin of our restaurant dates back to 1364, the year in which a splendid and abundant feast took place in a tenement on the Main Market Square.",
        "name": "Wierzynek",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060465,
          "longitude": 19.93722
        },
        "type": "restaurant",
        "order": 15,
        "objectId": "OmFvm0bzZc",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "+48 12 424 96 24",
      "type": "phone",
      "value": "+48 12 424 96 24",
      "icon": "phone",
      "order": 30,
      "objectId": "viAV4xF0HM"
    },
    {
      "spot": {
        "address": "Sukiennice",
        "order": 60,
        "type": "sight",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-03-17T09:48:38.800Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061668,
          "longitude": 19.937458
        },
        "createdAt": "2012-12-01T13:33:41.160Z",
        "info": "The Sukiennice, a huge market hall built in the 13th century in the middle of Rynek Główny (Main Square), enlarged in the 14th century in the Gothic style and remodelled in the mid-16th century after Renaissance fashion, was restored in 1875–1879 and became the city’s showpiece facility hosting grand balls and patriotic celebrations. Its location and character made the rooms on the first floor of the Sukiennice a perfect place for the National Museum in Krakow.",
        "name": "Sukiennice Gallery",
        "objectId": "r0KNe06MgN",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Contact email",
      "createdAt": "2013-03-17T09:40:15.809Z",
      "type": "email",
      "icon": "envelope",
      "value": "arajch@muzeum.krakow.pl",
      "order": 40,
      "updatedAt": "2015-09-01T09:51:23.553Z",
      "objectId": "vqoMPS7lpD"
    },
    {
      "updatedAt": "2015-09-01T09:53:49.927Z",
      "order": 20,
      "spot": {
        "createdAt": "2015-05-08T08:51:38.429Z",
        "name": "Kawaleria",
        "type": "restaurant",
        "order": 16,
        "info": "The Kawaleria Restaurant is  which refer to tradition of polish cavalry. The original interior design, wherein old Poland and its customs seems to be still alive certainly will be interesting for all of our guests. The restaurant offers three dining rooms. The seasonal garden illuminated with candles, immersed in the green is an ideal place for a romantic dinner.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060217,
          "longitude": 19.935414
        },
        "updatedAt": "2015-05-08T08:54:50.961Z",
        "address": "Ul. Gołębia 4",
        "objectId": "g9l8Z2oPGB",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "price",
      "icon": "money",
      "title": "Dinner price",
      "value": "15-60|1",
      "createdAt": "2015-05-11T19:54:35.531Z",
      "objectId": "w3B2SQAIkR"
    },
    {
      "updatedAt": "2015-05-08T09:13:41.214Z",
      "title": "+48 12 430 24 32",
      "spot": {
        "createdAt": "2015-05-08T08:51:38.429Z",
        "name": "Kawaleria",
        "type": "restaurant",
        "order": 16,
        "info": "The Kawaleria Restaurant is  which refer to tradition of polish cavalry. The original interior design, wherein old Poland and its customs seems to be still alive certainly will be interesting for all of our guests. The restaurant offers three dining rooms. The seasonal garden illuminated with candles, immersed in the green is an ideal place for a romantic dinner.",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060217,
          "longitude": 19.935414
        },
        "updatedAt": "2015-05-08T08:54:50.961Z",
        "address": "Ul. Gołębia 4",
        "objectId": "g9l8Z2oPGB",
        "__type": "Object",
        "className": "Spot"
      },
      "icon": "phone",
      "type": "phone",
      "value": "+48 12 430 24 32",
      "createdAt": "2015-05-08T09:11:13.826Z",
      "order": 40,
      "objectId": "wMNgzHBBce"
    },
    {
      "type": "distance",
      "value": "900",
      "order": 0,
      "spot": {
        "address": "Ul. Pawia 3",
        "name": "Andels",
        "createdAt": "2012-10-15T11:39:34.972Z",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.065652,
          "longitude": 19.945267
        },
        "type": "hotel",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-01-21T15:45:34.714Z",
        "info": "The hotel is easly accessible by car, train or plane, being siutated in the edge of the historic old town and next to the train station, bus terminal and the shopping centre Galeria Krakowska. The hotel is distinguished by its modern architecture, high standards service and very special atmosphere.",
        "objectId": "VBWkPaq5G7",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Distance|from office",
      "updatedAt": "2015-09-01T09:31:49.341Z",
      "createdAt": "2013-01-04T14:02:26.320Z",
      "icon": "pedestrian",
      "objectId": "wMwnLe5hZ2"
    },
    {
      "updatedAt": "2015-09-01T09:58:13.634Z",
      "value": "TUE-SUN|10:00-18:00",
      "createdAt": "2013-03-17T09:52:29.157Z",
      "icon": "clock",
      "type": "open",
      "order": 10,
      "spot": {
        "type": "sight",
        "info": "The showrooms of the Main Building host temporary exhibitions presenting – in keeping with the Museum’s mission – works drawn from internal holdings as well as objects on loan from other institutions or private collectors.",
        "updatedAt": "2013-03-24T20:54:35.758Z",
        "address": "Al. 3 Maja 1",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060075,
          "longitude": 19.92377
        },
        "order": 70,
        "createdAt": "2012-12-01T13:33:48.407Z",
        "name": "National Museum",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "objectId": "eh3pUJxZcs",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Opening|hours",
      "objectId": "wU1ep81O1X"
    },
    {
      "type": "phone",
      "order": 40,
      "spot": {
        "updatedAt": "2013-01-21T15:45:30.379Z",
        "type": "hotel",
        "order": 60,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058296,
          "longitude": 19.933274
        },
        "createdAt": "2012-10-15T11:39:09.829Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
        "name": "Radisson BLU",
        "address": "Ul. Straszewskiego",
        "objectId": "458tmli0cB",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "+48 12 618 88 88",
      "title": "+48 12 618 88 88",
      "icon": "phone",
      "createdAt": "2013-01-22T15:13:47.291Z",
      "updatedAt": "2013-03-20T21:20:46.552Z",
      "objectId": "waMXcyuqu4"
    },
    {
      "title": "Distance|from office",
      "value": "800",
      "order": 0,
      "icon": "pedestrian",
      "type": "distance",
      "createdAt": "2013-03-02T21:08:55.716Z",
      "updatedAt": "2015-09-01T09:31:34.354Z",
      "spot": {
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:32.489Z",
        "info": "The ancient name of Tokyo—Edo —adorns Edo Sushi, located in Krakow's historic Kazimierz. The sushi masters at Edo have arranged the menu in convenient \"sets\" that include well matched selections from the menu’s wide range.",
        "address": "Ul. Bożego Ciała 3",
        "name": "Edo Sushi Bar",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-02-28T20:35:13.879Z",
        "order": 120,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052138,
          "longitude": 19.942889
        },
        "objectId": "dZWI2J6dRb",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "wu369DsRMW"
    },
    {
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "updatedAt": "2013-03-24T20:53:30.811Z",
        "order": 50,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061065,
          "longitude": 19.936645
        },
        "type": "atm",
        "createdAt": "2012-12-01T12:38:12.693Z",
        "address": "Rynek Główny",
        "name": "Deutche Bank",
        "objectId": "3KGCvLl4yt",
        "__type": "Object",
        "className": "Spot"
      },
      "createdAt": "2013-01-24T14:47:23.491Z",
      "updatedAt": "2013-01-24T14:48:54.432Z",
      "title": "Distance|from office",
      "type": "distance",
      "value": "700",
      "objectId": "wxrPed3N6t"
    },
    {
      "updatedAt": "2015-09-01T09:56:46.244Z",
      "icon": "cutlery",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.057607,
          "longitude": 19.943488
        },
        "type": "restaurant",
        "info": "Il Calzone is a little piece of Italy in Krakow. You find here warm atmosphere, a bit of Mediterranean ease and above all delicacies from various corners of this sunny country.",
        "order": 10,
        "name": "Il Calzone",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "createdAt": "2012-07-06T20:21:05.223Z",
        "updatedAt": "2013-03-24T20:53:46.916Z",
        "address": "Ul. Starowiślna 15",
        "objectId": "J1lNLYTDFE",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "food",
      "title": "Cuisine",
      "value": "Italian",
      "order": 10,
      "createdAt": "2013-01-03T14:35:32.823Z",
      "objectId": "wyiHFW6ZTF"
    },
    {
      "updatedAt": "2013-03-24T18:51:17.982Z",
      "order": 30,
      "icon": "phone",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Bonarka City Center is a contemporary representation of municipal streets and market places. Buildings are made of high-quality natural materials, such as stone, wood and glass. The selection of the facade materials refers to the industrial past of the area as well as traditional shopping arcades from the turn of the 19th and 20th century. The complex comprises 270 shops, 30 cafes and Cinema City. ",
        "address": "Ul. Kamieńskiego 11",
        "order": 50,
        "name": "Bonarka",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.028531,
          "longitude": 19.950213
        },
        "type": "shopping",
        "updatedAt": "2013-03-24T18:23:42.276Z",
        "createdAt": "2013-03-06T18:29:04.679Z",
        "objectId": "9D34sbFF4d",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "phone",
      "createdAt": "2013-03-24T18:49:19.436Z",
      "value": "+48 12 298 60 00",
      "title": "+48 12 298 60 00",
      "objectId": "xDOQQVAQJG"
    },
    {
      "createdAt": "2013-03-24T18:25:49.095Z",
      "icon": "pedestrian",
      "updatedAt": "2015-09-01T09:31:25.394Z",
      "spot": {
        "address": "Ul. Pawia 5",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Galeria Krakowska is the most prestigous shopping centre in Krakow. It offers 270 shops and is located in a 5 minutes walk distance from the Main Square.",
        "name": "Galeria Krakowska",
        "type": "shopping",
        "createdAt": "2012-12-01T13:20:54.852Z",
        "updatedAt": "2013-03-24T18:22:15.889Z",
        "order": 10,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.066836,
          "longitude": 19.945457
        },
        "objectId": "9hhFoHtz1i",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 0,
      "title": "Distance|from office",
      "value": "1000",
      "type": "distance",
      "objectId": "xG7VcGeShP"
    },
    {
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "r4Lw9xWWYg"
      },
      "type": "price",
      "createdAt": "2015-10-07T12:19:58.966Z",
      "title": "Price",
      "icon": "money",
      "order": 10,
      "updatedAt": "2015-10-12T09:04:09.802Z",
      "value": "121",
      "objectId": "xKClcLh4LE"
    },
    {
      "type": "category",
      "value": "3",
      "icon": "star",
      "spot": {
        "order": 10,
        "updatedAt": "2013-01-21T15:45:00.152Z",
        "address": "Ul. Wielopole 3",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "In the historic center of Kraków was born a new quality - three star Wielopole Hotel. Every element has been designed and manufactured with the utmost care for guest comfort. ",
        "type": "hotel",
        "name": "Wielopole",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058906,
          "longitude": 19.943482
        },
        "createdAt": "2012-10-15T11:35:52.471Z",
        "objectId": "BcEzwnbk9J",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 10,
      "updatedAt": "2015-09-03T07:56:41.223Z",
      "title": "Category",
      "createdAt": "2013-01-04T13:21:08.712Z",
      "objectId": "xKpWGPn1Ag"
    },
    {
      "title": "Distance|from office",
      "type": "distance",
      "icon": "pedestrian",
      "createdAt": "2013-01-04T14:02:20.294Z",
      "updatedAt": "2015-09-01T09:31:50.081Z",
      "value": "900",
      "order": 0,
      "spot": {
        "updatedAt": "2013-01-21T15:45:30.379Z",
        "type": "hotel",
        "order": 60,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058296,
          "longitude": 19.933274
        },
        "createdAt": "2012-10-15T11:39:09.829Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Hotel Radisson Blu is located only a few steps from charming Planty Park and only 10 minutes walking distance from Royal Wawel Castle and Main Market Square. Guests enjoy fresh seafood and tasty international fare prepared with local ingredients at the hotel's on-site restaurants.",
        "name": "Radisson BLU",
        "address": "Ul. Straszewskiego",
        "objectId": "458tmli0cB",
        "__type": "Object",
        "className": "Spot"
      },
      "objectId": "xLreOIRsHc"
    },
    {
      "spot": {
        "name": "Miód Malina",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.058205,
          "longitude": 19.938447
        },
        "type": "restaurant",
        "info": "Each detail of Miód Malina Restaurant located in a 14th century tenement on the corner of Grodzka and Poselska streets refers to the warm atmosphere of a picturesque village in the centre of Krakow. Is a place where each guest may taste Polish and Italian cuisines in a sublime setting.",
        "createdAt": "2012-12-01T13:06:27.068Z",
        "updatedAt": "2013-02-28T20:33:54.615Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "order": 60,
        "address": "Ul. Grodzka 40",
        "objectId": "XYUuQv8NkK",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "email",
      "updatedAt": "2015-09-01T09:51:33.077Z",
      "icon": "envelope",
      "createdAt": "2013-02-28T22:17:21.641Z",
      "order": 50,
      "title": "Contact email",
      "value": "restauracja@miodmalina.pl",
      "objectId": "xOSXNC9epA"
    },
    {
      "createdAt": "2016-05-09T13:13:05.283Z",
      "updatedAt": "2016-05-09T13:13:34.424Z",
      "value": "rezerwacja@wierzynek.com.pl",
      "type": "email",
      "title": "Contact email",
      "spot": {
        "createdAt": "2016-05-09T13:01:01.524Z",
        "updatedAt": "2016-05-09T13:05:50.743Z",
        "address": "Rynek Główny 16, Kraków",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "Wierzynek Restaurant, as one of the oldest in Europe, is famous for its old Polish cuisine and care for royal court customs. The origin of our restaurant dates back to 1364, the year in which a splendid and abundant feast took place in a tenement on the Main Market Square.",
        "name": "Wierzynek",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060465,
          "longitude": 19.93722
        },
        "type": "restaurant",
        "order": 15,
        "objectId": "OmFvm0bzZc",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 45,
      "icon": "envelope",
      "objectId": "y22G5s7aRL"
    },
    {
      "title": "Cuisine",
      "updatedAt": "2015-10-13T09:10:22.585Z",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "y55Ua6eDXQ"
      },
      "icon": "cutlery",
      "order": 0,
      "type": "food",
      "value": "Versatile",
      "createdAt": "2015-10-07T12:06:07.038Z",
      "objectId": "y36lBcy14n"
    },
    {
      "spot": {
        "name": "Qubus",
        "order": 50,
        "type": "hotel",
        "address": "Ul. Nadwiślanska 6",
        "updatedAt": "2013-01-21T15:45:19.844Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "info": "The stylish four-star hotel is situated in the vicinity of the historical district of Kazimierz, with a convenient access to most of historical monuments and public institutions of Kraków. It is also located in a quiet area on the banks of the Vistula river which makes your stay a peaceful and relaxing experience.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.04675,
          "longitude": 19.950331
        },
        "createdAt": "2012-10-15T11:37:41.395Z",
        "objectId": "DNd9Gfr2U7",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Free wireless Internet",
      "type": "wifi",
      "icon": "wifi",
      "order": 30,
      "createdAt": "2013-01-04T14:22:09.938Z",
      "updatedAt": "2015-05-12T09:55:12.363Z",
      "objectId": "yQjNPtWJPN"
    },
    {
      "icon": "envelope",
      "title": "Contact email",
      "updatedAt": "2015-09-01T09:51:45.046Z",
      "spot": {
        "info": "Hotel Grodek is located in one of the most charming and quiet parts of Krakow's Old Town. Grodek offers rooms furnished in an antique style with a truly aristocratic taste and in highest standards.",
        "updatedAt": "2013-01-21T15:45:14.302Z",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Grodek",
        "type": "hotel",
        "address": "Ul. Na Grodku 4",
        "order": 30,
        "createdAt": "2012-10-15T11:37:07.849Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060813,
          "longitude": 19.942497
        },
        "objectId": "8Zp5it8WW3",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "email",
      "value": "grodek@donimirski.com",
      "createdAt": "2013-01-22T15:24:42.741Z",
      "order": 50,
      "objectId": "ya5JcYSJ59"
    },
    {
      "createdAt": "2015-10-07T12:29:03.260Z",
      "updatedAt": "2015-10-13T08:43:23.392Z",
      "title": "Website",
      "value": "http://www.bluecityhotel.ch/mobile/en/home",
      "icon": "globe",
      "type": "url",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "L3y60tTqcm"
      },
      "order": 40,
      "objectId": "ygJQIrkC9w"
    },
    {
      "updatedAt": "2013-02-28T21:02:41.269Z",
      "createdAt": "2013-02-28T20:56:30.357Z",
      "spot": {
        "updatedAt": "2013-02-28T20:30:25.566Z",
        "info": "Our recipe for Your enjoyable time is a bit of luxury, decadence in the atmosphere of sophisticated wine and fusion cusine with French and Italian pop classic sounds in the background. We have created a place which we want to share with You, a place where over a bottle of wine you will leave your problems and worries behind the doorstep of our restaurant.",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060643,
          "longitude": 19.940241
        },
        "order": 20,
        "createdAt": "2012-12-01T13:06:17.978Z",
        "address": "Ul. Sienna 9",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Aperitif",
        "type": "restaurant",
        "objectId": "7DAxfA3Wgc",
        "__type": "Object",
        "className": "Spot"
      },
      "order": 40,
      "value": "+48 12 432 33 33",
      "title": "+48 12 432 33 33",
      "type": "phone",
      "icon": "phone",
      "objectId": "ygLjNlmzMu"
    },
    {
      "type": "price",
      "title": "Dinner price",
      "order": 20,
      "createdAt": "2013-03-02T21:14:34.078Z",
      "icon": "money",
      "updatedAt": "2015-09-01T09:53:57.966Z",
      "spot": {
        "type": "restaurant",
        "info": " Edo Fusion, the sister restaurant of pure Japanese Edo Sushi, is as the name suggests an excellent locale for much sought after Asian fusion, where dishes created with a wide canvas of flavors especially from the recognized cuisines of Japan and Thailand are juxtaposed with flavors and techniques from the Mediterranean, Italy and even Mexico; this is creativity in the kitchen at its very best.",
        "createdAt": "2012-12-01T13:06:33.571Z",
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.052069,
          "longitude": 19.942889
        },
        "address": "Ul. Miodowa 8",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Edo Fusion",
        "updatedAt": "2013-02-28T20:35:26.511Z",
        "order": 130,
        "objectId": "YCRIB7mewu",
        "__type": "Object",
        "className": "Spot"
      },
      "value": "20-70|2",
      "objectId": "ykSclNJIIP"
    },
    {
      "order": 20,
      "icon": "globe",
      "createdAt": "2015-10-07T09:53:40.508Z",
      "updatedAt": "2015-10-07T11:39:42.977Z",
      "type": "url",
      "value": "http://www.baden.ch/xml_1/internet/de/application/d78/d190/f205.cfm",
      "title": "Website",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "5nOcDWSLHg"
      },
      "objectId": "z8lmNGAOnV"
    },
    {
      "title": "Distance|from office",
      "icon": "pedestrian",
      "type": "distance",
      "order": 0,
      "createdAt": "2013-03-02T21:20:14.939Z",
      "spot": {
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.05729,
          "longitude": 19.944413
        },
        "type": "restaurant",
        "name": "Cukiernia Cichowscy",
        "createdAt": "2012-12-01T13:06:34.763Z",
        "info": "Cichowscy Confectionery offers traditional polish cakes and pralins. \n",
        "updatedAt": "2013-02-28T20:35:41.811Z",
        "address": "Ul. Starowiślna 21",
        "order": 30,
        "objectId": "VGcIpSDrMU",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:31:32.764Z",
      "value": "50",
      "objectId": "zIbv96pqTz"
    },
    {
      "icon": "money",
      "spot": {
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.061184,
          "longitude": 19.938356
        },
        "info": "The Szara Restaurant is located in the house of the same name (The Grey House) at the Market Square.  Our cuisine specializes in European dishes, and we need to mention our deliciously cooked fish (salmon and pikeperch) and our famous fish soup, as well as sirloin served in various ways (e.g. tournedos or planksteak), not to mention our veal (medallion or schnitzel) which cannot be matched by anyone else.",
        "type": "restaurant",
        "address": "Ul. Rynek Główny 6",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Szara",
        "createdAt": "2015-05-08T08:51:34.031Z",
        "updatedAt": "2015-05-08T08:54:28.812Z",
        "order": 13,
        "objectId": "Rtm5XqoTJx",
        "__type": "Object",
        "className": "Spot"
      },
      "type": "price",
      "value": "25-100|3",
      "createdAt": "2015-05-08T08:55:32.468Z",
      "title": "Dinner price",
      "order": 20,
      "updatedAt": "2015-09-01T09:53:52.554Z",
      "objectId": "zJ02MtPFaE"
    },
    {
      "type": "food",
      "icon": "cutlery",
      "createdAt": "2013-02-28T22:04:45.845Z",
      "value": "Polish",
      "order": 10,
      "spot": {
        "address": "Rynek Główny 10",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Wesele",
        "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060708,
          "longitude": 19.937957
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:24.949Z",
        "updatedAt": "2013-03-24T20:53:25.776Z",
        "objectId": "TtWjyelace",
        "__type": "Object",
        "className": "Spot"
      },
      "title": "Cuisine",
      "updatedAt": "2015-09-01T09:56:41.808Z",
      "objectId": "zR0Ja4gC4O"
    },
    {
      "value": "http://www.bluecityhotel.ch/mobile/en/restaurant",
      "order": 50,
      "createdAt": "2015-10-07T12:06:21.364Z",
      "updatedAt": "2015-10-13T09:19:24.732Z",
      "type": "url",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "y55Ua6eDXQ"
      },
      "title": "Website",
      "icon": "globe",
      "objectId": "zVxlF1hdf1"
    },
    {
      "spot": {
        "address": "Rynek Główny 10",
        "city": {
          "__type": "Pointer",
          "className": "City",
          "objectId": "K7kfEUTGad"
        },
        "name": "Wesele",
        "info": "The restaurant is a great place for meetings and business dinners. Particularly interesting are the rooms on the first floor, which remained impressive fourteenth-century wooden ceilings painted in floral designs.The décor of the restaurant partly refers to the tradition of Krakow wedding ceremony.",
        "order": 40,
        "position": {
          "__type": "GeoPoint",
          "latitude": 50.060708,
          "longitude": 19.937957
        },
        "type": "restaurant",
        "createdAt": "2012-12-01T13:06:24.949Z",
        "updatedAt": "2013-03-24T20:53:25.776Z",
        "objectId": "TtWjyelace",
        "__type": "Object",
        "className": "Spot"
      },
      "updatedAt": "2015-09-01T09:31:47.518Z",
      "title": "Distance|from office",
      "icon": "pedestrian",
      "type": "distance",
      "order": 0,
      "createdAt": "2013-02-28T22:04:44.952Z",
      "value": "580",
      "objectId": "zX1vSA4AyX"
    },
    {
      "value": "11.30 - 14.00",
      "order": 20,
      "title": "Opening|hours",
      "createdAt": "2015-10-07T12:06:18.691Z",
      "type": "open",
      "icon": "clock",
      "spot": {
        "__type": "Pointer",
        "className": "Spot",
        "objectId": "y55Ua6eDXQ"
      },
      "updatedAt": "2015-10-07T12:16:04.919Z",
      "objectId": "zyAG9MAsfv"
    }
  ],
  "WhoIsWho": [
    {
      "icon": "plmibis",
      "order": 75,
      "updatedAt": "2017-02-02T17:52:53.293Z",
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "createdAt": "2015-05-14T15:23:42.980Z",
      "position": "Power & Control R&D Team",
      "special": false,
      "name": "Mirosław Bistroń",
      "objectId": "CWgFVuXoBm"
    },
    {
      "updatedAt": "2015-06-01T07:47:55.183Z",
      "order": 80,
      "position": "Global CRC Financial Controller",
      "special": false,
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "icon": "plbekas",
      "createdAt": "2015-05-05T14:07:02.930Z",
      "name": "Beata Kasprzyk",
      "objectId": "F1H2teVJYo"
    },
    {
      "name": "Przemysław Balcerek",
      "createdAt": "2015-05-05T14:06:59.390Z",
      "special": false,
      "order": 50,
      "position": "Grid Infrastructure&Automation|R&D for PPMV DA",
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "icon": "plprbal",
      "updatedAt": "2015-06-01T07:47:32.769Z",
      "objectId": "IonQwVSF8r"
    },
    {
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "order": 70,
      "position": "Electrical Power Products|R&D for DMDR",
      "special": false,
      "createdAt": "2015-05-05T14:07:01.248Z",
      "icon": "plmaszl",
      "updatedAt": "2015-06-01T07:47:44.735Z",
      "name": "Marcin Szlosek",
      "objectId": "L5U1BSBY3f"
    },
    {
      "createdAt": "2015-05-05T14:07:15.370Z",
      "special": false,
      "order": 90,
      "icon": "plbekna",
      "updatedAt": "2015-05-05T14:11:29.272Z",
      "position": "HR Business Partner",
      "name": "Beata Knap",
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "objectId": "XccRKjErum"
    },
    {
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "name": "Anna Curyło",
      "icon": "plancur",
      "special": false,
      "createdAt": "2015-05-05T14:05:31.563Z",
      "updatedAt": "2017-02-02T18:26:10.963Z",
      "order": 20,
      "position": "Office & Labs Manager",
      "objectId": "YJyc2j9yNG"
    },
    {
      "position": "Manufact., Mechanics&Material Science",
      "special": false,
      "updatedAt": "2016-11-06T14:57:18.926Z",
      "name": "Lukasz Malinowski",
      "createdAt": "2015-05-05T14:06:58.550Z",
      "order": 40,
      "icon": "pllumal",
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "objectId": "eABUCC9Bfj"
    },
    {
      "name": "Marek Florkowski",
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "position": "Head of PLCRC",
      "special": false,
      "updatedAt": "2015-05-05T14:06:16.074Z",
      "icon": "plmaflo",
      "order": 10,
      "createdAt": "2015-05-05T14:05:30.157Z",
      "objectId": "etdVKmURNo"
    },
    {
      "position": "Condition Monitoring, Sensors| and Electronics; R&D for LP & PG",
      "updatedAt": "2017-02-02T17:52:21.672Z",
      "order": 30,
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "createdAt": "2015-05-05T14:06:57.580Z",
      "special": false,
      "icon": "plmawoj",
      "name": "Mariusz Wójcik",
      "objectId": "f1gx6B3Yqu"
    },
    {
      "updatedAt": "2016-11-06T14:56:39.119Z",
      "special": false,
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "icon": "pldasza",
      "createdAt": "2015-05-05T14:07:00.356Z",
      "name": "Daniel Szary",
      "position": "Simulation Support Team",
      "order": 60,
      "objectId": "fuP9BFmIcZ"
    },
    {
      "updatedAt": "2016-03-25T14:05:51.796Z",
      "order": 100,
      "createdAt": "2015-05-05T14:07:17.872Z",
      "name": "Grzegorz Kubać",
      "position": "IS Administrator",
      "icon": "plgrkub",
      "special": false,
      "location": {
        "__type": "Pointer",
        "className": "Location",
        "objectId": "llz1M6ZdiU"
      },
      "objectId": "xMlk1Ruxh4"
    }
  ]
}
);

angular.module('visit_plcrc.filters', []).filter('floorFilter', function () {
    return function (floor) {
        switch (floor) {
            case '-1':
                return 'Basement';
            case '0':
                return 'Ground floor';
            case '1':
                return '1st floor';
            case '2':
                return '2nd floor';
            case '3':
                return '3rd floor';
            default:
                return floor + 'th floor';
        }
    };
})
.filter('spotType', function () {
    return function (floor) {
        switch (floor) {
            case 'hotel':
                return 'Hotels';
            case 'sight':
                return 'Sightseeing';
            case 'restaurant':
                return 'Restaurants';
            case 'shopping':
                return 'Shopping';
            default:
                return 'Sights';
        }
    };
})
.filter('distance', function () {
    return function (input) {
        if (input >= 1) {
            return (input).toFixed(2) + ' km';
        } else {
            return (input * 1000).toFixed(0) + ' m';
        }
    };
})
.filter('distanceMeters', function () {
    return function (input) {
        var value = parseFloat(input);
        if (value >= 1000) {
            return (value / 1000).toFixed(1) + ' km';
        } else {
            return (value).toFixed(0) + ' m';
        }
    };
})
.filter('linedivider', function () {
    return function (input) {
        return input.replace(/\|/g, '<br/>');
    };
})
.filter('nolinedivider', function () {
    return function (input) {
        return input.replace("|", " ");
    };
})
.filter('money', function () {
    return function (input) {
        return input.split("|")[0] + ' PLN';
    };
})
.filter('linkType', function () {
    return function (icon) {
        switch (icon) {
            case 'phone':
                return 'tel:';
            case 'envelope':
                return 'mailto:';
            default:
                return '';
        }
    };
})
.filter('hideAfterFilter', function () {
    Date.prototype.addDays =
         function (days) {
             return new Date(this.getTime() + days * 24 * 60 * 60 * 1000);
         };
    return function (events) {
        var toReturn = [];
        var currentDate = new Date();
        events.forEach(function (event) {
            if (!event.hasOwnProperty('startDate')||!event.startDate) {
                event.startDate = { "__type": "Date", 'iso': (new Date()).toISOString() };
            }
            if (!event.hasOwnProperty('endDate')||!event.endDate) {
                event.endDate = { "__type": "Date", 'iso': (new Date()).toISOString() };
            }
            if ((new Date(event.endDate.iso).addDays(event.hideAfter)) > currentDate) toReturn.push(event);
        });
        return toReturn.reverse();
    };
})
;
angular.module('visit_plcrc.directives', [])
.directive('fallbackSrc', function () {
    var fallbackSrc = {
        link: function postLink(scope, iElement, iAttrs) {
            iElement.bind('error', function () {
                angular.element(this).attr("src", iAttrs.fallbackSrc);
            });
        }
    };
    return fallbackSrc;
})
.directive('autofocus', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function ($scope, $element) {
            $timeout(function () {
                $element[0].focus();
            });
        }
    };
}])
.directive('selectOnClick', ['$window', function ($window) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var focusedElement;
            element.on('click', function () {
                if (focusedElement != this) {
                    this.select();
                    focusedElement = this;
                }
            });
            element.on('blur', function () {
                focusedElement = null;
            });
        }
    };
}])
.directive('browseTo', function ($ionicGesture) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            var handleTap = function (e) {
                // todo: capture Google Analytics here
                var inAppBrowser = window.open(encodeURI($attrs.browseTo), '_system');
            };
            var tapGesture = $ionicGesture.on('tap', handleTap, $element);
            $scope.$on('$destroy', function () {
                // Clean up - unbind drag gesture handler
                $ionicGesture.off(tapGesture, 'tap', handleTap);
            });
        }
    };
});
