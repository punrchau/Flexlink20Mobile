angular.module('app').controller('app_jobhistorydetails', app_jobhistorydetails);
function app_jobhistorydetails($scope,$rootScope, app) {
    'use strict';
    app.init($scope);
    
    $scope.ticketnumber=$rootScope.ticketnumber;
    $scope.ownername=$rootScope.ownername;
    
    $scope.goToRemarks=function(){
        app.action('servicejobhistory', 'close', this);
        app.call('Home.remarksPage', {});
    };
    
    $scope.goToJobInfo=function(){
        app.action('servicejobhistory', 'close', this);
        app.call('Home.viewJobInfo', {});
    };
    
     $scope.goToPhotoUpload=function(){
       app.action('servicejobhistory', 'close', this);
       app.call('Home.unitPhoto', {});
    };
    
    $scope.goToUnitOwner=function(){
        app.action('servicejobhistory', 'close', this);
        app.call('Home.viewUnitOwnerInfo', {});
    };
    
    $scope.goToHistory=function(){
        app.action('servicejobhistory', 'close', this);
        app.call('Home.viewUnitOwnerInfo', {});
        $rootScope.jobHistory="jobHistory";
    };
      
    $scope.goToUnitInfo=function(){
        app.action('servicejobhistory', 'close', this);
        app.call('Home.viewUnitInfo', {});
    };
}