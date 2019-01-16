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
