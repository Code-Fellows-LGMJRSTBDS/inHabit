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
const finishedList = document.querySelector('#finished-list');
const finishedHabits = [];
const allDays = [];


for (let i = 0; i < dayForms.length; i++) {
  dayForms[i].addEventListener('submit', (e) => {
    e.preventDefault();
    let tempElement = document.createElement('li');
    tempElement.innerText = dayInputs[i].value;
    allDays[i].habits.push(dayInputs[i].value);
    allDays[i].habitsAdded++;
    habitLists[i].appendChild(tempElement);
    tempElement.addEventListener('click', () => {
      allDays[i].habitsFinished++;
      let tempIndex = allDays[i].habits.indexOf(tempElement.innerText);
      allDays[i].habits.splice(tempIndex, 1);
      finishedHabits.push(tempElement);
      finishedList.appendChild(tempElement);
      habitLists[i].removeChild(tempElement);
    });
  });
}

for (let i = 0; i < pillbox.length; i++) {
  pillbox[i].addEventListener('click', () => {
    cards[i].classList.toggle('hide');
    pillbox[i].classList.toggle('dark');
  });
}



let TOD = new Date();

function Day(dayName, dayNumber) {
  this.dayName = dayName;
  this.dayname = dayNumber;
  this.pillbox = pillbox[dayNumber + 1];
  this.card = cards[dayNumber+1];
  this.input = dayInputs[dayNumber];
  this.list = habitLists[dayNumber];
  this.form = dayForms[dayNumber];
  this.habitsAdded = 0;
  this.habitsFinished = 0;
  this.habits = [];
  allDays.push(this);
}

const sunday = new Day('Sunday', 0);
const monday = new Day('Monday', 1);
const tuesday = new Day('Tuesday', 2);
const wednesday = new Day('Wednesday', 3);
const thursday = new Day('Thursday', 4);
const friday = new Day('Friday', 5);
const saturday = new Day('Saturday', 6);

// Stringify Data for local storage
let stringifiedDay = JSON.stringify(allDays);

console.log('Stringified Day', stringifiedDay);

// Set to Local Storage
localStorage.setItem('Day', stringifiedDay);

// Pull Data from Local Storage
let retrievedDay = localStorage.getItem('Day');

console.log('retrieved day >>>', retrievedDay);

// Parse our Local Storage Data
// let parsedDay = JSON.parse(retrievedDay);
let parsedDay = JSON.parse(retrievedDay)

console.log('parsed days >>>', parsedDay);

