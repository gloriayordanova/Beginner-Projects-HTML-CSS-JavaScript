let timeBegan = null; // Stores the time when the timer starts for the first time. It's initialized as null.
let timeStopped = null; //Stores the time when the timer is stopped. Also initialized as null.
let stoppedDuration = 0; //Keeps track of how long the timer was stopped. It is updated every time the timer is stopped.
let startInterval = null; //Holds the reference to the interval used to update the timer every 10 milliseconds, needed to stop the interval when the timer stops.
let flag = false; //A boolean to toggle the start/stop functionality of the timer (initialized as false).

const timerContainer = document.getElementsByClassName("timer-container")[0]

timerContainer.addEventListener("click", function(){ 
    if(!flag){
        startTimer();
        flag = true; //in this case yes because we set it above to false. //If flag is false, the startTimer function is called to start the timer, and flag is set to true.
    } else {
        stopTimer();
        flag = false; //If flag is true, the stopTimer function is called to stop the timer, and flag is set to false.
    }
});


//This resets the timer when the timerContainer is double-clicked.
timerContainer.addEventListener("dblclick", function(){
    resetTimer();
})

// If timeBegan is null (indicating it's the first time starting the timer), it records the current time (new Date()).
// If the timer had been stopped previously (timeStopped is not null), it calculates the duration for which the timer was stopped and adds it to stoppedDuration.
// It then starts the clockRunning() function at intervals of 10 milliseconds using setInterval.

function startTimer(){
    if(timeBegan == null){//in which case it is null 
        timeBegan = new Date(); //this is going to be valid only one time
    }
    if(timeStopped !== null){
        stoppedDuration += (new Date() - timeStopped); 

    startInterval = setInterval(clockRunning, 10); 
    }

}

// It records the time the timer was stopped (timeStopped).
// The interval used to update the timer is cleared using clearInterval(startInterval) to stop the continuous updates.

function stopTimer(){
    timeStopped = new Date();
    clearInterval(startInterval); //this is a built in function
}

//This function is called repeatedly (every 10 milliseconds) while the timer is running to update the timer display:
// currentTime: Stores the current time.
// timeElapsed: Calculates the total elapsed time by subtracting timeBegan and the stoppedDuration from currentTime.
// It extracts the minutes, seconds, and milliseconds from timeElapsed.
// It formats the values to ensure two digits (e.g., 05 instead of 5), then updates the timer-display element in the DOM to show the current timer value in the format MM:SS:MS.

function clockRunning(){
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    let minutes = timeElapsed.getUTCMinutes();
    let seconds = timeElapsed.getUTCSeconds();
    let milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10); //divide by 10 because we only want to have 2 integers (because we don't want this long integer)

    document.getElementById("timer-display").innerHTML = 
    (minutes = minutes < 10 ? '0' + minutes:minutes) + ":" +
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

//This function resets the timer to its initial state:
// It clears the interval to stop the timer.
// Resets all the state variables (timeBegan, timeStopped, stoppedDuration) to their initial values.
// Resets the timer display to "00:00:00".
// Resets the flag to false so that the user can start the timer again.
function resetTimer(){
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    document.getElementById("timer-display").innerHTML = "00:00:00";
    flag = false;
}