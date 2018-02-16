angular.module('app').controller('app_unitinfo', app_unitinfo);
function app_unitinfo($scope,$rootScope, app) {
    'use strict';
     app.init($scope, function () {
     $scope.showPopup($scope.data);
    });
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
}