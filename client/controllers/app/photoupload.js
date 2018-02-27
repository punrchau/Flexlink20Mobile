angular.module('app').controller('app_photoupload', app_photoupload);
function app_photoupload($scope, app) {
    'use strict';
    
    app.init($scope, function () { 
        $scope.showPopup($scope.data);
    });
   
    $scope.closePhotoUpload = function () {
        app.call('Home.closePhotoUpload', {});
    };
    
    $scope.goToRemarks=function(){
       app.call('Home.closePhotoUpload', {});
       app.call('Home.remarksPage', {});
    };
    
    $scope.goToJobInfo=function(){
       app.call('Home.closePhotoUpload', {});
       app.call('Home.viewJobInfo', {});
    };
    
    $scope.goToUnitOwner=function(){
       app.call('Home.closePhotoUpload', {});
       app.call('Home.viewUnitOwnerInfo', {});
    };
    
    $scope.goToHistory=function(){
       app.call('Home.closePhotoUpload', {});
       app.call('Home.viewJobInfo', {});
    };
      
    $scope.goToUnitInfo=function(){
       app.call('Home.closePhotoUpload', {});
       app.call('Home.viewJobInfo', {});
    };
   
   $scope.savePhoto = function () {
        // $scope.base64string = angular.element(document.querySelector("#camera"))[0].value;
        $scope.base64string = $scope.data.attachmentContent;
        $scope.descriptions = $scope.data.descriptions;
        app.call('Home.unitPhotoSave', {
           'base64string': $scope.base64string,
           'descriptions': $scope.descriptions
        });
    }
}