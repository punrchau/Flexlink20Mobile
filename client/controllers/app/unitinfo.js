angular.module('app').controller('app_unitinfo', app_unitinfo);
function app_unitinfo($scope,$rootScope, app) {
    'use strict';
     app.init($scope, function () {
     $scope.showPopup($scope.data);
    });
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
    
    $scope.goToRemarks=function(){
       app.action('unitinfo', 'close', this);
       app.call('Home.remarksPage', {});
    };
    
     $scope.goToPhotoUpload=function(){
       app.action('unitinfo', 'close', this);
       app.call('Home.unitPhoto', {});
    };
    
    $scope.goToJobInfo=function(){
        app.action('unitinfo', 'close', this);
        app.call('Home.viewJobInfo', {});
    };
    
    $scope.goToHistory=function(){
        app.action('unitinfo', 'close', this);
        app.call('Home.viewJobHistory', {});
    };
      
   $scope.goToUnitOwner=function(){
        app.action('unitinfo', 'close', this);
        app.call('Home.viewUnitOwnerInfo', {});
    };
    
}