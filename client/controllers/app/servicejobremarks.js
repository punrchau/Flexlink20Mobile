angular.module('app').controller('app_servicejobremarks', app_servicejobremarks);
function app_servicejobremarks($scope,$rootScope, app) {
    'use strict';
     app.init($scope, function () {
        $scope.showPopup($scope.data);
         $scope.ticketnumber=$rootScope.ticketnumber;
        $scope.ownername=$rootScope.ownername;
    });
    
    
    $scope.goToPhotoUpload=function(){
       app.action('unitowner', 'close', this);
       app.call('Home.unitPhoto', {});
    };
    
    $scope.goToJobInfo=function(){
        app.action('photoupload', 'close', this);
        app.call('Home.viewJobInfo', {});
    };
    
    $scope.goToUnitOwner=function(){
        app.action('photoupload', 'close', this);
        app.call('Home.viewUnitOwnerInfo', {});
    };
    
    $scope.goToHistory=function(){
        app.action('photoupload', 'close', this);
        app.call('Home.viewJobHistory', {});
    };
      
    $scope.goToUnitInfo=function(){
        app.action('photoupload', 'close', this);
        app.call('Home.viewUnitInfo', {});
    };
}