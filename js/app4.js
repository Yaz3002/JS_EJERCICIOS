/* uso de forEach y filter: */
const nombres = ['Juan', 'Pepito', 'Pamela', 'Cueva', 'Jennie', 'Magaly'];

// Uso de forEach para mostrar cada nombre en la consola
console.log('Nombres:');
nombres.forEach(nombre => {
  console.log(nombre);
});

// Uso de filter para obtener nombres con más de 5 letras
const nombresLargos = nombres.filter(nombre => nombre.length > 5);
console.log('Nombres con más de 5 letras:', nombresLargos);