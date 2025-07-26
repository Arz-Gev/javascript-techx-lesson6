let base = new Date();
let cookieName = "consent";
let cookieBanner = document.getElementById("cookieBody");
let cookieCreate = document.getElementById("cookie-button");
let cookieDelete = document.getElementById("anticookie-button");

cookieBanerStateUpdate();

function cookieBanerStateUpdate() {
  if (!document.cookie) {
    cookieBanner.style.display = "flex";
  } else {
    cookieBanner.style.display = "none";
  }
}

cookieCreate.addEventListener("click", () => {
  setCookie(cookieName);
  cookieBanerStateUpdate();
});

cookieDelete.addEventListener("click", () => {
  deleteCookie(cookieName);
  cookieBanerStateUpdate();
});

function setCookie(name) {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  document.cookie = `${name}=true; expires=${expiry.toUTCString()}; path=/task-3;`;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/task-3;`;
}
