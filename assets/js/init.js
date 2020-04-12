(function($) {
    "use strict";
    var win = $(window);
    win.scroll(function() {
        if (win.width() > 767) {
            var winTop = win.scrollTop();
            var sticky = $('#headerTop').outerHeight();
            if(winTop >= sticky){
                $("#headerTop").addClass("header-top-ch_sticky");
            } else {
                $("#headerTop").removeClass("header-top-ch_sticky");
            }
        } 
    });
    $('.section-testimonials--carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 6000,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.gallery-item').magnificPopup({
        type: 'image',
        mainClass: 'mfp-with-zoom', 
        gallery:{
            enabled:true
        },
        zoom: {
            enabled: true, 
            duration: 300,
            easing: 'ease-in-out'
        }
    });
    /* SUBSCRIBE FORM */
    
    /* SMOOTH SCROLL */
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[class="anchor"]')
        .not('[href*="#item"]') // for bootstrap accordion
        .on('click' , function(event) {
            if ( location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname ) {
                var trigger = this;
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1200, function() {
                        window.location.href = trigger.href;
                    });
                }
            }
        });
    /* MENU DROPDOWN */
    // $('.navbar-nav .dropdown  > a').on('click hover', function(e) {
    //     if ((win.width() <= 1039) && (win.width() >= 768)) {
    //         e.preventDefault();
    //         window.location = this.href;
    //     }
    // });
    // $('.navbar-nav .dropdown  > a').on('click hover', function(e) {
    //     if ((win.width() > 1039)) {
    //         e.preventDefault();
    //         window.location = this.href;
    //     }
    // });
    $('.navbar-nav .dropdown  > .dropdown-toggle').on('click', function(e) {
        if ((win.width() <= 767)) {
            e.preventDefault();
            $(this).parent().find('.dropdown-menu').toggleClass('show');
            $(this).toggleClass('dropdown-toggle-opened');
        }
    });
     /* popup form */
    /* PRELOADER */
    setTimeout(function() {
        $('.loader').fadeOut();
        $('.page-load').fadeOut();
    }, 2000);
})(jQuery);