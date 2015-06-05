var Shell = function Shell(compare){
    this.compare = compare;
}; 

Shell.prototype = {
    constructor: Shell, 
    id: 'shell',
    label: 'Shell Sort',

    //Sort function
    sort: function(elements) {
        var length = elements.length,
            h = 1;

        while(h < length/3) h = 3*h+1;

        //h sort the array
        while(h >= 1){
            for(var i = h; i < length; i++){
                for(var j = i; j >= h && this.less(elements[j], elements[j-h]); j-= h){
                    this.exch(elements, j, j-h);
                }
            }
            h = Math.floor(h/3);
        }

       return elements;
    }, 

    //Take the sort one inner loop at a time for visualization purposes
    step: function(elements) {

        var self = this,
            h = 1,
            i, j;

        while(h < elements.length/3) h = 3*h+1;
        i = h;
        j = i;
        var first = false;
        return function next(){
            
            var inner = (j >= h && self.less(elements[j], elements[j-h]));

            if(h >= 1){

                if(i < elements.length){   


                    if(!inner) elements = elements.map(function(element){  return { value: element.value }; }); 

                    if(inner){

                        elements[j-h].state = 'touched';
                        self.exch(elements, j, j-h);
                        j-= h;
                    }else{
                        i++;
                        if(elements[i]) elements[i].state = 'current';
                        j = i;
                    }
                    
                }else{
                    h = Math.floor(h/3);
                    i = h;
                    j = i;
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

module.exports = Shell;