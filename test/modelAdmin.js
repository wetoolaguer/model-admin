var assert = require ("assert");
var ModelAdmin = require ("../lib/ModelAdmin");

describe("ModelAdmin", function () {

    var modelAdmin;

    before (function () {
        modelAdmin = new ModelAdmin('admin');
    });

    describe("#createModel", function () {
        it ("it creates a modelObject", function () {
            var model = modelAdmin.createModel('NewModel');
            assert(model.modelName = "NewModel");
        });
    });

    describe("#getModel", function () {
        it ("it returns a model with the corresponding name", function () {
            var model = modelAdmin.getModel('NewModel');
            assert(model.modelName, "NewModel");
        });
    });

    describe("#deleteModel", function () {

        it ("it deletes the model from the admin", function () {
            var model = modelAdmin.deleteModel("NewModel");
            try {
                modelAdmin.getModel("NewModel");
            } catch (err) {
                assert(err.message, "Model is non existent.");
            }
        });
    });

    var model;

    describe("#addAttribute", function () {

        before (function() {
            model = modelAdmin.createModel('NewModel');
        });

        it ("it should add attribute to a model", function () {
            modelAdmin.addAttribute("NewModel", "age", "int");
            attributes = model.getAttributes();
            assert(attributes[0].attribute, "age");
        });
    });

    describe("#removeAttribute", function () {
        it ("it should remove attribute from a model", function () {
            modelAdmin.removeAttribute("NewModel", "age");
            attributes = model.getAttributes();
            assert(attributes.length === 0);
        });
    });

    describe("#addRelationship", function () {
        it ("it should add relationship to a model", function () {
            modelAdmin.addRelationship("NewModel", "friends", "hasMany");
            relationships = model.getRelationships();
            assert(relationships[0].withModel, "friends");
        });
    });

    describe("#removeRelationship", function () {
        it ("it should add relationship to a model", function () {
            modelAdmin.removeRelationship("NewModel", "friends");
            relationships = model.getRelationships();
            assert(relationships.length === 0);
        });
    });
});
