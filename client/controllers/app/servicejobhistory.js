angular.module('app').controller('app_servicejobhistory', app_servicejobhistory);
function app_servicejobhistory($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
     $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
    
    $scope.goToJobHistoryDetails = function (index) {
            //app.go('jobhistorydetails');
            app.call('Home.viewJobHistoryDetails',{'index':index});
        /*else {
            app.call('PartReceiveDetail.goToHome', {});
        }*/
    }
}