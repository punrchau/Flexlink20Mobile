var app = angular.module('app');

app.controller('app_servicejob', app_servicejob);



app.config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|tel|sms):/);
        // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
    ]);
    
function app_servicejob($scope,$rootScope, app) {
    'use strict';
    $scope.expanded = false;
    $scope.nlistItme=[];
    
    app.init($scope, function () {
     $scope.showPopup($scope.data);
    });
    
    $scope.sortBy="firstname";
    $scope.isDescending = false;
    $scope.changeIc = true;
    $scope.changeIcon = function () {
        $scope.isDescending = !$scope.isDescending;
       // $scope.changeIc = !$scope.changeIc;
    }
  
    $scope.searchstring = '';

    //function for search string
    $scope.customSearch = function (item) {
        // No filter, so return everything
        if (!$scope.searchstring) {
            return true;
        }
        var matched = true;
        // Otherwise apply your matching logic

        $scope.searchstring.split(' ').forEach(function (token) {
            matched = matched && match(item, escapeRegExp(token));
        });

        return matched;
    };
    
    function escapeRegExp(token) {
        return token.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
    
   
    $scope.goToJobDetails = function (listItems,item,index) {
        
        $scope.nlistItme=listItems;
        
        var newIndex=0;
        
        for (var i = 0; i <$scope.nlistItme.length; i++) {
           if($scope.nlistItme[i].ticketnumber==item.ticketnumber){
                break;
           }
           else{
             newIndex++;
           }
        }

        $rootScope.ticketnumber=item.ticketnumber;
        $rootScope.ownername=item.firstname +' '+ item.lastname;
        
        app.go('jobdetails');
        app.call('Home.viewRecord',{'index':newIndex});
        
        /*else {
            app.call('PartReceiveDetail.goToHome', {});
        }*/
    }
    
    var match = function (item, val) {
        var regex = new RegExp(val, 'i');
        return item.firstname.toLowerCase().search(regex) >= 0 
    };
    
    $scope.sortFunc = function(item){
        if($scope.sortBy=="firstname"){
            return item.firstname;
        }else if($scope.sortBy=="pickupaddress"){
            return item.pickupaddress;
        }else if($scope.sortBy=="problemcategory"){
            return item.problemcategory;
        }else if($scope.sortBy=="ticketnumber"){
            return item.ticketnumber;
        }
    };
    
    /*$scope.viewRecord = function(index){
        app.call('Home.viewRecord',{'index':index});
    }*/
}