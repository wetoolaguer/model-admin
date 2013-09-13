var HistoryObject = function(id, evnt, obj) {
    var historyId = id;
    var event = evnt;
    var object = obj;

    this.getId = function () {
        return historyId;
    };

    this.getEvent = function () {
        return event;
    };

    this.getObject = function () {
        return object;
    };
};

module.exports = HistoryObject;
