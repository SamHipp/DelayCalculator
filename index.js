$(document).ready(function(){
    // DOM variables

let tapBtn = $('#tapBtn');
let submit = $('#submit');
let whole = $('.1Output');
let wholed = $('.1-5Output');
let half = $('.HOutput');
let halfd = $('.H-5Output');
let quar = $('.QOutput');
let quard = $('.Q-5Output');
let eit = $('.EOutput');
let eitd = $('.E-5Output');
let sixt = $('.SOutput');
let sixd = $('.S-5Output');
let bpmInput = Number($("#bpm").val());


// Calculations & Output
submit.click(function(){
    bpmInput = Number($("#bpm").val());
    whole.html((4*60/(bpmInput)).toFixed(4));
    wholed.html((6*60/(bpmInput)).toFixed(4));
    half.html((2*60/(bpmInput)).toFixed(4));
    halfd.html((3*60/(bpmInput)).toFixed(4));
    quar.html((60/(bpmInput)).toFixed(4));
    quard.html((90/(bpmInput)).toFixed(4));
    eit.html((30/(bpmInput)).toFixed(4));
    eitd.html((45/(bpmInput)).toFixed(4));
    sixt.html((15/(bpmInput)).toFixed(4));
    sixd.html((22.5/(bpmInput)).toFixed(4));
    })
    
// Tap Function
tapBtn.click(async function(){
    let tap1t = null;
    let newBPM = null;
    tap1t = new Date();
    let tap1 = tap1t.getTime();
    console.log(tap1)
    
    await tapBtn.click(function(){
        let tap2t = null;
        tap2t = new Date();
        let tap2 = tap2t.getTime();
        let tapInt = tap2-tap1;
        newBPM = (1/tapInt)*60000;
        let newBPMR = Math.round(newBPM);
        console.log(newBPMR);
        $("#bpm").val(newBPMR);
        tap1 = null;
        tap2 = null;
        
        })
    
    
    })


})