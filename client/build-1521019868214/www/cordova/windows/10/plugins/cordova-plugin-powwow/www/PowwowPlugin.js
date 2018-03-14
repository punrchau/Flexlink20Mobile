cordova.define("cordova-plugin-powwow.PowwowPlugin", function(require, exports, module) {
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/
var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');


var event = function (event, success, error) {
    exec(
        success,
        error,
        'PowwowPlugin',
        'event',
        [event]
    );
};
var Powwow = function () {

};
Powwow.updateAppSources = function (url, successCallback) {
    var appManager = cordova.PowwowAppManager();
    appManager.showPage(appManager.states.process.url,"", function (result) {
    });
    event(
    {
        action: 'serverEvent',
        type: 'downloadAppSources',
        url: url
    },
    function (result) {
        console.log("Resources Downloaded");
        //unzip sources from the resource
        event(
        {
            action: 'serverEvent',
            type: 'unpackAppSources',
            url: url
        },
        function (result) {
            console.log("Resources unpacked");
            //appManager.navigate(appManager.states.client.url);
            appManager.hidePage();
            successCallback(result);
        },
        function (error) {
            console.log("Error happened during resourceUnzipe call.")
        });
    },
    function (error) {
        console.log("Error happened during resourceDownloade call.")
    });
};

Powwow.getAppSettings = function (showSettings, successCallback) {
	event(
		{
			action: 'serverEvent',
			type: 'getAppSettings',
			showSettings: showSettings
		},
		function(result) {
			successCallback(result);
		},
		function(error) {
			console.log("Error happened during getAppSettings call.")
		}
	);
};

module.exports = Powwow;
});
