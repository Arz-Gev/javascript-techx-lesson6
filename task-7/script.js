let start = document.getElementById("start");
let end = document.getElementById("end");
let display = document.getElementById("display");
let fastBox = document.querySelectorAll("#fast");
let body = document.querySelector("body");
let ticking = false;
let tick = false;
let firstCall = true;
let animatedBackground;
let tickTack;
let whenStarted;
let color1;
let color2;
let color = true;
let px;

start.addEventListener("click", () => Ticker(true));

end.addEventListener("click", () => Ticker(false));

document.addEventListener("keydown", () => {
  ticking ? Ticker(false) : Ticker(true);
});

function Ticker(shouldWork) {
  if (firstCall) {
    t = Date.now();
  }
  if (shouldWork) {
    if (ticking) {
      console.log("you can't start again whiel it already work", time(t));
      return;
    }
    firstCall = false;
    ticking = true;
    animation(true);
    tickTack = setInterval(() => {
      console.log("Tick ", time(t));
      callColorInverse();
      if (tick) {
        display.textContent = "T A C K";
        tick = false;
        return;
      }
      display.textContent = "T I C K";
      tick = true;
    }, 700);
  } else {
    console.log("ended ticking", time(t));
    ticking = false;
    animation(false);
    clearInterval(tickTack);
    display.textContent = "PRESS TO START";
  }
}

function callColorInverse() {
  if (color) {
    color1 = "white";
    color2 = "black";
    color = false;
  } else {
    color1 = "black";
    color2 = "white";
    color = true;
  }
  body.style.backgroundColor = color2;
  display.style.backgroundColor = color2;
  display.style.color = color1;
  start.style.backgroundColor = color2;
  start.style.color = color1;
  end.style.backgroundColor = color2;
  end.style.color = color1;
  fastBox.forEach((element) => {
    element.style.backgroundColor = color1;
  });
}

function time(t) {
  return `${(Date.now() - t) / 1000}s`;
}

function animation(work) {
  if (!work) {
    fastBox.forEach((element) => {
      element.style.display = "none";
    });
    return clearInterval(animatedBackground);
  }
  animatedBackground = setInterval(() => {
    fastBox.forEach((element) => {
      element.style.display = "flex";
    });
    let info = body.getBoundingClientRect();
    if (!px) {
      px = 1;
    }
    if (px > info.width) {
      px = 0;
    }
    px = px + 20;

    fastBox.forEach((element) => {
      element.style.transform = `translate(${px}px,${
        (px - px * 2) / 1.7
      }px) rotate(56deg)`;
    });
  }, 10);
}
