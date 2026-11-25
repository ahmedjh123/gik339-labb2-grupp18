// Hämtar elementen från sidan
const checkbox = document.getElementById("divStyle");
const textFields = document.getElementsByClassName("textfield");
const removeBtn = document.getElementsByTagName("button")[0];
const output = document.querySelector("#output");

// Körs när man skriver i ett textfält
function onTextInput(e) {
  console.log(e.target);

  const fieldId = e.target.id;

  if (fieldId === "content") {
    output.innerHTML = e.target.value;
  }
}

// Byter bakgrundsfärg när checkboxen ändras
checkbox.addEventListener("change", function () {
  let colorField;

  for (const field of textFields) {
    if (field.id === "color") {
      colorField = field;
    }
  }

  output.style.backgroundColor = colorField.value;
});

// Kopplar funktionen till alla textfält
for (const field of textFields) {
  field.addEventListener("input", onTextInput);
}

// Tar bort rutan när man klickar på knappen
removeBtn.addEventListener("click", function () {
  output.remove();
});
