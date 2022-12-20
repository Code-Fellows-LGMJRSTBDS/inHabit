'use strict';
// ********************** DOM WINDOWS *********************


// ********************* CANVAS ELEM FOR CHART ********************

let canvasElem = document.getElementById('Chart');

// ********************* HELPER FUNCTIONS / UTILITIES / METHODS *********************


// ********************* THIS FUNCTION RENDERS THE CHART ***********************
let renderChart() {

}


let chartObj = {
  type: 'line',
  data: {
    labels: daysOfTheWeek, 
    // going to need an empty array 
    datasets: [{
      label: '# of tasks to do',
      data: productVotes,
      borderWidth: 1,
      backgroundcolor: 'red',
    },
    {
      label: '# of tasks completed',
      data: productVotes,
      borderWidth: 1,
      backgroundcolor: 'blue',
    },
    ]
  },
  options: {
    indexAxis: 'x',
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  let chart = new Chart(canvasElem, chartObj);
};


// ********************* EVENT HANDLERS **********************



// ******************** EXECUTABLE CODE **************************