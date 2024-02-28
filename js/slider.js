const slider = () => {
    const swiper = new Swiper('.swiper', {
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        effect: "fade",
        speed: 1000,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
}

slider()