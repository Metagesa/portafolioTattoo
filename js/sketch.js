// Sketch de p5js

// setup se ejecuta una sola vez al cargar la página
function setup() {
    // noCanvas es para que p5js no nos cree un canvas, ya que no queremos generar imágenes
    noCanvas();
    
    // Inicializar variables de aberración
    setupAberracion();
  }
  
  // draw se ejecuta constantemente, a menos que se especifique una pausa, framerate fijo, o se fueze a detener.
  function draw() {
    // Aplicar efecto de aberración
    aplicarAberracion();
  }
  
  // mouseWheel es básicamente un eventListener para la rueda del mouse (por más que no haya scroll)
  function mouseWheel(event) {
    // Scroll para la aberración
    scrollAberracion(event);
  }
