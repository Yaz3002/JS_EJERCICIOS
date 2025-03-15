/* función anónimas y flecha: */
const cuadrado = function(numero) {
    return numero * numero;
  }
  
  console.log(cuadrado(8)); // Salida: 64
  
  // Conversión a función flecha
  const cuadradoFlecha = (numero) => numero * numero;
  console.log(cuadradoFlecha(6)); // Salida: 36