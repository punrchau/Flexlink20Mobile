angular.module('app').controller('app', app);

function app($scope, app, $ionicPopup) {
    'use strict';
        if (window.isPlatform && window.isPlatform.powWow() && window.isPlatform.iOS() && window.cordova && window.cordova.plugins) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
        }
        
        if (window.StatusBar) {
            StatusBar.hide();
            document.body.classList.add('nostatusbar');
        }

        if (window.screen && window.screen.orientation) {
            screen.orientation.lock('portrait');
        }
        
app.loginScreen = 'app.login';
app.loginModel = 'Login';
/*app.loginAction = 'submit';
app.loginErrorField = 'errorMessage';*/
app.loginIsAction = true;


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
