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

const routesBlock = document.querySelector('.routes-block');
routesBlock.addEventListener('click',function(event){
    const currentTarget = event.target;
    if (currentTarget.classList.contains('button-click')){
        const blocks = document.querySelectorAll('.block');
        blocks.forEach(function(block){
            block.classList.remove('active');
        })
        currentTarget.parentNode.classList.add('active')
        console.log(currentTarget.dataset.truckClassname);
        const truck = document.querySelector('.truck');
        truck.classList.remove('move-1', 'move-2', 'move-3', 'move-4');
        truck.classList.add(currentTarget.dataset.truckClassname)
    }
})










