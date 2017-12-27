angular.module('app').controller('app_jobdetails', app_jobdetails);
function app_jobdetails($scope, app) {
    'use strict';
    
    app.init($scope,function(){
        $scope.data.company='Flex';
        
        $scope.data.categories = [
                            {categoryName:'Job Info', image:'images/jobdetails/Service_Info.png'}
                    ];
    });
   
                
    $scope.goToServiceJob = function () {
        if (window.mocks) {
            app.go('servicejob');
        } else {
            app.call('PartReceiveDetail.goToServiceJob', {});
        }
    }
}