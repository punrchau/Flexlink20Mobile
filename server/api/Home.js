var fs = require('fs');
exports.on_InvokeFlexLink = function (page) {
     page.href('https://fl20commonqa.azurewebsites.net').screen('prehomeloadflexlink');
}
exports.on_InvokeOEM2 = function (page) {
    page.action('Home','OEM2').screen('prehomeloadoem');
}
exports.on_InvokePartMgmt = function (page) {
    page.href('https://fl20commonqa.azurewebsites.net/mobile/#/partreceives').screen('prehomeloadjobmgmt');
}

exports.on_InvokeServiceJob = function (page) {
    page.href('https://fl20lenovoqa.azurewebsites.net/mobile/#/servicejobs').screen('prehomeloadjobmgmt');  
}

// exports.on_InvokeServiceJob = function (page) {
    // page.href('http://fl20commonqa.azurewebsites.net/mobile/#/servicejobs').screen('prehomeloadjobmgmt');  
// }

exports.editRecord = function(page, params) {
    page.action('Home', 'records[' + params.index + '].selectRecord');
    page.action('Home', 'editRecord');
}

exports.viewRecord = function(page, params) {
    page.action('servicejob', 'listItems[' + params.index + '].selectRecord');
    page.action('servicejob', 'actions.photoupload');
}

exports.viewJobHistoryDetails = function(page, params) {
    page.action('servicejobhistory', 'jobhistory[' + params.index + '].selectRecord');
}

exports.deleteRecord = function(page, params) {
    page.action('PartReceiveDetails', 'partDiscrepancy.details[' + params.index + '].selectRecord');
    page.action('PartReceiveDetails', 'partDiscrepancy.delete');
}

exports.goToServiceJob = function (page) {
    var test=page;
}

//menu click

exports.remarksPage = function(page, params) {
    page.action('servicejob', 'actions.servicejobremarks');
}

exports.viewJobInfo = function(page, params) {
    page.action('servicejob', 'actions.jobinfo');
}

exports.viewUnitOwnerInfo = function(page, params) {
    page.action('servicejob', 'actions.ownerinfo');
}

exports.viewJobHistory = function(page, params) {
    page.action('servicejob', 'actions.viewjobhistory');
}

exports.viewUnitInfo = function(page, params) {
    page.action('servicejob', 'actions.unitinfo');
}

exports.unitPhoto = function(page, params) {
    page.action('servicejob', 'actions.photoupload');
}

//end

exports.closePhotoUpload = function(page, params) {
    page.action('photoupload', 'close');
   // page.reload();
}

exports.backToJobHistory = function(page, params) {
    page.action('servicejobhistory', 'close');
    page.action('servicejob', 'actions.viewjobhistory');
}


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

    if(params.base64string==null || params.base64string==undefined){
         page.action('photoupload', 'save');
    }
    else{
       
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

             page.update('input[id=fileDescription]',params.descriptions);
             page.extract('photoupload')
            .data(function (data) {
                data.descriptions = params.descriptions;
                page.action('photoupload', 'save');
            });

        }, 3000);
    }
}