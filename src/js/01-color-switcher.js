function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const elBtnStart = document.querySelector('button[data-start]');
const elBtnStop = document.querySelector('button[data-stop]');
const elBody = document.querySelector('body');

elBtnStop.disabled = true;

elBtnStart.addEventListener('click', onStart);
elBtnStop.addEventListener('click', onStop);

function onStart() {
timerID = setInterval(() => {
elBody.style.backgroundColor = getRandomHexColor();
},1000)

elBtnStart.disabled = true;
elBtnStop.disabled = false
}

function onStop() {   
    clearInterval(timerID);
    elBtnStart.disabled = false;
    elBtnStop.disabled = true;
}
