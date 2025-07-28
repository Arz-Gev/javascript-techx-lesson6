let body = document.getElementById("body");
let box = document.querySelectorAll("#fast");
let start = document.getElementById("start");
let end = document.getElementById("end");
let display = document.getElementById("display");
let fastBox = document.getElementById("fast");

let ticking = false;
let tick = false;
let firstCall = true;
let animatedBackground;
let tickTack;
let whenStarted;
let color1;
let color2;
let color = true;

let Left;
let Top;

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
    }, 1000);
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
  box.forEach((element) => {
    element.style.backgroundColor = color1;
  });
}

function time(t) {
  return `${(Date.now() - t) / 1000}s`;
}

function animation(work) {
  if (!work) {
    clearInterval(animatedBackground);
    return;
  }
  animatedBackground = setInterval(() => {
    box.forEach((element) => {
      let bodyInfo = body.getBoundingClientRect();
      let widthStep = bodyInfo.width / 60;
      let heightStep = bodyInfo.height / 60;
      let boxInfo = element.getBoundingClientRect();

      if (boxInfo.left > bodyInfo.width) {
        Left = Math.floor(Math.random() * boxInfo.width);
      } else {
        Left = boxInfo.left + widthStep;
      }
      if (boxInfo.top <= -100) {
        Top = bodyInfo.height;
      } else {
        Top = boxInfo.top - heightStep;
      }

      element.style.left = `${Left}px`;
      element.style.top = `${Top}px`;
    });
  }, 1000 / 60);
}
