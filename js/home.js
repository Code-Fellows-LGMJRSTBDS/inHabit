const pillbox = document.querySelectorAll('div[id*="day-pillbox"]')
console.log(pillbox) 
const cards = document.querySelectorAll('div[id*="card"]')
console.log(cards)

for (let i = 0; i < pillbox.length; i++) {
  pillbox[i].addEventListener('click', () => {
    cards[i].classList.toggle('hide')
  })
}

let TOD = new Date();