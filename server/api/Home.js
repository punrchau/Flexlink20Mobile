var fs = require('fs');
exports.on_InvokeFlexLink = function (page) {
     //page.href('http://fl20qa.azurewebsites.net/common/#/home').screen('prehomeloadflexlink');
     //page.href('http://fl20dev.azurewebsites.net/common/#/home').screen('prehomeloadflexlink');
     page.href('http://fl20commonqa.azurewebsites.net/common/#/home').screen('prehomeloadflexlink');
      
}
exports.on_InvokeOEM2 = function (page) {
    page.action('Home','OEM2').screen('prehomeloadoem');
}
exports.on_InvokePartMgmt = function (page) {
    // page.href('http://fl20dev.azurewebsites.net/lenovo/#/partreceives').screen('prehomeloadjobmgmt');
    page.href('http://fl20commonqa.azurewebsites.net/mobile/#/partreceives').screen('prehomeloadjobmgmt');
}

exports.on_InvokeServiceJob = function (page) {
    //page.href('http://fl20dev.azurewebsites.net/lenovo/#/repairjobs').screen('prehomeloadjobmgmt');
    //page.href('http://fl20commonqa.azurewebsites.net/mobile/#/repairjobs').screen('prehomeloadjobmgmt');
    page.href('http://fl20commonqa.azurewebsites.net/mobile/#/servicejobs').screen('prehomeloadjobmgmt');  
}

exports.editRecord = function(page, params) {
    page.action('Home', 'records[' + params.index + '].selectRecord');
    page.action('Home', 'editRecord');
}

exports.viewRecord = function(page, params) {
    page.action('servicejob', 'listItems[' + params.index + '].selectRecord');
    //page.action('servicejob', 'viewRecord');
}

exports.viewJobHistoryDetails = function(page, params) {
    page.action('servicejobhistory', 'jobhistory[' + params.index + '].selectRecord');
    //page.action('servicejob', 'viewRecord');
}

exports.deleteRecord = function(page, params) {
    page.action('PartReceiveDetails', 'partDiscrepancy.details[' + params.index + '].selectRecord');
    page.action('PartReceiveDetails', 'partDiscrepancy.delete');
}

exports.goToServiceJob = function (page) {
    //page.href('http://fl20commonqa.azurewebsites.net/mobile/#/servicejobs');
    page.reload();
}

exports.viewJobInfo = function(page, params) {
    page.action('jobdetails', 'actions.jobinfo');
}

exports.viewUnitInfo = function(page, params) {
    page.action('jobdetails', 'actions.unitinfo');
}

exports.viewUnitOwnerInfo = function(page, params) {
    page.action('jobdetails', 'actions.ownerinfo');
}

exports.remarksPage = function(page, params) {
    page.action('jobdetails', 'actions.servicejobremarks');
}

exports.viewJobHistory = function(page, params) {
    page.action('jobdetails', 'actions.viewjobhistory');
}

exports.photoUpload = function(page, params) {
    page.action('jobdetails', 'actions.photoupload');
}

// exports.on_InvokePhotoUpload = function (page) {
//     page.action('UnitPhoto','upload');
// }

//upload picture of damaged part to website
exports.uploadImage = function (page, params) {
    var base64Data = params.base64string.split(',').pop();
    var date = Date.now();
    var dir = __dirname + "/../PartReceive/";

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    var fileName = __dirname + "/../PartReceive/" + "DamegedPart" + date + ".png";
    if(base64Data){
    require("fs").writeFile(fileName, base64Data, 'base64', function (err) {

    });
  }

    setTimeout(function () {
        page.uploadFile('input[type=file]', fileName);
        page.action('UploadImage', 'add');
    },  3000);

}


exports.unitPhotoSave = function (page, params) {
    var base64Data = params.base64string.split(',').pop();
    var date = Date.now();
    var dir = __dirname + "/../servicejobs/";

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    var fileName = __dirname + "/../servicejobs/" + "UnitPhoto" + date + ".png";
    if(base64Data){
    require("fs").writeFile(fileName, base64Data, 'base64', function (err) {

    });
  }

    setTimeout(function () {
        page.uploadFile('input[id=myFile]', fileName);
      //  page.action('photoupload', 'save');
    },  3000);

}