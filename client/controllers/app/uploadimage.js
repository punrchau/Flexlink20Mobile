angular.module('app').controller('app_uploadimage', app_uploadimage);

function app_uploadimage($scope, app) {
    'use strict';
    app.init($scope, function () {

        $scope.showPopup($scope.data);
    });
    $scope.addPhoto = function () {
        $scope.base64string = angular.element(document.querySelector("#camera"))[0].value;
        app.call('Home.uploadImage', {
            'base64string': $scope.base64string
        });
    }

}