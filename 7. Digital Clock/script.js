window.addEventListener('load', calculateTime);

function calculateTime(){
    let date = new Date();
    let todaysDate = date.getDate();
    let todaysMonth = date.getMonth();
    let year = date.getFullYear();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let dayNames = ['SUN', 'MON', "TUE", "WED", "THU", "FRI", "SAT"];
    let monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    hour = hour % 12;
    hour = hour ? hour : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.getElementById('day').innerHTML = dayNames[day];
    document.getElementById('todaysDate').innerHTML = todaysDate;
    document.getElementById('month').innerHTML = monthNames[todaysMonth];
    document.getElementById('year').innerHTML = year;
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('ampm').innerHTML = ampm;

    setTimeout(calculateTime, 200);
}