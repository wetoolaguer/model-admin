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

Historian.prototype.recordHistory = function (historyObject) {
    var pool = this.getHistoryPool();

    var newId = generateId();
    historyObject.id = newId;
    pool.push(historyObject);
};

module.exports = Historian;
