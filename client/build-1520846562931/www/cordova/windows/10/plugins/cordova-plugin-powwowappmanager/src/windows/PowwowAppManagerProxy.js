cordova.define("cordova-plugin-powwowappmanager.PowwowAppManagerProxy", function(require, exports, module) {
module.exports = {}

require("cordova/exec/proxy").add("PowwowAppManager", module.exports);
});
