var ModelAdmin = function () {
    var modelPool = [];

    this.getModelPool = function () {
        return modelPool;
    };
};

ModelAdmin.prototype.getModel = function (name) {
};

ModelAdmin.prototype.createModel = function (name) {
};

module.exports = ModelAdmin;
