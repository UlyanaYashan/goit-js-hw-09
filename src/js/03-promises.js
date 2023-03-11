import Notiflix from 'notiflix';

const form = document.querySelector('form')

const delayInput = document.querySelector('input[name="delay"]');
const step = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');



form.addEventListener('submit', onSubmit);


function onSubmit(e) {
 e.preventDefault();

 
  let delay = Number(delayInput.value);
  let delayStep = Number(step.value);
  let amount = Number(amountInput.value);

  for(let i = 1; i <= amount; i += 1) {
      
  createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += delayStep;
  }
  form.reset();
}

function createPromise(position, delay) {
 
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
       
        resolve({position, delay});
      } else {
        
        reject({position, delay});
      }
    }, delay);
  });
}

