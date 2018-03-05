angular.module('app').controller('app_servicejobhistory', app_servicejobhistory);
function app_servicejobhistory($scope,$rootScope, app) {
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
        app.call('Home.viewJobHistory', {});
    };
      
    $scope.goToUnitInfo=function(){
        app.action('servicejobhistory', 'close', this);
        app.call('Home.viewUnitInfo', {});
    };
    
    $scope.goToJobHistoryDetails = function (index) {
            //app.go('jobhistorydetails');
            app.call('Home.viewJobHistoryDetails',{'index':index});
        /*else {
            app.call('PartReceiveDetail.goToHome', {});
        }*/
    };
}