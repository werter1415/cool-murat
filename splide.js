document.addEventListener('DOMContentLoaded', function() {
    new Splide('#splide1', {
        type: 'loop',
        breakpoints: {
            1920: { perPage: 4 },
            768: { perPage: 3 },
            460: { perPage: 2 }
        },
        perMove: 1,
        gap: '1rem',
        pagination: true,
        arrows: true
    }).mount();
    new Splide('#splide2', {
        type: 'loop',
        breakpoints: {
            1920: { perPage: 4 },
            768: { perPage: 3 },
            460: { perPage: 2 }
        },
        perMove: 1,
        gap: '1rem',
        pagination: true,
        arrows: true
    }).mount();
});

