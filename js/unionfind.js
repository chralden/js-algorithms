//Weighted Quick Union
module.exports = function(N) {

    var id = [],
        treesize = [],
        count = N;

    for(var i = 0; i < count; i++) {
        id[i] = i;
        treesize[i] = 1;
    }

    var unionfind = {

        //add connection between p and q
        union: function(p, q) {
            var i = this.find(p),
                j = this.find(q);

            if(i == j) return;

            if(treesize[i] < treesize[j]){
                id[i] = j;
                treesize[j] += treesize[i];
            }else{
                id[j] = i;
                treesize[i] += treesize[j];
            }
            
            count--;
        },

        getIDs: function(){
            return id;
        },

        //component identifier for p (0 to N-1)
        find: function(p) {
            while(p != id[p]) p = id[p];
            return p;
        },

        //return true if p and q are in the same component
        connected: function(p, q) {
            return this.find(p) == this.find(q);
        },

        //get number of components
        count: function() {
            return count;
        }


    };

    return unionfind;

};