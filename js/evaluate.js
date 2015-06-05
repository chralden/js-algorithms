var Stack = require('./datatypes/Stack.js');
var ops = new Stack();
var vals = new Stack();

module.exports = function(expression) {

    var ch, i;

    for(i = 0; i < expression.length; i++){
        ch = expression.charAt(i);

        if(ch === "(" || ch === " "){
            continue;
        }else if(ch === "+" || ch === "-" || ch === "*" || ch === "/"){
            ops.push(ch);
        }else if(ch === ")"){
            var op = ops.pop();
            var v = vals.pop();

            if(op === "+"){
                v = vals.pop() + v;
            }else if(op === "-"){
                v = vals.pop() - v;
            }else if(op === "*"){
                v = vals.pop() * v;
            }else if(op === "/"){
                v = vals.pop() / v;
            }

            vals.push(v);
        }else{
            vals.push(parseInt(ch));
        }
    }

    return vals.pop();

};