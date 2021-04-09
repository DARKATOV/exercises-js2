let intervalCount = -1;

function setAlarm() {
  clearInterval(intervalCount); 
  let valueAlarm = document.getElementById('alarmSet').value;
  let timeRemaining = document.getElementById('timeRemaining');
  intervalCount = setInterval(function() {
    let numValue = valueAlarm / 60;
    let seconds = valueAlarm % 60;
    let minutes = Math.trunc(numValue);
    console.log(minutes);
    console.log(seconds);
    if (minutes < 10 && seconds < 10) {
      timeRemaining.textContent = `Time Remaining: 0${minutes}:0${seconds}`;
    }
    if (seconds < 10 && minutes > 9) {
      timeRemaining.textContent = `Time Remaining: ${minutes}:0${seconds}`;
    }
    if (seconds > 9 && minutes < 10) {
      timeRemaining.textContent = `Time Remaining: 0${minutes}:${seconds}`;
    }
    if (seconds > 9 && minutes > 9 ) {
      timeRemaining.textContent = `Time Remaining: ${minutes}:${seconds}`;
    }
    valueAlarm = valueAlarm-1; 
    if (valueAlarm == -1) { 
      clearInterval(intervalCount)
      return playAlarm();
    }
  }
  ,1000); 
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;

