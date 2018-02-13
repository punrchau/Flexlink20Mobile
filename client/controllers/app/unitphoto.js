angular.module('app').controller('app_unitphoto', app_unitphoto);
function app_unitphoto($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.uploadPhoto = function () {
        app.action('unitphoto', 'upload', this);
    };
   
}