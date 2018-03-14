cordova.define("cordova-plugin-powwow.powwow", function(require, exports, module) {

    var argscheck = require('cordova/argscheck'),
        channel = require('cordova/channel'),
        utils = require('cordova/utils'),
        exec = require('cordova/exec'),
        cordova = require('cordova');

    var Powwow = function () {

    };

    //channel.onCordovaReady.subscribe(function () {
    //    Constants.APP_URL = window.localStorage.getItem('APP_URL');
    //    window.loadDefaultSetting();
    //});

    var event = function (event, success, error) {
        exec(
            success,
            error,
            'PowwowPlugin',
            'event',
            [event]
        );
    };

    Powwow.saveToken = function (jwt) {
        event(
            {
                type:'saveToken',
                jwt:jwt
            }
        );
    };

    Powwow.getUserCredentials = function (callback) {
        event(
            {
                action: 'serverEvent',
                type: 'userCredentials',
                key: 'loginKey'
            },
            function(result) {
                callback(result);
            }
        );
    };

    Powwow.doUserLogout = function () {
        event(
            {
                action: 'serverEvent',
                type: 'logout'
            }
        );
    };

    Powwow.doRecreateSession = function () {
        event(
            {
                action: 'serverEvent',
                type: 'recreate'
            }
        );
    };

    Powwow.showSideMenu = function () {
        event(
            {
                action: 'serverEvent',
                type: 'showSideMenu'
            }
        );
    };

    Powwow.showDocument = function (url) {
        event(
            {
                action: 'serverEvent',
                type: 'fileDownload',
                url: url
            }
        );
    };

    Powwow.scanBarCode = function (options, callback) {
        event(
            {
                action: 'serverEvent',
                type: 'scanBarCode',
                options: options
            },
            function(result) {
                callback(result);
            }
        );
    };

    Powwow.updateAppSources = function (url, callback) {
        event(
            {
                action: 'serverEvent',
                type: 'updateAppSources',
                url: url
            },
            function(result) {
                callback(result);
            }
        );
    };

    Powwow.getAppSettings = function (showSettings, callback) {
        event(
            {
                action: 'serverEvent',
                type: 'getAppSettings',
                showSettings: showSettings
            },
            function(result) {
                callback(result);
            }
        );
    };

    module.exports = Powwow;

});
