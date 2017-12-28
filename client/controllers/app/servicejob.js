angular.module('app').controller('app_servicejob', app_servicejob);
function app_servicejob($scope, app) {
    'use strict';
    $scope.expanded = false;
     $scope.selectTabs = [
                {tabName:'Repair Job', isSelected:false},
                {tabName:'Pending Job', isSelected:true}
                ]; 
    app.init($scope);
}