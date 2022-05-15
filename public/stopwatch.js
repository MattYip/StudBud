// Stopwatch
var sec = 00, min = 00, hour = 00;
var timer;
var startedTimer = false;
var check = null;

var stopwatchElement = document.querySelector('.Timer')

function start(){
    if (startedTimer == false) {
        startedTimer = true;
        timer = setInterval(run, 1000)
    }
}

function run() {
    stopwatchElement.textContent = hour + ":" + min + ":" + sec; 
    sec++
    if (sec == 60) {
        sec = 0;
        min++
    }
    if (min == 60) {
        hour = 0;
        hour++
    }
} 

// how to stop timer

function reset() {
    if (startedTimer == true){
        sec = 0;
        min = 0;
        hour = 0;
    }
}