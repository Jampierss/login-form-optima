// Seleccionar el formulario y los botones de "Siguiente" y "Regresar"
const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");

const inputsSinRequired = document.querySelectorAll("input:not([required])");

// Seleccionar todos los campos de selección (select) dentro de la primera sección del formulario
const allSelect = document.querySelectorAll(".first select")
const selectSinRequired = document.querySelectorAll("select:not([required])")

// Event listener para el botón de "Siguiente"
nextBtn.addEventListener("click", () => {
  let allInputsFilled = true;
  let allSelectFilled = true;

  allInput.forEach(input => {
      if (input.hasAttribute("required") && input.value === "") {
        allInputsFilled = false;
      }
  });

  allSelect.forEach(select => {
    if (select.hasAttribute("required") && select.value === "") {
      allSelectFilled = false;
    }
  });

  if (allInputsFilled && allSelectFilled) {
      form.classList.add('secActive');
  } else {
      form.classList.remove('secActive');
  }
});

// Event listener para el botón de "Regresar"
backBtn.addEventListener("click", () => form.classList.remove('secActive'));