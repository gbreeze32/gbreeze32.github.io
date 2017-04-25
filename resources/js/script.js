$(document).ready(function(){
    /* for sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }   
    }, {
  offset: '60px'
});

    /* for scroll down buttons */
    $('.js--scroll-to-plan').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    
    /* navigation scroll */
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
    
    /* animation on scroll */
   $('.js--wp-1').waypoint(function(direction){
       $('.js--wp-1').addClass('animated fadeIn');
   },{
       offset:'50%'
   });
    
    $('.js--wp-2').waypoint(function(direction){
       $('.js--wp-2').addClass('animated fadeInUp');
   },{
       offset:'50%'
   });
    
    $('.js--wp-3').waypoint(function(direction){
       $('.js--wp-3').addClass('animated fadeIn');
   },{
       offset:'50%'
   });
    
    $('.js--wp-4').waypoint(function(direction){
       $('.js--wp-4').addClass('animated pulse');
   },{
       offset:'50%'
   });
    
   /* monile nav */
    $('.js--nav-icon').click(function(){
        var nav=$('.js--main-nav');
        var icon=$('.js--nav-icon i');
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    
    /* Maps */
  var map= new GMaps({
      div: '.map',
      lat: 40.4315449,
      lng: -80.05,
      zoom: 12
    });
    
    map.addMarker({
  lat: 40.4315449,
  lng: -80.1209281,
  title: 'Pittsburgh ',
  infoWindow: {
      content: '<p>Our Pittsburgh HQ</p>'
    }
});
    
});