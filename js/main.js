document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-respuesta');
        const icono = answer.parentNode.querySelector('i');

        document.querySelectorAll('.faq-respuesta').forEach(respuesta => {
            const iconn = respuesta.parentNode.querySelector('i');

            if (respuesta != answer) {
                respuesta.classList.remove("visible");
                iconn.classList.remove("fa-caret-up");
                iconn.classList.add("fa-caret-down");
            }
        });

        answer.classList.toggle("visible");

        if (answer.classList.contains("visible")) {
            icono.classList.remove("fa-caret-down");
            icono.classList.add("fa-caret-up");
        } else {
            icono.classList.remove("fa-caret-up");
            icono.classList.add("fa-caret-down");
        }
    });
});