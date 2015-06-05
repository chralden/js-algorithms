var Selection = function Selection(compare){
    this.compare = compare;
}; 

Selection.prototype = {
    constructor: Selection, 
    id: 'selection', 
    label: 'Selection Sort',

    //Sort function
    sort: function(elements) {
        var length = elements.length,
            min

        for(var i = 0; i < length; i++){
            min = i;
            for(var j = i + 1; j < length; j++){
                if(this.less(elements[j], elements[min])) min = j;
            }
            this.exch(elements, i, min);
       }

       return elements;
    }, 

    //Take the sort one inner loop at a time for vizualization purposes
    step: function(elements) {

        var self = this,
            i = 0,
            min = i,
            j = i + 1;

        elements[i].state = 'current';

        return function next(){
            
            var inner = (j < elements.length);

            if(i < elements.length){

                if(!inner) elements = elements.map(function(element){  return { value: element.value }; });   

                if(inner){
                    elements[j].state = 'touched';
                    if(self.less(elements[j], elements[min])) min = j;
                    j++;
                }else{
                    self.exch(elements, i, min);
                    i++;
                    if(elements[i]) elements[i].state = 'current';
                    j = i + 1;
                    min = i;
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
    },



};

module.exports = Selection;