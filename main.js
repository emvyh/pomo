//what is pomodoro timer?
function popup() {
  const pop = document.getElementById("pop");
  const head = document.getElementById("poplink");

  pop.style.display = "block"; //show the popup when clicked first time

  head.addEventListener("click", function () {
    pop.style.display = "block"; // Show the popup
  });
  document.addEventListener("click", function (event) {
    if (!pop.contains(event.target) && event.target !== head) {
      pop.style.display = "none"; // Hide the popup if click is outside the popup
    }
  });
}
//custom time popup

function custom() {
  const custom = document.getElementById("custom");
  const customlink = document.getElementById("custom link");

  custom.style.display = "inline"; // Show the popup when clicked first time

  customlink.addEventListener("click", function () {
    custom.style.display = "inline"; // Show the custom popup
  });
  document.addEventListener("click", function (event) {
    if (!custom.contains(event.target) && event.target !== customlink) {
      custom.style.display = "none"; // Hide the popup if click is outside the popup
    }
  });
}

//add time to the timer
let count;

function addTime(minutes) {
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  let total = minutes * 60; //total of seconds
  const curMin = Math.floor(total / 60); 
  const curSec = total % 60;
  
  min.textContent = String(curMin).padStart(2, "0")
  sec.textContent = String(curSec).padStart(2, "0");
}
function tomatosub(){
  const custom = document.getElementById("custom");
  const time = document.getElementById("input").value;
  var value = parseFloat(time);
  if (isNaN(value) || value < 0 || value > 60) {
    alert("Please enter a valid number of minutes between 0 and 60");
    return;
  }
  else{
    addTime(time);
    custom.style.display = "none";
  }
}
function start(){
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  let total = minutes * 60; //total of seconds

  clearInterval(count); //empties for next
  min.textContent = "00";
  sec.textContent = "00";

  countdown = setInterval(() => {
    //if we are at end of timer
    if (total <= 0) {
      clearInterval(countdown);
      alert("ringring");
      return;
    }

    total--; //countdown

    const curMin = Math.floor(total / 60); //gets the minutes and rounds down
    const curSec = total % 60; //gets the seconds without counting hours

    min.textContent = String(curMin).padStart(2, "0");
    sec.textContent = String(curSec).padStart(2, "0");
  }, 1000);
}

function pause(){

}
function redo(){

}


