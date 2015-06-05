function euclideanAlgorithm(a, b) {

    if(b === 0){
        return a;
    }else{
        a = a % b;
        return euclideanAlgorithm(b, a);
    }
};

function reduceFraction(fraction) {
    var parts = fraction.split('/'), 
        numerator = parts[0],
        denominator = parts[1],
        gcd = euclideanAlgorithm(parseInt(numerator, 10), parseInt(denominator, 10));

    return String(numerator/gcd)+'/'+String(denominator/gcd);
};

exports.euclideanAlgorithm = euclideanAlgorithm;
exports.reduceFraction = reduceFraction;

exports.decimalToFraction = function decimalToFraction(decimal) {
    var sign = (decimal > 0) ? '' : '-',
        decimal = Math.abs(decimal),
        sides = String(decimal).split('.'),
        multiplier;

    if(!sides[1]){
        return sign+decimal;
    }else{
        multiplier = Math.pow(10, sides[1].length);
        return sign+reduceFraction(String(decimal*multiplier)+'/'+String(multiplier));
    }
    
};

exports.reverseArray = function reverseArray(arr) {
    var length = arr.length,
        temp;

    for(var i = 0; i < length/2; i++){
        temp = arr[i];
        arr[i] = arr[length-i-1];
        arr[length-i-1] = temp;
    }

};

exports.isPalindrome = function isPalindrome(string) {
    var cleanstring = string.replace(/\ /g, "").toLowerCase(),
        length = cleanstring.length,
        palindrome = true,
        i;

    for(i = 0; i < length/2; i++){
        if(cleanstring.charAt(i) !== cleanstring.charAt(length - 1 - i)) palindrome = false;
    } 

    return palindrome;
};