angular.module('app').controller('app_unitinfo', app_unitinfo);
function app_unitinfo($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
}