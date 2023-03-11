import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let intervalId = null;
btnStart.disabled = true;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        btnStart.disabled = true;
       return alert ("Please choose a date in the future");
      }
      else if (selectedDates[0] > new Date()) {
      btnStart.disabled = false;
     
      }
    }
  }
    btnStart.addEventListener('click', () =>
         {
          btnStart.disabled = true;
          
          intervalId =   setInterval(() =>
           {
            let startTime = datePicker.selectedDates[0].getTime() - new Date();
           

        if(startTime < 1000) {
          clearInterval(intervalId);
          
        }
         
          convertMs(startTime);
          
        },1000);
      })      
    


const datePicker = flatpickr("input#datetime-picker", options);
datePicker.selectedDates[0].getTime();



function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

   dataDays.innerHTML = days; 
   dataHours.innerHTML = hours;
   dataMinutes.innerHTML = minutes;
   dataSeconds.innerHTML = seconds;

  return { days, hours, minutes, seconds };
}



const timer = document.querySelector('.timer');
const field = document.querySelectorAll('.field');

field.forEach(field => field.style.display = 'flex');
field.forEach(field => field.style.flexDirection = 'column');
timer.style.display = 'flex';
timer.style.justifyContent = 'flex-start';
timer.style.gap = '12px';
timer.style.textTransform = 'uppercase';
timer.style.fontWeight = '500';
timer.style.fontSize = '14px';








