function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const elBtnStart = document.querySelector('button[data-start]');
const elBtnStop = document.querySelector('button[data-stop]');
const elBody = document.querySelector('body');

elBtnStop.disabled = true;
let timerId = null;

elBtnStart.addEventListener('click', onStart);
elBtnStop.addEventListener('click', onStop);

function onStart() {
 timerId = setInterval(() => {
elBody.style.backgroundColor = getRandomHexColor();
},1000)

elBtnStart.disabled = true;
elBtnStop.disabled = false
}

function onStop() {   
    clearInterval(timerId);
    elBtnStart.disabled = false;
    elBtnStop.disabled = true;
}



