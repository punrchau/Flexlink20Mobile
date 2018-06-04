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
    }).state('app.unitowner', {
        views: {
            app: {
                controller: 'app_unitowner',
                templateProvider: function (app) {
                    return app.templateProvider('app.unitowner');
                }
            }
        }
    }).state('app.servicejobremarks', {
        views: {
            app: {
                controller: 'app_servicejobremarks',
                templateProvider: function (app) {
                    return app.templateProvider('app.servicejobremarks');
                }
            }
        }
    }).state('app.servicejobhistory', {
        views: {
            app: {
                controller: 'app_servicejobhistory',
                templateProvider: function (app) {
                    return app.templateProvider('app.servicejobhistory');
                }
            }
        }
    }).state('app.jobhistorydetails', {
        views: {
            app: {
                controller: 'app_jobhistorydetails',
                templateProvider: function (app) {
                    return app.templateProvider('app.jobhistorydetails');
                }
            }
        }
    }).state('app.photoupload', {
        views: {
            app: {
                controller: 'app_photoupload',
                templateProvider: function (app) {
                    return app.templateProvider('app.photoupload');
                }
            }
        }
    }).state('app.unitphoto', {
        views: {
            app: {
                controller: 'app_unitphoto',
                templateProvider: function (app) {
                    return app.templateProvider('app.unitphoto');
                }
            }
        }
    }).state('app.menu1', {
        views: {
            app: {
                controller: 'app_menu1',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu1');
                }
            }
        }
    });
});