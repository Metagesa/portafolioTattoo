function setup() {
    // Configuración inicial
    noCanvas();
    
    // Inicializar funciones de aberración y carrusel
    setupAberracion();
  }
  
  function draw() {
    // Aplicar efecto de aberración
    aplicarAberracion();
  }
  
  function mouseWheel(event) {
    // Scroll para la aberración
    scrollAberracion(event);
  }
