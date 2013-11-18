var carousel = {
    animationTime: 1000,
    fadeTime: 2000,
    containerClass: 'carousel',
    stopOnHover: true,
    currentImage: 0,
    images: [
        '/img/img1.jpg',
        '/img/img2.jpg'
    ]
}

function carouselAnim() {
    $('.'+carousel.containerClass+'_slider').animate(
        { 'left': '+=150'},
        {
            duration: carousel.animationTime,
            complete: function () {
                $('.'+carousel.containerClass+'_image:last').prependTo('.'+carousel.containerClass+'_slider');
                $('.'+carousel.containerClass+'_slider').css('right', 0);
            }
        }
    );

}

$(document).ready(
    function () {
        $('<div/>', {
            class: carousel.containerClass+'_slider'
        }).css('width', carousel.images.length*$('.' +carousel.containerClass).innerWidth()).appendTo($('.'+carousel.containerClass));
        for (var i = 0; i < carousel.images.length; i++) {
            $('<div/>', {
                class: carousel.containerClass+'_image'
            }).css('background-image', 'url('+carousel.images[i]+')').appendTo($('.'+carousel.containerClass+'_slider'));

        }
        setInterval(function () { carouselAnim() }, carousel.fadeTime);
    }
);
