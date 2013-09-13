var HistoryObject = function(evnt, obj) {
    var historyId = 0;
    var event = evnt;
    var object = obj;

    this.getId = function () {
        return historyId;
    };

    this.setId = function (id) {
        historyId = id;
    };

    this.getEvent = function () {
        return event;
    };

    this.getObject = function () {
        return object;
    };
};

module.exports = HistoryObject;
