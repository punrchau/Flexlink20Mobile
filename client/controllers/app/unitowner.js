angular.module('app').controller('app_unitowner', app_unitowner);
function app_unitowner($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
    
    $scope.goToRemarks=function(){
      
      
       app.call('Home.remarksPage', {});
        
    };
}