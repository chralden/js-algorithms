var Stack = function Stack(){
    this.elements = [];
}; 

//Add an item to the top of the stack
Stack.prototype.push = function push(item) {
    this.elements.push(item);
};

//Remove item at top of stack and return it
Stack.prototype.pop = function pop() {
    return this.elements.pop();
};

//Is the bag empty?
Stack.prototype.isEmpty = function isEmpty() {
    return (this.elements.length === 0);
};

//Number of items in the bag
Stack.prototype.size = function size() {
    return this.elements.length;
};

Stack.prototype.iterate = function iterate(callback) {
    for(var i = this.elements.length-1; i >= 0; i--){
        callback(this.elements[i]);
    }
};

module.exports = Stack;