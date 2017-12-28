angular.module('app').controller('app_repairjob', app_repairjob);
function app_repairjob($scope, app) {
    'use strict';
    $scope.chart.label='Ram Chart';
    app.init($scope);
}