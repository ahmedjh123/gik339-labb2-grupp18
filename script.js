// Uppgift 4
const checkbox = document.getElementById("divStyle");
const textFields = document.getElementsByClassName("textfield");
const button = document.getElementsByTagName("button")[0];
const box = document.querySelector("#box");

// Uppgift 5
function handleInput(e) {
  console.log(e.target);

  const id = e.target.id;

  if (id == "content") {
    box.innerHTML = e.target.value;
  }
}

// Uppgift 6
checkbox.addEventListener("change", function () {
  const color = textFields[0].value; // färgfältet ligger först
  box.style.backgroundColor = color;
});

for (let i = 0; i < textFields.length; i++) {
  textFields[i].addEventListener("input", handleInput);
}

button.addEventListener("click", function () {
  box.remove();
});
