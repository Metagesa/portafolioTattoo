document.addEventListener('DOMContentLoaded', function () {
    var sliders = [
        '#carrusel-sobreMi',
        '#carrusel-trabajos'
    ];

    sliders.forEach(function (slider) {
        tns({
            container: slider,
            items: 3,
            slideBy: 1,
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
});