let display = document.getElementById("display");
let smartButton = document.getElementById("smartButton");
let dumpButton = document.getElementById("dumpButton");
let nukeButton = document.getElementById("nukeButton");
let rebornButton = document.getElementById("rebornButton");

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
  secondLife();
});

function death() {
  display.textContent = "you died";
  page.style.backgroundColor = "red";
  rebornButton.style.display = "flex";
  smartButton.style.display = "none";
  dumpButton.style.display = "none";
  nukeButton.style.display = "none";
}

function secondLife() {
  rebornButton.style.display = "none";
  display.textContent = "PRESS TO START";
  page.style.backgroundColor = "white";
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
    display.textContent = nuke;
    console.log(nuke, " steps closer to death");
    callingNuke(nuke * nuke);
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
