$(document).ready(function(){
    // owl-carusel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:100,
        nav:true,
        autoplay:true,
        navText: [ '', ' ' ],
        responsive:{
            320:{
                items:1
            },

            767:{
                items:2
            }
        }
    });

});












