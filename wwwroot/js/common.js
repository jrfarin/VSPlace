// ===== ScrollToTop Button ===== //

window.addEventListener('scroll', scrollBtnFunction);

function scrollBtnFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.querySelector('.btn-scroll-top').style.display = 'block';
    } else {
        document.querySelector('.btn-scroll-top').style.display = 'none';
    }
}

document.querySelector('.btn-scroll-top').addEventListener('click', scrollToTop);
function scrollToTop() {
     let scrollDuration = 300;
     let scrollStep = -window.scrollY / (scrollDuration / 15);
     let scrollInterval = setInterval(function() {
         if ( window.scrollY != 0 ) {
         window.scrollBy( 0, scrollStep );
         }
         else clearInterval(scrollInterval);
     },15);
}

/* Wishlist Animation */
let btnWish = document.querySelectorAll('.wishIconAnimate button');
        
btnWish.forEach(function(item) {
    item.addEventListener('click', function(e){
        e.preventDefault();
        this.classList.toggle('pulse-animation')
    } , {
        once: true,
    })
})

 /* Accordion Icons Up/Down */
 $(function(){
    $(".collapse.show").each(function(){
        $(this).prev(".vc-card-header").find(".fas").addClass("fa-chevron-up").removeClass("fa-chevron-down");
    });
    
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".vc-card-header").find(".fas").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".vc-card-header").find(".fas").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    });
})

/* Navigation Desktop */
$(function(){
    $(window).resize(function() {
        if ($(window).width() >= 1201) {
            // when you hover a toggle show its dropdown menu
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show"); 
            });
            // hide the menu when the mouse leaves the dropdown
            $( ".navbar .dropdown-menu" ).mouseleave(function() {
                $(this).removeClass("show");  
            });
        }	
    });  
})


// ===== Navigation Open/Close SideNav ===== //
// document.querySelector('.vc-menu').addEventListener('click', openNav);  
// function openNav() {
//     document.getElementById("vcSidenav").style.width = "70%";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// };

// document.querySelector('.closebtn').addEventListener('click', closeNav);
// function closeNav() {
//     document.getElementById("vcSidenav").style.width = "0";
//     document.body.style.backgroundColor = "rgba(0,0,0,0)";
// };

// ===== Carousel Glider Home ===== //
// window.addEventListener('load', function() {
//     new Glider(document.querySelector('.glider-home'), {
//         slidesToShow : 4,
//         slidesToScroll : 1,
//         draggable: true,
//         arrows: {
//            prev: '.glider-prev',
//            next: '.glider-next'
//         }
//     });
// })

