/* objeto con propiedades y métodos: */
const celular = {
    marca: 'Samsung',
    modelo: 'Galaxy S24 Ultra',
    bateria: 50,
    cargarBateria: function() {
      this.bateria += 10;
      console.log(`Nivel de batería: ${this.bateria}%`);
    }
  }

  // Simulación de carga de batería
  console.log(`Nivel de batería Actual: ${celular.bateria}%`);
  celular.cargarBateria(); // Nivel de batería: 60%
  celular.cargarBateria(); // Nivel de batería: 70%
  celular.cargarBateria(); // Nivel de batería: 80%