var HistoryObject = require ('./HistoryObject');

var Historian = function () {
    var history = [];
    var idTracker = 0;

    this.getHistoryPool = function() {
        return historyPool;
    };

    this.generateId = function () {
        idTracker = idTracker + 1;
    };
};

Historian.prototype.recordHistory = function (event, obj) {
    var pool = this.getHistoryPool();

    var newId = generateId();
    var historyObject = new HistoryObject(newId, event, obj);

    pool.push(historyObject);
};

module.exports = Historian;
