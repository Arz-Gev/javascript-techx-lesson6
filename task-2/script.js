let noteField = document.getElementById("myNote");
let buttonTask2 = document.getElementById("button-task2");

window.onload = () => {
  let fromStorage = sessionStorage.getItem("notes");
  fromStorage ? (noteField.value = fromStorage) : 0;
};

buttonTask2.addEventListener("click", () => {
  sessionStorage.setItem("notes", noteField.value);
});
