cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
        {
            "file": "plugins/com.ionic.keyboard/www/keyboard.js",
            "id": "com.ionic.keyboard.keyboard",
            "clobbers": [
                "cordova.plugins.Keyboard"
            ]
        },
        {
            "file": "plugins/cordova-plugin-cookiesync/www/cookies.js",
            "id": "cordova-plugin-cookiesync.cookiesync",
            "pluginId": "cordova-plugin-cookiesync",
            "clobbers": [
                "cordova.CookieSync"
            ]
        },
        {
            "file": "plugins/net.yoik.cordova.plugins.screenorientation/www/screenorientation.js",
            "id": "net.yoik.cordova.plugins.screenorientation.screenorientation",
            "clobbers": [
                "net.yoik.cordova.plugins.screenorientation.screenorientation"
            ]
        },
        {
            "file": "plugins/net.yoik.cordova.plugins.screenorientation/www/screenorientation.ios.js",
            "id": "net.yoik.cordova.plugins.screenorientation.screenorientation.ios",
            "merges": [
                "net.yoik.cordova.plugins.screenorientation.screenorientation"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
            "id": "org.apache.cordova.console.console",
            "clobbers": [
                "console"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.console/www/logger.js",
            "id": "org.apache.cordova.console.logger",
            "clobbers": [
                "cordova.logger"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.camera/www/CameraConstants.js",
            "id": "org.apache.cordova.camera.Camera",
            "clobbers": [
                "Camera"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.camera/www/CameraPopoverOptions.js",
            "id": "org.apache.cordova.camera.CameraPopoverOptions",
            "clobbers": [
                "CameraPopoverOptions"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.camera/www/Camera.js",
            "id": "org.apache.cordova.camera.camera",
            "clobbers": [
                "navigator.camera"
            ]
        },
        {
            "file": "plugins/org.apache.cordova.camera/www/ios/CameraPopoverHandle.js",
            "id": "org.apache.cordova.camera.CameraPopoverHandle",
            "clobbers": [
                "CameraPopoverHandle"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
            "id": "cordova-plugin-file.DirectoryEntry",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.DirectoryEntry"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
            "id": "cordova-plugin-file.DirectoryReader",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.DirectoryReader"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/Entry.js",
            "id": "cordova-plugin-file.Entry",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Entry"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/File.js",
            "id": "cordova-plugin-file.File",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.File"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileEntry.js",
            "id": "cordova-plugin-file.FileEntry",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileEntry"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileError.js",
            "id": "cordova-plugin-file.FileError",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileError"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileReader.js",
            "id": "cordova-plugin-file.FileReader",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileReader"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileSystem.js",
            "id": "cordova-plugin-file.FileSystem",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileSystem"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
            "id": "cordova-plugin-file.FileUploadOptions",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileUploadOptions"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
            "id": "cordova-plugin-file.FileUploadResult",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileUploadResult"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/FileWriter.js",
            "id": "cordova-plugin-file.FileWriter",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileWriter"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/Flags.js",
            "id": "cordova-plugin-file.Flags",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Flags"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
            "id": "cordova-plugin-file.LocalFileSystem",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.LocalFileSystem"
            ],
            "merges": [
                "window"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/Metadata.js",
            "id": "cordova-plugin-file.Metadata",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Metadata"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
            "id": "cordova-plugin-file.ProgressEvent",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.ProgressEvent"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/fileSystems.js",
            "id": "cordova-plugin-file.fileSystems",
            "pluginId": "cordova-plugin-file"
        },
        {
            "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
            "id": "cordova-plugin-file.requestFileSystem",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.requestFileSystem"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
            "id": "cordova-plugin-file.resolveLocalFileSystemURI",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "window"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
            "id": "cordova-plugin-file.iosFileSystem",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "FileSystem"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
            "id": "cordova-plugin-file.fileSystems-roots",
            "pluginId": "cordova-plugin-file",
            "runs": true
        },
        {
            "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
            "id": "cordova-plugin-file.fileSystemPaths",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "cordova"
            ],
            "runs": true
        },
        {
            "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
            "id": "cordova-plugin-file-transfer.FileTransferError",
            "pluginId": "cordova-plugin-file-transfer",
            "clobbers": [
                "window.FileTransferError"
            ]
        },
        {
            "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
            "id": "cordova-plugin-file-transfer.FileTransfer",
            "pluginId": "cordova-plugin-file-transfer",
            "clobbers": [
                "window.FileTransfer"
            ]
        },
        {
            "file": "plugins/cordova-plugin-device/www/device.js",
            "id": "cordova-plugin-device.device",
            "pluginId": "cordova-plugin-device",
            "clobbers": [
                "device"
            ]
        },
        {
            "file": "plugins/cordova-plugin-powwow/www/powwow.js",
            "id": "cordova-plugin-powwow.powwow",
            "pluginId": "cordova-plugin-powwow",
            "clobbers": [
                "cordova.PowwowPlugin",
                "window.PowwowPlugin"
            ]
        },
        {
            "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
            "id": "cordova-plugin-inappbrowser.inappbrowser",
            "pluginId": "cordova-plugin-inappbrowser",
            "clobbers": [
                "cordova.InAppBrowser.open",
                "window.open"
            ]
        },
        {
            "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification.js",
            "id": "de.appplant.cordova.plugin.local-notification.LocalNotification",
            "pluginId": "de.appplant.cordova.plugin.local-notification",
            "clobbers": [
                "cordova.plugins.notification.local",
                "plugin.notification.local"
            ]
        },
        {
            "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-core.js",
            "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Core",
            "pluginId": "de.appplant.cordova.plugin.local-notification",
            "clobbers": [
                "cordova.plugins.notification.local.core",
                "plugin.notification.local.core"
            ]
        },
        {
            "file": "plugins/de.appplant.cordova.plugin.local-notification/www/local-notification-util.js",
            "id": "de.appplant.cordova.plugin.local-notification.LocalNotification.Util",
            "pluginId": "de.appplant.cordova.plugin.local-notification",
            "merges": [
                "cordova.plugins.notification.local.core",
                "plugin.notification.local.core"
            ]
        },
        {
            "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
            "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
            "pluginId": "cordova-plugin-wkwebview-engine",
            "clobbers": [
                "cordova.exec"
            ]
        },
        {
            "id": "cordova-plugin-secure-storage.SecureStorage",
            "file": "plugins/cordova-plugin-secure-storage/www/securestorage.js",
            "pluginId": "cordova-plugin-secure-storage",
            "clobbers": [
                "SecureStorage"
            ]
        },
        {
            "id": "cordova-plugin-secure-storage.sjcl_ss",
            "file": "plugins/cordova-plugin-secure-storage/www/sjcl_ss.js",
            "pluginId": "cordova-plugin-secure-storage",
            "runs": true
        },
        {
            "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
            "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
            "pluginId": "phonegap-plugin-barcodescanner",
            "clobbers": [
                "cordova.plugins.barcodeScanner"
            ]
        },
        {
            "id": "cordova-plugin-lz-PdfViewer.PdfViewer",
            "file": "plugins/cordova-plugin-lz-PdfViewer/www/PdfViewer.js",
            "pluginId": "cordova-plugin-lz-PdfViewer",
            "clobbers": [
                "PdfViewer"
            ]
        },
        {
            "id": "cordova-plugin-keychain-touch-id.TouchID",
            "file": "plugins/cordova-plugin-keychain-touch-id/www/touchid.js",
            "pluginId": "cordova-plugin-keychain-touch-id",
            "clobbers": [
                "window.plugins.touchid"
            ]
        },
        {
            "id": "cordova-plugin-screen-orientation.screenorientation",
            "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
            "pluginId": "cordova-plugin-screen-orientation",
            "clobbers": [
                "cordova.plugins.screenorientation"
            ]
        },
        {
            "id": "phonegap-plugin-push.PushNotification",
            "file": "plugins/phonegap-plugin-push/www/push.js",
            "pluginId": "phonegap-plugin-push",
            "clobbers": [
                "PushNotification"
            ]
        }
    ];
    module.exports.metadata =
// TOP OF METADATA
    {
        "com.ionic.keyboard": "1.0.4",
        "org.apache.cordova.console": "0.2.13",
        "org.apache.cordova.camera": "0.3.6",
        "cordova-plugin-wkwebview-engine": "1.1.2"
    };
// BOTTOM OF METADATA
});
