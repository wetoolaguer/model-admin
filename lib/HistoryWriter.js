var HistoryWriter = function () {
};

var writeHistory = function (evt, params) {
    var historyObject = {};

    historyObject.eventName = evt;
    historyObject.eventParams = params;

    return historyObject;
};
