let timeBegan = null; // Stores the time when the timer starts for the first time. It's initialized as null.
let timeStopped = null; // Stores the time when the timer is stopped. Also initialized as null.
let stoppedDuration = 0; // Keeps track of how long the timer was stopped. It is updated every time the timer is stopped.
let startInterval = null; // Holds the reference to the interval used to update the timer every 10 milliseconds, needed to stop the interval when the timer stops.
let flag = false; // A boolean to toggle the start/stop functionality of the timer (initialized as false).

const timerContainer = document.getElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", function() { 
    if (!flag) {
        startTimer();
        flag = true; // If flag is false, the startTimer function is called to start the timer, and flag is set to true.
    } else {
        stopTimer();
        flag = false; // If flag is true, the stopTimer function is called to stop the timer, and flag is set to false.
    }
});

// This resets the timer when the timerContainer is double-clicked.
timerContainer.addEventListener("dblclick", function() {
    resetTimer();
});

// This function starts the timer and sets the interval.
function startTimer() {
    if (timeBegan == null) { // If timeBegan is null, it's the first time starting the timer
        timeBegan = new Date(); // Record the start time
        // console.log(timeBegan);
    }
    if (timeStopped != null) { // If the timer was previously stopped
        stoppedDuration += (new Date() - timeStopped); // Add the stopped time to the stopped duration
        // console.log(stoppedDuration)
    }
    startInterval = setInterval(clockRunning, 10); // Start the interval to run every 10 milliseconds
    // console.log(startInterval);
}

// This function stops the timer and clears the interval.
function stopTimer() {
    timeStopped = new Date(); // Record the time the timer was stopped
    clearInterval(startInterval); // Stop the interval from updating the time
}

// This function updates the timer display while the timer is running.
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

    milliseconds = Math.floor(milliseconds / 10); // Convert to two digits by dividing by 10

    document.getElementById("timer-display").innerHTML = 
        (minutes < 10 ? '0' + minutes : minutes) + ":" +
        (seconds < 10 ? '0' + seconds : seconds) + ":" +
        (milliseconds < 10 ? '0' + milliseconds : milliseconds);
}

// This function resets the timer to its initial state.
function resetTimer() {
    clearInterval(startInterval); // Stop the interval
    timeBegan = null; // Reset the start time
    timeStopped = null; // Reset the stopped time
    stoppedDuration = 0; // Reset the stopped duration
    document.getElementById("timer-display").innerHTML = "00:00:00"; // Reset the timer display
    flag = false; // Reset the flag so the timer can be started again
}
