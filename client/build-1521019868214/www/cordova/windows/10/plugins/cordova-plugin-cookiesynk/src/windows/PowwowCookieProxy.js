cordova.define("cordova-plugin-cookiesynk.PowwowCookieProxy", function(require, exports, module) {
    module.exports = {
        setCookies: function (successCallback, errorCallback, args) {
            document.cookie = args;
        }
    }

    require("cordova/exec/proxy").add("PowwowCookieProxy", module.exports);
});
