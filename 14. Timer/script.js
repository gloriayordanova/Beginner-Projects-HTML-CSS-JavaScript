let timeBegan = null; 
let timeStopped = null; 
let stoppedDuration = 0; 
let startInterval = null;
let flag = false;

const startEndBtn = document.getElementById("buttonControl");
const reset = document.getElementById("reset");

startEndBtn.addEventListener("click", function() { 
    if (!flag) {
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
});

reset.addEventListener("click", function() {
    resetTimer();
});

function startTimer() {
    if (timeBegan == null) { 
        timeBegan = new Date(); 
    }
    if (timeStopped != null) { 
        stoppedDuration += (new Date() - timeStopped);
    }
    startInterval = setInterval(clockRunning, 10);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();


    milliseconds = Math.floor(milliseconds / 10); 

    document.getElementById("timer-display").innerHTML = 
        (minutes < 10 ? '0' + minutes : minutes) + ":" +
        (seconds < 10 ? '0' + seconds : seconds) + ":" +
        (milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

function resetTimer() {
    clearInterval(startInterval); 
    timeBegan = null; 
    timeStopped = null; 
    stoppedDuration = 0; 
    document.getElementById("timer-display").innerHTML = "00:00:00"; 
    flag = false; 
}
