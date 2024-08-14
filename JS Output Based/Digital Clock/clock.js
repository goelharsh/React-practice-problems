// const hours = document.querySelector(".hours");
// const minutes = document.querySelector(".minutes");
// const seconds = document.querySelector(".seconds");
// const amorpm = document.querySelector(".amorpm");


// function init() {
//   const date = new Date();

//   let hoursTime = date.getHours()
//   let minutesTime = date.getMinutes()
//   let secondsTime = date.getSeconds()
//   if (hoursTime > 12) {
//     hoursTime -=12;
//     amorpm.innerText = "PM";
//   } else {
//     amorpm.innerText = "AM";
//   }

//   if(hoursTime<10){
//     hoursTime = "0"+ hoursTime
//   }
//   if(minutesTime<10){
//     minutesTime = "0"+ minutesTime
//   }
//   if(secondsTime<10){
//     secondsTime = "0"+ secondsTime
//   }

//   hours.innerText =hoursTime
//   minutes.innerText = minutesTime
//   seconds.innerText = secondsTime
//   requestAnimationFrame(init);
// }

// requestAnimationFrame(init);



// Optimal solutions
function init() {
    const [time, period] = new Date().toLocaleTimeString('en-US', { hour12: true }).split(' ');
    const [hoursTime, minutesTime, secondsTime] = time.split(':');
    document.querySelector(".hours").textContent = hoursTime;
    document.querySelector(".minutes").textContent = minutesTime;
    document.querySelector(".seconds").textContent = secondsTime;
    document.querySelector(".amorpm").textContent = period;
    requestAnimationFrame(init);
  }
  
  requestAnimationFrame(init);
  