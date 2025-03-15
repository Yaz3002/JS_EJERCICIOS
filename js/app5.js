/* manipulación de Strings */
function manipularFrase(frase) {
    // Convierte la frase a mayúsculas y minúsculas
    const mayusculas = frase.toUpperCase();
    const minusculas = frase.toLowerCase();
    console.log('Frase en mayúsculas:', mayusculas);
    console.log('Frase en minúsculas:', minusculas);
  
    // Cuenta el número de palabras
    const palabras = frase.split(' ');
    console.log('Número de palabras:', palabras.length);
  
    // Reemplaza una palabra específica por otra
    const fraseReemplazada = frase.replace('siempre', 'nunca');
    console.log('Frase reemplazada:', fraseReemplazada);
  }
  
  manipularFrase('El hola mundo siempre sera inolvidable');