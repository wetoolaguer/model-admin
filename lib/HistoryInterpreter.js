var ModelAdminEvents = require("./ModelAdminEvents");
var ModelObjectEvents = require ("./ModelObjectEvents");

var HistoryInterpreter = function (modelAdmin) {
    var admin = modelAdmin;

    this.getAdmin = function () {
        return admin;
    };
};

var recreateHistory = function (historyObject) {
    var admin = this.getAdmin();
    var eventName = historyObject.eventName;
    var eventParams = historyObject.eventParams;
    var modelObject;

    //Create history depending on the case
    if (eventName === ModelAdminEvents.MODEL_CREATED) {
        admin.createModel(eventParams.modelName);
    } else if (eventName === ModelAdminEvents.MODEL_DELETED) {
        admin.deleteModel(eventParams.modelName);
    } else if (eventName === ModelObjectEvents.ATTRIBUTE_ADDED) {
        //resolve conflicts later on
        modelObject = admin.getModel(eventParams.modelName);
        modelObject.addAttribute(eventParms.attribute, eventParams.type);
    } else if (eventName === ModelObjectEvents.ATTRIBUTE_REMOVED) {
        //resolve conflicts later on
        modelObject = admin.getModel(eventParams.modelName);
        modelObject.removeAttribute(eventParms.attribute);
    } else if (eventName === ModelObjectEvents.RELATIONSHIP_ADDED) {
        //resolve conflicts later on
        modelObject = admin.getModel(eventParams.modelName);
        modelObject.addRelationship(eventParams.model, eventParams.type);
    } else if (eventName === ModelObjectEvents.RELATIONSHIP_REMOVED) {
        //resolve conflicts later on
        modelObject = admin.getModel(eventParams.modelName);
        modelObject.removeRelationship(eventParms.model);
    } else {
        throw new Error ("Unknown event!");
    }
};

module.exports = HistoryInterpreter;
