var stateManager = require('powwow-server-common').stateManager;
var previousState;
exports.on_messages = function (page) {
    page.extract('Messages')
        .data(function (data) {
            if (data.isPartReceiveDetail) {
                page.extract('PartReceiveDetails')
                    .data(function (data) {
                        page.screen('partreceivedetails');
                    });

                page.checkState(true);
            }
            if (data.isChangePartQuantity) {
                page.extract('ChangePartQuantity');
                page.checkState(true);

            }
            if (data.isUploadPhoto) {
                page.extract('UploadImage')
                page.checkState(true);

            }
            if (data.isServiceJobRemarks) {
                page.extract('servicejobremarks')
                page.checkState(true);

            }
        });
}

exports.submitValidationDialog = function (page, params) {
    page.lockState()
        .action('Messages', 'validationMsg.' + params.action)
        .then(function () {
         page.unlockState()
                .checkState(true);
        });

}
exports.submitConfirmationDialog = function (page, params) {

    page.lockState()
        .action('Messages', 'confirmationMsg.' + params.action)
        .then(function () {
            page.unlockState()
            .checkState(true);
        });

}