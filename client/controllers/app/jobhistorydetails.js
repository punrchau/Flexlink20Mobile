angular.module('app').controller('app_jobhistorydetails', app_jobhistorydetails);
function app_jobhistorydetails($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.goBack=function () {
        window.history.back();
    }
    
}