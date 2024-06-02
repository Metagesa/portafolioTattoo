document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-respuesta');
        const icono = answer.parentNode.querySelector('i');

        document.querySelectorAll('.faq-respuesta').forEach(respuesta => {
            const iconn = respuesta.parentNode.querySelector('i');

            // si el elemento no es el que se clickeó, se resetea a valores predeterminados
            if (respuesta != answer) {
                respuesta.classList.remove("visible");
                iconn.classList.remove("fa-caret-up");
                iconn.classList.add("fa-caret-down");
            }
        });

        // cambiar la visibilidad de la respuesta del elemento clickeado

        answer.classList.toggle("visible");

        // si la respuesta se hizo visible con el toggle, se saca el icono que apunta abajo y se agrega el que apunta hacia arriba, sino se hace lo contrario

        if (answer.classList.contains("visible")) {
            icono.classList.remove("fa-caret-down");
            icono.classList.add("fa-caret-up");
        } else {
            icono.classList.remove("fa-caret-up");
            icono.classList.add("fa-caret-down");
        }
    });
});