let display = document.getElementById("display");
let smartButton = document.getElementById("smartButton");
let dumpButton = document.getElementById("dumpButton");
let nukeButton = document.getElementById("nukeButton");
let rebornButton = document.getElementById("rebornButton");
let alive = true;

let page = document.getElementById("page");

smartButton.addEventListener("click", () => {
  notSuperDumpMethod(5);
});

dumpButton.addEventListener("click", () => {
  superDumpMethod();
});

nukeButton.addEventListener("click", () => {
  callingNuke(5);
});

rebornButton.addEventListener("click", () => {
  reborn();
});

document.addEventListener("keydown", () => {
  reborn();
});

function death() {
  alive = false;
  rebornButton.style.display = "flex";
  display.style.display = "none";
  page.style.backgroundImage =
    "url(https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjE2N2puZXJjeDYzYzFlOG1ldXFoNnlkN255b3oyOGp3ZmY3OXF2MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/h5NLPVn3rg0Rq/giphy.gif)";
  page.style.backgroundPosition = "center center";
  page.style.backgroundSize = "cover";
  smartButton.style.display = "none";
  dumpButton.style.display = "none";
  nukeButton.style.display = "none";
  console.log("%cDIED", "color:red; font-size:30px;");
  console.log("%cyou can reborn", "font-size: 7px;");
}

function reborn() {
  if (alive) {
    return;
  }
  alive = true;
  console.clear;
  display.style.display = "flex";
  rebornButton.style.display = "none";
  display.textContent = "PRESS TO START";
  page.style.backgroundImage = "none";
  smartButton.style.display = "flex";
  dumpButton.style.display = "flex";
  nukeButton.style.display = "flex";
}

function callingNuke(nuke) {
  setTimeout(() => {
    if (nuke === Infinity) {
      death();
      return;
    }
    display.textContent = BigInt(nuke);
    console.log(BigInt(nuke), " steps closer to death");
    callingNuke(Math.round(nuke ** 1.5));
  }, 200);
}

function notSuperDumpMethod(num) {
  setTimeout(() => {
    if (num === -1) {
      display.textContent = "PRESS TO START AGAIN";
      return;
    } else if (num === 0) {
      display.textContent = "GO!";
      notSuperDumpMethod(--num);
    } else {
      display.textContent = num;
      notSuperDumpMethod(--num);
    }
  }, 1000);
}

function superDumpMethod() {
  let j = 1;
  for (let i = 5; i > -2; i--) {
    printer(i, j * 1000);
    j++;
  }
}

function printer(num, time) {
  setTimeout(() => {
    if (num === 0) {
      display.textContent = "GO!";
    } else if (num === -1) {
      display.textContent = "PRESS TO START AGAIN";
    } else {
      display.textContent = num;
    }
  }, time);
}
