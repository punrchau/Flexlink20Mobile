'use strict';
window.mocks = window.mocks || {};
window.mocks.Home = window.mocks.Home || {};
window.mocks.Home.editRecord = function ($scope, params, app) {
    return app.go('app.partreceivedetails');
};
window.mocks.Home.selectTabs_clickTab = function ($scope, params, app) {
    return app.go('app.home');
};