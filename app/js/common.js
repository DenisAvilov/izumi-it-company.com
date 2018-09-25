$(document).ready(function(){
    $('.top-slider').owlCarousel({
        loop:true,

        nav:false,
        dots:false,
        itemClass : "top-wrap",
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    });




});