// let date = new Date()
// document.getElementById("date").innerText = date
// let year = date.getFullYear()
// document.getElementById("year").innerText = year

// let month = date.getMonth()
// document.getElementById("month").innerText = month
// let months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ]
// let m = months [month]
// document.getElementById("monthName").innerText = m


let dateDisplay= document.getElementById("date-display")

function updateTimeDisplay() {
    let todayDate = new Date();
    let hours = todayDate.getHours();
    let minutes = todayDate.getMinutes();
    let seconds = todayDate.getSeconds();

    let timeNow = hours + ":" + minutes + ":" + seconds;

    dateDisplay.innerText = timeNow;
}

updateTimeDisplay()

setInterval(updateTimeDisplay, 1000)




document.getElementById("date-display").style .color = "turquoise";
document.getElementById("date-display").style .fontSize = "20px";

