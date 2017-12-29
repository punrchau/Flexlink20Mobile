angular.module('app').controller('app_partreceivedetails', app_partreceivedetails);

function app_partreceivedetails($scope, app, $ionicPopup) {
    'use strict';
    $scope.headerExpanded = true;
    $scope.detailsExpanded = true;
    $scope.viewAllExpanded = false;
    app.init($scope, function () {

     $scope.showPopup($scope.data);
    });
    

    $scope.goToHome = function () {
        if (window.mocks) {
            app.go('home');
        } else {
            app.call('PartReceiveDetail.goToHome', {});
        }
    }
}