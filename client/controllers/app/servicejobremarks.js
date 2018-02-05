angular.module('app').controller('app_servicejobremarks', app_servicejobremarks);
function app_servicejobremarks($scope, app) {
    'use strict';
     app.init($scope, function () {
        $scope.showPopup($scope.data);
    });
}