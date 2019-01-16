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