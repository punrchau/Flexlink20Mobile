'use strict';
window.mocks = window.mocks || {};
window.mocks.PartReceiveDetails = window.mocks.PartReceiveDetails || {};
window.mocks.PartReceiveDetails.cancel = function ($scope, params, app) {
    return app.go('app.home');
};
window.mocks.PartReceiveDetails.save = function ($scope, params, app) {
    return app.go('app.home');
};
window.mocks.PartReceiveDetails.update = function ($scope, params, app) {
    return app.go('app.home');
};