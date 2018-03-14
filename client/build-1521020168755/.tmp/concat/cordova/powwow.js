(function() {
    'use strict';

    /**
     * NOTE: Windows Edge returns "Android" inside "navigator.userAgent"
     */
    window.isPlatform = {
        android: function() {
            return !this.windowsPhone() && /Android/i.test(navigator.userAgent);
        },
        iOS: function() {
            return /iPhone|iPad|iPod/i.test(navigator.userAgent);
        },
        windows: function() {
            return !this.windowsPhone() && /Egde/i.test(navigator.userAgent);
        },
        windowsPhone: function() {
            return /Windows Phone/i.test(navigator.userAgent);
        },
        powWow: function() {
            return /PowwowMobile/i.test(navigator.userAgent) || /Crosswalk/i.test(navigator.userAgent);
        }
    };

    window.isPlatform.mobileBrowser = function() {
        var isMobile = window.isPlatform.android() || window.isPlatform.iOS() || window.isPlatform.windowsPhone();
        return isMobile && !window.isPlatform.powWow();
    };

    window.isPlatform.desktopBrowser = function() {
        return !window.isPlatform.android() && !window.isPlatform.iOS() && !window.isPlatform.windowsPhone();
    };

    var isPlatform = window.isPlatform;

    function injectCordova(cordovaSrc) {
        var script = window.document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = cordovaSrc;
        window.document.getElementsByTagName('head')[0].appendChild(script);
    }

    if (!isPlatform.powWow() && !isPlatform.windowsPhone()) {
        window.deviceIsReady = true;
        return false;
    }

    window.document.addEventListener('deviceready', function () {
        window.deviceIsReady = true;
        var angularApp = angular.element(document.body);
        var injector = angularApp.injector();
        var app = injector.get('app');
        if (window.isPlatform.android() && app.newPowwowLogin) {
            var ws = injector.get('ws');
            document.addEventListener("pause", function () {
                var webSocket = ws.getInstance();
                if (webSocket) {
                    webSocket.close()
                }
            }, false);
            document.addEventListener("resume", function () {
                if (app.alreadyConnected) {
                    ws.reconnect();
                }
            }, false);
        }
    });

    var scripts = document.getElementsByTagName('script');
    var matches = scripts[0].src.match(/\/?.+\/dependencies\/.+?\//);
    var prefix = 'cordova/';
    if (matches) {
        prefix = matches[0] + '/powwow-ui-common/' + prefix;
    }

    if (isPlatform.windowsPhone()) {
        Object.defineProperty(navigator.__proto__, 'pointerEnabled', { value: false });
		injectCordova(prefix + 'windows/10/WinJS/js/base.js');
        injectCordova(prefix + 'windows/10/cordova.js');
    } else if (isPlatform.iOS()) {
        injectCordova(prefix + 'ios/cordova.js');
    } else if (isPlatform.android()) {
        injectCordova(prefix + 'android/cordova.js');
    } else {
        window.deviceIsReady = true;
    }

    window.shouldAutorotate = function() {
        return true;
    };

    window.rotatedTo = function(rotationMode) {
        angular.element(document.body).scope().$broadcast('orientationChanged', rotationMode);
    };

    window.disconnectUser = function () {
        var angularApp = angular.element(document.body);
        var injector = angularApp.injector();
        var app = injector.get('app');
        app.logout();
    };

})();
