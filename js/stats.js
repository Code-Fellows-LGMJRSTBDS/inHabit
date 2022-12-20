'use strict';
// ********************** DOM WINDOWS *********************


// ********************* CANVAS ELEM FOR CHART ********************

let canvasElem = document.getElementById('Chart');

// ********************* HELPER FUNCTIONS / UTILITIES / METHODS ****************


// ********************* THIS FUNCTION RENDERS THE CHART ***********************
<<<<<<< HEAD
let chartData =
  "[{\"dayName\":\"Sunday\",\"dayname\":0,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":7,\"habitsFinished\":6,\"habits\":[\"get paid\"]},{\"dayName\":\"Monday\",\"dayname\":1,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":3,\"habitsFinished\":2,\"habits\":[\"don't lose\"]},{\"dayName\":\"Tuesday\",\"dayname\":2,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":4,\"habitsFinished\":2,\"habits\":[\"Fat stack benjis\",\"Fat stack benjis\"]},{\"dayName\":\"Wednesday\",\"dayname\":3,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":9,\"habitsFinished\":9,\"habits\":[]},{\"dayName\":\"Thursday\",\"dayname\":4,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":3,\"habitsFinished\":2,\"habits\":[\"Take the day off\"]},{\"dayName\":\"Friday\",\"dayname\":5,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":2,\"habitsFinished\":1,\"habits\":[\"party boi\"]},{\"dayName\":\"Saturday\",\"dayname\":6,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":12,\"habitsFinished\":9,\"habits\":[\"win\",\"win\",\"win\"]}]"
let parsedData = JSON.parse(chartData);

let labels = [];
let habitsAdded = []
let habitsFinished = []
parsedData.forEach(element => {
  labels.push(element.dayName);
  habitsAdded.push(element.habitsAdded);
  habitsFinished.push(element.habitsFinished);
});
=======

let parseData = JSON.parse(localStorage.getItem('Day'));
>>>>>>> origin

// ********************* THIS FUNCTION RENDERS THE CHART ************************
function renderChart() {
  let dayName = []
  let habitsAdded = []
  let habitsFinished = []

<<<<<<< HEAD
function renderChart() {

  let chartObj = {
    type: 'line',
    data: {
      // going to need an empty array 
      labels: labels,

=======
  parseData.forEach(element => {
    dayName.push(element.dayName);
    habitsAdded.push(element.habitsAdded);
    habitsFinished.push(element.habitsFinished);
  });

  console.log(dayName);
// ******************* THIS IS THE ACTUAL CHART ****************************
  let chartObj = {
    scaleFontColor: "white",
    type: 'line',
    data: {
      labels: dayName,
      // going to need an empty array 
>>>>>>> origin
      datasets: [{
        label: '# of tasks to do',
        data: habitsAdded,
        borderWidth: 1,
        backgroundcolor: 'red',
      },
      {
        label: '# of tasks completed',
        data: habitsFinished,
        borderWidth: 1,
        backgroundcolor: 'blue',
      },
      ]
    },
    options: {
<<<<<<< HEAD
      indexAxis: 'x',
      scales: {
        y: {
          beginAtZero: true
=======
      responsive: true,
      indexAxis: 'x',
      scales: {
        y: {
          ticks: { color: 'gold', beginAtZero: true },
        },
        x: {
          ticks: { color: 'white', beginAtZero: true }
>>>>>>> origin
        }
      }
    }
  }
  new Chart(canvasElem, chartObj)
};

// ********************* EVENT HANDLERS **********************



// ******************** EXECUTABLE CODE **************************
<<<<<<< HEAD
renderChart();
=======
renderChart();




// month constructor
// get the month 
// properties actual month
// new Date().getmonth()
// need properties for tasks added and completed
// wherever in the code the tasks are being added and completed tap into that
// on page load create(if youre new to the page create of the months/ if not use that data stored to pull the data from the local strorage ) all of the months but also needs the all of the tasks and completed tasks
// create an array for the year



// global current month = to new Date().getMonth()

// create a constructor of all months array that'll stores months created form the constructor 
// properties on there the month where you'd type of january give a value and a month string (month name) and a property for tasks added and completed 
// where-ever the tasks are being added to the day or complted do the same at the global month constructor comparing it to the month object 
>>>>>>> origin
