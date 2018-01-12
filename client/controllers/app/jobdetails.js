angular.module('app').controller('app_jobdetails', app_jobdetails);
function app_jobdetails($scope, app) {
     'use strict';
      /*$scope.data.categories = [
                {categoryName:'Job Info', image:'images/jobdetails/Service_Info.png'},
                {categoryName:'Owner Info', image:'images/jobdetails/Owner_Info.jpg'},
                {categoryName:'Job History', image:'images/jobdetails/History.jpg'},
                {categoryName:'Remarks', image:'images/jobdetails/Remarks.png'},
                {categoryName:'Photo', image:'images/jobdetails/Photo.jpg'},
                {categoryName:'Unit Info', image:'images/jobdetails/unit_info.png'}
                ]; */
                
    $scope.jobinfos = {categoryName:'Job Info', image:'images/jobdetails/Service_Info.png'};
    $scope.ownerinfos = {categoryName:'Owner Info', image:'images/jobdetails/Owner_Info.jpg'};
    $scope.viewhistorys = {categoryName:'Job History', image:'images/jobdetails/History.jpg'};
    $scope.remarks = {categoryName:'Remarks', image:'images/jobdetails/Remarks.png'};
    $scope.photos = {categoryName:'Photo', image:'images/jobdetails/Photo.jpg'};
    $scope.unitinfos = {categoryName:'Unit Info', image:'images/jobdetails/unit_info.png'};
           
    app.init($scope);
    
     $scope.getJobInfo = function () {
          app.call('Home.getJobInfo', {});
    }
    
    /* $scope.goToServiceJob = function () {
     if (window.mocks) {
         app.go('servicejob');
        } else {
          app.call('PartReceiveDetail.goToServiceJob', {});
        }
    }*/
        
}