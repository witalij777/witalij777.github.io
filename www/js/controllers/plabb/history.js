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