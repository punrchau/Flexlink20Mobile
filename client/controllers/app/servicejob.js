angular.module('app').controller('app_servicejob', app_servicejob);
function app_servicejob($scope, app) {
    'use strict';
    $scope.expanded = false;
    app.init($scope);

    $scope.editRecord = function(index){
        app.call('servicejob.editRecord',{'index':index});
    }
}