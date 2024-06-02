document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        // Remover clases de errores previos
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.classList.remove('error');
        });

        // Validación del correo electrónico
        const email = document.getElementById('email').value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido.');
            document.getElementById('email').classList.add('error');
            event.preventDefault();
            return;
        }

        // Validación del campo de imagen (opcional)
        const fileInput = document.getElementById('referencia');
        const file = fileInput.files[0];
        if (file && file.size > 3 * 1024 * 1024) { // 3MB
            alert('La imagen no debe pesar más de 3MB.');
            document.getElementById('referencia').classList.add('error');
            event.preventDefault();
            return;
        }

        // Validación de campos obligatorios
        const camposObligatorios = document.querySelectorAll('.obligatorio');
        camposObligatorios.forEach(campo => {
            const valorCampo = campo.value.trim();
            if (!valorCampo) {
                alert('Por favor, completa todos los campos obligatorios.');
                campo.classList.add('error');
                event.preventDefault();
            }
        });
    });
});
