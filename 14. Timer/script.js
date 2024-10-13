let timeBegan = null; 
let timeStopped = null; 
let stoppedDuration = 0; 
let startInterval = null;
let flag = false;

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", function() { 
    if (!flag) {
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
});

timerContainer.addEventListener("dblclick", function() {
    resetTimer();
});

function startTimer() {
    if (timeBegan == null) { 
        timeBegan = new Date(); 
        // console.log(timeBegan);
    }
    if (timeStopped != null) { 
        stoppedDuration += (new Date() - timeStopped);
        // console.log(stoppedDuration)
    }
    startInterval = setInterval(clockRunning, 10);
    // console.log(startInterval);
}

function stopTimer() {
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
    // console.log(timeElapsed);

    let minutes = timeElapsed.getUTCMinutes();
    // console.log(minutes);
    let seconds = timeElapsed.getUTCSeconds();
    // console.log(seconds);
    let milliseconds = timeElapsed.getUTCMilliseconds();
    // console.log(milliseconds);

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
