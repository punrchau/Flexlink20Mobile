angular.module('app').controller('app_jobinfo', app_jobinfo);
function app_jobinfo($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
    
     $scope.goToHistory=function(){
        app.action('jobinfo', 'cancel', this);
        app.call('Home.viewJobHistory', {});
    };
    
    $scope.goToPhotoUpload=function(){
       app.action('jobinfo', 'cancel', this);
       app.call('Home.unitPhoto', {});
    };
    
    $scope.goToRemarks=function(){
        app.action('jobinfo', 'cancel', this);
        app.call('Home.remarksPage', {});
    };
    
    $scope.goToUnitOwner=function(){
        app.action('jobinfo', 'cancel', this);
        app.call('Home.viewUnitOwnerInfo', {});
    };
    
    $scope.goToUnitInfo=function(){
        app.action('jobinfo', 'cancel', this);
        app.call('Home.viewUnitInfo', {});
    };
}