var Quick = function Quick(compare){
    this.compare = compare;
}; 

Quick.prototype = {
    constructor: Quick, 
    id: 'quick',
    label: 'Quicksort',

    aux: [],
    
    shuffle: function(o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    },

    partition: function(a, lo, hi) {
        var i = lo+1,
            j = hi,
            v = a[lo];

        while(true) {

            while(this.less(a[i], v)){
                i++;
                if (i == hi) break;
            }
            while(this.less(v, a[j])){
                j--;
                if (j == lo) break;
            } 
            
            if(i >= j) break;

            this.exch(a, i, j);
        }

        this.exch(a, lo, j);

        return j;
    },

    //Sort function
    sort: function(elements) {
        var self = this,

        quicksort = function quicksort(a, lo, hi) {
            var j;

            if(hi <= lo) return;
            j = self.partition(a, lo, hi);

            quicksort(a, lo, j-1);
            quicksort(a, j+1, hi);
        };

        elements = self.shuffle(elements);
        quicksort(elements, 0, elements.length-1);
        return elements;
    },

    //Take the sort one inner loop at a time for visualization purposes
    step: function(elements) {

        var self = this,

            a = self.shuffle(elements);
        return function next() {

            return a;
        };
                    
    },

    less: function(v, w) {
        if(v && w){
            if(this.compare){
                return this.compare(v, w);
            }else{
                return (v.value < w.value);
            }
        }
        
    },  

    exch: function(elements, i, j) {
        var temp = elements[i];

        elements[i] = elements[j];
        elements[j] = temp;
    },

    isSorted: function(elements) {
        for(var i = 0; i < elements.length; i++){ 
            if(this.less(a[i], a[i-1])) return false; 
        }
        return true;
    }


};

module.exports = Quick;