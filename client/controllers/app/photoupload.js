angular.module('app').controller('app_photoupload', app_photoupload);
function app_photoupload($scope, app) {
    'use strict';
    app.init($scope);
    $scope.incrementQuant = function () {
        $scope.data.quantity++;
    };
    $scope.decrementQuant = function () {
        if ($scope.data.quantity > 0) {
            $scope.data.quantity--;
        }
    };
}