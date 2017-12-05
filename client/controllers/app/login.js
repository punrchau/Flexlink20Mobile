angular.module('app').controller('app_login', app_login);
function app_login($scope, app) {
    'use strict';
     app.init($scope);
     
     // Does not handle login error. Please add code to handle login failure
     $scope.doAppLogin = function(creds) {
        app.action('Login', 'signIn', creds);
     }
}