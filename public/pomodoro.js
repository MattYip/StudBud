// Pomodoro Timer JS functionality
var PomTimer;
var sec = 0;
var min = 0;

var pomodoroElement = document.querySelector('.PomTimer')

//Setting time
function setPomodoro() {
    const inputTime = prompt("Enter number of minutes:");
    var PomTimer = document.getElementsByClassName("PomTimer")[0];

    secondsRemaining = inputTime * 60

    // turn the seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    //add a leading zero if less than 10 seconds
    if (sec < 10) {
        sec = `0${sec}`;
    }
    if (min < 10) {
        min = `0${min}`;
    }

    // concatenate with colon
    var time = min.toString() + ":" + sec;

    PomTimer.innerHTML = time;
}
