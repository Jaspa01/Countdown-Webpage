
const countdown = () => {
    const countDate = new Date("June 15, 2030 00:40:00").getTime();
    const current = new Date().getTime();
    const difference = countDate - current;
    //TIME
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // CALCULATION
    const textDay = Math.floor(difference / day);
    const textHour = Math.floor((difference % day) / hour);
    const textMinute = Math.floor((difference % hour) / minute);
    const textSecond = Math.floor((difference % minute) / second);

    //SELECTING THE ELEMENTS
    const days = document.getElementById("day");
    const hours = document.getElementById("hour");
    const minutes = document.getElementById("minute");
    const seconds = document.getElementById("second");

    //MANIPULATING THE TIME COMPONENTS
    days.innerText = textDay;
    hours.innerText = textHour;
    minutes.innerText = textMinute;
    seconds.innerText = textSecond;


    if (seconds.innerText <= 1) {
        document.getElementById("second-small").innerText = "Second";
    } else {
        sec();
    };
    if (minutes.innerText <= 1) {
        document.getElementById("minute-small").innerText = "Minute";
    } else {
        min();
    };
    if (hours.innerText <= 1) {
        document.getElementById("hour-small").innerText = "Hour";
    } else {
        hr();
    };
    if (days.innerText <= 1) {
        document.getElementById("day-small").innerText = "Day";
    } else {
        dDay();
    };

};
setInterval(countdown, 1000);


function sec() {
    document.getElementById("second-small").innerText = "Seconds";
};

function min() {
    document.getElementById("minute-small").innerText = "Minutes";
};

function hr() {
    document.getElementById("hour-small").innerText = "Hours";
};

function dDay() {
    document.getElementById("day-small").innerText = "Days";
};