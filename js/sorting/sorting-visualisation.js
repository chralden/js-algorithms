    //Classes for sorting types
var Selection = require('../sorting/Selection.js'),
    Insertion = require('../sorting/Insertion.js'),
    Shell = require('../sorting/Shell.js'),
    Merge = require('../sorting/Merge.js'),
    Quick = require('../sorting/Quick.js'),

    //Test values to sort
    vals = require('../sorting/values.js'),

    //Canvas Trace
    Trace = require('../sorting/Trace.js'),

    stopwatch = require('../stopwatch.js'),

    //Element to draw tracing canvases in
    vizTarget = document.getElementById('sorting-traces'),

    sortTypes = [Selection, Insertion, Shell, Merge];

var createSort = function createSort(SortConstructor){
    var sort = new SortConstructor(),
        trace = new Trace(vizTarget, sort.id, sort.label), 
        sortVals = vals.slice(),
        stepper = sort.step(sortVals),

        sortInterval = setInterval(function(){
            var step = stepper();

            if(step){
                trace.update(step);
                trace.render();
            }else{
                clearInterval(sortInterval);
            }
             
        }, 100)
    
};

if(vizTarget){

    for(var i = 0; i < sortTypes.length; i++){
        createSort(sortTypes[i]);
    }

    /*stopwatch.startTimer();
    quick = new Quick();
    quick.sort(vals.slice());
    stopwatch.reportTime();

    stopwatch.startTimer();
    merge = new Merge();
    merge.sort(vals.slice());
    stopwatch.reportTime();*/

    

}

