document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

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
            return;
        }

        // Validación del campo de imagen
        const fileInput = document.getElementById('referencia');
        const file = fileInput.files[0];
        if (file && file.size > 3 * 1024 * 1024) { // 3MB
            alert('La imagen no debe pesar más de 3MB.');
            document.getElementById('referencia').classList.add('error');
            return;
        }

        // Validación de campos obligatorios
        const camposObligatorios = document.querySelectorAll('.obligatorio');
        let allFieldsValid = true;
        camposObligatorios.forEach(campo => {
            const valorCampo = campo.value.trim();
            if (!valorCampo) {
                alert('Por favor, completa todos los campos obligatorios.');
                campo.classList.add('error');
                allFieldsValid = false;
            }
        });

        if (!allFieldsValid) {
            return;
        }

        const formData = new FormData(form);

        // Datos a enviar en el correo. Las imagenes no se envian porque el servicio de emailJS no lo permite, es funcion de pago.
        const emailParams = {
            nombre: formData.get('nombre'),
            email: formData.get('email'),
            mensaje: formData.get('mensaje'),
        };

        emailjs.send('service_zfol05y', 'template_dof3w2b', emailParams)
            .then(function(response) {
                alert('Email enviado con éxito!');
            }, function(error) {
                console.error('Error al enviar el email:', error);
                alert('Fallo al enviar el email. Por favor, inténtelo de nuevo más tarde.');
            });
    });
});
