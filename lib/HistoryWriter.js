var HistoryWriter = function () {
};

HistoryWriter.prototype.writeHistory = function (actor, evt, params) {
    var historyObject = {};

    historyObject.actor = actor;
    historyObject.eventName = evt;
    historyObject.eventParams = params;

    return historyObject;
};

module.exports = HistoryWriter;
