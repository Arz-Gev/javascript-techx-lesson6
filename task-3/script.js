let coockieName = "consent";

window.onload = () => {
  let banner = document.querySelectorAll(".coockie");
  let createButton = document.getElementById("coockie-button");
  let deleteButton = document.getElementById("anticoockie-button");
  if (document.coockie) {
    banner.forEach((el) => (el.style.display = "none"));
  } else {
    banner.forEach((el) => (el.style.display = "flex"));
  }
};

function setCoockie(name) {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);
  document.cookie = `${name}=true; expires=${expiry.toUTCString()}; path=/task-3;`;
}

function deleteCoockie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/task-3;`;
}
