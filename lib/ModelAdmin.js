var ModelObject = require ('./ModelObject');
var ModelAdminEvents = require ('./ModelAdminEvents');
var util = require("util");
var events = require("events");

var ModelAdmin = function (adminId) {
    var id = adminId;
    var modelPool = [];

    this.getHistorian = function () {

    };

    this.getModelPool = function () {
        return modelPool;
    };

    this.getId = function () {
        return id;
    };
};

util.inherits(ModelAdmin, events.EventEmitter);

ModelAdmin.prototype.createModel = function (name) {
    var modelPool = this.getModelPool();

    //Check if the model name is already taken
    for (var i = 0; i < modelPool.length; i++) {
        if (modelPool[i].modelName === name) {
            throw new Error ("Model Name is already taken.");
        }
    }

	var newModel = new ModelObject (name);

    modelPool.push (newModel);
    this.emit(ModelAdminEvents.MODEL_CREATED, newModel);

    return newModel;
};

ModelAdmin.prototype.getModel = function (name) {
    var modelPool = this.getModelPool();

    for (var i = 0; i < modelPool.length; i++) {
        if (modelPool[i].modelName === name) {
            return modelPool[i];
        }
    }

    //throw error if nothing is found
    throw new Error("Model is non existent.");
};

ModelAdmin.prototype.deleteModel = function (name) {
    var modelPool = this.getModelPool();
    var succeeded = false;

    for (var i = 0; i < modelPool.length; i++) {
        if (modelPool[i].modelName === name) {
            modelObject = modelPool.splice(i,1)[0];
            succeeded = true;
        }
    }

    if (!succeeded) {
        throw new Error ("Model is non existent.");
    }

    this.emit(ModelAdminEvents.MODEL_DELETED, modelObject);
    return modelObject;
};

ModelAdmin.prototype.addAttribute = function (modelName, attribute, type) {
    var model = this.getModel(modelName);
    var attributeObj = model.addAttribute(attribute, type);
    this.emit(ModelAdminEvents.ATTRIBUTE_ADDED, attributeObj);
};

ModelAdmin.prototype.removeAttribute = function (modelName, attribute) {
    var model = this.getModel(modelName);
    var attributeObj = model.removeAttribute(attribute);
    this.emit(ModelAdminEvents.ATTRIBUTE_REMOVED, attributeObj);
};

ModelAdmin.prototype.addRelationship = function (modelName, withModel, type) {
    var model = this.getModel(modelName);
    var relationshipObj = model.addRelationship(withModel, type);
    this.emit(ModelAdminEvents.RELATIONSHIP_ADDED, relationshipObj);
};

ModelAdmin.prototype.removeRelationship = function (modelName, withModel) {
    var model = this.getModel(modelName);
    var relationshipObj = model.removeRelationship(withModel);
    this.emit(ModelAdminEvents.RELATIONSHIP_REMOVED, relationshipObj);
};

module.exports = ModelAdmin;
