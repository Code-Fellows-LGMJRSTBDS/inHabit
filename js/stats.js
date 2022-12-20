'use strict';
// ********************** DOM WINDOWS *********************


// ********************* CANVAS ELEM FOR CHART ********************

let canvasElem = document.getElementById('Chart');

// ********************* HELPER FUNCTIONS / UTILITIES / METHODS ****************


// ********************* THIS FUNCTION RENDERS THE CHART ***********************

let parseData = JSON.parse(localStorage.getItem('Day'));

// ********************* THIS FUNCTION RENDERS THE CHART ************************
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
// ******************* THIS IS THE ACTUAL CHART ****************************
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