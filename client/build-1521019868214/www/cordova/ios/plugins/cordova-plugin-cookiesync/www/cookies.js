/**
 * Created by vadymmaslov on 3/24/17.
 */

cordova.define("cordova-plugin-cookiesync.cookiesync", function(require, exports, module) {


    var argscheck = require('cordova/argscheck'),
        channel = require('cordova/channel'),
        utils = require('cordova/utils'),
        exec = require('cordova/exec'),
        cordova = require('cordova');

    var CookieSync = {};

    CookieSync.setCookies = function(cookies) {
        exec(null, null, "CookieSync", "setCookies", cookies);
    };


    module.exports = CookieSync;


});
