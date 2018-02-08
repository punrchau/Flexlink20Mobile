angular.module('app').controller('app_jobinfo', app_jobinfo);
function app_jobinfo($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
}