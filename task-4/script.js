let cookieName = "consent";
createButton = document.getElementById("createBtn");
deleteButton = document.getElementById("deleteBtn");

createButton.addEventListener("click", () => {
  cookieManager(cookieName, true);
  sessionStroageManager(true);
  localStorageManager(true);
  PrintToConsole();
});
deleteButton.addEventListener("click", () => {
  cookieManager(cookieName, false);
  sessionStroageManager(false);
  localStorageManager(false);
  PrintToConsole();
});

function PrintToConsole() {
  console.clear();
  console.log("cookie  - ", document.cookie ? document.cookie : null);
  console.log(
    "session storage data  - ",
    sessionStorage.getItem("seession-data")
  );
  console.log("local storage data  - ", localStorage.getItem("local-data"));
}

function cookieManager(name, condition) {
  if (condition) {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    document.cookie = `${name}=true; expires=${expiry.toUTCString()}; path=/task-4;`;
  } else {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/task-4;`;
  }
}

function sessionStroageManager(condition) {
  condition
    ? sessionStorage.setItem("seession-data", "exist")
    : sessionStorage.clear();
}

function localStorageManager(condition) {
  condition
    ? localStorage.setItem("local-data", "exist")
    : localStorage.clear();
}
