var HistoryParser = function (hist) {
    var history = hist;
    var modelPool = [];

    this.getHistory = function () {
        return history;
    };

    this.getModelPool = function () {
        return modelPool;
    };
};

HistoryParser.prototype.parseHistory = function () {
    var history = this.getHistory();

    for (var i=0; i < history.length; i++) {
    }
};

module.exports = HistoryParser;
