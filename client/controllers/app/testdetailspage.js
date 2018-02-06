angular.module('app').controller('app_testdetailspage', app_testdetailspage);
function app_testdetailspage($scope, app) {
    'use strict';
    app.init($scope);
    $scope.date = new Date();
}