var Bag = function Bag(){
    this.elements = [];
}; 

//Add an item to the bag
Bag.prototype.add = function add(item) {
    this.elements.push(item);
};

//Is the bag empty?
Bag.prototype.isEmpty = function isEmpty() {
    return (this.elements.length === 0);
};

//Number of items in the bag
Bag.prototype.size = function size() {
    return this.elements.length;
};

Bag.prototype.iterate = function iterate(callback) {
    this.elements.map(callback)
};

module.exports = Bag;