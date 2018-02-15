angular.module('app').controller('app_photoupload', app_photoupload);
function app_photoupload($scope, app) {
    'use strict';
    app.init($scope, function () { 
        $scope.showPopup($scope.data);
    });
   
   $scope.savePhoto = function () {
       // $scope.base64string = angular.element(document.querySelector("#camera"))[0].value;
       $scope.base64string = $scope.data.attachmentContent;
        app.call('Home.unitPhotoSave', {
           'base64string': $scope.base64string
        });
    }
}