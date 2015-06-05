var Queue = function Queue(){
    this.elements = [];
}; 

//Add an item to the end of the queue
Queue.prototype.enqueue = function enqueue(item) {
    this.elements.push(item);
};

//Remove first item in queue and return it
Queue.prototype.dequeue = function enqueue() {
    return this.elements.shif();
};

//Is the bag empty?
Queue.prototype.isEmpty = function isEmpty() {
    return (this.elements.length === 0);
};

//Number of items in the bag
Queue.prototype.size = function size() {
    return this.elements.length;
};

Queue.prototype.iterate = function iterate(callback) {
    this.elements.map(callback)
};

module.exports = Queue;