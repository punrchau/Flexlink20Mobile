angular.module('app').controller('app_servicejob', app_servicejob);
function app_servicejob($scope, app) {
    'use strict';
    $scope.expanded = false;
     $scope.name = "tel:+919090909090"
    app.init($scope);
   
    /*$scope.viewRecord = function(index){
        app.call('Home.viewRecord',{'index':index});
    }*/
}