angular.module('app').controller('app_servicejob', app_servicejob);
function app_servicejob($scope, app) {
    'use strict';
    app.init($scope);
    $scope.expanded = false;
    app.init($scope);

    $scope.editRecord = function(index){
        app.call('Home.editRecord',{'index':index});
    }
}