angular.module('app').controller('app_jobdetails', app_jobdetails);
function app_jobdetails($scope, app) {
    'use strict';
    $scope.lst = [
                    {categoryName:"Job Info", image:"images/jobdetails/info.png"},
                    {categoryName:"Owner Info", image:"images/jobdetails/contact.png"},
                    {categoryName:"Job Info", image:"images/jobdetails/info.png"},
                    {categoryName:"Job Info", image:"images/jobdetails/info.png"},
                    {categoryName:"Job Info", image:"images/jobdetails/info.png"},
                ]
                });
    app.init($scope);
}