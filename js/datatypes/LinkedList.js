var LinkedList = function LinkedList() {
    
    var Node = function Node() {
        this.item = null;
        this.next = null;
    };

    this.makeNode = function() { return new Node(); }
    this.first = this.makeNode();
    this.length = 0;

}; 

LinkedList.prototype = {
    constructor: LinkedList,

    isEmpty: function() { return this.first === null; },
    size: function() { return this.length; },

    push: function(item) {
        var oldfirst = this.first;

        this.first = new this.makeNode();
        this.first.item = item;
        this.first.next = oldfirst;

        this.length++;
    },

    pop: function() {
        var item = this.first.item;

        this.first = this.first.next;
        this.length--;

        return item;
    }, 

    each: function(callback) {
        for(var i = this.first; i.item !== null; i = i.next){
            callback(i.item);
        }
    }
};


module.exports = LinkedList;