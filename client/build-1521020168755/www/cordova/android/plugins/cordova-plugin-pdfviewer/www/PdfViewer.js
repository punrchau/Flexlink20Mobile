cordova.define("cordova-plugin-pdfviewer.PdfViewer", function(require, exports, module) {

    function PdfViewer() {

    }

    PdfViewer.prototype.showPdf = function(location) {
        cordova.exec(null, null, "PdfViewer", "showPdf", [location]);
    };

    cordova.addConstructor(function()
    {
        if(!window.plugins)
        {
            window.plugins = {};
        }
        window.plugins.PdfViewer = new PdfViewer();
        console.log("construct plugin PdfViewer");
    });
    

});
