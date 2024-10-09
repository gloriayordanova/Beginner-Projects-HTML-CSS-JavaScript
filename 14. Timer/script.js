let timeBegan = null; //did the clock start?
let timeStopped = null; //at what time was the timer stopped?
let stoppedDuration = 0; //how long was the timer stopped?
let startInterval = null; //this is needed to stop the startInterva() method;
let flag = false; //this is to control the start/stop of the timer

const timerContainer = document.getElementsByClassName("timer-container")[0]

timerContainer.addEventListener("click", function(){
    if(!flag){
        startTimer();
        flag = true; //in this case yes because we set it above to false
    } else {
        stopTimer();
        flag = false;
    }
});

timerContainer.addEventListener("dblclick", function(){
    resetTimer();
})

function startTimer(){
    if(timeBegan == null){//in which case it is null 
        timeBegan = new Date(); //this is going to be valid only one time
    }
    if(timeStopped !== null){ //it is not going to be equal to null because we are actually going to initialise the time stopped and the stopTimer function which we will create in a moment
        stoppedDuration += (new Date() - timeStopped); ////how long was the timer stopped for

    startInterval = setInterval(clockRunning, 10); //call every 10 milliseconds
    }

}

function stopTimer(){
    timeStopped = new Date();
    clearInterval(startInterval); //this is a built in function
}

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

function resetTimer(){
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration = 0;
    document.getElementById("timer-display").innerHTML = "00:00:00";
    flag = false;
}