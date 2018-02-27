angular.module('app').controller('app_unitowner', app_unitowner);
function app_unitowner($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
    
    
    $scope.ticketnumber='IND-JOB#-000000001';
    $scope.ownername='Ram Chauhan';
}