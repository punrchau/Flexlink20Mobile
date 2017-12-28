angular.module('app').controller('app_servicejob', app_servicejob);
function app_servicejob($scope, app) {
    'use strict';
    $scope.expanded = false;
    window.location.reload();
    app.init($scope);
}