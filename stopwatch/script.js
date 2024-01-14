let time = 0;
let running = 0;
let timer;

function start() {
  if (running === 0) {
    running = 1;
    increment();
    document.getElementById('startButton').innerHTML = 'Pause';
  } else {
    running = 0;
    document.getElementById('startButton').innerHTML = 'Resume';
    clearInterval(timer);
  }
}

function reset() {
  running = 0;
  document.getElementById('startButton').innerHTML = 'Start';
  time = 0;
  document.getElementById('display').innerHTML = '00:00:00';
  clearInterval(timer);
}

function increment() {
  timer = setInterval(function() {
    time++;
    let mins = Math.floor(time / 10 / 60);
    let secs = Math.floor(time / 10 % 60);
    let tenths = time % 10;
    if (mins < 10) {
      mins = "0" + mins;
    }
    if (secs < 10) {
      secs = "0" + secs;
    }
    document.getElementById('display').innerHTML = mins + ":" + secs + ":" + "0" + tenths;
  }, 100);
}

document.getElementById('startButton').addEventListener('click', start);
document.getElementById('stopButton').addEventListener('click', function() {
  running = 0;
  document.getElementById('startButton').innerHTML = 'Start';
  clearInterval(timer);
});

document.getElementById('resetButton').addEventListener('click', reset);
