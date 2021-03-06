// ## **JavaScript Timer**
// Create Timer in JavaScript that will start counting time after the start button is pressed and the time will show on the UI.
// 1. The timer should start counting when user presses the start button. 
// 2. The timer should stop counting when the user presses the stop button.
// 3. The timer should be reseted when the user presses the reset button.
// The UI needs to be updated on every change of the state of the timer.


// let result = document.getElementById('result');
// let startBtn = document.getElementById('start');
// let stopBtn = document.getElementById('stop');
// let resetBtn = document.getElementById('reset');

let stopWatch = {
    result: document.getElementById('result'),
    timer: 0,
    invalid: null,// da prasam zosto ja pravime proverkata if (stopWatch.invalid)

    start: function(){

        // ako pritisnam 2 pati na start se ubrzuva i potoa ne raboti stop.
        this.invalid = setInterval(()=>{
            this.timer++;
            this.result.innerHTML = this.timer;
        }, 1000)
    },

    startButton: document.getElementById('start').addEventListener('click',()=>{
        stopWatch.start();  // ne raboti ako ja povikam so this.start. pretpostavuvam deka ovoj kod ne e vo istiot scope kako start za da mozam da koristam this 
    }),

    stopButton: document.getElementById('stop').addEventListener('click',()=>{
        clearInterval(stopWatch.invalid);
    }),

    resetButton: document.getElementById('reset').addEventListener('click',()=>{
        clearInterval(stopWatch.invalid);
        stopWatch.timer = 0;
        stopWatch.invalid = null;
        stopWatch.result.innerHTML = "0";
    })
}