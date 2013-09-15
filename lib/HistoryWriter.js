var HistoryWriter = function () {
};

HistoryWriter.prototype.writeHistory = function (evt, params) {
    var historyObject = {};

    historyObject.eventName = evt;
    historyObject.eventParams = params;

    return historyObject;
};

module.exports = HistoryWriter;
