var start, end;

var elapsedTime = function elapsedTime() {
    end = new Date();
    return end.getTime() - start.getTime();
};

exports.startTimer = function startTimer() {
    start = new Date();
};

exports.elapsedTime = elapsedTime;

exports.reportTime = function reportTime() {
    console.log("run time: " + elapsedTime() + " milliseconds");
}