cordova.define('cordova-bluebird-api.BluebirdBarcodeScanner', function (require, exports, module) {

    var cordova = require('cordova');
    var exec = require('cordova/exec');

    /**
    * Constructor.
    *
    * @returns {BarcodeScanner}
    */
    function BarcodeScanner() {

    };

    /**
     * Turn on barcode scanner listeners.  Listens for hardward button events.
     * 
     * Success function should expect a barcode to be passed in
     */
    BarcodeScanner.prototype.register = function (successCallback, errorCallback, noSound) {
        errorCallback = errorCallback || function () { };

        if (typeof errorCallback !== "function") {
            console.log("BarcodeScanner.register failure: failure callback is not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BarcodeScanner.register failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BluebirdBarcodeScanner', 'register', [ noSound ? false : true ]);
    };
    /**
     * Turn off barcode scanner
     */
    BarcodeScanner.prototype.unregister = function (successCallback, errorCallback) {
        errorCallback = errorCallback || function () { };

        if (typeof errorCallback !== "function") {
            console.log("BarcodeScanner.unregister failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BarcodeScanner.unregister failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BluebirdBarcodeScanner', 'unregister', []);
    };
    /**
     * Manually turn on barcode scanner
     */
    BarcodeScanner.prototype.softScanOn = function () {

        var successCallback = function (result) {
            console.log("Barcode scanner scanner on result= " + result);
        }
        var errorCallback = function (result) {
            console.log("Barcode scanner scanner on failed " + result);
        }

        exec(successCallback, errorCallback, 'BluebirdBarcodeScanner', 'softScanOn', []);
    };

    /**
     * Manually turn off barcode scanner
     */
    BarcodeScanner.prototype.softScanOff = function () {

        var successCallback = function (result) {
            console.log("Barcode scanner scanner off result= " + result);
        }
        var errorCallback = function (result) {
            console.log("Barcode scanner scanner off failed " + result);
        }

        exec(successCallback, errorCallback, 'BluebirdBarcodeScanner', 'softScanOff', []);
    };

    /**
     * Manually turn set scanning parameters
     */
    BarcodeScanner.prototype.setParameter = function (param, value) {
        var successCallback = function (result) {
            console.log("setParameter success: " + result);
        }
        var errorCallback = function (result) {
            console.log("setParameter failed: " + result);
        }

        exec(successCallback, errorCallback, 'BluebirdBarcodeScanner', 'setParameter', [param, value]);
    };

    BarcodeScanner.prototype.setParameterEx = function (param, value) {
        var successCallback = function (result) {
            console.log("setParameterEx success: " + result);
        }
        var errorCallback = function (result) {
            console.log("setParameterEx failed: " + result);
        }

        exec(successCallback, errorCallback, 'BluebirdBarcodeScanner', 'setParameterEx', [param, value]);
    };

    /**
     * Play a tone.
     */
    BarcodeScanner.prototype.playTone = function (tone, length) {
        var successCallback = function (result) {
            console.log("playTone success: " + result);
        }
        var errorCallback = function (result) {
            console.log("playTone failed: " + result);
        }

        exec(successCallback, errorCallback, 'BluebirdBarcodeScanner', 'playTone', [tone, length]);
    };

    //create instance
    var barcodeScanner = new BarcodeScanner();

    module.exports = barcodeScanner;
});
