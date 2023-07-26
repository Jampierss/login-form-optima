function formatearInput() {
    const numeroSinEspacios = numeroCelularInput.value.replace(/\s/g, '');

    if (numeroSinEspacios.length > 9) {
      numeroCelularInput.value = numeroSinEspacios.slice(0, 9);
    } else {
      const numeroFormateado = numeroSinEspacios.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
      numeroCelularInput.value = numeroFormateado;
    }
  }

const numeroCelularInput = document.getElementById("celular")
numeroCelularInput.addEventListener('input', formatearInput)
