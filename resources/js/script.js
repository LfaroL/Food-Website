$(document).ready(function () {
    
    /* Sticky navigation bar */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });
    
    
    /* Scroll on button functions */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
                            
          
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
                            
          
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
                            
          
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
                            
                            
    
    
    /* Mobile nav */
    
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav'),
            icon = $('.js--nav-icon i');
 
    
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    
    
    
    /* Google Maps */
    
    var map = new GMaps({
        div: '.map',
        lat: 49.1929879,
        lng: -122.71120745,
        zoom: 12
    });
    
    map.addMarker({
        lat: 49.18736,
        lng: -122.803843,
        title: 'Surrey',

        infoWindow: {
            content: '<p>Our area</p>'
        }
        /*click: function(e) {
        alert('You clicked in this marker');
        }*/
    });
    
            
    /* Navigation scroll */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
       
/*   
    $('h1').click(function () {
        
        $(this).css('background-color', '#ff0000');
    });
*/
    
});