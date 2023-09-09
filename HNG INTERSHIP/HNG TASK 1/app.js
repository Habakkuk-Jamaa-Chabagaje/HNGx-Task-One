// javaScript section for the required time and date functionalities

let dayEl = document.getElementById("currentDay");
let timeEl = document.getElementById("currentTime");

const daysArray = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
];


function timeView(){
    let range = 1000;
    let rangeTime = setTimeout('displayTime()',range);
}

function displayTime() {
    const live = new Date();
    let toDay = "Day: " + daysArray[live.getDay() ] ;
    dayEl.innerHTML = toDay;

    const timer = new Date();
    const seconds = timer.getUTCMilliseconds();
    const minutes = timer.getUTCMinutes();
    const hour = timer.getUTCHours();

    const timeNow = ` Time ${hour}:${minutes}:${seconds}`;
    const timerMillisec = Date.now();
    timeEl.innerHTML = timerMillisec;
    // timeEl.innerHTML = timeNow;
    timeView();
}




