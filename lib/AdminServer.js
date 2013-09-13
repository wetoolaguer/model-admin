var ModelAdmin = require ("./ModelAdmin.js");
var util = require("uitl");

var ServerAdmin = function (adminId) {
    var id = adminId;
    var modelPool = [];

    this.getModelPool = function () {
        return modelPool;
    };

    this.getId = function () {
        return id;
    };
};

util.inherits(ServerAdmin, ModelAdmin);

module.exports = ServerAdmin;
