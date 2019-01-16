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