let acCost = 10;
let acCount = 0;
let dCount = 0;

function addDonuts() {
  let donutCount = document.getElementById("donut-counter");
  dCount = dCount + 1;
  donutCount.textContent = "Donut Counter: " + dCount;
}

function addAutoClicker() {
  let donutCount = document.getElementById("donut-counter");
  let autoClickerCount = document.getElementById("ac-count");
  let autoClickerCost = document.getElementById("ac-cost");
  if (dCount >= acCost) {
    dCount = dCount - acCost;
    acCount = acCount + 1;
    autoClickerCount.textContent = "Auto-Clickers: " + acCount;
    acCost = Math.round(acCost * 1.10);
    autoClickerCost.textContent = "Auto Clicker Cost: " + acCost + " Donuts"
    donutCount.textContent = "Donut Counter: " + dCount;
  }
  
}

function activateAutoClicker() {
  setInterval(() => {
    for(let x = 0; x < acCount; x++) {
      dCount ++;
    }
    let donutCount = document.getElementById("donut-counter");
    donutCount.textContent = "Donut Counter: " + dCount;
  }, 1000)
}

activateAutoClicker();