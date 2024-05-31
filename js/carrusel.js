$(document).ready(function () {
    var carruselSobreMi = $('#carrusel-sobreMi');
    carruselSobreMi.owlCarousel({
        items: 3,
        loop: true,
        checkVisible: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });
    var carruselTrabajos = $('#carrusel-trabajos');
    carruselTrabajos.owlCarousel({
        items: 3,
        loop: true,
        checkVisible: false,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 5,
            }
        }
    });
});