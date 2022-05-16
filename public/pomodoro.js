// Pomodoro Timer JS functionality
var sec = 00, min = 00, hour = 00;
var PomTimer;
var startedTimer = false;
var isPaused = false;
var check = null;

var pomodoroElement = document.querySelector('.PomTimer')

function startPomodoro() {
    isPaused = false
    if (startedTimer == false) {
        startedTimer = true;
        timer = setInterval(runPomodoro, 1000)
    }
}

// Timer counting 
function runPomodoro() {
    if (!isPaused) {
        pomodoroElement.textContent = hour + ":" + min + ":" + sec;
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
}

// how to stop timer
function stopPomodoro() {
    isPaused = true
}

//reseting timer
function resetPomodoro() {
    if (startedTimer == true) {
        sec = 0;
        min = 0;
        hour = 0;
        pomodoroElement.textContent = hour + ":" + min + ":" + sec;
    }
}