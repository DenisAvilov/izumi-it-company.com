$(document).ready(function(){
    $('.top-slider').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 2000,
        nav:false,
        dots:false,
        itemClass : "top-wrap",
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    //second slider
    $('.slider-second').owlCarousel({
        loop:true,
        navText: ["<div><i class='fas fa-chevron-left'></i></div>"," <div><i class='fas fa-chevron-right'></i></div>"],
        nav:false,
        dots:false,
        itemClass : "second-wrap",
        autoplay: true,
        autoplayTimeout: 2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
     //popup

    $(window).scroll(()=> {
        let height = $(window).scrollTop();
        if(height > 100){$('.top-link').css('backgroundColor', '#001a33');}
          else{  $('.top-link').css('backgroundColor','');}




    });


});