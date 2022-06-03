// Stopwatch
var sec = 00, min = 00, hour = 00;
var timer;
var startedTimer = false;
var isPaused = false;
var check = null;

var stopwatchElement = document.querySelector('.Timer')

function startStopWatch() {
    isPaused = false
    if (startedTimer == false) {
        startedTimer = true;
        timer = setInterval(runStopWatch, 1000)
    }
}

function runStopWatch() {
    if (!isPaused) {
        //appends 0's to front of the timer element for visual result
        stopwatchElement.textContent = hour.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ":" + min.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ":" + sec.toLocaleString(undefined,{minimumIntegerDigits: 2});
        //seconds increase
        sec++
        //if seconds reach 0, minute is added
        if (sec == 60) {
            sec = 0;
            min++
        }
        //if minutes reach 0, hour is added
        if (min == 60) {
            hour = 0;
            hour++
        }
    }
}

// how to stop timer
function stopStopWatch() {
    isPaused = true
}
//reset timer to 00:00:00 
function resetStopWatch() {
    if (startedTimer == true) {
        sec = 0;
        min = 0;
        hour = 0;
        stopwatchElement.textContent = `0${hour}` + ":" + `0${min}` + ":" + `0${sec}`
    }
}
