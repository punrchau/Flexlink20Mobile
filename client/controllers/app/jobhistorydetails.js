angular.module('app').controller('app_jobhistorydetails', app_jobhistorydetails);
function app_jobhistorydetails($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
     $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
}