



























// //we type this at the end
// //now we call this function calculateTime 
// //otherwise when we first run the project the time is not gonna display
// window.addEventListener('load', calculateTime);


// function calculateTime(){
//     let date = new Date();  //do that with // console.log(date) and calculateTime()
//     let dayNumber = date.getDay();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let ampm = hour >= 12 ? 'PM' : 'AM';
//     let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

//     hour = hour % 12;
//     //the only roblem is if it is midnight it is gonna return 0,
//     //or if it is noon it's gonna return 0, so
//     hour = hour ? hour : '12'; //If hour is a "falsy" value (specifically 0 in this case), then set hour to '12'.
//     hour = hour < 10 ? '0' + hour : hour;
//     minute = minute < 10 ? '0' + minute : minute;

//     document.getElementById("day").innerHTML = dayNames[dayNumber];
//     document.getElementById("hour").innerHTML = hour;
//     document.getElementById("minute").innerHTML = minute;
//     document.getElementById("ampm").innerHTML = ampm;

//     //this calls this function over and over
//     setTimeout(calculateTime, 200); //we call this function every 200 miliseconds
// }