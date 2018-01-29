angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.home', {
        views: {
            app: {
                controller: 'app_home',
                templateProvider: function (app) {
                    return app.templateProvider('app.home');
                }
            }
        }
    }).state('app.partreceivedetails', {
        views: {
            app: {
                controller: 'app_partreceivedetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.partreceivedetails');
                }
            }
        }
    }).state('app.changepartquantity', {
        views: {
            app: {
                controller: 'app_changepartquantity',
                templateProvider: function (app) {
                    return app.templateProvider('app.changepartquantity');
                }
            }
        }
    }).state('app.uploadimage', {
        views: {
            app: {
                controller: 'app_uploadimage',
                templateProvider: function (app) {
                    return app.templateProvider('app.uploadimage');
                }
            }
        }
    }).state('app.prehomeloadflexlink', {
        views: {
            app: {
                controller: 'app_prehomeloadflexlink',
                templateProvider: function (app) {
                    return app.templateProvider('app.prehomeloadflexlink');
                }
            }
        }
    }).state('app.prehomeloadoem', {
        views: {
            app: {
                controller: 'app_prehomeloadoem',
                templateProvider: function (app) {
                    return app.templateProvider('app.prehomeloadoem');
                }
            }
        }
    }).state('app.prehomeloadjobmgmt', {
        views: {
            app: {
                controller: 'app_prehomeloadjobmgmt',
                templateProvider: function (app) {
                    return app.templateProvider('app.prehomeloadjobmgmt');
                }
            }
        }
    }).state('app.servicejob', {
        views: {
            app: {
                controller: 'app_servicejob',
                templateProvider: function (app) {
                    return app.templateProvider('app.servicejob');
                }
            }
        }
    }).state('app.repairjob', {
        views: {
            app: {
                controller: 'app_repairjob',
                templateProvider: function (app) {
                    return app.templateProvider('app.repairjob');
                }
            }
        }
    }).state('app.jobdetails', {
        views: {
            app: {
                controller: 'app_jobdetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.jobdetails');
                }
            }
        }
    }).state('app.details', {
        views: {
            app: {
                controller: 'app_details',
                templateProvider: function (app) {
                    return app.templateProvider('app.details');
                }
            }
        }
    }).state('app.jobinfo', {
        views: {
            app: {
                controller: 'app_jobinfo',
                templateProvider: function (app) {
                    return app.templateProvider('app.jobinfo');
                }
            }
        }
    }).state('app.unitinfo', {
        views: {
            app: {
                controller: 'app_unitinfo',
                templateProvider: function (app) {
                    return app.templateProvider('app.unitinfo');
                }
            }
        }
    });
});