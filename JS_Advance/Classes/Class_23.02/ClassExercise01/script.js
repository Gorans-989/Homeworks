// ## **JavaScript Timer**
// Create Timer in JavaScript that will start counting time after the start button is pressed and the time will show on the UI.
// 1. The timer should start counting when user presses the start button. 
// 2. The timer should stop counting when the user presses the stop button.
// 3. The timer should be reseted when the user presses the reset button.
// The UI needs to be updated on every change of the state of the timer.


let result = document.getElementById('result');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', function(){
    startCount();   
})


let startCount = function(){
    let timer = 0;
    setInterval(() => {
        result.innerText = timer;
        timer++;
    }, 1000);
};

// let stopCounter = function(){
//     clearInterval(startCount);
// }

stopBtn.addEventListener('click', ()=>{
    clearInterval(startCount);
})

//var clear; function stopWatch( ) { // javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); } 

//Or function stopWatch( ) { // javascript statement here clear = setTimeout( function ( ) { // javascript statement here }, 1000 ); } 


//Or var stopWatch = function ( ) { // javascript statement here clear = setTimeout( "stopWatch( )", 1000 ); } 