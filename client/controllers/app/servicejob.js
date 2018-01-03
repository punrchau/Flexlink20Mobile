var app = angular.module('app');

app.controller('app_servicejob', app_servicejob);

app.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|tel\sms):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
    ]);
    
function app_servicejob($scope, app) {
    'use strict';
    $scope.expanded = false;
    app.init($scope);
   
    /*$scope.viewRecord = function(index){
        app.call('Home.viewRecord',{'index':index});
    }*/
}