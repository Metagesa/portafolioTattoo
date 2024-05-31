function setup() {
    // Configuración inicial
    noCanvas();
    
    // Inicializar funciones de aberración y carrusel
    setupAberracion();
    setupCarrusel();
  }
  
  function draw() {
    // Aplicar efecto de aberración
    aplicarAberracion();
    moverCarrusel(1);
  }
  
  function mouseWheel(event) {
    // Scroll para la aberración
    scrollAberracion(event);
  }

  function windowResized() {
    setupCarrusel();
  }
  