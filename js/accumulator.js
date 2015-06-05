var count = 0,
    total = 0;

exports.addDataValue = function addDataValue(value) {
    if(typeof value !== 'number') return false;
    count++;
    total += value;
};

exports.mean = function mean() {
    return (total) ? total/count : total;
};