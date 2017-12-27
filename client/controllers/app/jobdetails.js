angular.module('app').controller('app_jobdetails', app_jobdetails);
function app_jobdetails($scope, app) {
    'use strict';
    $scope.categories = [
                    {categoryName:"Job Info", image:"images/jobdetails/info.png"},
                    {categoryName:"Owner Info", image:"images/jobdetails/contact.png"},
                    {categoryName:"Job History", image:"images/jobdetails/History.png"}
                ];
               
    app.init($scope);
}