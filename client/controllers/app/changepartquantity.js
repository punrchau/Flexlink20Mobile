angular.module('app').controller('app_changepartquantity', app_changepartquantity);

function app_changepartquantity($scope, app) {
    'use strict';
    app.init($scope, function () {

        $scope.showPopup($scope.data);

        $scope.data.receivedQuantity = parseInt($scope.data.receivedQuantity, 10);
        $scope.data.damagedQuantity = parseInt($scope.data.damagedQuantity, 10);
        $scope.data.excessQuantity = parseInt($scope.data.excessQuantity, 10);
        $scope.data.lostQuantity = parseInt($scope.data.lostQuantity, 10);
    });
    $scope.incrementQuantity = function (Qtype) {
        if (Qtype == 'receivedQuantity') {
            $scope.data.receivedQuantity += 1;
        } else if (Qtype == 'damagedQuantity') {
            $scope.data.damagedQuantity += 1;
        } else if (Qtype == 'excessQuantity') {
            $scope.data.excessQuantity += 1;
        } else {
            $scope.data.lostQuantity += 1;
        }

    }

    $scope.decrementQuantity = function (Qtype) {
        if (Qtype == 'receivedQuantity') {
            if ($scope.data.receivedQuantity > 0)
                $scope.data.receivedQuantity -= 1;
        } else if (Qtype == 'damagedQuantity') {
            if ($scope.data.damagedQuantity > 0)
                $scope.data.damagedQuantity -= 1;
        } else if (Qtype == 'excessQuantity') {
            if ($scope.data.excessQuantity > 0)
                $scope.data.excessQuantity -= 1;
        } else {
            if ($scope.data.lostQuantity > 0)
                $scope.data.lostQuantity -= 1;
        }
    }
}