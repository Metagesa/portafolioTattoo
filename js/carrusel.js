document.addEventListener('DOMContentLoaded', function () {
    var sliderSobreMi = tns({
        container: '#carrusel-sobreMi',
        items: 1,
        slideBy: 1,
        center: true,
        gutter: 10,
        autoplay: false,
        autoplayButtonOutput: false,
        controls: false,
        nav: false
    });
    var sliderTrabajos = tns({
        container: '#carrusel-trabajos',
        items: 3,
        slideBy: 1,
        gutter: 19,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 4000,
        speed: 3000,
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