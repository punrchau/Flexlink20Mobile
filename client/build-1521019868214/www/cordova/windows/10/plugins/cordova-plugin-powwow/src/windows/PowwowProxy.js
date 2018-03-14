cordova.define("cordova-plugin-powwow.PowwowProxy", function(require, exports, module) {
module.exports = {
	event: function (successCallback, errorCallback, args) {
		var data = args[0];
		var appManager = cordova.PowwowAppManager();
		var delimeter = "|}{|";
		Update.SetAppPath(cordova.file.applicationDirectory);
		Update.SetTmpStorage(cordova.file.dataDirectory);
		switch (data.type) {
			case "getAppSettings":
				if (data.showSettings) {
				    appManager.showPage(appManager.states.settings.url, Settings.GetCBSettings() + delimeter + Settings.GetWebAppSettings(), function (result) {
				        var res = result.value.split(delimeter)
				        Settings.SetCBSettings(res[0]);
				        Settings.SetWebAppSettings(res[1]);
						appManager.hidePage();
						successCallback({ cbUrl: Settings.GetCBSettings(), success: true });
					});
				}
				else {
					successCallback({ cbUrl: Settings.GetCBSettings(), success: true });
				}
				break;
			case "downloadAppSources":
				try {
					Update.SetSourceZipUrl(data.url);
					Update.Clean(Update).done(function () {
						Update.Download(Update).done(function () {
							successCallback({ sucess: true });
						})
					});
				}
				catch (error) {
					errorCallback();
				}
				break;
			case "unpackAppSources":
				try {
					Update.Unzip(Update).done(function () {
						successCallback({ sucess: true });
					});
				}
				catch (error) {
					errorCallback();
				}
				break;
		}

	}
}

var Settings = {
        AppSettings: Windows.Storage.ApplicationData.current.localSettings,
        GetCBSettings: function () {
            return this.AppSettings.values["CBUrl"] == undefined ? "" : this.AppSettings.values["CBUrl"];
        },
        GetWebAppSettings: function () {
            return this.AppSettings.values["WebAppUrl"] == undefined ? "" : this.AppSettings.values["WebAppUrl"];
        },

        SetCBSettings: function (CBUrl) {
            this.AppSettings.values["CBUrl"] = CBUrl;
        },
        SetWebAppSettings: function (WebAppUrl) {
            this.AppSettings.values["WebAppUrl"] = WebAppUrl;
        },

    },
	Update = {
		application: null,
		ClientZipFileName: "client.zip",
		SourceClientZip: null,
		tmp: null,
		SetTmpStorage: function (tmp) {
			this.tmp = tmp;
		},
		GetTmpStorage: function (tmp) {
			return this.tmp;
		},
		SetClientZipFile: function (ZipFile) {
			this.ClientZipFileName = ZipFile;
		},
		GetClientZipFile: function () {
			return this.ClientZipFileName;
		},
		SetSourceZipUrl: function (zipUrl) {
			this.SourceClientZip = zipUrl;
		},
		GetSourceZipUrl: function () {
			return this.SourceClientZip;
		},
		SetAppPath: function (storePath) {
			this.application = storePath;
		},
		GetAppPath: function () {
			return this.application;
		}
	};


Update.Clean = function (_self) {
	return new WinJS.Promise(function (returnComplete, returnError) {
		new WinJS.Promise(function (complete, error) {
			window.resolveLocalFileSystemURL(_self.GetTmpStorage() + _self.GetClientZipFile(), complete,
			function () {
				console.log("file doesn't present");
				returnComplete();
			})
		}).then(function (fileEntry) {
			fileEntry.remove(returnComplete, returnError, returnComplete);
		}).then(null, function (e) {
			console.log("Exception: ", e);
		});
	});
}

Update.Download = function (_self) {
	var fileTransfer = new FileTransfer();
	return new WinJS.Promise(function (resultComplete, resultError) {
		if (Update.GetSourceZipUrl()) {
			new WinJS.Promise(function (complete, error) {
				fileTransfer.download(_self.GetSourceZipUrl(), _self.GetTmpStorage() + _self.GetClientZipFile(), complete, error);
			}).then(function () {
				resultComplete({ error: false, sucess: true });
			}).then(null, function (e) {
				console.log("Exception: ", e);
				resultComplete({ error: true, sucess: false, message: e });
			});
		}
		else {
			resultComplete({ error: true, sucess: false, message: "Didn't find the Client webApp package!!!" });
		}
	});
};

Update.Unzip = function (_self) {
	return new WinJS.Promise(function (resultComplete, resultError) {
		console.log("Download finished file: " + _self.GetTmpStorage() + _self.GetClientZipFile());
		new WinJS.Promise(function (cleanComplete, cleanError) {
			new WinJS.Promise(function (complete, error) {
				//Remove prevoius version of the unpucked sources when presents.
				window.resolveLocalFileSystemURL(_self.GetAppPath() + "www/pages/client/", complete,
				function () {
					console.log("Directory" + _self.GetAppPath() + "www/pages/client/" + " doesn't present");
					cleanComplete();
				})
			}).then(function (dirEntry) {
				return new WinJS.Promise(function (complete, error) {
					dirEntry.removeRecursively(complete, error);
				});
			}).done(function () {
				cleanComplete()
			});
		}).then(function () {
			return new WinJS.Promise(function (unzipComplete, unzipError) {
				new WinJS.Promise(function (complete, error) {
					window.resolveLocalFileSystemURL(_self.GetTmpStorage() + _self.GetClientZipFile(), complete,
					function () {
						console.log("Directory" + _self.GetTmpStorage() + _self.GetClientZipFile() + " doesn't present");
						error();
					});
				}).then(function (clientFile) {
					var progress = 0;
					new WinJS.Promise(function (complete, error) {
						window.resolveLocalFileSystemURL(_self.GetAppPath() + "www/pages/", complete,
						function () {
							console.log("Directory" + _self.GetAppPath() + "www/pages" + " doesn't present");
							error();
						});
					}).then(function (destination) {
						zip.unzip(clientFile.filesystem.winpath + clientFile.fullPath, destination.filesystem.winpath + "www/pages/client", function (result) {
							if (result < 0) {
								resultError();
							}
							else {
								unzipComplete();
							}
						}, function (progressEvent) {
							progress = progressEvent.loaded / progressEvent.total;
							//console.log(progress);
						});
					});
				});
			});
		}).done(function () {
			resultComplete();
		});
	});
}

require("cordova/exec/proxy").add("PowwowPlugin", module.exports);
});
