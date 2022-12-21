'use strict';

const pillbox = document.querySelectorAll('div[id*="day-pillbox"]');
const cards = document.querySelectorAll('div[id*="card"]');
const dayInputs = document.querySelectorAll('.day-input');
const habitLists = document.querySelectorAll('.habit-list');
const dayForms = document.querySelectorAll('.day-form');
const finishedList = document.querySelector('#finished-list');
const newHabitForm = document.querySelector('#new-habit-form');
let oldHabits = JSON.parse(localStorage.getItem('Day'));
const finishedHabits = [];
const allDays = [];




for (let i = 0; i < pillbox.length; i++) {
  pillbox[i].addEventListener('click', () => {
    cards[i].classList.toggle('hide');
    pillbox[i].classList.toggle('dark');
  });
}

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
if (oldHabits) {
  for (let i = 0; i < allDays.length; i++) {
    allDays[i].habits = oldHabits[i].habits;
    allDays[i].habitsAdded = oldHabits[i].habitsAdded;
    allDays[i].habitsFinished = oldHabits[i].habitsFinished;
  }
}


// Pull Data from Local Storage
let retrievedDay = localStorage.getItem('Day');


// Parse our Local Storage Data
// let parsedDay = JSON.parse(retrievedDay);
let parsedDay = JSON.parse(retrievedDay);


for (let i = 0; i < dayForms.length; i++) {
  dayForms[i].addEventListener('submit', (e) => {
    e.preventDefault();
    let tempElement = document.createElement('li');
    tempElement.innerText = dayInputs[i].value;
    allDays[i].habits.push(dayInputs[i].value);
    allDays[i].habitsAdded++;
    // Stringify Data for local storage
    let stringifiedDay = JSON.stringify(allDays);
    // Set to Local Storage
    localStorage.setItem('Day', stringifiedDay);
    habitLists[i].appendChild(tempElement);
    dayInputs[i].value = '';
    tempElement.addEventListener('click', () => {
      allDays[i].habitsFinished++;
      let tempIndex = allDays[i].habits.indexOf(tempElement.innerText);
      allDays[i].habits.splice(tempIndex, 1);
      let stringifiedDay = JSON.stringify(allDays);
      localStorage.setItem('Day', stringifiedDay);
      finishedHabits.push(tempElement);
      finishedList.appendChild(tempElement);
      habitLists[i].removeChild(tempElement);
    });
  });
}

if (oldHabits) {
  for (let i = 0; i < oldHabits.length; i++) {
    if (oldHabits[i].habits) {
      for (let j = 0; j < oldHabits[i].habits.length; j++) {
        let tempElement = document.createElement('li');
        tempElement.innerText = oldHabits[i].habits[j];
        allDays[i].list.appendChild(tempElement);
        tempElement.addEventListener('click', () => {
          allDays[i].habitsFinished++;
          let tempIndex = allDays[i].habits.indexOf(tempElement.innerText);
          allDays[i].habits.splice(tempIndex, 1);
          let stringifiedDay = JSON.stringify(allDays);
          localStorage.setItem('Day', stringifiedDay);
          finishedHabits.push(tempElement);
          finishedList.appendChild(tempElement);
          habitLists[i].removeChild(tempElement);
        }
        );
      }
    }
  }
}
let curr = new Date; // get current date
let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
let last = first + 6; // last day is the first day + 6

let firstday = new Date(curr.setDate(first)).toUTCString().slice(0, 17);
let lastday = new Date(curr.setDate(last)).toUTCString().slice(0, 17);

document.getElementById('date').innerHTML = `${firstday} - ${lastday}`;

const weekdays = [monday, tuesday, wednesday, thursday,friday];
const weekend = [saturday, sunday];

newHabitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (newHabitForm.frequency.value === 'daily') {
    for (let day of allDays) {
      day.habits.push(newHabitForm.habitTitle.value);
      day.habitsAdded++;
      let tempElement = document.createElement('li');
      tempElement.innerText = newHabitForm.habitTitle.value;
      day.list.appendChild(tempElement);
      let stringifiedDay = JSON.stringify(allDays);
      localStorage.setItem('Day', stringifiedDay);
      // newHabitForm.habitTitle.value = '';
      tempElement.addEventListener('click', () => {
        day.habitsFinished++;
        let tempIndex = day.habits.indexOf(tempElement.innerText);
        day.habits.splice(tempIndex, 1);
        let stringifiedDay = JSON.stringify(allDays);
        localStorage.setItem('Day', stringifiedDay);
        finishedHabits.push(tempElement);
        finishedList.appendChild(tempElement);
        day.list.removeChild(tempElement);
      });
    }
  } else if (newHabitForm.frequency.value === 'weekdays') {
    for (let day of weekdays) {
      day.habits.push(newHabitForm.habitTitle.value);
      day.habitsAdded++;
      let tempElement = document.createElement('li');
      tempElement.innerText = newHabitForm.habitTitle.value;
      day.list.appendChild(tempElement);
      let stringifiedDay = JSON.stringify(allDays);
      localStorage.setItem('Day', stringifiedDay);
      tempElement.addEventListener('click', () => {
        day.habitsFinished++;
        let tempIndex = day.habits.indexOf(tempElement.innerText);
        day.habits.splice(tempIndex, 1);
        let stringifiedDay = JSON.stringify(allDays);
        localStorage.setItem('Day', stringifiedDay);
        finishedHabits.push(tempElement);
        finishedList.appendChild(tempElement);
        day.list.removeChild(tempElement);
      });
    }
  } else if (newHabitForm.frequency.value === 'weekends') {
    for (let day of weekend) {
      day.habits.push(newHabitForm.habitTitle.value);
      day.habitsAdded++;
      let tempElement = document.createElement('li');
      tempElement.innerText = newHabitForm.habitTitle.value;
      day.list.appendChild(tempElement);
      let stringifiedDay = JSON.stringify(allDays);
      localStorage.setItem('Day', stringifiedDay);
      tempElement.addEventListener('click', () => {
        day.habitsFinished++;
        let tempIndex = day.habits.indexOf(tempElement.innerText);
        day.habits.splice(tempIndex, 1);
        let stringifiedDay = JSON.stringify(allDays);
        localStorage.setItem('Day', stringifiedDay);
        finishedHabits.push(tempElement);
        finishedList.appendChild(tempElement);
        day.list.removeChild(tempElement);
      });
    }
  }
});

