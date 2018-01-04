angular.module('app').controller('app_home', app_home);
function app_home($scope, app) {
    'use strict';
    $scope.expanded = false;
    app.init($scope);
    $scope.flag=false;
    $scope.editRecord = function(index){
        app.call('Home.editRecord',{'index':index});
    }
}