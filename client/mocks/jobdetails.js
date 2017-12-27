'use strict';
window.mocks = window.mocks || {};
window.mocks.jobdetails = window.mocks.jobdetails || {};
window.mocks.jobdetails.actions_cancel = function ($scope, params, app) {
    return app.go('app.servicejob');
};
