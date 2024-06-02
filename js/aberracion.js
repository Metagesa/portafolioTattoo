// Variables para la aberración cromática aplicada como sombras de colores
// Variables para la función noise (escala y posición)
let perlinX, perlinY = 0.1;
let escalaPerlin = 0.0025;

// Distancia que la sombra puede tener del elemento
let distanciaSombra = 10;
// Blur para la sombra
let blureadoSombra = 2;
// Variable para seleccionar los elementos que llevan el efecto
let aberracionElements;

// Función para inicializar el efecto. Se buscan todos los elementos con la clase aberracion y se inicializa la posición del noise al azar
function setupAberracion() {
  aberracionElements = selectAll('.aberracion');
  perlinX = random(100);
  perlinY = random(100);
}

// Función que aplica 3 sombras, cada una está mapeada a una posición distinta de la función noise para simular movimientos individuales
function aplicarAberracion() {
  aberracionElements.forEach((el, index) => {
    // La sombra roja se mapea de la posición seteada en perlinX, perlinY a una posición relativa al elemento en pixeles -distanciaSombra, distanciaSombra
    // Esto significa que la sombra va a moverse a una distancia seteada por la variable distanciaSombra, en un patrón de movimiento definido por noise
    let rojoX = map(noise(perlinX), 0, 1, -distanciaSombra, distanciaSombra);
    let rojoY = map(noise(perlinY), 0, 1, -distanciaSombra, distanciaSombra);
    let rojo = `${rojoX}px ${rojoY}px ${blureadoSombra}px rgba(255, 0, 0, 0.5)`;

    // Lo mismo la sombra verde
    let verdeX = map(noise(perlinX + 1000), 0, 1, -distanciaSombra, distanciaSombra);
    let verdeY = map(noise(perlinY + 1000), 0, 1, -distanciaSombra, distanciaSombra);
    let verde = `${verdeX}px ${verdeY}px ${blureadoSombra}px rgba(0, 255, 0, 0.5)`;

    // y lo mismo la azul
    let azulX = map(noise(perlinX + 2000), 0, 1, -distanciaSombra, distanciaSombra);
    let azulY = map(noise(perlinY + 2000), 0, 1, -distanciaSombra, distanciaSombra);
    let azul = `${azulX}px ${azulY}px ${blureadoSombra}px rgba(0, 0, 255, 0.5)`;

    // Aplicamos las 3 sombras al elemento y movemos la posición de referencia de la función noise
    el.style('text-shadow', `${rojo}, ${verde}, ${azul}`);
    perlinX += escalaPerlin;
    perlinY += escalaPerlin;
  });
}

// Cuando haya un scroll, se mueve rápidamente el efecto
function scrollAberracion(event) {
  let delta = event.delta;
  perlinX += delta * escalaPerlin * 0.7;
  perlinY += delta * escalaPerlin * 0.7;
}
