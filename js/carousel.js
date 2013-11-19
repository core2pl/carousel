/*

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
 */

function carousel(config) {

    this.config = config;
    this.animationTime = config.animationTime ? config.animationTime : 1000;
    this.fadeTime = config.fadeTime ? config.fadeTime : 5000;
    this.container = config.container ? $(config.container) : $('.carousel');
    this.stopOnHover = config.stopOnHover ? config.stopOnHover : true;
    this.currentImage = config.currentImage ? config.currentImage: 0;
    this.images = config.images ? config.images : [];
    this.autoPlay = config.autoPlay ? config.autoPlay : true;
    this.direction = config.direction ? config.direction : 'left';
    this.imageClass = config.imageClass ? config.imageClass : 'carousel_image';
    this.sliderClass = config.sliderClass ? config.sliderClass : 'carousel_slider';

//    this.extendDOM();
//    this.extendDOM2();
    if (this.autoPlay == true) {

        $(this.container).attr('_carousel', this);
        log($(this.container));
//        var obj = $(this.container).prop('_carousel');
//        log(obj._carousel);
    }

}

carousel.prototype.play = function () {
//    $.fn.delay(2000);
//    this.animate();
}

carousel.prototype.pause = function () {

}

carousel.prototype.extendDOM = function () {
    if (this.direction == 'left') {
        $('<div/>', {
            class: this.sliderClass,
            width: this.images.length*$(this.container).innerWidth()
        }).appendTo($(this.container));
        for (var i in this.images) {
            $('<div/>', {
                class: this.imageClass
            }).css('background-image', 'url('+this.images[i]+')').appendTo($('.'+this.sliderClass));
        }
    } else if (this.direction == 'right') {
        $('<div/>', {
            class: this.sliderClass,
            width: this.images.length*$(this.container).innerWidth()
        }).css(
               'left', 0-(this.images.length-1)*$(this.container).innerWidth()
            ).appendTo($(this.container));
        for (var i in this.images) {
            $('<div/>', {
                class: this.imageClass
            }).css('background-image', 'url('+this.images[i]+')').prependTo($('.'+this.sliderClass));
        }
    }
}

carousel.prototype.complete = function (a) {
    log(this);
    $(this.imageClass+':first').appendTo($(this.sliderClass));
    $(this.sliderClass).css('left', 0);
//    setInterval(this.animate, 3000);
//    $.fn.delay(3000);
   // this.animate();
}

carousel.prototype.animate = function (a) {
    log(this.direction);
    log(this.direction);
    if (this.direction == 'left') {
        $('.'+this.sliderClass).animate(
            {
                'left': '-=150'
            },
            {
                duration: this.animationTime,
                complete: this.complete()/*function () {
                    $(this.imageClass+':first').appendTo($(this.sliderClass));
                    $(this.sliderClass).css('left', 0);
                    $.fn.delay(3000);
                   this.animate();
                }*/
            }
        );
    } else if (this.direction == 'right') {

    }
}

var config = {
    animationTime: 1000,
    fadeTime: 2000,
    containerClass: '.carousel',
    stopOnHover: true,
    currentImage: 0,
    images: [
        '/img/img1.jpg',
        '/img/img2.jpg'
    ],
    direction: 'left'
}

$(document).ready(
    function () {
        var c = new carousel(config);
    }
);

//c.play();

carousel.prototype.extendDOM2 = function () {
    if (this.direction == 'left') {
        $('<div/>', {
            class: this.sliderClass,
            width: this.images.length*$(this.container).innerWidth()
        }).appendTo($(this.container));
        for (var i in this.images) {
            $('<div/>', {
                class: this.imageClass
            }).css('background-image', 'url('+this.images[i]+')').appendTo($('.'+this.sliderClass));
        }
    } else if (this.direction == 'right') {
        $('<div/>', {
            class: this.sliderClass,
            width: this.images.length*$(this.container).innerWidth()
        }).css(
                'left', 0-(this.images.length-1)*$(this.container).innerWidth()
            ).appendTo($(this.container));
        for (var i in this.images) {
            $('<div/>', {
                class: this.imageClass
            }).css('background-image', 'url('+this.images[i]+')').prependTo($('.'+this.sliderClass));
        }
    }
    //$(this.container).attr('_carousel', this);
}