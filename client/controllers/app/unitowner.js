angular.module('app').controller('app_unitowner', app_unitowner);
function app_unitowner($scope,$rootScope, app) {
    'use strict';
    
    app.init($scope, function () {
      $scope.togglemenus=false;
     
    });
 
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
    
    $scope.goToRemarks=function(){
       app.action('unitowner', 'close', this);
       app.call('Home.remarksPage', {});
    };
    
     $scope.goToPhotoUpload=function(){
       app.action('unitowner', 'close', this);
       app.call('Home.unitPhoto', {});
    };
    
    $scope.goToJobInfo=function(){
        app.action('unitowner', 'close', this);
        app.call('Home.viewJobInfo', {});
    };
    
    $scope.goToHistory=function(){
        app.action('unitowner', 'close', this);
        app.call('Home.viewJobHistory', {});
    };
      
    $scope.goToUnitInfo=function(){
        app.action('unitowner', 'close', this);
        app.call('Home.viewUnitInfo', {});
    };
    
     $scope.toggleMenu = function(){
       $scope.togglemenus=!$scope.togglemenus;  
     };
    
    
}