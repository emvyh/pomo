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
let amount = 0;
let timeLeft = 0;
let paused = false;
let ogTime = 0;

function addTime(minutes) {
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");

  let total = minutes * 60; //total of seconds
  const curMin = Math.floor(total / 60);
  const curSec = total % 60;

  min.textContent = String(curMin).padStart(2, "0");
  sec.textContent = String(curSec).padStart(2, "0");

  amount = minutes;
  ogTime = minutes;
}
function tomatosub() {
  const custom = document.getElementById("custom");
  const time = document.getElementById("input").value;
  var value = parseFloat(time);
  if (isNaN(value) || value < 0 || value > 60) {
    alert("Please enter a valid number of minutes between 0 and 60");
    return;
  } else {
    addTime(time);
    custom.style.display = "none";
  }
}
function start() {
  const min = document.getElementById("min");
  const sec = document.getElementById("sec");
  var alertSound = document.getElementById("alertSound");

  let total = amount * 60; //total of seconds
  timeLeft = total;
  
  clearInterval(count); //empties for next
  
  paused = false;
  if (!paused) {
    countdown = setInterval(() => {
      if (timeLeft <= 0) {
        alertSound.play();
        clearInterval(countdown); // Stop the countdown
        alert("Time's up!");
        return;
      }

      timeLeft--; //countdown

      const curMin = Math.floor(timeLeft / 60); //gets the minutes and rounds down
      const curSec = timeLeft % 60; //gets the seconds without counting hours

      min.textContent = String(curMin).padStart(2, "0");
      sec.textContent = String(curSec).padStart(2, "0");
    }, 1000);
  }
}

function pause() {
  clearInterval(countdown);
  paused = true;
  amount = timeLeft / 60;
}
function redo() {
  clearInterval(countdown);
  paused = false;
  addTime(ogTime);
}
