let display = document.getElementById("display");
let button = document.getElementById("get-joke");

button.addEventListener("click", () => {
  let started = Date.now();
  console.clear();
  console.log(`${Date.now() - started}ms - calling the fetch function`);
  requestJoke(started);
  console.log(`${Date.now() - started}ms - called the fetch function`);
});

async function requestJoke(start) {
  console.log(`${Date.now() - start}ms - trying to fetch`);
  try {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("failed to fetch joke");
    }
    console.log(
      `${Date.now() - start}ms - got the response without erros, starging .json`
    );
    let data = await response.json();
    console.log(`${Date.now() - start}ms - printing joke on display`);
    display.textContent = data.joke;
  } catch (error) {
    console.log(Date.now() - start + "ms got an error", error);
    display.textContent = "Failed to fetch joke.";
  }
}
