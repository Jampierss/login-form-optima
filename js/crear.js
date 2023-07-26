// Seleccionar el formulario y el botón de "Crear" en el documento
const form_crear = document.querySelector(".container form");
const buttonCreate = document.querySelector('.submit');

// Agregar un event listener al botón de "Crear"
buttonCreate.addEventListener("click", (event) => {
    event.preventDefault();

    const fieldInputs = form.querySelectorAll('input');

    const dataForm = {};

    fieldInputs.forEach(input => {
        dataForm[input.name] = input.value
    });
    
    // Convertir el objeto dataForm a formato JSON
    const jsonData = JSON.stringify(dataForm);
    localStorage.setItem("formData", jsonData);

    // Redireccionar a la página "final.html"
    window.location.href = "final.html";
})

