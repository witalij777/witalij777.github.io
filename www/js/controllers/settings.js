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
