$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:100,
        nav:true,
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












