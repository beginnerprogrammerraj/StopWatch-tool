let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);

    document.getElementById("startStop").innerText = "Start";
  } else {
    timer = setInterval(updateDisplay, 1000);

    document.getElementById("startStop").innerText = "Stop";
  }
  isRunning = !isRunning;
}

function updateDisplay() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  const display = document.getElementById("display");
  display.innerText =
    formatTime(hours) + " :" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function reset() {
  clearInterval(timer);
  let isRunning = false;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  document.getElementById("display").innerText = "00:00:00 ";

  document.getElementById("startStop").innerText = "Start ";
}
