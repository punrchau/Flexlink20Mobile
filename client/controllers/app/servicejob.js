angular.module('app').controller('app_servicejob', app_servicejob);
function app_servicejob($scope, app) {
    'use strict';
    $scope.expanded = false;
    app.init($scope);
    
    $scope.viewRecord = function(index){
        app.call('Home.viewRecord',{'index':index});
    }
}