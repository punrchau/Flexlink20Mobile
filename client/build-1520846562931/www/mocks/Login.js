'use strict';
window.mocks = window.mocks || {};
window.mocks.Login = window.mocks.Login || {};
window.mocks.Login.signIn = function ($scope, params, app) {
    return app.go('app.home');
};