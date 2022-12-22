'use strict';
// ********************** DOM WINDOWS *********************


// ********************* CANVAS ELEM FOR CHART ********************

let canvasElem = document.getElementById('Chart');

// ********************* HELPER FUNCTIONS / UTILITIES / METHODS *********************


// ********************* THIS FUNCTION RENDERS THE CHART ***********************
let chartData =
  "[{\"dayName\":\"Sunday\",\"dayname\":0,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":7,\"habitsFinished\":6,\"habits\":[\"get paid\"]},{\"dayName\":\"Monday\",\"dayname\":1,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":3,\"habitsFinished\":2,\"habits\":[\"don't lose\"]},{\"dayName\":\"Tuesday\",\"dayname\":2,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":4,\"habitsFinished\":2,\"habits\":[\"Fat stack benjis\",\"Fat stack benjis\"]},{\"dayName\":\"Wednesday\",\"dayname\":3,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":9,\"habitsFinished\":9,\"habits\":[]},{\"dayName\":\"Thursday\",\"dayname\":4,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":3,\"habitsFinished\":2,\"habits\":[\"Take the day off\"]},{\"dayName\":\"Friday\",\"dayname\":5,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":2,\"habitsFinished\":1,\"habits\":[\"party boi\"]},{\"dayName\":\"Saturday\",\"dayname\":6,\"pillbox\":{},\"card\":{},\"input\":{},\"list\":{},\"form\":{\"0\":{}},\"habitsAdded\":12,\"habitsFinished\":9,\"habits\":[\"win\",\"win\",\"win\"]}]"

let parseData = JSON.parse(chartData);



function renderChart() {
  let dayName = []
  let habitsAdded = []
  let habitsFinished = []

  parseData.forEach(element => {
    dayName.push(element.dayName);
    habitsAdded.push(element.habitsAdded);
    habitsFinished.push(element.habitsFinished);
  });

  console.log(dayName);

  let chartObj = {
    scaleFontColor: "white",
    type: 'line',
    data: {
      labels: dayName,
      // going to need an empty array 
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
      responsive: true,
      indexAxis: 'x',
      scales: {
        y: {
          ticks: { color: 'gold', beginAtZero: true },
        },
        x: {
          ticks: { color: 'white', beginAtZero: true }
        }
      }
    }
  }
  new Chart(canvasElem, chartObj)
};


// ********************* EVENT HANDLERS **********************



// ******************** EXECUTABLE CODE **************************
renderChart();