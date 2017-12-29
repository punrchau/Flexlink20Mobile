exports.goToHome = function(page, params) {
    page.action('PartReceiveDetails', 'actions.cancel');
}

exports.goToServiceJob = function (page) {
    page.href('http://fl20dev.azurewebsites.net/lenovo/#/repairjobs').screen('servicejob');;
}

