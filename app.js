// app.js

document.addEventListener('DOMContentLoaded', () => {
  const inputIdentificacion = document.getElementById('identificacion');
  const botonConsultar = document.getElementById('consultar');
  const resultadoDiv = document.getElementById('resultado');

  // Asegurar que los elementos existen antes de añadir listeners
  if (!inputIdentificacion || !botonConsultar || !resultadoDiv) {
    console.error('No se encontraron los elementos HTML necesarios.');
    return;
  }

  // Validación de entrada para permitir solo dígitos
  inputIdentificacion.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/\D/g, '');
  });

  botonConsultar.addEventListener('click', () => {
    const numeroIdentificacion = inputIdentificacion.value;
    resultadoDiv.textContent = ''; // Limpiar resultados previos

    if (numeroIdentificacion.length < 2) {
      resultadoDiv.textContent = 'Por favor, ingrese un número de identificación válido.';
      return;
    }

    const ultimosDosDigitos = numeroIdentificacion.slice(-2);
    const fechaLimite = calendarioDian[ultimosDosDigitos];

    if (fechaLimite) {
      const [dia, mesNumerico, anio] = fechaLimite.split('/');
      const mesTexto = meses[mesNumerico];
      resultadoDiv.innerHTML = `Su fecha máxima para presentar su Renta Persona Natural es el **${dia} de ${mesTexto} del ${anio}**`;
    } else {
      resultadoDiv.textContent = 'Información no encontrada';
    }
  });
});