'use strict';

const pillbox = document.querySelectorAll('div[id*="day-pillbox"]');
console.log(pillbox) ;
const cards = document.querySelectorAll('div[id*="card"]');
console.log(cards);
const dayInputs = document.querySelectorAll('.day-input');
console.log(dayInputs);
const habitLists = document.querySelectorAll('.habit-list');
console.log(habitLists);
const dayForms = document.querySelectorAll('.day-form');
console.log(dayForms);


for (let i = 0; i < dayForms.length; i++) {
  dayForms[i].addEventListener('submit', (e) => {
    e.preventDefault();
    let tempElement = document.createElement('li');
    tempElement.innerText = dayInputs[i].value;
    habitLists[i].appendChild(tempElement);
  });
}
// dayForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let tempElement = document.createElement('li');
//   tempElement.innerText = dayInputs[1].value;
//   habitLists[1].appendChild(tempElement);
// });

for (let i = 0; i < pillbox.length; i++) {
  pillbox[i].addEventListener('click', () => {
    cards[i].classList.toggle('hide');
  });
}



let TOD = new Date();

