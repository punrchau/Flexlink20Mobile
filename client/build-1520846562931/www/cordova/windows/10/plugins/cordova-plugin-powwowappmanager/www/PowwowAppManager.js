cordova.define("cordova-plugin-powwowappmanager.PowwowAppManager", function(require, exports, module) {
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
(function () {
	var argscheck = require('cordova/argscheck'),
		channel = require('cordova/channel'),
		utils = require('cordova/utils'),
		exec = require('cordova/exec'),
		cordova = require('cordova');


	var event = function (event, success, error) {
		exec(
			success,
			error,
			'PowwowAppManager',
			'event',
			[event]
		);
	};

	module.exports = function () {
		var browserWrap = document.getElementsByClassName("PowwowPageFrame")[0],
			viewContainer = document.getElementsByClassName("view-container")[0];
		return {
			navigate: function (url) {
				window.location.replace(url);
			},
			states: {
				"process": { title: "Powwow", url: "ms-appx-web:///www/pages/progress/progress.html" },
				"settings": { title: "Settings", url: "ms-appx-web:///www/pages/settings/settings.html" },
				"client": { title: "Client WebApp", url: "ms-appx-web:///www/pages/client/www/index.html" }
			},
			init: function (url) {
				if (!browserWrap) {
					var $body = angular.element(document.getElementsByTagName('body'));
					browserWrap = document.createElement("div");
					browserWrap.style.display = "none";
					browserWrap.classList.add("PowwowPageFrame");
					popup = document.createElement("x-ms-webview");
					popup.id = "PowwowPageInnerFrame"
					popup.style.borderWidth = "0px";
					popup.style.width = "100%";
					popup.style.height = $body[0].scrollHeight+"px";
					browserWrap.appendChild(popup);
					
					$body.append(browserWrap);
				}
			},
			hidePage: function () {
				document.getElementsByClassName("view-container")[0].style.display = "block";
				browserWrap.style.display = "none";
			},
			showPage: function (url, renderData, resultCallback) {
				this.init();
				var webView = document.getElementById("PowwowPageInnerFrame");
				
				webView.addEventListener("MSWebViewDOMContentLoaded", function () {

					var op = webView.invokeScriptAsync("Render", renderData)

					op.oncomplete = function (e) {
						console.log(e.target.result);
					};
					op.onerror = function () {
						console.log("error");
					};
					op.start();
				});

				webView.navigate(url);

				webView.addEventListener("MSWebViewScriptNotify", function (result) {
					resultCallback(result);
				});
				viewContainer.style.display = "none";
				browserWrap.style.display = "block";
			},
		}
	};
})();
});
