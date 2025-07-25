let AGFT = document.getElementById("agft");
let userName = document.getElementById("name");
let userEmail = document.getElementById("email");
let display = document.getElementById("display");
let storageReset = document.getElementById("clear");
let dataExist;
let user = {};

window.onload = () => {
  checkLoadIfExist();
};

document.addEventListener("submit", (submit) => {
  submit.preventDefault();
  inputHandler(dataExist);
});

storageReset.addEventListener("click", () => {
  localStorage.clear();
});

function checkLoadIfExist() {
  let userFromStorage = JSON.parse(localStorage.getItem("userData"));

  if (userFromStorage) {
    dataExist = true;
    user = userFromStorage;
    console.log(user);
  } else {
    dataExist = false;
  }
}

function inputHandler(condition) {
  if (!condition) {
    if (!userEmail.value || !userName.value) {
      inputLog(false);
      display.style.color = "red";
      display.textContent = "PLEASE INPUT BOTH FIELDS";
    } else {
      display.textContent = "";
      user = {
        name: userName.value,
        email: userEmail.value,
      };
      storageSaver(user);
      AGFT.reset();
      inputLog(true);
      user = {};
    }
  } else {
    display.style.color = "green";
    display.textContent = "YOU ARE ALREADY REGISTERED";
  }
}

function storageSaver(user) {
  let userJson = JSON.stringify(user, null, 2);
  localStorage.setItem("userData", userJson);
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
      "color: red; font-weight: 700; font-size: 16px;"
    );
    console.log(
      `%cname is - ${user.name}, email is - ${user.email}`,
      "font-weigth: 600; font-size: 12px; color: white;"
    );
  }
}
