var Attribute = require ("./Attribute");
var Relationship = require ("./Relationship");
var util = require("util");

var ModelObject = function (modelName) {
    if (typeof modelName === 'undefined') {
        throw Error (new Error ('Model Name parameter required.'));
    }

    this.modelName = modelName;

    var attributes = [];
    var relationships = [];

    this.getAttributes = function () {
        return attributes;
    };

    this.getRelationships = function () {
        return relationships;
    };
};

ModelObject.prototype.addAttribute = function (attribute, type) {
    var attributeArr = this.getAttributes();

    //Check if attribute is taken
    for (var i = 0; i < attributeArr.length; i++) {
        if (attributeArr[i].attribute === attribute) {
            throw new Error("Attribute name already taken.");
        }
    }

    var newAttribute = new Attribute (this.modelName, attribute, type);
    attributeArr.push(newAttribute);
    return newAttribute;
};

ModelObject.prototype.removeAttribute = function(attribute) {
    var attributeArr = this.getAttributes();
    var succeeded = false;

    for (var i = 0; i < attributeArr.length; i++) {
        if (attributeArr[i].attribute === attribute) {
            attributeObject = attributeArr.splice(i, 1)[0];
            succeeded = true;
        }
    }

    if (!succeeded) {
        throw new Error("Attribute is non existent.");
    }

    return attributeObject;
};

ModelObject.prototype.addRelationship = function (withModel, type) {
    var relationshipArr = this.getRelationships();

    //Check if relatioship is taken
    for (var i = 0; i < relationshipArr.length; i++) {
        if (relationshipArr[i].withModel === withModel) {
            throw new Error("Relationship exists.");
        }
    }

    var newRelationship = new Relationship (this.modelName, withModel, type);
    relationshipArr.push(newRelationship);
    return newRelationship;
};

ModelObject.prototype.removeRelationship = function (withModel) {
    var relationshipArr = this.getRelationships();
    var relationshipObject;
    var succeeded = false;

    for (var i = 0; i < relationshipArr.length; i++) {
        if (relationshipArr[i].withModel === withModel) {
            relationshipObject = relationshipArr.splice(i, 1)[0];
            succeeded = true;
        }
    }

    if (!succeeded) {
        throw new Error("Relationship is non existent.");
    }

    return relationshipObject;
};

module.exports = ModelObject;
