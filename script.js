
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
let date = document.getElementById("date")
let currentTime = new Date()


setInterval(()=>{
    let currentTime = new Date()
    let secs = currentTime.getSeconds();
    let mins = currentTime.getMinutes();
    let hrs= currentTime.getHours();
    let weekDay = currentTime.getDay();
    let yearDate = currentTime.getDate();
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();




    //Given the weekDay names instead of integers
    switch(weekDay != String){
        case weekDay == 1:
            weekDay = "Monday";
            break;
        case weekDay == 2:
            weekDay = "Tuesday";
            break;
        case weekDay == 3:
            weekDay = "Wednesday";
            break;
        case weekDay == 4:
            weekDay = "Thursday";  
            break;          
        case weekDay == 5:
            weekDay = "Friday";
            break;
        case weekDay == 6:
            weekDay = "Saturday";
            break;
        default:
            weekDay = "Sunday";
            break;
    }

    //If the date is under 10, it will add a 0 at the start of the date. E.g instead of 8, it will be 08
    Number(yearDate)
    if(yearDate<10){
        yearDate = "0"+yearDate
    }

    //Month starting with 1 instead of 0
    month = month + 1

    //Given the month a name instead of integers
    switch(month != String){
        case month == 1:
            month = "January";
            break;
        case month == 2:
            month = "February";
            break;
        case month == 3:
            month = "March";
            break;
        case month == 4:
            month = "April";
            break;
        case month == 5:
            month = "May";
            break;
        case month == 6:
            month = "June";
            break;
        case month == 7:
            month = "July";
            break;
        case month == 8:
            month = "August";
            break;
        case month == 9:
            month = "September";
            break;
        case month == 10:
            month = "October";
            break;
        case month == 11:
            month = "November";
            break;
        default:
            month = "December";
            break;
    }

    
    if(secs<10){
        secs = "0"+secs
    }
    if(mins<10){
        mins = "0"+mins
    }
    if(hrs<10){
        hrs = "0"+hrs
    }

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;

    date.innerHTML = weekDay + "," + " " + yearDate + " " + month + " " + year
}, 1000)
