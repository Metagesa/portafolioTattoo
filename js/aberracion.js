// Variables para la aberración cromática
let perlinX, perlinY = 0.1;
let escalaPerlin = 0.0025;
let distanciaSombra = 10;
let blureadoSombra = 2;
let aberracionElements;

function setupAberracion() {
  aberracionElements = selectAll('.aberracion');
  perlinX = random(100);
  perlinY = random(100);
}

function aplicarAberracion() {
  aberracionElements.forEach((el, index) => {
    let rojoX = map(noise(perlinX), 0, 1, -distanciaSombra, distanciaSombra);
    let rojoY = map(noise(perlinY), 0, 1, -distanciaSombra, distanciaSombra);
    let rojo = `${rojoX}px ${rojoY}px ${blureadoSombra}px rgba(255, 0, 0, 0.5)`;

    let verdeX = map(noise(perlinX + 1000), 0, 1, -distanciaSombra, distanciaSombra);
    let verdeY = map(noise(perlinY + 1000), 0, 1, -distanciaSombra, distanciaSombra);
    let verde = `${verdeX}px ${verdeY}px ${blureadoSombra}px rgba(0, 255, 0, 0.5)`;

    let azulX = map(noise(perlinX + 2000), 0, 1, -distanciaSombra, distanciaSombra);
    let azulY = map(noise(perlinY + 2000), 0, 1, -distanciaSombra, distanciaSombra);
    let azul = `${azulX}px ${azulY}px ${blureadoSombra}px rgba(0, 0, 255, 0.5)`;

    el.style('text-shadow', `${rojo}, ${verde}, ${azul}`);
    perlinX += escalaPerlin;
    perlinY += escalaPerlin;
  });
}

function scrollAberracion(event) {
  let delta = event.delta;
  perlinX += delta * escalaPerlin * 0.7;
  perlinY += delta * escalaPerlin * 0.7;
}
