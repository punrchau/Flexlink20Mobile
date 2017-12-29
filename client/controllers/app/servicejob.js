angular.module('app').controller('app_servicejob', app_servicejob);
function app_servicejob($scope, app) {
    'use strict';
    $scope.expanded = false;
    $scope.selectTabs=[
    {
      "$i": 0,
      "tabName": "Repair Job"
    },
    {
      "$i": 1,
      "tabName": "Service Job",
      "isSelected": true
    }
  ]
    app.init($scope);
}