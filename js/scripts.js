$('.close').click(function () {
    $('.od_promo_banner').slideUp(500);
})

// burger menu, Oshovskiy Dima
$('.burger').click(function() {
    $('.burger, .nav-bar').toggleClass('burger_active');
});
var str=document.getElementById('printt').innerHTML;
var i=str.length;

var a=0; // Сколько символов показать в самом начале.
function text() {if(a<=i) {
    document.getElementById('printt').innerHTML = str.substring(0, a);
    a++;
    setTimeout("text()", 100); // Скорость печатания текста
}} text();

// carousel, Peschanskyi
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            375:{
                items:1,
                margin: 0
            },
            530:{
                items:2,
                margin: 0
            },
            767:{
                items:3,
                margin: 0
            },
            991:{
                items:4,
                margin: 0
            },
            1199:{
                items:5,
                margin: 0
            },
            1200:{
                items:5,
                margin: 30
            }
        }
    });
});


//
var str=document.getElementById('printt').innerHTML;
var i=str.length;

var a=0; // Сколько символов показать в самом начале.
function text() {if(a<=i) {
    document.getElementById('printt').innerHTML = str.substring(0, a);
    a++;
    setTimeout("text()", 100); // Скорость печатания текста
}} text();