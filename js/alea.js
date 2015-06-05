var random = Math.random;

function randomIntBetween(lo, hi) {
    return Math.floor(random() * (hi - lo + 1) + lo);
}

function dateBetween(start, end) {
    if(!(start instanceof Date) || !(end instanceof Date)) return false;
    return new Date(this.randomInt(start.getTime(), end.getTime()));
}

//Random between 0 - 1
exports.random = function random() {
    return random();
};

//Random integer
exports.randomInt = function randomInt(args) {
    if(arguments.length === 1) return randomIntBetween(0, arguments[0]);
    else return randomIntBetween(arguments[0], arguments[1]);
};

//Bernoulli distribution - return true or false given probability p
exports.bernoulli = function bernoulli(p) {
    return random() < p;
};

//Shuffle an Array using Knuth-Fisher-Yates algorithm
exports.shuffle = function shuffle(arr) {
    var i, n, temp;

    if(Object.prototype.toString.call(arr) !== '[object Array]') return false;

    for(i = arr.length - 1; i > 0; i--){
        n = this.randomInt(i);
        temp = arr[i];
        arr[i] = arr[n];
        arr[n] = temp;
    }
};

exports.date = function date(args) {
    if(arguments.length === 1) return this.dateBetween(new Date(), arguments[0]);
    else return this.dateBetween(arguments[0], arguments[1]);
};