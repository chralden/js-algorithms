var Trace = function Selection(parent, id, label){
    
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.label = label;

    if(id) this.canvas.id = id;

    parent.appendChild(this.canvas);

    this.canvas.width = 640;
    this.canvas.height = 480;
    this.rects = [];

    this.context.font = "16px Arial";
}; 

Trace.prototype = {
    constructor: Trace, 

    update: function(data) {
        var margin = 1,
            multiplier = (this.canvas.height*0.8)/Math.max.apply(null, data.map(function(datum){ return datum.value; })),
            width = (this.canvas.width/data.length) - margin,
            color;

        this.rects = [];

        for(var i = 0; i < data.length; i++){
            if(data[i].state){
                color = (data[i].state === 'current') ? '#FF0000' : '#000';
            }else{
                color = '#CCC';
            }

            this.rects.push({
                x: 0 + ((width+margin) * i),
                width: width,
                height: data[i].value*multiplier,
                color: color
            });
        } 
    },

    render: function() {

        var rect;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);


        for(var i = 0; i < this.rects.length; i++){
            rect = this.rects[i];
            this.context.fillStyle = rect.color;
            this.context.fillRect(rect.x, this.canvas.height-rect.height, rect.width, rect.height);
        }
        
        this.context.fillStyle = '#333';
        this.context.fillText(this.label,10,25);
        
    }
};

module.exports = Trace;