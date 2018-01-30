$(document).ready(function() {


    /* For the sticky navigation */
    $('.js--section-portfolio').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-challenge').waypoint(function(direction) {
        $('.js--wp-challenge').addClass('animated bounceIn');
    }, {
        offset: '50%'
    });
    
    
   var fadeInUp = function(classSelector, offset){
       $('.js--wp-2').waypoint(function(direction){
           $(classSelector).addClass('animated fadeInUp');
       },{
           offset: offset
       });
   }
        
  fadeInUp(".js--wp-2","60%");   
  fadeInUp(".js--wp-6","50%"); 
  fadeInUp(".js--wp-7","40%"); 
  fadeInUp(".js--wp-8","30%"); 
  fadeInUp(".js--wp-9","20%"); 
  fadeInUp(".js--wp-10","10%");   
         
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});

/* Mobile navigation */









var stop = false;

$(function() {

	  // apply spans
      $("h1").lettering();

      // hack to get animations to run again
      $(".redraw").click(function() {
        var el = $(this),
           prev = el.prev(),
           newone = prev.clone();
        el.before(newone);
        $("." + prev.attr("class") + ":first").remove();
      });

	  var text = $("#jquerybuddy"),
		numLetters = text.find("span").length;

	  function randomBlurize() {
      if (stop) {
        return;
      }

  		text.find("span:nth-child(" + (Math.floor(Math.random()*numLetters)+1) + ")")
  		    .animate({
  		      'textShadowBlur': Math.floor(Math.random()*15)+2,
  		      'textShadowColor': 'rgba(242, 120, 0' + (Math.floor(Math.random()*10)+75) + ')'
  		    });
  		// Call itself recursively
  		setTimeout(randomBlurize, 100);
	  }

    // Call once
    randomBlurize();
    $('#jquerybuddy').mouseenter(function() {
        stop = true;
        text.text('Heng Gu',5000);
    }).mouseleave(function() {
        stop = false;
        $("h1").lettering();

        // hack to get animations to run again
        $(".redraw").click(function() {
          var el = $(this),
             prev = el.prev(),
             newone = prev.clone();
          el.before(newone);
          $("." + prev.attr("class") + ":first").remove();
        });
        randomBlurize();
    });
	 });



/* popup window */
// Get the modal
var modals = document.getElementsByClassName('modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName('myImg');
var modalImgs = document.getElementsByClassName("modal-content");
var captionTexts = document.getElementsByClassName("caption");
var spans = document.getElementsByClassName("close");

for (var i = 0; i < imgs.length; i++) {
  var index = i;
  imgs[i].onclick = function() {
      $('nav').removeClass('sticky');
      modals[index].style.display = "block";
      modalImgs[index].src = this.src;
      captionTexts[index].innerHTML = this.alt;
  };

  // When the user clicks on <span> (x), close the modal
  spans[index].onclick = function() {
    modals[index].style.display = "none";
    $('nav').addClass('sticky');
  }
}
/* ------------ */
