var Bag = require('./datatypes/Bag.js'),

    numbers = new Bag(),
    mean = false, 
    std, N;

function calculateMean() {
    var sum = 0;

    numbers.iterate(function(value) {
        sum += value;
    });

    mean = sum/N;
};

function calculateStandardDeviation() {
    var sum = 0;

    if(!mean) calculateMean();

    numbers.iterate(function(value) {
        sum += (value - mean) * (value - mean);
    });

    std = Math.sqrt(sum/(N-1));
};

exports.calculate = function init(data) {
    var i, value;

    for(i = 0; i < data.length; i++){
        value = data[i];

        if(typeof value !== 'number') continue;
        numbers.add(value);
    }

    if(!numbers.isEmpty()){
        N = numbers.size();

        calculateMean();
        calculateStandardDeviation();
    }
    
};

exports.getMean = function getMean() {
    return mean;
};

exports.getStandardDeviation = function getStandardDeviation() {
    return std;
};