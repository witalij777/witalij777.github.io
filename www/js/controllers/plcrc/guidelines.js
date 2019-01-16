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