var Insertion = function Insertion(compare){
    this.compare = compare;
}; 

Insertion.prototype = {
    constructor: Insertion, 
    id: 'insertion',
    label: 'Insertion Sort',

    //Sort function
    sort: function(elements) {
        var length = elements.length,
            min;

        for(var i = 1; i < length; i++){
            for(var j = i; j > 0 && this.less(elements[j], elements[j-1]); j--){
                this.exch(elements, j, j-1);
            }
       }

       return elements;
    }, 

    //Take the sort one inner loop at a time for visualization purposes
    step: function(elements) {

        var self = this,
            i = 0,
            j = i;

        return function next(){

            var inner = (j > 0 && self.less(elements[j], elements[j-1]));

            if(i < elements.length){
                
                if(!inner) elements = elements.map(function(element){  return { value: element.value }; });
                
                if(inner){
                    elements[j-1].state = 'touched';
                    self.exch(elements, j, j-1);
                    j--;
                }else{
                    i++;
                    if(elements[i]) elements[i].state = 'current';
                    j = i;
                }

                return elements;
            }else{
                return false;
            }
            
        };

    },

    less: function(v, w) {
        if(this.compare){
            return this.compare(v, w);
        }else{
            return (v.value < w.value);
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

module.exports = Insertion;