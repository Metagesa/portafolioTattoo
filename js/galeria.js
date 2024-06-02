document.addEventListener('DOMContentLoaded', function () {
    var sliders = [
        '#carrusel-bandas',
        '#carrusel-cartoon',
        '#carrusel-fineline',
        '#carrusel-futbol',
        '#carrusel-tradicional',
        '#carrusel-lettering'
    ];

    sliders.forEach(function (slider) {
        tns({
            container: slider,
            items: 3,
            slideBy: 'page',
            autoplay: true,
            autoplayTimeout: 3000,
            speed: 600,
            autoplayHoverPause: false,          
            autoplayButtonOutput:false,
            edgePadding: 50,
            controls: false,
            nav: false,
            mouseDrag:true,
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
