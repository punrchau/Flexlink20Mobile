cordova.define('cordova-delta.OcrScanner', function (require, exports, module) {

    var cordova = require('cordova');
    var exec = require('cordova/exec');

    /**
    * Constructor.
    *
    * @returns {DeltaOcrScanner}
    */
    function DeltaOcrScanner() {

    };

    /**
     * Scan
     */
    DeltaOcrScanner.prototype.scan = function (successCallback, errorCallback) {
        errorCallback = errorCallback || function () { };

        if (typeof errorCallback !== "function") {
            console.log("DeltaOcrScanner.scan failure: failure callback is not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("DeltaOcrScanner.scan failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'DeltaOcrScanner', 'scan', []);
    };

    //create instance
    var deltaOcrScanner = new DeltaOcrScanner();

    module.exports = deltaOcrScanner;
});
