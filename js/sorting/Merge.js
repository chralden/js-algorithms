var Merge = function Merge(compare){
    this.compare = compare;
}; 

Merge.prototype = {
    constructor: Merge, 
    id: 'merge',
    label: 'Merge Sort',

    aux: [],
    merge: function(elements, lo, mid, hi) {

        var i = lo, 
            j = mid + 1,
            aux = this.aux,
            k;

        for(k = lo; k <= hi; k++) aux[k] = elements[k];

        for(k = lo; k <= hi; k++){
            if(i > mid){
                elements[k] = aux[j++];
            }else if(j > hi){
                elements[k] = aux[i++];
            }else if(this.less(aux[j], aux[i])){
                elements[k] = aux[j++];
            }else{
                elements[k] = aux[i++];
            }
        }

    },

    //Sort function
    sort: function(elements) {
        var self = this,
            
        mergeSort = function mergeSort(a, lo, hi) {
            var mid;
            if(hi <= lo) return;
            mid = Math.floor(lo+(hi-lo)/2);

            mergeSort(a, lo, mid);
            mergeSort(a, mid+1, hi);
            self.merge(a, lo, mid, hi);
        };
        
        mergeSort(elements, 0, elements.length-1);
        return elements;

    },

    //Take the sort one inner loop at a time for visualization purposes
    step: function(elements) {

        var self = this,
            subseqs = [],
            aux = this.aux,
            copied = false,
            subseq,
            i, j, k;

        generateSorts = function generateSorts(a, lo, hi){
            var mid;
            if(hi <= lo) return;
            mid = Math.floor(lo+(hi-lo)/2);

            generateSorts(a, lo, mid);
            generateSorts(a, mid+1, hi);
            subseqs.push({ lo: lo, mid: mid, hi: hi });
        };

        generateSorts(elements, 0, elements.length-1);

        subseq = subseqs.shift();

        i = subseq.lo; 
        j = subseq.mid + 1;
        k = subseq.lo;

        return function next() {            

            if(subseq){
                elements[subseq.lo].state = 'current';

                if(!copied){
                    for(var l = subseq.lo; l <= subseq.hi; l++) aux[l] = elements[l];
                    copied = true;
                }
                
                if(k <= subseq.hi){
                    
                    elements[k].state = 'touched';
                    if(i > subseq.mid){
                        elements[k] = aux[j++];
                    }else if(j > subseq.hi){
                        elements[k] = aux[i++];
                    }else if(self.less(aux[j], aux[i])){
                        elements[k] = aux[j++];
                    }else{
                        elements[k] = aux[i++];
                    }
                    k++;
                }else{
                    subseq = subseqs.shift();
                    if(subseq){
                       i = subseq.lo; 
                       j = subseq.mid + 1;
                       k = subseq.lo; 
                    }
                    elements = elements.map(function(element){  return { value: element.value }; });
                    copied = false;
                }

                return elements;
            }else{
                return false;
            }
            
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

module.exports = Merge;