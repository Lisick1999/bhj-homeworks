const timerElement = document.getElementById("timer");
let seconds = parseInt(timerElement.innerText);

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
}

function updateTimer() {
  timerElement.innerText = formatTime(seconds);

  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timerInterval);
    alert("Вы победили в конкурсе!");
  }
}

const timerInterval = setInterval(updateTimer, 1000);