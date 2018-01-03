var app = angular.module('app');

app.controller('app_servicejob','$cordovaSocialSharing', app_servicejob,$cordovaSocialSharing);

app.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|tel|sms):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
    ]);
    
function app_servicejob($scope, app,$cordovaSocialSharing) {
    'use strict';
    $scope.expanded = false;
    app.init($scope);
    
   $scope.shareSms = function() {
      $cordovaSocialSharing
      .shareViaSMS("message", "+918983852226")
      .then(function(result) {
       
      }, function(err) {
        
      });
    }
    /*$scope.viewRecord = function(index){
        app.call('Home.viewRecord',{'index':index});
    }*/
}