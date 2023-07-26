function obtenerDatos() {
    const email = document.getElementById("emailDATA");
    // Almacenar los datos en localStorage
    localStorage.setItem("email", email.value);

    // Redirigir a la otra página que mostrará los datos
    // window.location.href = "form.html";
  }