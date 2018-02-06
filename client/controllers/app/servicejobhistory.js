angular.module('app').controller('app_servicejobhistory', app_servicejobhistory);
function app_servicejobhistory($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.goToJobHistoryDetails = function (index) {
            //app.go('jobhistorydetails');
            app.call('Home.viewJobHistoryDetails',{'index':index});
        /*else {
            app.call('PartReceiveDetail.goToHome', {});
        }*/
    }
}