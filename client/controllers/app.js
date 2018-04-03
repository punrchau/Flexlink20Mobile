angular.module('app').controller('app', app);

function app($scope, app, $ionicPopup) {
    'use strict';
     app.loginModel = 'Login';

    $scope.showPopup = function (data) {

        if (data.validationMsg && !$scope.validationPopup) {
            if (data.validationMsg.isValidationMsg) {
                $scope.validationPopup = $ionicPopup.alert({
                        title: '',
                        template: data.validationMsg.msg,
                        buttons: [{
                            text: 'Ok',
                            type: 'button-positive',
                            onTap: function (e) {
                                delete $scope.validationPopup;
                                app.call('Messages.submitValidationDialog', {
                                    action: 'ok'
                                });

                            }
                        }]
                    })
                    .then(function () {
                        delete $scope.validationPopup;
                    });

            } 
        }
        if (data.confirmationMsg && !$scope.confirmationPopup) {
            if (data.confirmationMsg.isConfirmMsg) {
                $scope.confirmationPopup = $ionicPopup.alert({
                        title: '',
                        template: data.confirmationMsg.msg,
                        buttons: [{
                                text: 'Ok',
                                type: 'button-positive',
                                onTap: function (e) {
                                    delete $scope.confirmationPopup;
                                    app.call('Messages.submitConfirmationDialog', {
                                        action: 'ok'
                                    });

                                }
                            },
                            {
                                text: 'Cancel',
                                type: 'button-light',
                                onTap: function (e) {
                                    delete $scope.confirmationPopup;
                                    app.call('Messages.submitConfirmationDialog', {
                                        action: 'cancel'
                                    });

                                }
                            }
                        ],
                    })
                    .then(function () {
                        delete $scope.confirmationPopup;
                    });
            }
        }
    }

}