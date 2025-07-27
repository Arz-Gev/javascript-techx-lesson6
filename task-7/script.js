let start = document.getElementById("start");
let end = document.getElementById("end");
let display = document.getElementById("display");
let ticking = false;
let tick = false;
let tickTack;

start.addEventListener("click", () => Ticker(true));

end.addEventListener("click", () => Ticker(false));

document.addEventListener("keydown", () => {
  ticking ? Ticker(false) : Ticker(true);
});

function Ticker(shouldWork) {
  if (shouldWork) {
    ticking = true;
    tickTack = setInterval(() => {
      console.log(tick);
      if (tick) {
        display.textContent = "TACK";
        tick = false;
        return;
      }
      display.textContent = "TICK";
      tick = true;
    }, 1000);
  } else {
    ticking = false;
    clearInterval(tickTack);
    display.textContent = "PRESS TO START";
  }
}

function callColorInverse() {
  document.querySelector("");
}
