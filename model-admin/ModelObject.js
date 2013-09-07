var util = require("util");
var events = require("events");
var ModelObjectEvents = require("./ModelObjectEvents");

var ModelObject = function (modelName) {
    if (typeof modelName === 'undefined') {
        throw Error (new Error ('Model Name parameter required.'));
    }

    this.name = modelName;

    var attributes = {};
    var relationships = {};

    this.getAttributes = function () {
        return attributes;
    };

    this.getRelationships = function () {
        return relationships;
    };
};

util.inherits(ModelObject, events.EventEmitter);

ModelObject.prototype.addAttribute = function (attribute, type) {
    this.getAttributes()[attribute] = type;
    this.emit(ModelObjectEvents.ATTRIBUTE_ADDED, { attribute:type } );
    console.log('wee');
};

ModelObject.prototype.removeAttribute = function(name) {
    var attibutes = this.getAttributes();
    var attributeObject = { name : attribute[name] };

    delete attributes[name];
    this.emit(ModelObjectEvents.ATTRIBUTE_REMOVED, attributeObject);
};

ModelObject.prototype.addRelationShip = function (model, type) {
    this.getRelationships()[model] = type;
    this.emit(ModelObjectEvents.RELATIONSHIP_ADDED, { model:type });
};

ModelObject.prototype.removeRelationShip = function (model) {
    var relationships = this.getRelationships();
    var relationshipObject = { model : relationships[model] };

    delete relationships[model];
    this.emit(ModelObjectEvents.RELATIONSHIP_REMOVED, relationshipObject);
};

module.exports = ModelObject;
