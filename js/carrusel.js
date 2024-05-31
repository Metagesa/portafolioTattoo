// Variables para el carrusel
let carruselElements;
let carruselFrenado = false;
let tiempoFreno = 0;

function setupCarrusel() {
    // Selecciona todos los elementos con la clase 'carrusel'
    carruselElements = selectAll('.carrusel');

    // Recorre todos los elementos del carrusel y crea el carrusel
    carruselElements.forEach((carrusel) => {
        createCarrusel(carrusel);
    });
}

// Función para crear un carrusel a partir de un elemento HTML
function createCarrusel(carrusel) {
    // Obtener todas las imágenes dentro del carrusel
    let items = carrusel.elt.children;

    // Asegurarse de que haya al menos un elemento en el carrusel
    if (items.length > 0) {
        // Configurar el carrusel
        carrusel.style('position', 'relative');
        carrusel.style('overflow', 'hidden');

        // Obtener la altura del carrusel
        let carruselHeight = carrusel.elt.offsetHeight;

        // Calcular el ancho total del carrusel para mantener la relación de aspecto 16:9
        let anchoTotal = 0;
        for (let i = 0; i < items.length; i++) {
            // Ajustar el tamaño de cada elemento para mantener la relación de aspecto 16:9
            let nuevoAncho = carruselHeight * (16 / 9);
            items[i].style.width = `${nuevoAncho}px`;
            items[i].style.height = `${carruselHeight}px`;
            items[i].classList.add("carrusel-item");

            anchoTotal += nuevoAncho;
        }

        // Posición inicial para comenzar a mostrar los elementos
        let xPos = 0;

        // Recorrer todos los elementos y posicionarlos dentro del carrusel
        for (let i = 0; i < items.length; i++) {
            items[i].style.position = 'absolute';

            // Limitar la posición x para evitar desbordamiento horizontal
            if (xPos + items[i].offsetWidth <= anchoTotal) {
                items[i].style.left = `${xPos}px`;
            } else {
                // Si excede el ancho total, ocultar el elemento
                items[i].style.display = 'none';
            }

            // Incrementar la posición x para el siguiente elemento
            xPos += items[i].offsetWidth; // Usamos offsetWidth para considerar el tamaño real del elemento
        }
    }
}

// Función para mover el carrusel
function moverCarrusel(velocidad) {
    carruselElements.forEach((carrusel) => {
        let items = carrusel.elt.children;
        let primerItem = items[0];
        let ultimoItem = items[items.length - 1];

        // Mover cada elemento hacia la izquierda
        for (let i = 0; i < items.length; i++) {
            let currentLeft = parseFloat(items[i].style.left);
            items[i].style.left = `${currentLeft - velocidad}px`;
        }

        // Comprobar si el primer elemento ha salido completamente del carrusel
        if (parseFloat(primerItem.style.left) + primerItem.offsetWidth < 0) {
            // Mover el primer elemento al final del carrusel
            primerItem.style.left = `${parseFloat(ultimoItem.style.left) + ultimoItem.offsetWidth}px`;
            // Mover el primer elemento al final de la lista de hijos del carrusel
            carrusel.elt.appendChild(primerItem);
        }
    });
}

// Nueva función para mover el carrusel con pausas
function moverCarruselFrena(velocidad, pausa) {
    carruselElements.forEach((carrusel) => {
        let items = carrusel.elt.children;
        let primerItem = items[0];
        let ultimoItem = items[items.length - 1];

        // Calcular el ancho total del carrusel
        let anchoTotal = Array.from(items).reduce((total, item) => total + item.offsetWidth, 0);

        if (!carruselFrenado) {
            // Mover cada elemento hacia la izquierda
            for (let i = 0; i < items.length; i++) {
                let currentLeft = parseFloat(items[i].style.left);
                items[i].style.left = `${currentLeft - velocidad}px`;
            }

            // Comprobar si el primer elemento ha salido completamente del carrusel
            if (parseFloat(primerItem.style.left) + primerItem.offsetWidth < 0) {
                // Mover el primer elemento al final del carrusel
                primerItem.style.left = `${parseFloat(ultimoItem.style.left) + ultimoItem.offsetWidth}px`;
                // Mover el primer elemento al final de la lista de hijos del carrusel
                carrusel.elt.appendChild(primerItem);
            }
        }

        // Pausar el carrusel en el centro de cada elemento
        let posicionActual = Math.abs(parseFloat(primerItem.style.left));
        let centroCadaItem = anchoTotal / items.length;
        let indexElementoActual = Math.floor(posicionActual / centroCadaItem);
        let diferencia = posicionActual - (centroCadaItem * indexElementoActual);

        if (!carruselFrenado && diferencia < velocidad) {
            carruselFrenado = true;
            setTimeout(() => {
                carruselFrenado = false;
            }, pausa);
        }
    });
}
