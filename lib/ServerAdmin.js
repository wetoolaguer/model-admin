var ModelAdmin = require ("./ModelAdmin.js");
var util = require("util");
var Historian = require("./Historian.js");

var ServerAdmin = function (adminId) {
    var id = adminId;
    var historian = new Historian();
    var modelPool = [];

    this.getHistorian = function () {
        return historian;
    };

    this.getModelPool = function () {
        return modelPool;
    };

    this.getId = function () {
        return id;
    };
};

util.inherits(ServerAdmin, ModelAdmin);

module.exports = ServerAdmin;
