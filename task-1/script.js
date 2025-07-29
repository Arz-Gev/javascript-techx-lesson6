let form = document.getElementById("form");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let display = document.getElementById("display");
let storageReset = document.getElementById("clear");
let dataExist = false;
let user = {};

window.onload = () => {
  checkLoadIfExist();
};

document.addEventListener("submit", (submit) => {
  submit.preventDefault();
  inputHandler(dataExist);
});

storageReset.addEventListener("click", () => {
  localStorage.removeItem("userData");
  console.clear();
  user = {};
  checkLoadIfExist();
});

function checkLoadIfExist() {
  let userFromStorage = JSON.parse(localStorage.getItem("userData"));

  if (userFromStorage) {
    dataExist = true;
    user = userFromStorage;
    console.log(
      "%cHI YOU'RE ALREADY SUBMITED\nBELOW IS YOUR DATA",
      "color: green; font-weight: 700; font-size: 16px;"
    );
    console.table(user);
    form.reset();
  } else {
    dataExist = false;
  }
}

function inputHandler(condition) {
  if (!condition) {
    if (!userEmail.value || !userName.value) {
      inputLog(false);
      display.style.color = "rgb(255, 65, 65)";
      display.textContent = "PLEASE INPUT BOTH FIELDS";
    } else {
      display.textContent = "";
      user = {
        name: userName.value,
        email: userEmail.value,
      };
      storageSaver(user);
      form.reset();
      inputLog(true);
      user = {};
    }
  } else {
    checkLoadIfExist();
    display.style.color = "rgb(173, 255, 47)";
    display.textContent = "YOU ARE ALREADY REGISTERED";
    console.clear();
    console.log(
      "%cYOU'RE ALREADY SUBMITED",
      "color: green; font-weight: 700; font-size: 16px;"
    );
    console.log(
      `%cname is - ${user.name}, email is - ${user.email}`,
      "font-weigth: 600; font-size: 12px; color: white;"
    );
  }
}

function storageSaver(user) {
  let userJson = JSON.stringify(user, null, 2);
  localStorage.setItem("userData", userJson);
  dataExist = true;
}

function inputLog(condition) {
  console.clear();

  if (condition) {
    console.log(
      "%cSUBMITED, USER DATA SAVED IN STORAGE",
      "color: green; font-weight: 700; font-size: 16px;"
    );
    console.log(
      `%cname is - ${user.name}, email is - ${user.email}`,
      "font-weigth: 600; font-size: 12px; color: white;"
    );
  } else {
    console.log(
      "%cNOT SUBMITED",
      "color: rgb(255, 65, 65); font-weight: 700; font-size: 16px;"
    );
    console.log(
      `%cname is - ${user.name}, email is - ${user.email}`,
      "font-weigth: 600; font-size: 12px; color: white;"
    );
  }
}
