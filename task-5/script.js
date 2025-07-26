let display = document.getElementById("display");
let button = document.getElementById("get-joke");

button.addEventListener("click", () => {});
async function requestJoke() {
  let response = await axios({
    method: "GET",
    url: "https://icanhazdadjoke.com/",
  });
}
