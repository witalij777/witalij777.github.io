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
