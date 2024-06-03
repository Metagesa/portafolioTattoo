document.addEventListener('DOMContentLoaded', function () {
    var sliderSobreMi = tns({
        container: '#carrusel-sobreMi',
        items: 1,
        slideBy: 1,
        autoplay: false,
        autoplayButtonOutput: false,
        controls: false,
        gutter: 10,
        nav: false,
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

    var sliderTrabajos = tns({
        container: '#carrusel-trabajos',
        items: 3,
        slideBy: 1,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 4000,
        speed: 3000,
        gutter: 10,
        controls: false,
        nav: false,
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
});